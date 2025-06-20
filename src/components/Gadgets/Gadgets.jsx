
import { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { useLoaderData, useParams } from 'react-router-dom';

const Gadgets = () => {
    const data = useLoaderData();

    const { category } = useParams()

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                gadget => gadget.category === category
            )
            setGadgets(filteredByCategory)
        }
        else {
            setGadgets(data.slice(0, 9))
        }
    }, [category, data])
    // console.log(data);
    
    return (
        <div>
            <p>Gadget cards....{category}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:flex-3/4'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;
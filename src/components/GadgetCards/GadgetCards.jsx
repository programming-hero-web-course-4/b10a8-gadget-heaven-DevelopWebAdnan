import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const GadgetCards = () => {
    const data = useLoaderData();

    const {category} = useParams()

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if(category) {
            const filteredByCategory = [...data].filter(gadgetCard => gadgetCard.category === category)
    
            setGadgets(filteredByCategory);
        }
        else {
            setGadgets(data.slice(0, 9))
        }

    }, [category, data])
    console.log(data)

    return (
        <div>
            <p>GadgetCards.jsx...{category}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default GadgetCards;
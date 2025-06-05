import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('./gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))

    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-64 md:mt-80 lg:mt-96">Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;
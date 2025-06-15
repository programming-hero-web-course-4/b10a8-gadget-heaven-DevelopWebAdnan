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
            <h2 className="text-4xl font-bold text-center mb-8 md:mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex'>
                <div className="drawer lg:drawer-open flex-1/4">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Categories Sidebar
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-3/4'>
                    {
                        gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
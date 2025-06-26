import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddedGadgets from '../AddedGadgets/AddedGadgets';
import { getStoredCart } from '../../utility/addToCart';

const DashboardTabs = () => {
    // const [cart, setCart] = useState([]);

    // const [cost, setCost] = useState(0);

    // const handleIncreaseCost = price => {
    //     setCost(cost + price)
    // }

    // console.log(allGadgets);

    // useEffect(() => {
    //     const storedCart = getStoredCart();

    //     const storedCartInt = storedCart.map(product_id => parseInt(product_id));

    //     console.log(storedCart, storedCartInt, allGadgets);
    //     const gadgetsInCart = allGadgets.filter(gadgetInCart => storedCartInt.includes(gadgetInCart.product_id))

    //     setCart(gadgetsInCart);

    // }, [allGadgets])

    return (
        <div>
            {/* <Tabs>
                <TabList className="bg-purple-600 text-center">
                    <Tab className="btn btn-xl text-purple-600 rounded-4xl py-2 md:py-4 px-8 md:px-16 mb-6 md:mb-12 mr-3 md:mr-6">Cart</Tab>
                    <Tab className="btn btn-xl btn-outline text-white rounded-4xl py-2 md:py-4 px-8 md:px-16 mb-6 md:mb-12">Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Gadgets in cart: {cart.length}</h2>
                    <div className='flex justify-between items-center mb-4 md:mb-8'>
                        <h4 className='text-2xl font-bold'>Cart</h4>
                        <div className='flex gap-3 md:gap-6 items-center'>
                            <h4 className='text-2xl font-bold'>Total Cost: </h4>
                            <div className='flex gap-2 md:gap-4'>
                                <button className='btn btn-lg btn-outline text-purple-600 font-semibold rounded-4xl'>Sort by Price</button><button onClick={() => handleIncreaseCost()} className='btn btn-lg font-medium rounded-4xl bg-purple-600 text-white'>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            cart.map(gadgetInCart => <AddedGadgets key={gadgetInCart.product_id} gadgetInCart={gadgetInCart}></AddedGadgets>)
                        }
                    </div>
                    <AddedGadgets allGadgets={allGadgets}></AddedGadgets>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs> */}
        </div>
    );
};

export default DashboardTabs;
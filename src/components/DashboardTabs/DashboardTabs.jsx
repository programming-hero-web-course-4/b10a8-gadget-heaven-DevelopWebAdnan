import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddedGadgets from '../AddedGadgets/AddedGadgets';
import { getStoredCart } from '../../utility/addToCart';

const DashboardTabs = ({allGadgets}) => {
    const [cart, setCart] = useState([]);

    console.log(allGadgets);

    useEffect(() => {
        const storedCart = getStoredCart();

        const storedCartInt = storedCart.map(product_id => parseInt(product_id));

        console.log(storedCart, storedCartInt, allGadgets);
        const gadgetsInCart = allGadgets.filter(gadgetInCart => storedCartInt.includes(gadgetInCart.product_id))

        setCart(gadgetsInCart);

    }, [allGadgets])

    return (
        <div>
            <Tabs>
                <TabList className="bg-purple-600 text-center">
                    <Tab className="btn btn-xl text-purple-600 rounded-4xl py-4 px-8 mb-8 md:mb-12 mr-4 md:mr-6">Cart</Tab>
                    <Tab className="btn btn-xl btn-outline text-white rounded-4xl py-4 px-8 mb-8 md:mb-12">Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Gadgets in cart: {cart.length}</h2>
                    {
                        cart.map(gadgetInCart => <AddedGadgets key={gadgetInCart.product_id} gadgetInCart={gadgetInCart}></AddedGadgets>)
                    }
                    {/* <AddedGadgets allGadgets={allGadgets}></AddedGadgets> */}
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DashboardTabs;
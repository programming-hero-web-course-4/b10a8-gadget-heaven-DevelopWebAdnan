import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddedGadgets from '../AddedGadgets/AddedGadgets';

const DashboardTabs = ({dashboardTabs}) => {
    console.log(dashboardTabs);

    return (
        <div>
            <Tabs>
                <TabList className="bg-purple-600 text-center">
                    <Tab className="btn btn-xl text-purple-600 rounded-4xl py-4 px-8 mb-8 md:mb-12 mr-4 md:mr-6">Cart</Tab>
                    <Tab className="btn btn-xl btn-outline text-white rounded-4xl py-4 px-8 mb-8 md:mb-12">Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>AddedGadgets.jsx</h2>
                    <AddedGadgets dashboardTabs={dashboardTabs}></AddedGadgets>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DashboardTabs;
import React from 'react';
import Heading from '../Heading/Heading';
import 'react-tabs/style/react-tabs.css';
import DashboardTabs from '../DashboardTabs/DashboardTabs';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {

    const dashboardTabs = useLoaderData();
    console.log(dashboardTabs);

    return (
        <div>
            <div className="hero bg-purple-600">
                <div className="hero-content text-center">
                    <div className="max-w-6xl">
                        <Heading title='Dashboard'></Heading>
                        <Heading subtitle='Here in the Dashboard you will find the gadgets you want to purchase and have added to the cart. Besides you will also find the gadgets you have added to the wishlist.'></Heading>
                    </div>
                </div>
            </div>
            <DashboardTabs dashboardTabs={dashboardTabs}></DashboardTabs>
        </div>
    );
};

export default Dashboard;
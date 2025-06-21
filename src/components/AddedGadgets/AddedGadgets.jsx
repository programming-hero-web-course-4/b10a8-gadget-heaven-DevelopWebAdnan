import React, { useEffect } from 'react';

import 'react-tabs/style/react-tabs.css';
import { getStoredCart } from '../../utility/addToCart';
import { Link } from 'react-router-dom';

const AddedGadgets = ({dashboardTabs}) => {
    // const allGadgets = useLoaderData();
    console.log(dashboardTabs);

    const { product_title, product_image, price } = dashboardTabs;

    useEffect(() => {
        const storedCart = getStoredCart();

        console.log(storedCart, dashboardTabs);
    }, [dashboardTabs])

    return (
        <div className="card bg-base-100 w-96 lg:w-full shadow-sm p-5">
            <figure className="h-44 mb-4">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl h-full w-full object-cover" />
            </figure>
            <div className="">
                <h2 className="card-title mb-4">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions mt-4">
                     <Link ></Link>
                </div>
            </div>
        </div>
    );
};

export default AddedGadgets;
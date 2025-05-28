import React from 'react';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price } = gadget;

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-5">
            <figure className="h-44 mb-4">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl h-full w-full" />
            </figure>
            <div className="">
                <h2 className="card-title mb-4">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions mt-4">
                    <button className="btn btn-lg btn-outline text-purple-600 rounded-4xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
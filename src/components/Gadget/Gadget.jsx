import React from 'react';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price } = gadget;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-5 pt-5 h-44">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
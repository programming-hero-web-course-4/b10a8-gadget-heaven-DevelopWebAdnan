import React from 'react';

const AddedGadget = ({ gadgetInCart }) => {
    const gadgetInCartPrice = gadgetInCart.price;

    console.log('gadgetInCartPrice: ', gadgetInCartPrice);

    const { product_title, product_image, price, description } = gadgetInCart;
    return (
        <div className='mb-3 md:mb-6'>
            {/* <h2 className='text-2xl'>Gadgets in cart: {cart.length}</h2> */}
            <h2 className='text-2xl'>AddedGadgets in cart: {gadgetInCart.length}</h2>
            <div className="card lg:card-side bg-base-100 shadow-sm p-5">
                <figure className='lg:h-32 lg:w-52 mb-4 lg:mb-0'>
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h3 className="card-title text-2xl mb-3">{product_title}</h3>
                    <p className='mb-4 text-lg'>{description}</p>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedGadget;
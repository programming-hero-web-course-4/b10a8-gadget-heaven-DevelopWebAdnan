import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const GadgetDetail = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    // console.log(typeof product_id, typeof id, typeof data[0].product_id);

    const gadget = data.find(gadget => gadget.product_id === id);

    const { product_id: currentProductId, product_image, product_title, price, availability, Specification, rating, description } = gadget;


    return (
        <div className=" hero bg-purple-600">
            <div className="hero-content flex-col mb-64">
                <div className="max-w-6xl">
                    <div className='text-center text-white mb-4 md:mb-8 lg:mb-12'>
                        <h2 className="text-3xl font-bold">Product Details</h2>
                        <Heading subtitle='Explore the latest gadgets that fulfill the daily needs in details. From the image of the product to specification, add-to-cart button, it shows these in details.'></Heading>
                    </div>
                </div>
                <div className="-mb-16 md:-mb-48 lg:-mb-96 card lg:card-side bg-white">
                    <figure className='lg:max-w-md pt-8 px-8 lg:pr-0 lg:pb-8'>
                        <img
                            src={product_image}
                            alt={product_title}
                            className="h-full w-full rounded-2xl" />
                    </figure>
                    <div className="card-body">
                        <h3 className="font-semibold text-3xl">{product_title}</h3>
                        <h4 className='font-semibold text-xl mt-3 mb-4'>Price: {price}</h4>
                        <div><button className="btn btn-outline btn-accent btn-md bg-green-100 rounded-4xl">{availability == true ? "In Stock" : "Not In Stock"}</button></div>
                        <p className='mt-4 text-lg'>{description}</p>
                        <h5 className="mt-4 mb-3 font-bold text-lg">Specification:</h5>
                        <ol>
                            {
                                Specification.map((SingleSpecification, index) =>
                                    <li key={index} className=" text-xs uppercase font-semibold opacity-60">{SingleSpecification}</li>
                                )
                            }
                        </ol>
                        <h5 className='mt-4 mb-3 font-bold text-lg'>Rating</h5>
                        <div className='flex items-center gap-4'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" aria-label="5 star" />
                            </div>
                            <button className="btn btn-soft btn-sm rounded-4xl">{rating}</button>
                        </div>
                        <div className="card-actions mt-4 flex gap-4">
                            <button className="btn btn-lg font-bold rounded-4xl bg-purple-600 text-white">
                                Add To Card
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                            <button className="btn btn-circle btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;
import React from 'react';
import { useParams } from 'react-router-dom';

const GadgetDetail = () => {

    const {product_id} = useParams();
    console.log(product_id)
    
    return (
        <div>
            <h2>Gadget details: {product_id}</h2>
        </div>
    );
};

export default GadgetDetail;
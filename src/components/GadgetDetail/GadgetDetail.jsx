import React from 'react';
import { useParams } from 'react-router-dom';

const GadgetDetail = () => {

    const param = useParams();
    console.log(param)
    
    return (
        <div>
            <h2>Gadget details</h2>
        </div>
    );
};

export default GadgetDetail;
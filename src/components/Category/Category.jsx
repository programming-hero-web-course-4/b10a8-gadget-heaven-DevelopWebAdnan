import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({uniqueGadgetsCategories}) => {
    console.log('uniqueGadgetsCategories from Category', uniqueGadgetsCategories);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Category</h2>
            
            <div className="drawer lg:drawer-open lg:flex-1/4">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Categories Sidebar
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
                        {/* Sidebar content here */}
                        {
                            uniqueGadgetsCategories.map(uniqueGadgetCategory => (
                                <li key={uniqueGadgetCategory}> <Link to={`/category/${uniqueGadgetCategory}`}>{uniqueGadgetCategory}</Link></li>
                            ))
                        }
                        {/* {
                            <li key={category.product_id}><Link to={`/category/${category.category}`}>{category.category}</Link></li>
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;
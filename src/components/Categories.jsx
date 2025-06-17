import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
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
                        categories.map(category => (
                            <li><Link key={category.product_id} to={`/category/${category.category}`}>{category.category}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Categories;
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = ({categories}) => {
    // console.log('categories from Categories.jsx: ', categories);
    // // const gadgetsData = useLoaderData();
    // console.log('gadgetsData from Categories.jsx', gadgetsData);
    // const data[5] =
    //     { product_id: 6, product_title: 'Acer Swift 3', product_image: 'https://i.ibb.co/WpqLDh42/austin-poon-JO-S6ew-Bq-Ak-unsplash.jpg', category: 'laptop', price: 699, … }

    const gadgetsCategories = [];

    for (const gadgetsObj of categories) {
        // console.log('gadgetsObj from Categories', gadgetsObj);
        gadgetsCategories.push(gadgetsObj.category);
    }
    // console.log('gadgetsCategories', gadgetsCategories);

    const noDuplicates = (array) => {
        console.log('gadgetsData passed as argument to the parameter, array: ', array);
        const uniqueCategories = [];

        for (const singleGadgetCategory of gadgetsCategories) {
            // console.log('singleGadgetCategory: ', singleGadgetCategory);
            if (uniqueCategories.includes(singleGadgetCategory) === false) {
                uniqueCategories.push(singleGadgetCategory)
            }
        }
        return uniqueCategories;
    }

    const uniqueGadgetsCategories = noDuplicates(categories);
    // console.log('uniqueGadgetsCategories: ', uniqueGadgetsCategories);


    // const sixthObjCategory = gadgetsData[7].category;
    // console.log('sixthObjCategory', sixthObjCategory)

    // const [categories, setCategories] = useState([]);

    // const findSixthObjCategory = () => {
    //     categories.find(category => gadgetsData[7].category === category)
    //     setCategories(findSixthObjCategory)
    // }
    // console.log('findSixthObjCategory', findSixthObjCategory)

    return (
        <div>
            <h2 className='text-2xl font-bold'>Categories.jsx</h2>
            {
                <Category uniqueGadgetsCategories={uniqueGadgetsCategories}></Category>
            }
        </div>
    );
};

export default Categories;
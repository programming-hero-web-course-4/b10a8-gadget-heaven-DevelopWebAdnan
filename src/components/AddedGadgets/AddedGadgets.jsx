
import 'react-tabs/style/react-tabs.css';

import { Link } from 'react-router-dom';

const AddedGadgets = ({ gadgetInCart }) => {
    // const [cart, setCart] = useState([]);
    // const allGadgets = useLoaderData();
    console.log(gadgetInCart);

    const { product_title, product_image, price, description } = gadgetInCart;

    // useEffect(() => {
    //     const storedCart = getStoredCart();

    //     const storedCartInt = storedCart.map(product_id => parseInt(product_id));
    //     console.log(storedCart, storedCartInt, allGadgets);

    //     const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id));

    //     setCart(gadgetsInCart);

    // }, [allGadgets, product_id])


    return (
        <div>
            <h2 className='text-2xl'>AddedGadgets in cart: {gadgetInCart.length}</h2>

            <div className="card lg:card-side bg-base-100 shadow-sm p-5">
                <figure className='h-44 mb-4'>
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mb-4">{product_title}</h2>
                    <p className='mt-4 text-lg opacity-60'>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedGadgets;
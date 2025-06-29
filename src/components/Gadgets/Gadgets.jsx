
import Gadget from '../Gadget/Gadget';
import { useLoaderData } from 'react-router-dom';

const Gadgets = () => {
    const data = useLoaderData();

    // const { category } = useParams()

    // const [gadgets, setGadgets] = useState([]);

    // useEffect(() => {
    //     if (category) {
    //         const filteredByCategory = [...data].filter(
    //             gadget => gadget.category === category
    //         )
    //         setGadgets(filteredByCategory)
    //     }
    //     else {
    //         setGadgets(data)
    //     }
    // }, [category, data])
    console.log(data);
    
    return (
        <div>
            <p>Gadgets.jsx....</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
                {/* {
                    gadgets.map(gadget => <AddedGadgets gadget={gadget} key={gadget.product_id}></AddedGadgets>)
                } */}
            </div>
        </div>
    );
};

export default Gadgets;
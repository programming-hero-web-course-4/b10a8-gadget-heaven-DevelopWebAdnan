
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center mb-8 md:mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex'>
                <Categories></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
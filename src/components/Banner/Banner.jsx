import bannerImg from '../../assets/banner.jpg';
import Heading from '../Heading/Heading';

const Banner = () => {
    return (
        <div className="hero bg-purple-600 min-h-screen">
            <div className="hero-content flex-col text-center text-white mb-24">
                <div>
                    <h1 className="text-6xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <Heading subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
                    <button className="btn mb-12 text-purple-600">Shop Now</button>
                </div>
                <img
                    src={bannerImg}
                    className=" rounded-4xl shadow-2xl p-6 bg-white"
                />
            </div>
        </div>
    );
};

export default Banner;
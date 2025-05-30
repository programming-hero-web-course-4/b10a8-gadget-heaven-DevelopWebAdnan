import bannerImg from '../../assets/banner.jpg';
import Heading from '../Heading/Heading';

const Banner = () => {
    return (
        <div className="relative hero bg-purple-600 min-h-screen rounded-b-4xl">
            <div className="hero-content flex-col text-center text-white mb-96">
                <div className=" max-w-6xl">
                    <h1 className="text-6xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <Heading subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
                    <button className="btn btn-xl text-purple-600 rounded-4xl py-4 px-8 mb-12">Shop Now</button>
                </div>
                <img
                    src={bannerImg}
                    className="absolute -bottom-96 max-w-6xl rounded-4xl shadow-2xl p-6 bg-white"
                />
            </div>
        </div>
    );
};

export default Banner;
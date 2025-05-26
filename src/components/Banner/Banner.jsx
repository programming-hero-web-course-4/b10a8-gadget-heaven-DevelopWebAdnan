import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero bg-purple-600 min-h-screen">
            <div className="hero-content flex-col text-center text-white">
                <div>
                    <h1 className="text-6xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="pt-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn mt-8 text-purple-600">Shop Now</button>
                </div>
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Banner;
import '../../App.css'
const Banner = () => {
    return (
        <div className="">
            <div className="hero h-[600px] bg rounded-3xl" >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center ">
                <div className="text-white">
                <h1 className="mb-5 text-[52px] font-bold ">Discover an exceptional cooking<br></br> class tailored for you!</h1>
                <p className="mb-5 text-[18px]">Indulge in a tailored cooking class: explore delicious flavors and techniques<br></br> personalized for you in a unique culinary journey</p>
                <button className="bg-[#0BE58A] btn rounded-[50px] border-none px-5 text-[20px] text-[#150B2B] font-semibold mr-4">Explore Now</button>
                <button className='btn btn-ghost border  text-[20px] font-semibold border-white text-white rounded-[50px]'>Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
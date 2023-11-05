

const Banner = () => {
    return (
        <div>
            <div className="carousel-item  relative w-full">
                <img src="https://i.ibb.co/2WBMWMF/Banner-Ass11.jpg" className="w-full min-h-[80vh] rounded-b-lg" />
                <div className="absolute text-white items-center flex h-full bg-gradient-to-r rounded-b-lg from-[#151515]
                 to-[rgba(21,21,21,0)]">
                    <div className="space-y-5 w-1/2 lg:ml-20 md:ml-10 ml-5">
                        <h1 className="mb-8 lg:text-7xl text-5xl font-bold">Q <span className="text-[#3FCDA6]">Food..!</span></h1>
                        <p className="mb-5 font-semibold lg:block ">"Nourish Together: Sharing Food, Sharing Love, Building Community."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
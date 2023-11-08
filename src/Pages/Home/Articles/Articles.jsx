
import { FaArrowRight } from 'react-icons/fa';
const Articles = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold my-14 text-center">Articles & useful <span className="text-[#3FCDA6]">tips</span></h1>
            {/* ..................................... */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/TqzCcHy/art3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Savoring the Symphony of Spices</h1>
                        <p className="py-6">Embark on a culinary journey as diverse spices dance on your palate, creating a harmonious symphony of flavors that elevate your dining experience.</p>
                        <button className="btn bg-[#3FCDA6] text-white">Reade More <FaArrowRight></FaArrowRight> </button>

                    </div>
                </div>
            </div>
            {/* .......................................... */}
            {/* ..................................... */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/qdcfBtF/art1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">The Art of Pasta Perfection</h1>
                        <p className="py-6">Unravel the secrets behind crafting the perfect pasta dishes. From al dente textures to mouthwatering sauces, discover the artistry that turns a simple meal into an Italian masterpiece.</p>
                        <button className="btn bg-[#3FCDA6] text-white">Reade More <FaArrowRight></FaArrowRight> </button>

                    </div>
                </div>
            </div>
            {/* .......................................... */}
            {/* ..................................... */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/7Kw7SQs/art2.webp" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Sweet Indulgence: Decadent Desserts Unveiled</h1>
                        <p className="py-6">Delight in the world of desserts with irresistible treats that redefine sweetness. Explore decadent flavors and textures that will satisfy your cravings for sugary perfection..</p>
                        <button className="btn bg-[#3FCDA6] text-white">Reade More <FaArrowRight></FaArrowRight> </button>
                    </div>
                </div>
            </div>
            {/* .......................................... */}

            <div className="flex items-center justify-center my-10">
                <button className="btn bg-[#3FCDA6] text-white">See All Articles</button>
            </div>

        </div>
    );
};

export default Articles;



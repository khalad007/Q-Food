import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Articles from "../Articles/Articles";
import Donator from "../Donator/Donator";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <Articles></Articles>
            <Donator></Donator>
        </div>
    );
};

export default Home;
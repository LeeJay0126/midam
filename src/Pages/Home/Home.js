import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Location from "./Location";

import './Home.css';

const Home = () => {

    return (
        <div className="mainPage">
            <MainHeader/>
            <Hero/>
            <AboutUs/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default Home;
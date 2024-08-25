import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Location from "./Location";

import './Home.css';
import Contact from "./Contact";

const Home = () => {

    return (
        <div className="mainPage">
            <MainHeader/>
            <Hero/>
            <AboutUs/>
            <Location/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Hero from "./Hero";

import './Home.css';

const Home = () => {

    return (
        <div className="mainPage">
            <MainHeader/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Home;
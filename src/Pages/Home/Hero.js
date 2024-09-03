import logo from '../../Images/Logos/logo.png';

const Hero = () => {

    return (
        <section className="mainHero" id='home'>
            <div className="logoBackground">
                <img src={logo} alt='logo' className='mainLogo'/>
            </div>
        </section>
    );
};

export default Hero;
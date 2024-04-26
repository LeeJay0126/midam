import HomeMenu from '../Images/Logos/icon _home_.png';
import Menu from '../Images/Logos/icon _fork spoon_.png';
import Contact from '../Images/Logos/icon _phone_.png';
import './Header.css';


const MobileSlideMenu = (props) => {
    let active = props.active;
    return (
        <section className={active ? "MobileSlideMenu MBSlideMenuActive" : "MobileSlideMenu"}>
            <main className='MSContainer'>
                <div className="MSOptionContainer">
                    <img src={HomeMenu} className='MSIcon' alt='Mobile Slide Menu Home Button' />
                    <h2 className='MSLabel'>
                        HOME
                    </h2>
                </div>
                <div className="MSOptionContainer">
                    <img src={Menu} className='MSIcon' alt='Mobile Slide Menu Menu Button' />
                    <h2 className='MSLabel'>
                        MENU
                    </h2>
                </div>
                <div className="MSOptionContainer">
                    <img src={Contact} className='MSIcon' alt='Mobile Slide Menu Contact Button' />
                    <h2 className='MSLabel'>
                        CONTACT
                    </h2>
                </div>
            </main>
        </section>
    );
};

export default MobileSlideMenu;
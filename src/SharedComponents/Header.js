import './Header.css';
import Logo from '../Images/Logos/logo.png';
import HeaderMenu from '../Images/Logos/🦆 icon _hamburger button_.png';
import MobileSlideMenu from './MobileSlideMenu';
import { useState } from 'react';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const HeaderMenuHandler = () => {
        setActive(!isActive);
    };

    return (
        <section>
            <div className='Header'>
                <img src={Logo} className='HeaderLogo' alt="Logo of Midam" />
                <img src={HeaderMenu} className="HeaderMenu" alt='Hamburger icon for header menu' onClick={HeaderMenuHandler} />
            </div>
            <MobileSlideMenu active={isActive} />
        </section>
    );
};

export default Header;
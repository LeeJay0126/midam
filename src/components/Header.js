import './Header.css';
import Logo from '../Images/Logos/logo.png';
import HeaderMenu from '../Images/Logos/🦆 icon _hamburger button_.png';
import MobileSlideMenu from './MobileSlideMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Menu from '../Pages/Menu/Menu';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const [isHovered, setHovered] = useState(false);

    const HeaderMenuHandler = () => {
        setActive(!isActive);
    };

    const onMenuHoverHandler = () => {
        setHovered(!isHovered);
    }

    const desktopMenu = (
        <div className='desktopMenu' onMouseEnter={onMenuHoverHandler} onMouseLeave={onMenuHoverHandler}>
            <ul>
                <li className={isHovered ? "hoveredMenuOptions" : "desktopMenuOptions"}>
                    <Link to="/" element={<Home />}>
                        Home
                    </Link>
                </li>
                <li className={isHovered ? "hoveredMenuOptions" : "desktopMenuOptions"}>
                    <Link to="/broadway/menu" element={<Menu />}>
                        Menu
                    </Link>
                </li>
                <li className={isHovered ? "hoveredMenuOptions" : "desktopMenuOptions"}>
                    <Link to="/broadway/menu" element={<Menu />}>
                        Contacts
                    </Link>
                </li>
            </ul>
        </div>
    );

    return (
        <section>
            <div className='Header'>
                <img src={Logo} className='HeaderLogo' alt="Logo of Midam" />
                <img src={HeaderMenu} className="HeaderMenu" alt='Hamburger icon for header menu' onClick={HeaderMenuHandler} />
                {desktopMenu}
            </div>
            <MobileSlideMenu active={isActive} />
        </section>
    );
};

export default Header;
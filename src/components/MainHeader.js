import homeIcon from '../Images/Logos/icon _home_.png';
import menuIcon from '../Images/Logos/icon _fork spoon_.png';
import locationIcon from '../Images/Logos/icon _location pin_.png';
import contactIcon from '../Images/Logos/icon _phone_.png';
// import deliveryIcon from '../Images/Logos/icon _delivery truck_.png';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';

import './MainHeader.css';

const MainHeader = () => {

    return (
        <header className="mainHeader">
            <ul className="mainHeaderUl">
                <li className="mainHeaderLi">
                    <span className="mainHeaderSpan">
                        <img src={homeIcon} alt='home' className='mainHeaderIcon' />
                        <HashLink smooth to="#top">HOME</HashLink>
                    </span>
                </li>
                <li className="mainHeaderLi">
                    <span className="mainHeaderSpan">
                        <img src={menuIcon} alt='menu' className='mainHeaderIcon' />
                        <Link to="/broadway/menu" element={<Menu />}>MENU</Link>
                    </span>
                </li>
                <li className="mainHeaderLi">
                    <span className="mainHeaderSpan">
                        <img src={locationIcon} alt='location' className='mainHeaderIcon' />
                        <HashLink smooth to="/#location">LOCATION</HashLink>
                    </span>
                </li>
                <li className="mainHeaderLi">
                    <span className="mainHeaderSpan">
                        <img src={contactIcon} alt='contact' className='mainHeaderIcon' />
                        <HashLink smooth to="/#contact">CONTACT</HashLink>
                    </span>
                </li>
                {/* <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={deliveryIcon} alt='delivery' className='mainHeaderIcon' />
                    <Link to="/" element={<Menu />}>DELIVERY</Link>
                </span>
            </li> */}
            </ul>
        </header>
    );
};

export default MainHeader;
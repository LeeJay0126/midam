import {homeIcon} from '../Images/Logos/🦆 icon _home_.png';
import {menuIcon } from '../Images/Logos/🦆 icon _fork spoon_.png';
import {locationIcon } from '../Images/Logos/🦆 icon _location pin_.png';
import {contactIcon } from '../Images/Logos/🦆 icon _phone_.png';
import {deliveryIcon } from '../Images/Logos/🦆 icon _delivery truck_.png';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const MainHeader = () =>{
    <header className="mainHeader">
        <ul className="mainHeaderUl">
            <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={homeIcon} alt='home' className='mainHeaderIcon'/>
                    <Link to="/" element={<Home/>}>HOME</Link>
                </span>
            </li>
            <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={menuIcon} alt='menu' className='mainHeaderIcon'/>
                    <Link to="/" element={<Home/>}>MENU</Link>
                </span>
            </li>
            <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={locationIcon} alt='location' className='mainHeaderIcon'/>
                    <Link to="/" element={<Home/>}>LOCATION</Link>
                </span>
            </li>
            <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={contactIcon} alt='contact' className='mainHeaderIcon'/>
                    <Link to="/" element={<Home/>}>CONTACT</Link>
                </span>
            </li>
            <li className="mainHeaderLi">
                <span className="mainHeaderSpan">
                    <img src={deliveryIcon} alt='delivery' className='mainHeaderIcon'/>
                    <Link to="/" element={<Home/>}>DELIVERY</Link>
                </span>
            </li>
        </ul>
    </header>
}
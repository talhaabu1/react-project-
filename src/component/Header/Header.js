import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
            <ul className='line'>
                <li><a href="/home">HOME</a></li>
                <li><a href="/Order Review">ORDER REVIEW</a></li>
                <li><a href="/Manage Inventory">MANAGE INVENTORY</a></li>
                <li><a href="/about">ABOUT</a></li>
            </ul>
        </nav>
    );
};

export default Header;
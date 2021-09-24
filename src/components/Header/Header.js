import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <a href="/#" >Shop</a>
                <a href="/#" >Order</a>
                <a href="/#" >Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
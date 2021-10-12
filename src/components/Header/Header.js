import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import useAuth from '../../context/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/review" >Order Review</NavLink>
                <NavLink to="/inventory" >Manage Inventory</NavLink>
                {
                    user.displayName ? (
                        <Button onClick={logOut} >Logout</Button>
                    ) : (
                        <NavLink to="/login" >Login</NavLink>
                    )
                }
            </nav>
        </div >
    );
};

export default Header;
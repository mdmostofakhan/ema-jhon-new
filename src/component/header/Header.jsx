import React from 'react';
import logo from '../../assets/images/Logo.svg'
import '../header/Header.css'
const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt="" />

            <nav>
                <a href="/shop">shop</a> 
                <a href="/order">order</a>
                <a href="/Inventory">Manage Inventory</a>
                <a href="/Login ">Login </a>
            </nav>
        </div>
    );
};

export default Header;
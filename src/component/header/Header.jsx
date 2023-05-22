import React from 'react';
import logo from '../../assets/images/Logo.svg'
import '../header/Header.css'
const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt="" />

            <nav>
                <a href="/">shop</a> 
                <a href="/orders">order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login ">Login </a>
            </nav>
        </div>
    );
};

export default Header;
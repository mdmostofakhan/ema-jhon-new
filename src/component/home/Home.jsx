import React from 'react';
import Header from '../header/Header';
import Shop from '../shop/Shop';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
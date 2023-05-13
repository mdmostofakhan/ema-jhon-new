import React, { useEffect, useState } from 'react';
import './Shop.css'
import Producs from '../produc/Producs';

const Shop = () => {
    const [product, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
     
    
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                product.map(product => <Producs
                key={product.id}
                product={product}
                ></Producs>)
               }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;
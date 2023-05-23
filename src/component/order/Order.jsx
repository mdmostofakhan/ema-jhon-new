import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Oreder.css';
import { removeFromDb } from '../../assets/utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    
    const handleProductFromCart = (id) => {
      const remaining = cart.filter(product => product.id !== id)
      setCart(remaining);
      removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                 {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleProductFromCart={handleProductFromCart}
                    ></ReviewItem>)
                 }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
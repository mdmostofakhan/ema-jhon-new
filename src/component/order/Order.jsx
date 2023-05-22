import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';

const Order = () => {
    const cart = useLoaderData()
    // console.log (cart)
    return (
        <div className='shop-container'>
            <div className='order-container'>
                 {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
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
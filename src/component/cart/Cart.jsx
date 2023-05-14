import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props;
    
 let total = 0;
 let totalShipping = 0;
 for(const product of cart){
    total = total +  product.price;
    totalShipping = totalShipping + product.shipping;
 }
 const text = total*7/100;
 const grandTotal = total + totalShipping + text;

    return (
        <div className='cart'>
                <h4>Order Summary</h4>
                <p>Select Items:{cart.length}</p>
                <p>Total Price:${total}</p>
                <p>Total Shiping:${totalShipping} </p>
                <p>Text:$ {text}</p>
                <h5>Ground total:$ {grandTotal}</h5>
        </div>
    );
}

export default Cart;
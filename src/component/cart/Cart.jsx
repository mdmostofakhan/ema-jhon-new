import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCrat}) => {
    // const {cart} = props;

    console.log(cart)

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
 for(const product of cart){
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    total = total +  product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
 }
 const text = total*7/100;
 const grandTotal = total + totalShipping + text;

    return (
        <div className='cart'>
                <h4>Order Summary</h4>
                <p>Select Items:{quantity}</p>
                <p>Total Price:${total}</p>
                <p>Total Shiping:${totalShipping} </p>
                <p>Text:$ {text.toFixed(2)}</p>
                <h5>Ground total:$ {grandTotal.toFixed(2)}</h5>
             <button onClick={ handleClearCrat} className='btn-clear-cart'>
                <span>clear cart</span>
                <FontAwesomeIcon icon={faTrashAlt } />
                </button>
        </div>
    );
}

export default Cart;
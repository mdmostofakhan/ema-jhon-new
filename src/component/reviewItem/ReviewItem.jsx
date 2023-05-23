import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({product, handleProductFromCart}) => {
     console.log(product)
     const {img, name, quantity, id, price, seller} = product;
    return (
        <div className='review-item'>
            <img className='review-title' src={img} alt="" />
            <div className='review-details'>
            <p>name: {name}</p>
            <p>price: <span className='orenge-text'>${price}</span></p>
            <p>quantity: <span className='orenge-text'>${quantity}</span></p>
            </div>
           <button onClick={() => handleProductFromCart(id)} className='delet-btn'>
           <FontAwesomeIcon className='delet-icon' icon={faTrashAlt } />
           </button>
        </div>
    );
};

export default ReviewItem;
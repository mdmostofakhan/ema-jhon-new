import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Produc.css'

const Producs = (props) => {
    const {name, img, ratings, price, seller} = props.product;
  
    const handleAddToCart = props.handleAddToCart;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>price: ${price}</p>
            <p>Manipicture: {seller}</p>
            <p>Ratings: {ratings} Stars</p>
        </div>
            <button onClick={() => handleAddToCart(props.product)}
             className='add-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Producs;
import React from 'react';
import './Produc.css'
const Producs = (props) => {
    const {name, img, ratings, price, seller} = props.product
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>price:{price}</p>
            <p>Manipicture:{seller}</p>
            <p>ratings:{ratings}</p>
            </div>
            <button className='add-cart'>Add to cart</button>
        </div>
    );
};

export default Producs;
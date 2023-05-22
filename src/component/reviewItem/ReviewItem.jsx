import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
     console.log(product)
     const {img} = product;
    return (
        <div className='review-item'>
            {/* <img src={img} alt="" /> */}
            <h4>review item</h4>
        </div>
    );
};

export default ReviewItem;
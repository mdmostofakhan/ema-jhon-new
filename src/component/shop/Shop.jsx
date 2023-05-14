import React, { useEffect, useState } from 'react';
import './Shop.css'
import Producs from '../produc/Producs';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
     
    useEffect(()=>{
        const storegCart = getShoppingCart()
        for(const id in storegCart){
            //step 1; get id
            const addedProduct = products.find(product => product.id === id)
           //step 2: get the product by using id
        
           const quantity = storegCart[id]
           addedProduct.quantity = quantity;
           console.log(id, addedProduct);
        }
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
       }
    
   
    return (
        <div className='shop-container'>
            <div className="products-container">
               
               {
                products.map(product => <Producs
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Producs>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
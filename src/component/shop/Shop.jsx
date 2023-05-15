import React, { useEffect, useState } from 'react';
import './Shop.css'
import Producs from '../produc/Producs'
// import Producs from '../produc/Producs';
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
     

    useEffect( () =>{
        const storegdCart = getShoppingCart()
        const savedCart = []
        for(const id in storegdCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storegdCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
            // console.log(savedCart)
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product]
        // if product doesnt exist in the cart, thenset quantity =1
        // if exist u-date quantity by 1
        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        }

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
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
        // step 1; get id of the addedProduct
        for(const id in storegdCart){
            // step 2: et product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storegdCart[id]
                addedProduct.quantity = quantity
                // step 4: add the added product t the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added product', addedProduct))
        }
        // step 5: set the car
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
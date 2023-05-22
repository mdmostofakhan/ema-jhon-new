import { getShoppingCart } from "../assets/utilities/fakedb";
// import cartProductsLoader from './cartProductsLoader';

const cartProductsLoader = async () => {
   const loadedProducts =  await fetch('products.json');
   const products = await loadedProducts.json()
    console.log(products)

    const storedProduc = getShoppingCart()
    const savedCart = []
    for(const id in storedProduc){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedProduc[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart;
}
export default cartProductsLoader;
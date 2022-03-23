import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
        
    },[])
    const handleAddTOCart=(props)=>{
       let newCart=[...cart,props];
       setCart(newCart);
    };
  
    return (
        <div className='shop-container'>
            <div className="product-container">
             {
                 products.map(product=> <Product 
                    key={product.id} 
                    product={product} 
                    handleAddTOCart={handleAddTOCart}
                    > </Product>)
             }

            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
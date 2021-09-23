import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import './index.css'

const ShopIndex = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newcart = [...cart, product];
        setCart(newcart);
    }
    return (
        <div className="shop-index">
            <Shop products={products} handleAddToCart={handleAddToCart} />
            <Cart cart={cart} />
        </div>
    );
};

export default ShopIndex;
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import './index.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const ShopIndex = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            // console.log(saveCart);
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, saveCart[key]);
                addedProduct.quantity = saveCart[key];
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newcart = [...cart, product];
        setCart(newcart);
        addToDb(product.key);
    }

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const searchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(searchedProduct);

    }
    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="search your product" />
            </div>
            <div className="shop-index">
                <Shop products={displayProduct} handleAddToCart={handleAddToCart} />
                <Cart cart={cart} />
            </div>
        </>
    );
};

export default ShopIndex;
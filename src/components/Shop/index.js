import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import './index.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const ShopIndex = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('./products.json')
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
        const exists = cart.find(c => c.key === product.key);
        let newcart = [];
        if (exists) {
            const rest = cart.filter(c => c.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newcart = [...rest, product]
        } else {
            product.quantity = 1;
            newcart = [...cart, product]
        }
        // const newcart = [...cart, product];
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
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="btn btn-warning">Review Your Order</button>
                    </Link>
                </Cart>
            </div>
        </>
    );
};

export default ShopIndex;
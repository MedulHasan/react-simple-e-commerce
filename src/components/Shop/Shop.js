import React from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ products, handleAddToCart }) => {
    return (
        <div className="product">
            {
                products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart} />)
            }
        </div>
    );
};

export default Shop;
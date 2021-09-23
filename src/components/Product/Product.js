import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, stock, seller } = product;
    return (
        <div className="singleProduct">
            <img className="me-2" src={img} alt="" />
            <div>
                <h6 className="text-primary fw-normal">{name}</h6>
                <p><small>by: {seller}</small></p>
                <p className="fw-bolder">${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    className="add-cart-btn btn btn-warning"
                    onClick={() => handleAddToCart(product)}>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
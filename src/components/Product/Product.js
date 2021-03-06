import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, stock, seller, star } = product;
    return (
        <div className="singleProduct">
            <img className="me-2" src={img} alt="" />
            <div>
                <h6 className="text-primary fw-normal">{name}</h6>
                <p><small>by: {seller}</small></p>
                <p className="fw-bolder">${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                />
                <br />
                <button
                    className="add-cart-btn btn btn-warning"
                    onClick={() => handleAddToCart(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
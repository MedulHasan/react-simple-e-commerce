import React from 'react';

const ReviewItem = ({ product, handleRemove }) => {
    const { name, price, quantity, key } = product;

    return (
        <div className="">
            <h4 className="text-primary fw-normal">{name}</h4>
            <p className="fw-bolder">Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button
                className="add-cart-btn btn btn-warning"
                onClick={() => handleRemove(key)}>
                Remove
            </button>
            <hr className="me-2" />
        </div>
    );
};

export default ReviewItem;
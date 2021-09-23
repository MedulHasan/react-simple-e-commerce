import React from 'react';
import './Cart.css'

const Order = ({ cart }) => {
    let totalPricerice = 0;
    for (let product of cart) {
        totalPricerice = totalPricerice + product.price;
    }
    return (
        <div className="order-summary">
            <h5>Order Summary</h5>
            <p>Items order: {cart.length}</p>
            <p>Total Price: {totalPricerice}</p>
        </div>
    );
};

export default Order;
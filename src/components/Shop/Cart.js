import React from 'react';
import './Cart.css'

const Order = ({ cart }) => {
    // console.log(cart);
    let totalQuantity = 0;
    let totalPricerice = 0;
    let shipping = 0;
    for (let product of cart) {
        product.quantity = product.quantity || 1;
        totalPricerice = totalPricerice + (product.price * product.quantity);
        totalQuantity = totalQuantity + product.quantity;
        shipping = shipping + (product.shipping * product.quantity);
    }
    let tax = (totalPricerice + shipping) * 0.10;
    const grandTotal = totalPricerice + shipping + tax;
    return (
        <div className="order-summary">
            <h5>Order Summary</h5>
            <p>Items order: {totalQuantity}</p>
            <p>Price: {totalPricerice.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Order;
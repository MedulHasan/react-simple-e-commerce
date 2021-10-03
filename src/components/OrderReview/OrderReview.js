/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import UseProducts from '../../hooks/UseProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Shop/Cart';

const OrderReview = () => {
    const [products, setProducts] = UseProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = (key) => {
        const newCart = cart.filter(c => c.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push('/place-order');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className="shop-index">
            <div className="product">
                {
                    cart.map(c => <ReviewItem
                        key={c.key}
                        product={c}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className="order-summary">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn btn-warning">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;
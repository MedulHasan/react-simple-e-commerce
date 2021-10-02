/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../hooks/useCart';
import UseProducts from '../../hooks/UseProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Shop/Cart';

const OrderReview = () => {
    const [products, setProducts] = UseProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = (key) => {
        const newCart = cart.filter(c => c.key !== key);
        setCart(newCart);
        deleteFromDb(key);
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
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default OrderReview;
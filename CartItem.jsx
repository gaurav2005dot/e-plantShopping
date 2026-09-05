import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectTotalAmount,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  const handleCheckout = () => {
    alert('Coming Soon! Checkout is not available yet.');
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">
          Your cart is empty. Head back to the plant list to add something green.
        </p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-thumb" src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit-price">
                    Unit price: ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decrementQuantity(item.name))}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(incrementQuantity(item.name))}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.name))}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="cart-total">Total: ${totalAmount.toFixed(2)}</p>
          </div>
        </>
      )}

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Calculates the total cost for a single cart line (price x quantity)
  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // Calculates the total amount for every item currently in the cart.
  // Because it reads straight from cartItems (which comes from the Redux
  // store via useSelector), this recalculates automatically whenever an
  // item's quantity changes, an item is added, or an item is removed.
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.name));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.name));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

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
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-subtotal">
                  ${calculateTotalCost(item)}
                </p>

                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="cart-total">Total: ${calculateTotalAmount()}</p>
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

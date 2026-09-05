import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalQuantity } from './CartSlice';
import './ProductList.css';

import indoor1 from './assets/plants/indoor1.png';
import indoor2 from './assets/plants/indoor2.png';
import indoor3 from './assets/plants/indoor3.png';
import indoor4 from './assets/plants/indoor4.png';
import indoor5 from './assets/plants/indoor5.png';
import indoor6 from './assets/plants/indoor6.png';

import succulent1 from './assets/plants/succulent1.png';
import succulent2 from './assets/plants/succulent2.png';
import succulent3 from './assets/plants/succulent3.png';
import succulent4 from './assets/plants/succulent4.png';
import succulent5 from './assets/plants/succulent5.png';
import succulent6 from './assets/plants/succulent6.png';

import flower1 from './assets/plants/flower1.png';
import flower2 from './assets/plants/flower2.png';
import flower3 from './assets/plants/flower3.png';
import flower4 from './assets/plants/flower4.png';
import flower5 from './assets/plants/flower5.png';
import flower6 from './assets/plants/flower6.png';

const plantCategories = [
  {
    category: 'Indoor Plants',
    plants: [
      { name: 'Snake Plant', price: 18, image: indoor1 },
      { name: 'Peace Lily', price: 22, image: indoor2 },
      { name: 'Monstera Deliciosa', price: 34, image: indoor3 },
      { name: 'Fiddle Leaf Fig', price: 40, image: indoor4 },
      { name: 'Pothos', price: 15, image: indoor5 },
      { name: 'ZZ Plant', price: 26, image: indoor6 },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', price: 12, image: succulent1 },
      { name: 'Jade Plant', price: 14, image: succulent2 },
      { name: 'Aloe Vera', price: 16, image: succulent3 },
      { name: 'Haworthia', price: 11, image: succulent4 },
      { name: 'String of Pearls', price: 18, image: succulent5 },
      { name: 'Zebra Cactus', price: 13, image: succulent6 },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid', price: 28, image: flower1 },
      { name: 'African Violet', price: 15, image: flower2 },
      { name: 'Anthurium', price: 24, image: flower3 },
      { name: 'Begonia', price: 17, image: flower4 },
      { name: 'Hibiscus', price: 20, image: flower5 },
      { name: 'Kalanchoe', price: 13, image: flower6 },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li>
            <Link to="/cart" className="cart-icon-wrapper">
              🛒 Cart
              <span className="cart-count">{totalQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="product-list-page">
        {plantCategories.map((group) => (
          <section key={group.category} className="product-category">
            <h2>{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <div className="product-card" key={plant.name}>
                    <img
                      className="product-thumb"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={added}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {added ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function AboutUs() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px' }}>
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery started with a simple idea: everyone deserves a
          little bit of green in their life, no matter how much space or
          experience they have. We're a small team of plant growers and
          plant lovers who hand-select every houseplant, succulent, and
          flowering plant we sell, and pack each order ourselves so your
          plants arrive healthy and ready to thrive.
        </p>
        <p>
          Our mission is to make choosing and caring for plants simple and
          approachable &mdash; whether you're filling your first apartment
          with greenery or building out a jungle of your own. Every plant we
          ship comes with care notes so you can keep it happy for years to
          come.
        </p>
        <p>
          We're based in a small nursery on the edge of town, where our
          plants spend their early weeks in natural light before they ever
          reach a box. Thanks for supporting a small, plant-obsessed
          business.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;

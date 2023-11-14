import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="container">
          <div className="navbar-left" style={{ fontSize: '30px' }}>
            <img
              style={{ borderRadius: '50%' }}
              src="https://banner2.cleanpng.com/20180811/hts/kisspng-e-commerce-web-design-website-development-internet-ebook-vendors-mspbasics-com-5b6e96a9c05a40.5743099315339741857879.jpg"
              alt="Logo"
              className="logo"
            />
            KMR Store
          </div>
          <div className="navbar-right" style={{ fontSize: '20px' }}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/order">My Orders</a>
            <a href="/adminlogin">Admin Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;

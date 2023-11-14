// Production.js

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Production = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }

    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const addToCart = (product) => {
    const isItemInCart = cartItems.some((item) => item.name === product.name);

    if (isItemInCart) {
      alert('Item is already in the cart!');
    } else {
      const updatedCart = [product, ...cartItems];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Item added to cart!');
    }
  };

  return (
    <div style={{padding:'50px'}}>
      <div style={{ textAlign: 'center' }}>
        <br />
        <input
          style={{ width: '300px', border: '1px solid black' }}
          type="search"
          placeholder="Search Products"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <br />
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 300, flex: '1 1 23%' }}
            style={{
              margin: '8px',
              position: 'relative',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease',
              backgroundColor: 'white',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#e0e0e0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <CardMedia
              component="img"
              alt="Product Image"
              maxHeight="50px"
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {product.name}
              </Typography>
              <Typography variant="h5" color="text.primary">
                Price: ₹{product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                <Link
                  to={`/details/${index}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  View
                </Link>
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Production;

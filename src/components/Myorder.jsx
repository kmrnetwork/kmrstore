// OrdersPage.js

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);
  const handleDelete = (index) => {
    const updatedorder = orders.filter((item, i) => i !== index);
    setOrders(updatedorder);
    localStorage.setItem('orders', JSON.stringify(updatedorder));
  };

  return (
    <div className="cart-items-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',padding:'75px' }}>
          {orders.map((item, index) => (
            <Card
              key={index}
              className="cart-item-card"
              style={{
                margin: '8px',
                minWidth: 345,
                maxWidth: 345,
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
              <img
                src={item.image}
                alt="Product"
                style={{
                  maxWidth: '100%',
                  maxHeight: '150px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="h6" color="text.primary" style={{ marginBottom: '8px' }}>
                  Price: ₹{item.price}
                </Typography>
                <Typography variant="h6" color="text.primary" style={{ marginBottom: '8px' }}>
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="h6" color="text.primary" style={{ marginBottom: '8px' }}>
                  <strong>Total Price: ₹{item.price*item.quantity}</strong>
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => handleDelete(index)}
                aria-label="delete"
                style={{ position: 'absolute', top: '8px', right: '8px' }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          ))}
        </div>
    
  );
};

export default OrdersPage;

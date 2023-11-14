// Cart.js

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems.map(item => ({ ...item, quantity: 1 })));
  }, []);

  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add current cart items to orders
    const newOrders = [...cartItems, ...orders];

    // Update local storage with new orders
    localStorage.setItem('orders', JSON.stringify(newOrders));

    // Clear the cart
    setCartItems([]);
    localStorage.removeItem('cart');
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding:"75px",display: 'flex' }}>
      <div style={{ flex: '1' }}>
        
        <div className="cart-items-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {cartItems.map((item, index) => (
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
                  <strong>Price: ₹{item.price * item.quantity}</strong>
                </Typography>
                <label htmlFor={`quantity-${index}`}>Quantity: {item.quantity}</label>
                <input
                  type="range"
                  id={`quantity-${index}`}
                  value={item.quantity}
                  min="1"
                  max="10" // Adjust the max value according to your requirement
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  style={{ width: '100%', marginBottom: '8px' }}
                />
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
      </div>
      <div style={{ flex: '0 0 300px', marginLeft: '20px', backgroundColor: 'white', padding: '20px' }}>
        <h2>Order Summary</h2>
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <Typography>{item.name}</Typography>
              <Typography style={{ fontWeight: 'bold' }}>₹{item.price * item.quantity}</Typography>
            </div>
          ))}
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>₹{calculateTotal()}</Typography>
        </div>
        <br/><br/><br/>
        <div style={{textAlign:"center"}}> 
        <Button variant='contained' onClick={handleOpen}>Checkout</Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2><strong>Checkout Successfull!  <CheckCircleIcon/></strong></h2>
          </Typography>
         
          
          
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;

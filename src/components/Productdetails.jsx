import { Box, Button } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
    let { id } = useParams();
    const product = JSON.parse(localStorage.getItem('products'))[id];
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
        whiteSpace: 'pre-line', // or 'pre-wrap'
    };

    return (
        <Box sx={style}>
            <div style={{ textAlign: "center" }}><br />
                <img style={{ height: '200px' }} src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <h2>Price: ₹{product.price}</h2>
                <p>{product.description}</p>
                <Button variant='contained'><Link to="/products" style={{ textDecoration: "none", color: "white" }}>Go Back</Link></Button>
            </div>
        </Box>
    )
}

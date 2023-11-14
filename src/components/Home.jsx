import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <h3>Discover amazing products and shop now!</h3>
        <button className="shop-button"><Link style={{textDecoration:"none",color:"white"}} to="/products">Shop Now</Link></button>
      </div>
    </div>
  )
}


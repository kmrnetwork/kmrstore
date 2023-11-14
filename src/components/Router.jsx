import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'
import View from './View'
import Edit from './Edit'
import Detail from './Detail'
import Productdetails from './Productdetails';
import Cart from './Cart'
import MyOrders from './Myorder'
export default function Router() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/'element={<Home/>}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/details/:id' element={<Productdetails/>}/>
    <Route exact path="/adminlogin" element={<AdminLogin/>}/>
    <Route exact path="/adminpanel" element={<AdminPanel/>}/>
    <Route exact path="/view" element={<View/>}/>
    <Route exact path='/edit/:id' element={<Edit/>}/>
    <Route exact path='/detail/:id' element={<Detail/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    <Route exact path='/order' element={<MyOrders/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

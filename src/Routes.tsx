import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Favorite from './pages/Favorite'



export default function RoutesApp(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/product" element={<Product />}/> 
            <Route path="/favorite" element={<Favorite />}/>        
        </Routes>
      </Router>
    )
}
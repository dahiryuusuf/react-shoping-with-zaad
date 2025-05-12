import {  Route, Routes } from "react-router-dom";
import Header  from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import { useState } from "react";




const App = () => {
    const [cart, setCart]=useState(5)

    return(
       <div className="container">
        <Header cart={cart} />

        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Cart" element={<Cart  cart={cart} setCart={setCart} />}/>
        </Routes>

       </div>
    )
}



export default App;
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

const [cart, setCart]=useState([])


  return(
    <>
      <Navbar quantity ={cart.length}/>
      <ProductsContainer  
      setCart={setCart} cart={cart}/>
       <Footer/>
    </>
      
    
    
  )
}

export default App;
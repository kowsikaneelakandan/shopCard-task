import { useEffect, useState } from "react"
import PropTypes, { object } from "prop-types"

export default function ProductsContainer({setCart},{cart}){
      const [products, setProducts]= useState([]);
  
  useEffect(() =>{
    fetch("http://localhost:5173/products.json")
    .then((response)=>response.json())
    .then((result)=>{
      setProducts(result.data)
    })

  },[]);
  function addCart(product){ 
    console.log(cart)
   // let cartCopy= cart
//cartCopy.push(product)
    setCart(cart=>[...cart,product])
  }
 
  function removeCart(){
    setCart(cart=>[...cart.filter((c)=>c.id!==products.id)])
  };
  return(
    <div className="container">
      <div className="row">
        {products.map((product,index)=>{
          return(
          <div className="card col-3" key={`${product.name}-${index}`}>
          <img src={product.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price ${product.actualCost}</p>
            
            
              <button className="btnRemove"onClick={()=>removeCart(product)}>Remove from Cart</button>
            
              <button onClick={()=>addCart(product)}>Add to Cart</button>
            
          
          </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}
ProductsContainer.prototype={
  product:PropTypes.object,
  addCart:PropTypes.func,
}
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "./actions/actions";
const Card = (props) => {
    const {productName,prize, image, id }=props
    // console.log(image)
    const cartdata=useSelector(state=>state.cartReducer);
    const  dispatch = useDispatch()
   
    useEffect(() => {
      console.log(cartdata)
  
      }, [cartdata])

 let buttontitle;
let data;
 const handletoogleButton=({id})=>{
   console.log(id)
data=cartdata.find(item=>item.id===id)
if(data){
  buttontitle="Go To Cart"
}
else{
  buttontitle="Add to cart"
}   
 }
 
  return (
    <div>
      <div className="card col" style={{width: "18rem",backgroundImage:`url(${image})`}}>
        <div className="card-body">
          <h5 className="card-title" >{productName}</h5>
          <p className="card-text">
           Rs.{prize}
          </p>
          {handletoogleButton({id})}
          {/* <button className="btn btn-primary" onClick={()=> {dispatch(ADD_TO_CART(props))}} >
          {buttontitle}
          </button> */}
    
          {
            buttontitle==="Add to cart"?<button className="btn btn-primary" onClick={()=> {dispatch(ADD_TO_CART(props))}} >Add To Cart</button>:<Link to="/cart" ><button className="btn btn-secondary" >Go To Cart</button></Link>
          }
        </div>
      </div>
    </div>
  );
  
};

export default Card;
{/* {

  cartdata.map((item=>{
    console.log(item)
    return (
  
    item.id==id ? <button> <Link to="/cart" >  Go to Cart </Link></button> : <button  className="btn btn-primary" onClick={()=> {dispatch(ADD_TO_CART(props))}} >Add to cart</button>
  
    )
  }))
}  */}



  {/* <Link to="/cart" onClick={()=> {dispatch(ADD_TO_CART(props))}} style={{float:"right"}}>
  Buy Now
  </Link> */}

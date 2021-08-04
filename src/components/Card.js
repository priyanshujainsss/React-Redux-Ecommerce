import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "./actions/actions";
const Card = (props) => {
    const {productName,prize, image}=props
    // console.log(image)
    const cartdata=useSelector(state=>state.cartReducer);
    const  dispatch = useDispatch()
    useEffect(() => {
    console.log(cartdata);
    
}, [cartdata])
  return (
    <div>
      <div className="card col" style={{width: "18rem",backgroundImage:`url(${image})`  }}>
        <div className="card-body">
          <h5 className="card-title" >  {productName}</h5>
          <p className="card-text">
           Rs.{prize}
          </p>
          <button className="btn btn-primary" onClick={()=> {dispatch(ADD_TO_CART(props))}} >
            Add to cart
          </button>
         
            <Link to="/cart" onClick={()=> {dispatch(ADD_TO_CART(props))}} style={{float:"right"}}>
            Buy Now
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Card;

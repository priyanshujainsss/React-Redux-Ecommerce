import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_CART, INC_QNTY, DEC_QNTY } from "./actions/actions";
import Navbar from "./Navbar";

const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer);

  console.log(cartData, cartData.length);
  var cost = 0;
  const dispatch = useDispatch();
  {
    cartData.map((element) => {
      console.log(element.prize);
      cost = cost + element.prize*element.quantity;
    });
  }
  console.log(cost);

  return (
    <div>
    <Navbar />

      <div style={{ width: "60%", float: "left" }}>
        <ul>
          {cartData.length > 0 ? (
            cartData.map((element) => {
              // element.quantity<1? dispatch(REMOVE_CART(element)):
               if(element.quantity>0){
              return(
                     <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{element.productName}</h5>
                        <p className="card-text">{element.prize}</p>
                        <div style={{ lineHeight:"30px", display:"flex", flexDirection:"row", margin:"5px"}} >
                          <button  onClick={()=>dispatch(DEC_QNTY(element))}  style={{width:"35px", height:"35px", fontSize:"20px"}}>-</button>
                          {/* <input value={element.quantity} style={{width:"35px", height:"35px"}}/> */}
                          <div style={{width:"25px",padding:"5px"}} >{element.quantity}</div>
                          <button onClick={()=>dispatch(INC_QNTY(element))}  style={{width:"35px", height:"35px", fontSize:"20px"}} >+</button></div>
                        <button onClick={()=>dispatch(REMOVE_CART(element))} > Remove Item</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={element.image}
                        className="img-fluid rounded-start"
                        alt={element.productName}
                      />
                    </div>
                  </div>
                </div>
              )}
            else{
            dispatch(REMOVE_CART(element))
            }
                

              
            })
          ) : (
            <p>Cart is Empty</p>
          )}
        </ul>
      </div>
      <div>
        <div
          className="card"
          style={{ marginRight: "5%", width: "210px", float: "right" }}
        >
          <div className="card-body">
            <h5 className="card-title"> Cart Status</h5>
            <p
              className="card-text"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ margin: "0px 0px 0px 65px" }}>
                {cartData.map((element) => {
                  return (
                    <>
                      {element.prize} *{element.quantity} <br />
                    </>
                  );
                })}
              </div>
              Total Items {cartData.length}
              <br />
              Total Cost {cost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_CART } from "./actions/actions";
import Navbar from "./Navbar";
const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer);
  console.log(cartData, cartData.length);
  var cost = 0;
  const dispatch = useDispatch();
  {
    cartData.map((element) => {
      console.log(element.prize);
      cost = cost + element.prize;
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
              return (
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{element.productName}</h5>
                        <p className="card-text">{element.prize}</p>
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

                // <React.Fragment style={{display:"flex", height:"200px",margin:"10px 10px 10px 10px"}}> <li key={element} >{element.productName} {element.prize}</li><button onClick={()=>dispatch(REMOVE_CART(element))} > Remove Item</button><img src={element.image} style={{height:"82px", width:"100px", margin:"-40px 0px 10px 0px", float:"right"}} />  </React.Fragment>
              );
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
                      {element.prize} <br />
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

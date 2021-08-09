import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SHOW_CART } from "./actions/actions";
function Navbar() {
  const cartdata = useSelector(state=>state.cartReducer);
  // console.log(cartdata)
   const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ECommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             

              <li className="nav-item" style={{marginLeft:"60vw"}} >
                <Link
                to="/cart"
                  className="nav-link "
                  href="#"
                  aria-disabled="true"
                 onClick={()=>dispatch(SHOW_CART())}
                >
                 <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-trolley-icon-shopping-cart-icon-trolley-icon-vector-illustration-isolated-white-background-163727286.jpg" style={{width:"45px", height:"35px"}} alt="cart icon" />

                 {
                      cartdata.length>0 ?
                   <div style={{width:"20px", height:"20px", background:"red", color:"white", borderRadius:"15px", fontSize:"15px", padding:"1px 2px 3px 5px", margin:"-45px 0px 0px 50px" }}>
                 {cartdata.length}
                 </div> :null
                }
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

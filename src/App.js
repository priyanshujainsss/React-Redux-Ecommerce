import React from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter, Switch ,Route, Redirect } from "react-router-dom";
import Login from "./components/Login";

function App() {


  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
    </Switch>
    {/* <Redirect  to="/login" /> */}
      
    </BrowserRouter>
  );
}

export default App;

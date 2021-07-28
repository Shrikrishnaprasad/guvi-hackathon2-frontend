import { Route, Switch } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home/Home";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import Menu from "./Menu";
import Product from "./Product/Product";
import Contact from "./Contact";
import { useState } from "react";
import Cart from "./Cart/Cart";

export default function App() {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Menu cartCount={cartCount} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/product">
          <Product cartCount={cartCount} setCartCount={setCartCount} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}

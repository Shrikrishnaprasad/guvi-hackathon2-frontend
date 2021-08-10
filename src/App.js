import { Route, Switch } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home/Home";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import Menu from "./Menu";
import Product from "./Product/Product";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import ProductDetails from "./Product/ProductDetails";
import { AddProduct } from "./Product/AddProduct";
import { EditProduct } from "./Product/EditProduct";

export default function App() {
  const [user, setUser] = useState("admin");
  const [cartCount, setCartCount] = useState(0);
  function getProduct() {
    fetch("https://60c83b2fafc88600179f660c.mockapi.io/user/product", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        const count = data.filter((product) => product.isCart).length;
        setCartCount(count);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getProduct();
  }, []);
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
        <Route path="/addProduct">
          <AddProduct />
        </Route>
        <Route path="/editProduct/:id">
          <EditProduct />
        </Route>
        <Route path="/product">
          <Product cartCount={cartCount} setCartCount={setCartCount} />
        </Route>
        <Route path="/productDetails/:id">
          <ProductDetails cartCount={cartCount} setCartCount={setCartCount} />
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
        description="India's Largest Construction Equipment Inventory!"
      />
    </div>
  );
}

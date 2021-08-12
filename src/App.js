import { Route, Switch } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home/Home";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import Menu from "./Menu";
import Product from "./Product/Product";
import Contact from "./Contact";
import { useEffect } from "react";
import Cart from "./Cart/Cart";
import ProductDetails from "./Product/ProductDetails";
import { AddProduct } from "./Product/AddProduct";
import { EditProduct } from "./Product/EditProduct";
import { useGlobalContext } from "./context";

export default function App() {
  const { getProduct, cartCount, setCartCount } = useGlobalContext();
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

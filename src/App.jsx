import { Redirect, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <Switch>
      <div className="min-h-screen font-Lato">
        <Header />
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </Switch>
  );
}

export default App;

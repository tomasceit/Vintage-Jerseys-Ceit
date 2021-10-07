import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryFilter from "./pages/CategoryFilter";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Vintage-Jerseys-Ceit" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/category/:keyName" component={CategoryFilter} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
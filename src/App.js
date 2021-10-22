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
import MyAccount from "./pages/MyAccount";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/Vintage-Jerseys-Ceit" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/myAccount" component={MyAccount} />
              <Route exact path="/myAccount/signIn" component={SignIn} />
              <Route exact path="/myAccount/signUp" component={SignUp} />
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/category/:keyName" component={CategoryFilter} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
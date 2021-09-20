import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemsListContainer />
      <hr />
      <ItemDetailContainer />
      <hr />
      <Footer />
    </>
  );
};

export default App;
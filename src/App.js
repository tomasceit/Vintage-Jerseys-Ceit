import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemsListContainer nombre='Victoria' />
    </>
  );
};

export default App;
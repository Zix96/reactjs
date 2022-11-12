import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent/FunctionalComponent";
import React from "react";

function App() {
  const [stock, setStock] = React.useState(20);
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent nombre={"Maxi"} stock={stock} />
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="button"
          onClick={() => {
            setStock(stock + 1);
            console.log(stock);
          }}
        >
          Agregar al carrito
        </button>
      </header>
    </div>
  );
}

export default App;

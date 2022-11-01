import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent/FunctionalComponent";

const objetFunction = {
  name: "Maxi",
  lastName: "Berenguer",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent
          name={objetFunction.name}
          lastname={objetFunction.lastName}
        />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

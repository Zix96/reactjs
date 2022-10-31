import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent/FunctionalComponent";
import Subtitulos from "./components/Subtitulos/Subtitulos";
import Formulario from "./components/Formulario/Formulario";
import Padre from "./components/Padre/Padre";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Padre saludo="Soy tu padre">
          <div>
            <h2>Soy tu hijo</h2>
          </div>
        </Padre>
        <Subtitulos text="Primer subtitulo" />
        <img src={logo} className="App-logo" alt="logo" />

        <FunctionalComponent nombre="Maximiliano" apellido="Berenguer" />
        <Subtitulos text="Segundo subtitulo" />
        <Subtitulos text="Tercer subtitulo" />
        <Formulario />
      </header>
    </div>
  );
}

export default App;

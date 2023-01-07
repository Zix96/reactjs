import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ producto }) => {
  return (
    <Link to={`item/${producto.id}`}>
      <div className="cards">
        <img className="imagenes" alt="imagenes" src={producto.img} />
        <h1>{producto.nombre}</h1>
      </div>
    </Link>
  );
};

export default Item;

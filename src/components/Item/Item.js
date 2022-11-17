import "./Item.css";
const Item = ({ producto }) => {
  return (
    <div className="cards">
      <img className="imagenes" alt="imagenes" src={producto.img} />
      <h1>{producto.nombre}</h1>
      <h2>TAMAÑO: {producto.tamaño}</h2>
      <h2>TIPO: {producto.tipo}</h2>
      <h2>THC: {producto.thc}</h2>
    </div>
  );
};

export default Item;

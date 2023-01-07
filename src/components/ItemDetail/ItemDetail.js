import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart } = useContext(cartContext);

  return (
    <div>
      <img className="imagenes" alt="imagenes" src={productSelected.img} />

      <h1>{productSelected.nombre}</h1>

      <h2>Tamaño: {productSelected.tamaño}</h2>
      <h2>THC: {productSelected.thc}</h2>
      <h2>{count}</h2>
      <ItemCount setCount={setCount} />

      <button onClick={() => addToCart(productSelected, count)}>
        Ver productos en carro
      </button>
      <h2>Cantidad de Productos: {cart.length}</h2>
      
      
    </div>
  );
};

export default ItemDetail;

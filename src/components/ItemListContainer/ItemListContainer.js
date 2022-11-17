import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";
import { useState } from "react";
import { data } from "../../data/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((respuesta) => {
      setProductList(respuesta);
    });
    setTimeout(() => {
      console.log(productList);
    }, 2000);
  }, [productList]);
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Hey, bienvenidos a nuestra tienda web</Alert.Heading>
        <p>
          Aqui podras encontrar toda variedad de semillas para cultivo en
          exterior o interior. Tambien podras encontrar articulos para que tus
          plantas se sientan con la mejor energia posible.
        </p>
        <hr />
        <p className="mb-0">
          Cualquier duda que tengas puedes contactarte con nosotros y con gusto
          te asesoraremos en lo que necesites!!
        </p>
      </Alert>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;

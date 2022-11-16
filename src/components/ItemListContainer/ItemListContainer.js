import Alert from "react-bootstrap/Alert";
import { data } from "../../data/data";

const ItemListContainer = () => {
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
    </div>
  );
};

export default ItemListContainer;

import logo from "../../assets/cartImage.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img className="cart-widget" src={logo} alt="cart widget" />
    </div>
  );
};

export default CartWidget;

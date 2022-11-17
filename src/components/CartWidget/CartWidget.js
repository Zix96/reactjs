import logo from "../../images/cartImage.webp";
import chala from "../../images/chala.png";
import "./CartWidget.css";
import "./Chala.css";
const CartWidget = () => {
  return (
    <div>
      <img className="cart-widget" src={logo} alt="cart widget" />
      <img className="chala-banner" src={chala} alt="chala" />
    </div>
  );
};

export default CartWidget;

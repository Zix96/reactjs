import logo from "../../assets/cartImage.png";
import chala from "../../assets/chala.png";
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

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>

        <Navbar.Brand href="#home">JavaSeeds</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Destacadas</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

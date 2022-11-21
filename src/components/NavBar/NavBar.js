import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
        <NavLink to="/" activeClassName="active">
          <Navbar.Brand href="home">JavaSeeds</Navbar.Brand>
        </NavLink>

        <Nav className="me-auto">
          <Nav.Link href="home">Inicio</Nav.Link>
          <Nav.Link href="destacadas">Destacadas</Nav.Link>
          <Nav.Link href="contacto">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

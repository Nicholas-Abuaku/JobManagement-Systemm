import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Logo
        </Navbar.Brand>
        <Nav.Link as={Link} to="/home">
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/jobs ">
          Jobs
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

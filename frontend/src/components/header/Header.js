import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": 'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/> Gold
            </Navbar.Brand>
            <NavBar.Toggle aria-controls="navbarscroll" />
            <NavBar.Collapse id="navbarscroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarscroll="true"
                >
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>
            </NavBar.Collapse>
        </Container>
    </Navbar>
  )
}


// export default Header;
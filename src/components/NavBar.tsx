import {Container, Nav,  Navbar as Navbarbs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <Navbarbs className="bg-white shadow-lg mb-3">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Home 
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About 
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store 
                </Nav.Link>
            </Nav>
        </Container>
    </Navbarbs>
  )
}

export default NavBar
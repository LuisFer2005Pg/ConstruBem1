import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarSimbolo.css'

function NavbarSimbolo () {
  

  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
       <Navbar.Brand href="#home"><img src="" alt="Logo" /></Navbar.Brand>
        <Container>
        <Navbar.Brand href="#home">ConstruBem</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        
    </>
  )
}

export default NavbarSimbolo


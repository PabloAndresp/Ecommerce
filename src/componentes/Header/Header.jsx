import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header =()=> {
  return (
    <Navbar bg = "dark" expand="lg" variant= 'dark'>
      <Container fluid>
    <Navbar.Brand href="/">Tecnologia para Todos</Navbar.Brand>
    <img src="/src/assets/logotech1.png" 
    width="200"
    height="80"
    className='d-inline-block align-top'/>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" style={{ flexGrow: 0}}>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/products">Productos</Nav.Link>
        <Nav.Link href="/auth/login">Ingreso</Nav.Link>
        
        <Nav.Link href="/auth/signup">
          Registro
        </Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
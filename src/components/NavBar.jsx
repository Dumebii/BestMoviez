import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBrand from './NavBrand';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import '../index.css';
import styles from './styles/navbar.module.css'


function NavBar() {
    return(
        <div >
             <Navbar bg="primary" expand="lg" variant="light" className={styles.navbar}>
      <Container>
        <NavBrand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" variant="light" className={styles.navlink} style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#link" className={styles.navlink} style={{color: "white"}}>Ratings</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className={styles.navlink} >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Documentary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Romance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    )
};

export default NavBar;

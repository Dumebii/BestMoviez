import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import download from "./download.png"
import '../App.css';
import '../index.css';

function NavBrand() {
    return(
        <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={download}
              width="40"
              height="40"
              className="d-inline-block align-top brand-image"
            />{' '}
            Best Movies
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavBrand
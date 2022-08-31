import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from './images/movieGrid1.jpg'
import image2 from './images/movieGrid2.webp'
import image3 from './images/movieGrid3.jpg'
import image4 from './images/movieGrid4.jfif'
import image5 from './images/movieGrid5.jpg'


function MovieGrid() {
    return(
    <div>
      <Container>
      <Row xs={6} md={4} lg={5}>
        <Col>
          <a href='#'>
            <img src={image1}
             style={{float: "left"}}
             height="250"
             width="100"
               />
          </a>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
        <Col>
          <a href='#'>
            <img src={image2}  
             height="250"
             width="100"
             />
          </a>
        </Col>
        <Col>
           <a href='#'>
            <img src={image3}
             height="250"
             width="100"
               />
          </a>
        </Col>
        <Col>
           <a href='#'>
            <img src={image4}
             height="250"
             width="100"
               />
          </a>
        </Col>
        <Col>
           <a href='#'>
            <img src={image5} 
             height="250"
             width="100"
              />
          </a>
        </Col>
      </Row>
      </Container>
    </div>)
}

export default MovieGrid
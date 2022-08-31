import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/movieGrid.module.css';
import image1 from './images/movieGrid1.jpg'
import image2 from './images/movieGrid2.webp'
import image3 from './images/movieGrid3.jpg'
import image4 from './images/movieGrid4.jfif'
import image5 from './images/movieGrid5.jpg'


function MovieGrid() {
    return(
        <section className={styles.moviegrid} >
    <div>
      <Container>
      <Row xs={6} md={4} lg={5}>
        <Col>
          <a href='#'>
            <img className={styles.gridimage} src={image1}
             
               />
          </a>
          <p>ratings: ⭐⭐⭐⭐</p>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
        <Col>
          <a href='#'>
            <img className={styles.gridimage} src={image2}
            
             />
          </a>
          <p>ratings: ⭐⭐⭐⭐</p>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
        <Col>
           <a href='#'>
            <img src={image3}
            className={styles.gridimage}
               />
          </a>
          <p>ratings: ⭐⭐⭐⭐</p>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
        <Col>
           <a href='#'>
            <img src={image4}
            className={styles.gridimage}
               />
          </a>
          <p>ratings: ⭐⭐⭐⭐</p>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
        <Col>
           <a href='#'>
            <img src={image5} 
           className={styles.gridimage}
              />
          </a>
          <p>ratings: ⭐⭐⭐⭐</p>
          <p>Trying this for luck at this point. Just adding more text to this to prove my point.</p>
        </Col>
      </Row>
      </Container>
    </div>
    </section>)

}

export default MovieGrid
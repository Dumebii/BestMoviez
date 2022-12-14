import Carousel from 'react-bootstrap/Carousel';
import firstImg from './images/begingingCarousel.jfif'
import image1 from './images/carousel-image1.jpg'
import image2 from './images/carousel-image2.jpg'
import image3 from './images/carousel-image3.webp'
import image4 from './images/carousel-image4.jpg'
import styles from './styles/carousel.module.css'


function MyCarousel() {
    return(
        <div>
           <Carousel bg="dark">
           <Carousel.Item>
        <img
        id={styles.carouselimage}
          className="d-block w-100"
          src={firstImg}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id={styles.carouselimage}
          className="d-block w-100"
          src={image1}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={image2}
          alt="second-slide"
          id={styles.carouselimage}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          id={styles.carouselimage}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
          id={styles.carouselimage}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MyCarousel;
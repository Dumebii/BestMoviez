import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/carousel-image1.jpg'
import image2 from './images/carousel-image2.jpg'
import image3 from './images/carousel-image3.webp'


function MyCarousel() {
    return(
        <div>
           <Carousel>
      <Carousel.Item>
        <img style={{padding: "0 40px"}}
          className="d-block w-100"
          src={image1}
          alt="First slide"
          height="300"
        //   width="1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{padding: "0 40px"}}
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          height="300"
        //   width="1"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{padding: "0 40px"}}
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          height="300"
        //   width="1"
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
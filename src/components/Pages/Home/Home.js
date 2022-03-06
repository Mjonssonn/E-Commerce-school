import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import LoremIpsum from 'react-lorem-ipsum';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Carousel variant='light'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/samuel1.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='caption'>
            <h5>Black Vinyl Jacket</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/beata1.jpg'
            alt='Third slide'
          />
          <Carousel.Caption className='caption'>
            <h5>Purple Vinyl Jacket</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <LoremIpsum p={1} />
      </Container>
    </div>
  );
};

export default Home;

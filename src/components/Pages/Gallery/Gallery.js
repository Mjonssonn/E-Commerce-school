import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../Cards/ProductCard';

const Gallery = () => {
  return (
    <div>
      <Container>
        <h1>Gallery</h1>
        <ProductCard />
      </Container>
    </div>
  );
};

export default Gallery;

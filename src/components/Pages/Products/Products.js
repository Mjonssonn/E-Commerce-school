import react from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from '../../Cards/ProductCard';

const Products = () => {
  return (
    <div>
      <Container>
        <h1>Products</h1>
        <ProductCard />
      </Container>
    </div>
  );
};

export default Products;

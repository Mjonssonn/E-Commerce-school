import React from 'react';
import Products from './Products';

const ProductCard = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={Products[0]} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Img variant='top' src={'./images/samuel1.jpg'} />
        <Card.Img variant='top' src={'./images/beata1.jpg'} />
        <Card.Img variant='top' src={'./images/grungephoto.jpg'} />
      </Card>
      <br />
    </div>
  );
};

export default ProductCard;

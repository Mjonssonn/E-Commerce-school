import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Img
          variant='top'
          src={'./images/samuel1.jpg'}
          alt='Black jacket'
        />
        <Card.Img
          variant='top'
          src={'./images/beata1.jpg'}
          alt='Purple jacket with spikes'
        />
        <Card.Img
          variant='top'
          src={'./images/grungephoto.jpg'}
          alt='Black and white photo'
        />
      </Card>
      <br />
    </div>
  );
};

export default ProductCard;

import React, { Component } from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import { Container } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>About</h1>
          <LoremIpsum p={4} />
        </Container>
      </div>
    );
  }
}

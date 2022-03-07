import React, { Component } from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>About</h1>
          <img src='./images/beata2.jpg' class='img-fluid' alt='About image' />
        </Container>
        <Container>
          <Row>
            <Col>
              <LoremIpsum p={1} />
            </Col>
            <Col>
              <LoremIpsum p={1} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

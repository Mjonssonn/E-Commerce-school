import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import LoremIpsum from 'react-lorem-ipsum';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Container className='contact-description'>
        <h1>Contact</h1>
        <LoremIpsum p={1} />
      </Container>
      <Container className='contact-form'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Container className='check-me-out'>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                className='col-xs'
                type='checkbox'
                label='Check me out'
              />
            </Form.Group>
          </Container>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;

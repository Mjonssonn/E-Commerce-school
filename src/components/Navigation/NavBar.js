import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './NavBar.css';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Gallery from '../Pages/Gallery/Gallery';

const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg='light' expand='lg' variant='light'>
          <Container>
            <Navbar.Brand className='logo' as={Link} to={'/home'}>
              KIM NOVAQ
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='justify-content-end' style={{ width: '100%' }}>
                <Nav.Link as={Link} to={'/gallery'}>
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to={'/about'}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={'/contact'}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;

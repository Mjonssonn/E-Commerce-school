import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './NavBar.css';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';

const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar expand='lg'>
          <Container>
            <Navbar.Brand className='logo' as={Link} to={'/home'}>
              KIM NOVAQ
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='justify-content-end' style={{ width: '100%' }}>
                <Nav.Link as={Link} to={'/products'}>
                  Products
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
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;

import React from 'react';
import './NavbarComponent.styles.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar className='navbar' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Vlasis Discount Games</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto nav-links'>
              <Nav.Link href='#home'>About</Nav.Link>
              <Nav.Link href='#link'>Something</Nav.Link>
              <Nav.Link href='#link'>Something2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

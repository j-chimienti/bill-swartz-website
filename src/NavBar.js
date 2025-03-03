import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
const Navbar = () => {
  return (
    <BootstrapNavbar bg='dark' variant={'dark'} expand='lg' className='navbar-dark'>
      <BootstrapNavbar.Brand as={Link} to='/'>
        Bill Swartz Golf School
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls='navbar-nav' />
      <BootstrapNavbar.Collapse id='navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/upload'>
            Upload Swing
          </Nav.Link>
          <Nav.Link as={Link} to='/testimonials'>
            Testimonials
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  )
}

export default Navbar

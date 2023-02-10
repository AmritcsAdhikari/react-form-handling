import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../index.css'

const NavComponent = () => {
  return (
    <>
        <Navbar className='bg-success'>
            <Container className='ms-0'>
                <Navbar.Brand className='text-white'>React Forms Handling</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default NavComponent
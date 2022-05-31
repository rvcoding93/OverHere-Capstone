import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navibar () {
  return (
    <>
      <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Submission Page">Submission Page</Nav.Link>
      <Nav.Link href="#Search Results">Search Results</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  </>
  )
}

export default Navibar
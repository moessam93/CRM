import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Axios from 'axios';

const NavbarMain = ({isLogged}) => {
  //redirect to home page after logout
  const logout = ()=>{
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    });
    
  }
  return (
    <div><Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CRM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isLogged?<Nav className="me-auto">
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/companies">Companies</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link onClick={logout} href="/logout">Logout</Nav.Link>
          </Nav>:<></>}
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  )
}

export default NavbarMain
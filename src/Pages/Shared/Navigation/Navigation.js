import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="bg">
             <Navbar className="fw-bold p-3" fixed="top"  bg="light" expand="lg">
  <Container>
    
    <Navbar.Brand>Nexus Travels</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-5">
        <Nav.Link as={HashLink} className="ms-4" to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#tours">Tours</Nav.Link>
        <Nav.Link as={Link} className="ms-4" to="/deleteTours">Delete Tours</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#contact">Contact</Nav.Link>
        {
           user?.email && <NavDropdown className="ms-4" title="Booking info" id="basic-nav-dropdown">
           <NavDropdown.Item><Link to="/mybooking" style={{textDecoration:'none',color:'black'}}>My Booking </Link></NavDropdown.Item>
           <NavDropdown.Item><Link to="/manageallbooking" style={{textDecoration:'none',color:'black'}}>Manage All Booking</Link></NavDropdown.Item>
         </NavDropdown>
       }
       {
           user?.email && <Link to="/addanewtour" style={{textDecoration:'none',color:'gray'}} className="ms-4 mt-2">Add A New Tour</Link>
       }
      </Nav>
      <Navbar.Text>
    
     {
       user?.email&& <span><img style={{height:'40px', width:'40px', borderRadius:'360px'}} src={user?.photoURL}></img></span>

     }
        <span className="ms-2">{user?.displayName}</span>
        
       {!user?.email?
          <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link>
          :  <Link to="/login"><button onClick={logOut} className="btn btn-primary ms-4">Log out</button></Link>
       }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;
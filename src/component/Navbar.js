// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// function Navbar() {
//   const mycart=useSelector((state)=>state.cart.value)
//   return (
//     <div>
//         <nav>
//       <NavLink to='/products'>Products</NavLink>
//       <NavLink to='/cart'>Mycart {mycart.length}</NavLink>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';


function Header() {
  const mycart = useSelector((state) => state.cart.value);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              My Cart 
              {mycart.length > 0 && (
                <Badge pill bg="primary" className="ms-2">
                  {mycart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

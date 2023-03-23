import React, { useState } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const [companyHovering, setCompanyHovering] = useState(false);

  const handleMouseOver = () => {
    console.log("hello");
    setCompanyHovering(true);
  };

  const handleMouseOut = () => {
    setCompanyHovering(false);
  };
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/Images/IPH-Logo.png"
              alt=""
              width="100"
              height="72"
              class="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown
                title="Company"
                id="navbarScrollingDropdown"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {companyHovering && (
                  <div className="navAbout">
                    <div>
                      <p>Our company</p>
                      <p>How we work</p>
                      <p>Core team</p>
                      <p>Agile development</p>
                      <p>Career</p>
                    </div>
                    <div>
                      <p>Full cycle product development</p>
                      <ul>
                        <li>Product Management</li>
                        <li>MVP</li>
                        <li>Startup</li>
                        <li>Enterprices</li>
                      </ul>
                    </div>
                    <div className="cardImageSection">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                          height="350px"
                          alt="bookImg"
                        />
                      </div>
                      <div>
                        <h4>How to be a successful app entrepreneur</h4>
                        <p>
                          Deep dive into our exclusive eBook that shares the
                          secret to how to transition from full time employee to
                          an app enterprenuer
                        </p>
                        <Button variant="primary">Download our eBook</Button>
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>
              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              ></NavDropdown>
              <NavDropdown
                title="Industries"
                id="navbarScrollingDropdown"
              ></NavDropdown>
              <Nav.Link href="#portfolioes">Portfolioes</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact" className="contact nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar
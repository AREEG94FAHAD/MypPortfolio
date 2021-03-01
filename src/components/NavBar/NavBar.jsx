import React from "react";
import { Row, Container, Col, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import Hi from "../../Images/1.png";
export default function NavBar() {
  return (
    <div className="NabBarMain">
      <Container fluid>
        <Row>
          <Col>
            <img
              src={Hi}
              width="350px"
              height="270px"
              style={{ marginTop: "-15px" }}
              alt=""
            />
          </Col>
          <Col className="name">Areeg Fahad</Col>
          <Col className="social">
            <a href="https://www.google.com">
              <i className="fab fa-telegram-plane "></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-facebook-square "></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-linkedin "></i>
            </a>
          </Col>
        </Row>
        </Container>
        <Row  className="justify-content-md-center" >
          <Navbar  expand="navbar navbar-expand-lg navbar-dark"  fixed>
            {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="#link">Home</Nav.Link>
                <Nav.Link href="#link">Aboute Me</Nav.Link>
                <Nav.Link href="#link">Education</Nav.Link>
                <Nav.Link href="#link">Experience</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#link">Certificates</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      

    </div>
  );
}

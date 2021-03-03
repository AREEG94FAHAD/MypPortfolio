import React from "react";
import { Row, Container, Col, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import Hi from "../../Images/1.png";
import Email from "../Email/Email";
export default function NavBar() {
  return (
    <div className="NabBarMain">
      <Container fluid>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <img
              src={Hi}
              width="300px"
              height="300px"
              style={{ marginTop: "-15px" }}
              alt=""
            />
          </Col>
          <Col lg={4} md={12} sm={12} className="name">
            Areeg Fahad
          </Col>
          <Col lg={4} md={12} sm={12} className="social">
            <a href="https://www.google.com">
              <i className="fab fa-telegram-plane fabb"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-instagram fabb"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-facebook-square fabb"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fab fa-linkedin fabb"></i>
            </a>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center">
        <Navbar  expand="navbar navbar-expand-lg navbar-dark">
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="mr-auto">
              <Nav.Link href="#link"> Home</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Myworks">My Works</Nav.Link>
              <Nav.Link href="#AbouteMe">Aboute Me</Nav.Link>
              <Nav.Link href="#Education">Education</Nav.Link>
              <Nav.Link href="#Experienec">Experience</Nav.Link>
              <Nav.Link href="#Certificates">Certificates</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#link"> <Email/> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
}

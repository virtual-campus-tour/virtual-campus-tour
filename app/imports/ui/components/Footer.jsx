import React from 'react';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto bg-light">
    <Container className="mt-3 mb-3">
      <Row>
        <Col xs lg="9">
          <h2 className="take-me-to-manoa">#TakeMeToManoa</h2>
          Improving lives through education and research
        </Col>
        <Col md="auto" className="justify-content-end">
          <Button variant="green" className="fs-4">Apply Now</Button>{' '}
        </Col>
      </Row>
    </Container>

    <div className="footer-color">
      <Container className="justify-content-evenly">
        <Row>
          <Col className="text-left">
            <Image src="https://manoa.hawaii.edu/wp/wp-content/uploads/2017/10/uhm-white-seal-nameplate@2x.png" className="pt-3 pb-3" />
          </Col>
          <Col className="pt-3">
            <Nav variant="dark" expand="lg" className="navbar-dark">
              <Nav.Link id="interest-uhm-nav" as={NavLink} to="/interest" key="interest">Interest</Nav.Link>
              <Nav.Link id="food-uhm-nav" as={NavLink} to="/food" key="food">Food</Nav.Link>
              <Nav.Link id="facilities-uhm-nav" as={NavLink} to="/facilities" key="facilities">Facilities</Nav.Link>
              <Nav.Link id="campus-life-uhm-nav" as={NavLink} to="/campusLife" key="campusLife">Campus Life</Nav.Link>
              <Nav.Link id="majors-uhm-nav" as={NavLink} to="/majors" key="majors">Majors</Nav.Link>
              <Nav.Link id="clubs-uhm-nav" as={NavLink} to="/clubs" key="clubs">Clubs</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center pt-4">
            <Button variant="green" className="fs-4">Book an in-person tour soon</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;

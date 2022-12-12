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
          <Button variant="green" className="fs-4" href="https://manoa.hawaii.edu/admissions/apply/">Apply Now</Button>{' '}
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
              <Nav.Link id="ics-department-foot" as={NavLink} to="/ICSDepartment" key="ics-department-foot">Computer Science Department & Clubs</Nav.Link>
              <Nav.Link id="food-uhm-foot" as={NavLink} to="/dining" key="food">Food</Nav.Link>
              <Nav.Link id="classrooms-uhm-foot" as={NavLink} to="/classrooms" key="classrooms">Classrooms</Nav.Link>
              <Nav.Link id="dorming-uhm-foot" as={NavLink} to="/dorming" key="dorming">Dorming</Nav.Link>
              <Nav.Link id="study-uhm-foot" as={NavLink} to="/study-areas" key="study">Study Areas</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center pt-4">
            <Button variant="white" className="fs-4" href="https://manoa.hawaii.edu/admissions/visit/">Book an in-person tour soon</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;

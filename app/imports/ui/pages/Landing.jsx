import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (

  <Container fluid className="py-3 container-fluid spacer">
    <Row>
      <Col>
        <Container className="pt-4 left-centered-column">
          <h2 className="text-color">Virtual Guided Tour of Manoa</h2>
          <h6 className="text-color">Student Life | Departments | About UHM</h6>
        </Container>
      </Col>
      <Col>
        <Container className="pt-4">
          <Button variant="green" className="btn btn-lg fs-2">
            Start Virtual Tour
          </Button>
        </Container>
      </Col>
    </Row>
  </Container>

);

export default Landing;

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const TourEndComp = () => (
  <Container>
    <Row>
      <h1 className="text-center py-2 ">Thank you for taking our tour!</h1>
      <h2 className="text-center">We look forward to seeing you on campus! Go Bows!</h2>
    </Row>
    <Row className="py-4">
      <Button href="https://manoa.hawaii.edu/admissions/visit/" variant="green" className="btn btn-lg fs-2">
        Book an In-Person Tour Now
      </Button>
    </Row>
    <Row className="justify-content-center py-4">
      <Col>
        <img src="/images/students-mccarthy-tourend.jpeg" alt="students" width="700" />
      </Col>
      <Col className="justify-content-center">
        <h3>Find out whats happening on campus today </h3>
        <Button href="https://manoa.hawaii.edu/news/" variant="green" className="btn btn-lg fs-2">
          Check out More!
        </Button>
        <h3 className="pt-5"> Check out the UH Manoa Website </h3>
        <Button href="https://manoa.hawaii.edu/admissions/" variant="green" className="btn btn-lg fs-2">
          Take me to Manoa!
        </Button>
      </Col>
    </Row>
  </Container>
);

export default TourEndComp;

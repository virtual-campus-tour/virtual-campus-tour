import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Admission = () => (
  <>
    <h1 className="text-center">Freshman Admission Information</h1>
    <Container>
      <h2 className="text-center">High School Requirements</h2>
      <Row>
        <Col>
          <h4 className="text-center">English</h4>
          <h5 className="text-center">4 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Math</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Science</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Social Science</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center">Other College Prep</h4>
          <h5 className="text-center">4 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Elective</h4>
          <h5 className="text-center">5 Units</h5>
        </Col>
      </Row>

    </Container>
    <Container>
      <h2 className="text-center">Application Deadline</h2>
    </Container>
    <Container>
      <h2 className="text-center">Cost</h2>
    </Container>
  </>
);

export default Admission;

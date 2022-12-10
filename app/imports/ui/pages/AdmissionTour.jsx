import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdmissionComp from '../components/Admission-comp';

const AdmissionTour = () => (

  <>
    <AdmissionComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/DeptTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
        </Col>
        <Col className="center">
          <Button href="/ScholarshipTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
        </Col>
      </Row>
    </Container>
  </>

);

export default AdmissionTour;

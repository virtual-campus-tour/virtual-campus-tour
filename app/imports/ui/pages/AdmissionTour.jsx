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
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/ScholarshipTour" variant="green" className="btn btn-lg fs-2" id="scholarships-page-click">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default AdmissionTour;

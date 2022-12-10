import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ScholarshipComp from '../components/Scholarship-comp';

const ScholarshipTour = () => (

  <>
    <ScholarshipComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/AdmissionTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
        </Col>
        <Col className="center">
          <Button href="/TourEnd" variant="green" className="btn btn-lg fs-2">
            Finish Tour
          </Button>
        </Col>
      </Row>
    </Container>

  </>

);

export default ScholarshipTour;

import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import AdmissionComp from '../components/Admission-comp';

const AdmissionTour = () => (

  <>
    <AdmissionComp />
    <Container>
      <Row className="mt-3">
        <Button href="/ScholarshipTour" variant="green" className="btn btn-lg fs-2">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default AdmissionTour;

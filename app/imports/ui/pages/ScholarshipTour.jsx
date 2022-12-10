import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ScholarshipComp from '../components/Scholarship-comp';

const ScholarshipTour = () => (

  <>
    <ScholarshipComp />
    <Container>
      <Row className="mt-3">
        <Button href="#" variant="green" className="btn btn-lg fs-2">
          Next Page
        </Button>
      </Row>
    </Container>

  </>

);

export default ScholarshipTour;

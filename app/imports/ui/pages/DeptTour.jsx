import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import DeptComp from '../components/Dept-comp';

const DeptTour = () => (

  <>
    <DeptComp />
    <Container>
      <Row className="mt-3">
        <Button href="/ScholarshipTour" variant="green" className="btn btn-lg fs-2">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default DeptTour;

import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import AthleticsComp from '../components/Athletics-comp';

const AthleticsTour = () => (

  <>
    <AthleticsComp />
    <Container>
      <Row className="mt-3">
        <Button href="/DeptTour" variant="green" className="btn btn-lg fs-2">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default AthleticsTour;

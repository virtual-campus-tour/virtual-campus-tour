import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DeptComp from '../components/Dept-comp';

const DeptTour = () => (

  <>
    <DeptComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/AthleticsTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
        </Col>
        <Col className="center">
          <Button href="/AdmissionTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
        </Col>
      </Row>
    </Container>
  </>

);

export default DeptTour;

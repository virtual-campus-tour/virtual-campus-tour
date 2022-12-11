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
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/POSTTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default DeptTour;

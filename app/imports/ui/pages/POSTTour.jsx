import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import POSTComp from '../components/POST-comp';

const POSTTour = () => (

  <>
    <POSTComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/DeptTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/AdmissionTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default POSTTour;

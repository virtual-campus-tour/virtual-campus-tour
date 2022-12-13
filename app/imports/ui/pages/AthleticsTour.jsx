import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AthleticsComp from '../components/Athletics-comp';

const AthleticsTour = () => (

  <>
    <AthleticsComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/WRCTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/DeptTour" variant="green" className="btn btn-lg fs-2" id="department-page-click">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default AthleticsTour;

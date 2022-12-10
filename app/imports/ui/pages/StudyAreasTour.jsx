import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import StudyAreasComp from '../components/StudyAreas-comp';

const StudyAreasTour = () => (

  <>
    <StudyAreasComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/WRCTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/AthleticsTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>

  </>

);

export default StudyAreasTour;

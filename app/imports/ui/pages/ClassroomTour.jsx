import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ClassroomComp from '../components/Classroom-comp';

const ClassroomTour = () => (

  <>
    <ClassroomComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/diningTour" variant="green" className="btn btn-lg fs-2" id="dorming-page-click">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/CampusCenterTour" variant="green" className="btn btn-lg fs-2" id="CampusCenterTour-page-click">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default ClassroomTour;

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CampusCenterComp from '../components/CampusCenter-comp';

const ClassroomTour = () => (

  <>
    <CampusCenterComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/ClassroomTour" variant="green" className="btn btn-lg fs-2" id="ClassroomTour-page-click">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/WRCTour" variant="green" className="btn btn-lg fs-2" id="WRCTour-page-click">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default ClassroomTour;

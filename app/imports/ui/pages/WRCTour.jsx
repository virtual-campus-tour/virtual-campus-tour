import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import WRCComp from '../components/WRC-comp';

const WRCTour = () => (

  <>
    <WRCComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/CampusCenterTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/StudyAreasTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default WRCTour;

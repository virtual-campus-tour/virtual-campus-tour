import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DiningComp from '../components/Dining-comp';

const DiningTour = () => (

  <>
    <DiningComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/DormingTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/ClassroomTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default DiningTour;

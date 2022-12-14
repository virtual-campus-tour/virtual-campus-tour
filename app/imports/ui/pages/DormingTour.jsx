import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DormingComp from '../components/Dorming-comp';

const DormingTour = () => (

  <>

    <DormingComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/GeneralTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
          <div className="small-spacer" />
        </Col>
        <Col className="center">
          <Button href="/DiningTour" variant="green" className="btn btn-lg fs-2" id="dining-page-click">
            Next Page
          </Button>
          <div className="small-spacer" />
        </Col>
      </Row>
    </Container>
  </>

);

export default DormingTour;

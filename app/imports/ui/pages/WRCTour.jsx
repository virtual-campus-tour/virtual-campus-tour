import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import WRCComp from '../components/WRC-comp';

const WRCTour = () => (

  <>
    <WRCComp />
    <Container>
      <Row className="mt-3">
        <Col className="center">
          <Button href="/ClassroomTour" variant="green" className="btn btn-lg fs-2">
            Previous Page
          </Button>
        </Col>
        <Col className="center">
          <Button href="/AthleticsTour" variant="green" className="btn btn-lg fs-2">
            Next Page
          </Button>
        </Col>
      </Row>
    </Container>
  </>

);

export default WRCTour;

import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import WRCComp from '../components/WRC-comp';

const WRCTour = () => (

  <>
    <WRCComp />
    <Container>
      <Row className="mt-3">
        <Button href="/AthleticsTour" variant="green" className="btn btn-lg fs-2">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default WRCTour;

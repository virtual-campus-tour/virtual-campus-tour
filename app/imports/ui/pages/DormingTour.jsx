import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import DormingComp from '../components/Dorming-comp';

const DormingTour = () => (

  <>

    <DormingComp />
    <Container>
      <Row className="mt-3">
        <Button href="/DiningTour" variant="green" className="btn btn-lg fs-2" id="dining-page-click">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default DormingTour;

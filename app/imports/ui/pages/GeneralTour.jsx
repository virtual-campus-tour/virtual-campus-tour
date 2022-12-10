import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import GeneralComp from '../components/General-comp';

const GeneralTour = () => (

  <>
    <GeneralComp />
    <Container>
      <Row className="mt-3">
        <Button href="/DormingTour" variant="green" className="btn btn-lg fs-2" id="dorming-page-click">
          Next Page
        </Button>
        <div className="small-spacer" />
      </Row>
    </Container>

  </>

);

export default GeneralTour;

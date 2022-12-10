import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ClassroomComp from '../components/Classroom-comp';

const ClassroomTour = () => (

  <>
    <ClassroomComp />
    <Container>
      <Row className="mt-3">
        <Button href="/WRCTour" variant="green" className="btn btn-lg fs-2" id="dorming-page-click">
          Next Page
        </Button>
      </Row>
    </Container>
  </>

);

export default ClassroomTour;

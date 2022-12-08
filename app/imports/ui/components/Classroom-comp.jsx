import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ClassroomComp = () => (

  <Container className="small-spacer">

    <h1 className="text-center">Classrooms</h1>

    <p className="text-center">UH Manoa is host to a bunch of modern classrooms</p>

    <Container className="small-spacer">

      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Classes</h2>
          </Col>
          <Col>
            <img className="class-format centered" src="/images/web101.jpg" alt="Webster Hall" />
          </Col>
        </Row>
      </Container>
      <Container className="small-spacer">
        <Row>
          <Col>
            <img className="class-format centered" src="/images/moore228.jpg" alt="Moore Hall" />
          </Col>
          <Col>
            <h2 className="text-center">More About Classes</h2>
          </Col>
        </Row>
      </Container>
      <Container className="small-spacer">
        <Row>
          <Col>
            <h2 className="text-center">Labs</h2>
          </Col>
          <Col>
            <img className="class-format centered" src="/images/BIL-337-lab.jpg" alt="Bilger Lab" />
          </Col>
        </Row>
      </Container>

    </Container>

  </Container>

);

export default ClassroomComp;

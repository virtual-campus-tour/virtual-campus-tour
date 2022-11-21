import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Department = () => (

  <>
    <Container>
      <h2 className="text-center">Information and Computer Science</h2>
      <Container className="box-size">
        <h3>Image Box</h3>
      </Container>
    </Container>
    <hr className="line-thick" />
    <Container>
      <h2 className="text-center">Clubs</h2>

      <Row>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container className="dept-spacer">
      <h2 className="text-center">Research</h2>
      <Row>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <p>Text Field</p>
          </Container>
        </Col>
      </Row>
    </Container>

  </>
);

export default Department;

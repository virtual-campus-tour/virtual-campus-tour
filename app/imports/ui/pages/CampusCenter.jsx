import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CampusCenter = () => (
  <Container id="campus-center">
    <div className="small-spacer">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="general-image centered" src="/images/campus-center.jpg" alt="CampusCenter" />
    </div>
    <div className="small-spacer para-spacing">
      <Row>
        <h1 className="text-center">Campus Center</h1>
        <p className="text-center-p">Campus Center serves as a focal point of campus, where there are events happening in the area during the day. These events promote student engagement and are apart of campus life</p>
      </Row>
      <Row>
        <Col className="text-center">
          <img className="center-image-campus" src="/images/campus-center-activities-2.jpeg" alt="CampusCenter" />
        </Col>
        <Col className="text-center">
          <img className="center-image-campus" src="/images/campus-center3.jpeg" alt="CampusCenter" />
        </Col>
        <Col>
          <img className="center-image-campus" src="/images/campus-center-activities.jpg" alt="CampusCenter" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="small-spacer" />
          <h4 className="text-center">
            This is known as a place of leisure activities. There are also food places around campus that can be viewed on the dining page.
          </h4>
        </Col>
      </Row>
      <Row className="center">
        <img className="center-image-full" src="/images/UH-Manoa-Campus-Center.jpg" alt="Manoa Athletics" />
      </Row>
      <div className="small-spacer" />
    </div>

  </Container>
);

export default CampusCenter;

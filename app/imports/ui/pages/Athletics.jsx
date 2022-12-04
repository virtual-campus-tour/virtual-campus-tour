import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Athletics = () => (
  <Container id="athletics-page">
    <div className="small-spacer">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="general-image centered" src="/images/hawaii-athletics.jpg" alt="AthleticsImage" />
    </div>
    <div className="small-spacer para-spacing">
      <Row>
        <h1 className="text-center">About the University of Hawaii Athletics</h1>
        <h2 className="text-center">The University of Hawaii at Manoa has a wide variety of sports that include men and women sports.</h2>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>WOMEN SPORTS</h2>
          <h3>Basketball</h3>
          <h3>Beach Volleyball</h3>
          <h3>Cross Country</h3>
          <h3>Golf</h3>
          <h3>Sailing</h3>
          <h3>Soccer</h3>
          <h3>Softball</h3>
          <h3>Swimming & Diving</h3>
          <h3>Tennis</h3>
          <h3>Track and Field</h3>
          <h3>Volleyball</h3>
          <h3>Water Polo</h3>
        </Col>
        <Col className="text-center">
          <h2>CO-ED SPORTS</h2>
          <h3>Cheerleading</h3>
          <h3>Sailing</h3>
        </Col>
        <Col>
          <Row>
            <h2>MEN SPORTS</h2>
            <h3>Baseball</h3>
            <h3>Basketball</h3>
            <h3>Football</h3>
            <h3>Golf</h3>
            <h3>Swimming & Diving</h3>
            <h3>Tennis</h3>
            <h3>Volleyball</h3>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Divisons</h2>
          <h4 className="text-center">
            The University of Hawaii participates in the Mountain West Conference, Big West Conference and Mountain Pacific Sports Federation.
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="/images/mountain-west.png" alt="mountain-west" className="box-img-sizeLogo" />
        </Col>
        <Col>
          <img src="/images/big-west.jpg" alt="bigwest" className="box-img-sizeLogoBW" />
        </Col>
        <Col>
          <img src="/images/mountain-pacific.png" alt="medical" className="box-img-sizeLogo" />
        </Col>
      </Row>
      <img className="centered" src="/images/manoa-athletics.png" alt="Manoa Athletics" />
      <div className="small-spacer" />
    </div>

  </Container>
);

export default Athletics;

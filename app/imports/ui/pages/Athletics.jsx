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
        <h2 className="text-center">The University of Hawaii at Manoa has a wide variety of sports that include men, women and coed sports.</h2>
      </Row>

      <Row>
        <div className="small-spacer" />
        <h2 className="center">WOMEN SPORTS</h2>
        <Col className="center">
          <img src="/images/women-basketball.png" alt="women-basketball" className="center-image-athletics" />
          <h3>Basketball</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-beachvolleyball.png" alt="women-beachvolleyball" className="center-image-athletics" />
          <h3>Beach Volleyball</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-crosscountry.png" alt="women-crosscountry" className="center-image-athletics" />
          <h3>Cross Country</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-golf.png" alt="women-golf" className="center-image-athletics" />
          <h3>Golf</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-sailing.png" alt="women-sailing" className="center-image-athletics" />
          <h3>Sailing</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-soccer.png" alt="women-soccer" className="center-image-athletics" />
          <h3>Soccer</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-softball.png" alt="women-softball" className="center-image-athletics" />
          <h3>Softball</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-swimming.png" alt="women-swimming" className="center-image-athletics" />
          <h3>Swimming & Diving</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-tennis.png" alt="women-tennis" className="center-image-athletics" />
          <h3>Tennis</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-track-and-field.png" alt="women-track" className="center-image-athletics" />
          <h3>Track and Field</h3>
        </Col>
        <Col className="center">
          <img src="/images/rainbow-wahine.png" alt="women-wahine" className="center-image-athletics" />
        </Col>
        <Col className="center">
          <img src="/images/women-volleyball.png" alt="women-volleyball" className="center-image-athletics" />
          <h3>Volleyball</h3>
        </Col>
        <Col className="center">
          <img src="/images/women-waterpolo.png" alt="women-waterpolo" className="center-image-athletics" />
          <h3>Water Polo</h3>
        </Col>
        <Col className="center">
          <img src="/images/rainbow-wahine.png" alt="rainbow-wahine" className="center-image-athletics" />
        </Col>
      </Row>
      <Row>
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

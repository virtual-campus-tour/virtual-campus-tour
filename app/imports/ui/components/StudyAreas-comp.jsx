import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const StudyAreasComp = () => (
  <Container id="athletics-page">
    <div className="small-spacer">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="general-image centered" src="/images/uh-manoa-front.png" alt="AthleticsImage" />
    </div>
    <div className="small-spacer para-spacing">
      <Row>
        <h1 className="text-center">Study Areas at the University of Hawaii at Manoa</h1>
        <p className="text-center-p">Around the campus, there are several places where students are able to find places to study</p>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Hamilton Library</h2>
          <p className="text-center-p">
            Hamilton Library is located on the east side of campus, near many of the buildings where undergraduate classes are held. These study areas are in an air conditioned space.
          </p>
          <h3>
            Hours
          </h3>
          <h4>(Subject to Change)</h4>
          <p className="text-center-p">
            Monday - Thursday 8:00 am - 10:00 pm
            <br />
            Friday 8:00 am - 6:00 pm
            <br />
            Saturday 9:00 am - 5:00 pm
            <br />
            Sunday 12:00 pm - 10:00 pm
            <br />
          </p>
        </Col>
        <Col className="text-center">
          <br />
          <br />
          <br />
          <br />
          <img className="general-image centered" src="/images/study-areas-hamilton.jpeg" alt="AthleticsImage" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="general-image centered" src="/images/sakamaki-study-areas.jpeg" alt="AthleticsImage" />
        </Col>
        <Col>
          <br />
          <br />
          <br />
          <h2 className="text-center">Sakamaki Hall</h2>
          <p className="text-center-p">
            Sakamaki Hall is located on the east side of campus. The seating is outdoors right outside common classrooms that recitations and smaller classes are held.
          </p>
        </Col>
      </Row>
      <div className="small-spacer" />
      <Row>
        <Col className="text-center">
          <h2>Sinclair Library</h2>
          <p className="text-center-p">
            Sinclair Library is located on the west side of campus. It is a two story library. These study areas are indoors but allow students to be immersed in the nature around them. There are both indoors and outdoor study spaces.
          </p>
          <h3>
            Hours
          </h3>
          <h4>(Subject to Change)</h4>
          <p className="text-center-p">
            Monday - Thursday 8:00 am - 9:00 pm
            <br />
            Friday 8:00 am - 5:00 pm
            <br />
            Saturday 10:00 am - 5:00 pm
            <br />
            Sunday 12:00 pm - 9:00 pm
            <br />
          </p>
          <h6>
            Note:
            <br />
            Monday - Friday the 2nd and 3rd floor are closed at 4:45 pm.
            <br />
            Saturday and Sunday the 1st floor is only available
          </h6>
        </Col>
        <Col className="text-center">
          <br />
          <br />
          <img className="general-image centered" src="/images/sinclair-study-areas.jpeg" alt="AthleticsImage" />
        </Col>
      </Row>
      <div className="small-spacer" />
      <Row>
        <Col>
          <img className="general-image centered" src="/images/sustainabilitycourtyard.jpg" alt="AthleticsImage" />
        </Col>
        <Col>
          <br />
          <br />
          <br />
          <h2 className="text-center">Kuykendall Hall</h2>
          <p className="text-center-p">
            Kuykendall Hall is located on the east side of campus. The seating is outdoors right outside common classrooms that recitations and smaller classes are held.
          </p>
        </Col>
      </Row>
      <div className="small-spacer" />
    </div>

  </Container>
);

export default StudyAreasComp;
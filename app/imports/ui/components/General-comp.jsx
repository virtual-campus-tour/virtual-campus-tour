import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const GeneralComp = () => (
  <>
    <div className="small-spacer" id="general-page">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="general-image centered" src="/images/UH-top.jpg" alt="Main Image" />
    </div>

    <div className="small-spacer para-spacing">
      <Row>
        <Col>
          <h2 className="text-center">About the University of Hawaii</h2>
          <p>
            The University of Hawaii was founded in 1907 and in 1912 was relocated to Manoa Valley with Hawaii Hall being the first permanent building to be established.
            Throughout the 1930s the University continued to grow and now has 10 campuses throughout the state of Hawaii.
            Currently, the University of Hawaii spans 320 acres and is home to over 18,000 students that is very diversified.
          </p>
        </Col>
        <Col>
          <h2 className="text-center">Where to Find the University of Hawaii</h2>
          <p>
            UH Manoa is located in the beautiful Manoa valley just outside of Honolulu on the island of Oahu. Only 15 minutes away from the beach by bus.
          </p>
        </Col>
      </Row>
    </div>

    <div className="small-spacer">
      <img className="centered" src="/images/general-image.png" alt="General Manoa" />
    </div>

    <Container className="small-spacer">
      <h3 className="text-center">Maluna aʻe o nā lāhui a pau ke ola ke kanaka</h3>
      <h3 className="text-center">(Above all nations is humanity)</h3>
    </Container>
  </>
);

export default GeneralComp;

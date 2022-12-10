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
            The student population at the University of Hawaii at Manoa includes residents from Oahu, neighbor islands, US mainland and international students.
          </p>
        </Col>
        <Col>
          <h2 className="text-center">Where to Find the University of Hawaii</h2>
          <p>
            The University of Hawaii at Manoa is located in the beautiful Manoa valley just outside of Honolulu on the island of Oahu. Only 15 minutes away from the beach by bus.
            Being on an island there are numerous resources available on campus such as Coconut Island where there is ongoing marine biology research and a unique local population of Native Hawaiians and Pacific Islanders.
          </p>
        </Col>
      </Row>
    </div>
    <Row>
      <h2 className="text-center">Undergraduate Diversity</h2>
      <Col>
        <img className="center-diagram" src="/images/Undergraduate-Diversity.png" alt="Diversity" />
      </Col>
      <Col>
        <p className="text-center-p">
          The undergraduate population is very diverse of people from different background.
        </p>
        <p className="text-center-p">Asian 33%</p>
        <p className="text-center-p">Caucasian 27.5%</p>
        <p className="text-center-p">Native Hawaiian or other Pacific Islander 17.7%</p>
        <p className="text-center-p">Multiracial 16.6%</p>
        <p className="text-center-p">Hispanic 2.2%</p>
        <p className="text-center-p">Black or African American 1.8%</p>
        <p className="text-center-p">American Indian or Alaska Native 0.6%</p>
      </Col>
    </Row>
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

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Department = () => (

  <>
    <div>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="general-image centered" src="/images/UH-top.jpg" alt="Main Image" />
    </div>

    <div>
      <img src="/images/general-image.png" alt="General Manoa" />
    </div>

    <Container>
      <Row>
        <Col>
          <h2>Motto:</h2>
        </Col>
        <Col>
          <h4>Maluna aʻe o nā lāhui a pau ke ola ke kanaka</h4>
          <h4>(Above all nations is humanity)</h4>
        </Col>
      </Row>
    </Container>

  </>
);

export default Department;

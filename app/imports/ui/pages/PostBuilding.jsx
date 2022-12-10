import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const PostBuilding = () => (
  <Container className="small-spacer">
    <Row>
      <Container className="small-spacer">
        <Row>
          <Col>
            <img className="image-fill general-image centered" src="/images/POST-Building-Image.png" alt="POST Building" />
          </Col>
          <Col>
            <img className="image-fill general-image centered" src="/images/post-angled" alt="Post Angled" />
          </Col>
        </Row>
      </Container>
    </Row>
    <Container className="small-spacer">
      <h1>Pacific Ocean Science Technology Building</h1>
      <Col>
        <p>
          As a leading campus in STEM, our Pacific, Ocean, Science and Technology building, commonly referred to as POST. Features our Hawai’i Space Flight laboratory and planetarium.
        </p>
        <p>
          Our CyberCANOE data visualization system in Keller Hall can quickly analyze and interpret massive amounts of data collected by oceanographers and astronomers.
        </p>
        <p>
          Within Holmes Hall our College of Engineering is developing our future leaders within the disciplines of civil, computer, electrical, and mechanical as the only accredited engineering programs offered in the state of Hawaii by ABET.
        </p>
        <p>
          With new engineering science degrees offered in concentration focuses in biomedical and aeronautical engineering, our STEM programs are providing opportunities of the next generation.
        </p>
      </Col>
    </Container>
    <Row>
      <Button href="#" variant="green" className="btn btn-lg fs-2">
        Next Page
      </Button>
    </Row>
  </Container>
);

export default PostBuilding;

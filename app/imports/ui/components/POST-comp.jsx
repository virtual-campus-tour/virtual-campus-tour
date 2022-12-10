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
    <Container className="center">
      <div className="small-spacer" />
      <h1>Pacific Ocean Science Technology Building (POST)</h1>
      <Col>
        <p className="text-center-p">
          As a leading campus in STEM, our Pacific, Ocean, Science and Technology building, commonly referred to as POST. Features our Hawai’i Space Flight laboratory and planetarium.
        </p>
        <Container className="small-spacer">
          <Row>
            <Col>
              <p className="text-center-p tiny-spacer">
                Our CyberCANOE data visualization system in Keller Hall can quickly analyze and interpret massive amounts of data collected by oceanographers and astronomers.
                With new engineering science degrees offered in concentration focuses in biomedical and aeronautical engineering, our STEM programs are providing opportunities of the next generation.
              </p>
            </Col>
            <Col>
              <img className="image-fill general-image centered" src="/images/cyberCanoe.png" alt="CyberCanoe" />
            </Col>
          </Row>
        </Container>
        <Container className="small-spacer small-spacer-bottom">
          <Row>
            <Col>
              <img className="image-fill general-image centered" src="/images/ICSpace_photo.png" alt="ICSpace" />
            </Col>
            <Col>
              <p className="text-center-p small-spacer">
                Within the POST building on the third floor is ICSpace, known as a lounge for Computer Science students, where club meetings and leisure/ study time between classes occur.
                In this space, there are servers maintained by the cybersecurity club along with white boards and tables for effective studying.
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Container>

  </Container>
);

export default PostBuilding;

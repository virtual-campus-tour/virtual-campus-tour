import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Department = () => (

  <>
    <div>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="dept-img" src="//www.ics.hawaii.edu/wp-content/uploads/2014/03/slider-ics1.jpg" alt="Main Image" />
      <h2 className="text-center move-text">Information and Computer Science</h2>
    </div>
    <Container>
      <h2 className="text-center pb-3 pt-5">Clubs</h2>

      <Row>
        <Col>
          <Container className="container-border">
            <div className="text-center pt-2">
              <img src="/images/GHImg.webp" alt="Grey Hats Logo" />
            </div>
            <h4 className="text-center">Grey Hats</h4>
            <p className="text-center">Grey Hats is a club that focuses on cyber security</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <div className="text-center pt-2">
              <img src="/images/ACMImg.webp" alt="ACM Logo" />
            </div>
            <h4 className="text-center">ACM</h4>
            <p className="text-center">ACM is a club that hosts many computer science related events</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <div className="text-center pt-2">
              <img src="/images/PandasImg.webp" alt="Pandas Logo" />
            </div>
            <h4 className="text-center">PANDA</h4>
            <p className="text-center">PANDA is a club for learning data structures and algorithms</p>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container className="dept-spacer pb-5">
      <h2 className="text-center pb-3">Research</h2>
      <Row>
        <Col>
          <Container className="container-border">
            <div className="text-center">
              <img src="/images/lavaLabLogo200x200.jpg" alt="Lava Lab Logo" className="box-img-size" />
            </div>
            <h4 className="text-center">LAVA Lab</h4>
            <p className="text-center">The LAVA lab is ...</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-border">
            <div className="text-center">
              <img src="/images/peter-sadowski.jpg" alt="peter-sadowski" className="box-img-sizeP" />
              <img src="/images/mamogram.jpg" alt="mamogram" className="box-img-sizeS" />
              <img src="/images/medical.jpg" alt="medical" className="box-img-sizeS" />
              <img src="/images/peter-washington.jpg" alt="peter-washington" className="box-img-sizeP" />
            </div>
            <h4 className="text-center">Medical Imaging</h4>
            <p className="text-center">Computer Science faculty Dr. Peter Washington and Dr. Peter Sadowski collaborated with Dr. John Shepherd at the UH Cancer Center to apply AI to medical imaging applications, including total-body DXA,breast cancer detection, and the Makawalu project which is developing a portable AI-based  ultrasound breast cancer screening tool.</p>
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

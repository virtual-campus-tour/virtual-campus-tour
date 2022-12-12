import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DeptComp = () => (

  <div id="department-page">
    <div>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="dept-img" src="//www.ics.hawaii.edu/wp-content/uploads/2014/03/slider-ics1.jpg" alt="Main Image" />
      <h2 className="text-center move-text">Information and Computer Science</h2>
    </div>
    <Container>
      <h2 className="text-center pb-3 pt-4">Clubs</h2>
      <Row>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/ACMLogo.webp" alt="ACM Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">Association for Computing Machinery</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">The Association for Computing Machinery at UH Manoa (ACManoa/ACM) is the largest computer science organization, welcoming all students of different backgrounds, interests, and skill levels. We are a registered student chapter of the International Association for Computing Machinery society. We fulfill our goals of providing social, professional, and technical enrichment for our members by providing various opportunities.</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/GameDevLogo.jpg" alt="Game Dev Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">Game Dev</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">The University of Hawaii at Manoa Game Development Club focuses on the collaborative production of video games using Unity, Maya, and Unreal Engine. Our members work together to create unique designs, art, and mechanics for the participation of 1-2 game jams. No experience is required to join as we all enter with a mindset of learning something new.
            </p>
          </Container>
        </Col>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/SWITCHLogo.png" alt="SWITCH Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">SWITCH</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">SWITCH stands for Supporting Women in Technology and Computing Hawaii. We are dedicated to supporting women and minorities, promoting gender and racial equality, facilitating professional, technical & personal development events, creating an environment and atmosphere where women can feel safe, preventing violence against women by raising awareness of campus resources, and provide an overall sense of community.
            </p>
          </Container>
        </Col>
      </Row>
      <div className="small-spacer" />
      <Row>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/BDCUHLogo.png" alt="BDCUH Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">Ballroom Dance Club</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">Did you know that the top Amateur Collegiate Ballroom Dancers in the USA in the past few years have been Computer Science majors working in the High Tech industry? Did you know that Carnegie Mellon University, Georgia Tech, the University of Minnesota and Purdue University are in the top 10 collegiate ballroom teams? (And many of the competitors are Computer Science and Engineering majors!)
            </p>
          </Container>
        </Col>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/GreyHatsLogo.webp" alt="Grey Hats Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">Grey Hats</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">Grey Hats is a cyber-security club that facilitates the sharing of cyber-security concepts through fellowship. Grey Hats participates in several cyber-security competitions throughout the school year along with maintaining an active student ran server.
            </p>
          </Container>
        </Col>
        <Col>
          <Container className="container-borderC">
            <div className="text-center pt-4 pb-3">
              <img src="/images/PANDALogo.png" alt="PANDA Logo" className="box-img-sizeS" />
            </div>
            <h4 className="text-center pt-2 pb-3">PANDA</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">PANDA, the Programming AND Algorithms club, helps students develop the algorithmic problem solving skills needed to succeed in the field of computer science. We have weekly meetings with questions tailored to preparing for technical interviews. Content is between ICS 211 - ICS 311, but all are welcome!
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container className="dept-spacer pb-5">
      <h2 className="text-center pb-3">Research</h2>
      <Row>
        <Col>
          <Container className="container-borderR">
            <div className="text-center">
              <img src="/images/lavaLabLogo200x200.jpg" alt="Lava Lab Logo" className="box-img-size" />
            </div>
            <h4 className="text-center">LAVA Lab</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">The LAVA Lab is a notable laboratory with Computer Science faculty, Directory Dr. Jason Leigh, that is pivotal in creating data visualization that assists in making predictions and preparing the State of Hawaii for the future with an emphasis on climate change</p>
          </Container>
        </Col>
        <Col>
          <Container className="container-borderR">
            <div className="text-center">
              <Row className="py-4">
                <Col>
                  <img src="/images/peter-sadowski.jpg" alt="peter-sadowski" className="box-img-sizeP" />
                </Col>
                <Col>
                  <img src="/images/mamogram.jpg" alt="mamogram" className="box-img-sizeS" />
                </Col>
                <Col>
                  <img src="/images/medical.jpg" alt="medical" className="box-img-sizeS" />
                </Col>
                <Col>
                  <img src="/images/peter-washington.jpg" alt="peter-washington" className="box-img-sizeP" />
                </Col>
              </Row>
            </div>
            <h4 className="text-center pb-2">Medical Imaging</h4>
            {/* eslint-disable-next-line max-len */}
            <p className="text-center">Computer Science faculty Dr. Peter Washington and Dr. Peter Sadowski collaborated with Dr. John Shepherd at the UH Cancer Center to apply AI to medical imaging applications, including total-body DXA,breast cancer detection, and the Makawalu project which is developing a portable AI-based  ultrasound breast cancer screening tool.</p>
          </Container>
        </Col>
      </Row>
    </Container>

  </div>
);

export default DeptComp;

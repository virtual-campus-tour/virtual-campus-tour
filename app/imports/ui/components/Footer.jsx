import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <h2 className="take-me-to-manoa">#TakeMeToManoa</h2>
      Improving lives through education and research
    </Container>
    <div className="footer-color">
      <Container>
        <Col className="text-left">
          <Image src="https://manoa.hawaii.edu/wp/wp-content/uploads/2017/10/uhm-white-seal-nameplate@2x.png" />
        </Col>
        <Col className="text-center">
          Department of Information and Computer Sciences
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
          <br />
          <a href="http://ics-software-engineering.github.io/meteor-application-template-react">
            Template Home
            Page
          </a>
        </Col>
      </Container>
    </div>
  </footer>
);

export default Footer;

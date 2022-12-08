import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Container id="signout-page">
      <Col className="text-center py-3">
        <h4>You are signed out!</h4>
        <h2>Thank you for visiting the University of Hawaii at Manoa Virtually</h2>
        <h3>We hope to see you in person soon!</h3>
      </Col>
      <Col className="text-center py-3">
        <h1 className="big-letters">Go Rainbows!</h1>
      </Col>
      <img className="centered" src="/images/studentsUHM.png" alt="Students UHM" />
      <Row className="mt-3">
        <Button href="https://manoa.hawaii.edu/admissions/visit/" variant="green" className="btn btn-lg fs-2" >
          Book an In-Person Tour Now
        </Button>
      </Row>
    </Container>
  );
};

export default SignOut;

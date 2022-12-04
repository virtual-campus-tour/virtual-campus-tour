import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Container id="signout-page">
      <Col className="text-center py-3">
        <h2>Thank you for visiting the University of Hawaii at Manoa Virtually</h2>
        <h3>We hope to see you in person soon!</h3>
      </Col>
      <Col>
        <h1>Go Rainbows!</h1>
      </Col>
    </Container>
  );
};

export default SignOut;

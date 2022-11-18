import React from 'react';
import { Container } from 'react-bootstrap';

const Department = () => (

  <>
    <Container>
      <h2 className="text-center">Header</h2>
    </Container>
    <hr className="line-thick" />
    <Container className="dept-spacer">
      <h2 className="text-center">Clubs</h2>

    </Container>
    <Container className="dept-spacer">
      <h2 className="text-center">Research</h2>
    </Container>

  </>
);

export default Department;

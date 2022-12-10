import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const ClassroomComp = () => (

  <Container className="small-spacer">

    <h1 className="text-center">Classrooms</h1>

    <p className="center-text-below-header">The University of Hawaii at Manoa, has numerous innovative classrooms that provide students with the best environments to thrive.</p>

    <Carousel className="small-spacer">
      <Carousel.Item>
        <img className="class-photo centered" src="/images/web101.jpg" alt="Webster Hall" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="class-photo centered" src="/images/moore228.jpg" alt="Moore Hall" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="class-photo centered" src="/images/BIL-337-lab.jpg" alt="Bilger Lab" />
      </Carousel.Item>
    </Carousel>
    <p className="center-text-below-header">These classrooms assist students to be able to learn in the most effective and efficient manner for courses</p>
  </Container>

);

export default ClassroomComp;

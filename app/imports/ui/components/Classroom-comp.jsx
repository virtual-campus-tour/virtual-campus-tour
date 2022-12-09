import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const ClassroomComp = () => (

  <Container className="small-spacer">

    <h1 className="text-center">Classrooms</h1>

    <p className="text-center">UH Manoa is host to a bunch of modern classrooms</p>

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

  </Container>

);

export default ClassroomComp;

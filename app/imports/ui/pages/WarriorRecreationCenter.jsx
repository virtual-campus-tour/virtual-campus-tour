import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

const WarriorRecreationCenter = () => (
  <Container>
    <Row>
      <Col className="center w-50">
        <h1>Warrior Recreation Center</h1>
        <Row>
          <Col />
          <Col xs lg="6">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.hawaii.edu/sustainability/wp-content/uploads/2019/05/Warrior-Rec-Center-IMG_6760.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://live.staticflickr.com/2876/13769452035_15fe8449d3_b.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.squarespace-cdn.com/content/v1/5cbe25a7fb182017d6a18c78/1561402731126-7BRGSY8TW2Q9YJZJYXHV/490A2884r.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col />
        </Row>
        <p>Need a break from all that studying? Want to get a quick workout before class? Come visit the Warrior Recreation Center (WRC)!</p>
      </Col>
    </Row>
    <Row>
      <Col xs lg="3">
        <h3> Hours of Operation </h3>
        <p> Mon - Fri : 6:00a-7:00p </p>
        <p> Sat-Sun: 11:00a-5:00p </p>
        <Button href="https://manoa.hawaii.edu/studentlife/recreation/recreation-center/" variant="green">
          Learn More
        </Button>
      </Col>
      <Col className="mt-2">
        <p>Through the vision and direction of the Campus Center Board (CCB), the Warrior Recreation Center, or WRC, opened in Spring of 2014 for UHM students as a place to promote and encourage an active and healthy lifestyle. Situated in
          the Campus Center Complex, the WRC provides 56,000 sq ft of exercise, restroom, and locker room spaces. The WRC offers approximately 100 pieces of the latest fitness equipment ranging from strength training, cardio, and wellness.
          There is also an indoor track and courts to provide open-play basketball and volleyball. For those wishing to fit in their physical training during their schedule, locker rooms are located on the first floor with restrooms available
          on both the first and second floors.
        </p>
      </Col>
    </Row>
    <Row>
      <h3>Membership</h3>
      <p>
        For UH Manoa Students, membership is automatic as long as they are registered for the current fall/spring semester, pay the “Man Studnt Ctr Ops & Rec Fee” in their tuition and are good financial standing with UH Manoa. Students may
        check their myUH Portal to see if they pay the fee. UHM System students (UH Hilo, UH West Oahu & Community Colleges) are able
        Guest IDs are purchased only if the applicant does not qualify for a UH Manoa Student or Faculty/Staff ID. The cost of each Guest ID is $10.
      </p>
    </Row>
    <Row>
      <h3>What do I need to get in?</h3>
      <p>A validated UHM ID card or WRC Membership Card, a CDC approved face covering, shoes, workout specific clothing that provides adequate coverage of the body, completed Lumisight UH application. Bringing your own water bottle is
        highly recommended.
      </p>
    </Row>
    <Row className="mt-3">
      <Button href="#" variant="green" className="btn btn-lg fs-2">
        Next Page
      </Button>
    </Row>
  </Container>
);

export default WarriorRecreationCenter;

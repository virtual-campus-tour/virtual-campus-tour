import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

const Dorming = () => (
  <Container id="dorming-page">
    <Row className="mt-3">
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/06/HAall.jpg"
              alt="Hale Aloha"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-media0.fl.yelpcdn.com/bphoto/91M6W8rRuwuQQ0Ahy5HPMQ/l.jpg"
              alt="Double Bedroom"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <h1>Hale Aloha</h1>
        <h4>Hale Aloha is comprised of four towers, named after flowers of the four most populous Hawaiian islands. The Hale Aloha towers are Freshmen Only environments, with residential learning programs available for students.</h4>
        <Button href="https://manoa.hawaii.edu/housing/communities/halealoha/" variant="green" className="btn btn-lg fs-2">
          Learn more
        </Button>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <h1>Johnson Hall</h1>
        <h4>Johnson Hall is comprised of two adjoining buildings, providing students with a supportive living and learning environment in which they can successfully pursue their academic dreams.</h4>
        <Button href="https://manoa.hawaii.edu/housing/communities/johnsonhall/" variant="green" className="btn btn-lg fs-2">
          Learn more
        </Button>
      </Col>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/05/jh-temp.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/08/HA-Full-Floor-Plan.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/05/fh_temp.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/08/HA-Full-Floor-Plan.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <h1>Frear Hall</h1>
        <h4>Frear Hall provides students with a housing option that combines community and independent living, offering students four varying suite styles to choose from.</h4>
        <Button href="https://manoa.hawaii.edu/housing/communities/frearhall/" variant="green" className="btn btn-lg fs-2">
          Learn more
        </Button>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <h1>Gateway House</h1>
        <h4>Gateway House is a 10 story residence hall, offering students a double-room suite style setting. Gateway Cafeteria is located on the ground floor.</h4>
        <Button href="https://manoa.hawaii.edu/housing/communities/gatewayhouse/" variant="green" className="btn btn-lg fs-2">
          Learn more
        </Button>
      </Col>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/05/gh_temp_2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/08/HA-Full-Floor-Plan.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/05/fh_temp.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://manoa.hawaii.edu/housing/wp-content/uploads/2021/08/HA-Full-Floor-Plan.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <h1>Hale Kahawai & Hale Laulima</h1>
        <h4>Hale Kahawai and Hale Laulima are two 4-story buildings, located at the entrance to Manoa Valley and provides a quiet, cool living environment with quick and easy access to upper campus.</h4>
        <Button href="https://manoa.hawaii.edu/housing/communities/halekahawailaulima/" variant="green" className="btn btn-lg fs-2">
          Learn more
        </Button>
      </Col>
    </Row>
    <Row className="mt-3">
      <Button href="/dining" variant="green" className="btn btn-lg fs-2" id="dining-page-click">
        Next Page
      </Button>
    </Row>
  </Container>
);

export default Dorming;

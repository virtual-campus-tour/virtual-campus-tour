import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const Club = ({ club }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={club.image} width={75} className="py-3" />
      <Card.Title>{club.name}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{club.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Club.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Club;

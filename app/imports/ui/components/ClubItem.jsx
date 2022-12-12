import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Image } from 'react-bootstrap';

const ClubItem = ({ club }) => (
  <tr>
    <td>{club.name}</td>
    <td><Image src={club.image} className="box-img-sizeP" /></td>
    <td>{club.description}</td>
    {Roles.userIsInRole(Meteor.userId(), 'admin') ?
      (
        <td>
          <Link to={`/editClubs/${club._id}`}>Edit</Link>
        </td>
      ) : ''}
  </tr>
);

// Require a document to be passed to this component.
ClubItem.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ClubItem;

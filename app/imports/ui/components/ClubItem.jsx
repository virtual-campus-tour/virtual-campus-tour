import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

const Club = ({ club }) => (
  <tr>
    <td>{club.name}</td>
    <td><img src={club.image} alt="peter-sadowski" className="box-img-sizeP" /></td>
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
Club.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Club;

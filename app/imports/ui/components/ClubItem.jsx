import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Club = ({ club }) => (
  <tr>
    <td>{club.name}</td>
    <td><img src={club.image} alt="peter-sadowski" className="box-img-sizeP" /></td>
    <td>{club.description}</td>
    <td>
      <Link to={`/editClubs/${club._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
Club.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Club;

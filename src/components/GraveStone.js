import React from 'react';
import PropTypes from 'prop-types';
import {
  // Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

const GraveStone = (
  {
    id,
    firstName,
    lastName
  }
) => (
    <Card body>
      <CardTitle tag="h5">Here Lies:</CardTitle>
      <CardText>{firstName} {lastName} {id}</CardText>
    </Card>
);

GraveStone.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;

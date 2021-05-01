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
    lastName,
    color
  }
) => (
    <Card body color={color}>
      <CardTitle tag="h5">Here Lies Student {id}:</CardTitle>
      <CardText>{firstName} {lastName}</CardText>
    </Card>
);

GraveStone.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default GraveStone;

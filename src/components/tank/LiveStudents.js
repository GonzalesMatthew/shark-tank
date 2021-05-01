import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

const StudentCard = (
  {
    id,
    firstName,
    lastName,
    color
  }
) => (
    <Card body color = {color}>
      <CardTitle tag="h5">Student {id}</CardTitle>
      <CardText>{firstName} {lastName}</CardText>
    </Card>
);

StudentCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default StudentCard;

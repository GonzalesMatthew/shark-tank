import React from 'react';
import PropTypes from 'prop-types';
import {
  // Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

const StudentCard = (
  {
    id,
    firstName,
    lastName
  }
) => (
    <Card body>
      <CardTitle tag="h5">Student</CardTitle>
      <CardText>{firstName} {lastName} {id}</CardText>
    </Card>
);

StudentCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default StudentCard;

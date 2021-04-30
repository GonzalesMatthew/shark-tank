import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import StudentCard from './LiveStudents';

// function SharkTank({ students, setStudents }) {
function SharkTank({ students }) {
  return (
    <>
      <Container>
        <h2>This is the Shark Tank</h2>
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.id}
            id={studentInfo.id}
            firstName={studentInfo.firstName}
            lastName={studentInfo.lastName}
          />
        ))}
      </Container>
    </>
  );
}

SharkTank.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default SharkTank;

// import React, { useState } from 'react';
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import StudentCard from './LiveStudents';
import { livingStudents, followTheLight } from '../../helpers/data/studentsData';

function SharkTank({
  students, setStudents, setGraveyard, color
}) {
  // const [cageStatus, setCageStatus] = useState(false);

  // const handleClick = (type) => {
  //   switch (type) {
  //     case 'lift':
  //       const [living, dead] = followTheLight();
  //       setStudents(living);
  //       setGraveyard(dead);
  //       break;
  //     case 'close':
  //       console.warn('The cage is closed');
  //       break;
  //     default:
  //       console.warn('nothing happened');
  //   }
  // };

  const killStudent = () => {
    const [living, dead] = followTheLight();
    setStudents(living);
    setGraveyard(dead);
  };

  return (
    <>
      <Container body>
        <h2>This is the Shark Tank</h2>
          <Button
            color="danger"
            onClick={killStudent}
            disabled={livingStudents.length <= 0}
          >
            SharkAttack
          </Button>
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.id}
            id={studentInfo.id}
            firstName={studentInfo.firstName}
            lastName={studentInfo.lastName}
            color={color}
          />
        ))}
      </Container>
    </>
  );
}

SharkTank.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  setGraveyard: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default SharkTank;

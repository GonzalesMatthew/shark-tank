import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

// function SharkTank({ students, setStudents }) {
function Cemetery({ graveyard }) {
  return (
    <>
      <Container>
        <h2>This is the graveyard</h2>
        {graveyard.map((graveInfo) => (
          <GraveStone
            key={graveInfo.id}
            id={graveInfo.id}
            firstName={graveInfo.firstName}
            lastName={graveInfo.lastName}
          />
        ))}
      </Container>
    </>
  );
}

Cemetery.propTypes = {
  graveyard: PropTypes.array.isRequired,
  setGraveyard: PropTypes.func.isRequired
};

export default GraveStone;

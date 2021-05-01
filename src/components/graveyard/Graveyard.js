import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ graveyard, color }) {
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
            color={color}
          />
        ))}
      </Container>
    </>
  );
}

Graveyard.propTypes = {
  graveyard: PropTypes.array.isRequired,
  setGraveyard: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Graveyard;

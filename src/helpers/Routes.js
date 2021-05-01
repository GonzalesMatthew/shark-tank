import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import SharkTank from '../components/tank/SharkTank';
import Graveyard from '../components/graveyard/Graveyard';

export default function Routes({
  students, setStudents, graveyard, setGraveyard
}) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={() => <SharkTank students={students} setStudents={setStudents} setGraveyard={setGraveyard} color='info'/>}
        />
        <Route
          path='/graveyard'
          component={() => <Graveyard graveyard={graveyard} setGraveyard={setGraveyard} color='secondary'/>}
        />
      </Switch>
    </div>

  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  graveyard: PropTypes.array.isRequired,
  setGraveyard: PropTypes.func.isRequired
};

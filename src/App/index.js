import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { livingStudents, dearlyBeloved } from '../helpers/data/studentsData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);
  const [graveyard, setGraveyard] = useState([]);

  useEffect(() => {
    setStudents(livingStudents());
    setGraveyard(dearlyBeloved());
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          students={students}
          setStudents={setStudents}
          graveyard={graveyard}
          setGraveyard={setGraveyard}
        />
      </Router>
    </>
  );
}

export default App;

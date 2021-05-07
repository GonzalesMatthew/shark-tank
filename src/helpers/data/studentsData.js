const students = [
  {
    id: 1,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Dani',
    lastName: 'Crosbi',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Gabby',
    lastName: 'Toberman',
    isDead: false
  },
  {
    id: 11,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Lindsey',
    lastName: 'Saterfield',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 25,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: 27,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  }
];

function livingStudents() {
  // return array of students where student.isDead === false
  const livingStudentsArray = students.filter((student) => !student.isDead);
  return livingStudentsArray;
}

function dearlyBeloved() {
  // return array of students where student.isDead === true
  const deadStudentsArray = students.filter((student) => student.isDead);
  return deadStudentsArray;
}

function followTheLight() {
  // take studentId, find that student, and change student.isDead to true
  const currentLiveStudents = livingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);

  students[index].isDead = true;

  return [livingStudents(), dearlyBeloved()];
}

export {
  livingStudents, dearlyBeloved, followTheLight, students
};

export default function getListStudents() {
  const arr = [{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return arr;
}

export function getStudentsByLocation(arr, city) {
  return arr.filter((students) => students.location === city);
}

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

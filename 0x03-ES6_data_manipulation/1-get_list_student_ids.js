export default function getListStudents() {
  const arr = [{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return arr;
}

function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((arr) => arr.id);
}

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));

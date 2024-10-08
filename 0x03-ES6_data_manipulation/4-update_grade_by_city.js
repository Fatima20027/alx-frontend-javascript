export default function updateStudentGradeByCity(arr, city, newGrades) {
  const arrFilter = arr.filter((student) => student.location === city);

  const arrMap = arrFilter.map(
    (student) => {
      for (const studentGrade of newGrades) {
        if (student.id === studentGrade.studentId) {
          student.grade = studentGrade.grade; // eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return student;
    },
  );

  return arrMap;
}

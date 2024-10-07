export default function getStudentsByLocation(arr, city) {
  return arr.filter((students) => students.location === city);
}

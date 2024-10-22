export default function getStudentIdsSum(Students) {
  if (!Array.isArray(Students)) {
    return [];
  }
  return Students.reduce((total, student) => total + student.id, 0);
}

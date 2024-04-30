export default function updateStudentGradeByCity(list, city, newGrades) {
  const filteredList = list.filter((object) => object.location === city);

  const newList = filteredList.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const updatedStudent = { ...student };
    if (gradeObj) {
      updatedStudent.grade = gradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });

  return newList;
}

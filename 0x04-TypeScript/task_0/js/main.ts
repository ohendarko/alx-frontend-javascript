interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Berh",
  age: 17,
  location: "Massachuchetts"
};

const student2: Student = {
  firstName: "JHan",
  lastName: "Son",
  age: 17,
  location: "Massachuchetts"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  console.log('| FirstName | Location    |');
  console.log('|-----------|-------------|');
  students.forEach(student => {
    console.log(`| ${student.firstName.padEnd(10)} | ${student.location.padEnd(11)} |`);
  });
}

renderTable(studentsList);

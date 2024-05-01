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
}

const student2: Student = {
  firstName: "JHan",
  lastName: "Son",
  age: 17,
  location: "Massachuchetts"
}

export const studentsList: Student[] = [student1, student2];

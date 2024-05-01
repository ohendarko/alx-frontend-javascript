namespace Subjects {
  export class Subject {
    protected _teacher: Teacher;
    public setTeacher = (teacher: Teacher) => {
      this._teacher = teacher;
    }
  }
}

/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let curDepartmentIdx = 0;
  let currentEmployeeIdx = 0;

  return {
    next() {
      if (curDepartmentIdx >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[curDepartmentIdx];
      const employeesInCurrentDepartment = allEmployees[currentDepartment];

      if (currentEmployeeIdx >= employeesInCurrentDepartment.length) {
        curDepartmentIdx++;
        currentEmployeeIdx = 0;
        return this.next();
      }

      const currentEmployee = employeesInCurrentDepartment[currentEmployeeIdx++];
      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

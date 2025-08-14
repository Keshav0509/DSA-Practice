/*
Write a Program to create a Class Employee
It contains two attributes -> Name, Salary
Create 5 objects and initialize any random values for Name and Salary to it.
Store all these objects in an Array and print the names of the employees sorted in Descending Order using Comparators (Use Salary to sort the elements).*/

// https://docs.google.com/spreadsheets/d/1PbCBCqc-r3EMAmlhmBfyD9JZqnzCf-1YOJbSI3dr0DY/edit?usp=sharing

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  getDetails() {
    const details = {
      name: this.name,
      salary: this.salary,
    };
    return details;
  }
}
const employee1 = new Employee("john", 20000);
const employee2 = new Employee("thor", 90000);
const employee3 = new Employee("hulk", 30000);
const employee4 = new Employee("spidy", 80000);
const employee5 = new Employee("tony", 115000);

const empolyees = [employee1, employee2, employee3, employee4, employee5];
empolyees.sort((a, b) => a.salary - b.salary);
console.log(empolyees);

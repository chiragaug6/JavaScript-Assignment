/**
 * Create a class called Employee with three properties: name, position, and salary. The class should have a 
 * method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and 
 * call the getSalary method.
 */

class Employee {
    name;
    position;
    #salary; //here salary is a private propertie

    constructor(name, position, salary) {
        this.name = name;
        this.salary = salary;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

const employee1 = new Employee("chirag", "software engineer", "1CR");

console.log(employee1.getSalary());


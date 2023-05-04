/**
 * Create a class called Car with three properties: company, model, and year. The class should have a method 
 * called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an 
 * instance of the Car class and call the getDescription method.
 */

class Car {
    company;
    model;
    year;

    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

// Createing object of Car class

const myCar = new Car("BMW", "E12", 1981);

console.log(myCar.getDescription());
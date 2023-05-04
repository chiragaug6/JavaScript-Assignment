/**
 * Create a class called Calculator with a static method called add. The add method should take two numbers as 
 * arguments and return their sum. Instantiate the Calculator class and call the add method
 */

class Calculator {
    static addTwoNumbers(num1, num2) {
        return num1 + num2;
    }
}

const result = Calculator.addTwoNumbers(10, 5);

console.log(result);
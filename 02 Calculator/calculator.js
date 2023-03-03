// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement 
// to perform the operation on the two numbersK
// The calculator function should:
// | Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorJ
// | Use a switch statement to determine which operation to perform based on the value of the operatorJ
// | If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
// operation and store the result in a variable called resultJ
// | If the operator is not one of the valid operators, log "Invalid operator" to the 


let num1 = 10;
let num2 = 12;
let operation = "-";
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operator");
        break;
}

if (result != null) {
    console.log(num1 + " " + operation + " " + num2 + " = " + result);
}





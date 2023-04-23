/** 
 * Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement 
 * to perform the operation on the two numbersK
 * The calculator function should:
 * Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorJ
 * Use a switch statement to determine which operation to perform based on the value of the operatorJ
 * If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
 * operation and store the result in a variable called resultJ
 * If the operator is not one of the valid operators, log "Invalid operator" to the 
*/



function basicOpration(op) {
    const num1 = document.getElementById("numberOne").value;
    const num2 = document.getElementById("numberTwo").value;

    let result;
    switch (op) {
        case "plus":
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case "minus":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "multi":
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "div":
            result = parseFloat(num1) / parseFloat(num2);
            break;

        default:
            console.log("Invalid operator");
            break;
    }

    output.innerText = `Ans : ${result.toFixed(3)}`;
    output.style.color = "grey";
    output.style.fontSize = "2rem";
    output.style.textAlign = "center"
}

/**
 * Create a numberChecker function that takes an array of numbers as an argument and returns a function. The 
 * returned function should take another number as an argument and return true if the number is in the array, and 
 * false otherwise.
 */

function numberChecker(arr) {
    return (num) => {
        return arr.indexOf(num) != -1 ? true : false;
    }
}

const checkNum = numberChecker([1, 2, 3, 4, 5]);

console.log(checkNum(2)); //true
console.log(checkNum(9)); //false


/***
 * You are building a program that takes an array of numbers as input and you need to remove all the duplicates 
 * from the array. You want to write a function that can accomplish this task efficiently and returns a new set that 
 * contains only the unique elements. 
 */

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5,8];

console.log(uniqueElem(array));

function uniqueElem(inputArr) {
    return new Set(inputArr);
}
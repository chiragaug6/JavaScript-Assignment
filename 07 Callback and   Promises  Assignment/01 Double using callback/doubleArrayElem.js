/**
 * Write a function that takes in an array of integers and a callback function, and returns a new array where each 
 * element is doubled using the callback.
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleArrayElem(arr, callback) {
    newArray = [];
    arr.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

function doubleValue(x) {
    return x * x;
}

console.log(doubleArrayElem(myNumbers, (x) => x * x));

console.log(doubleArrayElem(myNumbers, doubleValue));
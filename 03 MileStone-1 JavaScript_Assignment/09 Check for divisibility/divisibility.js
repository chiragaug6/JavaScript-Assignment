/**Write a program that  takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. 
Use a for loop and continue statqmqnt. */

let numbers = [10, 25, 45, 6, 89, 8, 6];

// newArray = numbers.filter((num) => {
//     return num % 3 == 0 && num % 2 != 0
// });

// console.log(newArray);

let newArray = [];

for (let num of numbers) {
    if (num % 3 == 0 && num % 2 != 0) {
        newArray.push(num);
    } else {
        continue;
    }
}

console.log(newArray);
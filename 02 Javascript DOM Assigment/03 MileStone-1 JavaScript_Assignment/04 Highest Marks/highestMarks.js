// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters 
// the marks of all five students in an array called "marks". Write a program that iterates through the array and 
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marksK


const marks = Array(5);

marks[0] = 85;
marks[1] = 98;
marks[2] = 65;
marks[3] = 89;
marks[4] = 57;

let highestMarks = marks[0];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highestMarks) {
        highestMarks = marks[i];
    }
}

console.log("highest marks = " + highestMarks);

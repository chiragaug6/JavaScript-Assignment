// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters 
// the marks of all five students in an array called "marks". Write a program that iterates through the array and 
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marksK


const marks = Array(5);

marks[0] = document.getElementsByTagName("input")[0];
marks[1] = document.getElementsByTagName("input")[1];
marks[2] = document.getElementsByTagName("input")[2];
marks[3] = document.getElementsByTagName("input")[3];
marks[4] = document.getElementsByTagName("input")[4];

const highestMark = document.getElementById("highMark");

function findMaximumMarks() {
    console.log(marks[0].value);
    let highestMarks = marks[0].value;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i].value > highestMarks) {
            highestMarks = marks[i].value;
        }
    }

    highestMark.innerText = `highest marks = ${highestMarks}`
    console.log("highest marks = " + highestMarks);
}

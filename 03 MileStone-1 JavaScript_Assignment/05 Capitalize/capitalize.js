/** You are building a form where users can enter their names. You want to make sure that the first letter of the 
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a 
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and 
returns the modified string. Otherwise, it returns the original string without any changes.*/


const button = document.getElementById("capitalizebtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const uname = document.getElementById("nameinput").value;
    finalName = uname.charAt(0) != uname.charAt(0).toLocaleUpperCase() ? uname.charAt(0).toLocaleUpperCase().concat(uname.slice(1)) : uname
    output.innerText = `capitalize name: ${finalName}`;
    output.style.color = "yellow"
});





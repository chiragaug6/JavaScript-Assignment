// Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
// passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console

const password = document.getElementById("inputPassword");
const confirmedPassword = document.getElementById("confirmInputPassword");
const output = document.getElementById("output");

function LoginUser() {
    if (password.value == "" || confirmedPassword.value == "") {
        output.innerText = "Please Enter Password";
        output.style.color = "red";
        return;
    }
    if (password.value == confirmedPassword.value) {
        // document.write("Password Matched. Password validation Successful");
        output.innerText = "Password Matched. Password validation Successful";
        output.style.color = "green";

    } else {
        // document.write("Password didn't match. Password validation unsuccessful");
        output.innerText = "Password didn't match. Password validation unsuccessful";
        output.style.color = "red";
    }
}

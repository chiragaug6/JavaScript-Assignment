const password = document.getElementById("password");
const email = document.getElementById("email");
const loginBtn = document.getElementsByTagName("button")[0];
const output = document.getElementById("output");

loginBtn.addEventListener("click", () => {

    /** validataion-1 :: Password or Email can't be Empty */

    if (password.value == "" || email.value == "") {
        output.innerText = "Password or Email can't be Empty";
        output.style.color = "red";
        return;
    } else {
        output.innerText = "";
    }

    /** validataion-2 :: The password field should have a minimum length of 8 characters */

    if (password.value.length < 8) {
        console.log(password.value.length);
        output.innerText = "minimum password length shoud be 8 characters!";
        output.style.color = "red";
        return;
    } else {
        output.innerText = "";
    }


    /** validataion-3 ::  The email field should contain the "@" symbol */

    isValidEmail = false;

    for (let i = 0; i < email.value.length; i++) {
        if (email.value.charAt(i) == '@') {
            isValidEmail = true;
            break;
        }
    }

    if (!isValidEmail) {
        output.innerText = "Invalid email address!";
        output.style.color = "red";
    } else {
        output.innerText = "valid email and password!";
        output.style.color = "green";
    }
})

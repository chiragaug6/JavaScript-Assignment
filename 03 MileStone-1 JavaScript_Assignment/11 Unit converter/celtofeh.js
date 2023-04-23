const output = document.getElementById("output");

function ctof() {
    const tempInCel = document.getElementById("tempInCel").value;
    if (tempInCel == "") {
        output.innerText = `Please Enter Value`;
        output.style.color = "red";
        return;
    }
    tempInFeh = (tempInCel * 1.8) + 32;
    output.innerText = `${tempInCel} celsius == ${parseFloat(tempInFeh.toFixed(2))} fahrenheit`;
    output.style.color = "black";
}
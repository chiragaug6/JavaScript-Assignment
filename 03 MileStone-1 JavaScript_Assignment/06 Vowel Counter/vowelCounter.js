// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate 
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be 
// counted.

const button = document.getElementById("countbtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    console.log("click");
    let uname = document.getElementById("nameinput").value;
    document.getElementById("nameinput").value = "";
    if (uname == "") {
        output.innerText = `Username Can't be Empty!!`;
        output.style.color = "red";
        return;
    }
    let vowelCount = 0;
    for (let i = 0; i < uname.length; i++) {
        if (isVowel(uname.charAt(i))) {
            vowelCount++;
        }
    }
    console.log(vowelCount);
    output.style.color = "lightgreen";
    output.innerText = `total vowels in ${uname} = ${vowelCount}`;
})

function isVowel(ch) {
    if (ch == 'a' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'e') {
        return true;
    }
    return false;
}

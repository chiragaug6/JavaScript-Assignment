let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let colorDigit = "0123456789ABCDEF";
    let randomCombination = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        randomCombination = randomCombination + colorDigit.charAt(random);
    }
    document.body.style.backgroundColor = randomCombination;
});


// logic for hex-value

// hex-color is mixcher of => 1234567890 and ABCDEF
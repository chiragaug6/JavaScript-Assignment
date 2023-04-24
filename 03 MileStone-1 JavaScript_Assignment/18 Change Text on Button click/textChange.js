const heading = document.getElementsByTagName("h1")[0];
const clickbtn = document.getElementsByTagName("button")[0];

clickbtn.addEventListener("click", () => {
    if (heading.innerText == "The most affordable learning platform") {
        heading.innerText = "PW Skills";
    } else {
        console.log("inner text is pwskill");
        heading.innerText = "The most affordable learning platform";
    }
});

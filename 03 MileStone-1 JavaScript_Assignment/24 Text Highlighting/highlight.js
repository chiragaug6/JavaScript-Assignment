const para = document.getElementById("para");
const inputpara = document.getElementById("inputpara");

function changePara() {
  console.log(inputpara.value);
  para.textContent = inputpara.value;
  let allWords = para.textContent.split(" ");
  allWords.map((word, index) => {
    if (word.length > 8) {
      const longWord = document.createElement("span");
      longWord.textContent = word;
      longWord.style.backgroundColor = "yellow";
      allWords[index] = longWord.outerHTML;
    }
  });
  para.innerHTML = allWords.join(" ");
}

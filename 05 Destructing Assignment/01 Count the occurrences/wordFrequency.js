/***
 * You are building a word count generator that will take a large string of text as input and output the words and 
 * the number of times they are present in the string. Your task is to write a function that can count the 
 * occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
 * assume that the string only contains alphabetic characters and spaces.
 */

myString = "chirag rameshbhai solanki chirag chirag chirag solanki jay hind";

allWords = myString.split(" ");

const freq = new Map();

const uniqueWord = new Set(allWords);

for (word of uniqueWord) {
    freq.set(word, wordCounter(word))
}

console.log(freq);

function wordCounter(val) {
    count = 0;
    for (word of allWords) {
        if (word === val) {
            count++;
        }
    }
    return count;
}




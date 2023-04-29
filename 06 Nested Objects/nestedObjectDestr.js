/**
 * Write a function that takes an object representing a person as input, and extracts the name and street 
 * properties from a nested object using object destructuring. The function should return an object with these two 
 * properties. A sample object is given below
 * Read This artical => https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/
 */

const person = {
    name: "mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
}

function getPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name: name, address: street }
}

const result = getPersonInfo(person);

console.log(result);
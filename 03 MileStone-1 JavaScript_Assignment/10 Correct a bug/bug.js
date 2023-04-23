/**
 * You are working on an e-commqreq website where customers can add itqms to their cart. The cart stores the 
 * quantity of each item that the customer wants to purchase in an array of numbers. However, the website is 
 * currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to 
 * half. As a result, you need to write a JavaScript function that can double the quantity of qach item in the cart 
 * array to correct the bug. 
 */


let products = [
    {
        name: "iphone",
        quantity: 6
    },
    {
        name: "macbook",
        quantity: 2
    },
    {
        name: "books",
        quantity: 10
    },
    {
        name: "bat",
        quantity: 1
    }
];

function doubleQuantity(products) {
    for (p of products) {
        p['quantity'] *= 2;
    }
}

doubleQuantity(products);

console.log(products);

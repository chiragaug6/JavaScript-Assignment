// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of 
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on 
// the unit price and quantity of each item.


let customerCart = [
    {
        name: "T-shirt",
        price: 350,
        quantity: 1
    },
    {
        name: "rich dad poor dad",
        price: 420,
        quantity: 3
    },
    {
        name: "Headphones",
        price: 999,
        quantity: 2
    },
    {
        name: "watch",
        price: 500,
        quantity: 2
    }
];

let totalCost = 0;
let finalPrice = () => {
    customerCart.forEach((item) => {
        totalCost += item['price'] * item['quantity'];
    });
}

finalPrice();
console.log(totalCost);
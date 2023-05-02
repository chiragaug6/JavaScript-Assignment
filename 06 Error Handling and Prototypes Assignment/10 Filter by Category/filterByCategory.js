/**
 * Write a function that takes an array of products and returns a function that filters the array by a given product 
 * category. The function must filter an eCommerce products array by a specific category. The closure filters 
 * products using the filter() method. Finally, it returns a new array containing only the products with the same 
 * category as the input
 */

var products = [
    { name: "Shirts", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "sunglasses", category: "Accessories" },
];

function filterByCategoty(products) {
    return (category) => {
        return products.filter((ele) => ele.category == category)
    }
}

var clothingProducts = filterByCategoty(products)("Accessories");

console.log(clothingProducts);
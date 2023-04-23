// Calculate rental cost

function rentalCost(carType, days) {
    if (carType == "Economy") return 4000 * days;
    if (carType == "Midsize") return 10000 * days;
    if (carType == "Luxury") return 20000 * days;
    console.log("carType not matched!!");
}

console.log(rentalCost("Economy", 4));

console.log(rentalCost("Luxury", 5));

console.log(rentalCost("Midsize", 10));
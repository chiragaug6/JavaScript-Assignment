/***
 * A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
 * people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
 * it and returns an object that contains the total bill and the bill to be paid by each person in the group.
 */

function calculateBill(dishes) {
  let totalBill = 0;
  let billPerPerson = 0;
  let totalPeople = 0;

  for (const dish of dishes) {
    totalBill += dish.cost;
    totalPeople += dish.people;
  }

  billPerPerson = totalBill / totalPeople;

  return {
    totalPeople: totalPeople,
    totalBill: totalBill.toFixed(2),
    billPerPerson: billPerPerson.toFixed(2),
  };
}

const dishes = [
  { name: "Dish A", cost: 200, people: 2 },
  { name: "Dish B", cost: 150, people: 1 },
  { name: "Dish C", cost: 120, people: 1 },
];

bill = calculateBill(dishes);

console.log(bill);

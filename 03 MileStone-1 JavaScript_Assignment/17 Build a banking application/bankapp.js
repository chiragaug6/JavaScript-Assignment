// A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
// object with a keys name and balance. Write functions using object methods to update a customer's account 
// balance based on a deposit or withdrawal. 

let customerAccount = [
    {
        id: 1,
        name: "jigar",
        balance: 5000
    },
    {
        id: 2,
        name: "vivek",
        balance: 7000
    },
    {
        id: 3,
        name: "manthan",
        balance: 1000
    },
    {
        id: 4,
        name: "raj",
        balance: 15000
    },
];

function deposit(id, amount) {
    customerAccount.forEach((acc) => {
        if (acc['id'] == id) {
            acc['balance'] += amount;
            return;
        }
    });
};

function withdrawal(id, amount) {
    customerAccount.forEach((acc) => {
        if (acc['id'] == id) {
            if (amount > acc['balance'] || amount < 0) {
                return;
            }
            acc['balance'] -= amount;
            return;
        }
    });
};

deposit(1, 499);
withdrawal(2, 200);

console.log(customerAccount);
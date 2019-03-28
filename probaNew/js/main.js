// Object create
const Client = {
    getBalance: function() {
        return `hello ${this.name} your balance is 
        ${this.balance}`;
    },
    withdraw: function(amount) {
        return this.balance -= amount;
    },
    deposit: function(amount) {
        return this.balance += amount;
    }
}

// Create a new object and give a balance 
const mary = Object.create(Client);

// ATTACH the properties
mary.name = 'Mary';
mary.balance = 1000;


console.log(mary);
console.log(mary.getBalance());

// Withdraw mary
mary.withdraw(137);
console.log(mary.getBalance());

// deposit of mary
mary.deposit(1500);
console.log(mary.getBalance());

// Another method
const juan = Object.create(Client, {
    name: {value: 'Juan'},
    balance: {value: 1642}
});

console.log(juan);
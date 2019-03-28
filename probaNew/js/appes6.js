// Class creating 
class Client {
    // to the constructor
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    membership() {
        let name;
        // check for the balance
        if(this.balance > 1000) {
            name = 'Gold';
        } else if(this.balance > 500) {
            name = 'Platinum';
        } else {
            name = 'Normal';
        }
        return name;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance},
        Membership: ${this.membership()}`
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    deposit(amount) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }

    static welcome() {
        return 'Welcome in your lovely bank!';
    }
}

const mary = new Client('Mary', 1618);
console.log(mary);
console.log(mary.clientInfo());
console.log(Client.welcome());
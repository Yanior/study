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

    getBalance() {
        return this.balance;
    }

    static welcome() {
        return 'Welcome in your lovely bank!';
    }
}

// Business class
class Business extends Client {
    constructor(name, balance, phone, category) {
        // access to parent constructor properties
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance},
        Membership: ${this.membership()}, Phone: ${this.phone}, Category: ${this.category}`
    }

    static welcome() {
        return 'Welcome to banking for business!';
    }
}

// instanciate the subclass
const business = new Business('Haml Co.', 47123123741, 892616383311, 'Production');

console.log(business);
console.log(business.clientInfo());
console.log(business.getBalance());
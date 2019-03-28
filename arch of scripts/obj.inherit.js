function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Attachthe prototype to the method
Client.prototype.membership = function(){
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
};

// Second prototype with the name and balance
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership()}`
}

// Another method to withdraw money from the account
Client.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

// Create a deposit method
Client.prototype.deposit = function(amount) {
    this.balance += amount;
}

// Check the balance
Client.prototype.getBalance = function() {
    return this.balance;
}

const person = new Client('Juan', 2000);
const person_2 = new Client('Clara', 700);

// Business
function Business(name, balance, phone, category) {
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;
}

// Inherit of prototype
Business.prototype = Object.create(Client.prototype)

// Return the constructor as Business
Business.prototype.constructor = Business;

Client.prototype.businessInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership()}, Category: ${this.category}, Phone: ${this.phone} `
}

// Create business
const business = new Business('Udemy', 1427193, 89237451834, 'Education');

console.log(business);
console.log(business.clientInfo());









// console.log(Client.prototype)

// console.log(person);
// console.log(person.membership());
// console.log(person.clientInfo());
// person.withdraw(1000);
// console.log(person.clientInfo());
// console.log(person.getBalance());
// person.deposit(500);
// console.log(person.clientInfo());
// console.log(person.getBalance());

// console.log('----------------------')
// console.log(person_2)
// console.log(person_2.membership());
// console.log(person_2.clientInfo())
// person_2.withdraw(1000);
// console.log(person_2.clientInfo());
// console.log(person_2.getBalance());
// person_2.deposit(500);
// console.log(person_2.clientInfo());
// console.log(person_2.getBalance());


// // const person = new Client('Juan', 1000);
// // const person_2 = new Client('Clara', 700);

// // console.log(person);
// // console.log(person.membership());
// // console.log(person_2);


// // String 
// const name_1 = 'Karen';
// const name_2 = new String('Karen');

// // Numbers
// const number_1 = 7;
// const number_2 = new Number(7);


// // Boolean
// const boolean_1 = true;
// const boolean_2 = new Boolean(false)


// // Function
// const function_1 = function(a, b){return a + b};
// const function_2 = new Function('a', 'b', 'return a + b');

// console.log(function_1(3, 7));
// console.log(function_2(1, 14));


// // Objects 
// const person_1 = {name: 'Juan'};
// const person_2 = new Object({name: 'Juan'});

// // Array
// const arr_1 = [1,2,3];
// const arr_2 = new Array(1,2,3);

// console.log(arr_1);
// console.log(arr_2);



// Classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    // substract from the budget
    substractFromBudget(amount) {
       return this.budgetLeft -= amount; 
    }
}

// Everything related to HTML
class HTML {
    // insert the budget when user submit it
    insertBudget(amount) {
        // insert into html
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    // Displays a message (correct or invalid)
    printMessage(message, className) {
      const messageWrapper = document.createElement('div');
      messageWrapper.classList.add('text-center', 'alert', className);
      messageWrapper.appendChild(document.createTextNode(message)); 
      
        // insert unto html
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        // clear the error
        setTimeout(function() {
            document.querySelector('.primary .alert').remove();
            addExpenseForm.reset();
        }, 3000);
    }
    // Displays the expenses from the form into the list
    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        // create a li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // insert the template
        li.innerHTML = `
            ${name}
            <span class='badge badge-primary badge-pill'>${amount}</span>
        `;
        // insert into the HTMl
        expensesList.appendChild(li);
    }
    // Substract expense amount from budget
    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

        // check when 25% is left
        if( (budget.budget / 4) > budgetLeftDollars ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success',
            'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        } else if( (budget.budget / 2) > budgetLeftDollars ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
    }
}

// Variables
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');

let budget, userBudget;

const html = new HTML();

// Event listeners
eventListeners();
function eventListeners() {
    // app init
    document.addEventListener('DOMContentLoaded', function () {
        // ask the visitor 
        userBudget = prompt('What\'s your budget for this week?');

        // validate the userBudget
        if (userBudget === null || userBudget === '' || userBudget === 0) {
            window.location.reload();
        } else {
            // budget is valid then instanciate the budget class
            budget = new Budget(userBudget);
            // Instanciate html
            html.insertBudget(budget.budget);
        }
    })

    // when a new expense is added
    addExpenseForm.addEventListener('submit', function () {
        // read the values from the budget forms
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '') {
            html.printMessage('There was error, all the fields are mandatory',
            'alert-danger');
        } else {
            // add the expenses into the list 
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('Added...',
            'alert-success');
        }
    })
}
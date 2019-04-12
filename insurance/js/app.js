// Variables
const form = document.getElementById('request-quote');

const html = new HTMLUI();

// EventListeners
EventListeners();

function EventListeners() {
    document.addEventListener('DOMContentLoaded', function () {
        // Create the <option> for the year
        html.displayYears();
    })

    // When the form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // read the values from the DOM
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;
        // read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;

        // check that all the fields have smth
        if (make === '' || year === '' || level === '') {
            html.displayError('All the fields are mandatory');
        } else {
            // Clear the previous quotes
            const prevResult = document.querySelector('#result div')
            if(prevResult != null) {
                prevResult.remove();
            }
            // Make the quotation
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            // Print the result from HTMLUI();
            html.showResults(price, insurance);
        }
    })
}


// Objects

// everything related to the quotation and calculation in Insurance
function Insurance(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
}

// Calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function (insurance) {
    let price;
    const base = 2000;

    // get the make 
    const make = insurance.make;

    /*
        1 = American 15%
        2 = Asian 05%
        3 = European 35%
    */

    switch (make) {
        case '1':
            price = base * 1.15;
            break;
        case '2':
            price = base * 1.05;
            break;
        case '3':
            price = base * 1.35;
            break;
    }

    // Get the year 
    const year = insurance.year;

    // Get the years difference 
    const difference = this.getYearDifference(year);

    // Each years the cost of the insurance is going to be 3% cheaper
    price = price - ((difference * 3) * price) / 100;

    // check the level of protection
    const level = insurance.level;

    price = this.calculateLevel(price, level);

    return price;
}
// returns the difference between years 
Insurance.prototype.getYearDifference = function (year) {
    return new Date().getFullYear() - year;
}
// adds the value based on the level of protection
Insurance.prototype.calculateLevel = function (price, level) {
    /*
        Basic insurance is going to increase the value by 30%
        Complete is going to increase the value by 50%
    */
    if (level === 'basic') {
        price = price * 1.30;
    } else {
        price = price * 1.50;
    }

    return price;
}


// everything related into html
function HTMLUI() {}

// Displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function () {
    // max & min year
    const max = new Date().getFullYear(),
          min = max - 20;

    // Generate the list with the latest 20 years
    const selectYears = document.getElementById('year');

    // Print the values
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}

// print an error
HTMLUI.prototype.displayError = function (message) {
    // create a div
    const div = document.createElement('div');
    div.classList = 'error';

    // insert the message
    div.innerHTML = `
        <p>${message}</p>
    `;

    form.insertBefore(div, document.querySelector('.form-group'));

    // remove the error
    setTimeout(function () {
        document.querySelector('.error').remove();
    }, 3000)
}

// Prints the results into the HTML
HTMLUI.prototype.showResults = function (price, insurance) {
    // print the result
    const result = document.getElementById('result');

    // create a div with the result
    const div = document.createElement('div');

    // Get make from the object and assign a readeble name
    let make = insurance.make;
    
    switch(make) {
        case '1':
            make = 'American';
            break;
        case '2':
            make = 'Asia';
            break;
        case '3':
            make = 'European';
            break;
    }
    

    // Insert the result
    div.innerHTML = `
            <p class='header'>Summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p>Level: ${insurance.level}</p>
            <p class='total'>Total: $ ${price}</p>
    `;

    const spinner = document.querySelector('#loading img');
    spinner.style.display = 'block';

    setTimeout(function(){
        spinner.style.display = 'none'
        // insert into html
        result.appendChild(div);
    }, 2000);

}
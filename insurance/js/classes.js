// Classes

// everything related to the quotation and calculation in Insurance
class Insurance {

    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;
    }

    // Calculate the price for the current quotation
    calculateQuotation(insurance) {
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
    getYearDifference(year) {
        return new Date().getFullYear() - year;
    }
    // adds the value based on the level of protection
    calculateLevel(price, level) {
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
}


// everything related into html
class HTMLUI {

    // Displays the latest 20 years in the select
    displayYears() {
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
    displayError(message) {
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
    showResults(price, insurance) {
        // print the result
        const result = document.getElementById('result');

        // create a div with the result
        const div = document.createElement('div');

        // Get make from the object and assign a readeble name
        let make = insurance.make;

        switch (make) {
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

        setTimeout(function () {
            spinner.style.display = 'none'
            // insert into html
            result.appendChild(div);
        }, 2000);

    }

}
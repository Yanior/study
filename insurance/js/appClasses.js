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
            if (prevResult != null) {
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
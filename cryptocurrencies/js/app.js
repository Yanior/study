// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// create the variables 

const form = document.getElementById('form');


// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read currency 
    const currencySelect = document.getElementById('currency').value;
    // read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency')
    .value;

    // validate that selects have something
    if(currencySelect === '' || cryptoCurrencySelect === '') {
        // display an errror
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel')
    } else {
        // query the rest api
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                ui.displayResult( data.result[0], currencySelect );
            })
    }
})
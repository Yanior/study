class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
        // this.otherMethods();
    }
    // Prints the <option> for the form
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;

                // build the <select> from the Rest API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    // add the <option>
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode
                    (currency.name));
                    select.appendChild(option);
                })
            })
    }

    // prints a message 2 parameters 
    printMessage(message, className) {
        const div = document.createElement('div');

        // add the classes
        div.className = className;
        // add the message 
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);

        // delete message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    // prints the result of the valuation / rate
    displayResult(result) {

        // read the currency
        let currencyName;
        currencyName = 'price_' + currency.toLoweCase();
        // read the result from the object
        const value = result[currencyName];

        // remove the previous result
        const prevResult = document.querySelector('#result > div');
        if(prevResult) {
            prevResult.remove();
        }

        let HTMLTemplate = '';
        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result.name} from ${currency} is $ ${value}</p>
                    <p>Last Hour: ${result.precent_chanhe_1h}</p>
                    <p>Last Day: ${result.precent_chanhe_24h}</p>
                    <p>Last 7 Days: ${result.precent_chanhe_7d}</p>
                </div>
            </div>
        `;

        // Print the spinner
        this.showSpinner();

        // print the result and remove the spinner
        setTimeout(() => {
            // print the result
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            // hide spinner
            document.querySelector('.spinner img').remove();
        }, 3000)

    }

    // Print the spinner
    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}


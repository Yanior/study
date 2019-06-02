class CryptoAPI {
    // query the rest api with a currency and cryptocurrency

    async queryAPI(currency, cryptocurrency) {
        // query the url
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        // return as json
        const result = await url.json()
    }

    // get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const url = await fetch('./crypto.json'); 

        // return this as a json
        const cryptoCurrencies = await url.json();

        // return the object 
        return {
            cryptoCurrencies
        }
    }
}
{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-amount");

    let fromCurrencyElement = document.querySelector(".js-fromCurrency");
    let toCurrencyElement = document.querySelector(".js-toCurrency");

    let convertButton = document.querySelector(".js-convertButton");
    let resultElement = document.querySelector(".js-result");


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();


        let ratePLN = 1;
        let rateEUR = 4.3969;
        let rateUSD = 3.6924;
        let rateCHF = 4.0884;

        let amount = +amountElement.value;
        let fromCurrency = fromCurrencyElement.value;
        let toCurrency = toCurrencyElement.value;
        let result;


        switch (fromCurrency) {
            case "PLN":
                ratePLN = amount;
                break;

            case "EUR":
                ratePLN = amount * rateEUR;
                break;

            case "USD":
                ratePLN = amount * rateUSD;
                break;

            case "CHF":
                ratePLN = amount * rateCHF;
                break;
        }

        switch (toCurrency) {
            case "PLN":
                result = ratePLN;
                break;

            case "EUR":
                result = ratePLN / rateEUR;
                break;

            case "USD":
                result = ratePLN / rateUSD;
                break;

            case "CHF":
                result = ratePLN / rateCHF;
                break;

        }


        resultElement.innerHTML = `<p>${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}</p>`;



    });

}
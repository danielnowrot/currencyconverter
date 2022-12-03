let EUR = 4.7;
let GBP = 5.45;
let USD = 4.51;

let formElement = document.querySelector(".js-form");
let inputValue = document.querySelector(".js-inputValue");
let inputCurrency = document.querySelector(".js-inputCurrency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = +inputValue.value;
    let currency = inputCurrency.value;

    switch (currency) {
        case "EUR":
            result = value / EUR;
            break;
        case "GBP":
            result = value / GBP;
            break;
        case "USD":
            result = value / USD;
            break;
    }
    resultElement.innerText =
        `${value.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
})


{
    const calculateCurrency = (currency, value) => {
        const EUR = 4.7;
        const GBP = 5.45;
        const USD = 4.51;

        switch (currency) {
            case "EUR":
                return value / EUR;
            case "GBP":
                return value / GBP;
            case "USD":
                return value / USD;
        }
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputValue = document.querySelector(".js-inputValue");
            const inputCurrency = document.querySelector(".js-inputCurrency");
            const resultElement = document.querySelector(".js-result");

            const value = +inputValue.value;
            const currency = inputCurrency.value;
            const result = calculateCurrency(currency, value);

            resultElement.innerText =
                `${value.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
        })
    }
    init();
}
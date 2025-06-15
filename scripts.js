const button1 = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currencyselect1")
const inputCurrencyValue = document.querySelector(".currency-value");

        // Adicionando um evento de entrada para permitir apenas números e vírgulas
        inputCurrencyValue.addEventListener("input", function() {
            // Removendo caracteres não numéricos, permitindo apenas números e vírgulas
            this.value = this.value.replace(/[^0-9.,]/g, ""); 
        });


function convertvalue() {
    const inputcurrencyvalue = parseFloat(inputCurrencyValue.value.replace(',', '.')); // Convertendo para número

    //const inputcurrencyvalue = document.querySelector(".currency-value").value//
    const valuetoconvert = document.querySelector(".valuereal1")
    const valueconverted = document.querySelector(".valuedolar1")
    const dolartoday = 5.2
    const eurotoday = 6.2

    console.log(currencyselect.value)

    valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

    if (currencyselect.value == "dolar") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (currencyselect.value == "euro") {
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }
}

function changecurrency() {

    const currencyName = document.getElementById("currency-name")
    const valuecurrency = document.getElementById("value-currency")
    const imagecurrency = document.getElementById("image-currency")
    if (currencyselect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        valuecurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuecurrency)
        imagecurrency.src = "./assets/estados-unidos (1) 1.png"


    }

    if (currencyselect.value == "euro") {
        currencyName.innerHTML = "Euro"
        valuecurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valuecurrency)
        imagecurrency.src = "./assets/Euro.png"

    }
convertvalue()

}
currencyselect.addEventListener("change", changecurrency)
button1.addEventListener("click", convertvalue)
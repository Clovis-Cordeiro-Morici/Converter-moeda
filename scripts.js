const button = document.querySelector(".convert-button")

function convertvalue() {
    const inputcurrencyvalue=document.querySelector(".currency-value").value
    const dolartoday= 5
    const valueconverted= inputcurrencyvalue/dolartoday
    console.log(valueconverted)
}

button.addEventListener("click", convertvalue)
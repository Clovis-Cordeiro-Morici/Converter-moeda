const button1 = document.querySelector(".convert-button")

function convertvalue() {
    
    const inputcurrencyvalue = document.querySelector(".currency-value").value
    const valuetoconvert = document.querySelector(".valuereal1")
    const valueconverted = document.querySelector(".valuedolar1")
    const dolartoday= 5.2
    
    const resultconverted = inputcurrencyvalue / dolartoday

    valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }). format(inputcurrencyvalue)

   valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD"
    }). format(resultconverted )
   

   
    
}

button1.addEventListener("click", convertvalue)
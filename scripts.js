const button1 = document.querySelector(".convert-button");
const currencyselect = document.querySelector(".currencyselect1");
const inputCurrencyValue = document.querySelector(".currency-value");

let rates = {
    USD: 0, // Dólar americano
    EUR: 0, // Euro
    GBP: 0  // Libra esterlina
};

// Adicione sua chave de API aqui
const apiKey = 'ed2f24a81f79664fdc8b1bad';

// Função para obter a URL com base na moeda selecionada
function getApiUrl(currency) {
    return `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
}

async function getRates() {
    const selectedCurrency = currencyselect.value === "dolar" ? "USD" :
                             currencyselect.value === "euro" ? "EUR" : "GBP"; // Seleciona a moeda correta

    const apiUrl = getApiUrl(selectedCurrency); // Obter a URL correta com base na moeda selecionada

    try {
        const response = await fetch(apiUrl); // Faz uma requisição para a API
        const data = await response.json(); // Transforma a resposta em JSON
        
        // Armazena as taxas de câmbio em relação ao real
        rates.USD = data.conversion_rates.BRL; // Taxa de conversão para USD
        rates.EUR = data.conversion_rates.BRL; // Taxa de conversão para EUR
        rates.GBP = data.conversion_rates.BRL; // Taxa de conversão para GBP
    } catch (error) {
        console.error("Erro ao buscar as taxas de câmbio:", error);
        // Valores padrão em caso de erro
        rates.USD = 5.46;
        rates.EUR = 6.35;
        rates.GBP = 7.46;
    }
}

async function convertValue() {
    await getRates(); // Aguardar as taxas de câmbio serem obtidas

    const inputCurrencyValueNumber = parseFloat(inputCurrencyValue.value);
    const valuetoconvert = document.querySelector(".valuereal1");
    const valueconverted = document.querySelector(".valuedolar1");

    valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValueNumber);

    if (currencyselect.value === "dolar") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValueNumber / rates.USD);
        console.log(rates.USD);
    } else if (currencyselect.value === "euro") {
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValueNumber / rates.EUR);
        console.log(rates.EUR);
    } else if (currencyselect.value === "libra") {
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValueNumber / rates.GBP);
        console.log(rates.GBP);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const imagecurrency = document.getElementById("image-currency");

    if (currencyselect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        imagecurrency.src = "./assets/estados-unidos (1) 1.png";
    } else if (currencyselect.value === "euro") {
        currencyName.innerHTML = "Euro";
        imagecurrency.src = "./assets/Euro.png";
    } else if (currencyselect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        imagecurrency.src = "./assets/libra 1.png";
    }

    convertValue(); // Chama a função de conversão ao mudar a moeda
}

// Adicionando os eventos
currencyselect.addEventListener("change", changeCurrency);
button1.addEventListener("click", convertValue);
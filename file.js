function convertFromCelsius() {
    let celsius = parseFloat(document.getElementById("celciousInput").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;

        document.getElementById("fahrenheitInput").value = fahrenheit.toFixed(2);
        document.getElementById("kelvinInput").value = kelvin.toFixed(2);
    }
}

function convertFromFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;
        let kelvin = (fahrenheit - 32) * 5/9 + 273.15;

        document.getElementById("celciousInput").value = celsius.toFixed(2);
        document.getElementById("kelvinInput").value = kelvin.toFixed(2);
    }
}

function convertFromKelvin() {
    let kelvin = parseFloat(document.getElementById("kelvinInput").value);
    if (!isNaN(kelvin)) {
        let celsius = kelvin - 273.15;
        let fahrenheit = (kelvin - 273.15) * 9/5 + 32;

        document.getElementById("celciousInput").value = celsius.toFixed(2);
        document.getElementById("fahrenheitInput").value = fahrenheit.toFixed(2);
    }
}


function calculate() {
    let celsius = document.getElementById("celciousInput").value;
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    let kelvin = document.getElementById("kelvinInput").value;

  
    if (celsius !== "") {
        convertFromCelsius();
    } else if (fahrenheit !== "") {
        convertFromFahrenheit();
    } else if (kelvin !== "") {
        convertFromKelvin();
    } else {
        alert("Please enter a value in one of the fields to convert.");
    }
}


function clearFields() {
    document.getElementById("celciousInput").value = '';
    document.getElementById("fahrenheitInput").value = '';
    document.getElementById("kelvinInput").value = '';
}


document.getElementById("resetBtn").addEventListener("click", clearFields);
document.getElementById("calculateBtn").addEventListener("click", calculate);
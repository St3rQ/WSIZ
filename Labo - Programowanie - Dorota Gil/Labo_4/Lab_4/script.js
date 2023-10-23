// 1.1 - For
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
}

for (let i = 10; i > 0; i--) {
    console.log(i);
    sleep(1000);
}

console.log("Happy New Year!");

// 1.2 - While
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
}

let countdown = 10;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
    sleep(1000);
}

console.log("Happy New Year!");

// 2 - NWD
function findNWD() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result1").textContent =
            "Wprowadź poprawne liczby.";
        return;
    }

    let a = Math.abs(number1);
    let b = Math.abs(number2);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    document.getElementById("result1").textContent =
        "NWD = (" + number1 + "," + number2 + ") = " + a;
}

// 3 - Kalkulator
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 / num2;
    displayResult(result);
}

function power() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = Math.pow(num1, num2);
    displayResult(result);
}

function displayResult(result) {
    const resultElement = document.getElementById("result2");
    resultElement.textContent = "Wynik: " + result;
}

// 4 - Zegar
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const time = hours + ":" + minutes + ":" + seconds;
    clockElement.textContent = time;
}

setInterval(updateClock, 1000);

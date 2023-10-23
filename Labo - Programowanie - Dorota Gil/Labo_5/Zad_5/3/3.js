var bankData = [
    {
        name: "Jan Kowalski",
        money: 5000,
        pin: "1234",
    },
    {
        name: "Anna Nowak",
        money: 3000,
        pin: "5678",
    },
    {
        name: "Adam Smith",
        money: 8000,
        pin: "9876",
    },
];

function login() {
    var accountNumber = document.getElementById("accountNumber").value;
    var pin = document.getElementById("pin").value;

    var user = bankData[accountNumber];

    if (user && user.pin === pin) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("userPanel").style.display = "block";
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userMoney").textContent = user.money;
    } else {
        alert("Nieprawidłowy numer konta lub PIN.");
    }
}

function withdraw() {
    var amount = parseFloat(document.getElementById("withdrawAmount").value);
    var user = bankData[document.getElementById("accountNumber").value];

    if (user.money >= amount) {
        user.money -= amount;
        document.getElementById("userMoney").textContent = user.money;
        alert("Wypłacono " + amount + " zł.");
    } else {
        alert("Nie masz wystarczającej ilości pieniędzy na koncie.");
    }
}

function deposit() {
    var amount = parseFloat(document.getElementById("depositAmount").value);
    var user = bankData[document.getElementById("accountNumber").value];

    user.money += amount;
    document.getElementById("userMoney").textContent = user.money;
    alert("Wpłacono " + amount + " zł.");
}

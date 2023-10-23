var names = [
    "Jan",
    "Anna",
    "Marta",
    "Piotr",
    "Katarzyna",
    "Marcin",
    "Ewa",
    "Tomasz",
    "Magdalena",
    "Michał",
];
var surnames = [
    "Nowak",
    "Kowalski",
    "Wiśniewski",
    "Wójcik",
    "Kowalczyk",
    "Kamińska",
    "Lewandowski",
    "Zielińska",
    "Szymański",
    "Woźniak",
];

function generateData(event) {
    event.preventDefault();

    var recordCountInput = document.getElementById("recordCount");
    var recordCount = parseInt(recordCountInput.value);

    if (isNaN(recordCount) || recordCount < 1 || recordCount > 100) {
        alert("Podaj liczbę rekordów w zakresie od 1 do 100.");
        return;
    }

    var data = [];

    for (var i = 0; i < recordCount; i++) {
        var name = names[Math.floor(Math.random() * names.length)];
        var surname = surnames[Math.floor(Math.random() * surnames.length)];
        var age = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
        var phone =
            Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000;

        var person = {
            name: name,
            surname: surname,
            age: age,
            phone: phone,
        };

        data.push(person);
    }

    displayResults(data);
}

function displayResults(data) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headerRow = document.createElement("tr");
    var headers = ["Name", "Surname", "Age", "Phone"];

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (var i = 0; i < data.length; i++) {
        var person = data[i];
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        var surnameCell = document.createElement("td");
        surnameCell.textContent = person.surname;
        row.appendChild(surnameCell);

        var ageCell = document.createElement("td");
        ageCell.textContent = person.age;
        row.appendChild(ageCell);

        var phoneCell = document.createElement("td");
        phoneCell.textContent = person.phone;
        row.appendChild(phoneCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    resultsDiv.appendChild(table);
}

var form = document.querySelector("form");
form.addEventListener("submit", generateData);

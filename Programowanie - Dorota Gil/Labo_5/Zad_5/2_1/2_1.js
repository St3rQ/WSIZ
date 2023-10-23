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
var data = [];

for (var i = 0; i < 20; i++) {
    var name = names[Math.floor(Math.random() * names.length)];
    var surname = surnames[Math.floor(Math.random() * surnames.length)];
    var age = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
    var phone = Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000;

    var person = {
        name: name,
        surname: surname,
        age: age,
        phone: phone,
    };

    data.push(person);
}

console.log(data);

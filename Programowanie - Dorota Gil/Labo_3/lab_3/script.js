// Zad 1
alert("Hello world!");

// Zad 2
let a = 10;
let b = 20;
let c = 23.2;

// Zad 3
dodawanie = a+b;
odejmowanie = c-a;
mnozenie = a*b;
dzielenie = b/a;
alert(dodawanie);
alert(odejmowanie);
alert(mnozenie);
alert(dzielenie);

// Zad 3.1
const dzialania = document.getElementById("dzialania");
wyniki = dodawanie + "<br>" + odejmowanie + "<br>" + mnozenie + "<br>" + dzielenie;
dzialania.innerHTML = wyniki;

// Zad 4
imie = prompt("Podaj swoję imię");
alert(imie);

// Zad 5
let a1 = prompt("Podaj bok a");
let b1 = prompt("Podaj bok b");
let c1 = prompt("Podaj bok c");
let a2 = parseFloat(a1)
let b2 = parseFloat(b1)
let c2 = parseFloat(c1)
let p = (a2+b2+c2)/2;
let pole = Math.sqrt(p*(p-a2)*(p-b2)*(p-c2));
pole = pole.toFixed(2)
const pole_wynik = document.getElementById("pole");
pole_wynik.innerHTML = pole;

// Zad 6
los = Math.floor(Math.random()*5+1);
traf = prompt("Podaj liczbe");
if (traf == los) {
    alert("Dobra robota")
}
else {
    alert("Nie pasuje")
}

// Zad 7
liczba1 = prompt("Podaj liczbe 1");
liczba2 = prompt("Podaj liczbe 2");
liczba3 = prompt("Podaj liczbe 3");
let max = liczba1
if (max < liczba2) {
    max = liczba2
}
if (max < liczba3) {
    max = liczba3
}
alert(max)
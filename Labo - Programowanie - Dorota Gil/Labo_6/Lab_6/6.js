class Prostokąt {
    constructor(wysokość, szerokość, nazwa) {
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;
    }

    zmieńNazwę(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }

    obwód() {
        return 2 * (this.wysokość + this.szerokość);
    }

    pole() {
        return this.wysokość * this.szerokość;
    }
}

// Tworzenie obiektu klasy Prostokąt
const prostokąt = new Prostokąt(5, 10, "Prostokąt");

console.log("Nazwa przed zmianą: " + prostokąt.nazwa);
prostokąt.zmieńNazwę("Nowa Nazwa");
console.log("Nazwa po zmianie: " + prostokąt.nazwa);

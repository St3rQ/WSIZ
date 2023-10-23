class Trapez {
    constructor(wysokość, podstawa1, podstawa2, nazwa) {
        this.wysokość = wysokość;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    pole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokość) / 2;
    }
}

// Tworzenie trzech obiektów klasy Trapez
const trapez1 = new Trapez(5, 3, 7, "Trapez 1");
const trapez2 = new Trapez(4, 6, 9, "Trapez 2");
const trapez3 = new Trapez(6, 2, 5, "Trapez 3");

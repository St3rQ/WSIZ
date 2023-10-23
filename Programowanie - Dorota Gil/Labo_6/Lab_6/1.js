class Prostokąt {
    constructor(wysokość, szerokość, nazwa) {
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;
    }

    obwód() {
        return 2 * (this.wysokość + this.szerokość);
    }

    pole() {
        return this.wysokość * this.szerokość;
    }

    porównaj_pola(inny_prostokąt) {
        if (this.pole() > inny_prostokąt.pole()) {
            return this;
        } else if (this.pole() < inny_prostokąt.pole()) {
            return inny_prostokąt;
        } else {
            return null;
        }
    }
}

// Tworzenie trzech obiektów klasy Prostokąt
const prostokąt1 = new Prostokąt(5, 10, "Prostokąt 1");
const prostokąt2 = new Prostokąt(3, 8, "Prostokąt 2");
const prostokąt3 = new Prostokąt(4, 6, "Prostokąt 3");

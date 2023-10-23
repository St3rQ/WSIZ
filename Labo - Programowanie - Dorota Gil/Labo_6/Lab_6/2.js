class Trójkąt {
    constructor(wysokość, długośćPodstawy, nazwa) {
        this.wysokość = wysokość;
        this.długośćPodstawy = długośćPodstawy;
        this.nazwa = nazwa;
    }

    pole() {
        return (this.wysokość * this.długośćPodstawy) / 2;
    }

    porównaj_pola(inny_trójkąt) {
        if (this.pole() > inny_trójkąt.pole()) {
            return this;
        } else if (this.pole() < inny_trójkąt.pole()) {
            return inny_trójkąt;
        } else {
            return null;
        }
    }
}

// Tworzenie trzech obiektów klasy Trójkąt
const trójkąt1 = new Trójkąt(4, 6, "Trójkąt 1");
const trójkąt2 = new Trójkąt(3, 5, "Trójkąt 2");
const trójkąt3 = new Trójkąt(5, 8, "Trójkąt 3");

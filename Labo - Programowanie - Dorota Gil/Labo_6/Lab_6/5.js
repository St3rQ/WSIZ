function porównajObwody(prostokąt1, prostokąt2) {
    const obwód1 = prostokąt1.obwód();
    const obwód2 = prostokąt2.obwód();

    if (obwód1 > obwód2) {
        return prostokąt1;
    } else if (obwód1 < obwód2) {
        return prostokąt2;
    } else {
        return null;
    }
}

// Przykładowe obiekty prostokątów
const prostokąt1 = {
    nazwa: "Prostokąt 1",
    wysokość: 5,
    szerokość: 10,
    obwód() {
        return 2 * (this.wysokość + this.szerokość);
    },
};

const prostokąt2 = {
    nazwa: "Prostokąt 2",
    wysokość: 3,
    szerokość: 8,
    obwód() {
        return 2 * (this.wysokość + this.szerokość);
    },
};

// Wywołanie funkcji
const większyObwód = porównajObwody(prostokąt1, prostokąt2);

if (większyObwód !== null) {
    console.log("Prostokąt o większym obwodzie:");
    console.log("Nazwa: " + większyObwód.nazwa);
    console.log("Obwód: " + większyObwód.obwód());
} else {
    console.log("Oba prostokąty mają równy obwód.");
}

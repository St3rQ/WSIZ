function znajdźNajwiększąFigurę(prostokąt, trójkąt, trapez) {
    const figury = [prostokąt, trójkąt, trapez];

    let największaFigura = null;
    let największePole = 0;

    for (let figura of figury) {
        const pole = figura.pole();

        if (pole > największePole) {
            największaFigura = figura;
            największePole = pole;
        }
    }

    if (największaFigura !== null) {
        console.log("Największa figura:");
        console.log("Nazwa: " + największaFigura.nazwa);
        console.log("Pole: " + największePole);
    } else {
        console.log("Brak figur do porównania.");
    }
}

// Przykładowe obiekty prostokątu, trójkąta i trapezu
const prostokąt = {
    nazwa: "Prostokąt",
    wysokość: 5,
    szerokość: 10,
    pole() {
        return this.wysokość * this.szerokość;
    },
};

const trójkąt = {
    nazwa: "Trójkąt",
    wysokość: 4,
    długośćPodstawy: 6,
    pole() {
        return (this.wysokość * this.długośćPodstawy) / 2;
    },
};

const trapez = {
    nazwa: "Trapez",
    wysokość: 5,
    podstawa1: 3,
    podstawa2: 7,
    pole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokość) / 2;
    },
};

// Wywołanie funkcji
znajdźNajwiększąFigurę(prostokąt, trójkąt, trapez);

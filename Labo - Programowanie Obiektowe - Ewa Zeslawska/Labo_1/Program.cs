// main
//WriteExample();
//string name = InputName();
//double value = InputDouble();
//View(name, value);
//View("janina", 12);
//Console.Clear();
Zadanie2();



// ===== koniec main


//void WriteExample()
//{
//    int wiek = 11;
//    string name = "ala";
//    Console.WriteLine("Imie: " + name + ", wiek: " + wiek);
//    Console.WriteLine("Imie: {0}, wiek: {1}", name, wiek);
//    Console.WriteLine($"Imie: {name}, wiek: {wiek}");
//}

//string InputName()
//{
//    Console.WriteLine("Podaj imie: ");
//    string name = Console.ReadLine();
//    return name;
//}


double InputDouble()
{
    Console.WriteLine("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

//void View(string name, double value)
//{
//    Console.WriteLine($"Imie: {name}, wartosc: {value}");
//}


void Zadanie1() { 
    double a = InputDouble(), b = InputDouble(), c = InputDouble();
    double delta = Math.Pow(b, 2) - (4 * a * c);
    double x1, x2;

    if (a == 0) Console.WriteLine("to nie jest row, kw");
    else if (delta < 0) Console.WriteLine("brka roz. w zb liczb rz. ");
    else if (delta == 0) {
        x1 = (-b - Math.Sqrt(delta)) / (2 * a);
        Console.WriteLine("jedno rozwiazanie x1 " + x1);
    }    
    else{
        x1 = (-b - Math.Sqrt(delta)) / (2 * a);
        x2 = (-b + Math.Sqrt(delta)) / (2 * a);
        Console.WriteLine("jedno rozwiazanie x1 " + x1+ " x2 = "+x2);
    }
}


void Zadanie2() {
    Menu();
}

void Menu() {
    Console.WriteLine(" ========= Kalkulator \t\t============");
    Console.WriteLine(" ========= 1. Suma \t\t============");
    Console.WriteLine(" ========= 2. Rozcnia \t\t============");
    Console.WriteLine(" ========= 3. Iloczyn \t\t============");
    Console.WriteLine(" ========= 4. Iloraz \t\t============");
    Console.WriteLine(" ========= 5. Potegowanie \t============");
    Console.WriteLine(" ========= 6. Pierwiastkowanie \t============");
    Console.WriteLine(" ========= 7. trygonometria \t============");
    Console.WriteLine(" ========= 8. Wyjscie \t\t============");
    Console.WriteLine(" \n\n========= Twoj wybor \t\t============");

}
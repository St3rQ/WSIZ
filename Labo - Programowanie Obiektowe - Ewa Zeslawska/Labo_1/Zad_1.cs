//Main

RownanieKwadratowe();

//Koniec Main


//Funkcja do podawania wartości
double InputDouble()
{
    Console.Write("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

//Funkcja do obliczania równań kwadratowych
void RownanieKwadratowe()
{
    double a = InputDouble(), b = InputDouble(), c = InputDouble();
    double delta = Math.Pow(b, 2) - (4 * a * c);
    if (a == 0)
    {
        Console.WriteLine("To nie jest rownanie kwadratowe");
    }
    else if (delta > 0)
    {
        double x1, x2;
        x1 = (-b - Math.Sqrt(delta)) / 2 * a;
        x2 = (-b + Math.Sqrt(delta)) / 2 * a;
        Console.WriteLine($"Delta = {delta}");
        Console.WriteLine($"Wynik: x1 = {x1}, x2 = {x2}");
    }
    else if (delta == 0)
    {
        double x0;
        x0 = -b / (2 * a);
        Console.WriteLine($"Delta = {delta}");
        Console.WriteLine($"Wynik: x0 = {x0}");
    }
    else
    {
        Console.WriteLine($"Brak pierwiastków delta = {delta}");
    }
}
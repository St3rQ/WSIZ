//Main

Kalkulator();

//Koniec Main


//Funkcja do podawania wartości
double InputDouble()
{
    Console.Write("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

void Kalkulator()
{
    bool end = false;
    double a, b;
    while (end == false)
    {
        Console.WriteLine("Kalkulator");
        Console.WriteLine("Wybierz operacje, ktora chcesz wykonac:");
        Console.WriteLine("1 - Suma");
        Console.WriteLine("2 - Roznica");
        Console.WriteLine("3 - Iloczyn");
        Console.WriteLine("4 - Iloraz");
        Console.WriteLine("5 - Potegowanie");
        Console.WriteLine("6 - Pierwiastkowanie");
        Console.WriteLine("7 - Trygonometria");
        Console.WriteLine("8 - Wyjscie");
        double choice = InputDouble();
        Console.WriteLine("");
        switch (choice)
        {
            case 1:
                Console.WriteLine("Wybrano opcję 1 - Suma");
                a = InputDouble();
                b = InputDouble();
                double suma = a + b;
                Console.WriteLine($"Wynik dodawania: {suma}\n");
                break;
            case 2:
                Console.WriteLine("Wybrano opcję 2 - Różnica");
                a = InputDouble();
                b = InputDouble();
                double roznica = a - b;
                Console.WriteLine($"Wynik odejmowania: {roznica}\n");
                break;
            case 3:
                Console.WriteLine("Wybrano opcję 3 - Iloczyn");
                a = InputDouble();
                b = InputDouble();
                double iloczyn = a * b;
                Console.WriteLine($"Wynik mnozenia: {iloczyn}\n");
                break;
            case 4:
                Console.WriteLine("Wybrano opcję 4 - Iloraz");
                a = InputDouble();
                b = InputDouble();
                double iloraz = a / b;
                Console.WriteLine($"Wynik dzielenia: {iloraz}\n");
                break;
            case 5:
                Console.WriteLine("Wybrano opcję 5 - Potegowanie");
                a = InputDouble();
                b = InputDouble();
                double potegowanie = Math.Pow(a, b);
                Console.WriteLine($"Wynik potegowania: {potegowanie}\n");
                break;
            case 6:
                Console.WriteLine("Wybrano opcję 6 - Pierwiastkowanie");
                a = InputDouble();
                double pierwiastkowanie = Math.Sqrt(a);
                Console.WriteLine($"Wynik pierwiastkowania: {pierwiastkowanie}\n");
                break;
            case 7:
                Console.WriteLine("Wybrano opcję 7 - Trygonometria");
                bool end2 = false;
                while (end2 == false)
                {
                    Console.WriteLine("Trygonometria");
                    Console.WriteLine("Wybierz operacje, ktora chcesz wykonac:");
                    Console.WriteLine("1 - Sinus");
                    Console.WriteLine("2 - Cosinus");
                    Console.WriteLine("3 - Tangens");
                    Console.WriteLine("4 - Cotangens");
                    double choice2 = InputDouble();
                    Console.WriteLine("");
                    if (choice2 == 1)
                    {
                        Console.WriteLine("Wybrano opcję 1 - Sinus");
                        a = InputDouble();
                        double sinus = Math.Sin(a * (Math.PI / 180));
                        Console.WriteLine($"Sinus kata {a} stopni = {sinus}\n");
                        end2 = true;
                    }
                    else if (choice2 == 2)
                    {
                        Console.WriteLine("Wybrano opcję 2 - Cosinus");
                        a = InputDouble();
                        double cosinus = Math.Cos(a * (Math.PI / 180));
                        Console.WriteLine($"Cosinus kata {a} stopni = {cosinus}\n");
                        end2 = true;
                    }
                    else if (choice2 == 3)
                    {
                        Console.WriteLine("Wybrano opcję 3 - Tangens");
                        a = InputDouble();
                        double tangens = Math.Tan(a * (Math.PI / 180));
                        Console.WriteLine($"Tangens kata {a} stopni = {tangens}\n");
                        end2 = true;
                    }
                    else if (choice2 == 4)
                    {
                        Console.WriteLine("Wybrano opcję 4 - Cotangens");
                        a = InputDouble();
                        double tangens = Math.Tan(a * (Math.PI / 180));
                        double cotangens = 1 / tangens;
                        Console.WriteLine($"Cotangens kata {a} stopni = {cotangens}\n");
                        end2 = true;
                    }
                    else
                    {
                        Console.WriteLine("Wybrano zla opcje!!!");
                    }
                }
                break;
            case 8:
                end = true;
                break;
            default:
                break;
        }
    }
}
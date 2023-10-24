//Main

TworzenieTablicy();

//Koniec Main


//Funkcja do podawania wartości
double InputDouble()
{
    Console.Write("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

void TworzenieTablicy()
{
    double[] tablica = new double[10];
    bool end = false;
    for (int i = 0; i < tablica.Length; i++)
    {
        tablica[i] = InputDouble();
    }
    do
    {
        Console.WriteLine("\nMenu wyboru");
        Console.WriteLine("Wybierz operacje, ktora chcesz wykonac:");
        Console.WriteLine("1 - Oblicz sume elementow tablicy");
        Console.WriteLine("2 - Oblicz iloczyn elementow tablicy");
        Console.WriteLine("3 - Wyznacz wartosc srednia");
        Console.WriteLine("4 - Wyznacz wartosc minimalna");
        Console.WriteLine("5 - Wyznacz wartosc maksymalna");
        Console.WriteLine("6 - Wyjscie");
        double choice = InputDouble();
        if (choice == 1)
        {
            Console.WriteLine("\nOblicz sume elementow tablicy:");
            double suma = 0;
            for (int i = 0; i < tablica.Length; i++)
            {
                suma += tablica[i];
            }
            Console.Write($"Suma = {suma}");
            Console.WriteLine("");
        }
        else if (choice == 2)
        {
            Console.WriteLine("\nOblicz iloczyn elementow tablicy:");
            double iloczyn = tablica[0];
            for (int i = 1; i < tablica.Length; i++)
            {
                iloczyn *= tablica[i];
            }
            Console.Write($"Iloczyn = {iloczyn}");
            Console.WriteLine("");
        }
        else if (choice == 3)
        {
            Console.WriteLine("\nWyznacz wartosc srednia:");
            double suma = 0;
            double srednia;
            for (int i = 0; i < tablica.Length; i++)
            {
                suma += tablica[i];
            }
            srednia = suma / tablica.Length;
            Console.Write($"Srednia = {srednia}");
            Console.WriteLine("");
        }
        else if (choice == 4)
        {
            Console.WriteLine("\nWyznacz wartosc minimalna");
            double min = tablica[0];
            for (int i = 1; i < tablica.Length; i++)
            {
                if (min > tablica[i])
                {
                    min = tablica[i];
                }
            }
            Console.Write($"Wartosc minimalna = {min}");
            Console.WriteLine("");
        }
        else if (choice == 5)
        {
            Console.WriteLine("\nWyznacz wartosc maksymalna");
            double max = tablica[0];
            for (int i = 1; i < tablica.Length; i++)
            {
                if (max < tablica[i])
                {
                    max = tablica[i];
                }
            }
            Console.Write($"Wartosc maksymalna = {max}");
            Console.WriteLine("");
        }
        else if (choice == 6)
        {
            end = true;
        }
        else
        {
            Console.WriteLine("Wybrano zla opcje!!!");
        }

    } while (end == false);
}
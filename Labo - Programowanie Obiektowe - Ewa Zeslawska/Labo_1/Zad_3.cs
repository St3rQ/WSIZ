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
        Console.WriteLine("1 - Wyświetlanie tablicy od pierwszego do ostatniego indeksu");
        Console.WriteLine("2 - Wyświetlanie tablicy od ostatniego do pierwszego indeksu");
        Console.WriteLine("3 - Wyświetlanie elementów o nieparzystych indeksach");
        Console.WriteLine("4 - Wyświetlanie elementów o parzystych indeksach");
        Console.WriteLine("5 - Wyjscie");
        double choice = InputDouble();
        if (choice == 1)
        {
            Console.WriteLine("\nWyświetlanie tablicy od pierwszego do ostatniego indeksu:");
            for (int i = 0; i < tablica.Length; i++)
            {
                Console.Write($"{tablica[i]}, ");
            }
            Console.WriteLine("");
        }
        else if (choice == 2)
        {
            Console.WriteLine("\nWyświetlanie tablicy od ostatniego do pierwszego indeksu:");
            for (int i = 9; i >= 0; i--)
            {
                Console.Write($"{tablica[i]}, ");
            }
            Console.WriteLine("");
        }
        else if (choice == 3)
        {
            Console.WriteLine("\nWyświetlanie elementów o nieparzystych indeksach:");
            for (int i = 0; i < tablica.Length; i++)
            {
                if (i % 2 == 1)
                {
                    Console.Write($"{tablica[i]}, ");
                }
            }
            Console.WriteLine("");
        }
        else if (choice == 4)
        {
            Console.WriteLine("\nWyświetlanie elementów o parzystych indeksach");
            for (int i = 0; i < tablica.Length; i++)
            {
                if (i % 2 == 0)
                {
                    Console.Write($"{tablica[i]}, ");
                }
            }
            Console.WriteLine("");
        }
        else if (choice == 5)
        {
            end = true;
        }
        else
        {
            Console.WriteLine("Wybrano zla opcje!!!");
        }

    } while (end == false);
}
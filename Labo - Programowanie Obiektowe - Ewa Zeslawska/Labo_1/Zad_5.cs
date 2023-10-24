//Main

WyswietlanieTablicy();

//Koniec Main


//Funkcja do podawania wartości
double InputDouble()
{
    Console.Write("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

void WyswietlanieTablicy()
{
    double[] tablica = new double[21];
    double j = 20;
    for (int i = 0; i < tablica.Length; i++)
    {
        tablica[i] = j - i;
    }
    Console.WriteLine("Tablica z wylaczeniem liczb: (2, 6, 9, 15, 19)");
    for (int i = 0; i < tablica.Length; i++)
    {
        if (tablica[i] == 2 || tablica[i] == 6 || tablica[i] == 9 || tablica[i] == 15 || tablica[i] == 19)
        {
            continue;
        }
        Console.Write($"{tablica[i]}, ");
    }
}
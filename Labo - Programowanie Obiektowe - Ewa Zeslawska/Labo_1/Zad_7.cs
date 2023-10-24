//Main

BubbleSort();

//Koniec Main


//Funkcja do podawania wartości
double InputDouble()
{
    Console.Write("Podaj wartosc: ");
    double value = Convert.ToDouble(Console.ReadLine());
    return value;
}

int InputInt()
{
    Console.Write("Podaj wartosc: ");
    int value = Int32.Parse(Console.ReadLine());
    return value;
}

void BubbleSort()
{
    Console.WriteLine("Podaj ilosc liczb:");
    int n = InputInt();
    Console.WriteLine();
    double[] tablica = new double[n];
    double temp;
    for (int i = 0; i < n; i++)
    {
        tablica[i] = InputDouble();
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (tablica[j] > tablica[j + 1])
            {
                temp = tablica[j];
                tablica[j] = tablica[j + 1];
                tablica[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++)
    {
        Console.WriteLine(tablica[i]);
    }
}
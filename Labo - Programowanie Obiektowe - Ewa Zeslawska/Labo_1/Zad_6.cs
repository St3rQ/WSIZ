//Main

NieskonczonaPetla();

//Koniec Main


//Funkcja do podawania wartości
int InputDouble()
{
    Console.Write("Podaj wartosc: ");
    int value = Int32.Parse(Console.ReadLine());
    return value;
}

void NieskonczonaPetla()
{
    int x;
    while (true)
    {
        x = InputDouble();
        if (x < 0)
        {
            break;
        }
    }
}
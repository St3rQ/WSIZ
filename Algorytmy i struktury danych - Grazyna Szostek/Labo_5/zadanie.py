def demo_stos():
	stos = []
	print("****************  stos  ****************")
	print("Wypelnianie stosu")

	for liczba in range(1, 20, 2):
		push(stos, liczba)
		print(liczba, end = ' ')
		liczba += 1

	print(" <- wierzchołek stosu")
	print(f"size() -> {size(stos)}")
	print("Opróżnianie stosu")
	while not empty(stos):
		print(top(stos), end=" ")
		pop(stos)

demo_stos()
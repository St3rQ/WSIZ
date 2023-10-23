from queue import PriorityQueue

graph = {
    's': {'t': 10, 'y': 5},
    't': {'x': 1, 'y': 2},
    'x': {'z': 4},
    'y': {'t': 3, 'x': 9, 'z':2},
    'z': {'x': 6, 's': 7}
}

def dijkstra(graph, start):
    # Inicjalizacja słowników odległości i poprzedników
    distances = {node: float('inf') for node in graph}
    p = {node: None for node in graph}

    # Ustawienie odległości dla węzła start, tzw. źródła
    distances[start] = 0

    # Utworzenie kolejki priorytetowej z wierzchołkami V
    Q = PriorityQueue()
    for u in graph:
        Q.put((distances[u], u))

    while not Q.empty():
        # Zwróć i usuń wierzchołek z kolejki o najmniejszej wartości dist
        _, u = Q.get()

        # Przetworzenie sąsiednich wierzchołków, do których prowadzą krawędzie z u
        V = graph[u]                             # V - słownik powiązany z u
        for v, w in V.items():
            if distances[u] + w < distances[v]:
                distances[v] = distances[u] + w
                p[v] = u
                Q.put((distances[v], v))        # aktualizowanie kolejki

    return distances, p

d, p = dijkstra(graph, 's')
print(f"odległość: {d}")
print(f'poprzednik: {p}')
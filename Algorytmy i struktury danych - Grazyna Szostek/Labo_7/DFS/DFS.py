class Vertex:
    def __init__(self,name, e):
        self.name = name
        self.edges = e
        self.visited = False
        self.p = None
        self.time_1 = 0
        self.time_2 = 0

time = 0

def DFS(G_V):
    for _, u in G_V.items():        # O(V), bez DFS_Explore
        if not u.visited:
            DFS_Explore(u, G_V)     # funkcja jest wywoływana raz dla każdego wierzchołka
                                    # sama funkcja przegląda wszystkich sąsiadów dla v, co łącznie daje O(E)
                                    # złożoność ostatecznie dla DFS -> O(V+E)
def DFS_Explore(u, G_V):
    global time
    time += 1
    u.time_1 = time
    u.visited = True

    for v in u.edges:
        v = G_V[v]
        if not v.visited:
            v.p = u.name
            DFS_Explore(v, G_V)
    time += 1
    u.time_2 = time

graph_E = {
    'A': ['B', 'E'],
    'B': ['A','C', 'E'],
    'C': ['B','F'],
    'D': ['G','H'],
    'E': ['A','B','F'],
    'F': ['C','E','I'],
    'G': ['D','H'],
    'H': ['D','G'],
    'I': ['F']
}

graph_V = {v:Vertex(v, e) for v, e in graph_E.items()}      # O(V)
DFS(graph_V)
for _, u in graph_V.items():
    print(u.name, u.time_1, u.time_2)

for _, u in graph_V.items():
    print(u.name, u.p)
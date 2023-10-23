import queue

def bfs(graph, start):
    n = len(graph)
    visited = {v: False for v in graph}
    dist = {v: -1 for v in graph}
    parent = {v: None for v in graph}

    visited[start] = True
    dist[start] = 0
    Q = queue.Queue()
    Q.put(start)
    while not Q.empty():
        u = Q.get()
        for v in graph[u]:
            if not visited[v]:
                visited[v] = True
                dist[v] = dist[u] + 1
                parent[v] = u
                Q.put(v)
    return dist, parent

graph = {
    'r': ['s', 'v'],
    's': ['r','w'],
    't': ['w','x','u'],
    'u': ['t','x','y'],
    'v': ['r'],
    'w': ['s','t','x'],
    'x': ['w','t','u','y'],
    'y': ['x','u']
}

d,p = bfs(graph,'s')
print(d)
print(p)
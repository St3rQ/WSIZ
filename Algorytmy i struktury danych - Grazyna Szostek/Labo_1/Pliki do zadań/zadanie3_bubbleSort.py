def bubble_sort(T):
    i = n - 1
    dopóki i >= 1:
        j = 0
        dopóki j < i:
            je¿eli T[j] > T[j+1]:
               zamieñ miejscami T[j+1], T[j]
            zwiêksz j o 1
        zmniejsz i o 1

Lista = [2,4,-4,9,-1,0]
bubble_sort(Lista)
print(Lista)
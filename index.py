def amon(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2


    if left < n and arr[left] > arr[largest]:
        largest = left


    if right < n and arr[right] > arr[largest]:
        largest = right


    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        amon(arr, n, largest)


def amon_sort(arr):
    n = len(arr)


    for i in range(n // 2 - 1, -1, -1):
        amon(arr, n, i)


    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        amon(arr, i, 0)


    return arr
array = [5, 2, 4, 6, 8, 3, 1, 7]
sort_array = amon_sort(array)
print(sort_array)  


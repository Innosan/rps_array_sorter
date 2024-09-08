# Сортировка слиянием
## Анализ сложности:
- **n** - количество элементов в массиве
- **log(n)** - количество раз, которое массив разбивается на две равные части


- Лучший случай: **O(n * log(n))**
  - Отсортированный массив все равно разбивается на две равные части, а затем эти части сортируются и объединяются.
- Худший случай: **O(n * log(n))**
  - Отсортированный в обратном требуемому порядке массив (ASC -> DESC) разбивается на две равные части, а затем эти части сортируются и объединяются.

## Псевдокод:

```
function mergeSort(arr, order)
if length of arr <= 1
return arr

    middle = floor(length of arr / 2)
    left = slice of arr from 0 to middle
    right = slice of arr from middle to end

    sortedLeft = mergeSort(left, order)
    sortedRight = mergeSort(right, order)

    return merge(sortedLeft, sortedRight, order)

function merge(left, right, order)
result = []
leftIndex = 0
rightIndex = 0

    while leftIndex < length of left and rightIndex < length of right
        if order is ASC and left[leftIndex] < right[rightIndex]
            push left[leftIndex] to result
            leftIndex++
        else if order is DESC and left[leftIndex] > right[rightIndex]
            push left[leftIndex] to result
            leftIndex++
        else
            push right[rightIndex] to result
            rightIndex++

    concatenate remaining elements of left from leftIndex to result
    concatenate remaining elements of right from rightIndex to result

    return result
```

---

# Сортировка пузырьком
## Псевдокод:
```
function bubbleSort(arr, order)
    copyArr = copy of arr
    for i from 0 to length of copyArr - 1
        swapped = false
        for j from 0 to length of copyArr - i - 1
            if order is ASC and copyArr[j] > copyArr[j + 1]
                swap copyArr[j] and copyArr[j + 1]
                swapped = true
            else if order is DESC and copyArr[j] < copyArr[j + 1]
                swap copyArr[j] and copyArr[j + 1]
                swapped = true
        if not swapped
            break
    return copyArr
```

## Анализ сложности:
- Лучший случай: **O(n)**
  - Когда массив уже отсортирован, нам не нужно менять элементы местами, только сравнивать.
- Худший случай: **O(n^2)**
	- Когда массив отсортирован в обратном порядке, нам придется сравнивать каждый элемент с каждым другим элементом и менять их местами.
    - За каждый проход по массиву мы уменьшаем количество элементов, которые нужно проверить на 1.

---

# Сортировка выбором
## Псевдокод:
```
function selectionSort(arr, order)
	copyArr = copy of arr
	for i from 0 to length of copyArr - 1
		minIndex = i
		for j from i + 1 to length of copyArr
			if order is ASC and copyArr[j] < copyArr[minIndex]
				minIndex = j
			else if order is DESC and copyArr[j] > copyArr[minIndex]
				minIndex = j
		swap copyArr[i] and copyArr[minIndex]
	return copyArr
```

## Анализ сложности:
- Лучший случай: **O(n^2)**
	- Когда массив уже отсортирован, нам все равно придется сравнивать каждый элемент с каждым другим элементом.
- Худший случай: **O(n^2)**
	- Когда массив отсортирован в обратном порядке, нам придется сравнивать каждый элемент с каждым другим элементом и менять их местами.

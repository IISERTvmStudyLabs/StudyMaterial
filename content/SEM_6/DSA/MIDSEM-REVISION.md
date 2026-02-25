# DSA MIDSEM REVISION

## Master Theorem

**For recurrence:** $T(n) = aT(n/b) + O(n^d)$ where $a > 0, b > 1, d \ge 0$

$$
T(n) = \begin{cases} 
O(n^d) & \text{if } d > \log_b a \\
O(n^d \log n) & \text{if } d = \log_b a \\
O(n^{\log_b a}) & \text{if } d < \log_b a 
\end{cases}
$$

---

## Sorting Algorithms

### Selection Sort

```pseudocode
for i = 0 to n:
    min = i
    for j = i+1 to n:
        if A[j] < A[min]:
            min = j
    Swap(A[min], A[i])
```

**Comparisons:** $\frac{n(n-1)}{2}$

---

### Bubble Sort

```pseudocode
for j = 0 to n:
    for i = 0 to n-j-1:
        if A[i] > A[i+1]:
            Swap(A[i], A[i+1])
```

**Comparisons:** $\frac{n(n-1)}{2}$

---

### Insertion Sort

```pseudocode
for i = 2 to n:
    key = A[i]
    j = i - 1
    while (j > 0 AND A[j] > key):
        A[j+1] = A[j]
        j = j - 1
    A[j+1] = key
```

**Comparisons (worst):** $\frac{n(n-1)}{2}$

---

### Merge Sort

```pseudocode
MergeSort(A, beg, end):
    if beg < end:
        mid = (beg + end) / 2
        MergeSort(A, beg, mid)
        MergeSort(A, mid+1, end)
        Merge(A, beg, mid, end)
```

```pseudocode
Merge(A, beg, mid, end):
    n1 = mid - beg + 1
    n2 = end - mid
    
    for i = 0 to n1-1:
        L[i] = A[beg + i]
    for j = 0 to n2-1:
        R[j] = A[mid+1 + j]
    
    i = 0, j = 0, k = beg
    while (i < n1 AND j < n2):
        if L[i] <= R[j]:
            A[k] = L[i]
            i++
        else:
            A[k] = R[j]
            j++
        k++
    
    while i < n1:
        A[k] = L[i]
        i++, k++
    
    while j < n2:
        A[k] = R[j]
        j++, k++
```

**Recurrence:** $T(n) = 2T(n/2) + \Theta(n)$

---

### Quick Sort

```pseudocode
QuickSort(A, beg, end):
    if beg < end:
        pivotIndex = Partition(A, beg, end)
        QuickSort(A, beg, pivotIndex-1)
        QuickSort(A, pivotIndex+1, end)
```

```pseudocode
Partition(A, beg, end):
    pivot = A[end]
    i = beg - 1
    for j = beg to end-1:
        if A[j] <= pivot:
            i++
            Swap(A[i], A[j])
    Swap(A[i+1], A[end])
    return i+1
```

**Best/Avg:** $T(n) = 2T(n/2) + \Theta(n)$  
**Worst:** $T(n) = T(n-1) + \Theta(n)$

---

## Time Complexity Table

| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ |

---

## Infix to Postfix Conversion

### Operator Precedence

| Operator | Precedence | Associativity |
|----------|-----------|---------------|
| `^` | 3 (Highest) | Right to Left |
| `*`, `/`, `%` | 2 | Left to Right |
| `+`, `-` | 1 (Lowest) | Left to Right |

### Algorithm

```pseudocode
Initialize empty stack S
Initialize empty output P

for each token x in infix expression:
    if x is operand:
        Append x to P
    else if x is '(':
        Push x onto S
    else if x is ')':
        while top(S) != '(':
            Append pop(S) to P
        Pop '(' from S
    else if x is operator:
        while S not empty AND top(S) != '(' AND 
              precedence(top(S)) >= precedence(x):
            Append pop(S) to P
        Push x onto S

while S not empty:
    Append pop(S) to P

return P
```

**Time:** $O(n)$ | **Space:** $O(n)$

### Example

**Infix:** `A + B * C`

| Token | Stack | Postfix |
|-------|-------|---------|
| `A` | `[]` | `A` |
| `+` | `[+]` | `A` |
| `B` | `[+]` | `AB` |
| `*` | `[+, *]` | `AB` |
| `C` | `[+, *]` | `ABC` |
| (end) | `[+]` | `ABC*` |
| (end) | `[]` | `ABC*+` |

**Output:** `ABC*+`

---

**Infix:** `(A + B) * C`

| Token | Stack | Postfix |
|-------|-------|---------|
| `(` | `[(]` | `` |
| `A` | `[(]` | `A` |
| `+` | `[(, +]` | `A` |
| `B` | `[(, +]` | `AB` |
| `)` | `[]` | `AB+` |
| `*` | `[*]` | `AB+` |
| `C` | `[*]` | `AB+C` |
| (end) | `[]` | `AB+C*` |

**Output:** `AB+C*`

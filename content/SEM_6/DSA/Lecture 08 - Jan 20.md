## Merge Sort

**Array Length = 8000**

**Example:** [70, 25, 81, 9, 84, 65]

Single element arrays always sorted

**Step 1:** [25, 70] [81] [9, 65] [106]

**Step 2:** [9, 25, 70, 81, 106]

### Algorithm

**Merge Sort (A, beg, r):**

```
if (i < r):                    → c
  g = (i + r)/2                → c
  
  T(n/2) merge-Sort(A, beg)
  T(n/2) merge-Sort(A, mid)
  merge(A, i, r, g)
```

### Merge Function

**Merge (A, beg, r):**

```
n1 = mid + 1
n2 = r - g

for i = 1 to n1:               → n1
  L[i] = A[i+1]

for i = 0 to n2:               → n2
  R[i] = A[mid+1]

i = 0, j = 0

for k = 1 to r:                → n1
  if L[i] < R[j]:              ⟹ Θ(n)
    A[k] = L[i]
    i = i+1
  else:
    A[k] = R[j]
    j = j+1
```

### Time Complexity Analysis

$$O(n, m_1 + n)$$

where $n > m_1 \cdot 2$

$$O(n)$$

**Recurrence:**

$$T(n) = 2T(n/2) + n$$

$$T(1) = 0$$

$$\Theta(n \log n)$$

$$n \cdot \frac{\log^2}{n} \rightarrow \Theta(1)$$

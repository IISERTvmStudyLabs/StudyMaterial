## Selection Sort

**Randomly given elements:**

```pseudocode
for (i = 0 to n):
  min = i
  for (j = i+1 to n):
    if (A[j] < A[minimum]):
      minimum = j
  Swap(A[min], A[i])
```

### Example: [75, 36, 4, 9, 81, 65]

**Swap function:**
```pseudocode
S, temp = a
a = b
b = temp
```

**Complexity:**
- **Best case:** $O(n)$
- **Average:** $O(n^2)$
- **Iterations:** $n-1$ times

### Step-by-step Execution

```
75  36   4   9  81  65
 4  36  75   9  81  65
 4   9  75  36  81  65
 4   9  36  75  81  65
```

**Iterations:** $n-1$ comparisons, $n-2$, ...

**Total comparisons:**
$$
n-1 + n-2 + n-3 + \dots + 1
$$

$$
\frac{n(n-1)}{2} = \frac{n^2 - n}{2} = \frac{n^2}{2}
$$

**Time Complexity:**
$$
O(n^2)
$$

---

## Bubble Sort

**Example:** [75, 36, 4, 9, 81, 65]

```pseudocode
for j = (0 to n):
  for (i = 0 to n-j-1):
    if (A[i] > A[i+1]):
      Swap(A[i], A[i+1])
```

### Execution

```
36   4   9  75  65  81  →  Biggest at right-most
```

**Analysis:** $n-1 + n-2 + \dots + 1$

**Time Complexity:**
$$
O(n^2)
$$

**Best case:** $n-1$ comparison in $O(n)$

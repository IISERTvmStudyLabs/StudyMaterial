## Insertion Sort

**Assume Array upto 2 upto 50**

### Example: [51, 26, 3, 65, 91, 8]

**Step 1:** [26, 51]

**Step 2:** [26, 51, 3, 65, 91, 8]

**Step 3:** [26, 51, 3, 65, 91, 8]

**Final:** [26, 51, 3, 65, 91, 8] → **Sorted**

### Algorithm

**Insertion_Sort(A, n):**

```
for i = 2 to n:                → n
    key = A[i]                 → n-1
    j = i-1                    → n-1
    while (j > 0, A[j] > key): → n(n-1)/2
        A[j+1] = A[j]          → i-1, i+2
        j = j-1
    
    A[j+1] = key
```

**Inner loop analysis:**

For $(k = 1 \text{ to } i)$:
- If $A[i] > \text{key}$: $A[k+1] = A[k]$
- $A[k] = A[k]$

### Time Complexity

$$O(n^2)$$

**Worst Case:** $$O(n^2)$$

$$\frac{n(n-1)}{2}$$

### Best Case

**Partly sorted:** [3, 8, 26, 51, 65, 91]

$$O(n)$$

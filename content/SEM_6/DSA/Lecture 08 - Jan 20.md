## Merge Sort

### Example

**Input Array:** `[70, 25, 81, 9, 84, 65]`

Single element arrays are always sorted.

**Step 1 (Divide):** 
- `[70]` `[25]` `[81]` `[9]` `[84]` `[65]`

**Step 2 (Merge pairs):** 
- `[25, 70]` `[9, 81]` `[65, 84]`

**Step 3 (Merge):** 
- `[9, 25, 70, 81]` `[65, 84]`

**Step 4 (Final merge):** 
- `[9, 25, 65, 70, 81, 84]`

---

### Algorithm

**MergeSort(A, beg, end):**

```pseudocode
if (beg < end):                    // Base case check - O(1)
  mid = (beg + end) / 2            // Find middle - O(1)
  
  MergeSort(A, beg, mid)           // Sort left half - T(n/2)
  MergeSort(A, mid + 1, end)       // Sort right half - T(n/2)
  Merge(A, beg, mid, end)          // Merge sorted halves - O(n)
```

---

### Merge Function

**Merge(A, beg, mid, end):**

```pseudocode
n1 = mid - beg + 1               // Length of left subarray
n2 = end - mid                    // Length of right subarray

// Copy data to temporary arrays L[] and R[]
for i = 0 to n1 - 1:              // O(n1)
  L[i] = A[beg + i]

for j = 0 to n2 - 1:              // O(n2)
  R[j] = A[mid + 1 + j]

// Merge the temporary arrays back into A[beg..end]
i = 0, j = 0, k = beg

while (i < n1 AND j < n2):        // O(n1 + n2)
  if L[i] <= R[j]:
    A[k] = L[i]
    i = i + 1
  else:
    A[k] = R[j]
    j = j + 1
  k = k + 1

// Copy remaining elements of L[], if any
while (i < n1):
  A[k] = L[i]
  i = i + 1
  k = k + 1

// Copy remaining elements of R[], if any
while (j < n2):
  A[k] = R[j]
  j = j + 1
  k = k + 1
```

**Merge Complexity:** $\Theta(n)$ where $n = n_1 + n_2$

---

### Time Complexity Analysis

**Recurrence Relation:**

$$T(n) = 2T(n/2) + \Theta(n)$$

$$T(1) = \Theta(1)$$

**Solution:**

Using the Master Theorem or recursion tree method:

$$T(n) = \Theta(n \log n)$$

**Best Case:** $\Theta(n \log n)$  
**Average Case:** $\Theta(n \log n)$  
**Worst Case:** $\Theta(n \log n)$

**Space Complexity:** $\Theta(n)$ (due to temporary arrays)

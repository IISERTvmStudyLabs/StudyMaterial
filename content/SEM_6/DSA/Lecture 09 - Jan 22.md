## Insertion Sort

Insertion sort builds the sorted array one element at a time by repeatedly inserting the next element into its correct position.

---

### Example

**Input Array:** `[51, 26, 3, 65, 91, 8]`

**Initial:** `[51 | 26, 3, 65, 91, 8]` (first element is trivially sorted)

**Step 1 (i=2):** Insert 26  
- Compare 26 with 51: 26 < 51, so shift 51 right  
- Result: `[26, 51 | 3, 65, 91, 8]`

**Step 2 (i=3):** Insert 3  
- Compare 3 with 51: shift 51 right  
- Compare 3 with 26: shift 26 right  
- Result: `[3, 26, 51 | 65, 91, 8]`

**Step 3 (i=4):** Insert 65  
- Compare 65 with 51: 65 > 51, already in position  
- Result: `[3, 26, 51, 65 | 91, 8]`

**Step 4 (i=5):** Insert 91  
- Compare 91 with 65: 91 > 65, already in position  
- Result: `[3, 26, 51, 65, 91 | 8]`

**Step 5 (i=6):** Insert 8  
- Compare 8 with 91, 65, 51, 26: shift all right  
- Compare 8 with 3: 8 > 3, insert after 3  
- Result: `[3, 8, 26, 51, 65, 91]` ✓ **Sorted**

---

### Algorithm

**InsertionSort(A, n):**

```pseudocode
// Array A has indices 1 to n
for i = 2 to n:                      // Start from 2nd element
    key = A[i]                       // Element to be inserted
    j = i - 1                        // Index of last element in sorted portion
    
    // Shift elements greater than key to the right
    while (j > 0 AND A[j] > key):
        A[j + 1] = A[j]              // Shift element right
        j = j - 1                    // Move to previous element
    
    A[j + 1] = key                   // Insert key at correct position
```

---

### Time Complexity Analysis

**Worst Case:** Array in reverse order `[91, 65, 51, 26, 8, 3]`

- For each element `i`, we compare with all `i-1` previous elements
- Total comparisons: $1 + 2 + 3 + ... + (n-1) = \frac{n(n-1)}{2}$

$$T(n) = O(n^2)$$

**Best Case:** Array already sorted `[3, 8, 26, 51, 65, 91]`

- For each element, only one comparison (no shifts needed)
- Total comparisons: $n - 1$

$$T(n) = O(n)$$

**Average Case:** Random order

$$T(n) = O(n^2)$$

**Space Complexity:** $O(1)$ (in-place sorting)

---

### Characteristics

- **Stable:** Equal elements maintain their relative order
- **In-place:** Requires only $O(1)$ additional space
- **Adaptive:** Efficient for nearly sorted data
- **Online:** Can sort data as it's received

**Best for:** Small arrays or nearly sorted data

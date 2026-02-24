## Divide and Conquer

The divide and conquer paradigm consists of three steps:

1. **Divide:** Break the problem into smaller subproblems
2. **Conquer:** Solve each subproblem recursively
3. **Combine:** Merge the solutions of subproblems to solve the original problem

---

## Quick Sort

Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a **pivot** element and partitioning the array around it.

---

### How It Works

1. Choose a pivot element (typically the last element)
2. Partition the array so that:
   - Elements smaller than pivot are on the left
   - Elements greater than pivot are on the right
3. Recursively sort the left and right subarrays

---

### Example: Partition Step

**Input Array:** `[2, 5, 8, 3, 9, 4, 1, 7, 10, 6]`

**Pivot = 6** (last element)

**Goal:** Partition array such that elements ≤ 6 are on left, elements > 6 are on right.

#### Step-by-Step Partition Process

```
Initial: [2, 5, 8, 3, 9, 4, 1, 7, 10, 6]    pivot = 6, i = -1
         └────────────────────────────┘
```

**j = 0:** `A[0] = 2 ≤ 6` → increment i to 0, swap A[0] with A[0]
```
         [2, 5, 8, 3, 9, 4, 1, 7, 10, 6]    i = 0
          ↑
```

**j = 1:** `A[1] = 5 ≤ 6` → increment i to 1, swap A[1] with A[1]
```
         [2, 5, 8, 3, 9, 4, 1, 7, 10, 6]    i = 1
             ↑
```

**j = 2:** `A[2] = 8 > 6` → no swap, i stays at 1
```
         [2, 5, 8, 3, 9, 4, 1, 7, 10, 6]    i = 1
```

**j = 3:** `A[3] = 3 ≤ 6` → increment i to 2, swap A[2] with A[3]
```
         [2, 5, 3, 8, 9, 4, 1, 7, 10, 6]    i = 2
                ↑
```

**j = 4:** `A[4] = 9 > 6` → no swap
```
         [2, 5, 3, 8, 9, 4, 1, 7, 10, 6]    i = 2
```

**j = 5:** `A[5] = 4 ≤ 6` → increment i to 3, swap A[3] with A[5]
```
         [2, 5, 3, 4, 9, 8, 1, 7, 10, 6]    i = 3
                   ↑
```

**j = 6:** `A[6] = 1 ≤ 6` → increment i to 4, swap A[4] with A[6]
```
         [2, 5, 3, 4, 1, 8, 9, 7, 10, 6]    i = 4
                      ↑
```

**j = 7:** `A[7] = 7 > 6` → no swap
```
         [2, 5, 3, 4, 1, 8, 9, 7, 10, 6]    i = 4
```

**j = 8:** `A[8] = 10 > 6` → no swap
```
         [2, 5, 3, 4, 1, 8, 9, 7, 10, 6]    i = 4
```

**Final Step:** Place pivot at position i+1 by swapping A[5] with A[9]
```
After:   [2, 5, 3, 4, 1, 6, 9, 7, 10, 8]    pivot at index 5
          └──────────┘  ↑  └──────────┘
           ≤ pivot    pivot   > pivot
```

**Result:** Array partitioned with pivot (6) at its correct sorted position (index 5)

---

### Algorithms

#### Partition Function

**Partition(A, beg, end):**

```pseudocode
pivot = A[end]              // Choose last element as pivot
i = beg - 1                 // Index of smaller element

for j = beg to end - 1:     // O(n) - scan through array
    if A[j] <= pivot:
        i = i + 1           // Increment index of smaller element
        Swap(A[i], A[j])    // Swap current element with element at i

Swap(A[i + 1], A[end])      // Place pivot in correct position
return i + 1                // Return pivot index
```

**Time Complexity:** $O(n)$ where $n = \text{end} - \text{beg} + 1$

---

#### QuickSort Function

**QuickSort(A, beg, end):**

```pseudocode
if beg < end:
    pivotIndex = Partition(A, beg, end)    // Partition and get pivot position
    QuickSort(A, beg, pivotIndex - 1)      // Recursively sort left subarray
    QuickSort(A, pivotIndex + 1, end)      // Recursively sort right subarray
```

---

### Time Complexity Analysis

#### Best Case: Balanced Partitions

When pivot divides array into two equal halves:

$$
T(n) = 2T(n/2) + \Theta(n)
$$

Using Master Theorem:

$$
T(n) = \Theta(n \log n)
$$

#### Average Case: Random Partitions

$$
T(n) = \Theta(n \log n)
$$

#### Worst Case: Unbalanced Partitions

When array is already sorted or reverse sorted, and we always pick the smallest/largest element as pivot:

$$
T(n) = T(n-1) + \Theta(n)
$$

$$
T(n) = \Theta(n^2)
$$

Example: `[1, 2, 3, 4, 5]` with last element as pivot gives partitions of size 0 and n-1.

---

### Space Complexity

**Space Complexity:** $O(\log n)$ average case (recursion stack)  
**Worst Case Space:** $O(n)$ (when recursion depth is n)

---

### Characteristics

- **Not Stable:** Equal elements may not maintain their relative order
- **In-place:** Requires only $O(\log n)$ additional space for recursion
- **Generally Fast:** Average case $O(n \log n)$ with low constants
- **Worst Case Can Be Avoided:** Using randomized pivot selection or median-of-three

**Optimization:** Use randomized pivot selection to avoid worst case on sorted data

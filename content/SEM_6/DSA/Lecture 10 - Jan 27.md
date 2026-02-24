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
   - Elements **less than or equal to** pivot are on the left
   - Elements **greater than** pivot are on the right
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

____

| **Algorithm**      | **Best Case** | **Average Case** | **Worst Case** | **Space Complexity** |
| ------------------ | ------------- | ---------------- | -------------- | -------------------- |
| **Bubble Sort**    | $O(n)$        | $O(n^2)$         | $O(n^2)$       | $O(1)$               |
| **Insertion Sort** | $O(n)$        | $O(n^2)$         | $O(n^2)$       | $O(1)$               |
| **Selection Sort** | $O(n^2)$      | $O(n^2)$         | $O(n^2)$       | $O(1)$               |
| **Merge Sort**     | $O(n \log n)$ | $O(n \log n)$    | $O(n \log n)$  | $O(n)$               |
| **Quick Sort**     | $O(n \log n)$ | $O(n \log n)$    | $O(n^2)$       | $O(\log n)$          |
# Bubble sort
### Bubble Sort: The Logic

Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This "bubbles" the largest unsorted element to its correct position at the end of the array in each iteration.

#### Pseudo Code

Plaintext

```
procedure bubbleSort(list)
    n = length(list)
    for i from 0 to n - 1:
        swapped = false
        for j from 0 to n - i - 2:
            if list[j] > list[j + 1]:
                swap(list[j], list[j + 1])
                swapped = true
        // If no two elements were swapped by inner loop, then break
        if not swapped:
            break
end procedure
```

---

### Complexity Analysis and Formulations

To understand the time complexity, we look at the number of comparisons made in different scenarios. Let $n$ be the number of elements.

#### 1. Best Case: $O(n)$

The best case occurs when the array is **already sorted**.

- **Formulation:** The outer loop runs once. The inner loop performs $n-1$ comparisons.
    
- **Optimization:** Because of the `swapped` flag, the algorithm detects that no swaps occurred and terminates early.
    
- **Total Comparisons:** $n - 1$
    

#### 2. Worst Case: $O(n^2)$

The worst case occurs when the array is **sorted in reverse order**.

- **Formulation:** For every element, we must perform a full pass.
    
- **Calculation:** The number of comparisons is the sum of the first $n-1$ integers:
    
    $$(n-1) + (n-2) + \dots + 1 = \frac{n(n-1)}{2}$$
    
- As $n$ grows, the $n^2$ term dominates, leading to $O(n^2)$.
    

#### 3. Average Case: $O(n^2)$

The average case occurs when the elements are in **random order**.

- **Formulation:** On average, we will still perform roughly half the maximum possible swaps and a significant portion of the total comparisons.
    
- The complexity remains quadratic because the nested loop structure is still largely traversed.
    

---

### Space Complexity

Bubble Sort is an **in-place** algorithm. It only requires a single additional memory space for the `temp` variable used during swaps.

- **Space Complexity:** $O(1)$
    

___
# Insertion sort

Insertion sort is often compared to the way people sort a hand of playing cards. You pick up one card at a time and "insert" it into its correct position among the cards you are already holding.

## Pseudo Code for Insertion Sort

Plaintext

```
procedure insertionSort(A: list of sortable items)
    n = length(A)
    for i from 1 to n - 1:
        key = A[i]
        j = i - 1
        
        // Move elements of A[0..i-1] that are greater than key
        // to one position ahead of their current position
        while j >= 0 and A[j] > key:
            A[j + 1] = A[j]
            j = j - 1
            
        A[j + 1] = key
end procedure
```

---

## Complexity Formulations

The complexity of Insertion Sort depends heavily on how "sorted" the input array is. Let $n$ be the number of elements in the array.

### 1. Best Case: $O(n)$

The best case occurs when the array is **already sorted**.

- **Logic:** The outer loop runs $n-1$ times. However, the inner `while` loop condition `A[j] > key` is immediately false every time.
    
- **Formulation:** Only $n-1$ comparisons are made, and no shifts occur.
    
- **Result:** $T(n) = c \cdot (n-1)$, which simplifies to $O(n)$.
    

### 2. Worst Case: $O(n^2)$

The worst case occurs when the array is **sorted in reverse order**.

- **Logic:** For every element $i$, the inner loop must compare and shift every single element to its left.
    
- **Formulation:** In the $i$-th iteration, we perform $i$ comparisons. The total number of comparisons is the sum of the first $n-1$ integers:
    
    $$1 + 2 + 3 + \dots + (n-1) = \sum_{i=1}^{n-1} i = \frac{n(n-1)}{2}$$
    
- **Result:** This yields a quadratic growth of $O(n^2)$.
    

### 3. Average Case: $O(n^2)$

The average case occurs when the elements are in a **random order**.

- **Logic:** On average, for each element at index $i$, we will have to check and move half of the elements in the sorted sub-array (roughly $i/2$ comparisons).
    
- **Formulation:**
    
    $$\sum_{i=1}^{n-1} \frac{i}{2} = \frac{1}{2} \cdot \frac{n(n-1)}{2} = \frac{n(n-1)}{4}$$
    
- **Result:** Since we ignore constants in Big O notation, this remains $O(n^2)$.
    

---

### Space Complexity

Insertion sort is an **in-place** algorithm. It requires a constant amount of additional memory for the `key` and the loop counters.

- **Space Complexity:** $O(1)$
    

**Note:** Insertion sort is highly efficient for small datasets or for arrays that are already "nearly sorted." This is why many high-performance hybrid algorithms (like Timsort) use Insertion Sort as a base case.

___
# Selection sort
Selection Sort is perhaps the most intuitive of the "simple" sorting algorithms. Its core strategy is to find the minimum element from the unsorted part of the list and put it at the beginning.

Unlike Insertion Sort, which shifts elements one by one, Selection Sort finds the absolute smallest element in each pass and makes a **single swap**.

### Pseudo Code for Selection Sort

Plaintext

```
procedure selectionSort(A: list of sortable items)
    n = length(A)
    for i from 0 to n - 2:
        // Assume the current position is the minimum
        minIndex = i
        
        // Check the rest of the array to find the actual minimum
        for j from i + 1 to n - 1:
            if A[j] < A[minIndex]:
                minIndex = j
        
        // Swap the found minimum element with the first element of the unsorted part
        if minIndex != i:
            swap(A[i], A[minIndex])
end procedure
```

---

### Complexity Analysis and Formulations

The defining characteristic of Selection Sort is its **consistency**. Regardless of how the data is initially arranged, it performs the same number of comparisons.

#### 1. Best, Average, and Worst Case: $O(n^2)$

Selection Sort does not have an "early exit" mechanism. Even if the array is already sorted, the algorithm must still scan the remaining unsorted portion to _verify_ that no smaller element exists.

- **Logic:** The outer loop runs $n-1$ times. The inner loop runs $n-1, n-2, \dots, 1$ times as the sorted portion of the array grows.
    
- **Mathematical Formulation:** The total number of comparisons ($C$) is the sum of the first $n-1$ integers:
    
    $$C(n) = (n-1) + (n-2) + \dots + 1 = \sum_{i=1}^{n-1} i = \frac{n(n-1)}{2}$$
    
- **Result:** Expanding this gives $\frac{1}{2}n^2 - \frac{1}{2}n$. In Big O notation, we drop the lower-order terms and constants, resulting in $O(n^2)$ for **all** cases.
    

---

### Key Comparisons

|**Feature**|**Selection Sort**|**Insertion Sort**|
|---|---|---|
|**Best Case**|$O(n^2)$|$O(n)$|
|**Swaps**|$O(n)$ (at most $n-1$ swaps)|$O(n^2)$|
|**Stability**|Generally Unstable|Stable|

**Why use it?** While it's generally slower than Insertion Sort due to the $O(n^2)$ best case, Selection Sort is superior when **memory writes** are significantly more expensive than reads. Since it performs a maximum of $n-1$ swaps, it minimizes the number of times data is actually moved in memory.

---

### Space Complexity

Selection Sort is an **in-place** algorithm. It only needs a few variables (`minIndex`, `i`, `j`) to keep track of indices.

- **Space Complexity:** $O(1)$
    

___
# Merge sort

### Merge Sort: The CLRS Pseudo-code

CLRS typically uses 1-based indexing and a specific `MERGE` procedure that uses "sentinels" ($\infty$) to simplify the logic of empty arrays.

#### The `MERGE-SORT(A, p, r)` Procedure

This is the recursive "Divide" and "Conquer" step.

Plaintext

```
MERGE-SORT(A, p, r)
    if p < r
        q = floor((p + r) / 2)    // Divide
        MERGE-SORT(A, p, q)       // Conquer (Left)
        MERGE-SORT(A, q + 1, r)   // Conquer (Right)
        MERGE(A, p, q, r)         // Combine
```

#### The `MERGE(A, p, q, r)` Procedure

This is the "Combine" step where the heavy lifting happens.

Plaintext

```
MERGE(A, p, q, r)
    n1 = q - p + 1
    n2 = r - q
    let L[1..n1 + 1] and R[1..n2 + 1] be new arrays
    for i = 1 to n1
        L[i] = A[p + i - 1]
    for j = 1 to n2
        R[j] = A[q + j]
    L[n1 + 1] = ∞    // Sentinel value
    R[n2 + 1] = ∞    // Sentinel value
    i = 1
    j = 1
    for k = p to r
        if L[i] <= R[j]
            A[k] = L[i]
            i = i + 1
        else
            A[k] = R[j]
            j = j + 1
```

---

### Step-by-Step Complexity Formulation

CLRS uses the **Recurrence Method** to define the complexity. We assume for simplicity that $n$ is a power of 2 so that every divide step results in exactly $n/2$.

#### 1. The Recurrence Equation

The total time $T(n)$ is the sum of:

- **Divide:** Computing the middle $q$ takes $D(n) = \Theta(1)$.
    
- **Conquer:** Solving two subproblems of size $n/2$ takes $2T(n/2)$.
    
- **Combine:** The `MERGE` procedure on $n$ elements takes $C(n) = \Theta(n)$.
    

This gives us the classic recurrence:

$$T(n) = 2T(n/2) + \Theta(n)$$

#### 2. Solving via the Recursion Tree

To visualize why this is $O(n \log n)$, CLRS breaks it down level by level:

1. **Level 0:** One node of cost $cn$.
    
2. **Level 1:** Two nodes of cost $cn/2$, totaling $cn$.
    
3. **Level 2:** Four nodes of cost $cn/4$, totaling $cn$.
    
4. **Bottom Level:** There are $n$ nodes, each costing a constant amount ($c$).
    

The height of the tree is $\log_2 n$. Since the work at each of the $\log_2 n$ levels is $cn$, the total cost is:

$$cn \cdot \log_2 n = \Theta(n \log n)$$

#### 3. Best, Worst, and Average Cases

In Merge Sort, the "Divide" and "Conquer" steps are identical regardless of the initial order of elements.

- **Best Case:** $\Theta(n \log n)$
    
- **Average Case:** $\Theta(n \log n)$
    
- **Worst Case:** $\Theta(n \log n)$
    

> **Note from CLRS:** While Merge Sort is asymptotically optimal for comparisons, the $\Theta(n)$ space complexity and the constant factors involved in copying to auxiliary arrays often make **Quick Sort** faster in practice for many systems.

---

### Space Complexity

As seen in the `MERGE` pseudo-code, new arrays `L` and `R` are created. The total auxiliary space required is:

- **Space Complexity:** $\Theta(n)$
    

___
# Quick sort
Quick Sort is often the preferred sorting algorithm in practice because its inner loop is highly optimized, and it sorts "in-place." Following the **CLRS** (Cormen, Leiserson, Rivest, and Stein) approach, Quick Sort is defined by the **Partition** step.

### Quick Sort: The CLRS Pseudo-code

Quick Sort uses a "divide-and-conquer" strategy, but unlike Merge Sort (which does the heavy lifting while merging), Quick Sort does the work during the partitioning phase.

#### The `QUICKSORT(A, p, r)` Procedure

Plaintext

```
QUICKSORT(A, p, r)
    if p < r
        // Partition the array around a pivot
        q = PARTITION(A, p, r)
        // Recursively sort the two halves
        QUICKSORT(A, p, q - 1)
        QUICKSORT(A, q + 1, r)
```

#### The `PARTITION(A, p, r)` Procedure

This version uses the last element as the **pivot**. It rearranges the array so elements less than the pivot are on the left, and elements greater are on the right.

Plaintext

```
PARTITION(A, p, r)
    x = A[r]             // The pivot
    i = p - 1            // Index of the smaller element
    for j = p to r - 1
        if A[j] <= x
            i = i + 1
            exchange A[i] with A[j]
    exchange A[i + 1] with A[r]
    return i + 1
```

---

### Step-by-Step Complexity Formulation

The complexity of Quick Sort depends entirely on how "balanced" the partitions are.

#### 1. Worst Case: $\Theta(n^2)$

The worst case occurs when the partitioning produces one subproblem with $n-1$ elements and one with $0$ elements at every step. This happens if the array is **already sorted** or **reverse sorted** (when using the last element as the pivot).

- **Recurrence:** $T(n) = T(n-1) + T(0) + \Theta(n)$
    
- **Formulation:**
    
    $$T(n) = T(n-1) + \Theta(n) = \sum_{i=1}^{n} i = \frac{n(n+1)}{2} = \Theta(n^2)$$
    

#### 2. Best Case: $\Theta(n \log n)$

The best case occurs when `PARTITION` produces two subproblems of nearly equal size ($n/2$).

- **Recurrence:** $T(n) = 2T(n/2) + \Theta(n)$
    
- **Formulation:** Using the Master Theorem (Case 2), this results in:
    
    $$T(n) = \Theta(n \log n)$$
    

#### 3. Average Case: $\Theta(n \log n)$

CLRS demonstrates that even a "reasonably" unbalanced split (like a 9-to-1 split) still results in $O(n \log n)$ depth. Since a random permutation of numbers is likely to produce more balanced splits than not, the average performance is very high.

---

### Space Complexity

Quick Sort is considered an **in-place** sort because it doesn't use auxiliary arrays like Merge Sort. However, it does use memory for the recursive function calls.

- **Average Space:** $O(\log n)$ for the stack.
    
- **Worst-case Space:** $O(n)$ if the tree is completely unbalanced.
    

---

### Quick Comparison: Merge Sort vs. Quick Sort

|**Feature**|**Merge Sort**|**Quick Sort**|
|---|---|---|
|**Worst Case**|$\Theta(n \log n)$|$\Theta(n^2)$|
|**Auxiliary Space**|$\Theta(n)$|$\Theta(\log n)$|
|**Stability**|Stable|Unstable|
|**In-Place**|No|Yes|

> **Pro-Tip from CLRS:** To avoid the $O(n^2)$ worst case in real-world applications, developers often use **Randomized Quick Sort**, where the pivot is chosen at random rather than always picking the last element.

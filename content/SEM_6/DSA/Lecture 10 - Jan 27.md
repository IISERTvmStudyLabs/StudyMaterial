## Divide and Conquer

**Three Steps:**
1. Divide into subproblem
2. Solve each subproblem
3. Combine soln of each

## Quick Sort

**Example:** [2, 5, 8, 3, 9, 4, 1, 7, 10, 6]

*Find element* - Using this pivot array into 2 subarrays

**Let pivot = 7**

$$A_1 = [2, 5, 3, 4, 1, 6, 7] \quad A_2 = [8, 9, 4, 10]$$

**Pivot = 3**, Last mid-loc

$$P = 1$$

### Iteration 1

```
      2   5   8   3   1   4   1   7   10  6
```

$$X = 6 > 3 \rightarrow \text{Pivot}$$

$$\text{for } i = 1 \text{ to } 1 - 1$$

if $A[i] \leq X$:
- $i = i+1$
- Swap $(A[i], A[k])$

```
2  5  3  4  1  1  7  10  6
```

*Sort in 2 &*

### Detailed Steps

**i = 0:**
- $p = 2, i = 0$ → $3$, $4$, $1$, $6$, $9$, $7$, $10$, $8$
- $2 < 6$ → $i = i+1$
- Swap $(A[2], A[0])$

**Step 1:** $2, 5, 3, 9, 9, 4, 1, 7, 10, 6$

$3 < 6$ → $i = i+1$ → Sec $\rightarrow$ $i = i+1$ Swap $\rightarrow$

$$9 > 6$$

**Step 2:** $2, 5, 3, 4, 9, 9, 1, 7, 10, 6$

$9 > 6$ → Swap $4 \rightarrow 8$

$$2, 5, 3, 4, 9, 9, 1, 7, 10, 6$$

**Step 3:** $1 < 6$ → $i = i+1$ → Swap $9 \& 1$

$$2, 5, 3, 4, 1, 8, 9, 7, 10, 6$$

**Step 4:** $7 > 6$ → $i = i+1$ → Swap $1 \rightarrow 2$

### Final Partition

$$2 \quad 5 \quad 3 \quad 4 \quad 1 \quad \boxed{6} \quad 9 \quad 7 \quad 10 \quad 8$$

$$\underbrace{\text{Less than } 1}_\text{} \quad \underbrace{\text{More than } 1}_\text{}$$

### Partition Algorithm

**Partition (A, beg, r):**

```
X = A[r]    i = beg
for j = b to r-1:         → O(n)
    if (A[j] < X):
        i = i+1

Quick_sort (A(beg, i(A),r(A))
```

- $C_{\text{sort}}(A[1], i-1)$ 
- $X = C_{\text{kpim}}$ tem → Partition

### Quicksort Function

**Quicksort (A, beg, r):**

```
Quicksort(A, beg+1)
```

### Time Complexity

$$O(n \log n)$$

$$T(n) = 2T(n/2) + f(n)$$

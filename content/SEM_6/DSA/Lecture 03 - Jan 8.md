## Fibonacci Time Complexity (Continued)

**Recurrence Relation:**
$$
f(n) = f(n-1) + f(n-2)
$$

**Time Complexity:**
$$
T(n) = T(n-1) + T(n-2) + c
$$

$$
T(n) = a^n
$$

where:
$$
a^2 = a^1 + a^0
$$
$$
a^2 - a - 1 = 0
$$
$$
a = \frac{1 \pm \sqrt{5}}{2}
$$

Therefore:
$$
T(n) = \left(\frac{1+\sqrt{5}}{2}\right)^n \text{ or } \left(\frac{1-\sqrt{5}}{2}\right)^n = O(\phi^n)
$$

where $\phi \approx 1.618$ (golden ratio)

*We take the larger value for upper bound*

---
## Array Search Problems

**Example Array:** $[1, 100, 20, 35, 45] = A[5]$

**Task:** Check if $60$ is present

### Linear Search Algorithm

**Given:** Array $A$ with $n$ elements, search for value $X$

```pseudocode
for i = 0 to n-1:
    if A[i] == X:
        return i  // Found at index i
return -1  // Not found
```

**Time Complexity:** $T(n) = O(n)$

---
## Binary Search

**Example:** If Array sorted: $[1, 20, 35, 45, 100]$

**Finding 20:**
- Check mid of array $\rightarrow 35$
- Since $20 < 35$: Check left half

### Binary Search Algorithm

```pseudocode
low = 0
high = n - 1
while (low ≤ high):
    mid = (low + high) / 2
    if A[mid] == X:
        return mid  // Found
    else if A[mid] > X:
        high = mid - 1  // Search left half
    else:
        low = mid + 1   // Search right half
return -1  // Not found
```

**Time Complexity Analysis:**
$$
T(n) = c + T(n/2)
$$

where $c$ is constant time for comparison and mid calculation.

**Solving the Recurrence:**

Base case: $T(1) = 1$

$$
T(n) = c + T(n/2)
$$
$$
T(n) = c + c + T(n/4)
$$
$$
T(n) = c + c + c + ... + T(n/2^i)
$$

When $n/2^i = 1$:
$$
n = 2^i
$$
$$
\log_2 n = i
$$

Therefore:
$$
T(n) = c \cdot i + 1 = c \log n + 1
$$

**Final Complexity:**
$$
\boxed{T(n) = O(\log n)}
$$

> **Note:** Efficient but array must be sorted!

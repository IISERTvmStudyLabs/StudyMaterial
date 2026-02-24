## Algorithm Properties

1. Input $\geq 0$ (zero or more)
2. Output $\geq 1$ (at least one)
3. Correct
4. Language Independent
5. Unambiguous
6. Efficiency
   - **Time Complexity:** Amount of time taken
   - **Space Complexity:** Amount of memory used
---
## Time Complexity Analysis

### Example 1: Sum of Two Numbers

```
(1) Read a, b          → Assignment Statement     (2 time units)
(2) S = a + b          → Constant time 'c'         (2 time units)
                         Logic Operation
(3) Print S            → Print operation           (1 time unit)
```

**Total Time:** $$T(n) = 2 + 2 + 1 = 5 \rightarrow O(1)$$

### Example 2: Sum of n Numbers

```
S = 0                  → 1 time unit
for i = 0 to n         → 2n time units
  S = S + A[i]         → 2n time units
```

**Analysis:**
- $n$ numbers input operations
- Loop executes $n$ times
- Each iteration: constant time operations

$$T(n) = O(n)$$

### Example 3: Matrix Addition - 2D Array

```
for i = 0 to n              → Outer loop runs n times
for j = 0 to m              → Inner loop runs m times
  C[i,j] = A[i,j] + B[i,j]  → Executed n × m times
```

**Time Complexity:** $$T(n,m) = O(n \times m)$$

**Note:** For square matrices where $n = m$, complexity is $O(n^2)$

---
## Fibonacci Algorithm

**Iterative Algorithm:** Time Complexity $O(n)$

```
Fib(n)
  f1 = 0
  f2 = 1
  
  for i = 2 to n
    temp = f1 + f2
    f1 = f2
    f2 = temp
  
  return f2
```

**Recursive Definition:**

$$
\text{Fib}(n) = 
\begin{cases} 
0 & \text{if } n = 0 \\ 
1 & \text{if } n = 1 \\ 
\text{Fib}(n-1) + \text{Fib}(n-2) & \text{otherwise}
\end{cases}
$$

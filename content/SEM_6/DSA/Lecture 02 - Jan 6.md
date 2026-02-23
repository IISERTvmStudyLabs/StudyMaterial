## Algorithm Properties

1. Input $2O$
2. Output $2 - 1$
3. Correct
4. Language Independent
5. Unambiguous
6. Efficiency
   - **Time Complexity:** Amount of time taken
   - **Space Complexity:** Amount of memory used

## Time Complexity Analysis

### Example 1: Sum of Two Numbers

```
(1) test a, b          → Assignment Statement     (2 time units)
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
- Matrix operations: $n + n \rightarrow n$ (input addition)

$$T(n) = O(n)$$

### Example 3: Matrix Addition - 2D Array

```
for i = 0 to n              → 2n + 1
for k = 0 to m              → 2m + 1
  C[i,j] = A[i,j] + B[i,j]  → Executed n × m times
```

**Time Complexity:** $$T(n) = O(n^2)$$

**Note:** Complexity depends on matrix dimensions $n, m$, and $n + m$

### Recurrence Relations

$$O(n) = \begin{cases} O(n) & \text{for } i = 0 \text{ to } nm \\ O(n) & \text{for } k = 0 \text{ to } m \\ C[i,j] = C[i-1,j] + A[i,j] + B[i,j] & \rightarrow 2n \end{cases}$$

$$T(n) = O(n)$$

## Fibonacci Algorithm

**Algorithm:** For $n$ given $\rightarrow O(n)$

```
Fib(n)
  cf = 0
  f2 = 1
  
  for f = 2 to n
    temp = cf + f2
    cf = f2
    f2 = temp
```

**Recursion Definition:**

$$
\text{Fib}(n) = 
\begin{cases} 
1 & \text{if } n \& 1 \text{ (return 1)} \\ 
0 & \text{if } n = 0 \text{ (return 0)} \\ 
\text{Fib}(n) = \text{Fib}(n) + \text{Fib}(n-2) & \text{else} 
\end{cases}
$$

where $a^2 = q + 1$

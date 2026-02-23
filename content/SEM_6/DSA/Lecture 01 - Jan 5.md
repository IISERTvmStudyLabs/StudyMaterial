## Basic Algorithms

### Sum of Two Numbers

**Pseudo Code:**
1. Read $a, b$
2. $S = a + b$
3. Print $S$

**Implementation (C):**
```c
#include <stdio.h>

int main() {
  int a, b, sum;
  
  printf("Enter two numbers: ");
  scanf("%d %d", &a, &b);
  
  sum = a + b;
  
  printf("Sum = %d\n", sum);
  
  return 0;
}
```

### Sum of m Numbers

**Algorithm:**
1. Read $m$ numbers
2. Initialize $S = 0$
3. For $i = 0$ to $m - 1$:
   - $S = S + A[i]$
4. Print $S$

### Matrix Sum - 2D Array

**Algorithm:**
1. Read $m, n$ (dimensions of matrix)
2. Initialize $S = 0$
3. For $i = 0$ to $n - 1$:
   - For $j = 0$ to $m - 1$:
     - Read $A[i][j]$
     - $S = S + A[i][j]$
4. Print $S$

### Recursion: Factorial

**Recurrence Relation:**
$$\text{Fact}(n) = \begin{cases} 1 & \text{if } n = 0 \\ n \times \text{Fact}(n-1) & \text{else} \end{cases}$$

### Algorithm Properties

- **Input:** Zero or more inputs
- **Output:** At least 1 output
- **Efficiency:** Minimal time and space complexity

### Topics to Cover

- Prime Checkers
- Fibonacci Number

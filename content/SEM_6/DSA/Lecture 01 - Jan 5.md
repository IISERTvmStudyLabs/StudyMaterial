## Pros Algorithm

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
For $n \times m$ matrix from $i = 1$ to $n$:
1. Read $m, n, A[i][j]$
2. Calculate sum

**Space Complexity:** $$C_6 = \text{for}(i = 0 \text{ to } m-1) = \{i = 1 \text{ to } m\}$$

By $n = 1$ to $m$

### Recursion: Factorial

**Recurrence Relation:**
$$\text{Fact}(n) = \begin{cases} 1 & \text{if } n = 0 \\ n \times \text{Fact}(n-1) & \text{else} \end{cases}$$

### Algorithm Properties

- **Input:** Zero or max input
- **Output:** All last 1 output
- **Efficiency:** Less time and space complexity for computer

### Topics to Cover

- Prime Checkers
- Fibonacci Number

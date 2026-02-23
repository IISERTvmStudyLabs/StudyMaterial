## Introduction to Algorithms

**ADT (Abstract Data Type):**
- Specifies what data values it can hold
- Specifies what operations can be performed on it

**Data Structure:** How we organize data in memory

**Array Operations:** Inserting, deleting, searching, traversing

### Basic Operations

**Unified Computational Model:** Each basic operation takes constant time (1 unit)

### Linear Search

Given an array of $n$ elements, check if $x$ is present by examining each element.

**Best Case:** $O(1)$ (element found at first position)

**Worst Case:** $O(n)$ (element at end or not present)

**Average Case:** $O(n)$

---
## Asymptotic Analysis of Algorithms

Asymptotic analysis describes how an algorithm behaves as input size increases.

---
## Time Complexity Notations

$$O \qquad \Omega \qquad \Theta$$
$$(\text{Upper Bound}) \quad (\text{Lower Bound}) \quad (\text{Tight Bound})$$

**Example:**
$$T(n) = 100n + 5$$

## Big-O Notation

**Definition:** $f(n) = O(g(n))$ if there exist positive constants $C$ and $n_0$ such that:

$$f(n) \leq C \cdot g(n) \quad \text{for all } n \geq n_0$$

**Example:**

Given $T(n) = 100n + 5$, we want to show $T(n) = O(n)$

$$100n + 5 \leq C \cdot n$$

Choosing $C = 101$ and $n_0 = 5$:

$$100n + 5 \leq 101n \quad \text{for all } n \geq 5$$

Therefore, $100n + 5 = O(n)$

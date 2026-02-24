## Asymptotic Notations

### Big O Notation - Upper Bound

$$f(n) = O(g(n))$$ if $\exists$ constants $C > 0$ & $n_0 > 0$

such that $f(n) \leq C \cdot g(n)$ $\forall$ $n \geq n_0$

### Big Ω - Lower Bound

$$f(n) = \Omega(g(n))$$ if $\exists$ constants $C > 0$, $n_0 > 0$

such that $f(n) \geq C \cdot g(n)$ $\forall$ $n \geq n_0$

### Big Θ - Tight Bound

$$f(n) = \Theta(g(n))$$ if $\exists$ constants $C_1 > 0$, $C_2 > 0$ & $n_0 > 0$

such that $$C_1 \cdot g(n) \leq f(n) \leq C_2 \cdot g(n)$$ $\forall$ $n \geq n_0$

---
## Examples

**Example 1: Proving Big O**

Given: $$f(n) = 100n^2 + 2n + 5$$

Show that $f(n) = O(n^2)$:

$$100n^2 + 2n + 5 \leq 100n^2 + 2n^2 + 5n^2 = 107n^2$$

for all $n \geq 1$

Therefore, $f(n) = O(n^2)$ with $C = 107$ and $n_0 = 1$

**Example 1b: Sum Formula**

Given: $$f(n) = \frac{n(n+1)}{2}$$

Show that $f(n) = \Omega(n^2)$:

$$\frac{n(n+1)}{2} = \frac{n^2 + n}{2} \geq \frac{n^2}{2} \quad \text{for all } n \geq 1$$

Therefore, $f(n) = \Omega(n^2)$ with $C = \frac{1}{2}$ and $n_0 = 1$

Since $\frac{n(n+1)}{2} \leq n^2$ for $n \geq 1$, we also have $f(n) = O(n^2)$

Thus, $f(n) = \Theta(n^2)$

---

**Example 2: Recurrence Relation**

Given: $$T(n) = T(n/2) + 1, \quad T(1) = 1$$

Solving by substitution:

$$T(n) = T(n/2) + 1$$
$$= T(n/4) + 1 + 1 = T(n/4) + 2$$
$$= T(n/8) + 1 + 1 + 1 = T(n/8) + 3$$

After $i$ iterations:
$$T(n) = T(n/2^i) + i$$

When $n/2^i = 1$, we have $n = 2^i$, so $i = \log_2 n$

Substituting:
$$T(n) = T(1) + \log n = 1 + \log n$$

Therefore: $$T(n) = O(\log n)$$

---

**Example 3: Additional Recurrence Relations**

Given: $$f(n) = 6\sqrt{n}$$

This is $O(n)$ since $\sqrt{n} < n$ for $n > 1$

**Recurrence 1:**
$$T(n) = 9 \cdot T(n/3) + n$$

By Master Theorem: $T(n) = O(n^2)$

**Recurrence 2:**
$$T(n) = 2T(n/2) + n$$

By Master Theorem: $T(n) = O(n \log n)$

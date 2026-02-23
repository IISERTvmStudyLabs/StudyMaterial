## Master Theorem

**Given:** Let $a \geq 1$, $b > 1$

$$T(n) = a \cdot T(n/b) + f(n)$$

### Case 1

If $f(n) = O(n^{\log_b a - \varepsilon})$ for $\varepsilon > 0$

$$T(n) = \Theta(n^{\log_b a})$$

### Case 2

If $f(n) = O(n^{\log_b a})$, then:

$$T(n) = \Theta(n^{\log_b a} \log n)$$

### Case 3

If $f(n) = O(n^{\log_b a + \varepsilon})$ and $a \cdot f(n/b) \leq c \cdot f(n)$

$$T(n) = \Theta(f(n))$$

---
## Examples

### Example 3

$$T(n) = 2T(n/2) + n^2$$

$$\log_2 2^{\mu \alpha} = n \quad \rightarrow \quad 2^1$$

$$m^{\log_b a}$$

$$a \cdot f(n/b) \leq c \cdot f(n)$$

$$2 \cdot 2^{n/2} = 2^{n/2+1} \leq c \cdot 2^n$$

where $n \geq 2$, $m = 2$, $C > 0$

$$T(n) = \Theta(2^n)$$

### Example 4

$$T(n) = T(n/2) + 1$$

---
## Substitution Method
**Solve using Substitution:**
$$T(n) = 2 \cdot T(n/2) + n - 1$$

$$T(n) = 2 \cdot T(\sqrt{n}) + \log n$$

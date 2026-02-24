## Master Theorem

**Given:** Let $a \geq 1$, $b > 1$

$$T(n) = a \cdot T(n/b) + f(n)$$

### Case 1

If $f(n) = O(n^{\log_b a - \varepsilon})$ for $\varepsilon > 0$

$$T(n) = \Theta(n^{\log_b a})$$

### Case 2

If $f(n) = \Theta(n^{\log_b a})$, then:

$$T(n) = \Theta(n^{\log_b a} \log n)$$

### Case 3

If $f(n) = \Omega(n^{\log_b a + \varepsilon})$ for $\varepsilon > 0$, and $a \cdot f(n/b) \leq c \cdot f(n)$ for some $c < 1$ and sufficiently large $n$ (regularity condition), then:

$$T(n) = \Theta(f(n))$$

---
## Examples

### Example 1

$$T(n) = 2T(n/2) + n^2$$

**Solution:**
- $a = 2$, $b = 2$, $f(n) = n^2$
- $\log_b a = \log_2 2 = 1$
- $n^{\log_b a} = n^1 = n$

Compare $f(n) = n^2$ with $n^{\log_b a} = n$:
- $n^2 = \Omega(n^{1+\varepsilon})$ for $\varepsilon = 1$

Check regularity condition:
$$a \cdot f(n/b) = 2 \cdot (n/2)^2 = 2 \cdot \frac{n^2}{4} = \frac{n^2}{2} \leq c \cdot n^2$$

for $c = 1/2 < 1$ ✓

By **Case 3**: $$T(n) = \Theta(n^2)$$

### Example 2

$$T(n) = T(n/2) + 1$$

**Solution:**
- $a = 1$, $b = 2$, $f(n) = 1 = \Theta(1)$
- $\log_b a = \log_2 1 = 0$
- $n^{\log_b a} = n^0 = 1$

Since $f(n) = \Theta(n^{\log_b a}) = \Theta(1)$

By **Case 2**: $$T(n) = \Theta(n^0 \log n) = \Theta(\log n)$$

---
## Substitution Method

**Example 1:** Solve using Substitution:
$$T(n) = 2 \cdot T(n/2) + n - 1$$

**Solution:**

Guess: $T(n) = O(n \log n)$

Prove by induction that $T(n) \leq c \cdot n \log n$ for some $c > 0$:

$$T(n) = 2T(n/2) + n - 1$$
$$\leq 2 \cdot c \cdot (n/2) \log(n/2) + n - 1$$
$$= c \cdot n (\log n - \log 2) + n - 1$$
$$= c \cdot n \log n - c \cdot n + n - 1$$
$$\leq c \cdot n \log n$$

if $c \geq 1$ and $n$ is sufficiently large.

Therefore, $T(n) = O(n \log n)$

**Example 2:** Solve using Substitution:
$$T(n) = 2 \cdot T(\sqrt{n}) + \log n$$

**Solution:**

Let $m = \log n$, so $n = 2^m$:

$$T(2^m) = 2 \cdot T(2^{m/2}) + m$$

Let $S(m) = T(2^m)$:

$$S(m) = 2 \cdot S(m/2) + m$$

By Master Theorem (Case 2): $S(m) = \Theta(m \log m)$

Substituting back: $T(n) = T(2^m) = S(m) = \Theta(m \log m) = \Theta(\log n \log \log n)$

Therefore, $T(n) = \Theta(\log n \log \log n)$

# 28-1

**NOTE**

$f: [a, b] \to \mathbb{R}$, $P = \{a = x_0 < x_1 < \dots < x_n = b\}$

$$U(P, f) = \sum_{j=1}^n M_j (x_j - x_{j-1}), M_j = \sup_{x \in [x_{j-1}, x_j]} f(x)$$

$$L(P, f) = \sum_{j=1}^n m_j (x_j - x_{j-1})$$

$$U(P, f) = \sum_{j=1}^n M_j \int_a^b \chi_{[x_{j-1}, x_j]} = \int_a^b \left( \sum_{j=1}^n M_j \chi_{[x_{j-1}, x_j]} \right)$$

- $$\int_a^b \sum_{j=1}^n (M_j^{(k)} - m_j^{(k)}) \chi_{[x_{j-1}, x_j]} = U(P_k, f) - L(P_k, f) \to 0 \text{ as } \|P\| \to 0$$
    

---

*) $(\Omega, \mathcal{F})$ is a measurable space.

## Proposition

Suppose $f, g$ are $\Omega \to \mathbb{R}$ all measurable functions. Then

i) $f + g$

ii) $\alpha f, \alpha \in \mathbb{R}$

iii) $f^2$

iv) $fg$

v) $f^+(x) = \max \{f(x), 0\}$, $f^-(x) = -\min \{f(x), 0\}$

$$|f| = f^+ + f^-$$

$$f = f^+ - f^-$$
**NOTE**

i), ii) $\Rightarrow$ vector space

---

ii) $(\alpha f)^{-1}((-\infty, x)) = f^{-1}((-\infty, \frac{x}{\alpha}))$ if $\alpha > 0$

$$\Rightarrow \alpha f(\omega) < x$$

$$\Rightarrow f(\omega) < x/\alpha \text{ if } \alpha > 0$$

$$\Rightarrow \text{measurable}$$

i) $(f + g)^{-1}((-\infty, x))$

$$\Rightarrow (f + g)(\omega) < x$$

$$\Rightarrow f(\omega) + g(\omega) < x$$

$$\Rightarrow f(\omega) < x - g(\omega)$$

Choose $r \in \mathbb{Q}$ such that $f(\omega) < r < x - g(\omega)$

$$\Rightarrow \omega \in f^{-1}((-\infty, r)) \cap g^{-1}((-\infty, x - r))$$

$$\Rightarrow (f + g)^{-1}((-\infty, x)) = \bigcup_{r \in \mathbb{Q}} f^{-1}((-\infty, r)) \cap g^{-1}((-\infty, x - r))$$

iii) $\omega \in f^2((-\infty, x)), x > 0$

$$\Rightarrow f(\omega)^2 < x$$

$$\Rightarrow -\sqrt{x} < f(\omega) < \sqrt{x}$$

$$\Rightarrow \omega \in f^{-1}((-\infty, \sqrt{x}) \setminus (-\infty, -\sqrt{x}))$$

---

**NOTE**

$b_k = \sup_{n \ge k} a_n$

$\{b_k\}$ is a decreasing sequence.

$$\limsup_{n \to \infty} a_n = \inf b_k$$
# Theorem

Suppose $\{f_n\}$ is a sequence of measurable functions, $f_n : \Omega \to \mathbb{R}$. Then following are measurable:

i) $\sup_n f_n, \inf_n f_n$

ii) $\limsup_{n \to \infty} f_n, \liminf_{n \to \infty} f_n$

iii) If $f_n \to f$ pointwise, then $f$ is also measurable.

### Proof

- $\{\omega \mid \sup f_n(\omega) > x\} = \bigcup_{n=1}^\infty \{\omega \mid f_n(\omega) > x\}$
    
- $\limsup_{n \to \infty} f_n(\omega) = \inf_n \underbrace{\sup_{k \ge n} f_k(\omega)}_{g_n}$
    
- $g_n$ is measurable.
    

---

# Definition (Simple Function)

$f : \Omega \to \mathbb{R}$ is called a simple function if there exists a finite disjoint collection of sets in $\mathcal{F}$ $\{E_i : i = 1, \dots, n\}$ and some real numbers $\{c_i : i = 1, \dots, n\}$,

$$f = \sum_{i=1}^n c_i \chi_{E_i}$$

---

**NOTE**

i) Suppose $E_0 = \Omega \setminus \bigcup_{i=1}^n E_i$, $c_0 = 0$. Then

$$f = \sum_{j=0}^n c_j \chi_{E_j}$$
ii) $f$ is measurable

## Proposition

$f$ is simple if and only if $f$ is measurable and the range of $f$ is finite.

$$\text{Range}(f) = \{c_1, \dots, c_n\} \subset \mathbb{R}$$

Set $E_i = f^{-1}(\{c_i\})$

$\{c_i\}$ is measurable in $\mathbb{R}$.

$$\Rightarrow f = \sum_{i=1}^n c_i \chi_{E_i}$$

**NOTE**

Step functions are simple functions.

---

# Definition

If $f : \Omega \to [0, \infty]$ is a simple function with representation $\sum_{i=1}^n c_i \chi_{E_i}$, then we define the integral of $f$ with respect to $\mu$ as

Let $(\Omega, \mathcal{F}, \mu)$ be a measure space

$$\int_\Omega f \, d\mu = \sum_{i=1}^n c_i \mu(E_i)$$

**NOTE**

If not $[0, \infty]$, then let $c_1 = 1, c_2 = -1$, and $\mu(E_1) = \infty, \mu(E_2) = \infty$, then $\infty - \infty$ will happen so $[0, \infty]$.
____
___

---
course: Functional Analysis
Lecture: "14"
date: 2026-08-31
---
# Weak and Weak-* Convergence
A bounded sequence in a finite-dimensional NLS has a convergent subsequence: for $(x_n)_{n \in \mathbb{N}} \subset X$ (finite-dimensional) bounded,
$$\sup_{n \in \mathbb{N}} \|x_n\| \leq C < \infty$$

**Does this hold in infinite dimensions?**
Consider $X = \ell^2$ (square-summable sequences) and the standard unit vectors $e_n = (0, \dots, 1, \dots)$:
* $\|e_n\|_2 = 1 \implies (e_n)$ is bounded in $\ell^2$.
* $\|e_n - e_m\|_2 = \sqrt{2}$ for $n \neq m \implies (e_n)$ cannot have a convergent subsequence.

* **Strong (norm) convergence:** $x_n \rightarrow x$ in a NLS $X$ means $\|x_n - x\| \rightarrow 0$ as $n \rightarrow \infty$ ($x_n$ gets closer to $x$ in norm).
* Instead, consider $(\phi(x_n))_{n \in \mathbb{N}}$ for every $\phi \in X^*$. Does $\phi(x_n) \rightarrow \phi(x)$ for all $\phi \in X^*$?
  $$
  \begin{aligned}
  |\phi(x_n) - \phi(x)| &= |\phi(x_n - x)| \\
  &\leq \|\phi\|_{X^*} \|x_n - x\|_X \rightarrow 0 \quad \text{as } n \rightarrow \infty
  \end{aligned}
  $$
  (Strong convergence implies $\phi(x_n) \rightarrow \phi(x)$ for all $\phi \in X^*$, i.e., it is weaker than norm convergence).

**Example**
Consider $f_n(x) = \sin(nx)$ for $x \in (0, 2\pi)$:
* Doesn't converge pointwise.
* In $X = L^2(0, 2\pi)$, $\|f_n\|_2 = \sqrt{\pi}$ (so it cannot converge in $L^2$ norm).

![[sin_nx.png|414]]
Consider $\int_0^{2\pi} f_n(x) g(x) \, dx$ for all $g \in L^2(0, 2\pi)$:

1. **Indicator function:** Take $g = s = \chi_{[a, b]}$ with $[a, b] \subset [0, 2\pi]$:
   $$\int_0^{2\pi} f_n(x) s(x) \, dx = \int_a^b \sin(nx) \, dx = - \left[ \frac{\cos(nb) - \cos(na)}{n} \right]$$
   $$\left| \int_0^{2\pi} f_n(x) s(x) \, dx \right| \leq \frac{2}{n} \rightarrow 0 \quad \text{as } n \rightarrow \infty$$

2. **Step / simple function:** For $s(x) = \sum_{i=1}^k c_i \chi_{[a_i, b_i]}$, by linearity:
   $$\int_0^{2\pi} f_n(x) s(x) \, dx \rightarrow 0 \quad \text{as } n \rightarrow \infty$$

3. **General $g \in L^2(0, 2\pi)$:** Given $\varepsilon > 0$, choose a simple function $s$ such that $\|g - s\|_2 < \varepsilon$. Then:
   $$
   \begin{aligned}
   \left| \int_0^{2\pi} f_n(x) g(x) \, dx \right| &= \left| \int_0^{2\pi} f_n(x) (g(x) - s(x)) \, dx + \int_0^{2\pi} f_n(x) s(x) \, dx \right| \\
   &\leq \int_0^{2\pi} |f_n(x)| |g(x) - s(x)| \, dx + \left| \int_0^{2\pi} f_n(x) s(x) \, dx \right| \\
   &\leq \|f_n\|_2 \|g - s\|_2 + \left| \int_0^{2\pi} f_n(x) s(x) \, dx \right| \rightarrow 0 \quad \text{as } n \rightarrow \infty
   \end{aligned}
   $$

Thus, $f_n \rightharpoonup 0$ weakly in $L^2(0, 2\pi)$. More generally, if $f$ is periodic on $(0, T)$ and $f_n(x) = f(nx)$, then:
$$f_n \rightharpoonup \frac{1}{T} \int_0^T f(s) \, ds \quad (\text{the average})$$

---

# Definitions: Weak and Weak-* Convergence

> [!abstract] Definition: Weak and Weak-* Convergence
> 1. **Weak Convergence:** A sequence $(x_n)_{n \in \mathbb{N}}$ in a NLS $X$ converges **weakly** to $x \in X$, written $x_n \rightharpoonup x$ in $X$, if:
>    $$\phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^*$$
> 2. **Weak-* Convergence:** A sequence $(\phi_n)_{n \in \mathbb{N}} \subset X^*$ converges **weakly-*** to $\phi \in X^*$, written $\phi_n \xrightarrow{w^*} \phi$ in $X^*$, if:
>    $$\phi_n(x) \rightarrow \phi(x) \quad \forall x \in X$$
>    *(Pointwise convergence on $X$, i.e., testing against the canonical image $J(X) \subseteq X^{**}$).*

---

#### Examples

1. $f_n(x) = \sin(nx)$ on $x \in (0, 2\pi) \implies f_n \rightharpoonup 0$ in $L^2(0, 2\pi)$.
2. $f_n(x) = \operatorname{sign}(\sin(nx)) \implies f_n \rightharpoonup 0$ (via the simple function proof).
3. **Sequence spaces ($c_0$ and $\ell^1$):**
   Let $X = c_0$ (sequences converging to zero) with $\|\cdot\|_\infty$, so $X^* = \ell^1$. Consider $e_n = (0, \dots, 1, \dots, 0)$:
   * **Does $e_n \rightharpoonup 0$ in $c_0$?**
     Let $\phi \in X^* = \ell^1$, represented by $y = (y_k)_{k \in \mathbb{N}} \in \ell^1$.
     $$\phi(e_n) = \sum_{k=1}^{\infty} e_n^{(k)} y_k = y_n$$
     Since $\sum_{k=1}^{\infty} |y_k| < \infty$, we have $|\phi(e_n)| = |y_n| \rightarrow 0$ as $n \rightarrow \infty$.
     $$\therefore e_n \rightharpoonup 0 \text{ in } c_0 \quad (\text{even though } \|e_n\|_\infty = 1 \not\rightarrow 0)$$
   * **Does $e_n \xrightarrow{w^*} 0$ in $\ell^1$?**
     Viewing $(e_n)_{n \in \mathbb{N}} \subset \ell^1 = (c_0)^*$ (note that $e_n \not\rightharpoonup 0$ weakly in $\ell^1$ since $(\ell^1)^* = \ell^\infty$), for every $x = (x_i)_{i \in \mathbb{N}} \in c_0$:
     $$\langle e_n, x \rangle = \sum_{i=1}^{\infty} e_n^{(i)} x_i = x_n \rightarrow 0 \quad \text{as } n \rightarrow \infty$$
     $$\therefore e_n \xrightarrow{w^*} 0 \text{ in } \ell^1$$
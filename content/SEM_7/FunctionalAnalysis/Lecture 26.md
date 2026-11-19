---
course: Functional Analysis
Lecture:
date: 2026-10-06
---
# Inner Product Spaces
Let $H$ be Vector Space over $\mathbb{K}$ ($\mathbb{R}/\mathbb{C}$). An inner product $(\cdot, \cdot) : H \times H \to \mathbb{K}$ is a map satisfying 
1. $(x,y) = \overline{(y,x)} \ \forall x,y \in H$ and $\overline{(\ )}$ denotes conjugation.
2. $(x+y, z) = (x,z) + (y,z) \ \forall x,y,z \in H$.
3. $(\lambda x, z) = \lambda(x,z) \ \forall x,z \in H \ \forall \lambda \in \mathbb{K}$
4. $(x,x) \ge 0 \ \forall x \in H$ and $(x,x) = 0 \text{ iff } x = 0$.

- $(x, y+z) = \overline{(y+z, x)} = \overline{(y,x) + (z,x)} = \overline{(y,x)} + \overline{(z,x)} = (x,y) + (x,z)$
- $(x, \lambda y) = \overline{(\lambda y, x)} = \overline{\lambda(y,x)} = \overline{\lambda}(x,y)$

> **Note:** If $\mathbb{K} = \mathbb{R}$, $(\cdot, \cdot) : H \times H \to \mathbb{R}$ is symmetric bilinear functional.

**Norm induced by a Inner Product** Suppose $(\cdot, \cdot)$ is an inner product on $H$, the norm induced by $(\cdot, \cdot)$ is defined by $\|x\|_H := \sqrt{(x,x)}$

---

# Theorem (Two basic inequalities)
1. $|(x,y)| \le \|x\| \cdot \|y\| \quad \forall x,y \in H \quad \text{(Cauchy - Schwarz)}$
2. $\|x+y\| \le \|x\| + \|y\| \quad \forall x,y \in H \quad \text{(Triangle-Inequality / Minkowski Inequality)}$

**Proof:** 
1. If $y = 0$, inequality is trivial.
Let $y \neq 0$,
Take $a = (x,x), \ b = (x,y), \ c = (y,y) > 0$
For any $\lambda \in \mathbb{K}$, we have:

$$
\begin{aligned}
0 &\le (x + \lambda y, x + \lambda y) \\
&= (x, x + \lambda y) + (\lambda y, x + \lambda y) \\
&= (x,x) + \overline{\lambda}(x,y) + \lambda(y,x) + \lambda\overline{\lambda}(y,y) \\
&= a + \overline{\lambda}b + \lambda\overline{b} + \lambda\overline{\lambda}c
\end{aligned}
$$

Take $\lambda = -b/c$,

$$
\begin{aligned}
0 &\le a - b\overline{b}/c - b\overline{b}/c + b\overline{b}/c \\
&= a - b\overline{b}/c
\end{aligned}
$$

$\implies ac - b\overline{b} \ge 0$
$\implies (x,y)\overline{(x,y)} \le (x,x)(y,y)$


$$
|(x,y)|^2 \le \|x\|^2 \cdot \|y\|^2
$$


2. By $(1)$,
$\text{Re}(x,y) \le |(x,y)| \le \|x\| \cdot \|y\|.$

$$
\begin{aligned}
\|x+y\|^2 &= (x+y, x+y) \\
&= (x,x) + (x,y) + (y,x) + (y,y) \\
&= (x,x) + (x,y) + \overline{(x,y)} + (y,y) \\
&= \|x\|^2 + 2\text{Re}(x,y) + \|y\|^2 \\
&\le \|x\|^2 + 2(\|x\| \cdot \|y\|) + \|y\|^2 \\
&= (\|x\| + \|y\|)^2 \quad \text{(Pd)}
\end{aligned}
$$



$$
\therefore \|\cdot\| = \sqrt{(\cdot, \cdot)} \text{ is indeed a norm}
$$


---

# Hilbert Space
An inner product space $(H, (\cdot, \cdot))$ is called a **Hilbert space** if it is complete wrt norm $\|\cdot\|_H = \sqrt{(\cdot, \cdot)}$

**Exercise:** 
1. Show that $H = \mathbb{K}^N$ with $(x,y) = \sum_{k=1}^N x_k \overline{y}_k$ is a Hilbert space (where $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$).
> [!faq]- Click to reveal the answer
> 
> **Answer:**
> 
> 
> 
> - **Inner Product Properties:**
>     
>     
>     - **Conjugate Symmetry:** $(x,y) = \sum_{k=1}^N x_k \overline{y}_k = \overline{\sum_{k=1}^N y_k \overline{x}_k} = \overline{(y,x)}$.
>         
>         
>         
>     - **Linearity in the first argument:** $(\alpha x + \beta z, y) = \sum_{k=1}^N (\alpha x_k + \beta z_k)\overline{y}_k = \alpha(x,y) + \beta(z,y)$ for all $\alpha, \beta \in \mathbb{K}$.
>         
>         
>         
>     - **Positive Definiteness:** $(x,x) = \sum_{k=1}^N |x_k|^2 \ge 0$, and $(x,x) = 0 \iff |x_k|^2 = 0 \ \forall k \iff x = 0$.
>         
>         
>         
> - **Completeness:**
>     
>     
>     - The induced norm is the standard Euclidean norm $\|x\|_H = \sqrt{\sum_{k=1}^N |x_k|^2}$.
>         
>         
>         
>     - Let $(x^{(n)})_{n \in \mathbb{N}}$ be a Cauchy sequence in $\mathbb{K}^N$. For each fixed coordinate $k \in \{1, \dots, N\}$, we have $|x_k^{(n)} - x_k^{(m)}| \le \|x^{(n)} - x^{(m)}\|_H$, so $(x_k^{(n)})_{n \in \mathbb{N}}$ is a Cauchy sequence in $\mathbb{K}$.
>         
>         
>         
>     - Since $\mathbb{K}$ ($\mathbb{R}$ or $\mathbb{C}$) is complete, each coordinate converges: $x_k^{(n)} \to x_k \in \mathbb{K}$ as $n \to \infty$. Defining $x = (x_1, \dots, x_N) \in \mathbb{K}^N$, we get $\|x^{(n)} - x\|_H \to 0$. Thus, $\mathbb{K}^N$ is a Hilbert space.
>

___

2. Show that $H = l_2$ with $(x,y) = \sum_{k=1}^\infty x_k \overline{y}_k$ is a Hilbert space.
> [!faq]- Click to reveal the answer
> 
> **Answer:**
> 
> 
> 
> - **Well-definedness & Inner Product Properties:**
>     
>     
>     - By the Cauchy-Schwarz inequality, $\sum_{k=1}^\infty |x_k \overline{y}_k| \le \left(\sum_{k=1}^\infty |x_k|^2\right)^{1/2} \left(\sum_{k=1}^\infty |y_k|^2\right)^{1/2} = \|x\|_{l_2}\|y\|_{l_2} < \infty$, so the series converges absolutely.
>         
>         
>         
>     - Conjugate symmetry, linearity in the first argument, and positive definiteness follow directly from the properties of convergent series and absolute values.
>         
>         
>         
> - **Completeness:**
>     
>     
>     - Let $(x^{(n)})_{n \in \mathbb{N}}$ be a Cauchy sequence in $l_2$. For any $\epsilon > 0$, $\exists N_0 \in \mathbb{N}$ such that for all $n, m \ge N_0$, $\|x^{(n)} - x^{(m)}\|_{l_2}^2 = \sum_{k=1}^\infty |x_k^{(n)} - x_k^{(m)}|^2 < \epsilon^2$.
>         
>         
>         
>     - **Candidate limit:** For each fixed $k \in \mathbb{N}$, $|x_k^{(n)} - x_k^{(m)}| < \epsilon$, so $(x_k^{(n)})_{n \in \mathbb{N}}$ is Cauchy in $\mathbb{K}$ and converges to some $x_k \in \mathbb{K}$. Set $x = (x_1, x_2, \dots)$.
>         
>         
>         
>     - **Convergence in $l_2$:** For any finite $M \in \mathbb{N}$ and $n, m \ge N_0$, $\sum_{k=1}^M |x_k^{(n)} - x_k^{(m)}|^2 < \epsilon^2$. Letting $m \to \infty$ gives $\sum_{k=1}^M |x_k^{(n)} - x_k|^2 \le \epsilon^2$. Now letting $M \to \infty$ yields $\|x^{(n)} - x\|_{l_2} \le \epsilon$ for all $n \ge N_0$.
>         
>         
>         
>     - **Membership in $l_2$:** Since $x^{(N_0)} \in l_2$ and $x - x^{(N_0)} \in l_2$, the triangle inequality gives $x = (x - x^{(N_0)}) + x^{(N_0)} \in l_2$. Hence, $l_2$ is complete and is a Hilbert space.
>

___

3. Let $\Omega \subset \mathbb{R}^N$ be an open set. Show that $H = L^2(\Omega)$ with $(f,g) = \int_\Omega f(x)\overline{g}(x) dx$ is a Hilbert space.
> [!faq]- Click to reveal the answer
> 
> **Answer:**
> 
> 
> 
> - **Well-definedness & Inner Product Properties:**
>     
>     
>     - By Hölder's (Cauchy-Schwarz) inequality, $\int_\Omega |f(x)\overline{g}(x)| dx \le \left(\int_\Omega |f(x)|^2 dx\right)^{1/2} \left(\int_\Omega |g(x)|^2 dx\right)^{1/2} = \|f\|_{L^2}\|g\|_{L^2} < \infty$, so $f\overline{g} \in L^1(\Omega)$.
>         
>         
>         
>     - Linearity and conjugate symmetry follow from the linearity of the Lebesgue integral.
>         
>         
>         
>     - **Positive Definiteness:** $(f,f) = \int_\Omega |f(x)|^2 dx \ge 0$. Moreover, $\int_\Omega |f(x)|^2 dx = 0 \iff f(x) = 0$ almost everywhere (a.e.) on $\Omega$, which means $f = 0$ as an equivalence class in $L^2(\Omega)$.
>         
>         
>         
> - **Completeness (Riesz-Fischer Theorem):**
>     
>     
>     - Let $(f_n)_{n \in \mathbb{N}}$ be a Cauchy sequence in $L^2(\Omega)$. Pass to a fast-converging subsequence $(f_{n_k})_{k \in \mathbb{N}}$ such that $\|f_{n_{k+1}} - f_{n_k}\|_{L^2} < 2^{-k}$ for all $k \in \mathbb{N}$.
>         
>         
>         
>     - Define $g_m(x) = \sum_{k=1}^m |f_{n_{k+1}}(x) - f_{n_k}(x)|$. By Minkowski's inequality, $\|g_m\|_{L^2} \le \sum_{k=1}^m 2^{-k} < 1$. By the Monotone Convergence Theorem, $g(x) = \lim_{m \to \infty} g_m(x)$ satisfies $\|g\|_{L^2} \le 1$, so $g(x) < \infty$ a.e. on $\Omega$.
>         
>         
>         
>     - Thus, the telescoping series $f_{n_1}(x) + \sum_{k=1}^\infty (f_{n_{k+1}}(x) - f_{n_k}(x))$ converges a.e. to a measurable function $f(x)$. By Fatou's Lemma, $\|f - f_{n_k}\|_{L^2} \le \liminf_{j \to \infty} \|f_{n_j} - f_{n_k}\|_{L^2} \to 0$ as $k \to \infty$.
>         
>         
>         
>     - Since $f = (f - f_{n_k}) + f_{n_k} \in L^2(\Omega)$ and a Cauchy sequence with a convergent subsequence converges to the same limit, $\|f_n - f\|_{L^2} \to 0$. Thus, $L^2(\Omega)$ is a Hilbert space.
>

___
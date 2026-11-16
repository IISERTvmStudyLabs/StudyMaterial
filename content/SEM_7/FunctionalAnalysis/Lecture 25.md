---
course: Functional Analysis
Lecture:
date: 2026-10-05
---

## Theorem 1
Let $X, Y$ be Banach and $\mathcal{L} \in \mathcal{L}(X, Y)$. Then, $\mathcal{L}$ is compact $\iff$ $\mathcal{L}^* \in \mathcal{L}(Y^*, X^*)$ is compact.

**Proof:** Let $\mathcal{L} \in \mathcal{L}(X,Y)$ be compact.
Let $(\Phi_n)_{n \in \mathbb{N}} \subset Y^*$ be a bounded seq., i.e., $\|\Phi_n\|_{Y^*} \le 1 \ \forall n \in \mathbb{N}$
To Show That: $\exists$ subsequence $(\Phi_{n_k})_{k \in \mathbb{N}}$ such that. $(\mathcal{L}^* \Phi_{n_k}) \subset X^*$ cgs in $X^*$.
(or) $(\mathcal{L}^* \Phi_n)_{n \in \mathbb{N}}$ has a cgt subseq.

Let $B_1 = \overline{B_1(0)}$ be the closed unit ball of $X$. Since $\mathcal{L}$ is compact, 
$E := \overline{\mathcal{L}(B_1)}$ is compact in $Y$.

Since $\Phi_n : Y \to \mathbb{K}$, let $\phi_n := \Phi_n|_E$

We claim that $(\phi_n)_{n \in \mathbb{N}}$ satisfies the conditions of Arzelà-Ascoli,
$$ 
\begin{aligned}
|\phi_n(y_1) - \phi_n(y_2)| &\le \|\Phi_n\|_{Y^*} \|y_1 - y_2\|_Y \\
&\le \|y_1 - y_2\|_Y \quad \forall y_1, y_2 \in Y.
\end{aligned}
$$

$\implies$ uniform equicontinuity of $(\phi_n)_{n \in \mathbb{N}}$.

$$ \sup_{y \in E} \|y\|_Y = \sup_{\|x\| \le 1} \|\mathcal{L}x\|_Y = \|\mathcal{L}\| $$
$$ \phi_n : E \to \mathbb{K}. $$

---

$$ |\phi_n(y)| \le \|\Phi_n\|_{Y^*} \|y\|_Y \le \|y\|_Y \le \sup_{y \in E} \|y\| = \|\mathcal{L}\| \quad \forall y \in E. $$
$\implies (\phi_n)$ is uniformly bounded on $E$.

By [[Lecture 24#Arzelà-Ascoli Theorem|Ascoli-Arzelà]], $\exists$ a subsequence $(\phi_{n_k})_{k \in \mathbb{N}}$ which cgs uniform on $E$..,

$$
\begin{aligned}
\|\mathcal{L}^* \Phi_{n_k} - \mathcal{L}^* \Phi_{n_l}\|_{X^*} &= \sup_{\|x\|_X \le 1} | {}_{X^*} \langle \mathcal{L}^* \Phi_{n_k} - \mathcal{L}^* \Phi_{n_l}, x \rangle_X | \\
&= \sup_{\|x\|_X \le 1} | {}_{Y^*} \langle \Phi_{n_k} - \Phi_{n_l}, \mathcal{L}x \rangle_Y | \\
&= \sup_{\|x\|_X \le 1} | \Phi_{n_k}(\mathcal{L}x) - \Phi_{n_l}(\mathcal{L}x) | \to 0 \quad \text{as } k,l \to \infty \ ((\phi_{n_k}) \text{ cgs uniform on } E)
\end{aligned}
$$

$\therefore (\mathcal{L}^* \Phi_{n_k})_{k \in \mathbb{N}}$ is Cauchy in $X^*$ and hence it cgs.

---

## Integral operator on $C[a,b]$ :

Suppose $K : [a,b] \times [a,b] \to \mathbb{R}$ is a continuous function. Define $\mathcal{L} : C[a,b] \to C[a,b]$
as 
$$ \mathcal{L}(f)(x) := \int_a^b K(x,y) f(y) dy $$

Then, $\mathcal{L}$ is a compact operator.

Let $B := \{ f \in C[a,b] : \|f\|_\infty \le 1 \}$ be the closed unit ball of $C[a,b]$.
We ST $\mathcal{L}(B)$ is relatively compact.
i.e., To Show That: $\mathcal{L}(B)$ is uniform bounded & equicontinuous.
Since $K$ is continuous on $[a,b] \times [a,b]$, it is bounded:
$$ |K(x,y)| \le M \quad \forall (x,y) \in [a,b] \times [a,b] $$

If $f \in B$,
$$
\begin{aligned}
|\mathcal{L}(f)(x)| &= \left| \int_a^b K(x,y) \cdot f(y) dy \right| \\
&\le \int_a^b M \cdot \sup_{y \in [a,b]} |f(y)| dy \\
&= M \|f\|_\infty (b-a) \le M(b-a)
\end{aligned}
$$

$\implies \|\mathcal{L}(f)\|_\infty = \sup_{x \in [a,b]} |\mathcal{L}(f)(x)| \le M(b-a) \quad \forall f \in B$
$\implies \mathcal{L}(B)$ is uniormf bounded.

Since $K$ is uniform continuous, given any $\varepsilon > 0, \exists \delta > 0$ s.t
$$ |K(x,y) - K(x',y)| < \varepsilon \quad \forall (x,y), (x',y) \in [a,b] \times [a,b] $$
satisfying $|x - x'| + |y - y'| < \delta$.

---

Let $\varepsilon > 0$ given.
$$
\begin{aligned}
|\mathcal{L}(f)(x) - \mathcal{L}(f)(x')| &\le \int_a^b |K(x,y) - K(x',y)| \cdot |f(y)| dy \\
&\le \int_a^b \varepsilon \cdot \|f\|_\infty dy \\
&\le \varepsilon(b-a).
\end{aligned}
$$

$\forall (x,y), (x',y) \in [a,b] \times [a,b]$ with $|x - x'| < \delta$

$\implies \mathcal{L}(B)$ is uniform  equicontinuous.
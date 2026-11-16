---
course: Functional Analysis
Lecture: "18"
date: 2026-09-08
---
## Theorem 1
Let $X$ be an infinite-dimensional Banach space. Then $X$ cannot have a countable [[SEM_7/FunctionalAnalysis/Lecture 17#Definition Hamel Basis|Hamel basis.]]

**Proof:**
Suppose $X$ has a countable Hamel basis $(e_i)_{i=0}^{\infty}$.
For $n \geq 0$, define:
$$F_n := \operatorname{span}\{e_i\}_{i=0}^n$$
Then $X = \bigcup_{n \geq 0} F_n$, and each $F_n$ is a closed subspace of $X$ (since each $F_n$ is finite-dimensional).

We claim that $\operatorname{Int}(F_n) = \emptyset$ for all $n \geq 0$:
* Suppose $\operatorname{Int}(F_n) \neq \emptyset$ for some $n \geq 0$. Then there exist $x = \sum_{j=0}^n \alpha_j e_j \in F_n$ and $r > 0$ such that $\overline{B_r(x)} \subset F_n$.
* Consider $y = x + \frac{r}{\|e_{n+1}\|} e_{n+1}$. Then $\|y - x\| = r$, so $y \in \overline{B_r(x)}$, but $y \notin F_n$ since $\{e_0, \dots, e_n, e_{n+1}\}$ is linearly independent—a contradiction.

Thus, $X$ is a countable union of closed subsets with empty interior. By the [[SEM_7/FunctionalAnalysis/Lecture 17#Theorem (Baire Category Theorem)|Baire Category Theorem]], $X$ cannot be complete. $\blacksquare$

* **Remark:**
  * For $\mathcal{P}(\mathbb{K})$, $\{1, x, x^2, \dots\}$ is a Hamel basis.
  * For $\mathcal{P}(\mathbb{K}^N)$, $\{x_1^{k_1} x_2^{k_2} \dots x_N^{k_N} \mid k_i \geq 0\}$ is a Hamel basis.
  * Hence, the space of polynomials cannot be equipped with any norm that makes it complete.

---

# The Banach–Steinhaus Theorem (Uniform Boundedness Principle)

Suppose we are given two normed linear spaces $X$ and $Y$, and a collection $(L_i)_{i \in I} \subseteq \mathcal{L}(X, Y)$.
* We say that $(L_i)_{i \in I}$ is **uniformly bounded** if $\sup_{i \in I} \|L_i\|_{\mathcal{L}(X, Y)} < \infty$.
* Consider $x \in X$ arbitrary but fixed:
  $$\|L_i x\|_Y \leq \|L_i\|_{\mathcal{L}(X, Y)} \|x\|_X < \infty \quad \forall i \in I$$
  $$\implies \sup_{i \in I} \|L_i x\|_Y < \infty \quad \forall x \in X$$
  i.e., $(L_i)_{i \in I}$ is **pointwise bounded**. When $X$ is complete, the converse is true.

____

# Theorem (Banach–Steinhaus)
 Let $X$ be a Banach space, let $Y$ be a normed linear space, and let $(L_i)_{i \in I} \subseteq \mathcal{L}(X, Y)$ satisfy:
 $$\sup_{i \in I} \|L_i x\|_Y < \infty \quad \forall x \in X$$
 Then:
 $$\sup_{i \in I} \|L_i\|_{\mathcal{L}(X, Y)} < \infty$$

**Proof:**
For $n \geq 0$, define:
$$F_n := \left\{x \in X \;\middle|\; \sup_{i \in I} \|L_i x\|_Y \leq n\right\}$$
Given any $x \in X$, $\sup_{i \in I} \|L_i x\|_Y < \infty$, and hence $\exists n(x) \geq 0$ such that $\sup_{i \in I} \|L_i x\|_Y \leq n(x)$, i.e., $x \in F_{n(x)}$. Therefore:
$$X = \bigcup_{n \geq 0} F_n$$

We show that each $F_n$ is closed:
$$
\begin{aligned}
x \in F_n &\iff \|L_i x\|_Y \leq n \quad \forall i \in I \\
&\iff x \in \{z \in X \mid \|L_i z\|_Y \leq n\} \quad \forall i \in I \\
&\iff F_n = \bigcap_{i \in I} \{z \in X \mid \|L_i z\|_Y \leq n\}
\end{aligned}
$$
Each set $\{z \in X \mid \|L_i z\|_Y \leq n\}$ is closed (as the inverse image of $[0, n]$ under the continuous map $z \mapsto \|L_i z\|_Y$). Hence, $F_n$ is closed as an arbitrary intersection of closed sets.

Since $X$ is complete, by the Baire Category Theorem, $\exists n_0 \geq 0$ such that $\operatorname{Int}(F_{n_0}) \neq \emptyset$.
$$\implies \exists x_0 \in F_{n_0} \text{ and } r > 0 \text{ such that } \overline{B_r(x_0)} \subseteq F_{n_0}$$
$$\implies \|L_i z\|_Y \leq n_0 \quad \forall z \in \overline{B_r(x_0)}, \, \forall i \in I$$

For any $x \in X$ ($x \neq 0$), take:
$$z := x_0 + \frac{r}{\|x\|_X} x \in \overline{B_r(x_0)}, \quad \text{so that } x = \frac{\|x\|_X}{r} (z - x_0)$$
Then:
$$
\begin{aligned}
\|L_i x\|_Y &= \frac{\|x\|_X}{r} \|L_i (z - x_0)\|_Y \\
&\leq \frac{\|x\|_X}{r} \left(\|L_i z\|_Y + \|L_i x_0\|_Y\right) \\
&\leq \frac{\|x\|_X}{r} \left(n_0 + \sup_{i \in I} \|L_i x_0\|_Y\right)
\end{aligned}
$$
Thus, for all $x \in X$ and all $i \in I$:
$$\|L_i x\|_Y \leq \frac{1}{r} \left(n_0 + \sup_{i \in I} \|L_i x_0\|_Y\right) \|x\|_X$$
$$\implies \|L_i\|_{\mathcal{L}(X,Y)} \leq \frac{1}{r} \left(n_0 + \sup_{i \in I} \|L_i x_0\|_Y\right)$$
Taking the supremum over $i \in I$:
$$\sup_{i \in I} \|L_i\|_{\mathcal{L}(X,Y)} \leq \frac{1}{r} \left(n_0 + \sup_{i \in I} \|L_i x_0\|_Y\right) < \infty \quad \blacksquare$$
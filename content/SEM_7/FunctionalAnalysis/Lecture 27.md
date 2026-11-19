---
course: Functional Analysis
Lecture:
date: 2026-10-08
---
# The Parallelogram Identity


$$
\|x+y\|_H^2 + \|x-y\|_H^2 = 2\|x\|^2 + 2\|y\|_H^2 \quad \forall x,y \in H
$$



$$
\begin{aligned}
\|x+y\|_H^2 &= (x+y, x+y) \\
&= \|x\|^2 + 2\text{Re}(x,y) + \|y\|^2
\end{aligned}
$$


![[vector_parallelogram (1).png|377]]

---

**Remark:** (A result due to *von Neumann*)
Suppose $(X, \|\cdot\|)$ is Banach and suppose the parallelogram identity holds for every pair of elements $x,y \in X$. Then, the norm $\|\cdot\|$ must come from an inner product.

**Example**., Let $X = L^\infty[0,1]$


$$
f(x) = 1 \qquad g(x) = x
$$


$$
\|f\|_\infty = 1 \qquad \|g\|_\infty = 1
$$



$$
\|f+g\|_\infty = 2 \qquad \|f-g\|_\infty = 1
$$


$$
\|f+g\|_\infty^2 + \|f-g\|_\infty^2 = 4 + 1 = 5
$$


$$
2\|f\|_\infty^2 + 2\|g\|_\infty^2 = 2 + 2 = 4
$$



$$
\therefore \|\cdot\|_\infty \text{ cannot be induced by an inner product.}
$$


---

## Orthogonality
 Let $S \subset H$, $\text{Span}(S) = \left\{ \sum_{i=1}^N \alpha_i x_i : N \in \mathbb{N}, \alpha_i \in \mathbb{K}, x_i \in S \right\}$
$\text{Span}(S)$ is a subspace of $H$, but it needs not to be closed always.

$H = l_2, \quad S = \{e_1, e_2, \dots \}$
$\text{Span}(S) = \text{set of all seq with finitely many non-zero terms.}$

Let $V = \text{Span}(S)$. If $\overline{V} = H$, then we say that $S$ is total in $H$, i.e., $S$ is total if $\forall x \in H$, $\exists$ a sequence $(x_n) \subset \text{Span}(S)$ s.t

$$
\|x_n - x\|_H \to 0 \text{ as } n \to \infty
$$



We say that $x, y$ are orthogonal if $(x, y) = 0$.
For $S \subset H$, the orthogonal complement $S^\perp$ is defined by


$$
S^\perp = \{y \in H : (y, x) = 0, \forall x \in S\}
$$


Is $S^\perp$ a closed subspace?
If $(y_n) \subset S^\perp$ and if $y_n \rightarrow y$, then for any $x \in S$:


$$
|(y, x)| = |(y - y_n + y_n, x)| \le |(y - y_n, x)| + |(y_n, x)| \le \|y - y_n\| \|x\| \rightarrow 0
$$


----
# Theorem (Orthogonal Projection)

Let $H$ be a Hilbert space and let $V$ be a closed subspace. Then:
1. $H = V \oplus V^\perp$, that is, $\forall x \in H, \exists! y \in V \text{ and } z \in V^\perp \text{ such that } x = y + z$
2. $y$ is the unique element of $V$ having minimal distance from $x$; $y = P_V(x)$
3. $z$ is the unique element of $V^\perp$ having minimal distance from $x$; $z = P_{V^\perp}(x)$
4. The orthogonal projections $x \mapsto P_V(x)$ and $x \mapsto P_{V^\perp}(x)$ are bounded linear maps with norms $\le 1$. In fact, if $V \neq \{0\}$ (non-trivial), then

$$
\|P_V\|_{\mathcal{L}(H,H)} = \|P_{V^\perp}\|_{\mathcal{L}(H)} = 1
$$

**Proof**
**Step 1:** Let $x \in H$ be arbitrary, but fixed. Let $d = \text{dist}(x, V) = \inf_{y \in V} \|x - y\|$. Let $(y_n) \subset V$ such that $\lim_{n \rightarrow \infty} \|x - y_n\|_H = d$.
We know that $(y_n)$ is Cauchy and since $V$ is closed,

$$
y = \lim_{n \rightarrow \infty} y_n \in V
$$

$\exists y \in V$ such that $y_n \rightarrow y$ and $\|x - y\| = d$. To show that $(y_n)$ is Cauchy:
By parallelogram identity,

$$
\|u + v\|_H^2 + \|u - v\|_H^2 = 2\|u\|_H^2 + 2\|v\|_H^2
$$

Let $u = x - y_n, v = x - y_m$,

$$
\|2x - y_n - y_m\|_H^2 + \|y_n - y_m\|_H^2 = 2\|x - y_n\|_H^2 + 2\|x - y_m\|_H^2
$$


$$
\|y_n - y_m\|_H^2 = 2\|x - y_n\|_H^2 + 2\|x - y_m\|_H^2 - 4\left\|x - \frac{y_n + y_m}{2}\right\|_H^2
$$

Since $y_n, y_m \in V$, $\frac{y_n + y_m}{2} \in V$ and

$$
\left\|x - \frac{y_n + y_m}{2}\right\|^2 \ge d^2
$$


$$
\|y_n - y_m\|^2 \le 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4d^2
$$


$$
\le 2d^2 + 2d^2 - 4d^2 = 0 \quad \text{as } n, m \rightarrow \infty
$$

y$\Rightarrow (y_n)$ is Cauchy.
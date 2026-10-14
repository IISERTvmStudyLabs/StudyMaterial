---
course: Functional Analysis
Lecture:
date: 8 October
---
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

Theorem (Orthogonal Projection)
Let $H$ be a Hilbert space and let $V$ be a closed subspace. Then:
(i) $H = V \oplus V^\perp$, i.e., $\forall x \in H, \exists! y \in V \text{ and } z \in V^\perp \text{ s.t. } x = y + z$
(ii) $y$ is the unique element of $V$ having minimal distance from $x$; $y = P_V(x)$
(iii) $z$ is the unique element of $V^\perp$ having minimal distance from $x$; $z = P_{V^\perp}(x)$
(iv) The orthogonal projections $x \mapsto P_V(x)$ and $x \mapsto P_{V^\perp}(x)$ are bdd linear maps with norms $\le 1$. In fact, if $V \neq \{0\}$ (non-trivial), then
$$
\|P_V\|_{\mathcal{L}(H,H)} = \|P_{V^\perp}\|_{\mathcal{L}(H)} = 1
$$

Proof
Step 1: Let $x \in H$ be arbitrary, but fixed. Let $d = \text{dist}(x, V) = \inf_{y \in V} \|x - y\|$. Let $(y_n) \subset V$ s.t. $\lim_{n \rightarrow \infty} \|x - y_n\|_H = d$.
We know that $(y_n)$ is Cauchy and since $V$ is closed,
$$
y = \lim_{n \rightarrow \infty} y_n \in V
$$
$\exists y \in V$ s.t. $y_n \rightarrow y$ and $\|x - y\| = d$. To show that $(y_n)$ is Cauchy:
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
$\Rightarrow (y_n)$ is Cauchy.

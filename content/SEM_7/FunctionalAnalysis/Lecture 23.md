---
course: Functional Analysis
Lecture:
date: 5 October
---

$B_{1}=\overline{B_{1}(0)}$ be the closed unit ball of $X$.

Since $L$ is compact, $E=\overline{L B_{1}}$ is compact in $Y$.

We claim that $(\phi_n)$ satisfies the conditions of Arzela - Ascoli

$$
|\phi_{n}(y_{1})-\phi_{n}(y_{2})| \le \|\phi_{n}\|_{Y^*}\|y_{1}-y_{2}\|_{Y}
$$

$$
\le \|y_{1}-y_{2}\|_{Y}
$$

$\Rightarrow$ uniform equicontinuity of $(\phi_{n})_{n\in\mathbb{N}}$

$$
\sup_{y\in E} |\phi_{n}(y)| \le \sup_{y\in E} \|\phi_n\|_{Y^*} \|y\|_Y \le \sup_{y\in E} \|y\|_Y
$$

$\phi_{n}:E\rightarrow \mathbb{K}$

$$
|\phi_{n}(y)| \le \|\phi_{n}\|_{Y^*}\|y\|_{Y} \le \|y\|_{Y} \le \sup_{y\in E} \|y\|
$$

$\Rightarrow (\phi_n)$ uniformly bdd on E

By Arzela-Ascoli, $\exists$ a subsequence $(\phi_{n_k})_{k\in\mathbb{N}}$ which converges uniformly on E.

$$
|\phi_{n}(y)| \le \|\phi_{n}\|_{Y^*}\|y\|_{Y} \le \|y\|_{Y} \le \sup_{y\in E}\|y\| = M < \infty
$$

$\Rightarrow (\phi_n)$ is uniformly bdd on E.

By Arzela-Ascoli on E $\exists$ subsequence $(\phi_{n_k})_{k\in\mathbb{N}}$ which converge uniformly

$$
\|L^*\phi_{n_k} - L^*\phi_{n_l}\|_{X^*} = \sup_{\|x\|_X \le 1} |\langle L^*\phi_{n_k} - L^*\phi_{n_l}, x \rangle|
$$

$$
= \sup_{\|x\|_X \le 1} |\phi_{n_k}(Lx) - \phi_{n_l}(Lx)|
$$

$Lx \in E$

$$
= \sup_{\|x\|_X \le 1} |\phi_{n_k}(Lx) - \phi_{n_l}(Lx)|
$$

$$
\rightarrow 0 \quad \text{as } k, l \rightarrow \infty
$$

$(\phi_{n_k})$ converges uniformly on E.

$(\phi_{n_k})$ is Cauchy in $X^*$ and hence it converges.

Integral Operator

$C[a,b]$

Suppose $k : [a,b] \times [a,b] \rightarrow \mathbb{R}$ is a cont. fn.

Define $L : C[a,b] \rightarrow C[a,b]$ as

$$
L(f)(x) := \int_{a}^{b} k(x,y) f(y) dy
$$

Then $L$ is a compact operator.

Let $B := \{f \in C[a,b] : \|f\|_\infty \le 1\}$ be the closed unit ball of $C[a,b]$.

We show that $L(B)$ is relatively compact -

i.e. to show that $L(B)$ is uniformly bdd. and equicont.

Since $k$ is cont. on $[a,b] \times [a,b]$, $k$ is bdd:

$$
|k(x,y)| \le M \quad \forall (x,y) \in [a,b] \times [a,b]
$$

If $f \in B$,

$$
|L(f)(x)| \le \int_{a}^{b} |k(x,y)| \cdot |f(y)| dy
$$

$$
\le \int_{a}^{b} M \cdot \sup_{y\in[a,b]} |f(y)| dy
$$

$$
= M \|f\|_\infty (b-a) \le M(b-a)
$$

$$
\Rightarrow \|L(f)\|_\infty = \sup_{x\in[a,b]} |L(f)(x)| \le M(b-a)
$$

$$
\Rightarrow L(B) \text{ is uniformly bdd.}
$$

Since $k$ is uniformly cont., given any $\epsilon > 0$, $\exists \delta > 0$ s.t.

$$
|k(x,y) - k(x',y')| < \frac{\epsilon}{b-a} \quad \forall (x,y), (x',y') \in [a,b] \times [a,b] \text{ satisfying } |x - x'| + |y - y'| < \delta
$$

Let $\epsilon > 0$ be given

$$
|L(f)(x) - L(f)(x')| \le \int_{a}^{b} |k(x,y) - k(x',y)| |f(y)| dy
$$

$$
\le \int_{a}^{b} \frac{\epsilon}{b-a} \cdot \|f\|_\infty dy
$$

$$
\le \epsilon
$$

$\forall f \in B$ for $(x,y), (x',y) \in [a,b] \times [a,b]$ with $|x - x'| < \delta$

$\Rightarrow L(B)$ is uniformly equicont.
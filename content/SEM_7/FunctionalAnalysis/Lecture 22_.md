---
course: Functional Analysis
Lecture:
date: 1 October
---

$L : X \rightarrow Y$ is compact if for every bdd sequence $(x_n)_{n \in \mathbb{N}} \subset X$, a subsequence $(x_{n_k})_{k \in \mathbb{N}}$ s.t. $(L x_{n_k})$ converges in $Y$.

$\forall U \subset X$, bdd $\Rightarrow \overline{L(U)}$ is compact. In which operators are compact?

Theorem
Let $X, Y$ be Banach.
i) $L \in \mathcal{L}(X, Y)$ and $\dim Y < \infty$, then $L$ is compact.
ii) Let $L_n \in \mathcal{K}(X, Y)$ be compact, and let $\|L_n - L\| \rightarrow 0$.
Then $L$ is compact, i.e., the set of all compact operators is closed in $\mathcal{L}(X, Y)$.

Proof
i) It is enough to show that $L(B_1(0))$ is compact in $Y$. If $\dim Y < \infty$ and $L$ is bdd, $\overline{L(B_1(0))}$ is closed and bdd $\Rightarrow \overline{L(B_1(0))}$ is compact.

ii) Let $(x_n)_{n \in \mathbb{N}}$ be bdd in $X$, i.e.
$$
\exists M \quad \text{s.t.} \quad \sup_{n \in \mathbb{N}} \|x_n\| \le M
$$
Since $(x_n)$ is bdd and $L_1$ is compact, $\exists$ a subsequence $(x_{1, n})_{n \in \mathbb{N}}$ s.t. $(L_1 x_{1, n})$ converges in $Y$.
Since $(x_{1, n})_{n \in \mathbb{N}}$ is a bdd sequence in $X$ and $L_2$ is compact, $\exists$ a subsequence $(x_{2, n})_{n \in \mathbb{N}}$ s.t. $(L_2 x_{2, n})$ converges in $Y$.
Continuing for $L_m$, we get subsequences $(x_{m, n})_{n \in \mathbb{N}}$ s.t. $(L_m x_{m, n})$ converges in $Y$.

Denote $y_n = x_{n, n}, n \in \mathbb{N}$.
Clearly $(y_n) \subset (x_{1, n})_{n \in \mathbb{N}}$ and $(L_1 y_n)$ converges in $Y$.

Claim: $(L y_n)_{n \in \mathbb{N}}$ is Cauchy in $Y$. Let $\epsilon > 0$. Choose $n$ large enough that $\|L - L_n\| < \frac{\epsilon}{3M}$.
$\exists N_0 \in \mathbb{N}$ s.t. $\forall k, \ell \ge N_0$, $\|L_n y_k - L_n y_\ell\| < \frac{\epsilon}{3}$.

$$
\|L y_k - L y_\ell\|_Y \le \|L y_k - L_n y_k\|_Y + \|L_n y_k - L_n y_\ell\|_Y + \|L_n y_\ell - L y_\ell\|_Y
$$
$$
\le \|L - L_n\|_{\mathcal{L}(X,Y)} \|y_k\|_X + \|L_n y_k - L_n y_\ell\|_Y + \|L_n - L\|_{\mathcal{L}(X,Y)} \|y_\ell\|_X
$$
$$
< \epsilon
$$

# Arzelà-Ascoli Theorem
$K$ compact metric space ($C(K), K \subset \mathbb{R}^N$ compact)
$H \subset C(K, \mathbb{R})$
(1) Bounded: $\sup_{f \in H} \sup_{x \in K} |f(x)| < \infty$
(2) Equicontinuous: for any $\epsilon > 0$, $\exists \delta > 0$ s.t.
$\sup_{f \in H} |f(x) - f(y)| < \epsilon, \forall x, y \in K, d(x,y) < \delta$

$H$ is compact $\iff H$ is uniformly bdd and equicontinuous $\iff \forall (f_n)_{n \in \mathbb{N}} \subset H, \exists$ uniformly convergent subsequence.

Theorem
Let $X, Y$ be Banach and $L \in \mathcal{L}(X, Y)$. Then $L$ is compact $\iff L^* \in \mathcal{L}(Y^*, X^*)$ is compact.

Proof
Let $L \in \mathcal{L}(X, Y)$ be compact. Let $(\phi_n)_{n \in \mathbb{N}} \subset Y^*$ be a bdd sequence, i.e., $\|\phi_n\|_{Y^*} \le 1$.
To show that $\exists$ a subsequence $(\phi_{n_k})_{k \in \mathbb{N}}$ s.t. $(L^* \phi_{n_k})$ converges in $X^*$.

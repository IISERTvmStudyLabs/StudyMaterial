## Recap

Let $(\Omega,\mathcal{F},\mu)$ be a measure space.

Define
$$
\mathcal{S}:=\left\{\sum_{i=1}^{n} c_i\chi_{E_i}:
n\in\mathbb{N},\ E_i\in\mathcal{F},\ \mu(E_i)<\infty,\ c_i\in\mathbb{C},\ 1\le i\le n\right\}.
$$

Theorem (from previous lecture): $\mathcal{S}$ is dense in $L^p(\Omega)$ for $1\le p<\infty$.

Exercise: prove the $p=\infty$ case.

___
## Definition (Support and $C_c(X)$)

Suppose $(X,d)$ is a metric space and $f:X\to\mathbb{C}$ is continuous.

The support of $f$ is
$$
\operatorname{supp} f:=\{x\in X: f(x)\ne 0\}.
$$

Define
$$
C_c(X):=\{f:X\to\mathbb{C}: f\text{ is continuous and }\operatorname{supp}f\text{ is compact}\}.
$$

___
## Radon Measure

Suppose $(X,d)$ is a metric space. A measure
$$
\mu:\mathcal{B}(X)\to[0,\infty]
$$
is called a Radon measure if:

1. (Local finiteness) $\mu(K)<\infty$ for every compact set $K$.
2. (Inner regularity)
$$
\mu(E)=\sup\{\mu(K):K\subseteq E,\ K\text{ compact}\}.
$$
3. (Outer regularity)
$$
\mu(E)=\inf\{\mu(U):E\subseteq U,\ U\text{ open}\}.
$$

### Examples

1. If $(X,d)$ is $\sigma$-compact and $\mu:\mathcal{B}(X)\to[0,\infty)$ satisfies the above regularity properties, then $\mu$ is Radon.
2. Any finite measure on $\mathbb{R}^n$ with $\mu(K)<\infty$ for every compact $K$ is Radon.
3. In particular, Lebesgue measure is Radon.

Also,
$$
C_c(X)\subseteq L^p(X)\quad(1\le p<\infty)
$$
for Radon measures, since compact supports have finite measure.

___
## Lemma (Cutoff Function)

Let $(X,d)$ be a locally compact metric space. Suppose $K\subseteq X$ is compact and $K\subseteq U$ where $U$ is open.

Then there exists a continuous function $f\in C_c(X)$ such that
$$
\operatorname{supp}f\subseteq U,
\qquad
f(x)=1\ \text{for all }x\in K.
$$

### Proof

For each $x\in K$, choose open $W_x$ such that
$$
x\in W_x\subseteq \overline{W_x}\subseteq U
$$
(possible by local compactness).

Since $K$ is compact, choose $x_1,\dots,x_n\in K$ with
$$
K\subseteq \bigcup_{i=1}^{n}W_{x_i}=:V.
$$
Then
$$
K\subseteq V\subseteq \overline{V}\subseteq U.
$$

For any subset $A\subseteq X$, the map $x\mapsto d(x,A)$ is continuous.

Define
$$
f(x):=\frac{d(x,V^c)}{d(x,K)+d(x,V^c)},\qquad x\in X.
$$

Since $K$ and $V^c$ are disjoint closed sets, denominator is $>0$ for every $x$, so $f$ is continuous.

By construction:

1. $f(x)=1$ for $x\in K$ (because $d(x,K)=0$).
2. $f(x)=0$ for $x\in V^c$ (because $d(x,V^c)=0$).

Hence
$$
\operatorname{supp}f\subseteq \overline{V}\subseteq U,
$$
and $\overline{V}$ is compact. Therefore $f\in C_c(X)$.

___
## Theorem

Let $(X,d)$ be a locally compact metric space and let $\mu$ be a Radon measure on $X$.
Then $C_c(X)$ is dense in $L^p(X)$ for $1\le p<\infty$.

### Start of proof

Take $f\in C_c(X)$. Then
$$
\int_X |f|^p\,d\mu
=\int_{\operatorname{supp}f}|f|^p\,d\mu
\le M^p\,\mu(\operatorname{supp}f),
$$
where
$$
M:=\sup_{x\in\operatorname{supp}f}|f(x)|<\infty.
$$

So $C_c(X)\subseteq L^p(X)$ for every $1\le p<\infty$.

## Recap

### Lemma

Let $(X,d)$ be a locally compact metric space. Suppose $K\subseteq U\subseteq X$, where $K$ is compact and $U$ is open.
Then there exists
$$
f:X\to[0,1]
$$
such that $f\in C_c(X)$,
$$
\operatorname{supp}f=\{x\in X:f(x)\ne0\}\subseteq U,
$$
and
$$
f(x)=1\quad\forall x\in K.
$$

### Theorem

Suppose $(X,d)$ is a locally compact metric space and $\mu$ is a Radon measure.
Then
$$
C_c(X)\text{ is dense in }L^p(X,\mu),\qquad 1\le p<\infty.
$$

___
## Proof (continued)

Since the space $\mathcal S$ of all integrable simple functions is dense in $L^p(X,\mu)$, it is enough to prove
$C_c(X)$ is dense in $\mathcal S$ with respect to the $L^p$ metric.

Given $\varepsilon>0$ and $f\in L^p(X,\mu)$, choose $s\in\mathcal S$ such that
$$
\|s-f\|_p<\varepsilon.
$$

If we show: given $\varepsilon>0$ and $s\in\mathcal S$, there exists $h\in C_c(X)$ such that
$$
\|h-s\|_p<\varepsilon,
$$
then we are done.

To prove this, it is enough to show: given $\varepsilon>0$ and a Borel set $E$, there exists
$\phi\in C_c(X)$ such that
$$
\|\chi_E-\phi\|_p<\varepsilon.
$$

Now fix $\varepsilon>0$. Since $\mu$ is Radon, there exist compact $K$ and open $U$ such that
$$
K\subseteq E\subseteq U
\quad\text{and}\quad
\mu(U\setminus K)<\varepsilon.
$$

By the lemma, there exists $\phi\in C_c(X)$ with
$$
0\le\phi\le1,
\quad
\operatorname{supp}\phi\subseteq U,
\quad
\phi(x)=1\ \forall x\in K.
$$

Consider $|\chi_E(x)-\phi(x)|$:

1. It is $0$ on $K$.
2. It is $0$ on $U^c$ (since $E\subseteq U$ and $\operatorname{supp}\phi\subseteq U$).
3. It is bounded by $1$ on $U\setminus K$.

Hence
$$
\int_X |\chi_E-\phi|^p\,d\mu
\le \mu(U\setminus K)
<\varepsilon,
$$
so
$$
\|\chi_E-\phi\|_p<\varepsilon^{1/p}.
$$

This proves the required approximation.

___
## Lusin-Type Statements

1. Every measurable set is "nearly" a finite union of intervals, i.e., given $\varepsilon>0$ and a Borel set
$E\subseteq\mathbb{R}$, there exist finitely many disjoint intervals $I_j$ ($j=1,\dots,k$) such that
$$
\mu\left(E\,\Delta\,\bigcup_{j=1}^{k} I_j\right)<\varepsilon.
$$

2. Every a.e. finite measurable function is "nearly" uniformly continuous.

3. Every Borel measurable function is "nearly" a continuous function.

___
## Egoroff's Theorem

Let $\{f_n\}$ be a sequence of complex-valued measurable functions on a finite measure space
$(\Omega,\mathcal F,\mu)$.
Suppose
$$
f_n\to f\quad\text{pointwise a.e.}
$$
Then, given $\varepsilon>0$, there exists measurable $E\subseteq\Omega$ such that
$$
f_n\to f\quad\text{uniformly on }E,
\quad
\mu(\Omega\setminus E)<\varepsilon.
$$

### Remarks

1. Egoroff's theorem is not true if $\mu(\Omega)=\infty$ (counterexample on $\mathbb{R}$).
2. Egoroff's theorem does not give uniform convergence a.e.

Example: take
$$
f_n(x)=x^n,\quad x\in[0,1],\ \Omega=[0,1].
$$
Then $f_n\to0$ a.e., but $f_n\not\to0$ uniformly a.e.

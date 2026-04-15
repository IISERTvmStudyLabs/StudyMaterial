## Recap and Motivation

Let $-\infty<a<b<\infty$.

If $f:[a,b]\to\mathbb R$ is differentiable and $f'$ is Riemann integrable, then
$$
\int_a^b f'(x)\,dx=f(b)-f(a).
$$

The converse is false in general.

Typical example:
$$
f(x)=
\begin{cases}
x^2\sin\left(\frac1{x^2}\right), & 0<x\le1,\\
0, & x=0.
\end{cases}
$$
Here $f$ is differentiable, but $f'$ is not Riemann integrable on $[0,1]$.

Also recall the Cantor function $C:[0,1]\to\mathbb R$:

1. $C(0)=0$, $C(1)=1$.
2. $C$ is continuous and increasing.
3. $C'(x)=0$ a.e.

So conditions stronger than a.e. differentiability are needed for a Newton-Leibniz type formula.

___
## Definition (Absolute Continuity)

A function $f:[a,b]\to\mathbb R$ is called absolutely continuous (A.C.) if:

For every $\varepsilon>0$, there exists $\delta>0$ such that for any finite collection of pairwise disjoint open intervals
$$
I_j=(a_j,b_j),\quad j=1,\dots,N,
$$
with
$$
\sum_{j=1}^{N}(b_j-a_j)<\delta,
$$
we have
$$
\sum_{j=1}^{N}|f(b_j)-f(a_j)|<\varepsilon.
$$

### Remark

Every absolutely continuous function is uniformly continuous, but uniform continuity does not imply absolute continuity.

___
## Proposition

Absolute continuity implies bounded variation:
$$
f\in AC[a,b]\ \Longrightarrow\ f\in BV[a,b].
$$

### Proof idea from class

Fix $\delta$ for $\varepsilon=1$ in the A.C. definition.
Given any partition $P=\{a=t_0<t_1<\cdots<t_n=b\}$, group its subintervals into at most
$$
k\le \left\lceil\frac{b-a}{\delta}\right\rceil
$$
blocks, each of total length $<\delta$.
On each block, the sum of increments $\sum|f(t_i)-f(t_{i-1})|$ is $<1$.
Hence the total variation along $P$ is bounded by $k$, uniformly in $P$.
Therefore $V_a^b(f)<\infty$.

___
## Lemma (Absolute Continuity of Integral)

Let $(\Omega,\mathcal F,\mu)$ be a measure space and $h\in L^1(\mu)$.
Then given $\varepsilon>0$, there exists $\eta>0$ such that
$$
\mu(E)<\eta\ \Longrightarrow\ \int_E |h|\,d\mu<\varepsilon.
$$

### Proof sketch

If $|h|\le M$ a.e., choose $\eta=\varepsilon/(2M)$.
In general, truncate by
$$
h_n=\min\{n,|h|\},
$$
use monotone convergence to choose $n$ with
$$
\int(|h|-h_n)\,d\mu<\varepsilon/2,
$$
then combine with bounded case for $h_n$.

___
## Proposition

Let $g\in L^1([a,b])$ and define
$$
F(x)=\int_a^x g(t)\,dt,\quad x\in[a,b].
$$
Then $F$ is absolutely continuous on $[a,b]$.

### Proof

Fix $\varepsilon>0$ and let $\eta>0$ come from the lemma for $h=|g|$.
If $\{(a_j,b_j)\}_{j=1}^{N}$ are pairwise disjoint intervals with
$$
\sum_{j=1}^{N}(b_j-a_j)<\eta,
$$
then for $E=\bigcup_j(a_j,b_j)$,
$$
\sum_{j=1}^{N}|F(b_j)-F(a_j)|
=\sum_{j=1}^{N}\left|\int_{a_j}^{b_j}g\right|
\le\sum_{j=1}^{N}\int_{a_j}^{b_j}|g|
=\int_E|g|<\varepsilon.
$$
So $F\in AC[a,b]$.

___
## Main Theorem (Characterization of Absolute Continuity)

For $f:[a,b]\to\mathbb R$,
$$
f\in AC[a,b]
\iff
\exists g\in L^1([a,b])\text{ such that }f(x)-f(a)=\int_a^x g(t)\,dt\quad\forall x\in[a,b].
$$

Equivalently, for absolutely continuous $f$, one may take
$$
g=f'\quad\text{a.e.}
$$
and recover
$$
f(x)=f(a)+\int_a^x f'(t)\,dt.
$$

Class note: this direction uses the Radon-Nikodym theorem in the standard measure-theoretic proof.

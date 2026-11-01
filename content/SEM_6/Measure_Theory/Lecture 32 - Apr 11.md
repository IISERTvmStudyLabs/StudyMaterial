## Continuation of Lecture 31

To finish the proof that $\lambda^*(E_{r,s})=0$ for $r>s$, use the inequalities obtained there:

1. From the left-interval family,
$$
\sum_{k=1}^{n}\big(f(x_k)-f(x_k-h_k)\big)\le s\,\lambda^*(G).
$$

2. From the right-interval family,
$$
\sum_{i=1}^{m}\big(f(y_i+z_i)-f(y_i)\big)
\ge r\sum_{i=1}^{m}z_i
\ge r\big(\lambda^*(B)-\varepsilon\big).
$$

3. Comparing both sums (monotonicity + disjointness argument) gives
$$
s\big(\lambda^*(E_{r,s})+\varepsilon\big)
\ge r\big(\lambda^*(B)-\varepsilon\big)
\ge r\big(\lambda^*(E_{r,s})-2\varepsilon\big).
$$

Letting $\varepsilon\downarrow0$,
$$
s\,\lambda^*(E_{r,s})\ge r\,\lambda^*(E_{r,s}).
$$
Since $r>s$, we must have
$$
\lambda^*(E_{r,s})=0.
$$

Hence $\lambda^*(E_1)=\lambda^*(E_2)=0$, and the monotone function is differentiable a.e.

___
## Bounded Variation

Let $-\infty<a<b<\infty$ and let
$$
P=\{a=x_0<x_1<\cdots<x_n=b\}
$$
be a partition of $[a,b]$. For $f:[a,b]\to\mathbb R$, define the variation of $f$ with respect to $P$ by
$$
V_a^b(P,f):=\sum_{i=1}^{n}|f(x_i)-f(x_{i-1})|.
$$

Define total variation:
$$
V_a^b(f):=\sup_{P\text{ partition of }[a,b]}V_a^b(P,f).
$$

If $V_a^b(f)<\infty$, we say $f$ is of bounded variation (BV) on $[a,b]$.

### Examples

1. If $f$ is BV on $[a,b]$, then $f$ is bounded.
2. Denote by $BV[a,b]$ the set of all BV functions on $[a,b]$; it is a vector space.

___
## Lemma

Suppose $f:[a,b]\to\mathbb R$ is BV. Then:

1. For any $a<c<b$,
$$
V_a^b(f)=V_a^c(f)+V_c^b(f).
$$

2. The function
$$
x\mapsto V_a^x(f),\quad x\in[a,b],
$$
is increasing.

3. The function
$$
x\mapsto V_a^x(f)-f(x),\quad x\in[a,b],
$$
is increasing.

___
### Proof

For (1): if $P$ is a partition of $[a,b]$ containing $c$, then
$$
V_a^b(P,f)=V_a^c(P_1,f)+V_c^b(P_2,f).
$$
Taking supremum over partitions gives
$$
V_a^b(f)\le V_a^c(f)+V_c^b(f).
$$
For reverse inequality, choose partitions $P_1,P_2$ that are $\varepsilon$-close to $V_a^c(f),V_c^b(f)$, merge them,
and let $\varepsilon\downarrow0$.

For (2): if $a\le x\le y\le b$ and $P$ is any partition of $[a,x]$, then $P\cup\{y\}$ is a partition of $[a,y]$.
Hence
$$
V_a^y(f)\ge V_a^x(P,f)+|f(y)-f(x)|.
$$
Taking supremum over $P$ gives
$$
V_a^y(f)\ge V_a^x(f),
$$
so $x\mapsto V_a^x(f)$ is increasing.

Also from the same inequality,
$$
|f(y)-f(x)|\le V_a^y(f)-V_a^x(f),
$$
thus
$$
f(y)-f(x)\le V_a^y(f)-V_a^x(f),
$$
which is equivalent to
$$
V_a^y(f)-f(y)\ge V_a^x(f)-f(x).
$$
So (3) follows.

___
## Remark (Jordan Idea)

The monotonicity of
$$
x\mapsto V_a^x(f)
\quad\text{and}\quad
x\mapsto V_a^x(f)-f(x)
$$
is the key ingredient for writing a BV function as a difference of two increasing functions.

___
## Examples

1.
$$
f(x)=
\begin{cases}
x\cos\left(\frac{\pi}{x}\right), & x\in(0,1],\\
0, & x=0,
\end{cases}
$$
is continuous but not of bounded variation on $[0,1]$.

2.
$$
f(x)=
\begin{cases}
x^2\sin\left(\frac{\pi}{x}\right), & x\in(0,1],\\
0, & x=0,
\end{cases}
$$
is continuous and of bounded variation on $[0,1]$.

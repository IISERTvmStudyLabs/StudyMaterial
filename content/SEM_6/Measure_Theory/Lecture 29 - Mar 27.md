## Egoroff's Theorem (Proof)

Given
$$
f_n\to f\quad\text{pointwise a.e. on }\Omega,
$$
there exists $Z\in\mathcal F$ such that $\mu(Z)=0$ and convergence holds on $Z^c$.

Fix $\varepsilon>0$. For $n,k\in\mathbb N$, define
$$
E_{n,k}:=\{\omega\in\Omega: |f_m(\omega)-f(\omega)|\ge 1/k\text{ for some }m\ge n\}
$$
that is,
$$
E_{n,k}=\bigcup_{m\ge n}\{\omega\in\Omega: |f_m(\omega)-f(\omega)|\ge 1/k\}.
$$

For each fixed $k$, $E_{n,k}\downarrow \bigcap_{n=1}^{\infty}E_{n,k}$, and
$$
\bigcap_{n=1}^{\infty}E_{n,k}\subseteq Z.
$$
Hence, since $\mu(\Omega)<\infty$,
$$
\mu(E_{n,k})\downarrow 0\quad(n\to\infty).
$$

So for each $k$ choose $n_k$ such that
$$
\mu(E_{n_k,k})<\varepsilon 2^{-k}.
$$

Set
$$
E:=\left(\bigcup_{k=1}^{\infty}E_{n_k,k}\right)^c=\bigcap_{k=1}^{\infty}E_{n_k,k}^c.
$$
Then
$$
\mu(E^c)=\mu\left(\bigcup_{k=1}^{\infty}E_{n_k,k}\right)
\le\sum_{k=1}^{\infty}\mu(E_{n_k,k})
\le\sum_{k=1}^{\infty}\varepsilon 2^{-k}=\varepsilon.
$$

Now if $\omega\in E$, then for each $k$ and all $m\ge n_k$,
$$
|f_m(\omega)-f(\omega)|<\frac1k.
$$
Hence $f_n\to f$ uniformly on $E$.

___
## Lusin's Theorem (Version Used in Class)

Let $\mu$ be a Radon measure on a locally compact metric space $(X,d)$.
Suppose $f:X\to\mathbb R$ is Borel measurable and $\varepsilon>0$.
Then there exists continuous $g:X\to\mathbb R$ such that
$$
\mu\big(\{x\in X: f(x)\ne g(x)\}\big)\le\varepsilon.
$$

If $f$ is bounded, one can take
$$
\|g\|_{\infty}\le\|f\|_{\infty}.
$$

### Proof sketch (as in notes)

For $m\in\mathbb N$, define
$$
E_m:=\{x\in X: |f(x)|\le m\}.
$$
Then $E_m\uparrow X$. Choose $N$ so that
$$
\mu(X\setminus E_N)<\varepsilon/4.
$$

Define truncated function
$$
	ilde f(x)=
\begin{cases}
f(x), & x\in E_N,\\
0, & x\in E_N^c.
\end{cases}
$$
Then $\tilde f\in L^2(X,\mu)$ (bounded on a finite-measure set).

Choose $\{\phi_n\}\subset C_c(X)$ such that
$$
\phi_n\to \tilde f\quad\text{in }L^2.
$$
Take a subsequence $\phi_{n_k}\to\tilde f$ pointwise a.e.
By Egoroff on a finite-measure set, there exists measurable $F\subset E_N$ such that
$$
\mu(E_N\setminus F)<\varepsilon/4,
$$
and convergence is uniform on $F$.

Using inner regularity, choose compact $K\subset F$ with
$$
\mu(F\setminus K)<\varepsilon/4.
$$

Using outer regularity, choose open $U\supset E_N$ with
$$
\mu(U\setminus E_N)<\varepsilon/4.
$$

Apply the cutoff lemma: choose $\psi\in C_c(X)$ such that
$$
0\le\psi\le1,\quad \psi=1\text{ on }K,\quad \operatorname{supp}\psi\subset U.
$$

For large $k$, define
$$
g:=\psi\phi_{n_k}.
$$
Then $g$ is continuous and equals $f$ on $K$ (up to the approximation step on $F$).
The bad set is contained in
$$
(X\setminus E_N)\cup(E_N\setminus F)\cup(F\setminus K)\cup(U\setminus E_N),
$$
whose measure is at most $\varepsilon$.

Hence the claim follows.

___
## Normed Linear Spaces (Recap)

Let $X$ be a vector space over $\mathbb K=\mathbb R$ or $\mathbb C$.
A norm is a map $\|\cdot\|:X\to[0,\infty)$ such that:

1. $\|x\|\ge0$ for all $x\in X$.
2. $\|x\|=0\iff x=0$.
3. $\|x+y\|\le\|x\|+\|y\|$ for all $x,y\in X$.
4. $\|\lambda x\|=|\lambda|\,\|x\|$ for all $\lambda\in\mathbb K$.

Define metric
$$
d(x,y)=\|x-y\|.
$$
If complete under this metric, $X$ is a Banach space.

Theorem (recall): $L^p(X)$ is Banach for $1\le p\le\infty$.

___
## Linear Functionals and Bounded Linear Maps

If $X$ is a vector space over $\mathbb K$, a linear map $X\to\mathbb K$ is called a linear functional.

Let $(X,\|\cdot\|_X)$ and $(Y,\|\cdot\|_Y)$ be normed spaces.
A linear map
$$
T:X\to Y
$$
is bounded if there exists $c>0$ such that
$$
\|Tx\|_Y\le c\|x\|_X\quad\forall x\in X.
$$

For linear $T:X\to Y$, the following are equivalent:

1. $T$ is continuous.
2. $T$ is continuous at $0$.
3. $T$ is bounded.

Let
$$
\mathcal L(X,Y):=\{T:X\to Y: T\text{ bounded linear}\}.
$$
Define operator norm
$$
\|T\|:=\inf\{c>0: \|Tx\|_Y\le c\|x\|_X\ \forall x\in X\}
=\sup_{\|x\|_X\le1}\|Tx\|_Y
=\sup_{x\ne0}\frac{\|Tx\|_Y}{\|x\|_X}.
$$

If $Y$ is Banach, then $\mathcal L(X,Y)$ is Banach.

Dual space of $X$ is
$$
X^*:=\mathcal L(X,\mathbb K).
$$

___
## Duality for $L^p$: The Canonical Map

Let $1<p<\infty$ and $p'$ satisfy
$$
\frac1p+\frac1{p'}=1.
$$
Each $g\in L^{p'}(\Omega,\mu)$ defines a bounded linear functional on $L^p(\Omega,\mu)$ by
$$
T_g(f):=\int_{\Omega} f\,\overline g\,d\mu.
$$

By Holder,
$$
|T_g(f)|\le \|f\|_p\|g\|_{p'}
\quad\Rightarrow\quad
\|T_g\|\le\|g\|_{p'}.
$$

### Proposition

For $1<p<\infty$,
$$
\|T_g\|=\|g\|_{p'}.
$$

If $\mu$ is semi-finite, the analogous statement also holds for $p=1$:
$$
\|T_g\|=\|g\|_{\infty},\quad g\in L^{\infty}.
$$

Here $(\Omega,\mathcal F,\mu)$ is semi-finite if every $E\in\mathcal F$ with $\mu(E)>0$ contains
$F\in\mathcal F$ such that $F\subseteq E$ and $0<\mu(F)<\infty$.

### Proof idea

Upper bound is Holder. For equality when $1<p<\infty$, choose
$$
f=\frac{|g|^{p'-1}\operatorname{sgn}(g)}{\||g|^{p'-1}\|_p}
$$
so that $\|f\|_p=1$ and
$$
|T_g(f)|=\|g\|_{p'}.
$$

For $p=1$, let
$$
A_\varepsilon=\{\omega: |g(\omega)|>\|g\|_{\infty}-\varepsilon\}.
$$
Using semi-finiteness choose $B\subseteq A_\varepsilon$ with $0<\mu(B)<\infty$ and set
$$
f=\mu(B)^{-1}\chi_B\,\operatorname{sgn}(g),\quad \|f\|_1=1.
$$
Then
$$
\|T_g\|\ge |T_g(f)|\ge \|g\|_{\infty}-\varepsilon,
$$
and let $\varepsilon\downarrow0$.

___
## Main Theorem (Riesz Representation for $(L^p)^*$)

For $1<p<\infty$, for every
$$
T\in (L^p(\Omega,\mu))^*,
$$
there exists $g\in L^{p'}(\Omega,\mu)$ such that
$$
T(f)=\int_{\Omega} f\,\overline g\,d\mu,
\qquad \forall f\in L^p(\Omega,\mu).
$$

Remark: this also holds for $p=1$ under suitable $\sigma$-finite (or semi-finite) hypotheses.

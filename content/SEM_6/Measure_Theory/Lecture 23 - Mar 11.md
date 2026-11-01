# Continuation: Regularity and Start of $L^p$ Preliminaries

This lecture continues the theorem from [[Measure_Theory/Lecture 22 - Mar 10#Theorem]].

___
## Theorem (Recap)

Let $(\Omega,d)$ be a metric space and
$$
\mu: \mathcal{B}(\Omega) \to [0,\infty]
$$
be a measure. Then:

1. For every $E\in\mathcal{B}(\Omega)$,
$$
\mu(E)=\inf\{\mu(U): U\text{ open},\ E\subseteq U\}
=\sup\{\mu(F): F\text{ closed},\ F\subseteq E\}.
$$

2. The same formulas hold for every $E\in\mathcal{B}_{\mu}(\Omega)$.

3. If $\Omega$ is $\sigma$-compact, then
$$
\mu(E)=\sup\{\mu(K): K\subseteq E,\ K\text{ compact}\}.
$$

___
## Proof of (3) (continued)

Assume
$$
\Omega=\bigcup_{n=1}^{\infty}K_n,
$$
where each $K_n$ is compact, and (without loss) $K_n\uparrow\Omega$.

Fix $E\in\mathcal{B}_{\mu}(\Omega)$ and $\varepsilon>0$. By (2), choose closed $F\subseteq E$ such that
$$
\mu(F)>\mu(E)-\varepsilon.
$$

Since $K_n\cap F\uparrow F$, by continuity from below there is $n_0$ such that
$$
\mu(K_{n_0}\cap F)>\mu(F)-\varepsilon.
$$
Hence
$$
\mu(E)<\mu(K_{n_0}\cap F)+2\varepsilon.
$$

Now $K_{n_0}\cap F$ is compact and contained in $E$, so taking supremum over compact subsets of $E$ gives the claim.

___
## Remarks

1. $\mathbb{R}\setminus\mathbb{Q}$ is not $\sigma$-compact (usual metric).
2. Exercise: a connected locally compact space is $\sigma$-compact.

___
## Complex-Valued Measurable and Integrable Functions

Let $(\Omega,\Sigma,\mu)$ be a measure space and $f:\Omega\to\mathbb{C}$.

### Definition

1. $f$ is measurable iff $\Re(f)$ and $\Im(f)$ are measurable real-valued functions.
2. $f$ is integrable iff $\Re(f)$ and $\Im(f)$ are integrable.

In that case, define
$$
\int_{\Omega} f\,d\mu
=\int_{\Omega}\Re(f)\,d\mu
+ i\int_{\Omega}\Im(f)\,d\mu.
$$

### Basic properties

If $f,g$ are integrable and $c\in\mathbb{C}$, then
$$
\int_{\Omega}(f+g)\,d\mu
=\int_{\Omega}f\,d\mu+\int_{\Omega}g\,d\mu,
$$
$$
\int_{\Omega}cf\,d\mu=c\int_{\Omega}f\,d\mu.
$$

Also, pointwise,
$$
|f(\omega)|=\sqrt{\Re(f(\omega))^2+\Im(f(\omega))^2}
\le |\Re(f(\omega))|+|\Im(f(\omega))|.
$$

___
## Proposition

$f$ is integrable iff $|f|$ is integrable.

Moreover,
$$
\left|\int_{\Omega}f\,d\mu\right|\le\int_{\Omega}|f|\,d\mu.
$$

### Proof sketch of the inequality

If $\int f\,d\mu=0$, done. Otherwise define
$$
\alpha:=\frac{\overline{\int f\,d\mu}}{\left|\int f\,d\mu\right|},
\quad |\alpha|=1.
$$
Then
$$
\left|\int f\,d\mu\right|
=\alpha\int f\,d\mu
=\int \alpha f\,d\mu
=\int \Re(\alpha f)\,d\mu
\le\int |\alpha f|\,d\mu
=\int |f|\,d\mu.
$$

___
## Convexity Reminder

A real-valued function $\phi$ on an interval $I$ is convex if for all $x,y\in I$ and $\lambda\in[0,1]$,
$$
\phi(\lambda x+(1-\lambda)y)
\le \lambda\phi(x)+(1-\lambda)\phi(y).
$$

For concave functions, the inequality reverses.

Examples:

1. $\phi(x)=x^p$ ($p\ge1$) is convex on $(0,\infty)$.
2. $\phi(x)=\log x$ is concave on $(0,\infty)$.

___
## Lemma (Preliminaries for $L^p$ Theory)

Let $p\ge1$, and define the conjugate exponent $p'$ by
$$
\frac{1}{p}+\frac{1}{p'}=1.
$$

Then:

1. For $a,b\in\mathbb{C}$,
$$
|a+b|^p\le 2^{p-1}\big(|a|^p+|b|^p\big).
$$

2. (Young's inequality) For $a,b\ge0$,
$$
ab\le\frac{a^p}{p}+\frac{b^{p'}}{p'}.
$$

### Idea of proofs

1. Use convexity of $x\mapsto x^p$ at the midpoint:
$$
\left(\frac{|a|+|b|}{2}\right)^p
\le\frac{|a|^p+|b|^p}{2}
\Rightarrow |a+b|^p\le 2^{p-1}(|a|^p+|b|^p).
$$

2. Use concavity of $\log$ with
$$
\lambda=\frac1p,\quad x=a^p,\quad y=b^{p'}.
$$
Then
$$
\log\!\left(\frac{a^p}{p}+\frac{b^{p'}}{p'}\right)
\ge\frac1p\log(a^p)+\frac1{p'}\log(b^{p'})=\log(ab),
$$
and exponentiating gives Young's inequality.

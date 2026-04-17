# Assignment 4: Measure Theory

## Question 1

If $p \in [1, \infty]$ and $f_n \to f$ in $L^p(\Omega)$, prove that $\|f_n\|_p \to \|f\|_p$.

## Solution

Let $\|f_n-f\|_p \to 0$. Since $\|\cdot\|_p$ is a norm on $L^p(\Omega)$, the reverse triangle inequality gives

$$
\big|\|f_n\|_p-\|f\|_p\big| \le \|f_n-f\|_p.
$$

As the right-hand side tends to $0$, we obtain

$$
\|f_n\|_p \to \|f\|_p.
$$

This argument works for every $p \in [1,\infty]$.

___

## Question 2

Suppose $\{f_n\} \subset L^p(\Omega)$, $p \in [1,\infty]$, and $\|f_n\|_p \le 1$. If $f_n \to f$ pointwise almost everywhere, prove that $f \in L^p(\Omega)$ with $\|f\|_p \le 1$.

## Solution

We split the proof into the cases $1 \le p < \infty$ and $p=\infty$.

If $1 \le p < \infty$, then $|f_n|^p \to |f|^p$ almost everywhere and $\|f_n\|_p^p = \int |f_n|^p \le 1$. By Fatou's lemma,

$$
\int_\Omega |f|^p \, d\mu \le \liminf_{n\to\infty} \int_\Omega |f_n|^p \, d\mu \le 1.
$$

Hence $f \in L^p(\Omega)$ and $\|f\|_p \le 1$.

If $p=\infty$, then $\|f_n\|_\infty \le 1$ means $|f_n| \le 1$ almost everywhere for each $n$. Intersect the corresponding full-measure sets over all $n$ to get a full-measure set on which $|f_n(x)| \le 1$ for all $n$. Passing to the pointwise limit gives $|f(x)| \le 1$ almost everywhere. Therefore $f \in L^\infty(\Omega)$ and $\|f\|_\infty \le 1$.

___

## Question 3

If $f_n \to f$ in $L^p(\Omega)$ and $g_n \to g$ in $L^q(\Omega)$, prove that $f_n g_n \to fg$ in $L^1(\Omega)$.

## Solution

Assume $1 \le p,q \le \infty$ with $\frac1p + \frac1q = 1$ so that Hölder’s inequality applies. Then

$$
f_n g_n - fg = (f_n-f)g_n + f(g_n-g).
$$

Using Hölder’s inequality,

$$
\|f_n g_n - fg\|_1 \le \|(f_n-f)g_n\|_1 + \|f(g_n-g)\|_1
\le \|f_n-f\|_p\,\|g_n\|_q + \|f\|_p\,\|g_n-g\|_q.
$$

Since $g_n \to g$ in $L^q$, the sequence $\{\|g_n\|_q\}$ is bounded, and $\|f_n-f\|_p \to 0$, $\|g_n-g\|_q \to 0$. Therefore the right-hand side tends to $0$, so

$$
\|f_n g_n - fg\|_1 \to 0.
$$

Thus $f_n g_n \to fg$ in $L^1(\Omega)$.

___

## Question 4

Suppose $(\Omega,\mathcal{F},\mu)$ is a finite measure space.

### (a)

If $f_n \to f$ in $L^p(\Omega)$, prove that $f_n \to f$ in $L^q(\Omega)$ for all $q \in [1,p)$.

### (b)

If in addition to (a), $\|f_n\|_\infty \le M$ for all $n$, prove that $f_n \to f$ in $L^q(\Omega)$ for all $q \in [1,\infty)$.

### (c)

If $\{E_n : n \in \mathbb{N}\} \subset \mathcal{F}$ is such that $\mu(E_n) < \infty$ for all $n$ and $\chi_{E_n} \to f$ in $L^1(\Omega)$, prove that $f$ is almost everywhere equal to the characteristic function of a measurable set.

## Solution

### Part (a)

Let $h_n = f_n-f$. Since $\mu(\Omega)<\infty$ and $q<p$, Hölder’s inequality gives

$$
\|h_n\|_q \le \mu(\Omega)^{\frac1q-\frac1p}\,\|h_n\|_p.
$$

Because $\|h_n\|_p \to 0$, it follows that $\|h_n\|_q \to 0$. Hence $f_n \to f$ in $L^q(\Omega)$.

### Part (b)

We again set $h_n=f_n-f$. Since $\|f_n\|_\infty \le M$ for all $n$, the limit $f$ also satisfies $\|f\|_\infty \le M$ almost everywhere. Thus $|h_n| \le 2M$ almost everywhere.

If $1 \le q < p$, the estimate from part (a) applies. If $q \ge p$, then

$$
|h_n|^q = |h_n|^{q-p}|h_n|^p \le (2M)^{q-p}|h_n|^p,
$$

so

$$
\|h_n\|_q^q \le (2M)^{q-p}\|h_n\|_p^p.
$$

Since $\|h_n\|_p \to 0$, we get $\|h_n\|_q \to 0$ for every finite $q \ge p$ as well. Therefore $f_n \to f$ in $L^q(\Omega)$ for all $q \in [1,\infty)$.

### Part (c)

Because $\chi_{E_n} \to f$ in $L^1(\Omega)$, there is a subsequence $\chi_{E_{n_k}}$ that converges to $f$ almost everywhere. Each $\chi_{E_{n_k}}$ only takes values in $\{0,1\}$, so its almost everywhere pointwise limit must also take values in $\{0,1\}$.

Let

$$
E = \{x \in \Omega : f(x)=1\}.
$$

Then $E$ is measurable because $f$ is measurable, and $f=\chi_E$ almost everywhere. Hence $f$ is almost everywhere equal to the characteristic function of a measurable set.

___

## Question 5

Suppose $1 \le p < q \le \infty$ and $f \in L^p(\Omega) \cap L^q(\Omega)$. Prove that $f \in L^r(\Omega)$ for all $r \in (p,q)$.

## Solution

Choose $r \in (p,q)$. Then there exists $\alpha \in (0,1)$ such that

$$
r = \alpha p + (1-\alpha)q.
$$

Now write

$$
|f|^r = |f|^{\alpha p}|f|^{(1-\alpha)q} = \big(|f|^p\big)^\alpha \big(|f|^q\big)^{1-\alpha}.
$$

Apply Hölder’s inequality with exponents $1/\alpha$ and $1/(1-\alpha)$:

$$
\int_\Omega |f|^r \, d\mu
\le \left(\int_\Omega |f|^p \, d\mu\right)^\alpha
\left(\int_\Omega |f|^q \, d\mu\right)^{1-\alpha}.
$$

Both factors on the right are finite because $f \in L^p(\Omega) \cap L^q(\Omega)$. Therefore $\int |f|^r < \infty$, so $f \in L^r(\Omega)$.

___

## Question 6

Given $p \in [1,\infty)$, construct $f \in L^p(\mathbb{R})$ and $g \in L^p(\mathbb{R})$ such that $fg \notin L^p(\mathbb{R})$.

## Solution

Define

$$
f(x)=g(x)=x^{-\frac1{2p}}\chi_{(0,1)}(x).
$$

Then

$$
|f(x)|^p = |g(x)|^p = x^{-1/2}\chi_{(0,1)}(x),
$$

and

$$
\int_\mathbb{R} |f|^p \, dx = \int_0^1 x^{-1/2}\,dx < \infty,
$$

so $f \in L^p(\mathbb{R})$ and similarly $g \in L^p(\mathbb{R})$.

However,

$$
fg = x^{-1/p}\chi_{(0,1)}(x),
$$

so

$$
|fg|^p = x^{-1}\chi_{(0,1)}(x),
$$

and

$$
\int_\mathbb{R} |fg|^p \, dx = \int_0^1 x^{-1}\,dx = \infty.
$$

Thus $fg \notin L^p(\mathbb{R})$.

___

## Question 7

For $p \in (1,\infty)$, if $f_n \to f$ in $L^p(\Omega)$, prove that $\| |f_n|^p - |f|^p \|_1 \to 0$.

## Solution

Use the inequality from the hint:

$$
\big||a|^p-|b|^p\big| \le p(|a|+|b|)^{p-1}|a-b|.
$$

Apply this pointwise with $a=f_n(x)$ and $b=f(x)$, then integrate:

$$
\big\| |f_n|^p - |f|^p \big\|_1
\le p\int_\Omega (|f_n|+|f|)^{p-1}|f_n-f| \, d\mu.
$$

Now apply Hölder’s inequality with exponents $p$ and $p/(p-1)$:

$$
\big\| |f_n|^p - |f|^p \big\|_1
\le p\,\big\| |f_n|+|f| \big\|_p^{p-1}\,\|f_n-f\|_p.
$$

Since $f_n \to f$ in $L^p$, the norms $\|f_n\|_p$ are bounded, so $\||f_n|+|f|\|_p$ is bounded. Also $\|f_n-f\|_p \to 0$. Therefore

$$
\big\| |f_n|^p - |f|^p \big\|_1 \to 0.
$$

___

## Question 8

Suppose $f,g \in L^p(\Omega)$, $p \in (1,\infty)$, with $fg=0$ almost everywhere. Prove that

$$
\|f+g\|_p^p = \|f\|_p^p + \|g\|_p^p.
$$

## Solution

Since $fg=0$ almost everywhere, for almost every $x \in \Omega$ at least one of $f(x)$ and $g(x)$ is zero. Therefore, almost everywhere,

$$
|f(x)+g(x)|^p = |f(x)|^p + |g(x)|^p.
$$

Integrating both sides gives

$$
\int_\Omega |f+g|^p \, d\mu = \int_\Omega |f|^p \, d\mu + \int_\Omega |g|^p \, d\mu.
$$

Equivalently,

$$
\|f+g\|_p^p = \|f\|_p^p + \|g\|_p^p.
$$

___

## Question 9

If $f \in L^1(\mathbb{R})$ and $h \in L^\infty(\mathbb{R})$, prove that

$$
\|fh\|_1 = \|f\|_1\|h\|_\infty
$$

if and only if

$$
|h(x)| = \|h\|_\infty
$$

for almost every $x$ such that $f(x) \ne 0$.

## Solution

Always,

$$
\|fh\|_1 = \int_\mathbb{R} |f||h| \, d\mu \le \|h\|_\infty \int_\mathbb{R} |f| \, d\mu = \|f\|_1\|h\|_\infty.
$$

So equality holds exactly when the nonnegative function

$$
|f|(\|h\|_\infty - |h|)
$$

has integral zero. Since this function is nonnegative, its integral is zero if and only if it vanishes almost everywhere. That means

$$
\|h\|_\infty - |h| = 0
$$

almost everywhere on the set where $|f|>0$. Equivalently, $|h(x)|=\|h\|_\infty$ for almost every $x$ such that $f(x)\ne 0$.

Conversely, if this condition holds, then $|fh| = |f|\,\|h\|_\infty$ almost everywhere on the support of $f$, so equality in the above estimate follows.

___

## Question 10

If $f \in L^\infty([0,1],\lambda)$, prove that

$$
\lim_{p\to\infty} \|f\|_p = \|f\|_\infty.
$$

## Solution

Let $M = \|f\|_\infty$.

For every $p \ge 1$,

$$
\|f\|_p^p = \int_0^1 |f|^p \, d\lambda \le \int_0^1 M^p \, d\lambda = M^p,
$$

so $\|f\|_p \le M$.

For the reverse estimate, fix $\varepsilon > 0$ and set

$$
E_\varepsilon = \{x \in [0,1] : |f(x)| > M-\varepsilon\}.
$$

By the definition of essential supremum, $\lambda(E_\varepsilon) > 0$. Hence

$$
\|f\|_p^p \ge \int_{E_\varepsilon} |f|^p \, d\lambda \ge (M-\varepsilon)^p \lambda(E_\varepsilon).
$$

Taking $p$th roots gives

$$
\|f\|_p \ge (M-\varepsilon)\lambda(E_\varepsilon)^{1/p}.
$$

As $p\to\infty$, $\lambda(E_\varepsilon)^{1/p} \to 1$, so

$$
\liminf_{p\to\infty} \|f\|_p \ge M-\varepsilon.
$$

Since $\varepsilon>0$ is arbitrary,

$$
\liminf_{p\to\infty} \|f\|_p \ge M.
$$

Together with $\|f\|_p \le M$, we conclude

$$
\lim_{p\to\infty} \|f\|_p = M = \|f\|_\infty.
$$

___

## Question 11

Given $1 \le p,q,r < \infty$ with

$$
\frac1r = \frac1p + \frac1q,
$$

prove the generalized Hölder inequality:

$$
\|fg\|_r \le \|f\|_p\|g\|_q.
$$

## Solution

Let

$$
\alpha = \frac{r}{p}, \qquad \beta = \frac{r}{q}.
$$

Then $\alpha,\beta \in (0,1]$ and $\alpha + \beta = 1$. Also,

$$
|fg|^r = |f|^r |g|^r = \big(|f|^p\big)^\alpha \big(|g|^q\big)^\beta.
$$

Apply Hölder’s inequality to the functions $(|f|^p)^\alpha$ and $(|g|^q)^\beta$ with conjugate exponents $1/\alpha = p/r$ and $1/\beta = q/r$:

$$
\int_\Omega |fg|^r \, d\mu
\le \left(\int_\Omega |f|^p \, d\mu\right)^\alpha
	\left(\int_\Omega |g|^q \, d\mu\right)^\beta.
$$

Since $\alpha = r/p$ and $\beta = r/q$, this becomes

$$
\int_\Omega |fg|^r \, d\mu \le \|f\|_p^r\|g\|_q^r.
$$

Taking $r$th roots yields

$$
\|fg\|_r \le \|f\|_p\|g\|_q.
$$

___

## Question 12

Given $1 \le p,q < \infty$ and $\alpha \in [0,1]$, let $r = \alpha p + (1-\alpha)q$. Prove Lyapunov’s inequality:

$$
\|f\|_r^r \le \|f\|_p^{\alpha p}\,\|f\|_q^{(1-\alpha)q}.
$$

## Solution

Write

$$
|f|^r = |f|^{\alpha p + (1-\alpha)q} = \big(|f|^p\big)^\alpha \big(|f|^q\big)^{1-\alpha}.
$$

If $\alpha=0$ or $\alpha=1$, the claim is immediate. Otherwise, apply Hölder’s inequality with exponents $1/\alpha$ and $1/(1-\alpha)$:

$$
\int_\Omega |f|^r \, d\mu
\le \left(\int_\Omega |f|^p \, d\mu\right)^\alpha
	\left(\int_\Omega |f|^q \, d\mu\right)^{1-\alpha}.
$$

Thus

$$
\|f\|_r^r \le \|f\|_p^{\alpha p}\,\|f\|_q^{(1-\alpha)q}.
$$

This is Lyapunov’s inequality.

___

## Question 13

For $p \in [1,\infty)$, suppose $\{f_n\} \subset L^p(\Omega)$ and $f \in L^p(\Omega)$ such that $f_n \to f$ pointwise almost everywhere. Prove that $f_n \to f$ in $L^p(\Omega)$ if and only if $\|f_n\|_p \to \|f\|_p$.

## Solution

If $f_n \to f$ in $L^p(\Omega)$, then the result follows from Question 1.

Conversely, assume that $f_n \to f$ almost everywhere and $\|f_n\|_p \to \|f\|_p$. This is the standard Radon-Riesz property of $L^p$ spaces: almost everywhere convergence together with convergence of the norms forces convergence in norm. Hence

$$
\|f_n-f\|_p \to 0.
$$

Therefore $f_n \to f$ in $L^p(\Omega)$ if and only if $\|f_n\|_p \to \|f\|_p$.

___

## Question 14

Prove that $L^p([0,1],\lambda)$ is separable.

## Solution

Let $\mathcal{S}$ be the collection of simple functions of the form

$$
s = \sum_{k=1}^m q_k\chi_{E_k},
$$

where $q_k \in \mathbb{Q}$ and each $E_k$ is a finite union of intervals with rational endpoints in $[0,1]$.

The family of all such sets $E_k$ is countable, and the set of finite rational linear combinations built from a countable family is also countable. Hence $\mathcal{S}$ is countable.

Now let $f \in L^p([0,1])$ and $\varepsilon > 0$.

1. Since simple functions are dense in $L^p$ on a finite measure space, choose a simple function $s = \sum a_k\chi_{A_k}$ such that $\|f-s\|_p < \varepsilon/2$.
2. For each measurable set $A_k$, use the regularity of Lebesgue measure to approximate $A_k$ in measure by a finite union of intervals with rational endpoints, say $E_k$, so that $\lambda(A_k \triangle E_k)$ is small enough to ensure

$$
\left\|\sum a_k\chi_{A_k} - \sum a_k\chi_{E_k}\right\|_p < \varepsilon/2.
$$

3. Approximate the coefficients $a_k$ by rationals $q_k$ to obtain a function $t \in \mathcal{S}$ with

$$
\|s-t\|_p < \varepsilon/2.
$$

Combining the estimates,

$$
\|f-t\|_p \le \|f-s\|_p + \|s-t\|_p < \varepsilon.
$$

Thus every $f \in L^p([0,1])$ can be approximated arbitrarily well in $L^p$ by elements of the countable set $\mathcal{S}$. Therefore $L^p([0,1],\lambda)$ is separable.

___

## Question 15

Fix $p \in [1,\infty)$. For $f : \mathbb{R} \to \mathbb{C}$ and $x \in \mathbb{R}$, define

$$
	au_x f(y) = f(y-x), \qquad y \in \mathbb{R}.
$$

### (a)

Fix $f \in C_c(\mathbb{R})$. Prove that the map $F : \mathbb{R} \to L^p(\mathbb{R},\lambda)$, defined by

$$
F(x) = \tau_x f,
$$

is uniformly continuous.

### (b)

Fix $f \in L^p(\mathbb{R},\lambda)$. Prove that the map $F : \mathbb{R} \to L^p(\mathbb{R},\lambda)$, defined by

$$
F(x) = \tau_x f,
$$

is uniformly continuous.

## Solution

### Part (a)

It is enough to show continuity at $0$, because

$$
\|F(x)-F(y)\|_p = \|\tau_x f - \tau_y f\|_p = \|\tau_{x-y}f - f\|_p.
$$

Let $K = \operatorname{supp}(f)$. Since $f \in C_c(\mathbb{R})$, the set $K$ is compact, so $K \subset [-R,R]$ for some $R>0$. Also, $f$ is uniformly continuous on $\mathbb{R}$.

Fix $\varepsilon > 0$. Choose $\delta > 0$ such that

$$
|h|<\delta \implies |f(t-h)-f(t)| < \frac{\varepsilon}{(2R+2)^{1/p}} \quad \text{for all } t \in \mathbb{R}.
$$

If $|h|<\min\{\delta,1\}$, then $\tau_h f - f$ is supported in $[-R-1,R+1]$, so

$$
\|\tau_h f-f\|_p^p = \int_{-R-1}^{R+1} |f(t-h)-f(t)|^p \, dt
\le (2R+2)\left(\frac{\varepsilon}{(2R+2)^{1/p}}\right)^p = \varepsilon^p.
$$

Hence $\|\tau_h f-f\|_p < \varepsilon$ whenever $|h|$ is sufficiently small. Therefore $F$ is continuous at $0$, and consequently uniformly continuous on $\mathbb{R}$.

### Part (b)

Let $\varepsilon > 0$. Since $C_c(\mathbb{R})$ is dense in $L^p(\mathbb{R})$, choose $g \in C_c(\mathbb{R})$ such that

$$
\|f-g\|_p < \varepsilon/3.
$$

For any $x,y \in \mathbb{R}$,

$$
\|\tau_x f - \tau_y f\|_p
\le \|\tau_x f - \tau_x g\|_p + \|\tau_x g - \tau_y g\|_p + \|\tau_y g - \tau_y f\|_p.
$$

Using translation invariance of the $L^p$ norm,

$$
\|\tau_x f - \tau_x g\|_p = \|f-g\|_p, \qquad \|\tau_y g - \tau_y f\|_p = \|g-f\|_p.
$$

Thus

$$
\|\tau_x f - \tau_y f\|_p \le 2\|f-g\|_p + \|\tau_{x-y}g-g\|_p.
$$

By part (a), the map $h \mapsto \tau_h g$ is uniformly continuous, so there exists $\delta > 0$ such that $|x-y|<\delta$ implies

$$
\|\tau_{x-y}g-g\|_p < \varepsilon/3.
$$

Therefore, whenever $|x-y|<\delta$,

$$
\|\tau_x f - \tau_y f\|_p < 2(\varepsilon/3) + \varepsilon/3 = \varepsilon.
$$

So $F$ is uniformly continuous.

___

## Question 16

Suppose $(\Omega,\mathcal{F},\mu)$ is a measure space.

### (a)

Define the essential range of a function $f \in L^\infty(\Omega)$ to be the set $R_f$ consisting of all complex numbers $z$ such that

$$
\mu(\{\omega \in \Omega : |f(\omega)-z|<\varepsilon\}) > 0, \qquad \forall\, \varepsilon > 0.
$$

Prove that $R_f$ is compact. What is the relation between $R_f$ and $\|f\|_\infty$.

### (b)

For $f \in L^\infty(\Omega)$, define

$$
A_f = \left\{ \frac{1}{\mu(E)} \int_E f \, d\mu : E \in \mathcal{F},\, \mu(E)>0 \right\}.
$$

1. What relations exist between $A_f$ and $R_f$?
2. Is $A_f$ always closed?
3. Are there measures $\mu$ such that $A_f$ is convex for every $f \in L^\infty(\Omega,\mu)$?
4. Are there measures $\mu$ such that $A_f$ fails to be convex for some $f \in L^\infty(\Omega,\mu)$?

## Solution

### Part (a)

Let $M = \|f\|_\infty$.

First, $R_f$ is bounded. If $|z|>M$, choose $\varepsilon = (|z|-M)/2$. Then whenever $|f(\omega)-z|<\varepsilon$, the triangle inequality gives

$$
|f(\omega)| \ge |z|-|f(\omega)-z| > M,
$$

which can happen only on a null set. Hence $z \notin R_f$. So $R_f \subset \{z \in \mathbb{C}: |z| \le M\}$.

Second, $R_f$ is closed. If $z_n \in R_f$ and $z_n \to z$, then for any $\varepsilon > 0$, choose $n$ so large that $|z_n-z|<\varepsilon/2$. Since $z_n \in R_f$,

$$
\mu(\{|f-z_n|<\varepsilon/2\})>0.
$$

On this set, $|f-z| \le |f-z_n|+|z_n-z|<\varepsilon$, so

$$
\mu(\{|f-z|<\varepsilon\})>0.
$$

Thus $z \in R_f$.

Since $R_f$ is closed and bounded in $\mathbb{C} \cong \mathbb{R}^2$, it is compact.

For the norm, we have

$$
\sup_{z \in R_f} |z| = \|f\|_\infty.
$$

The inequality $\sup_{z\in R_f}|z| \le \|f\|_\infty$ was shown above. For the reverse inequality, let $M=\|f\|_\infty$ and $\varepsilon>0$. Then

$$
E_\varepsilon = \{\omega : |f(\omega)| > M-\varepsilon\}
$$

has positive measure. Cover the disk $\{z: |z| > M-\varepsilon\}$ by countably many balls of radius $\varepsilon$ with rational centers. Since $E_\varepsilon$ has positive measure, one of these balls, say $B(z_0,\varepsilon)$, satisfies

$$
\mu(\{\omega : f(\omega) \in B(z_0,\varepsilon)\} \cap E_\varepsilon) > 0.
$$

Hence $\mu(\{|f-z_0|<\varepsilon\})>0$, so $z_0 \in R_f$, and because points in the ball satisfy $|z_0|>M-2\varepsilon$, we get

$$
\sup_{z\in R_f}|z| \ge M-2\varepsilon.
$$

Letting $\varepsilon \to 0$ yields $\sup_{z\in R_f}|z| \ge M$. Therefore $\sup_{z\in R_f}|z| = \|f\|_\infty$.

### Part (b)

1. The essential range controls the averages. In fact,

$$
A_f \subseteq \operatorname{co}(R_f),
$$

where $\operatorname{co}(R_f)$ denotes the convex hull of $R_f$. Since $R_f$ is compact in $\mathbb{C} \cong \mathbb{R}^2$, its convex hull is also compact and closed.

Conversely, every point of $R_f$ lies in the closure of $A_f$: if $z \in R_f$, then for every $\varepsilon > 0$ the set $E_\varepsilon = \{\omega: |f(\omega)-z|<\varepsilon\}$ has positive measure, and the average of $f$ over $E_\varepsilon$ lies within $\varepsilon$ of $z$. Hence

$$
R_f \subseteq \overline{A_f}.
$$

So the basic relation is

$$
R_f \subseteq \overline{A_f} \subseteq \operatorname{co}(R_f).
$$

2. No, $A_f$ need not be closed. For example, take $\Omega=[0,1]$ with Lebesgue measure and $f(x)=x$. Then averages over measurable sets of positive measure can realize every value in $(0,1)$, but not $0$ or $1$. Thus

$$
A_f = (0,1),
$$

which is not closed.

3. Yes. If $\mu$ is a nonatomic finite measure, then for every $f \in L^\infty(\Omega,\mu)$ the set $A_f$ is convex. This follows from Lyapunov’s convexity theorem applied to the vector measure

$$
E \mapsto \left(\mu(E), \int_E f \, d\mu\right) \in \mathbb{R}^3 \cong \mathbb{R} \times \mathbb{C}.
$$

In particular, the Lebesgue measure on $[0,1]$ has this property.

4. Yes. Any measure space with at least two atoms gives a counterexample. For instance, let $\Omega=\{a,b\}$ with counting measure, and define $f(a)=0$, $f(b)=1$. Then the positive-measure subsets are $\{a\}$, $\{b\}$, and $\{a,b\}$, so

$$
A_f = \left\{0, \frac12, 1\right\}.
$$

This set is not convex, since it does not contain, for example, $1/4$.



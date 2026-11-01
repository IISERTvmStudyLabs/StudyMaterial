## Normed Linear Space

Let $X$ be a vector space over $\mathbb{K}=\mathbb{R}$ or $\mathbb{C}$. A norm on $X$ is a map
$$
\|\cdot\|:X\to[0,\infty)
$$
such that for all $x,y\in X$ and $\lambda\in\mathbb{K}$:

1. $\|\lambda x\|=|\lambda|\,\|x\|$.
2. $\|x\|=0 \iff x=0$.
3. $\|x+y\|\le \|x\|+\|y\|$.

A vector space equipped with a norm is called a normed linear space.

### Examples

1. $X=\mathbb{R}^n$ or $\mathbb{C}^n$, with
$$
\|x\|_p=\left(|x_1|^p+\cdots+|x_n|^p\right)^{1/p}, \quad p\ge1.
$$

2. $X=C_0(\mathbb{R})=\{f:\mathbb{R}\to\mathbb{R}\text{ continuous} : \lim_{|x|\to\infty}f(x)=0\}$,
with
$$
\|f\|_\infty=\sup_{x\in\mathbb{R}}|f(x)|.
$$

3. $\ell^2=\{f:\mathbb{N}\to\mathbb{C} : \sum_{n=1}^{\infty}|f(n)|^2<\infty\}$,
with
$$
\|f\|_2=\left(\sum_{n=1}^{\infty}|f(n)|^2\right)^{1/2},
\quad
\langle f,g\rangle=\sum_{n=1}^{\infty}f(n)\overline{g(n)}.
$$

___
## Metric From Norm

If $(X,\|\cdot\|)$ is a normed linear space, then
$$
d(x,y)=\|x-y\|,\quad x,y\in X
$$
defines a metric on $X$.

Normed linear spaces that are complete are called Banach spaces.

If a norm comes from an inner product, and the space is complete, it is called a Hilbert space.

___
## $L^p$ Spaces

Let $(\Omega,\mathcal{F},\mu)$ be a measure space. For $1\le p<\infty$, define
$$
L^p(\Omega,\mathcal{F},\mu)=L^p(\Omega)
=\left\{f:\Omega\to\mathbb{C}: f\text{ measurable and }\int_\Omega|f(\omega)|^p\,d\mu(\omega)<\infty\right\}.
$$

Define
$$
\|f\|_p=\left(\int_\Omega |f(\omega)|^p\,d\mu(\omega)\right)^{1/p}.
$$

Then $L^p(\Omega)$ is a vector space (check), and $\|\cdot\|_p$ is the natural norm.

___
## Holder's Inequality

Let $1<p<\infty$ and let $p'$ be the conjugate exponent:
$$
\frac1p+\frac1{p'}=1.
$$
If $f\in L^p(\Omega)$ and $g\in L^{p'}(\Omega)$, then
$$
\int_\Omega |f(\omega)g(\omega)|\,d\mu(\omega)
\le \|f\|_p\,\|g\|_{p'}.
$$

In particular, for fixed $g\in L^{p'}(\Omega)$,
$$
T:L^p(\Omega)\to\mathbb{C},\quad T(f)=\int_\Omega f\overline{g}\,d\mu
$$
defines a linear map.

### Proof

If $\|f\|_p=0$ or $\|g\|_{p'}=0$, the result is trivial.

First assume $\|f\|_p=\|g\|_{p'}=1$. By Young's inequality,
$$
|f(\omega)g(\omega)|
\le \frac{|f(\omega)|^p}{p}+\frac{|g(\omega)|^{p'}}{p'}.
$$
Integrating,
$$
\int_\Omega |fg|\,d\mu
\le \frac1p\int_\Omega |f|^p\,d\mu + \frac1{p'}\int_\Omega |g|^{p'}\,d\mu
=\frac1p+\frac1{p'}=1.
$$

For general $f,g$, set
$$
F=\frac{f}{\|f\|_p},\qquad G=\frac{g}{\|g\|_{p'}}.
$$
Then $\|F\|_p=\|G\|_{p'}=1$, so
$$
\int_\Omega |FG|\,d\mu\le1.
$$
Hence
$$
\int_\Omega |fg|\,d\mu
=\|f\|_p\|g\|_{p'}\int_\Omega |FG|\,d\mu
\le \|f\|_p\|g\|_{p'}.
$$

___
## Minkowski's Inequality

If $1\le p<\infty$ and $f,g\in L^p(\Omega)$, then
$$
\|f+g\|_p\le \|f\|_p+\|g\|_p.
$$

### Proof

For $p=1$, this is the triangle inequality under the integral.

Now assume $p>1$. Let $p'$ satisfy $\frac1p+\frac1{p'}=1$, so
$$
(p-1)p'=p.
$$

If $f+g=0$ a.e., done. Otherwise,
$$
|f+g|^p=|f+g|\,|f+g|^{p-1}
\le (|f|+|g|)|f+g|^{p-1}.
$$
Integrate:
$$
\int_\Omega |f+g|^p\,d\mu
\le \int_\Omega |f|\,|f+g|^{p-1}\,d\mu
+\int_\Omega |g|\,|f+g|^{p-1}\,d\mu.
$$

Apply Holder to each term:
$$
\int_\Omega |f|\,|f+g|^{p-1}\,d\mu
\le \|f\|_p\,\||f+g|^{p-1}\|_{p'},
$$
$$
\int_\Omega |g|\,|f+g|^{p-1}\,d\mu
\le \|g\|_p\,\||f+g|^{p-1}\|_{p'}.
$$
So
$$
\int_\Omega |f+g|^p\,d\mu
\le (\|f\|_p+\|g\|_p)\,\||f+g|^{p-1}\|_{p'}.
$$

Now,
$$
\||f+g|^{p-1}\|_{p'}
=\left(\int_\Omega |f+g|^{(p-1)p'}\,d\mu\right)^{1/p'}
=\left(\int_\Omega |f+g|^p\,d\mu\right)^{1/p'}.
$$

Therefore
$$
\left(\int_\Omega |f+g|^p\,d\mu\right)^{1/p}
\le \|f\|_p+\|g\|_p,
$$
which is Minkowski's inequality.

Thus, $(L^p(\Omega), \|\cdot\|_p)$ is a normed linear space (concluded from above inequalities).
___

These two inequalities are the key tools for proving that $\|\cdot\|_p$ is a norm on $L^p(\Omega)$.

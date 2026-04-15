## Aim

If $1 \le p < \infty$, then
$$
L^p(\Omega)=L^p(\Omega,\mathcal{F},\mu)
=\left\{f:\Omega\to\mathbb{C}\text{ measurable }:\int_\Omega |f(\omega)|^p\,d\mu(\omega)<\infty\right\}.
$$

Define
$$
\|f\|_p=\left(\int_\Omega |f|^p\,d\mu\right)^{1/p}.
$$

$L^p(\Omega)$ is a metric space with metric
$$
d(f,g)=\|f-g\|_p
=\left(\int_\Omega |f(\omega)-g(\omega)|^p\,d\mu(\omega)\right)^{1/p}.
$$

___
## Theorem

$L^p(\Omega)$ is complete with respect to metric $d$.

### Note

To show completeness of a metric space $(X,d)$, it is enough to check convergence of Cauchy sequences satisfying
$$
d(x_{n+1},x_n)<2^{-n},\quad \forall n.
$$

___
## Proof

Start with a Cauchy sequence $\{f_n\}$ in $L^p(\Omega)$ such that
$$
\|f_{n+1}-f_n\|_p<2^{-n},\quad \forall n.
$$

Define, for $\omega\in\Omega$,
$$
g(\omega)=\sum_{n=1}^{\infty}|f_{n+1}(\omega)-f_n(\omega)|,
$$
and
$$
g_k(\omega)=\sum_{n=1}^{k}|f_{n+1}(\omega)-f_n(\omega)|.
$$

By Minkowski inequality,
$$
\|g_k\|_p
\le\sum_{n=1}^{k}\|f_{n+1}-f_n\|_p
\le\sum_{n=1}^{k}2^{-n}
\le1.
$$

Hence $g_k^p\uparrow g^p$ a.e. and by MCT,
$$
\int_\Omega g^p\,d\mu
=\lim_{k\to\infty}\int_\Omega g_k^p\,d\mu
\le1.
$$
So $g\in L^p(\Omega)$. Therefore there exists $E\in\mathcal{F}$ with $\mu(E^c)=0$ such that $g(\omega)<\infty$ for all $\omega\in E$.

Define
$$
h(\omega)=
\begin{cases}
\sum_{n=1}^{\infty}(f_{n+1}(\omega)-f_n(\omega)), & \omega\in E,\\
0, & \omega\in E^c.
\end{cases}
$$

Since $|h|\le g$ a.e. and $g\in L^p(\Omega)$, it follows that $h\in L^p(\Omega)$.

Also, for each $\omega\in E$,
$$
h(\omega)
=\lim_{k\to\infty}\sum_{n=1}^{k}(f_{n+1}(\omega)-f_n(\omega))
=\lim_{k\to\infty}\big(f_{k+1}(\omega)-f_1(\omega)\big).
$$

Define
$$
f(\omega)=
\begin{cases}
h(\omega)+f_1(\omega), & \omega\in E,\\
0, & \omega\in E^c.
\end{cases}
$$
Then $f\in L^p(\Omega)$ and $f_n(\omega)\to f(\omega)$ for all $\omega\in E$ (hence a.e.).

Now for $m>n$,
$$
f_m(\omega)-f_n(\omega)=\sum_{k=n}^{m-1}(f_{k+1}(\omega)-f_k(\omega)).
$$
So
$$
\|f_m-f_n\|_p
\le\sum_{k=n}^{m-1}\|f_{k+1}-f_k\|_p
\le\sum_{k=n}^{m-1}2^{-k}
\le2^{-(n-1)}.
$$
Hence
$$
\int_\Omega |f_m-f_n|^p\,d\mu\le 2^{-(n-1)p}.
$$

Fix $n$ and apply Fatou's lemma:
$$
\int_\Omega \liminf_{m\to\infty}|f_m(\omega)-f_n(\omega)|^p\,d\mu(\omega)
\le \liminf_{m\to\infty}\int_\Omega |f_m-f_n|^p\,d\mu
\le 2^{-(n-1)p}.
$$
Since $f_m(\omega)\to f(\omega)$ a.e., we get
$$
\int_\Omega |f-f_n|^p\,d\mu\le 2^{-(n-1)p}.
$$
Therefore
$$
\|f-f_n\|_p\le 2^{-(n-1)}\to0,
$$
so $f_n\to f$ in $L^p(\Omega)$.

Hence $L^p(\Omega)$ is complete.

___
## Remark 1

If $\{f_n\}$ is Cauchy in $L^p(\Omega)$, then there exists a subsequence $\{f_{n_k}\}$ such that
$$
d(f_{n_{k+1}},f_{n_k})<2^{-k},\quad \forall k.
$$
By the above proof, $f_{n_k}\to f$ in $L^p(\Omega)$ for some $f\in L^p(\Omega)$.
In fact, we also proved $f_{n_k}\to f$ pointwise a.e.

## Remark 2

If $f_n\to f$ in $L^p(\Omega)$, then there exists a subsequence $\{f_{n_k}\}$ such that
$$
f_{n_k}\to f\quad\text{pointwise a.e.}
$$

___
## Example (No pointwise convergence in general)

Take $\Omega=[0,1]$, $\mu=\lambda$ (Lebesgue measure), and define indicator functions by scanning dyadic-type subintervals, e.g.
$$
f_1=\chi_{[0,1]},\quad
f_2=\chi_{[0,1/2]},\quad
f_3=\chi_{[1/2,1]},
$$
$$
f_4=\chi_{[0,1/3]},\quad
f_5=\chi_{[1/3,2/3]},\quad
f_6=\chi_{[2/3,1]},\ \ldots
$$

For $p\ge1$, one has
$$
\|f_n\|_p\to0\quad(n\to\infty),
$$
hence $f_n\to0$ in $L^p(\mu)$.

But if $x\in[0,1]$, then $f_n(x)=1$ for infinitely many $n$.
So $f_n\not\to0$ pointwise.

___
## Essentially Bounded Functions

A measurable $f:\Omega\to\mathbb{C}$ is essentially bounded if there exists $M\ge0$ such that
$$
\mu\big(\{\omega\in\Omega:|f(\omega)|>M\}\big)=0.
$$

Define
$$
L^{\infty}(\Omega,\mathcal{F},\mu)=L^{\infty}(\Omega)
=\{f:\Omega\to\mathbb{C}\text{ measurable}: f\text{ is essentially bounded}\}.
$$

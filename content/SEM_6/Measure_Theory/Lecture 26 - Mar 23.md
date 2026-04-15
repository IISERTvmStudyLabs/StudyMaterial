Let $(\Omega,\mathcal{F},\mu)$ be a measure space.

___
## Definition (Essentially Bounded)

A measurable function $f:\Omega\to\mathbb{C}$ is called essentially bounded if there exists $M>0$ such that
$$
\mu\big(\{\omega\in\Omega:|f(\omega)|>M\}\big)=0.
$$

If $M_1>M_2$, then
$$
\{\omega:|f(\omega)|>M_1\}\subseteq\{\omega\in\Omega:|f(\omega)|>M_2\}.
$$

___
## Definition ($L^{\infty}$ and Essential Supremum Norm)

$$
L^{\infty}(\Omega):=\{f:\Omega\to\mathbb{C}:f\text{ is essentially bounded}\}.
$$

Define
$$
\|f\|_{\infty}:=\inf\{M>0:\mu(\{\omega\in\Omega:|f(\omega)|>M\})=0\}.
$$

___
## Example / Facts

$L^{\infty}(\Omega)$ is a complex vector space and $\|\cdot\|_{\infty}$ is a norm on $L^{\infty}(\Omega)$.

### Facts

1. The infimum in the definition of $\|f\|_{\infty}$ is attained:
$$
\mu\big(\{\omega\in\Omega:|f(\omega)|>\|f\|_{\infty}\}\big)=0.
$$

2. If $f\in L^{\infty}(\Omega)$, then
$$
|f(\omega)|\le\|f\|_{\infty}\quad\text{for a.e. }\omega.
$$

3. Endpoint Holder case (check): if we interpret $\frac1\infty=0$ (so $p=1$, $p'=\infty$), then for
$f\in L^1(\Omega)$ and $g\in L^{\infty}(\Omega)$,
$$
\left|\int_{\Omega} f g\,d\mu\right|\le \|f\|_1\,\|g\|_{\infty}.
$$

___
## Theorem

$L^{\infty}(\Omega)$ is complete with respect to $\|\cdot\|_{\infty}$.

### Proof

Suppose $\{f_n\}$ is a Cauchy sequence in $L^{\infty}(\Omega)$. We need to show there exists
$f\in L^{\infty}(\Omega)$ such that
$$
\|f-f_n\|_{\infty}\to0\quad(n\to\infty).
$$

For each $k\in\mathbb{N}$, there exists $N_k\in\mathbb{N}$ such that
$$
\|f_n-f_m\|_{\infty}=d(f_n,f_m)<\frac1k,\quad \forall n,m\ge N_k.
$$

Hence for each $k$, there is $E_k\in\mathcal{F}$ with $\mu(E_k)=0$ such that for all
$\omega\in E_k^c$,
$$
|f_n(\omega)-f_m(\omega)|\le\|f_n-f_m\|_{\infty}<\frac1k,
\quad \forall n,m\ge N_k.
$$

Define
$$
E=\bigcup_{k=1}^{\infty}E_k.
$$
Then $\mu(E)=0$, and for each $\omega\in E^c=\bigcap_{k=1}^{\infty}E_k^c$,
$$
|f_n(\omega)-f_m(\omega)|<\frac1k\quad\forall n,m\ge N_k. \tag{*}
$$

Thus $\{f_n(\omega)\}$ is Cauchy in $\mathbb{C}$ for each $\omega\in E^c$.

Define
$$
f(\omega)=
\begin{cases}
\lim\limits_{n\to\infty} f_n(\omega), & \omega\in E^c,\\
0, & \omega\in E.
\end{cases}
$$

Then $f$ is measurable.

Now fix $k$ and keep $n\ge N_k$ fixed; taking $m\to\infty$ in $(*)$, we get
$$
|f_n(\omega)-f(\omega)|\le\frac1k,\quad \forall \omega\in E^c.
$$

So
$$
\|f-f_n\|_{\infty}\le\frac1k\quad\forall n\ge N_k,
$$
hence $\|f-f_n\|_{\infty}\to0$.

Also,
$$
\|f\|_{\infty}\le\|f-f_n\|_{\infty}+\|f_n\|_{\infty}<\infty
$$
for large $n$, so $f\in L^{\infty}(\Omega)$.

Therefore $L^{\infty}(\Omega)$ is complete.

___
## Remarks

1. If $f:\Omega\to\mathbb{R}$ is any function, then for all $\omega\in\Omega$,
$$
f^+(\omega)f^-(\omega)=0.
$$

2. If $\{\phi_n\}$ and $\{\psi_n\}$ are sequences of non-negative simple functions such that
$\phi_n\uparrow f^+$ and $\psi_n\uparrow f^-$ pointwise, then
$$
0\le\phi_n(\omega)\psi_n(\omega)\le f^+(\omega)f^-(\omega)=0
\Rightarrow \phi_n(\omega)\psi_n(\omega)=0\quad\forall\omega\in\Omega.
$$

3. If $f:\Omega\to\mathbb{C}$, then there exist sequences
$\{\phi_{1n}\},\{\phi_{2n}\},\{\phi_{3n}\},\{\phi_{4n}\}$ of non-negative simple functions such that
$$
\phi_{1n}\uparrow \Re(f)^+,
\quad \phi_{2n}\uparrow \Re(f)^-,
\quad \phi_{3n}\uparrow \Im(f)^+,
\quad \phi_{4n}\uparrow \Im(f)^-.
$$

Define
$$
\Psi_n:=\phi_{1n}-\phi_{2n}+i(\phi_{3n}-\phi_{4n}).
$$
Then $\Psi_n\to f$ pointwise and $|\Psi_n|\le |f|$.

___
## Theorem (Density of Finite-Measure Simple Functions)

Let $p\in[1,\infty]$. Define
$$
\mathcal{S}:=\left\{\sum_{i=1}^{n}c_i\chi_{E_i}:
n\in\mathbb{N},\ c_i\in\mathbb{C},\ \mu(E_i)<\infty\ \forall i\right\}.
$$
Then $\mathcal{S}$ is a dense subspace of $L^p(\Omega)$.

If $\phi\in\mathcal{S}$, say $\phi=\sum_{i=1}^{n}c_i\chi_{E_i}$, then
$$
\int |\phi|^p\,d\mu
\le \sum_{i=1}^{n}\int |c_i|^p|\chi_{E_i}|^p\,d\mu
=\sum_{i=1}^{n}|c_i|^p\mu(E_i)<\infty.
$$

### Proof

It is clear that $\mathcal{S}$ is a subspace of $L^p(\Omega)$.

Given $f\in L^p(\Omega)$, choose $\{\phi_n\}\subset\mathcal{S}$ such that
$$
\phi_n(\omega)\to f(\omega)\quad\text{for a.e. }\omega\in\Omega.
$$
Also,
$$
|\phi_n-f|^p\le (|\phi_n|+|f|)^p\le 2^p|f|^p.
$$
Since $|\phi_n-f|^p\to0$ a.e., by DCT,
$$
\int_{\Omega}|\phi_n-f|^p\,d\mu\to0\quad(n\to\infty),
$$
that is,
$$
\|f-\phi_n\|_p\to0\quad\text{as }n\to\infty.
$$

Hence $\mathcal{S}$ is dense in $L^p(\Omega)$.

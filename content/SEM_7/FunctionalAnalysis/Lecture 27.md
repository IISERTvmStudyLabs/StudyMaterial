---
course: Functional Analysis
Lecture: "27"
date: 15 October
---
## Corollary: Every Hilbert space is reflexive.
Let $\Phi \in H^{**}$. Show that $\exists x \in H$ such that $\Phi(\phi) = \phi(x)$
or $J(H) = H^{**}$
$J(x) = J_x = \Phi$

Recall the def$^n$ of the adjoint.
If $L \in \mathcal{L}(X,Y)$, $X,Y$ - Banach, the adjoint $L^* \in \mathcal{L}(Y^*,X^*)$ satisfies

$$
\langle L^* \phi, x \rangle_{X^*, X} = \langle \phi, L x \rangle_{Y^*, Y} \quad \forall x \in X, \phi \in Y^*
$$

Suppose $X$ and $Y$ are Hilbert, $\Psi_X : X^* \rightarrow X$ and $\Psi_Y : Y^* \rightarrow Y$ are the F. Riesz isometries on $X$ and $Y$ resp. (conjugate linear)

Define $L' : Y \rightarrow X$

$$
L' := \Psi_X \circ L^* \circ \Psi_Y^{-1}
$$

$L'$ is bdd, linear. $\|L'\|_{\mathcal{L}(Y,X)} = \|L\|_{\mathcal{L}(X,Y)}$

Claim:

$$
(Lx, y)_Y = (x, L'y)_X \quad \forall x \in X \quad \forall y \in Y.
$$

Let $y \in Y$ and let $\phi_y = \Psi_Y^{-1}(y) \in Y^*$
where $\phi_y(z) = (z, y) \quad \forall z \in Y.$

$$
L'y = (\Psi_X \circ L^* \circ \Psi_Y^{-1})(y)
$$

$$
= (\Psi_X \circ L^*)(\Psi_Y^{-1}(y))
$$

$$
= (\Psi_X \circ L^*)(\phi_y)
$$

$$
= \Psi_X(L^* \phi_y)
$$

$L^* \phi_y \in X^*$ and $L'y = \Psi_X(L^* \phi_y)$, shows that $L'y$ is the unique element in $X$ representing $L^* \phi_y \in X^*$ (by F. Riesz)

$$
\langle L^* \phi_y, x \rangle_X = (x, L'y)_X \quad (\#)
$$

$\rightarrow$ But

$$
\langle L^* \phi_y, x \rangle_X = \langle \phi_y, Lx \rangle_Y \quad (\#\#)
$$

$$
= \phi_y(Lx)
$$

$$
= (Lx, y)_Y
$$

From $(\#)$ and $(\#\#)$

$$
(Lx, y)_Y = (x, L'y)_X \quad \forall x \in X, y \in Y
$$

$L'$ - Hilbert adjoint whereas $L^*$ - Banach adjoint.
We will still denote $L'$ by $L^*$ and $L^*$ by $L^*$, hence, the adjoint $L^* \in \mathcal{L}(Y,X)$ defined by

$$
(Lx, y)_Y = (x, L^* y)_X
$$

Weak convergence in Hilbert Spaces
Recall
$x_n \rightharpoonup x$ means

$$
\phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^*
$$

$$
\Leftrightarrow (x_n, y)_X \rightarrow (x, y)_X \quad \forall y \in X.
$$

$\rightarrow$ Theorem: (Weak convergence and compact operators)
Let $H$ be Hilbert, $x_n \rightharpoonup x$ in $H$, and $L \in \mathcal{L}(H,H)$ be compact. Then

$$
\lim_{n\rightarrow\infty} \|L x_n - L x\|_H \rightarrow 0 \quad \text{or } L x_n \rightarrow L x \text{ (strong).}
$$

Proof:
Since $x_n \rightharpoonup x$ in $H$, by Banach-Steinhaus $(x_n)_{n\in\mathbb{N}}$ is bdd. Since $L$ is compact, $\exists$ a subseq $(x_{n_k})_k \subset (x_n)_{n\in\mathbb{N}}$ s.t. $(L x_{n_k})$ converges in $H$.
Let $L x_{n_k} \rightarrow y \in H$.

By the def$^n$ of the adjoint:

$$
(L x_n - L x, z)_H = (L(x_n - x), z)_H
$$

$$
= (x_n - x, L^* z)_H \rightarrow 0 \quad \forall z \in H.
$$

Since $x_n \rightharpoonup x$ in $H$.
But $L x_{n_k} \rightarrow y$.
By the uniqueness of weak limit $Lx = y$.
For any subseq $(x_{n_k})$ of $(x_n)$ s.t. $L x_{n_k} \rightarrow L x$ as $k \rightarrow \infty$.

We show that the entire seq $(L x_n)$ converges strongly to $L x$.
If not (then there is a subseq which doesn't converge)
$\exists \epsilon_0 > 0$ and a subseq $(x_{n_l})$ of $(x_n)$ s.t.

$$
\|L x_{n_l} - L x\|_H \ge \epsilon_0 \quad \forall l \in \mathbb{N}. \quad (\#\#)
$$

Now $(x_{n_l})$ is a bdd seq and $L$ is compact.
As before we can extract a subseq (still denoted by $(x_{n_l})$) so that $L x_{n_l} \rightarrow z$.
But then $z = L x$.
Not possible bc of $(\#\#)$.

Eg:
Let $H = L^2(0,\pi)$ and $f_n(x) = \sin^2 n x$.
$f_n \rightharpoonup \frac{1}{2}$ in $L^2(0,\pi)$ (Highly oscillatory)
Means that

$$
(f_n, g)_2 \rightarrow (1/2, g)_2 \quad \forall g \in L^2(0,\pi)
$$

$$
\int_0^\pi f_n(x) g(x) dx \rightarrow \int_0^\pi \frac{1}{2} g(x) dx
$$

$g = \chi_{[a,b]} \quad [a,b] \subset (0,\pi)$
$g = s$ a simple fn

$L : L^2(0,\pi) \rightarrow L^2(0,\pi)$ integral operator

$$
L(f)(x) := \int_0^\pi f(y) dy \quad \forall f \in L^2(0,\pi)
$$
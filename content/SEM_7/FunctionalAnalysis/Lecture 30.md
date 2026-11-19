---
course: Functional Analysis
Lecture: "27"
date: 2028-10-15
---
## Theorem 1
[[Lecture 22#Adjoint of a Linear Operator| Recall:]]
> [!note]  Definition of the Banach Adjoint
> If $L \in \mathcal{L}(X,Y)$ where $X, Y$ are Banach spaces, the adjoint $L^* \in \mathcal{L}(Y^*,X^*)$ satisfies:
> 
$$
\langle L^* \phi, x \rangle_{X^*, X} = \langle \phi, L x \rangle_{Y^*, Y} \quad \forall x \in X, \, \forall \phi \in Y^*
$$


Suppose $X$ and $Y$ are Hilbert spaces, and let $\Psi_X : X^* \rightarrow X$ and $\Psi_Y : Y^* \rightarrow Y$ be the [[Lecture 29#Theorem (F. Riesz)|Fréchet–Riesz isometries]] on $X$ and $Y$, respectively (which are conjugate linear).
Define $L' : Y \rightarrow X$ by:  
 
$$
L' := \Psi_X \circ L^* \circ \Psi_Y^{-1}
$$

 * $L'$ is bounded and linear.
 * $\|L'\|_{\mathcal{L}(Y,X)} = \|L\|_{\mathcal{L}(X,Y)}$

> [!important] Claim
> 
$$
(Lx, y)_Y = (x, L'y)_X \quad \forall x \in X, \, \forall y \in Y
$$


**Proof:**
Let $y \in Y$ and let $\phi_y = \Psi_Y^{-1}(y) \in Y^*$, where $\phi_y(z) = (z, y)_Y$ for all $z \in Y$. Then:

$$
\begin{aligned}
L'y &= (\Psi_X \circ L^* \circ \Psi_Y^{-1})(y) \\
&= (\Psi_X \circ L^*)(\Psi_Y^{-1}(y)) \\
&= (\Psi_X \circ L^*)(\phi_y) \\
&= \Psi_X(L^* \phi_y)
\end{aligned}
$$


Since $L^* \phi_y \in X^*$ and $L'y = \Psi_X(L^* \phi_y)$, $L'y$ is the unique element in $X$ representing $L^* \phi_y \in X^*$ (by the [[Lecture 29#F. Riesz Representation Theorem|Fréchet–Riesz Representation Theorem]]):

$$
\langle L^* \phi_y, x \rangle_X = (x, L'y)_X \tag{$\#$}
$$


On the other hand, by the definition of the Banach adjoint:

$$
\begin{aligned}
\langle L^* \phi_y, x \rangle_X &= \langle \phi_y, Lx \rangle_Y \to(\#\#) \\
&= \phi_y(Lx) \\
&= (Lx, y)_Y
\end{aligned}
$$


Comparing $(\#)$ and $(\#\#)$, we obtain:

$$
(Lx, y)_Y = (x, L'y)_X \quad \forall x \in X, \, \forall y \in Y \quad \blacksquare
$$


> [!tip] Notation Convention
> $L'$ is the **Hilbert adjoint**, whereas $L^*$ is the **Banach adjoint**. Going forward, we will still denote $L'$ by $L^*$ (and keep $L^*$ for the Banach adjoint). Hence, the Hilbert adjoint $L^* \in \mathcal{L}(Y,X)$ is defined by:
> 
$$
(Lx, y)_Y = (x, L^* y)_X
$$


---

### Weak Convergence in Hilbert Spaces
[[SEM_7/FunctionalAnalysis/Lecture 14#Definitions Weak and Weak-* Convergence|Recall]]
> [!note] Weak Convergence ($x_n \rightharpoonup x$)
> In a Hilbert space $X$, weak convergence $x_n \rightharpoonup x$ means:
> 
$$
\phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^*
$$

> By the Fréchet–Riesz Representation Theorem, this is equivalent to:
> 
$$
(x_n, y)_X \rightarrow (x, y)_X \quad \forall y \in X
$$


---
# Theorem: (Weak convergence and compact operators)
Let $H$ be Hilbert, $x_n \rightharpoonup x$ in $H$, and $L \in \mathcal{L}(H,H)$ be compact. Then


$$
\lim_{n\rightarrow\infty} \|L x_n - L x\|_H \rightarrow 0 \quad \text{or } L x_n \rightarrow L x \text{ (strong).}
$$


**Proof**:
Since $x_n \rightharpoonup x$ in $H$, by [[SEM_7/FunctionalAnalysis/Lecture 18#Theorem (Banach–Steinhaus)|Banach-Steinhaus]] $(x_n)_{n\in\mathbb{N}}$ is bounded. Since $L$ is compact, $\exists$ a subsequence $(x_{n_k})_k \subset (x_n)_{n\in\mathbb{N}}$ such that. $(L x_{n_k})$ converges in $H$.
Let $L x_{n_k} \rightarrow y \in H$.

By the definition of the adjoint:


$$
(L x_n - L x, z)_H = (L(x_n - x), z)_H
$$


$$
= (x_n - x, L^* z)_H \rightarrow 0 \quad \forall z \in H.
$$


Since $x_n \rightharpoonup x$ in $H$. But $L x_{n_k} \rightarrow y$. By the uniqueness of weak limit $Lx = y$. For any subsequence $(x_{n_k})$ of $(x_n)$ such that. $L x_{n_k} \rightarrow L x$ as $k \rightarrow \infty$.

We show that the entire sequence $(L x_n)$ converges strongly to $L x$. If not (then there is a subsequence which doesn't converge) $\exists \epsilon_0 > 0$ and a subsequence $(x_{n_l})$ of $(x_n)$ such that.


$$
\|L x_{n_l} - L x\|_H \ge \epsilon_0 \quad \forall l \in \mathbb{N}. \quad (\#\#)
$$


Now $(x_{n_l})$ is a bounded sequences and $L$ is compact.
As before we can extract a subsequence (still denoted by $(x_{n_l})$) so that $L x_{n_l} \rightarrow z$.
But then $z = L x$. Not possible because of $(\#\#)$.

**Example**: Let $H = L^2(0,\pi)$ and $f_n(x) = \sin^2 n x$.
$f_n \rightharpoonup \frac{1}{2}$ in $L^2(0,\pi)$ (Highly oscillatory)
Means that


$$
(f_n, g)_2 \rightarrow (1/2, g)_2 \quad \forall g \in L^2(0,\pi)
$$



$$
\int_0^\pi f_n(x) g(x) dx \rightarrow \int_0^\pi \frac{1}{2} g(x) dx
$$


$g = \chi_{[a,b]} \quad [a,b] \subset (0,\pi)$
$g = s$ a simple function

$L : L^2(0,\pi) \rightarrow L^2(0,\pi)$ integral operator


$$
L(f)(x) := \int_0^\pi f(y) dy \quad \forall f \in L^2(0,\pi)
$$

_______

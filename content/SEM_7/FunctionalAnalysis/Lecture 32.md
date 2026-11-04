---
course: Functional Analysis
Lecture:
date: 2026-11-03
---
Recall 
$$
\lambda \in \rho(L) \to \lambda I - L \text{ is invertible}
$$
$$
\implies (\lambda I - L)^{-1} \in \mathcal{L}(X)
$$

$\implies \lambda u - Lu = f$ is uniquely solvable and the solution depends continuously on $f$.
$$
u = R_\lambda f
$$
$$
\|u\| \le \|R_\lambda\| \|f\| \le C\|f\|
$$

Continuous dependence of $u$ on $f$

The spectrum generalizes the notion of eigenvalues, but is different.

$A \in \mathbb{K}^{N \times N}$, $\lambda \in \mathbb{K}$ is an eigenvalue of $A \to \exists \ 0 \neq x \in \mathbb{K}^N$ s.t. $Ax = \lambda x$

$\implies \lambda I - A$ is not injective
$\implies \lambda I - A$ is not surjective

If $\lambda \in \mathbb{K}$ is not an eigenvalue then $\lambda I - A$ has full rank, or it is invertible.

---

# Definitio: Spectrum

Let $X$ be Banach and $L \in \mathcal{L}(X)$. The spectrum $\sigma(L)$ consists of

1.  The **point spectrum**
defined by 
$$
\sigma_p(L) = \{ \lambda \in \mathbb{K} : \lambda I - L \text{ is not injective} \}
$$
$\lambda \in \sigma_p(L) \implies \exists$ non-zero $x \in X$ s.t. $(\lambda I - L)x = 0$ or $Lx = \lambda x$
$\lambda$ is an eigenvalue of $L$ and $x$ is an eigenvector corresponding to $\lambda$

2.  The **residual spectrum**:
$$
\sigma_r(L) = \{ \lambda \in \mathbb{K} : \lambda I - L \text{ is injective and } \overline{\text{Range}}(\lambda I - L) \neq X \}
$$

3. The **continuous spectrum**
$$
\sigma_c(L) = \{ \lambda \in \mathbb{K} : \lambda I - L \text{ is injective}, \quad \overline{\text{Range}} = X, \quad \text{but Range}(\lambda I - L) \neq X \}
$$

$\sigma_p, \sigma_r, \sigma_c$ are disjoint and 
$$
\sigma(L) = \sigma_p(L) \cup \sigma_r(L) \cup \sigma_c(L)
$$

$\lambda I - L$ is injective $\iff \lambda I - L$ is bijective $\to \lambda \in \rho(L)$ resolvent set

---

If $\lambda \in \sigma_c(L)$ then $\lambda I - L$ is injective

$(\lambda I - L)^{-1} : \text{Range}(\lambda I - L) \subset X \to X$ is **not bounded**
$\lambda u - Lu = f$

If $\lambda \in \sigma_p(L) \to$ eigenvalues and eigenvectors

## Proposition: (Approximate eigenvectors)
Let $X$ be Banach, $L \in \mathcal{L}(X)$, $\lambda \notin \sigma_p(L)$
Then $(\lambda I - L)^{-1} : \text{Range}(\lambda I - L) \subset X \to X$ is unbounded $\iff\exists \ (x_n) \subset X$ such that $\|x_n\| = 1 \ \forall n$ and $\|(\lambda I - L)x_n\| \to 0$
($x_n \to$ approximate eigenvector)

**Proof:** Suppose $\lambda \notin \sigma_p(L) \to \lambda I - L$ is injective.

Let $x_n \in X$, $\|x_n\| = 1$, $\|(\lambda I - L)x_n\| \to 0$ as $n \to \infty$

To show that $(\lambda I - L)^{-1}$ is unbounded on $\text{Range}(\lambda I - L)$
Let 
$$
y_n = \frac{(\lambda I - L)x_n}{\|(\lambda I - L)x_n\|} \in \text{Range}(\lambda I - L)
$$

$$
(\lambda I - L)^{-1} y_n = \frac{x_n}{\| \dots \|} \implies \|(\lambda I - L)^{-1} y_n\| = \frac{1}{\| \dots \|} \to \infty \text{ as } n \to \infty
$$

$\implies (\lambda I - L)^{-1}$ is unbounded on $\text{Range}(\lambda I - L)$

conversely, suppose $(\lambda I - L)^{-1}$ is unbounded
$\implies \exists$ a sequence $\{y_n\} \subset \text{Range}(\lambda I - L)$
$\|y_n\| = 1$ but $\|(\lambda I - L)^{-1} y_n\| \ge n$

take 
$$
x_n := \frac{(\lambda I - L)^{-1} y_n}{\|(\lambda I - L)^{-1} y_n\|}
$$

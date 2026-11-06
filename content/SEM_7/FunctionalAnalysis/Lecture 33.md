---
course: Functional Analysis
Lecture:
date: 2026-11-05
---
**Point Spectrum:** 
$$
\sigma_p(L) = \{\lambda \in \mathbb{K} : \lambda I - L \text{ is not injective}\}
$$

**Residual Spectrum:**
$$
\sigma_r(L) = \{\lambda \in \mathbb{K} : \lambda I - L \text{ is injective and Range}(\lambda I - L) \text{ is not dense}\}
$$

**Continuous Spectrum:** 
$$
\sigma_c(L) = \{\lambda \in \mathbb{K} : \lambda I - L \text{ is injective and Range}(\lambda I - L) \text{ is dense}\}
$$
___
## Proposition
Let $H$ be Hilbert, $L \in \mathcal{L}(H)$. Then
$$
[\text{Range}(\lambda I - L)]^\perp = \ker(\overline{\lambda} I - L^*)
$$
If $L$ is self adjoint ($L=L^*$), then its eigenvalues are real and eigenvectors corresponding to distinct eigenvalues are orthogonal. The residual spectrum $\sigma_r(L) = \emptyset$ (empty).

**Proof:**
Let $y \in [\text{Range}(\lambda I - L)]^\perp \iff ((\lambda I - L)x, y) = 0 \quad \forall x \in H.$
$$
\iff (x, (\overline{\lambda} I - L^*)y) = 0 \quad \forall x \in H.
$$
$$
\iff (\overline{\lambda} I - L^*)y = 0 \implies y \in \ker(\overline{\lambda} I - L^*)
$$

Let $L=L^*$ and let $\lambda$ be an eigenvalue of $L$ with eigenvector $x$. 
$$
L x = \lambda x \implies (\lambda x, x) = (L x, x) = (x, L^* x) = (x, L x) = (x, \lambda x)
$$
$$
\implies \lambda(x,x) = \overline{\lambda}(x,x)
$$
Since $x \neq 0$, $\lambda = \overline{\lambda} \implies \lambda \in \mathbb{R}$.

Let $L x_1 = \lambda_1 x_1, \quad L x_2 = \lambda_2 x_2 \implies \lambda_1 \neq \lambda_2$.
$$
\lambda_1(x_1, x_2) = (\lambda_1 x_1, x_2) = (L x_1, x_2) = (x_1, L x_2) = (x_1, \lambda_2 x_2) = \lambda_2(x_1, x_2) \quad (\text{since } \lambda_2 \text{ is real})
$$
$$
\implies (\lambda_1 - \lambda_2)(x_1, x_2) = 0 \implies (x_1, x_2) = 0
$$

Finally, let $\lambda \in \mathbb{R}$ s.t Range$(\lambda I - L)$ is not dense. 
Since Range$(\lambda I - L)$ is not dense:
$$
[\text{Range}(\lambda I - L)]^\perp = \ker(\overline{\lambda} I - L^*) = \ker(\lambda I - L) \neq \{0\}
$$
$$
\implies \lambda \in \sigma_p(L)
$$
Hence $\lambda \notin \sigma_r(L)$. Thus $\sigma_r(L) = \emptyset$.
___
## Theorem: (Spectral theorem for compact operators in Hilbert Spaces):
Let $H$ be an infinite dimensional Hilbert space and $K \in \mathcal{L}(H)$ be compact. Then:
1. $0 \in \sigma(K)$.
2. $\sigma(K) \setminus \{0\} = \sigma_p(K) \setminus \{0\}$, and every nonzero eigenvalue has finite multiplicity.
3. Either $\sigma_p(K)$ is finite or $0$ is the only accumulation point ($\lim_{n \to \infty} \lambda_n = 0$). $\sigma_p(K) = \{\lambda_n : n \in \mathbb{N}\}$.

**Proof:**
1. Suppose $0 \notin \sigma(K) \implies 0 \cdot I - K = -K$ is invertible. 
$$
\implies I = K K^{-1}
$$
$I$ is a compact operator. Not possible, as $H$ is infinite dimensional. $\implies 0 \in \sigma(K)$.

2. If $\lambda \in \sigma(K)$, then $\lambda \in \sigma_p(K)$ for $\lambda \neq 0$.
Let $\lambda \neq 0$, then $\lambda I - K = \lambda(I - K/\lambda)$.
$I - K/\lambda$ is injective $\iff$ it is bijective (by Fredholm).
Conversely, if it is not injective:
$$
\implies \ker(I - K/\lambda) \neq \{0\} \implies \ker(\lambda I - K) \neq \{0\} \implies \lambda \text{ is an eigenvalue.}
$$
Hence $\lambda I - K$ is not invertible $\iff \ker(\lambda I - K) \neq \{0\}$.
$$
\sigma(K) \setminus \{0\} = \sigma_p(K) \setminus \{0\}
$$
$$
\dim \ker(\lambda I - K) = \dim \ker(I - K/\lambda) < \infty \quad (\text{Fredholm statement 1})
$$

3.  Every eigenvalue satisfies $|\lambda| \le \|K\|$.
If $(\lambda_n)$ is a sequence of distinct eigenvalues, $\lambda_n \to \lambda$.
Let $K x_n = \lambda_n x_n$. Let $H_n := \text{span}\{x_1, x_2, \dots, x_n\}$. $H_n$ are closed.
$(x_n)$ are linearly independent. Choose $e_n \in H_n \cap H_{n-1}^\perp$, $\|e_n\| = 1$.
Now $K H_n \subset H_n$ and $(\lambda I - K)H_n \subset H_{n-1}$.
For $m < n$:
$$
K e_n - K e_m = \lambda_n e_n + K e_n - \lambda_n e_n - K e_m = \lambda_n e_n + (\dots \in H_{n-1})
$$
$$
\implies \|K e_n - K e_m\| \ge |\lambda_n|
$$
If $\lambda_n \to \lambda \neq 0$, then for $n$ large enough $|\lambda_n| > |\lambda|/2$. $(K e_n)$ can't be Cauchy.

---

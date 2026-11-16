---
course: Functional Analysis
Lecture:
date: 2026-11-02
---

$$
\|(I-L)^{-1}\| \le \sum_{n=0}^{\infty} \|L^n\| \le \sum_{n=0}^{\infty} \|L\|^n = \frac{1}{1-\|L\|}
$$

**Motivation for the spectrum of an operator:**
In many applications, we encounter equations of the form
$$
\lambda u - L u = f \quad (*)
$$
where $f$ is given and $\lambda \in \mathbb{K}$ is a parameter, $u$ is the unknown, $L \in \mathcal{L}(X)$.

**Examples:**
1. $L = A \in \mathbb{K}^{N \times N}$. For any $f \in \mathbb{K}^N$, then $(*)$ is solvable $\iff \det(\lambda I - A) \neq 0 \iff \lambda$ is not an eigenvalue of $A$.
2.  **Sturm-Liouville problem**:
$$
-u'' + \lambda u = f \quad \text{in } (0,1)
$$
$$
u(0) = u(1) = 0
$$
3.  Volterra Integral Equation:
$$
\lambda u(x) - \int_a^b K(x,y)u(y)dy = f(x)
$$

We want $(*)$ to be well posed:
1. for every $f$, a solution exists.
2. the solution is unique.
3. the solution depends continuously on $f$.

$$
u = (\lambda I - L)^{-1} f
$$
$$
\|u\| \le \|(\lambda I - L)^{-1}\| \|f\| \le C\|f\|
$$

For which $\lambda \in \mathbb{K}$, is $\lambda I - L$ invertible and how does the inverse depend on $\lambda$?

## Proposition
$L \in \mathcal{L}(X)$ and $|\lambda| > \|L\|$. Then $\lambda I - L$ is invertible and
$$
(\lambda I - L)^{-1} = \sum_{n=0}^{\infty} \frac{L^n}{\lambda^{n+1}}
$$
$$
\|(\lambda I - L)^{-1}\| \le \frac{1}{|\lambda| - \|L\|}
$$

**Proof:**
Since $\lambda \neq 0$, then
$$
\|L/\lambda\| \le \frac{\|L\|}{|\lambda|} < 1
$$
$$
\lambda I - L = \lambda(I - L/\lambda)
$$
$$
(\lambda I - L)^{-1} = \frac{1}{\lambda} (I - L/\lambda)^{-1} = \frac{1}{\lambda} \sum_{n=0}^{\infty} (L/\lambda)^n
$$
$$
\implies \|(\lambda I - L)^{-1}\| \le \frac{1}{|\lambda| - \|L\|}
$$
____
# Proposition 
Let $L, M \in \mathcal{L}(X)$. $L$ is invertible and $\|L-M\| < \frac{1}{\|L^{-1}\|}$. Then $M$ is invertible. (The set of all invertible operators is open in $\mathcal{L}(X)$).

**Proof:**
Write $L^{-1}M = I - (I - L^{-1}M)$.
$$
\|I - L^{-1}M\| = \|L^{-1}(L-M)\| \le \|L^{-1}\| \|L-M\| < \|L^{-1}\| \frac{1}{\|L^{-1}\|} = 1
$$
Then $L^{-1}M$ is invertible. Let $N$ be the inverse of $L^{-1}M$.
$$
(L^{-1}M)N = I, \quad N(L^{-1}M) = I
$$
$$
L(L^{-1}M N)L^{-1} = L I L^{-1} = I \implies M(N L^{-1}) = I
$$
$$
\implies (N L^{-1})M = I
$$

___
## Corollary
If $\mu I - L$ is invertible and $|\lambda - \mu| < \frac{1}{\|(\mu I - L)^{-1}\|}$, then $\lambda I - L$ is invertible.
Proof: $\|(\mu I - L) - (\lambda I - L)\| = \|(\mu - \lambda)I\| = |\mu - \lambda|$.

**Takeaways:**
* All $\lambda$ with $|\lambda| > \|L\|$ are "good".
* Near a good $\mu$, all are good.
* Good $\lambda$'s form an open set.
* All "bad" $\lambda$'s form a closed and bounded set ($|\lambda| \le \|L\|$).
___

# Definition: Resolvent
Let $L \in \mathcal{L}(X)$.
1. The **Resolvent Set** is:
$$
\rho(L) := \{\lambda \in \mathbb{K} : \lambda I - L \text{ is invertible}\}
$$
$$
\implies \rho(L) = \{\lambda \in \mathbb{K} : \lambda I - L \text{ is bijective}\}
$$
2. For $\lambda \in \rho(L)$, $R_\lambda := (\lambda I - L)^{-1} \in \mathcal{L}(X)$ is the **Resolvent**. (The name is due to Fredholm. $R_\lambda$ "resolves" the equation $(\lambda I - L)u = f$, i.e. $u = (\lambda I - L)^{-1}f$, $u = R_\lambda f$).
(iii) The **spectrum** is $\sigma(L) = \mathbb{K} \setminus \rho(L)$.
___

## Proposition:
$L \in \mathcal{L}(X)$. Then
$$
\sigma(L) = \mathbb{K} \setminus \rho(L) \subset \{\lambda : |\lambda| \le \|L\|\}
$$
$\rho(L)$ is open; $\sigma(L)$ is compact (closed & bounded).
For $\mu \in \rho(L)$:
$$
\|R_\mu\| \ge \frac{1}{\text{dist}(\mu, \sigma(L))}
$$

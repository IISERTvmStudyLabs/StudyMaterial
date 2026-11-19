---
course: Functional Analysis
Lecture: "7"
date: 2026-08-10
---
### Seminorms & Fréchet Spaces

Why $C(0,1)$ lacks a standard supremum norm
Consider $X = C(0,1)$. If we define:

$$
p(f) = \sup_{x \in (0,1)} |f(x)|
$$
then $p$ need not be a norm, because $X$ can contain unbounded functions where $p(f) = +\infty$ for some $f \in X$ (e.g., $f(x) = \frac{1}{x}$).

---
# Definition: Family of Seminorms $p_{a,b}$
For any closed subinterval $[a, b] \subset (0,1)$, define:
 
$$
p_{a,b}(f) := \sup_{x \in [a, b]} |f(x)| = \max_{x \in [a, b]} |f(x)| < \infty
$$

**Checking the Norm Axioms for $p_{a,b}$:**
* **(N2) & (N3)** (Absolute homogeneity and the triangle inequality) are satisfied by $p_{a,b}$.
* **To check (N1)** (Positive definiteness):

![](_page_8_Figure_26.jpeg)

> [!warning] Failure of (N1)
> $p_{a,b}(f) = 0$ can hold even for $f \neq 0$ (any continuous function that vanishes on $[a, b]$ but is non-zero outside $[a, b]$). Thus, $p_{a,b}$ is a **seminorm**, not a norm.

---

# Seminorms, Metrics, and Fréchet Spaces

> [!abstract] Definition: Seminorm
> Let $X$ be a vector space over $\mathbb{K}$. A mapping $p: X \rightarrow \mathbb{R}$ is called a **seminorm** if:
> * **(SN1)** $p(x) \geq 0 \quad \forall x \in X$
> * **(SN2)** $p(\lambda x) = |\lambda| p(x) \quad \forall x \in X, \, \forall \lambda \in \mathbb{K}$
> * **(SN3)** $p(x+y) \leq p(x) + p(y) \quad \forall x, y \in X$

* $d(x, y) = p(x-y)$ need not be a metric on $X$, since we can have $x \neq y$ with $d(x, y) = 0$.

----
# Definition: Separating Sequence of Seminorms
A sequence of seminorms $(p_k)_{k \in \mathbb{N}}$ is called **separating** if for every $x \in X$ ($x \neq 0$), there exists $k_0 \in \mathbb{N}$ such that $p_{k_0}(x) > 0$.

---
## Proposition
Let $(p_k)_{k \in \mathbb{N}}$ be a separating sequence of seminorms on $X$. Then:

$$
d(x, y) := \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(x-y)}{1 + p_k(x-y)}, \quad x, y \in X
$$

is a metric on $X$.

**Proof:**
* **(D1)** Clearly $d(x, y) \geq 0$. Since $(p_k)_{k \in \mathbb{N}}$ is separating, if $x \neq y$, then $p_{k_0}(x-y) > 0$ for some $k_0$, so $d(x, y) > 0$.
* **(D2)** $d(x, y) = d(y, x)$ by homogeneity of $p_k$'s.
* **(D3)** The map $s \mapsto \frac{s}{1+s}$ is increasing and subadditive on $[0, \infty)$. Let $0 \leq a, b, c$ such that $c \leq a+b$:
  
$$
\frac{c}{1+c} \leq \frac{a+b}{1+a+b} \leq \frac{a}{1+a} + \frac{b}{1+b}
$$

  Applying this with $c = p_k(x-z)$, $a = p_k(x-y)$, and $b = p_k(y-z)$:
  
$$
\frac{p_k(x-z)}{1 + p_k(x-z)} \leq \frac{p_k(x-y)}{1 + p_k(x-y)} + \frac{p_k(y-z)}{1 + p_k(y-z)}
$$

  Summing over $k$:
  
$$
\sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(x-z)}{1 + p_k(x-z)} \leq \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(x-y)}{1 + p_k(x-y)} + \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(y-z)}{1 + p_k(y-z)}
$$

  Therefore, the triangle inequality holds. $\blacksquare$

* **Remark:** If $(X, d)$ is complete, then $X$ is a **Fréchet space**.

---

#### Example: 
$C(\Omega)$ as a Fréchet Space

* Recall: If $K \subset \mathbb{R}^N$ is compact, $C(K)$ is a normed linear space with $\|\cdot\|_\infty = \|\cdot\|_{L^\infty(K)}$.

1. Let $\Omega \subseteq \mathbb{R}^N$ be open (bounded or unbounded), and consider $C(\Omega)$, the set of all continuous functions $f: \Omega \rightarrow \mathbb{R}$.
2. Define the compact exhaustion for $k \in \mathbb{N}$:
   
$$
A_k = \left\{ x \in \Omega \;\middle|\; |x| \leq k, \, \operatorname{dist}(x, \partial\Omega) \geq \frac{1}{k} \right\}
$$

   * Each $A_k$ is compact, and $\Omega = \bigcup_{k=1}^{\infty} A_k$ (covering of an open set with compact sets).

![](_page_10_Picture_23.jpeg)

3. Define $p_k(f) := \max_{x \in A_k} |f(x)|$ for $f \in C(\Omega)$. Each $p_k$ is a seminorm.

**Completeness of $C(\Omega)$:**
We show $C(\Omega)$ is complete with respect to $d(f, g) = \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(f-g)}{1 + p_k(f-g)}$:

* Let $(f_n)_{n \in \mathbb{N}}$ be Cauchy in $(C(\Omega), d)$, i.e., for every $\varepsilon > 0$, $\exists N_0 \in \mathbb{N}$ such that:
  
$$
d(f_n, f_m) < \varepsilon \quad \forall n, m \geq N_0
$$

  
$$
\implies p_k(f_n - f_m) \text{ can be made arbitrarily small for each fixed } k \in \mathbb{N}
$$

  Thus, $(f_n)$ is uniformly Cauchy on $A_k$ for every $k \in \mathbb{N}$.
* Since $\Omega = \bigcup_{k=1}^{\infty} A_k$, for every $x \in \Omega$, there exists $k$ such that $x \in A_k$, so:
  
$$
|f_n(x) - f_m(x)| \leq p_k(f_n - f_m)
$$

  Hence $(f_n(x))$ is Cauchy in $\mathbb{R}$ for every $x \in \Omega$.
* Define $f(x) := \lim_{n \rightarrow \infty} f_n(x)$, the pointwise limit, which is well-defined on $\Omega$.

**Claim:** $f$ is continuous on $\Omega$.
* Let $x_0 \in \Omega$. Since $\operatorname{dist}(x_0, \partial\Omega) > 0$, choose $k$ sufficiently large such that $x_0 \in \operatorname{Int}(A_k)$.
* Let $U$ be a neighborhood of $x_0$ such that $U \subset A_k$.
* Since $f_n \rightarrow f$ uniformly on $A_k$ ($(f_n)$ is uniformly Cauchy on $A_k$), we have $f_n \rightarrow f$ uniformly on $U$.
* Since each $f_n$ is continuous, $f$ is continuous on $U$, and therefore $f$ is continuous on $\Omega$. $\blacksquare$
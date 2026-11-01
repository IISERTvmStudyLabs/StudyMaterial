## Finite Extensions and Characters

If $L/K$ is finite, then

$$
|\operatorname{Aut}(L/K)| < \infty,
\qquad
|\operatorname{Aut}(L/K)| \le [L:K].
$$

---

## Characters

Let $G$ be a group.  

A **character** of $G$ in a field $K$ is a group homomorphism

$$
\chi : G \to K^\times.
$$

---

### Examples

1. If $\sigma : K \to L$ is a field homomorphism between fields, take  

   $$
   G = K^\times,
   $$

   then

   $$
   \sigma|_{K^\times} : K^\times \to L^\times
   $$

   is a character.

2. Let $L/K$ be a field extension and $\alpha \in L$ algebraic over $K$.

   Let $m_{\alpha,K}$ be the minimal polynomial of $\alpha$ over $K$.

   Assume $L$ contains all the roots of $m_{\alpha,K}$, say

   $$
   \beta_1, \dots, \beta_n.
   $$

   Define embeddings

   $$
   \chi_i : K(\alpha) \to L,
   \qquad
   \alpha \mapsto \beta_i.
   $$

   Then restricting to units,

   $$
   \chi_i|_{K(\alpha)^\times} : K(\alpha)^\times \to L^\times
   $$

   gives characters.

---

## Proposition

Let $G$ be a group.  

If $\chi_1, \dots, \chi_n$ are distinct characters of $G$ into a field $K$, then they are linearly independent over $K$.

---

### Proof

Suppose

$$
\sum_{i=1}^m a_i \chi_i = 0,
\qquad
a_i \in K,
$$

with not all $a_i = 0$, and $m$ minimal.

Since $\chi_1 \ne \chi_2$, there exists $g_0 \in G$ such that

$$
\chi_1(g_0) \ne \chi_2(g_0).
$$

For all $g \in G$,

$$
\sum_{i=1}^m a_i \chi_i(g) = 0.
$$

Multiply by $\chi_1(g_0)$ and compare with evaluation at $g_0 g$:

$$
\sum_{i=1}^m a_i \chi_i(g_0 g)
=
\sum_{i=1}^m a_i \chi_i(g_0)\chi_i(g).
$$

Subtracting suitably yields a shorter nontrivial linear relation among

$$
\chi_2, \dots, \chi_m,
$$

contradicting minimality.

Hence the characters are linearly independent.

---

## Proposition

If $L/K$ is a finite extension, then

$$
|\operatorname{Aut}(L/K)| \le [L:K].
$$

---

### Proof

Let

$$
\operatorname{Aut}(L/K) = \{ \sigma_1, \dots, \sigma_n \},
\qquad
[L:K] = m.
$$

Let $\alpha_1, \dots, \alpha_m$ be a $K$-basis of $L$.

Consider the matrix

$$
A =
\begin{pmatrix}
\sigma_1(\alpha_1) & \cdots & \sigma_1(\alpha_m) \\
\vdots & \ddots & \vdots \\
\sigma_n(\alpha_1) & \cdots & \sigma_n(\alpha_m)
\end{pmatrix}.
$$

If $n > m$, then the rows are linearly dependent over $L$.

So there exist $a_1, \dots, a_n \in L$, not all zero, such that

$$
\sum_{i=1}^n a_i \sigma_i(\alpha_j) = 0
\quad
\text{for all } j = 1, \dots, m.
$$

Since $\{\alpha_j\}$ is a basis, this implies

$$
\sum_{i=1}^n a_i \sigma_i = 0
$$

as functions $L \to L$.

Restricting to $L^\times$, this gives a nontrivial linear relation among distinct characters

$$
\sigma_i : L^\times \to L^\times,
$$

contradicting the linear independence of characters.

Therefore

$$
n \le m,
$$

i.e.,

$$
|\operatorname{Aut}(L/K)| \le [L:K].
$$

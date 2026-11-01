Let

$$
G = \operatorname{Aut}(L/K).
$$

Then

$$
|G| \le [L:K].
$$

---

Assume

$$
G = \{\sigma_1, \dots, \sigma_n\},
\qquad
[L:K] = m.
$$

Let

$$
\{\alpha_1, \dots, \alpha_m\}
$$

be a $K$-basis of $L$.

Consider the matrix

$$
A =
\begin{pmatrix}
\sigma_1(\alpha_1) & \cdots & \sigma_1(\alpha_m) \\
\vdots & \ddots & \vdots \\
\sigma_n(\alpha_1) & \cdots & \sigma_n(\alpha_m)
\end{pmatrix}.
$$

If $n > m$, then the rows $R_1, \dots, R_n$ are linearly dependent over $L$.

So there exist $a_1, \dots, a_n \in L$, not all zero, such that

$$
a_1 R_1 + \cdots + a_n R_n = 0.
$$

Equivalently,

$$
\sum_{i=1}^n a_i \sigma_i(\alpha_j) = 0
\qquad
\text{for all } j=1,\dots,m.
$$

---

### Claim

$$
\sum_{i=1}^n a_i \sigma_i = 0
$$

as maps $L \to L$.

Indeed, let

$$
b = \sum_{j=1}^m c_j \alpha_j \in L,
\qquad
c_j \in K.
$$

Then

$$
\sum_{i=1}^n a_i \sigma_i(b)
=
\sum_{i=1}^n a_i \sigma_i\!\left(\sum_{j=1}^m c_j \alpha_j\right)
=
\sum_{i=1}^n a_i \sum_{j=1}^m c_j \sigma_i(\alpha_j)
=
\sum_{j=1}^m c_j \left(\sum_{i=1}^n a_i \sigma_i(\alpha_j)\right)
= 0.
$$

Thus the $\sigma_i$ are linearly dependent as functions $L \to L$.

Restricting to

$$
L^\times,
$$

this gives a nontrivial linear relation among distinct characters

$$
\sigma_i : L^\times \to L^\times,
$$

contradicting linear independence of characters.

Hence

$$
|G| \le [L:K].
$$

---

## Theorem (Equality Case)

Let $K$ be a field and

$$
G \subset \operatorname{Aut}(K)
$$

be finite.

Define

$$
K^G = \{ a \in K \mid \sigma(a)=a \ \forall \sigma \in G \}.
$$

Then

$$
|G| = [K : K^G]
$$

and

$$
G = \operatorname{Aut}(K/K^G).
$$

---

### Proof Sketch

Note that

$$
G \subset \operatorname{Aut}(K/K^G).
$$

Hence

$$
|G|
\le
|\operatorname{Aut}(K/K^G)|
\le
[K : K^G].
$$

Let $G=\{\sigma_1,\dots,\sigma_n\}$.

Assume

$$
[K:K^G] > n.
$$

Then $\dim_{K^G} K \ge n+1$.

Choose

$$
\alpha_1,\dots,\alpha_{n+1}
$$

linearly independent over $K^G$.

Consider the matrix

$$
A =
\begin{pmatrix}
\sigma_1(\alpha_1) & \cdots & \sigma_1(\alpha_{n+1}) \\
\vdots & \ddots & \vdots \\
\sigma_n(\alpha_1) & \cdots & \sigma_n(\alpha_{n+1})
\end{pmatrix}.
$$

Since $\operatorname{rank}(A)\le n$, the $n+1$ columns are linearly dependent.

Take a minimal linear dependence

$$
a_1 C_1 + \cdots + a_r C_r = 0,
\qquad
a_i \in K^G.
$$

Applying any $\tau \in G$ gives another relation.

Subtracting yields a shorter dependence unless all $a_i \in K^G$.

This contradicts linear independence over $K^G$.

Hence

$$
[K : K^G] \le n.
$$

Thus

$$
|G| = [K : K^G].
$$

Finally,

$$
G = \operatorname{Aut}(K/K^G).
$$

---

## Example: Finite Fields

Let

$$
\mathbb{F}_p
$$

be a finite field with $p$ elements.

Let

$$
\mathbb{F}_p[t]
$$

be the polynomial ring over $\mathbb{F}_p$.

Let

$$
\mathbb{F}_p(t)
$$

be its quotient field.

Define the Frobenius map

$$
\phi : \mathbb{F}_p(t) \to \mathbb{F}_p(t),
\qquad
\phi(f(t)) = f(t)^p.
$$

This map is injective but not surjective in general.
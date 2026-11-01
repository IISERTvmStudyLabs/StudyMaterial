## Ring Homomorphisms and Characteristic

Let $R$ be a commutative ring with unity.

If $S \subset R$, then
$$
1_S = 1_R.
$$

Any ring homomorphism $f : R \to S$ satisfies
$$
f(1_R) = 1_S,
$$
unless $f$ is the zero map (in which case it is not very interesting).

---

Suppose $K$ is a field. Define a map
$$
\varphi : \mathbb{Z} \to K, \qquad n \mapsto n \cdot 1_K.
$$

- $\varphi$ is a ring homomorphism.
- $\varphi(\mathbb{Z}) \subset K$ is an integral domain.
- Hence $\ker(\varphi)$ is a prime ideal in $\mathbb{Z}$.

Therefore,
$$
\varphi(\mathbb{Z}) \cong \mathbb{Z}/\ker(\varphi).
$$

Since every ideal in $\mathbb{Z}$ is of the form $(a)$,
$$
\ker(\varphi) = (a),
$$
where either $a = 0$ or $a = p$ for some prime $p$.

We define the **characteristic** of $K$ as:

- $\operatorname{char}(K) = 0$ if $a = 0$,
- $\operatorname{char}(K) = p$ if $a = p > 0$ prime.

---

## Prime Subfield

**Definition (Prime Subfield):**

Let $K$ be a field. The smallest subfield of $K$ is called the **prime subfield** of $K$.

---

### Case 1: $\operatorname{char}(K) = 0$

Consider
$$
\varphi : \mathbb{Z} \to K, \qquad n \mapsto n \cdot 1_K.
$$

If $\operatorname{char}(K) = 0$, then $\ker(\varphi) = (0)$.

Hence $\varphi$ extends to a morphism
$$
\widetilde{\varphi} : \mathbb{Q} \to K,
$$
defined by
$$
\widetilde{\varphi}\left(\frac{a}{b}\right)
=
\varphi(a)\varphi(b)^{-1}.
$$

If $E$ is any subfield of $K$, then
$$
\varphi(\mathbb{Z}) \subset E
\quad \Rightarrow \quad
\widetilde{\varphi}(\mathbb{Q}) \subset E.
$$

Identifying $\mathbb{Q}$ with its image in $K$, we obtain
$$
\mathbb{Q} \subset E \subset K.
$$

Thus $\mathbb{Q}$ is the prime subfield.

---

### Case 2: $\operatorname{char}(K) = p$

Again consider
$$
\varphi : \mathbb{Z} \to K.
$$

Now
$$
\ker(\varphi) = (p).
$$

Hence
$$
\mathbb{F}_p = \mathbb{Z}/(p)
$$
is a subfield of $K$.

Therefore the prime subfield of $K$ is $\mathbb{F}_p$.

---

## Field Extension

**Definition (Field Extension):**

Let $K$ be a field. A field $L$ is called a **field extension** of $K$ if
$$
K \subset L.
$$

We denote this by $L/K$.

Viewing $L$ as a vector space over $K$, the **degree of the extension** is defined as
$$
[L : K] = \dim_K L.
$$

---

### Examples

1. $\mathbb{R}/\mathbb{Q}$, $\mathbb{C}/\mathbb{Q}$, $\mathbb{C}/\mathbb{R}$  
   All have characteristic $0$.

2. Let
   $$
   L = \{ a + b\sqrt{2} \mid a,b \in \mathbb{Q} \}.
   $$
   Then $L$ is a field and
   $$
   \mathbb{Q} \subset L.
   $$
   A basis of $L$ over $\mathbb{Q}$ is
   $$
   \{1, \sqrt{2}\}.
   $$
   Hence
   $$
   [L : \mathbb{Q}] = 2.
   $$

---

## Finite Fields

Suppose $K$ is a finite field.

Consider
$$
\varphi : \mathbb{Z} \to K.
$$

Then
$$
\ker(\varphi) = (p),
$$
so
$$
\mathbb{F}_p = \mathbb{Z}/(p) \subset K.
$$

Thus $K$ is a vector space over $\mathbb{F}_p$.

Since $K$ is finite,
$$
[K : \mathbb{F}_p] < \infty.
$$

Let
$$
[K : \mathbb{F}_p] = n.
$$

Then
$$
|K| = p^n.
$$

Hence every finite field has order $p^n$ for some prime $p$.

---

## Tower Law

Suppose
$$
M/L \quad \text{and} \quad L/K.
$$

Then $M$ is also an extension of $K$ and:

1.
$$
[M : K] = [M : L][L : K],
$$
if both degrees are finite.

2. If either $[M : L]$ or $[L : K]$ is infinite, then $[M : K]$ is infinite.

---

### Proof of Multiplicativity

Assume
$$
[M : L] < \infty.
$$

Let
$$
\{\alpha_1, \dots, \alpha_r\}
$$
be a basis of $M$ over $L$.

Let
$$
\{\beta_1, \dots, \beta_s\}
$$
be a basis of $L$ over $K$.

Take $v \in M$. Then
$$
v = \sum_{i=1}^r a_i \alpha_i,
\quad a_i \in L.
$$

Since each $a_i \in L$,
$$
a_i = \sum_{j=1}^s b_{ij} \beta_j,
\quad b_{ij} \in K.
$$

Hence
$$
v
=
\sum_{i=1}^r
\left(
\sum_{j=1}^s b_{ij} \beta_j
\right)
\alpha_i
=
\sum_{i=1}^r \sum_{j=1}^s
b_{ij} \, \beta_j \alpha_i.
$$

Thus the set
$$
\{\alpha_i \beta_j \mid 1 \le i \le r,\ 1 \le j \le s\}
$$
spans $M$ over $K$.

To check linear independence, suppose
$$
\sum_{i=1}^r \sum_{j=1}^s
c_{ij} \alpha_i \beta_j = 0.
$$

Rewriting,
$$
\sum_{j=1}^s
\left(
\sum_{i=1}^r c_{ij} \alpha_i
\right)
\beta_j
=
0.
$$

Since $\{\beta_j\}$ are linearly independent over $K$,
$$
\sum_{i=1}^r c_{ij} \alpha_i = 0
\quad \text{for each } j.
$$

Since $\{\alpha_i\}$ are linearly independent over $L$,
$$
c_{ij} = 0.
$$

Therefore the set has $rs$ elements and forms a basis of $M$ over $K$.

Hence
$$
[M : K] = rs = [M : L][L : K].
$$
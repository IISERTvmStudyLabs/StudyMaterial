## Question 1 — Projection Maps in Product Topology

Let $\{(X_i,\tau_i)\}$ be a family of topological spaces.

Define

$$
X^n = X_1 \times X_2 \times \cdots \times X_n
$$

and

$$
X^\alpha = \prod_{i\in I} X_i.
$$

Let the projection maps be:

$$
\pi_j : X^n \to X_j, \quad 1\le j\le n
$$

and

$$
\Pi_j : X^\alpha \to X_j.
$$

---

### Are the projection maps continuous?

---

### Finite Product Case

Let $U\subseteq X_j$ be open.

Then:

$$
\pi_j^{-1}(U)
=
X_1\times\cdots\times U\times\cdots\times X_n.
$$

This is a basic open set in the product topology.

Therefore:

$$
\pi_j
$$

is continuous.

---

### Arbitrary Product Case

Let $U\subseteq X_j$ be open.

Then:

$$
\Pi_j^{-1}(U)
=
\prod_{i\in I} V_i
$$

where:

$$
V_j=U,\qquad V_i=X_i \text{ for } i\neq j.
$$

This is open in the product topology.

Therefore:

$$
\Pi_j
$$

is continuous.

---

## Question 2 — Homeomorphism Between Intervals

Find a homeomorphism between:

$$
(0,1)
\quad \text{and} \quad
(a,b).
$$

---

### Map

Define:

$$
f:(0,1)\to(a,b)
$$

by

$$
f(x)=a+(b-a)x.
$$

---

### Bijectivity

Inverse:

$$
f^{-1}(y)=\frac{y-a}{b-a}.
$$

Thus $f$ is bijective.

---

### Continuity

$f$ is linear, hence continuous.

$f^{-1}$ is also linear, hence continuous.

---

### Conclusion

$$
(0,1)\cong(a,b).
$$

---

## Question 3 — Is $(-1,1)$ Homeomorphic to $\mathbb{R}$?

---

### Map

Define:

$$
f:(-1,1)\to\mathbb{R}
$$

by

$$
f(x)=\frac{x}{1-|x|}
$$

(or equivalently)

$$
f(x)=\tan\left(\frac{\pi x}{2}\right).
$$

---

### Properties

- Continuous
- Bijective
- Continuous inverse

Therefore:

$$
(-1,1)\cong\mathbb{R}.
$$

---

## Question 4 — Matrix Spaces

Let

$$
M_n(\mathbb{R})
$$

be the set of $n\times n$ real matrices.

Identify:

$$
M_n(\mathbb{R})\cong\mathbb{R}^{n^2}.
$$

Give $M_n(\mathbb{R})$ the topology induced from $\mathbb{R}^{n^2}$.

---

### (a) Matrix Multiplication

Define:

$$
P:M_n(\mathbb{R})\times M_n(\mathbb{R})
\to M_n(\mathbb{R})
$$

by:

$$
P(A,B)=AB.
$$

---

### Continuity

Each entry of $AB$ is:

$$
(AB)_{ij}
=
\sum_{k=1}^n a_{ik}b_{kj}.
$$

This is a polynomial in the matrix entries.

Since polynomials are continuous:

$$
P
$$

is continuous.

---

### (b) Determinant Map

Define:

$$
\det:M_n(\mathbb{R})\to\mathbb{R}
$$

by:

$$
\det(A).
$$

---

### Continuity

The determinant is:

$$
\det(A)
=
\sum_{\sigma\in S_n}
\text{sgn}(\sigma)
\prod_{i=1}^n a_{i\sigma(i)}.
$$

This is a polynomial in the entries.

Therefore:

$$
\det
$$

is continuous.

---

## Question 5 — General Linear Group

Define:

$$
GL_n(\mathbb{R})
=
\{M\in M_n(\mathbb{R}) : \det(M)\neq0\}.
$$

Prove:

$$
GL_n(\mathbb{R})
$$

is open in $M_n(\mathbb{R})$.

---

### Proof

We have:

$$
GL_n(\mathbb{R})
=
\det^{-1}(\mathbb{R}\setminus\{0\}).
$$

Since:

$$
\det
$$

is continuous and

$$
\mathbb{R}\setminus\{0\}
$$

is open in $\mathbb{R}$,

its preimage is open.

Therefore:

$$
GL_n(\mathbb{R})
$$

is open.
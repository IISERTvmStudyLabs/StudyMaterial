## Question 1 — Orthogonal Group is Closed

Define

$$
O_n(\mathbb{R})
=
\{A\in M_n(\mathbb{R}) : AA^T=I\}.
$$

Here:

- $A^T$ is the transpose of $A$
- $I$ is the identity matrix
- $M_n(\mathbb{R}) \cong \mathbb{R}^{n^2}$

Prove:

$$
O_n(\mathbb{R})
$$

is closed in $M_n(\mathbb{R})$.

---

### Proof

Define:

$$
F:M_n(\mathbb{R}) \to M_n(\mathbb{R})
$$

by

$$
F(A)=AA^T.
$$

Matrix multiplication and transpose are continuous maps, so:

$$
F
$$

is continuous.

Then:

$$
O_n(\mathbb{R})
=
F^{-1}(\{I\}).
$$

Since $\{I\}$ is closed in $M_n(\mathbb{R})$ and $F$ is continuous, the preimage of a closed set is closed.

Therefore:

$$
O_n(\mathbb{R})
$$

is closed.

---

## Question 2 — Special Orthogonal Group

Define:

$$
SO_n(\mathbb{R})
=
\{A\in O_n(\mathbb{R}) : \det(A)=1\}.
$$

Prove:

$$
SO_n(\mathbb{R})
$$

is closed in $M_n(\mathbb{R})$.

---

### Proof

We know:

$$
O_n(\mathbb{R})
$$

is closed in $M_n(\mathbb{R})$.

Also:

$$
SO_n(\mathbb{R})
=
\det^{-1}(\{1\})\cap O_n(\mathbb{R}).
$$

Since:

- determinant is continuous
- $\{1\}$ is closed in $\mathbb{R}$

we get:

$$
\det^{-1}(\{1\})
$$

is closed.

Intersection of closed sets is closed, therefore:

$$
SO_n(\mathbb{R})
$$

is closed.

---

## Question 3 — Closure in $\mathbb{Q}$ and $\mathbb{R}$

Let $a,b\in\mathbb{R}$ with $a<b$.

Define:

$$
A=\{x\in\mathbb{Q}: a<x<b\}.
$$

---

### (a) Closure in $\mathbb{Q}$

The closure is:

$$
\overline{A}^{\mathbb{Q}}
=
\{x\in\mathbb{Q}: a\le x\le b\}.
$$

---

### Justification

Every rational number between $a$ and $b$ is already in $A$.

Also, rationals can approximate $a$ and $b$ arbitrarily closely.

Thus:

$$
a,b
$$

belong to the closure whenever they are rational.

Hence:

$$
\overline{A}^{\mathbb{Q}}
=
[a,b]\cap\mathbb{Q}.
$$

---

### (b) Closure in $\mathbb{R}$

Now consider $A$ as a subset of $\mathbb{R}$.

Then:

$$
\overline{A}^{\mathbb{R}}
=
[a,b].
$$

---

### Justification

Rational numbers are dense in $\mathbb{R}$.

Every real number in $[a,b]$ is a limit of rational numbers in $(a,b)$.

Therefore:

$$
\overline{A}^{\mathbb{R}}
=
[a,b].
$$

---

## Question 4 — Distance to a Set

Let $(X,d)$ be a metric space.

Let:

$$
U\subseteq X
$$

be open and

$$
K\subseteq X
$$

be closed.

Define:

$$
d_U(x)
=
\inf_{u\in U} d(x,u)
$$

and

$$
d_K(x)
=
\inf_{k\in K} d(x,k).
$$

---

### (a) Is $d_U$ continuous?

---

### Proof

For any $x,y\in X$:

$$
d_U(x)
=
\inf_{u\in U} d(x,u)
$$

and

$$
d_U(y)
=
\inf_{u\in U} d(y,u).
$$

By triangle inequality:

$$
d(x,u)\le d(x,y)+d(y,u).
$$

Taking infimum:

$$
d_U(x)\le d(x,y)+d_U(y).
$$

Similarly:

$$
d_U(y)\le d(x,y)+d_U(x).
$$

Thus:

$$
|d_U(x)-d_U(y)|
\le d(x,y).
$$

Therefore $d_U$ is Lipschitz and hence continuous.

---

### (b) Is $d_K$ continuous?

---

### Proof

Similarly:

$$
d_K(x)
=
\inf_{k\in K} d(x,k).
$$

Using the same argument:

$$
|d_K(x)-d_K(y)|
\le d(x,y).
$$

Thus $d_K$ is Lipschitz and therefore continuous.

---

### Conclusion

Both functions:

$$
d_U,\;d_K
$$

are continuous on $X$.
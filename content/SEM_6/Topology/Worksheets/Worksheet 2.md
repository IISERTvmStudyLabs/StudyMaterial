## Question 1 — Basis for Subspace Topology

Let $(X,\tau_X)$ be a topological space and let $\mathcal{B}_X$ be a basis for $\tau_X$.

Suppose $Y \subseteq X$ and let $\tau_Y$ be the subspace topology on $Y$:

$$
\tau_Y
=
\{U\cap Y : U\in\tau_X\}.
$$

Define

$$
\mathcal{B}_Y
=
\{U\cap Y : U\in\mathcal{B}_X\}.
$$

Prove that $\mathcal{B}_Y$ is a basis for $\tau_Y$.

---

### Proof

We verify the basis conditions.

---

### 1. Covering Property

Let $y\in Y$.

Since $\mathcal{B}_X$ is a basis for $\tau_X$, there exists $U\in\mathcal{B}_X$ such that

$$
y\in U.
$$

Then

$$
y\in U\cap Y \in \mathcal{B}_Y.
$$

Thus:

$$
Y = \bigcup_{B\in\mathcal{B}_Y} B.
$$

---

### 2. Intersection Property

Let

$$
y\in (U_1\cap Y)\cap (U_2\cap Y)
$$

where

$$
U_1,U_2\in\mathcal{B}_X.
$$

Then

$$
y\in U_1\cap U_2.
$$

Since $\mathcal{B}_X$ is a basis, there exists $U_3\in\mathcal{B}_X$ such that

$$
y\in U_3 \subseteq U_1\cap U_2.
$$

Hence

$$
y\in U_3\cap Y
\subseteq
(U_1\cap Y)\cap(U_2\cap Y).
$$

Therefore $\mathcal{B}_Y$ is a basis.

---

## Question 2 — Subspace Topologies of Lines in $\mathbb{R}^2$

Let $\mathbb{R}$ have the standard topology $\tau^{(1)}$.

Let $\mathbb{R}^2$ have the standard topology $\tau^{(2)}$.

Define maps:

$$
X:\mathbb{R}\to\mathbb{R}^2,\quad X(x)=(x,0)
$$

(horizontal axis)

$$
Y:\mathbb{R}\to\mathbb{R}^2,\quad Y(x)=(0,x)
$$

(vertical axis)

$$
D:\mathbb{R}\to\mathbb{R}^2,\quad D(x)=(x,x)
$$

(diagonal line)

Let

- $\tau_X$ be the subspace topology on $X(\mathbb{R})$
- $\tau_Y$ be the subspace topology on $Y(\mathbb{R})$
- $\tau_D$ be the subspace topology on $D(\mathbb{R})$

Prove:

$$
\tau_X = \tau_Y = \tau_D = \tau^{(1)}.
$$

---

### Proof for $\tau_X$

Let

$$
U\subseteq X(\mathbb{R})
$$

be open in the subspace topology.

Then

$$
U = V\cap X(\mathbb{R})
$$

for some open set $V\subseteq\mathbb{R}^2$.

Let

$$
(x_0,0)\in U.
$$

Since $V$ is open, there exists $\varepsilon>0$ such that

$$
(x_0-\varepsilon,x_0+\varepsilon)
\times
(-\varepsilon,\varepsilon)
\subseteq V.
$$

Intersecting with the x-axis gives:

$$
(x_0-\varepsilon,x_0+\varepsilon)\times\{0\}
\subseteq U.
$$

Thus open sets correspond exactly to open intervals in $\mathbb{R}$.

Hence:

$$
\tau_X = \tau^{(1)}.
$$

---

### Proof for $\tau_Y$

Similarly,

$$
U=V\cap Y(\mathbb{R})
$$

where $V$ is open in $\mathbb{R}^2$.

If

$$
(0,y_0)\in U
$$

then some rectangle

$$
(-\varepsilon,\varepsilon)
\times
(y_0-\varepsilon,y_0+\varepsilon)
$$

lies in $V$.

Intersecting with the y-axis gives:

$$
\{0\}\times
(y_0-\varepsilon,y_0+\varepsilon).
$$

Hence:

$$
\tau_Y=\tau^{(1)}.
$$

---

### Proof for $\tau_D$

Let

$$
U=V\cap D(\mathbb{R})
$$

where $V$ is open in $\mathbb{R}^2$.

If

$$
(x_0,x_0)\in U
$$

then some rectangle

$$
(x_0-\varepsilon,x_0+\varepsilon)
\times
(x_0-\varepsilon,x_0+\varepsilon)
$$

lies in $V$.

Intersecting with the diagonal gives:

$$
\{(x,x):x_0-\varepsilon<x<x_0+\varepsilon\}.
$$

This corresponds to an open interval in $\mathbb{R}$.

Hence:

$$
\tau_D=\tau^{(1)}.
$$

---

### Conclusion

$$
\tau_X=\tau_Y=\tau_D=\tau^{(1)}.
$$

---

## Question 3 — Subspace of Product Space

Let $(X,\tau_X)$ and $(Y,\tau_Y)$ be topological spaces.

Let:

$$
A\subseteq X
$$

$$
B\subseteq Y
$$

with subspace topologies:

$$
\tau_A
=
\{U\cap A : U\in\tau_X\}
$$

$$
\tau_B
=
\{V\cap B : V\in\tau_Y\}.
$$

Let:

$$
Z=X\times Y
$$

with product topology $\tau_Z$.

Consider:

$$
A\times B\subseteq X\times Y
$$

with subspace topology:

$$
\tau_{A\times B}.
$$

Prove:

$$
\tau_{A\times B}
=
\tau_A\times\tau_B.
$$

---

### Proof

A basis for $\tau_Z$ is:

$$
\mathcal{B}
=
\{U\times V:
U\in\tau_X,
V\in\tau_Y\}.
$$

Subspace topology basis:

$$
(U\times V)\cap(A\times B).
$$

But:

$$
(U\times V)\cap(A\times B)
=
(U\cap A)\times(V\cap B).
$$

Since:

$$
U\cap A\in\tau_A
$$

$$
V\cap B\in\tau_B
$$

these sets form a basis for $\tau_A\times\tau_B$.

Thus both topologies have the same basis.

Therefore:

$$
\tau_{A\times B}
=
\tau_A\times\tau_B.
$$
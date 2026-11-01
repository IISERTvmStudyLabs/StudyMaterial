## Question 1 — Composition of Continuous Maps

Let $(X,\tau_X)$, $(Y,\tau_Y)$ and $(Z,\tau_Z)$ be topological spaces.

Suppose

$$
f:X\to Y
$$

and

$$
g:Y\to Z
$$

are continuous.

Prove that

$$
g\circ f : X\to Z
$$

is continuous.

---

### Proof

Let $U\subseteq Z$ be open.

Since $g$ is continuous:

$$
g^{-1}(U)
$$

is open in $Y$.

Since $f$ is continuous:

$$
f^{-1}(g^{-1}(U))
$$

is open in $X$.

But:

$$
(g\circ f)^{-1}(U)
=
f^{-1}(g^{-1}(U)).
$$

Therefore:

$$
g\circ f
$$

is continuous.

---

## Question 2 — Inclusion Map

Let $(X,\tau_X)$ be a topological space and let $Y\subseteq X$.

Let $\tau_Y$ be the subspace topology on $Y$.

Consider the inclusion map:

$$
i:Y\to X
$$

given by

$$
i(y)=y.
$$

Verify that $i$ is continuous.

---

### Proof

Let $U\subseteq X$ be open.

Then:

$$
i^{-1}(U)
=
\{y\in Y : i(y)\in U\}
=
U\cap Y.
$$

Since $U\cap Y$ is open in the subspace topology:

$$
i^{-1}(U)\in\tau_Y.
$$

Therefore $i$ is continuous.

---

## Question 3 — Discrete and Trivial Topologies

Let:

- $\tau_t$ be the trivial topology on $X$:

$$
\tau_t=\{\emptyset,X\}
$$

- $\tau_d$ be the discrete topology on $X$:

$$
\tau_d=2^X.
$$

---

### (a) Prove

$$
\text{id}:(X,\tau_d)\to(X,\tau_t)
$$

is continuous.

---

### Proof

Open sets in $(X,\tau_t)$ are:

$$
\emptyset,\;X.
$$

Their preimages under id are:

$$
\text{id}^{-1}(\emptyset)=\emptyset
$$

$$
\text{id}^{-1}(X)=X.
$$

Both are open in $\tau_d$.

Therefore id is continuous.

---

### (b) Suppose

$$
\text{id}:(X,\tau_t)\to(X,\tau_d)
$$

is continuous. What can you say about $X$?

---

### Proof

Continuity requires:

Every open set in $\tau_d$ must have open preimage in $\tau_t$.

But:

$$
\text{id}^{-1}(A)=A
$$

for all $A\subseteq X$.

So every subset must be open in $\tau_t$.

But:

$$
\tau_t=\{\emptyset,X\}.
$$

So the only subsets must be:

$$
\emptyset,X.
$$

Thus:

$$
|X|\le 1.
$$

Therefore:

**$X$ has at most one element.**

---

## Question 4 — Translation on $\mathbb{R}^n$

Is translation on $\mathbb{R}^n$ continuous?

---

### Answer

Translation is the map:

$$
T_a(x)=x+a
$$

where $a\in\mathbb{R}^n$.

Each coordinate is:

$$
x_i \mapsto x_i+a_i.
$$

Addition of real numbers is continuous.

Therefore:

$$
T_a
$$

is continuous.

---

## Question 5 — Sum and Product Maps

Let

$$
S:\mathbb{R}^n\to\mathbb{R}
$$

be defined by:

$$
S(x_1,\dots,x_n)
=
x_1+\cdots+x_n.
$$

Let

$$
P:\mathbb{R}^n\to\mathbb{R}
$$

be defined by:

$$
P(x_1,\dots,x_n)
=
x_1x_2\cdots x_n.
$$

Prove $S$ and $P$ are continuous.

---

### Proof for S

Projection maps:

$$
\pi_i(x_1,\dots,x_n)=x_i
$$

are continuous.

Addition:

$$
(x,y)\mapsto x+y
$$

is continuous.

Finite sums of continuous functions are continuous.

Hence:

$$
S
$$

is continuous.

---

### Proof for P

Multiplication:

$$
(x,y)\mapsto xy
$$

is continuous.

Finite products of continuous functions are continuous.

Thus:

$$
P
$$

is continuous.

---

## Question 5(b) — Diagonal Map

Let

$$
D:\mathbb{R}\to\mathbb{R}^n
$$

be:

$$
D(x)=(x,x,\dots,x).
$$

Let:

$$
P:\mathbb{R}^n\to\mathbb{R}
$$

be as above.

Is:

$$
P\circ D
$$

continuous?

---

### Proof

Both maps are continuous:

$$
D
$$

is continuous because each coordinate map is $x\mapsto x$.

$$
P
$$

is continuous from part (5).

Therefore:

$$
P\circ D
$$

is continuous.

---

### Compute the Map

$$
(P\circ D)(x)
=
P(x,x,\dots,x)
=
x^n.
$$

---

### Polynomial Map

Consider:

$$
p:\mathbb{R}\to\mathbb{R}
$$

given by:

$$
p(x)=x^n.
$$

Since:

$$
p(x)=P(D(x)),
$$

and both maps are continuous:

$$
p
$$

is continuous.

---

### Conclusion

All polynomial maps:

$$
p:\mathbb{R}\to\mathbb{R}
$$

are continuous.
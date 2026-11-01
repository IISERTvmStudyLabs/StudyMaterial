## Question 1 — Unit Circle and Homeomorphisms

Let

$$
S^1=\{z\in\mathbb{C}:|z|=1\}
$$

denote the unit circle.

Determine whether $S^1$ is homeomorphic to:

- $[0,1]$
- $(0,1)$

---

### $S^1$ vs $[0,1]$

$S^1$ is compact because it is a closed and bounded subset of $\mathbb{R}^2$.

$[0,1]$ is compact.

However:

Removing one point from $[0,1]$ disconnects it:

$$
[0,1]\setminus\{x\}
$$

is disconnected.

But removing one point from $S^1$ leaves a connected set.

Since connectedness properties are preserved by homeomorphisms:

$$
S^1 \not\cong [0,1].
$$

---

### $S^1$ vs $(0,1)$

$S^1$ is compact but $(0,1)$ is not compact.

Compactness is preserved under homeomorphisms.

Therefore:

$$
S^1 \not\cong (0,1).
$$

---

### Conclusion

$$
S^1
$$

is homeomorphic to neither $[0,1]$ nor $(0,1)$.

---

## Question 2 — Images Under Homeomorphisms

Let

$$
f:X\to Y
$$

be a homeomorphism.

Let:

$$
A\subseteq X.
$$

---

### (a) Closed Sets

Suppose $A$ is closed in $X$.

Is:

$$
f(A)
$$

closed in $Y$?

---

### Proof

Since $f$ is a homeomorphism, $f^{-1}$ is continuous.

We have:

$$
f(A) = (f^{-1})^{-1}(A).
$$

Since $A$ is closed and $f^{-1}$ is continuous:

$$
f(A)
$$

is closed.

---

### Conclusion

Yes,

$$
f(A)
$$

is closed.

---

## (b) Connected Sets

Suppose $A$ is connected.

Is:

$$
f(A)
$$

connected?

---

### Proof

Continuous images of connected sets are connected.

Since $f$ is continuous:

$$
f(A)
$$

is connected.

---

### Conclusion

Yes,

$$
f(A)
$$

is connected.

---

## (c) Path Connected Sets

Suppose $A$ is path connected.

Is:

$$
f(A)
$$

path connected?

---

### Proof

Let:

$$
y_1,y_2\in f(A).
$$

Then:

$$
y_1=f(x_1),\quad y_2=f(x_2)
$$

for some $x_1,x_2\in A$.

Since $A$ is path connected, there exists a continuous path:

$$
\gamma:[0,1]\to A
$$

with:

$$
\gamma(0)=x_1,\quad \gamma(1)=x_2.
$$

Define:

$$
f\circ\gamma:[0,1]\to Y.
$$

Then:

$$
(f\circ\gamma)(0)=y_1,
\quad
(f\circ\gamma)(1)=y_2.
$$

Thus $f(A)$ is path connected.

---

### Conclusion

Yes,

$$
f(A)
$$

is path connected.

---

## (d) Totally Disconnected Sets

Suppose $A$ is totally disconnected.

Is:

$$
f(A)
$$

totally disconnected?

---

### Proof

Let $C\subseteq f(A)$ be connected.

Then:

$$
f^{-1}(C)
$$

is connected in $A$ since $f^{-1}$ is continuous.

Since $A$ is totally disconnected:

$$
f^{-1}(C)
$$

contains at most one point.

Thus:

$$
C
$$

contains at most one point.

Hence $f(A)$ is totally disconnected.

---

### Conclusion

Yes,

$$
f(A)
$$

is totally disconnected.

---

## (e) Compact Sets

Suppose $A$ is compact.

Is:

$$
f(A)
$$

compact?

---

### Proof

Continuous images of compact sets are compact.

Since $f$ is continuous:

$$
f(A)
$$

is compact.

---

### Conclusion

Yes,

$$
f(A)
$$

is compact.
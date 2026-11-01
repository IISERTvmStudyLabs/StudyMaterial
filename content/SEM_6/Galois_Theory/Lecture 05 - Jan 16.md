## Composite Field

Let $L/K$ and $M/K$ be field extensions.

The **composite field** of $L$ and $M$ over $K$ is denoted by

$$
LM.
$$

Let
$$
S = L \cup M.
$$

Then
$$
LM = K(S).
$$

Define
$$
A = \left\{ \sum a_i b_i \;\middle|\; a_i \in L,\; b_i \in M \right\}.
$$

Then
$$
LM = Q(A),
$$
the field of fractions of $A$.

---

### Elements of the Composite Field

Any element $\alpha \in LM$ is of the form

$$
\alpha
=
\frac{\sum a_i b_i}{\sum c_j d_j},
\quad
a_i, c_j \in L,\; b_i, d_j \in M,
\quad
\sum c_j d_j \neq 0.
$$

---

## Proposition

If $L/K$ is algebraic, then

$$
LM / M
$$

is algebraic.

Similarly, if $M/K$ is algebraic, then

$$
LM / L
$$

is algebraic.

In particular, if both $L/K$ and $M/K$ are algebraic, then

$$
LM / K
$$

is algebraic.

---

### Proof Sketch

It is enough to prove that for any $a \in L$ and $b \in M$,

$$
ab
$$

is algebraic over $M$.

Since $a \in L$ and $L/K$ is algebraic,

$$
a \text{ is algebraic over } K.
$$

Because $K \subset M \subset LM$,

$a$ is algebraic over $M$.

Also, $b \in M$, hence algebraic over $M$.

Therefore,
$$
ab
$$
is algebraic over $M$.

Hence every element of $LM$ is algebraic over $M$.

---

## Finite Extensions and Composite Fields

Suppose $L/K$ and $M/K$ are finite extensions.

Then:

1.
$$
LM/K \text{ is finite}.
$$

2.
$$
[L:K] \mid [LM:K],
\qquad
[M:K] \mid [LM:K].
$$

3.
$$
\mathrm{lcm}([L:K], [M:K])
\le
[LM:K]
\le
[L:K][M:K].
$$

---

### Proof Idea

Since $L/K$ and $M/K$ are finite, there exist

$$
L = K(\alpha_1, \dots, \alpha_m),
\qquad
M = K(\beta_1, \dots, \beta_n).
$$

Then

$$
LM
=
K(\alpha_1, \dots, \alpha_m, \beta_1, \dots, \beta_n).
$$

Hence

$$
[LM : K] < \infty.
$$

---

### Divisibility

Because

$$
K \subset L \subset LM,
$$

we get

$$
[L:K] \mid [LM:K].
$$

Similarly,

$$
[M:K] \mid [LM:K].
$$

---

### Upper Bound

Let

$$
[L:K] = r,
\qquad
[M:K] = s.
$$

Then by the Tower Law,

$$
[LM:K]
=
[LM:M][M:K].
$$

We claim

$$
[LM:M] \le r.
$$

Indeed, writing

$$
L = K(\alpha_1, \dots, \alpha_m),
$$

we get

$$
LM = M(\alpha_1, \dots, \alpha_m).
$$

Thus

$$
[LM:M]
\le
[K(\alpha_1, \dots, \alpha_m) : K]
=
r.
$$

Therefore,

$$
[LM:K]
\le
rs.
$$

---

## Example 1

Let

$$
\alpha = \sqrt[4]{2},
\qquad
\beta = \sqrt{2}.
$$

Then

$$
L = \mathbb{Q}(\alpha),
\qquad
M = \mathbb{Q}(\beta).
$$

Since

$$
\alpha \beta^2 = \sqrt[4]{2} \cdot (\sqrt{2})^2
=
2^{1/4} \cdot 2
=
2^{9/4},
$$

we see

$$
LM = \mathbb{Q}(\alpha, \beta)
=
\mathbb{Q}(\sqrt[4]{2}).
$$

---

## Example 2

Let

$$
\alpha = \sqrt[3]{2},
\qquad
\beta = \omega \sqrt[3]{2},
$$

where $\omega$ is a primitive cube root of unity.

Then

$$
L = \mathbb{Q}(\sqrt[3]{2}),
\qquad
M = \mathbb{Q}(\omega \sqrt[3]{2}).
$$

Then

$$
LM = \mathbb{Q}(\sqrt[3]{2}, \omega).
$$

We have

$$
[L:\mathbb{Q}] = 3,
\qquad
[M:\mathbb{Q}] = 3.
$$

Since

$$
[\mathbb{Q}(\omega) : \mathbb{Q}] = 2,
$$

we compute

$$
[LM : \mathbb{Q}]
=
[\mathbb{Q}(\sqrt[3]{2}, \omega) : \mathbb{Q}(\omega)]
\,[\mathbb{Q}(\omega) : \mathbb{Q}]
=
3 \cdot 2
=
6.
$$

Thus

$$
[LM : \mathbb{Q}] = 6.
$$
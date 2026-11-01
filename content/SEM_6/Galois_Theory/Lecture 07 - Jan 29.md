## Finite Extensions and Automorphisms

Let $L/K$ be a finite extension.

This means $L$ is a finite dimensional vector space over $K$, i.e.,

$$
[L : K] < \infty.
$$

We ask:

- What is $\mathrm{Aut}(L)$?
- What is $\mathrm{Aut}(L/K)$?
- Is $\mathrm{Aut}(L/K)$ finite?

---

### Determination by Generators

Suppose

$$
L = K(\alpha_1, \dots, \alpha_n).
$$

Any $\sigma \in \mathrm{Aut}(L/K)$ is completely determined by the images of the generators:

$$
\sigma(\alpha_i) = ?
$$

Thus possible automorphisms correspond to choices

$$
\{\alpha_1, \dots, \alpha_n\}
\longmapsto
\{\beta_1, \dots, \beta_n\}
\subset L,
$$

provided the map extends to a field automorphism fixing $K$.

---

## Induced Action on Polynomials

Let $\sigma \in \mathrm{Aut}(L/K)$.

Then

$$
\sigma : L \to L,
\qquad
\sigma(a) = a \quad \forall a \in K.
$$

Define an induced map

$$
\widetilde{\sigma} : L[x] \to L[x]
$$

by

$$
f(x) = a_0 + a_1 x + \dots + a_n x^n
\longmapsto
f^\sigma(x)
=
\sigma(a_0) + \sigma(a_1)x + \dots + \sigma(a_n)x^n.
$$

If $f(x) \in K[x]$, then all coefficients lie in $K$, hence

$$
\sigma(a_i) = a_i,
$$

so

$$
f^\sigma(x) = f(x).
$$

---

## Images of Algebraic Elements

Let $\alpha \in L$ be algebraic over $K$, and let

$$
m_{\alpha,K}(x)
=
x^n + a_{n-1}x^{n-1} + \dots + a_0
\in K[x]
$$

be its minimal polynomial.

Then

$$
m_{\alpha,K}(\alpha) = 0.
$$

Applying $\sigma$,

$$
0
=
\sigma(m_{\alpha,K}(\alpha))
=
m_{\alpha,K}(\sigma(\alpha)).
$$

Thus

$$
\sigma(\alpha)
$$

is also a root of $m_{\alpha,K}(x)$.

Hence, for each $\alpha \in L$,

$$
\sigma(\alpha)
$$

must be one of the finitely many roots of its minimal polynomial.

Therefore,

$$
\mathrm{Aut}(L/K)
$$

is finite.

---

## Example 1

Let

$$
K = \mathbb{Q},
\qquad
L = \mathbb{Q}(\sqrt{2}).
$$

The minimal polynomial is

$$
x^2 - 2,
$$

whose roots are

$$
\sqrt{2}, \quad -\sqrt{2}.
$$

Thus there are two automorphisms:

- Identity: $\sqrt{2} \mapsto \sqrt{2}$
- Conjugation: $\sqrt{2} \mapsto -\sqrt{2}$

Hence

$$
\mathrm{Aut}(L/K) \cong \mathbb{Z}/2\mathbb{Z}.
$$

---

## Example 2

Let

$$
K = \mathbb{Q},
\qquad
L = \mathbb{Q}(\sqrt[3]{2}).
$$

The minimal polynomial is

$$
x^3 - 2.
$$

Its roots in $\mathbb{C}$ are

$$
\sqrt[3]{2}, \quad
\omega \sqrt[3]{2}, \quad
\omega^2 \sqrt[3]{2},
$$

where $\omega$ is a primitive cube root of unity.

But only

$$
\sqrt[3]{2}
$$

lies in $L$.

Thus the only possible image is itself, so

$$
\mathrm{Aut}(L/K)
=
\{\mathrm{id}\}.
$$

---

## Example 3

Let

$$
L = \mathbb{Q}(\sqrt[3]{2}, \omega),
$$

where $\omega$ is a primitive cube root of unity.

The roots of $x^3 - 2$ are

$$
\sqrt[3]{2}, \quad
\omega \sqrt[3]{2}, \quad
\omega^2 \sqrt[3]{2}.
$$

Possible images of $\sqrt[3]{2}$ are these three roots.

Possible images of $\omega$ are

$$
\omega, \quad \omega^2.
$$

Thus there are $3 \times 2 = 6$ possibilities.

In fact,

$$
\mathrm{Aut}(L/\mathbb{Q}) \cong S_3.
$$

---

## General Question

Given a field $K$, can we find a field $L$ containing $K$ such that every polynomial over $K$ has a root in $L$?

(This leads to the notion of algebraic closure.)
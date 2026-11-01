## Algebraic Extensions

### Definition

Let $L/K$ be a field extension and let $\alpha \in L$.

We say $\alpha$ is **algebraic over $K$** if there exists a nonzero polynomial
$$
f(x) \in K[x]
$$
such that
$$
f(\alpha) = 0.
$$

If $\alpha$ is not algebraic over $K$, then $\alpha$ is called **transcendental** over $K$.

An extension $L/K$ is called **algebraic** if every $\alpha \in L$ is algebraic over $K$.

---

## Algebraic Element and Evaluation Map

Suppose $L/K$ is a field extension and $\alpha \in L$ is algebraic over $K$.

Define
$$
\phi : K[x] \to K(\alpha),
\qquad
f(x) \mapsto f(\alpha).
$$

Since $\alpha$ is algebraic, $\ker(\phi) \neq \{0\}$.

Let
$$
\ker(\phi) = \langle g(x) \rangle.
$$

If $h(x) \in K[x]$ satisfies $h(\alpha) = 0$, then
$$
g(x) \mid h(x).
$$

---

## Minimal Polynomial

Among all nonzero polynomials $g(x)$ such that $g(\alpha) = 0$, choose the **monic polynomial of least degree**.

### Definition

The monic polynomial of least degree
$$
m_{\alpha,K}(x) \in K[x]
$$
such that
$$
m_{\alpha,K}(\alpha) = 0
$$
is called the **minimal polynomial of $\alpha$ over $K$**.

Its degree is called the **degree of $\alpha$ over $K$**.

Moreover,
$$
[K(\alpha) : K] = \deg m_{\alpha,K}(x).
$$

---

## Examples

### (1) $\alpha = \sqrt[n]{m}$

Let $n \in \mathbb{N}$ and consider
$$
\alpha = \sqrt[n]{m},
\qquad
K = \mathbb{Q}, \quad L = \mathbb{R}.
$$

Then $\alpha$ satisfies
$$
x^n - m = 0.
$$

---

### (2) Primitive $n$th Root of Unity

Let
$$
K = \mathbb{Q}, \quad L = \mathbb{C},
\qquad
\zeta = e^{2\pi i / n}.
$$

Then $\zeta$ satisfies
$$
x^n - 1 = 0.
$$

Also,
$$
1 + \zeta + \zeta^2 + \dots + \zeta^{n-1} = 0.
$$

Hence $\zeta$ satisfies
$$
x^{n-1} + x^{n-2} + \dots + 1 = 0.
$$

The minimal polynomial of $\zeta$ has degree $n-1$ (in this case).

---

## Degree Relations in Tower

Suppose
$$
K \subset E \subset L,
\qquad
\alpha \in L.
$$

Then

$$
[K(\alpha) : K] = \deg(\alpha/K),
$$

$$
[E(\alpha) : E] = \deg(\alpha/E).
$$

By the Tower Law,

$$
[K(\alpha) : K]
=
[K(\alpha) : E]\,[E : K].
$$

---

## Example with Nested Extensions

Let
$$
K = \mathbb{Q},
\qquad
E = \mathbb{Q}(\sqrt{2}),
\qquad
\alpha = \sqrt[4]{2}.
$$

Then
$$
\alpha^2 = \sqrt{2}.
$$

Over $K$:
$$
m_{\alpha,K}(x) = x^4 - 2,
\qquad
\deg(\alpha/K) = 4.
$$

Over $E$:
$$
m_{\alpha,E}(x) = x^2 - \sqrt{2},
\qquad
\deg(\alpha/E) = 2.
$$

---

## Finite Degree Implies Algebraic

If
$$
[K(\alpha) : K] < \infty,
$$
then $\alpha$ is algebraic over $K$.

Conversely, if $\alpha$ is algebraic over $K$, then
$$
[K(\alpha) : K] = \deg m_{\alpha,K}(x) < \infty.
$$

---

## Two Algebraic Elements

Suppose $\alpha, \beta \in L$ are algebraic over $K$.

Then
$$
[K(\alpha) : K] < \infty,
\qquad
[K(\beta) : K] < \infty.
$$

Since
$$
K(\alpha, \beta) = K(\alpha)(\beta),
$$

by the Tower Law,

$$
[K(\alpha,\beta) : K]
=
[K(\alpha,\beta) : K(\alpha)]
\,[K(\alpha) : K].
$$

Because $\beta$ is algebraic over $K$, it is algebraic over $K(\alpha)$, so

$$
[K(\alpha,\beta) : K] < \infty.
$$

---

### Converse

If
$$
[K(\alpha,\beta) : K] < \infty,
$$
then both $\alpha$ and $\beta$ are algebraic over $K$.

---

## Characterisation

Let $L/K$ be a field extension and $\alpha_1, \dots, \alpha_n \in L$.

Then

$$
\alpha_1, \dots, \alpha_n \text{ are algebraic over } K
\quad \Longleftrightarrow \quad
[K(\alpha_1, \dots, \alpha_n) : K] < \infty.
$$

---

## Example

Let
$$
K = \mathbb{Q},
\qquad
L = \mathbb{Q}(\sqrt{2}, \sqrt{3}).
$$

Then

$$
[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]
=
[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})]
\,[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}].
$$

Since

$$
[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2,
$$

and

$$
[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2,
$$

we get

$$
[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 4.
$$

---

## Algebraic Closure Properties

Let $L/K$ be a field extension.

1. If $\alpha, \beta$ are algebraic over $K$, then
   $$
   \alpha \pm \beta, \quad \alpha\beta, \quad \alpha^{-1}
   $$
   are algebraic over $K$.

2. The set of all algebraic elements in $L$ over $K$ forms a **subfield** of $L$.

3. Every finite extension of $K$ is algebraic.
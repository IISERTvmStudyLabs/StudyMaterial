### Algebraic Extensions and Separable Degree

Let $L/K$ be an algebraic extension.

Fix an embedding

$$
\sigma : K \to \Omega
$$

into an algebraic closure $\Omega$.

Let

$$
E_\sigma = \{\text{all extensions of } \sigma \text{ to } L \to \Omega\}.
$$

Then

$$
[L:K]_{\mathrm{sep}} = |E_\sigma|.
$$

Moreover, $[L:K]_{\mathrm{sep}}$ is independent of the choice of $\sigma$ and $\Omega$.

---

### Simple Extensions

Let $L = K(\alpha)$, where $\alpha$ is algebraic over $K$.

Let $m_{\alpha,K}(x)$ be the minimal polynomial of $\alpha$ over $K$.

Then every extension $\widetilde{\sigma} : K(\alpha) \to \Omega$ is determined by the choice of a root of $m_{\alpha,K}(x)$ in $\Omega$.

Hence

$$
[K(\alpha):K]_{\mathrm{sep}}
\le
\deg m_{\alpha,K}
=
[K(\alpha):K].
$$

---

### Tower Formula (Separable Degree)

Let $K \subset E \subset L$ be fields, with $L/K$ algebraic.

Then

$$
[L:K]_{\mathrm{sep}}
=
[L:E]_{\mathrm{sep}} \cdot [E:K]_{\mathrm{sep}}.
$$

#### Sketch of Proof

Let $\sigma : K \to \Omega$ be an embedding.

- Let $\{\eta_i\}$ be the extensions of $\sigma$ to $E$.
- For each $\eta_i$, let $\{\tau_{ij}\}$ be the extensions of $\eta_i$ to $L$.

Then each $\tau_{ij}$ is an extension of $\sigma$ to $L$.

Thus

$$
[L:K]_{\mathrm{sep}}
=
[L:E]_{\mathrm{sep}} \cdot [E:K]_{\mathrm{sep}}.
$$

---

## Finite Extensions

Now suppose $L/K$ is finite.

Then

$$
[L:K]_{\mathrm{sep}} \le [L:K].
$$

---

### Definition

1. An algebraic element $\alpha$ over $K$ is **separable** if

   $$
   [K(\alpha):K]_{\mathrm{sep}} = [K(\alpha):K].
   $$

2. A polynomial $f(x)$ over $K$ is **separable** if all its roots are distinct.

3. An algebraic extension $L/K$ is **separable** if every $\alpha \in L$ is separable over $K$.

---

### Observation

If $f(x)$ is separable over $K$ and $\beta$ is a root of $f$ in an algebraic closure, then the minimal polynomial of $\beta$ over $K$ divides $f(x)$.

Since $f$ has distinct roots, so does the minimal polynomial.

Hence $\beta$ is separable.

---

### Stability Under Intermediate Fields

If

$$
K \subset E \subset L
$$

and $L/K$ is separable, then $L/E$ is separable.

Indeed, the minimal polynomial over $E$ divides the minimal polynomial over $K$.

---

## Proposition

Let $E/K$ be a field extension containing two field extensions $L/K$ and $M/K$.

If $L/K$ is separable, then

$$
LM/M
$$

is separable.

---

### Sketch

Let $\alpha \in L$ be separable over $K$.

Then its minimal polynomial over $K$ is separable.

Since separability is preserved under base change, $\alpha$ remains separable over $M$.

Hence $LM/M$ is separable.

---

## Theorem

Let $L/K$ be a finite extension.

Then the following are equivalent:

1. $L/K$ is separable.
2. $[L:K]_{\mathrm{sep}} = [L:K]$.

---

### Proof

Since $L$ is finite, write

$$
L = K(\alpha_1,\dots,\alpha_n).
$$

If $L/K$ is separable, then each $\alpha_i$ is separable.

Using the tower formula for separable degrees,

$$
[L:K]_{\mathrm{sep}}
=
[K(\alpha_1,\dots,\alpha_n):K]_{\mathrm{sep}}
=
[L:K].
$$

Conversely, if

$$
[L:K]_{\mathrm{sep}} = [L:K],
$$

then each simple extension in a tower must satisfy equality, hence each $\alpha \in L$ is separable.

Thus $L/K$ is separable.
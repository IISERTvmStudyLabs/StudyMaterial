### Continuation of Theorem (Normal Extensions)

We complete the proof of:

> $L/K$ normal  
> $\Longleftrightarrow$  
> $L$ is a splitting field  
> $\Longleftrightarrow$  
> every irreducible polynomial over $K$ having one root in $L$ splits in $L$.

---

### (iii) $\Rightarrow$ (i)

Let  

$$
\sigma : L \to \overline{K}
$$

be a $K$-algebra homomorphism.

Take $\alpha \in L$. Since $L/K$ is algebraic, $\alpha$ is algebraic over $K$.

Let  

$$
m_{\alpha,K}(x)
$$

be its minimal polynomial.

By assumption, if $m_{\alpha,K}$ has one root in $L$, then it splits completely in $L$.

Since $\alpha$ is a root, all roots of $m_{\alpha,K}$ lie in $L$.

Now $\sigma(\alpha)$ is also a root of $m_{\alpha,K}$.

Hence  

$$
\sigma(\alpha) \in L.
$$

Thus  

$$
\sigma(L) \subset L.
$$

Since $L/K$ is algebraic, $\sigma$ is surjective, so  

$$
\sigma(L) = L.
$$

Therefore $L/K$ is normal.

---

## Proposition

Suppose  

- $L/K$ is normal,
- $M/K$ is any algebraic extension.

Then:

1. $LM/M$ is normal.
2. If both $L/K$ and $M/K$ are normal, then  
   $LM/K$ and $L \cap M / K$ are also normal.

---

### Proof of (i)

Let  

$$
\sigma : LM \to \overline{K}
$$

be an $M$-algebra homomorphism.

Every element of $LM$ is a finite sum of elements of the form

$$
\sum a_i b_i,
\qquad
a_i \in L,\ b_i \in M.
$$

Then  

$$
\sigma\!\left(\sum a_i b_i\right)
=
\sum \sigma(a_i)\sigma(b_i).
$$

Since $\sigma$ fixes $M$,

$$
\sigma(b_i) = b_i.
$$

Because $L/K$ is normal,

$$
\sigma(a_i) \in L.
$$

Hence  

$$
\sigma(LM) \subset LM.
$$

Since $LM/M$ is algebraic, $\sigma$ is surjective.

Thus  

$$
\sigma(LM) = LM.
$$

So $LM/M$ is normal.

---

### Proof of (ii)

Let  

$$
\sigma : L \cap M \to \overline{K}
$$

be a $K$-algebra homomorphism.

If $x \in L \cap M$, then $x \in L$ and $x \in M$.

Since $L/K$ and $M/K$ are normal,

$$
\sigma(x) \in L
\quad\text{and}\quad
\sigma(x) \in M.
$$

Thus  

$$
\sigma(x) \in L \cap M.
$$

Hence  

$$
\sigma(L \cap M) \subset L \cap M.
$$

By algebraicity, $\sigma$ is surjective.

Therefore $L \cap M / K$ is normal.

---

## Example

Let  

$$
K = \mathbb{Q}, \qquad f(x) = x^p + x^{p-1} + \dots + 1.
$$

Let $\xi$ be a root of $f(x)$.

Then the roots of $f$ are

$$
\{\xi, \xi^2, \dots, \xi^p\}.
$$

Take  

$$
L = \mathbb{Q}(\xi).
$$

If $\sigma : L \to \mathbb{C}$ is a $\mathbb{Q}$-algebra homomorphism, then

$$
\sigma(\xi) = \xi^a
$$

for some $a$.

Since  

$$
[L : \mathbb{Q}] = p,
$$

we get

$$
\{\xi, \dots, \xi^p\}
$$

are all conjugates.

Hence  

$$
L/\mathbb{Q}
$$

is normal.

---

## Separable Extension

### Definition

Let $L/K$ be an algebraic extension.

Fix an embedding  

$$
\sigma : K \to \Omega
$$

into an algebraic closure $\Omega$.

Let  

$$
E_\sigma
=
\{\text{all } K\text{-embeddings } L \to \Omega\}.
$$

The **separable degree** of $L/K$ is defined by

$$
[L : K]_{\mathrm{sep}} = |E_\sigma|.
$$

---

### Independence of Choice

The definition appears to depend on:

- the embedding $\sigma : K \to \Omega$,
- the algebraic closure $\Omega$.

We show it is independent of these choices.

---

### Claim

Let  

$$
\sigma : K \to \Omega,
\qquad
\eta : K \to \Omega'
$$

be two embeddings into algebraic closures.

Then there is a bijection between the sets of embeddings

$$
E_\sigma
\quad\text{and}\quad
E_\eta.
$$

---

### Sketch of Argument

We have:

$$
\sigma(K) \subset \Omega,
\qquad
\eta(K) \subset \Omega'.
$$

The map  

$$
\eta \circ \sigma^{-1}
:
\sigma(K) \to \eta(K)
$$

is an isomorphism.

Since both closures are algebraic over these subfields, this isomorphism extends to

$$
\tau : \overline{\sigma(K)} \to \overline{\eta(K)}.
$$

Thus embeddings correspond under conjugation by $\tau$.

Hence the separable degree does not depend on the chosen embedding or algebraic closure.
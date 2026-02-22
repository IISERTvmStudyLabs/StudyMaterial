## Recap

Let $K$ be a field.

### Case 1: $\operatorname{char}(K)=0$

Every irreducible polynomial over $K$ is separable.

---

### Case 2: $\operatorname{char}(K)=p>0$

Let $f(x)\in K[x]$ be irreducible.

If $Df(x)\neq 0$, then $f$ is separable.

If $Df(x)=0$, then
$$
f(x)=a_0+a_1x^p+a_2x^{2p}+\cdots+a_nx^{np}.
$$

Let $\phi:K\to K$ be the Frobenius map,
$$
\phi(a)=a^p.
$$

If $\phi$ is an isomorphism (i.e. surjective), then for each $a_i$ there exists $b_i\in K$ such that
$$
a_i=b_i^p.
$$

Hence
$$
f(x)
=
b_0^p+b_1^px^p+\cdots+b_n^px^{np}
=
(b_0+b_1x+\cdots+b_nx^n)^p.
$$

Thus $f$ is not irreducible — contradiction.

Therefore:

> If the Frobenius map is an isomorphism, every irreducible polynomial is separable.

---

## Conclusion

Let $K$ be a field with $\operatorname{char}(K)=p>0$.

If the Frobenius map
$$
\phi:K\to K,\qquad a\mapsto a^p
$$
is an isomorphism, then:

1. Every irreducible polynomial over $K$ is separable.
2. The product of two distinct irreducible polynomials is separable.

---

# Proposition

Let $K$ be a field with $\operatorname{char}(K)=p>0$.

Let $\phi:K\to K$ be the Frobenius morphism.

If $\alpha\in K\setminus\phi(K)$, then for every $n\ge1$,
$$
x^{p^n}-\alpha
$$
is irreducible over $K$.

### Sketch of Proof

Suppose
$$
f(x)=x^{p^n}-\alpha=g(x)h(x).
$$

Let $\beta$ be a root of $f$ in $\overline K$.

Then
$$
\beta^{p^n}=\alpha.
$$

In $\overline K$,
$$
x^{p^n}-\alpha=(x-\beta)^{p^n}.
$$

Since $K[x]$ is a UFD, any divisor has the form
$$
g(x)=(x-\beta)^r.
$$

Write $r=p^ms$ with $(p,s)=1$.

Then
$$
g(x)=(x-\beta)^{p^ms}
=
(x^{p^m}-\beta^{p^m})^s.
$$

From coefficients, we obtain $\beta^{p^m}\in K$, hence
$$
\alpha=\beta^{p^n}\in\phi(K),
$$
contradiction.

Thus $x^{p^n}-\alpha$ is irreducible.

---

# Perfect Fields

### Definition

A field $K$ is **perfect** if every irreducible polynomial over $K$ is separable.

### Examples

1. Every field of characteristic $0$.
2. A field of characteristic $p>0$ where Frobenius is an isomorphism.
3. Every algebraically closed field.

---

# Primitive Element Theorem

Let $L/K$ be a finite extension.

1. $L/K$ is simple if there are only finitely many intermediate fields.
2. If $L/K$ is separable, then $L/K$ is simple.

---

# Lemma (Finite Groups)

Let $G$ be a finite group of order $n$.

Suppose for every divisor $d\mid n$,
$$
\bigl|\{x\in G: x^d=e\}\bigr|\le d.
$$

Then $G$ is cyclic.

---

### Proof Sketch

Let
$$
A_d=\{x\in G:\text{ord}(x)=d\}.
$$

If $A_d\neq\varnothing$, choose $x\in A_d$.

Then $G_d=\langle x\rangle$ has order $d$.

Since
$$
|G_d|=d
\quad\text{and}\quad
\bigl|\{x\in G:x^d=e\}\bigr|\le d,
$$

we get $A_d\subseteq G_d$.

Hence $A_d$ consists precisely of the generators of $G_d$, so
$$
|A_d|=\varphi(d).
$$

Summing over all divisors of $n$,
$$
n=|G|
=\sum_{d\mid n}|A_d|
\le\sum_{d\mid n}\varphi(d)
=n.
$$

Thus equality holds and $A_n\neq\varnothing$.

Hence $G$ has an element of order $n$ and is cyclic.

---

### Fact

If $x^d=1$, then $x$ is a root of
$$
x^d-1=0.
$$
# Theorem

Let $(\Omega, d)$ be a metric space and let
$$
\mu : \mathcal{B}(\Omega) \to [0, \infty]
$$
be a measure.

Then:

1. For every $E \in \mathcal{B}(\Omega)$,
$$
\mu(E) = \inf\{\mu(U) : E \subseteq U,\ U \text{ open}\}
$$
and
$$
\mu(E) = \sup\{\mu(F) : F \subseteq E,\ F \text{ closed}\}.
$$

2. If $E \in \mathcal{B}_{\mu}$, then the same approximation formulas hold for $E$.

3. If $\Omega$ is $\sigma$-compact, then for every $E \in \mathcal{B}_{\mu}(\Omega)$,
$$
\mu(E) = \sup\{\mu(K) : K \subseteq E,\ K \text{ compact}\}.
$$

___
## Proof (Part 1: Borel sets)

Define
$$
\mathcal{G} := \{A \in \mathcal{B}(\Omega) : A \text{ satisfies both outer and inner approximation formulas}\}.
$$

We show that $\mathcal{G}$ is a $\sigma$-algebra.

### Step 1: $\Omega \in \mathcal{G}$

This is immediate from definitions.

### Step 2: Closed under complements

Assume $A \in \mathcal{G}$. Fix $\varepsilon > 0$.

From approximation for $A$, choose:

- open $U \supseteq A$ with $\mu(U) < \mu(A) + \varepsilon/2$,
- closed $F \subseteq A$ with $\mu(F) > \mu(A) - \varepsilon/2$.

Hence
$$
\mu(U \setminus F) < \varepsilon.
$$

Now $U^c \subseteq A^c \subseteq F^c$ and
$$
U \setminus F = F^c \setminus U^c.
$$
So
$$
\mu(F^c \setminus U^c) < \varepsilon.
$$

This gives outer and inner approximation for $A^c$, hence $A^c \in \mathcal{G}$.

### Step 3: Closed under countable unions

Let $\{A_n\}_{n \ge 1} \subseteq \mathcal{G}$ and put
$$
A := \bigcup_{n=1}^{\infty} A_n.
$$

Fix $\varepsilon > 0$.

For each $n$, choose open $U_n \supseteq A_n$ such that
$$
\mu(U_n \setminus A_n) < \frac{\varepsilon}{2^n}.
$$

Let
$$
U := \bigcup_{n=1}^{\infty} U_n.
$$
Then $U$ is open, $A \subseteq U$, and
$$
\mu(U \setminus A)
\le \sum_{n=1}^{\infty} \mu(U_n \setminus A_n)
< \sum_{n=1}^{\infty} \frac{\varepsilon}{2^n}
= \varepsilon.
$$

Similarly, for each $n$, choose closed $F_n \subseteq A_n$ such that
$$
\mu(A_n \setminus F_n) < \frac{\varepsilon}{2^{n+1}}.
$$

Define
$$
F_0 := \bigcup_{n=1}^{\infty} F_n \subseteq A.
$$
Then
$$
\mu(A \setminus F_0)
\le \sum_{n=1}^{\infty} \mu(A_n \setminus F_n)
< \sum_{n=1}^{\infty} \frac{\varepsilon}{2^{n+1}}
< \varepsilon.
$$

Since finite unions of closed sets are closed, define
$$
F_N := \bigcup_{k=1}^{N} F_k.
$$
Using continuity of measure and $F_N \uparrow F_0$, for large $N$ we have
$$
\mu(A \setminus F_N) < \varepsilon.
$$
So $A$ has closed inner approximation and open outer approximation, hence $A \in \mathcal{G}$.

Therefore $\mathcal{G}$ is a $\sigma$-algebra.

___
### Step 4: Every closed set belongs to $\mathcal{G}$

Let $F \subseteq \Omega$ be closed. For $n \ge 1$, define
$$
U_n := \bigcup_{x \in F} B\left(x, \frac{1}{n}\right)
= \{y \in \Omega : \exists x \in F \text{ with } d(x,y) < 1/n\}.
$$

Then each $U_n$ is open, $F \subseteq U_n$, and $U_{n+1} \subseteq U_n$.

Claim:
$$
\bigcap_{n=1}^{\infty} U_n = F.
$$

Proof of claim: if $y \in \cap_n U_n$, then for each $n$ there exists $x_n \in F$ with
$$
d(x_n, y) < \frac{1}{n}.
$$
Hence $x_n \to y$. Since $F$ is closed, $y \in F$.

Now by continuity from above,
$$
\mu(U_n) \downarrow \mu(F).
$$
Thus for any $\varepsilon > 0$, for some $n_0$,
$$
\mu(U_{n_0}) < \mu(F) + \varepsilon.
$$

So closed sets satisfy the outer approximation formula, and therefore closed sets are in $\mathcal{G}$.

Since $\mathcal{G}$ is a $\sigma$-algebra containing all closed sets, it contains
$$
\mathcal{B}(\Omega).
$$
But by definition $\mathcal{G} \subseteq \mathcal{B}(\Omega)$, hence
$$
\mathcal{G} = \mathcal{B}(\Omega).
$$

So Part 1 is proved.

___
## Remarks for Parts 2 and 3

1. For $E \in \mathcal{B}_{\mu}$, write $E = B \cup N$ with $B \in \mathcal{B}(\Omega)$ and $N \subseteq Z$ for some Borel null set $Z$.
Using monotonicity and $\mu(Z)=0$, the same inf-sup approximation identities transfer from $B$ to $E$.

2. If $\Omega$ is $\sigma$-compact, write
$$
\Omega = \bigcup_{m=1}^{\infty} K_m
$$
with $K_m$ compact. Combining inner approximation by closed sets with truncation on $K_m$ yields approximation from below by compact subsets, giving
$$
\mu(E) = \sup\{\mu(K): K \subseteq E,\ K \text{ compact}\}.
$$

___
Completion details for Parts 2 and 3 were left as exercises in class.

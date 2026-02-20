We have a $\sigma$ - additive ser function (pre - measure) on ,$\mathcal{A} \subseteq \mathcal{P}(\ohm)$
Then we defined 
$$
\mu^{*}(E) = \inf \left\{ \sum_{i=1}^{\infty} \mu(A_{i})\bigg| E \subseteq \bigcup_{i=1}^{\infty} , A_{i} \in \mathcal{A}, \forall i \right\}
$$
$$
\mathcal{M} = \left\{A \subseteq \ohm \big|\mu^{*}(E) = \mu^{*}(E \cap A) + \mu^{*}(E \cap A^c), \forall E \in \ohm \right\}
$$

$\bullet A \subseteq \mathcal{M}$
$\bullet \mathcal{M}$ is an algebra.
## Lemma 4

If $\{ F_j \}_{j=1}^n \subset \mathcal{M}$ is disjoint then $\sum_{i=1}^n \mu^*(E \cap F_i) = \mu^*(E \cap \bigcup_{j=1}^n F_j)$ where $E \subseteq \Omega$.
### Proof

For $n=1$, there is nothing to prove, assume $\circledast$ holds for $n \in \mathbb{N}$

Take

$$\{ F_j \}_{j=1}^{n+1} \subseteq \mathcal{M}$$

is a disjoint collection.

$$\mu^* (E \cap \bigcup_{j=1}^{n+1} F_j) = \mu^* (E \cap \bigcup_{j=1}^{n+1} F_j \cap F_{n+1}) + \mu^* (E \cap \bigcup_{j=1}^{n+1} F_j \cap F_{n+1}^c)$$

$$= \mu^* (E \cap F_{n+1}) + \mu^* (E \cap \bigcup_{j=1}^{n} F_j)$$

$$= \mu^* (E \cap F_{n+1}) + \sum_{j=1}^{n} \mu^* (E \cap F_j)$$

$$= \sum_{j=1}^{n+1} \mu^* (E \cap F_j)$$

## Lemma 5

$\mathcal{M}$ is a $\sigma$-algebra.

### Proof

It is enough to prove that $\mathcal{M}$ is closed under countable disjoint unions because

If $\{ A_j \} \subseteq \mathcal{M}$ then we define

$$B_n = A_n \setminus \bigcup_{j=1}^{n-1} A_j$$

Since $\mathcal{M}$ is an algebra

$$B_n \in \mathcal{M} \ \forall n \text{ and } \bigcup_{n=1}^{\infty} B_n = \bigcup_{j=1}^{\infty} A_j$$

Take $\{ E_j \} \subseteq \mathcal{M}$ a disjoint collection.

Write

$$F_n = \bigcup_{j=1}^{n} E_j, \ F = \bigcup_{j=1}^{\infty} E_j = \bigcup_{n=1}^{\infty} F_n$$
Take $E \subseteq \Omega$, then

$$\begin{aligned} \mu^*(E) &\geq \mu^*(E \cap F_n) + \mu^*(E \cap F_n^c) \\ &\geq \sum_{j=1}^n \mu^*(E \cap E_j) + \mu^*(E \cap F^c) \end{aligned}$$

Taking $\lim_{n \to \infty}$ we get

$$\mu^*(E) \geq \sum_{j=1}^\infty \mu^*(E \cap E_j) + \mu^*(E \cap F^c)$$

**NOTE**

$$\bigcup (E \cap E_j) = E \cap \bigcup E_j = E \cap F$$

$\implies \mu^*(E \cap F) \leq \sum \mu^*(E \cap E_j)$

Then

$$\mu^*(E) \geq \mu^*(E \cap F) + \mu^*(E \cap F^c)$$

## Lemma 6

$\mu^*(A) = \mu(A), \forall A \in \mathcal{A}$

### Proof

$$\mu^*(A) \leq \mu(A)$$

follows from the definition of $\mu^*$.

So we want to prove $\mu(A) \leq \mu^*(A)$. It is enough to prove

$$\mu(A) \leq \sum_{j=1}^\infty \mu(A_j), \forall \{A_j\} \subseteq \mathcal{A}$$

such that $A \subseteq \bigcup_{j=1}^\infty A_j$

Take any a cover $\{A_j\} \subseteq \mathcal{A}$ of $A$.
Set

$$B_n = A_n \setminus \bigcup_{j=1}^{n-1} A_j$$

Then $\{ B_n \} \subseteq \mathcal{A}$ is disjoint and $\bigcup A_j = \bigcup_{n \geq 1} B_n$

Then,

$$A = A \cap \bigcup_{n \geq 1} B_n = \bigcup_{n \geq 1} A \cap B_n$$

$$\begin{aligned} \implies \mu(A) &= \sum_{n \geq 1} \mu(A \cap B_n) \\ &\leq \sum_{n \geq 1} \mu(A_n) \end{aligned}$$

## Lemma 7

$\mu^*|_{\mathcal{M}} : \mathcal{M} \to [0, \infty]$ is a measure.

### Proof

For any disjoint collection $\{ A_j \}_{j=1}^{\infty} \subseteq \mathcal{M}$, then

$$\mu^* \left( \bigcup A_j \right) \leq \sum \mu^*(A_j)$$

**NOTE**

- $\mathcal{M} \supseteq \{ F_j \}_{j=1}^n$
    
- $E \subseteq \Omega, \mu^* (E \cap \bigcup_{j=1}^n F_j) = \sum_{j=1}^n \mu^*(E \cap F_j)$
    

By Lemma 4,

$$\mu^* \left( \bigcup_{j=1}^\infty A_j \right) \geq \mu^* \left( \bigcup_{j=1}^n A_j \right) = \sum_{j=1}^n \mu^*(A_j)$$

Taking $n \to \infty$, then we have reverse inequality.

$\mu : \mathcal{A} \to [0, \infty]$, a $\sigma$-additive set function (pre-measure) on an algebra. Then $\exists$ a $\sigma$-algebra $\mathcal{M}$ containing $\mathcal{A}$ and measure

$$\nu := \mu^*|_{\mathcal{M}} \text{ on } \mathcal{M}$$

**NOTE**

$\mathcal{F}(\mathcal{A}) \subseteq \mathcal{M}$
$$\mathcal{I} = \{ (a, b] : -\infty \leq a \leq b < \infty \} \cup \{ (c, \infty) : c \in \mathbb{R} \}$$

$$\mathcal{F}(\mathcal{I}) = \mathcal{B}_{\mathbb{R}} \subsetneq \mathcal{M}_{\mathbb{R}} \subsetneq \mathcal{P}(\mathbb{R})$$

**NOTE**

- $\mathcal{B}_{\mathbb{R}} =$ Borel $\sigma$-algebra
    
- $\mathcal{M}_{\mathbb{R}} =$ Lebesgue $\sigma$-algebra
    

---


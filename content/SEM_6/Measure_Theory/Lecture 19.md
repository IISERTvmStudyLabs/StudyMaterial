
# Definition

**Carathéodory** — Suppose $\nu : \mathcal{A} \to [0, \infty]$ is a premeasure where $\mathcal{A}$ is an algebra over $\Omega$.

$$
\nu^* : \mathcal{P}(\Omega) \to [0, \infty]
$$

$\mathcal{M} \subseteq \mathcal{P}(\Omega)$ is a $\sigma$-algebra.

$\nu^*|_{\mathcal{M}}$ is a measure.

$$
\mathcal{F}(\mathcal{A}) = \left\{ \bigcup_{i=1}^{\infty} E_i : n \in \mathbb{N}, E_i \in \mathcal{A} \right\}
$$

## Proposition

Given $A \in \mathcal{M}$, $\exists B \in \mathcal{F}(\mathcal{A})$ such that

$$
\nu^*(A) = \nu^*(B)
$$

### Proof

If $\nu^*(A) = \infty$, then one can take $B = \Omega$.

If $\nu^*(A) < \infty$, then for each $n \in \mathbb{N}$,

$\exists \{E_{n,j}\} \subseteq \mathcal{A}$ such that $A \subseteq \bigcup_{j=1}^{\infty} E_{n,j}$ and

$$
\nu^*(A) \le \sum_j \nu(E_{n,j}) \le \nu^*(A) + \frac{1}{n}
$$

Take

$$
B_n = \bigcup_j E_{n,j}
$$

Then

$$
A \subseteq B_n \,\, \forall n
$$

Take

$$
B = \bigcap_{n=1}^{\infty} B_n, \text{ then } A \subseteq B
$$

$$
\nu^*(B) \le \nu^*(B_n) \le \sum_j \nu^*(E_{n,j}) \le \nu^*(A) + \frac{1}{n}
$$

$$
\Rightarrow \nu^*(B) \le \nu^*(A)
$$

Since $A \subseteq B$, then $\nu^*(A) \le \nu^*(B)$

$$
\Rightarrow \nu^*(B) = \nu^*(A)
$$
**20-1-26**

$$\mu_0 : \mathcal{A} \longrightarrow [0, \infty], \sigma\text{-additive (a pre-measure)}$$

$$\mu : \mathcal{M} \longrightarrow [0, \infty), \text{measure}$$

- $\mathcal{A} \subseteq \mathcal{F}(\mathcal{A}) \subseteq \mathcal{M}$

# Theorem

Let $\mu_0$ be a pre-measure on an algebra $\mathcal{A}$ i.e., $\mu_0$ is a $\sigma$-additive set function on $\mathcal{A}$. Then there exists a measure $\mu$ on $\mathcal{F}(\mathcal{A})$ whose restriction to $\mathcal{A}$ is $\mu_0$. If $\nu$ is another measure on $\mathcal{F}(\mathcal{A})$ that extends $\mu_0$ then

$$\nu(E) \leq \mu(E), \forall E \in \mathcal{F}(\mathcal{A})$$

with equality $\mu(E) < \infty$.

If $\mu_0$ is $\sigma$-finite; there exist a sequence of sets such that

$$\Omega = \bigcup_{i \geq 1} A_i$$

with $\mu_0(A_i) < \infty$, then $\mu$ is the unique extension of $\mu_0$ to a measure on $\mathcal{F}(\mathcal{A})$.

$$\mathcal{I} = \{ (a, b] : a, b \in \mathbb{R} \} \cup \{ (-\infty, c), (d, \infty) : c, d \in \mathbb{R} \}$$

$$\implies \mathbb{R} = \bigcup_{n \in \mathbb{Z}} (n, n+1)$$
### Proof

Take $E \in \mathcal{F}(\mathcal{A}) \subseteq \mathcal{M} = \{ A \in \mathcal{P}(\Omega) : \mu_0^*(F) = \mu_0^*(A \cap F) + \mu_0^*(A^c \cap F), \forall F \in \mathcal{P}(\Omega) \}$

with

$$E \subseteq \bigcup_{i \geq 1} A_i, A_i \in \mathcal{A}$$

$$= A$$

Then,

$$\nu(E) \leq \sum_{i \geq 1} \nu(A_i) = \sum_{i \geq 1} \mu_0(A_i)$$

Thus

$$\nu(E) \leq \mu_0^*(E) = \mu(E) \text{ --- (1)}$$

**NOTE**

Namely, $\mu = \mu_0^* |_{\mathcal{F}(\mathcal{A})}$

If $\mu(E) < \infty$, then given $\varepsilon > 0$, we can choose $\{ A_i \} \subseteq \mathcal{A}$ such that

$$\mu_0^*(E) = \mu(E) \leq \mu(A) \leq \sum \mu_0(A_i) \leq \mu(E) + \varepsilon$$

where $A = \bigcup_{i \geq 1} A_i$. This implies that

$$\mu(A \setminus E) < \varepsilon \quad (*)$$

Now,

$$\mu(E) \leq \mu(A) = \lim_{n \to \infty} \mu(\bigcup_{i=1}^n A_i) = \nu(A)$$

$$= \nu(E) + \nu(A \setminus E) \leq \nu(E) + \mu(A \setminus E) \quad \{ \text{by (1)} \}$$

$$\leq \nu(E) + \varepsilon$$

Since $\varepsilon > 0$ was arbitrary, $\mu(E) \leq \nu(E)$

We can assume $\Omega = \bigcup_{i \geq 1} B_i, \{ B_i \}$

is disjoint in $\mathcal{A}, \mu_0(B_i) < \infty$. Take $F \in \mathcal{F}(\mathcal{A})$,

Then

$$F = F \cap \Omega = F \cap (\bigcup_{i \geq 1} B_i) = \bigcup_{i \geq 1} F \cap B_i$$
$$\implies \nu(F) = \sum_{i \geq 1} \nu(F \cap B_i) = \sum_{i \geq 1} \mu(F \cap B_i) = \mu(F)$$

Consider $(\mathbb{R}, \mathcal{B}_{\mathbb{R}})$ where $\mathcal{A} = \mathcal{L}$ is the intervals of open sets.

Let $D_1$ and $D_2$ be two disjoint countable dense sets in $\mathbb{R}$.

Define $\mu_j(A) = c(A \cap D_j), j=1, 2, A \in \mathcal{B}_{\mathbb{R}}$ and $c$ is the counting measure.

**NOTE**

$\mu_1(\mathbb{R} \cap D_1) = \infty$, Since $D_1$ is dense.

$\mu_1(D_2) = 0$, so $\{ \{x\} : x \in D_1 \} \cup \{ \mathbb{R} \setminus D_1 \}$ is a cover of $\mathbb{R}$ with respect to $\mu_1$.

$\mu_1$ and $\mu_2$ are not $\sigma$-finite on $\mathcal{B}_{\mathbb{R}}$. If $A \in \mathcal{A}(\mathcal{L})$, then

$$A = \bigcup_{j=1}^n I_j; I_j \in \mathcal{L}, \text{ disjoint.}$$

$$\mu_1(A) = \mu_2(A) = \infty$$

So, $\mu_1 = \mu_2$ on $\mathcal{A}$.

However $\mu_1 \neq \mu_2$ on $\mathcal{B}_{\mathbb{R}}$ because

$$\mu_1(D_1) = \infty, \mu_2(D_1) = 0$$

because $\mu_1, \mu_2$ are not $\sigma$-finite on $\mathcal{B}_{\mathbb{R}}$.

# Borel measure on $\mathbb{R}$

Let $F : \mathbb{R} \to \mathbb{R}$ be increasing and right continuous.

Define

$$\overline{\mathbb{R}} = \mathbb{R} \cup \{ -\infty, \infty \}$$
$$F(\infty) = \sup_{x \in \mathbb{R}} F(x), F(-\infty) = \inf_{x \in \mathbb{R}} F(x)$$

Recall

$$\mathcal{L} = \{ (a, b] : -\infty \leq a \leq b \leq \infty \}$$

where interpret $(a, \infty]$ as $(a, \infty), [a, a]$ as $\emptyset$ for $a \in \mathbb{R}$.
 
Define $\lambda_F : \mathcal{L} \to [0, \infty]$ by

$$\lambda_F((a, b]) = F(b) - F(a)$$

**Example:-**

i) $F(x) = x$,

ii) $F(x) = \begin{cases} 1, & x \geq 0 \\ 0, & x < 0 \end{cases}$

## Lemma

Let $\{ (a_i, b_i] \}_{i=1, \dots, k}$ be disjoint and

$$\bigcup_{i=1}^k (a_i, b_i] \subseteq (a, b], \text{ where } a_i, b_i, a, b \in \overline{\mathbb{R}}.$$

Then $$\sum_{i=1}^k \lambda_F((a_i, b_i]) \leq \lambda_F((a, b])$$

### Proof

WLOG, assume $\lambda_F((a, b]) < \infty$. Then $F(a), F(b) \in \mathbb{R}$

By monotonically, if $F, F(a), F(b) \in \mathbb{R}$

By renaming, if necessary, we assume $a_1 \leq a_2 \leq \dots \leq a_k$

Since intervals are disjoint and all of them are contained in $(a, b]$

$$a \leq a_1 < b_1 \leq a_2 \leq b_2 \leq \dots \leq a_k < b_k \leq b$$

$$\therefore F(a) \leq F(a_1) \leq F(b_1) \leq \dots \leq F(a_k) \leq F(b_k) \leq F(b)$$
$$\begin{aligned} F(b) - F(a) = & (F(b) - F(b_k)) + (F(b_k) - F(a_k)) + \dots + (F(b_2) - F(a_2)) \\ & + (F(a_2) - F(b_1)) + (F(b_1) - F(a_1)) + (F(a_1) - F(a)) \end{aligned}$$

**NOTE**

$\{ F(b_i) - F(a_i) \}$ is non-negative.

$$F(b) - F(a) \geq \sum_{i=1}^k (F(b_i) - F(a_i))$$

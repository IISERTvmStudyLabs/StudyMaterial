# Theorem

Suppose $f_n: \mathbb{R} \to \mathbb{R}$ are integrable with

$$
\int_{\mathbb{R}} |f_n| \, d\lambda \le \frac{1}{n^2} \quad \forall n
$$

Then $f_n \to 0$ pointwise almost everywhere.

### Proof

$$
\sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n| \, d\lambda \le \sum_{n=1}^{\infty} \frac{1}{n^2} < \infty
$$

$$
\Rightarrow \int_{\mathbb{R}} \left( \sum_{n=1}^{\infty} |f_n| \right) d\lambda < \infty \Rightarrow \sum_{n=1}^{\infty} |f_n| \text{ is finite almost everywhere}
$$

$$
\Rightarrow \sum_{n=1}^{\infty} |f_n(x)| \text{ converges for almost every } x
$$

$$
\Rightarrow |f_n(x)| \to 0 \text{ almost everywhere}
$$

$$
\Rightarrow f_n \to 0 \text{ almost everywhere}
$$

---

# Theorem

$A \subseteq B$ are Lebesgue measurable and $\lambda(A) = \lambda(B)$.

Then for any $A \subset C \subset B$, $C$ is also measurable and $\lambda(C) = \lambda(A)$.

**Hint:** $\lambda^*(C \setminus A)$

### Proof

$$
B = A \cup (B \setminus A) \Rightarrow \lambda(B) = \lambda(A) + \lambda(B \setminus A)
$$

$$
\Rightarrow \lambda(B \setminus A) = 0
$$

As $C \setminus A \subseteq B \setminus A$, $C \setminus A$ is also measurable (by completeness).

$$
\therefore (C \setminus A) \cup A = C \text{ is also measurable}
$$

$$
\Rightarrow \lambda(C) = \lambda(C \setminus A) + \lambda(A) = \lambda(A)
$$

____

# Proposition

$C \subseteq \mathcal{P}(\Omega)$, $a, b \in \Omega$. Suppose for any $E \in C$ we have $a, b \in E$ or $a, b \in E^c$. Then every set in $\mathcal{F}(C)$ also has the same property.

### Proof

$$
A = \left\{ B \subseteq \Omega \mid \text{either } a, b \in B \text{ or } a, b \in B^c \right\}
$$

Clearly, $C \subseteq A$ then we need to show $A$ is a $\sigma$-algebra.

---

# Proposition

$\Omega = \bigcup_{i=1}^{\infty} A_i$ such that $A_i \cap A_j = \emptyset$, $\left\{ \bigcup_{j \in J} A_j \mid J \subseteq \mathbb{N} \right\} = F$.

Take

$$
E = \bigcup_{j \in J} A_j
$$

$$
\Rightarrow E^c = \bigcap_{j \in J} A_j^c = \bigcup_{j \notin J} A_j
$$

---

# Proposition

$$
\{ (-\infty, x) \mid x \in \mathbb{Q} \}
$$

$$
(a, b) \in \mathcal{F}(\{ (-\infty, x) \mid x \in \mathbb{Q} \})
$$

$$
(-\infty, b) = \bigcup_{q < b} (-\infty, q)
$$

Let $y \in (-\infty, b) \Rightarrow y < b$

$$
\Rightarrow y \le q < b \Rightarrow y \in (-\infty, q)
$$

---

# Definition

$f$ is differentiable everywhere, $f: \mathbb{R} \to \mathbb{R}$ is differentiable everywhere.

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$


---
Given $f: \Omega \to [0, \infty]$ measurable function.

Define $f_n(x) = \min \{f(x), n\}$.

**Case 1:** Fix $x$

$$
f_n(x) \le f_{n+1}(x)
$$

$$
f(x) > n+1
$$

$$
f_{n+1}(x) = n+1 > n = f_n(x)
$$

**Case 2:** $n < f(x) < n+1$

$$
f_n(x) = n < f(x)
$$

If $f \to \infty$, then $\lim_{n \to \infty} f_n(x) = \infty$ then converges to $f$.

If $f_n \to f_{n_0}(x)$, then $\lim_{n \to \infty} f_n(x) = f_{n_0}(x) = f(x)$.
____
Take

$$
g_n(x) = \left( \frac{f(x + \frac{1}{n}) - f(x)}{1/n} \right)
$$

Then $g_n$ is Borel measurable & $f' = \lim g_n$

---

- $V$ is a non-Lebesgue measurable set
    
    $$
    f(x) = \begin{cases} 1 & x \in V \\ -1 & x \in V^c \end{cases}
    $$
    
    $f(\{1, 3\}) = V$, $|B| = 1$
    

---

# Theorem

$\{f_n\}$ is a non-decreasing sequence of non-negative measurable functions. Suppose $f_n \to f$ then

$$
\lim \int f_n = \int f
$$

### Proof

By Fatou's Lemma,

$$
\int \liminf f_n \le \liminf \int f_n
$$

$$
\int f \le \liminf \int f_n
$$

Given $f_n \le f$;

$$
\Rightarrow \int f_n \le \int f \Rightarrow \limsup \int f_n \le \int f \le \liminf \int f_n
$$

$$
\Rightarrow \lim \int f_n = \int f
$$
____
# Regularity of measures

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
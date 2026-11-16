---
course: Functional Analysis
Lecture: "17"
date: 2026-09-07
---
### The "Three Great Theorems" of FA

$$\text{Topology} \xleftrightarrow{\text{connects}} \text{Linear Algebra}$$

Let $X$ be finite dimensional, $B = \{e_1, \dots, e_N\}$ basis, and $L: X \rightarrow Y$ linear.
$$x = \alpha_1 e_1 + \dots + \alpha_N e_N$$
$$|\alpha_1| + \dots + |\alpha_N| = \|x\|_1 \quad \text{norm, equivalent to any other norm on } X.$$
*(Since the space is finite dim $\implies$ any 2 norms are equivalent.)*

$$
\begin{aligned}
Lx &= L(\alpha_1 e_1 + \dots + \alpha_N e_N) \\
&= \alpha_1 Le_1 + \dots + \alpha_N Le_N
\end{aligned}
$$
$$
\begin{aligned}
\|Lx\| &\leq \|\alpha_1 Le_1\| + \dots + \|\alpha_N Le_N\| \\
&\leq |\alpha_1| \|Le_1\| + \dots + |\alpha_N| \|Le_N\| \\
&\leq K (|\alpha_1| + \dots + |\alpha_N|) \qquad \left(K = \max_i \|Le_i\|\right) \\
&= K \|x\|_1 \\
&\leq C \|x\|
\end{aligned}
$$
$$\therefore L \text{ is bounded}$$

This is **not** true when $X$ is infinite dim.

---

### A Few More Pathologies in Infinite Dimensions

1. The pointwise limit of bounded linear maps can be unbounded.
2. The inverse of a bijective, bounded linear map can be unbounded.
3. Topology & algebraic structure can be unrelated.

* **Baire Category Theorem:** In "complete" spaces, topological properties (boundedness, openness) follow from algebraic structures.

---

# Theorem (Cantor's Intersection Theorem)
 Let $X$ be a complete metric space. Let $(A_n)_{n \in \mathbb{N}}$ be a collection of closed subsets of $X$ such that.:
 1. $A_{n+1} \subset A_n$ ($A_n \downarrow$)
 2. $\operatorname{diam}(A_n) \rightarrow 0$ as $n \rightarrow \infty$

 Then $\exists! \, x \in X$ such that.
 $$\bigcap_{n \in \mathbb{N}} A_n = \{x\}$$
---

# Theorem (Baire Category Theorem)
 Let $X$ be a complete metric space. Then the following 2 equivalent statements hold:
 1. Let $(C_n)_{n \in \mathbb{N}}$ be a sequence of closed subsets such that. $\operatorname{Int}(C_n) = \emptyset \quad \forall n \in \mathbb{N}$ (nowhere dense).Then:
 $$\operatorname{Int}\left(\bigcup_{n \in \mathbb{N}} C_n\right) = \emptyset$$
 2. Let $(O_n)_{n \in \mathbb{N}}$ be a sequence of open sets such that. $\overline{O_n} = X$. Then:
    $$\overline{\bigcap_{n \in \mathbb{N}} O_n} = X$$

---

##  Theorem 1
 Let $X$ be a metric space and $(C_n)_{n \in \mathbb{N}}$ be a collection of closed subsets of $X$ such that. $X = \bigcup_{n \in \mathbb{N}} C_n$. Then:
 * If $\operatorname{Int}(C_n) = \emptyset \quad \forall n$, then $X$ is not complete.
 * If $X$ is complete, then $\exists n_0 \in \mathbb{N}$ such that. $\operatorname{Int}(C_{n_0}) \neq \emptyset$.

---

# Definition: Hamel Basis
 Let $X$ be a nontrivial vector space ($X \neq \{0\}$). An arbitrary collection (family) of vectors $(e_i)_{i \in I}$ in $X$ is called a **Hamel basis** in $X$ if:
 1. $(e_i)_{i \in I}$ is linearly independent in the sense that $\forall$ **finite** subfamily $\{e_i\}_{i \in J}$, $J \subset I$, and for scalars $(\alpha_i)_{i \in J}$:
    $$\sum_{i \in J} \alpha_i e_i = 0 \implies \alpha_i = 0 \quad \forall i \in J$$
 2. $\operatorname{Span}\{e_i \mid i \in I\} = X$ in the sense that $\forall x \in X$, $\exists$ a finite family $J(x) \subset I$ and scalars $(\alpha_j)_{j \in J(x)}$ such that.:
    $$x = \sum_{j \in J(x)} \alpha_j e_j$$
**Example:** $X = \mathcal{P}(\mathbb{R})$, polynomials in $\mathbb{R}$, i.e., $\{1, x, x^2, \dots\}$.
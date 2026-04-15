# Theorem

Let $(\Omega, \mathcal{F}, \mu)$ be a measure space. Then

1. (monotonically). If $E, F \in \mathcal{F}$ with $E \subset F$ then $$\mu(E) \leq \mu(F)$$
2. (subadditivity). $E_1, E_2, \dots \in \mathcal{F}$ then $$\mu(\bigcup_{j=1}^{\infty} E_j) \leq \sum_{j=1}^{\infty} \mu(E_j)$$
3. (continuity from below). If $\{ E_j \} \subseteq \mathcal{F}$ with $E_j \uparrow E$ that is $E_j \subseteq E_{j+1}$ and $E = \bigcup_{j=1}^{\infty} E_j$ Then $$\lim_{j \to \infty} \mu(E_j) = \mu(E)$$
4. (Continuity from above):- If $\{ E_j \} \subseteq \mathcal{F}$ with $E_j \downarrow E$. That is, $E_{j+1} \subseteq E_j$ and $E = \bigcap_{j=1}^{\infty} E_j$ and $\mu(E_1) < \infty$. Then $$\mu(E) = \lim_{j \to \infty} \mu(E_j)$$
___

**Example:-** $(\mathbb{N}, \mathcal{P}(\mathbb{N}), \mu)$. Consider $$E_j = \{ n \in \mathbb{N}, n \geq j \}$$
Then $$E = \bigcap_{j=1}^{\infty} E_j = \emptyset$$
But $\text{limit}_{j \to \infty} \mu(E_j) = \infty$ and $\mu(E) = 0$.
___
**Proof**

ii) Let $F_1 = E_1$, $F_k = E_k - \bigcup_{j=1}^{k-1} E_j, k \geq 2$.

Then $F_k$'s are disjoint and $\bigcup_{j=1}^{\infty} F_j = \bigcup_{j=1}^{\infty} E_j$.

Therefore:

$$\mu \left( \bigcup_{j=1}^{\infty} E_j \right) = \mu \left( \bigcup_{j=1}^{\infty} F_j \right) = \sum_{j=1}^{\infty} \mu(F_j) = \sum_{j=1}^{\infty} \mu \left( E_j - \bigcup_{l=1}^{j-1} E_l \right) \leq \sum_{j=1}^{\infty} \mu(E_j)$$

iii) Set $F_k = E_k - E_{k-1}, k \geq 2, F_1 = E_1$. Then $\{ F_k \}$ is a disjoint collection in $\mathcal{F}$ with $$\bigcup_{k=1}^{n} F_k = E_n \implies E = \bigcup_{k=1}^{\infty} F_k$$$$\therefore \mu(E) = \sum_{k=1}^{\infty} \mu(F_k) = \lim_{n \to \infty} \sum_{k=1}^{n} \mu(F_k) = \lim_{n \to \infty} \mu(E_n)$$

iv) Set $G_k = E_1 \setminus E_{k+1}, k \geq 1$; Then $G_k$ is an increasing sequence to $E_1 - \bigcap_{k \geq 1} E_k$.

$$\lim_{k \to \infty} \mu(G_k) = \mu(E_1 - E)$$

$$\implies \mu(E_1) - \mu(E) = \lim_{k \to \infty} (\mu(E_1) - \mu(E_{k+1}))$$
$$\implies \lim_{k \to \infty} \mu(E_{k+1}) = \mu(E)$$ 
# Theorem

Let $\mathcal{S} \subseteq \mathcal{P}(\Omega)$ be a semi algebra and $\mu : \mathcal{S} \to [0, \infty)$ be an additive (respectively $\sigma$-additive) set function. Then there exists a set function $\gamma : \mathcal{A}(\mathcal{S}) \to [0, \infty)$ which is additive (respectively $\sigma$-additive):

1. $$\mu(A) = \gamma(A), \forall A \in \mathcal{S} \tag{1}$$
2. If there exist two additive (respectively $\sigma$-additive) set functions $\gamma_1$ and $\gamma_2$ on $\mathcal{A}(\mathcal{S})$ satisfying (1) then $$\gamma_1(E) = \gamma_2(E) \;; \forall E \in \mathcal{A}(\mathcal{S})$$
**Proof**

If $A \in \mathcal{A}(\mathcal{S})$ then $A = \bigcup_{j=1}^{n} A_j$ for $A_j \in \mathcal{S}, j = 1, \dots, n$,  [[Measure-Theory-Notes/Measure_Theory/Lecture 3#Proposition|Lecture 3]]

We define,

$$\gamma(A) = \sum_{j=1}^{n} \mu(A_j)$$

Suppose $A = \bigcup_{j=1}^{n} E_j = \bigcup_{k=1}^{m} F_k$ where $E_j, F_k \in \mathcal{S}, 1 \leq j \leq n, 1 \leq k \leq m$,

$$E_j \cap E_{j'} = \emptyset, F_k \cap F_{k'} = \emptyset$$

**NOTE**

To prove $$\sum_{j=1}^{n} \mu(E_j) = \sum_{k=1}^{m} \mu(F_k)$$

Note that $$E_j = E_j \cap A = E_j \cap \bigcup_{k=1}^{m} F_k = \bigcup_{k=1}^{m} E_j \cap F_k, 1 \leq j \leq n$$
is a disjoint union of elements from $\mathcal{S}$.

$$\implies \mu(E_j) = \sum_{k=1}^{m} \mu(E_j \cap F_k)$$

Therefore, $$\gamma(A) = \sum_{j=1}^{n} \mu(E_j) = \sum_{j=1}^{n} \sum_{k=1}^{m} \mu(E_j \cap F_k)$$$$= \sum_{k=1}^{m} \sum_{j=1}^{n} \mu(E_j \cap F_k) = \sum_{k=1}^{m} \mu(F_k)$$
// Interchanging the role of $E_j$ and $F_k$ //

Take $\{ A_j \}_{j=1}^n \subseteq \mathcal{F}$ such that $A_j \cap A_{j'} = \emptyset, j \neq j'$

Let,

$A, B \in \mathcal{A}(\mathcal{S})$ with $A \cap B = \emptyset$. Then we can write

$$A = \bigcup_{j=1}^n E_j, \ B = \bigcup_{k=1}^m F_k$$

Then,

$$A \cup B = \bigcup_{j=1}^n \bigcup_{k=1}^m E_j \cup F_k$$

is a disjoint union of sets.

$$\gamma(A \cup B) = \sum_{j=1}^n \sum_{k=1}^m \mu(E_j \cup F_k) =$$

$$= \sum_{j=1}^n \mu(E_j) + \sum_{k=1}^m \mu(F_k)$$

$$= \gamma(A) + \gamma(B)$$

ii) Suppose

$$E = \bigcup_{j=1}^n A_j, A_j \in \mathcal{S}. \text{ Then } \gamma_1(E) = \sum_{j=1}^n \gamma_1(A_j)$$

$$= \sum_{j=1}^n \gamma_2(A_j)$$

$$= \gamma_2(E) \quad \square$$

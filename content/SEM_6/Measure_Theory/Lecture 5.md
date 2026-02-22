**Exercise**:- If $\mathcal{S}$ is a semi-algebra then $\mathcal{F}(\mathcal{S}) = \mathcal{F}(\mathcal{A}(\mathcal{S}))$

**Proof.** (The argument actually works for any collection $\mathcal{S}$.)

1. Because $\mathcal{S} \subseteq \mathcal{A}(\mathcal{S})$, monotonicity of the generator gives:
    
    $$\sigma(\mathcal{S}) \subseteq \sigma(\mathcal{A}(\mathcal{S}))$$
    
2. On the other hand, $\sigma(\mathcal{S})$ is a $\sigma$-algebra containing $\mathcal{S}$. In particular, it is an algebra containing $\mathcal{S}$, so by minimality of $\mathcal{A}(\mathcal{S})$ (the _smallest_ algebra containing $\mathcal{S}$), we have:
    
    $$\mathcal{A}(\mathcal{S}) \subseteq \sigma(\mathcal{S})$$
    
    Applying $\sigma(\cdot)$ to both sides and using $\sigma(\sigma(\mathcal{S})) = \sigma(\mathcal{S})$ yields:
    
    $$\sigma(\mathcal{A}(\mathcal{S})) \subseteq \sigma(\sigma(\mathcal{S})) = \sigma(\mathcal{S})$$
    

Combining the two inclusions gives the desired equality:

$$\sigma(\mathcal{S}) = \sigma(\mathcal{A}(\mathcal{S}))$$
$\square$
____

# Carathéodory extension theorem

Let $\Omega$ be a nonempty set and $\mathcal{A} \subseteq \mathcal{P}(\Omega)$ be an algebra

Let $\mu : \mathcal{A} \to [0, \infty)$ be a measure i.e.,  $\mu$ is $\sigma$-additive such that $$\nu(E) = \mu(E), \forall E \in \mathcal{A}$$$$A = \bigcup_{i=1}^{n} A_i,\space A_i \in \mathcal{S} \text{ and } A_i \cap A_j = \emptyset$$$$\mu(A) = \sum \mu(A_i)\;;\;A \in \mathcal{A}(\mathcal{S})$$
____
def given from online 
Let $\Omega$ be a nonempty set and $\mathcal{S} \subseteq \mathcal{P}(\Omega)$ be a **semi-algebra**.

Let $\mu : \mathcal{S} \to [0, \infty]$ be a set function that is $\sigma$-additive on $\mathcal{S}$. There exists a unique measure $\nu$ on the generated algebra $\mathcal{A}(\mathcal{S})$ such that:

$$\nu(E) = \mu(E), \quad \forall E \in \mathcal{S}$$

For any $A \in \mathcal{A}(\mathcal{S})$, we can write $A$ as a finite disjoint union:

$$A = \bigcup_{i=1}^{n} A_i, \quad A_i \in \mathcal{S} \text{ and } A_i \cap A_j = \emptyset \text{ for } i \neq j$$

The measure on the algebra is then given by:

$$\nu(A) = \sum_{i=1}^{n} \mu(A_i), \quad A \in \mathcal{A}(\mathcal{S})$$

___
## Outer measure
An outer measure on $\Omega$ is a function

$$\lambda : \mathcal{P}(\Omega) \to [0, \infty]$$

satisfies

1. $\lambda(\emptyset) = 0$
2. $\lambda(E) \leq \lambda(F)$ if $E \subseteq F \subseteq \Omega$
3. for every $\{ A_n \}_{n \geq 1} \subseteq \mathcal{P}(\Omega)$,
   $$\lambda \left( \bigcup_{n \geq 1} A_n \right) \leq \sum_{n \geq 1} \lambda(A_n)$$($\sigma$-subadditive)


Define $$\mu^*(A) = \text{inf} \{ \sum_{j=1}^{\infty} \mu(E_j) : E_j \in \mathcal{A}, \forall j, A \subseteq \bigcup_{j=1}^{\infty} E_j \}$$
## Lemma 1

$\mu^*$ is an outer measure.
### Proof

Obviously, $\mu^*(\emptyset) = 0$

Suppose $E \subseteq F$ then $\mu^*(E) \leq \mu^*(F)$ as the set over which the infimum is taken as the definition of $\mu^*(E)$ includes the set corresponding set in the definition of $\mu^*(F)$

Suppose

$$\{ A_n \}_{n \geq 1} \subseteq \mathcal{P}(\Omega)$$

Given $\varepsilon > 0$, for each $j$,

$$\exists \{ E_j^k \}_{k \geq 1} \subset \mathcal{A} \text{ such that } A_j \subseteq \bigcup_{k \geq 1} E_j^k$$

$$\sum_{k \geq 1} \mu(E_j^k) \leq \mu^*(A_j) + \varepsilon / 2^j$$

Now,

$$\{ E_j^k : k, j \in \mathbb{N} \} \text{ is a cover of } A = \bigcup_{j \geq 1} A_j$$

and

$$\mu^*(A) \leq \sum_{j=1}^{\infty} \sum_{k=1}^{\infty} \mu(E_j^k) \leq \sum_{j=1}^{\infty} (\mu^*(A_j) + \varepsilon 2^{-j})$$

$$\leq \sum_{j=1}^{\infty} \mu^*(A_j) + \varepsilon$$

Since $\varepsilon > 0$ (arbitrary),

$$\mu^*(A) \leq \sum_{j=1}^{\infty} \mu^*(A_j)$$
___
Define,

$$\mathcal{M} = \{ A \in \mathcal{P}(\Omega) \mid \mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c) \quad \forall E \in \mathcal{P}(\Omega) \}$$

**Remark:-**

i) If $A \in \mathcal{M}$, then $A^c \in \mathcal{M}$

ii) $\emptyset \in \mathcal{M}$

iii) To check $A \in \mathcal{M}$ it suffices to show that

$$\mu^*(E) \geq \mu^*(E \cap A) + \mu^*(E \cap A^c)$$

## Lemma 2

$\mathcal{A} \subseteq \mathcal{M}$

### Proof

Take $A \in \mathcal{A}$ and $E \subseteq \Omega$ with $\mu^*(E) < \infty$
Given $\varepsilon > 0, \exists \{ E_j \} \subseteq \mathcal{A}$ such that $E \subseteq \bigcup_{j=1}^{\infty} E_j$
and
$$\mu^*(E) \leq \sum_{j=1}^{\infty} \mu(E_j) \leq \mu^*(E) + \varepsilon$$
Since $A \cap E_j \subseteq \mathcal{A}$ and $\{ A^c \cap E_j \}$ are covers of $E \cap A$ and $A^c \cap E$ respectively.

$$\mu^*(E \cap A) + \mu^*(E \cap A^c) \leq \sum_{j \geq 1} \mu(E_j \cap A) + \sum_{j \geq 1} \mu(E_j \cap A^c)$$

$$= \sum_{j \geq 1} \mu(E_j) \leq \mu^*(E) + \varepsilon$$
## Lemma 3

$\mathcal{M}$ is an algebra.

### Proof

Take $A, B \in \mathcal{M}$. Need to show:

$$\mu^*(E) \geq \mu^*(E \cap (A \cup B)) + \mu^*(E \setminus (A \cup B))$$

Since $B \in \mathcal{M}$,

$$\mu^*(E \cap A^c) = \mu^*(E \cap A^c \cap B) + \mu^*(E \cap A^c \cap B^c) \text{ --- (1)}$$

Since $A \in \mathcal{M}$,

$$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c) \text{ --- (2)}$$

$$= \mu^*(E \cap A) + \mu^*(E \setminus A \cap B) + \mu^*(E \setminus (A \cup B))$$

**NOTE**

That,

$$(E \cap A) \cup (E \setminus A) \cap B = E \cap (A \cup B)$$

$$\mu^*(E) \geq \mu^*(E \cap (A \cup B)) + \mu^*(E \setminus (A \cup B)) \quad \square$$

---

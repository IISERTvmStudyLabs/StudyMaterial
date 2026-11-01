## Lecture 01

Let $X$ be some set. $2^X$ denotes the set of all subsets of $X$.

Let $\mathcal{T} \subseteq 2^X$ be called a *topology* on $X$ if:

1) $\varnothing, X \in \mathcal{T}$.
2) $\mathcal{T}$ is closed under arbitrary unions: if $A_i \in \mathcal{T}$ for all $i \in I$ (where $I$ is an index set), then

$$
\bigcup_{i \in I} A_i \in \mathcal{T}.
$$

3) $\mathcal{T}$ is closed under finite intersections: if $A_1, A_2, \dots, A_k \in \mathcal{T}$ for some $k < \infty$, then

$$
\bigcap_{i=1}^{k} A_i \in \mathcal{T}.
$$

The elements of $\mathcal{T}$ are called the *open sets* of $X$.

## Examples and Non-examples

1) For any $X$, let $\mathcal{T} = \{\varnothing, X\}$. This is the *trivial topology* on $X$.

2) For any set $X$, let $\mathcal{T} = 2^X$. This is the *discrete topology* on $X$.

3) Let $X = \{a, b, c, d, e\}$.

a) $\mathcal{T}_1 = \{\varnothing, X, \{a\}, \{b\}\}$. This is *not* a topology since

$$
\{a\} \cup \{b\} = \{a, b\} \notin \mathcal{T}_1.
$$

b) $\mathcal{T}_2 = \{\varnothing, X, \{a\}, \{b\}, \{a, b\}\}$. This is a topology on $X$.

c) $\mathcal{T}_3 = \{\varnothing, X, \{b\}, \{c\}, \{d\}, \{b, c\}, \{c, d\}, \{b, d\}, \{b, c, d\}\}$. This is a topology on $X$.

d) $\mathcal{T}_4 = \mathcal{T}_2 \cup \mathcal{T}_3$. This is *not* a topology since

$$
\{a\} \cup \{b, c\} = \{a, b, c\} \notin \mathcal{T}_4.
$$

Thus, the union of two topologies on $X$ need not be a topology.

e) $\mathcal{T}_5 = \mathcal{T}_2 \cap \mathcal{T}_3 = \{\varnothing, X, \{b\}\}$. This is a topology on $X$.

## Finite Complement Topology

Let

$$
\mathcal{T} = \{U \in 2^X : X \setminus U \text{ is finite}\}.
$$

Then $\varnothing \in \mathcal{T}$ (vacuously), and $X \in \mathcal{T}$ since $X \setminus X = \varnothing$ is finite.

Suppose $U_i \in \mathcal{T}$. We want to verify that

$$
\bigcup_{i} U_i \in \mathcal{T}.
$$

From the definition of $\mathcal{T}$, we need $X \setminus \bigcup_i U_i$ to be finite. By De Morgan's law,

$$
X \setminus \bigcup_i U_i = \bigcap_i (X \setminus U_i).
$$

Since each $U_i \in \mathcal{T}$, each $X \setminus U_i$ is finite, so their intersection is finite. Hence

$$
\bigcup_i U_i \in \mathcal{T}.
$$

Similarly, one can prove that if $U_i \in \mathcal{T}$ for $1 \le i \le k$, then

$$
\bigcap_{i=1}^{k} U_i \in \mathcal{T}.
$$

Thus $\mathcal{T}$ is a topology on $X$.

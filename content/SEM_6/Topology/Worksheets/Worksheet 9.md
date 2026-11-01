## Question 1

Consider a countable collection of topological spaces $\{X_n\}_{n \in \mathbb{Z}}$. Suppose for any ordered pair of +ve integers $(n,m)$ the following is true:

i) $X_{n,m} \subseteq X_n$ are open subsets in $X_n$ with $X_{n,n} = X_n$.

ii) There exist homeomorphisms $f_{n,m}: X_{n,m} \to X_{m,n}$ satisfying:

a) $f_{n,n} = \text{identity on } X_n$

b) $f_{n,m}(X_{n,m} \cap X_{n,p}) = X_{m,n} \cap X_{m,p}$

c) $f_{m,p} \circ f_{n,m} = f_{n,p}$ on $X_{n,m} \cap X_{n,p}$

Consider the disjoint union of $X_n$ as $X$, i.e., $X = \bigsqcup_{n \in \mathbb{Z}} X_n$.

Let $x \in X_n, y \in X_m$. Call $x \sim y$ if $x \in X_{n,m}$ and $y = f_{n,m}(x)$.

Prove: $\sim$ is an equivalence relation.

---

### Solution

**Claim:** The relation $\sim$ on $X = \bigsqcup_{n \in \mathbb{Z}} X_n$ defined by $x \sim y$ iff $x \in X_{n,m}$ and $y = f_{n,m}(x)$ (where $x \in X_n$ and $y \in X_m$) is an equivalence relation.

**Proof:**

We verify the three properties of an equivalence relation: reflexivity, symmetry, and transitivity.

#### Reflexivity

Let $x \in X_n$ for some $n \in \mathbb{Z}$.

Since $X_{n,n} = X_n$, we have $x \in X_{n,n}$.

By property (a), $f_{n,n}$ is the identity on $X_n$, so $f_{n,n}(x) = x$.

Therefore, $x \sim x$. $\checkmark$

#### Symmetry

Suppose $x \sim y$ where $x \in X_n$ and $y \in X_m$.

By definition of $\sim$, we have $x \in X_{n,m}$ and $y = f_{n,m}(x)$.

We must show that $y \sim x$, i.e., $y \in X_{m,n}$ and $x = f_{m,n}(y)$.

**Step 1:** Since $f_{n,m}$ is a homeomorphism from $X_{n,m}$ to $X_{m,n}$, we have $y = f_{n,m}(x) \in X_{m,n}$.

**Step 2:** Since $f_{n,m}$ is a homeomorphism, it is bijective and has an inverse $f_{n,m}^{-1}: X_{m,n} \to X_{n,m}$.

Therefore:
$$
x = f_{n,m}^{-1}(y)
$$

**Step 3:** We claim that $f_{m,n} = f_{n,m}^{-1}$.

By property (c) with $p = n$:
$$
f_{n,n} \circ f_{m,n} = f_{m,n} \text{ on } X_{m,n} \cap X_{m,n} = X_{m,n}
$$

Since $f_{n,n}$ is the identity:
$$
f_{m,n} = f_{m,n} \quad (\text{this is automatic})
$$

More directly, applying property (c) with different indices: by property (c) with $n \leftrightarrow m$ and keeping $p = n$:
$$
f_{n,m} \circ f_{m,n} = f_{n,n} = \text{identity on } X_{m,n}
$$

Similarly:
$$
f_{m,n} \circ f_{n,m} = f_{m,m} = \text{identity on } X_{n,m}
$$

This shows that $f_{m,n}$ and $f_{n,m}$ are inverses of each other.

**Step 4:** Therefore:
$$
f_{m,n}(y) = f_{m,n}(f_{n,m}(x)) = f_{n,m}^{-1}(f_{n,m}(x)) = x
$$

Thus $y \sim x$. $\checkmark$

#### Transitivity

Suppose $x \sim y$ and $y \sim z$ where $x \in X_n$, $y \in X_m$, and $z \in X_p$.

By definition:
- $x \in X_{n,m}$ and $y = f_{n,m}(x)$
- $y \in X_{m,p}$ and $z = f_{m,p}(y)$

We must show that $x \sim z$, i.e., $x \in X_{n,p}$ and $z = f_{n,p}(x)$.

**Step 1:** From $y = f_{n,m}(x) \in X_{m,p}$, we have $f_{n,m}(x) \in X_{m,p}$.

This means $x \in f_{n,m}^{-1}(X_{m,p})$.

By property (b) (which is equivalent to $f_{n,m}(X_{n,m} \cap X_{n,p}) = X_{m,n} \cap X_{m,p}$, applied to the symmetric case):

Actually, let me reconsider. Property (b) states:
$$
f_{n,m}(X_{n,m} \cap X_{n,p}) = X_{m,n} \cap X_{m,p}
$$

Since $f_{n,m}(x) \in X_{m,p}$ and $x \in X_{n,m}$ (from the hypothesis), and $f_{n,m}$ maps $X_{n,m} \cap X_{n,p}$ onto $X_{m,n} \cap X_{m,p}$:

We have $f_{n,m}(x) \in X_{m,p}$, so $x \in X_{n,m} \cap X_{n,p}$ (since $f_{n,m}$ bijectively maps this intersection to $X_{m,n} \cap X_{m,p}$).

**Step 2:** Now compute:
$$
z = f_{m,p}(y) = f_{m,p}(f_{n,m}(x))
$$

By property (c):
$$
f_{m,p} \circ f_{n,m} = f_{n,p} \quad \text{on } X_{n,m} \cap X_{n,p}
$$

Since $x \in X_{n,m} \cap X_{n,p}$ (from Step 1):
$$
z = f_{m,p}(f_{n,m}(x)) = f_{n,p}(x)
$$

**Step 3:** By property (c), $f_{n,p}$ is a homeomorphism from $X_{n,p}$ to $X_{p,n}$, so $z = f_{n,p}(x) \in X_{p,n}$.

Therefore, $x \sim z$. $\checkmark$

#### Conclusion

Since $\sim$ is reflexive, symmetric, and transitive, it is an equivalence relation. $\square$

---

## Question 2

Let $Y = X/\sim$ be equipped with the quotient topology. A set $U \subset X$ is said to be open if $U \cap X_n$ is open in $X_n$ for all $n \in \mathbb{Z}$.

Let $q_n$ denote the canonical map $q_n: X_n \to Y$ given by the composition $X_n \to X \to Y$ as appropriate.

Prove: The image of $q_n$ is an open subset in $Y$.

---

### Solution

**Claim:** For each $n \in \mathbb{Z}$, the image $q_n(X_n)$ is open in the quotient topology on $Y = X/\sim$.

**Proof:**

Recall that in the quotient topology on $Y = X/\sim$, a set $V \subseteq Y$ is open if and only if its preimage $\pi^{-1}(V)$ is open in $X$, where $\pi: X \to Y$ is the quotient map.

#### Step 1: Identify the preimage of $q_n(X_n)$

We need to find $\pi^{-1}(q_n(X_n))$.

A point $z \in \pi^{-1}(q_n(X_n))$ satisfies $\pi(z) \in q_n(X_n)$.

This means there exists $x \in X_n$ such that $\pi(z) = q_n(x)$.

But $q_n(x) = \pi(x)$ (by definition of $q_n$ as the composition), so $\pi(z) = \pi(x)$, which means $z \sim x$.

Therefore:
$$
\pi^{-1}(q_n(X_n)) = \{z \in X : z \sim x \text{ for some } x \in X_n\}
$$

#### Step 2: Describe the equivalence class of points in $X_n$

For $x \in X_n$, the equivalence class $[x]$ consists of all $y \in X$ such that $y \sim x$.

If $y \in X_m$, then $y \sim x$ (where $x \in X_n$) iff:
- $y \in X_m$ and $x \in X_{n,m}$ and $y = f_{n,m}(x)$, **or**
- $x \in X_m$ and $y \in X_{m,n}$ and $x = f_{m,n}(y)$ (by symmetry)

Therefore:
$$
\pi^{-1}(q_n(X_n)) = X_n \cup \bigcup_{m \neq n} f_{n,m}(X_{n,m})
$$

where we use the homeomorphisms to identify equivalent points across different spaces.

#### Step 3: Show this preimage is open in $X$

We must verify that for each $k \in \mathbb{Z}$, the intersection $\pi^{-1}(q_n(X_n)) \cap X_k$ is open in $X_k$.

**Case 1:** $k = n$

$$
\pi^{-1}(q_n(X_n)) \cap X_n = X_n
$$

which is open in $X_n$ (it is the whole space). $\checkmark$

**Case 2:** $k \neq n$

$$
\pi^{-1}(q_n(X_n)) \cap X_k = f_{n,k}(X_{n,k})
$$

By assumption, $f_{n,k}$ is a homeomorphism from $X_{n,k}$ to $X_{k,n}$.

Since $X_{n,k}$ is an open subset of $X_n$ (by property (i)), and $f_{n,k}$ is a homeomorphism, the image $f_{n,k}(X_{n,k})$ is open in $X_{k,n}$.

But the topology on $X_k$ may not be specified further. However, by the problem statement, we're given that $X_{n,k}$ is an open subset in $X_n$.

Actually, we need to reconsider. The problem says "$X_{n,m} \subseteq X_n$ are open subsets." This defines open sets within each $X_n$, but we also need to understand the global topology on $X_k$.

Since $f_{n,k}$ is a homeomorphism from $X_{n,k}$ (with its subspace topology from $X_n$) to $X_{k,n}$ (with its subspace topology from $X_k$), and $X_{n,k}$ is open in $X_n$, the image $f_{n,k}(X_{n,k})$ is open in $X_k$.

Therefore, $\pi^{-1}(q_n(X_n)) \cap X_k = f_{n,k}(X_{n,k})$ is open in $X_k$. $\checkmark$

#### Step 4: Conclude

Since $\pi^{-1}(q_n(X_n)) \cap X_k$ is open in $X_k$ for all $k \in \mathbb{Z}$, we have that $\pi^{-1}(q_n(X_n))$ is open in $X$ (by the definition of open sets in $X$ as stated in the problem).

By definition of the quotient topology, this means $q_n(X_n)$ is open in $Y$. $\square$

---

## Question 3

Prove: The map $g_n: X_n \to g_n(X_n) \subseteq Y$ is a homeomorphism.

---

### Solution

**Claim:** The restriction $g_n: X_n \to q_n(X_n)$ (where $g_n = q_n|_{X_n}$ with codomain $q_n(X_n)$) is a homeomorphism.

**Proof:**

We must verify that $g_n$ is continuous, bijective, and has a continuous inverse.

#### Step 1: Verify $g_n$ is continuous

The map $g_n: X_n \to Y$ is defined as the composition:
$$
X_n \xrightarrow{\iota_n} X \xrightarrow{\pi} Y
$$

where $\iota_n$ is the inclusion of $X_n$ into the disjoint union $X$, and $\pi$ is the quotient map.

Both $\iota_n$ (inclusion into a disjoint union) and $\pi$ (quotient map) are continuous.

Therefore, $g_n = \pi \circ \iota_n$ is continuous. $\checkmark$

#### Step 2: Restrict codomain to $q_n(X_n)$

With codomain restricted to $q_n(X_n)$, the map $g_n: X_n \to q_n(X_n)$ remains continuous.

#### Step 3: Verify $g_n$ is bijective

**Injectivity:** Suppose $g_n(x) = g_n(x')$ for $x, x' \in X_n$.

This means $\pi(x) = \pi(x')$, so $x \sim x'$.

Since both $x$ and $x'$ are in $X_n$, and $x \sim x'$, we have (by definition of $\sim$):
- Either $x \in X_{n,n}$ and $x' = f_{n,n}(x) = x$ (by reflexivity), 
- Or they are related through other spaces.

But $X_{n,n} = X_n$ and $f_{n,n}$ is the identity, so the equivalence relation identifies a point in $X_n$ only with itself.

Wait, let me reconsider the definition of $\sim$. The relation $x \sim y$ (where $x \in X_n, y \in X_m$) is defined only when $x \in X_{n,m}$ and $y = f_{n,m}(x)$.

For $x, x' \in X_n$, we have $x \sim x'$ iff $x \in X_{n,n} = X_n$ and $x' = f_{n,n}(x) = x$.

Therefore, $x = x'$, so $g_n$ is injective. $\checkmark$

**Surjectivity:** By definition, the codomain is $q_n(X_n) = g_n(X_n)$, so every element in the codomain is of the form $g_n(x)$ for some $x \in X_n$.

Therefore, $g_n$ is surjective. $\checkmark$

#### Step 4: Show $g_n$ is an open map

To prove that $g_n$ is a homeomorphism, we can show that $g_n$ is an open map (i.e., the image of every open set in $X_n$ is open in $q_n(X_n)$).

Alternatively, we can show that $g_n^{-1}$ is continuous.

**Method: Show $g_n$ is open**

Let $U$ be an open set in $X_n$.

We need to show that $g_n(U) = q_n(U)$ is open in $q_n(X_n)$ (with the subspace topology from $Y$).

In the subspace topology, $g_n(U)$ is open in $q_n(X_n)$ iff $g_n(U) = V \cap q_n(X_n)$ for some open set $V$ in $Y$.

By the quotient topology, $V$ is open in $Y$ iff $\pi^{-1}(V)$ is open in $X$.

Consider $\pi^{-1}(g_n(U))$. An element $z \in X$ satisfies $z \in \pi^{-1}(g_n(U))$ iff $\pi(z) \in g_n(U)$.

Since $g_n(U) \subseteq q_n(X_n)$, we have $\pi(z) = \pi(x)$ for some $x \in U$.

By the equivalence relation, $z \sim x$ for some $x \in U$.

Therefore:
$$
\pi^{-1}(g_n(U)) = \{z \in X : z \sim x \text{ for some } x \in U\}
$$

For each $k \in \mathbb{Z}$:
$$
\pi^{-1}(g_n(U)) \cap X_k = \begin{cases}
U & \text{if } k = n \\
f_{n,k}(U \cap X_{n,k}) & \text{if } k \neq n
\end{cases}
$$

Since $U$ is open in $X_n$:
- $U$ is open in $X_n$ $\checkmark$
- $U \cap X_{n,k}$ is open in $X_{n,k}$ (intersection of open sets in $X_n$, since $X_{n,k}$ is open in $X_n$)
- $f_{n,k}(U \cap X_{n,k})$ is open in $X_k$ (image of open set under homeomorphism)

Therefore, $\pi^{-1}(g_n(U))$ is open in $X$, so $g_n(U)$ is open in $Y$, and hence open in $q_n(X_n)$. $\checkmark$

#### Step 5: Conclusion

Since $g_n$ is continuous, bijective, and open, it is a homeomorphism. $\square$

---

## Question 4

Let $h: V \to Z$ where $Z$ is some topological space. Prove: $h$ is continuous iff $h \circ g_n: g_n^{-1}(V) \to Z$ is continuous.

---

### Solution

**Claim:** A map $h: Y \to Z$ is continuous if and only if for each $n \in \mathbb{Z}$, the restriction $h \circ g_n: X_n \to Z$ is continuous (after identifying $g_n(X_n)$ with $X_n$ via the homeomorphism $g_n$).

Actually, let me interpret the problem more carefully. We have $h: V \to Z$ where $V$ is some subset of $Y$.

**Interpretation:** We want to show $h$ is continuous iff $h \circ g_n: g_n^{-1}(V) \to Z$ is continuous for all $n$.

More specifically, the restriction of $h$ to $q_n(X_n)$ composed with $q_n$ should be continuous.

**Claim:** A map $h: Y \to Z$ is continuous if and only if, for each $n \in \mathbb{Z}$, the composition $h \circ q_n: X_n \to Z$ is continuous.

**Proof:**

#### Direction 1: If $h$ is continuous, then $h \circ q_n$ is continuous for all $n$

Assume $h: Y \to Z$ is continuous.

For each $n \in \mathbb{Z}$, the composition $h \circ q_n$ is the composition of continuous maps:
$$
X_n \xrightarrow{q_n} Y \xrightarrow{h} Z
$$

Therefore, $h \circ q_n$ is continuous. $\checkmark$

#### Direction 2: If $h \circ q_n$ is continuous for all $n$, then $h$ is continuous

Assume that for each $n \in \mathbb{Z}$, the map $h \circ q_n: X_n \to Z$ is continuous.

Let $W$ be an open set in $Z$. We must show that $h^{-1}(W)$ is open in $Y$.

By the quotient topology on $Y$, a set is open in $Y$ iff its preimage under the quotient map $\pi: X \to Y$ is open in $X$.

Therefore, we must show that $\pi^{-1}(h^{-1}(W))$ is open in $X$.

Since $\pi^{-1}(h^{-1}(W)) = (\pi^{-1} \circ h^{-1})(W) = (h \circ \pi)^{-1}(W)$, we need to show this is open in $X$.

#### Step 3: Show $\pi^{-1}(h^{-1}(W))$ is open in $X$

For each $n \in \mathbb{Z}$, we check whether $\pi^{-1}(h^{-1}(W)) \cap X_n$ is open in $X_n$.

A point $x \in X_n$ satisfies $x \in \pi^{-1}(h^{-1}(W))$ iff:
$$
\pi(x) \in h^{-1}(W) \iff h(\pi(x)) \in W \iff (h \circ \pi)(x) \in W
$$

Now, $\pi(x) = q_n(x)$ (since $x \in X_n$), so:
$$
(h \circ \pi)(x) = h(q_n(x)) = (h \circ q_n)(x)
$$

Therefore:
$$
\pi^{-1}(h^{-1}(W)) \cap X_n = (h \circ q_n)^{-1}(W)
$$

By assumption, $h \circ q_n: X_n \to Z$ is continuous, so $(h \circ q_n)^{-1}(W)$ is open in $X_n$.

This holds for all $n \in \mathbb{Z}$.

#### Step 4: Conclude

Since $\pi^{-1}(h^{-1}(W)) \cap X_n$ is open in $X_n$ for all $n$, we have that $\pi^{-1}(h^{-1}(W))$ is open in $X$ (by the definition of open sets in $X$).

By the quotient topology, this means $h^{-1}(W)$ is open in $Y$.

Since $W$ was an arbitrary open set in $Z$, $h$ is continuous. $\square$

---

## Question 5

Suppose we replace countability with an arbitrary indexing set and frame the same for questions, how different are your answers?

---

### Solution

**Analysis:** Replacing the countable index set $\mathbb{Z}$ with an arbitrary index set changes some aspects of the analysis, but many key results remain valid.

### Properties that remain unchanged:

**1. Equivalence relation (Question 1)**

The proof that $\sim$ is an equivalence relation depends only on:
- The definition of the relation using homeomorphisms and their properties
- Properties (a), (b), (c) of the homeomorphisms

None of these properties require countability. Therefore, **the relation $\sim$ remains an equivalence relation** for arbitrary index sets. $\checkmark$

**2. Homeomorphism of $g_n$ (Question 3)**

The proof that $g_n: X_n \to q_n(X_n)$ is a homeomorphism depends only on:
- Continuity of inclusion and quotient maps
- Injectivity from the equivalence relation structure
- Surjectivity by definition
- Openness via the quotient topology

None of these require countability. Therefore, **$g_n$ remains a homeomorphism** for arbitrary index sets. $\checkmark$

**3. Continuity criterion (Question 4)**

The proof that $h$ is continuous iff $h \circ q_n$ is continuous for all $n$ depends only on:
- The quotient topology definition
- The structure of the equivalence relation

None require countability. Therefore, **the continuity criterion remains valid** for arbitrary index sets. $\checkmark$

### Properties that may change:

**1. Openness of $q_n(X_n)$ (Question 2)**

The proof uses the fact that we can intersect $\pi^{-1}(q_n(X_n))$ with each $X_k$ and verify openness.

With an arbitrary (possibly uncountable) index set $I$:
$$
\pi^{-1}(q_n(X_n)) \cap X_k = \begin{cases}
X_n & \text{if } k = n \\
f_{n,k}(X_{n,k}) & \text{if } k \neq n
\end{cases}
$$

This is still a countable union (one element per index in $I$) if $I$ is countable, but **becomes an arbitrary union if $I$ is uncountable**.

The definition of open sets in $X$ states: "$U \subset X$ is open if $U \cap X_n$ is open in $X_n$ **for all $n$**."

If $I$ is uncountable, this requires verifying openness for uncountably many conditions. However, the result is:

$$
\pi^{-1}(q_n(X_n)) = X_n \cup \bigcup_{m \neq n} f_{n,m}(X_{n,m})
$$

For arbitrary index sets, this is a union of an uncountable number of sets (one for each $m \in I \setminus \{n\}$).

**The openness still holds:** Each $\pi^{-1}(q_n(X_n)) \cap X_k$ is open in $X_k$ for all $k$, so $\pi^{-1}(q_n(X_n))$ is open in $X$, hence $q_n(X_n)$ is open in $Y$.

The key difference is that we're verifying uncountably many local openness conditions, but this is still valid. $\checkmark$

### Topological properties:

**With countable index set:**
- The quotient space $Y$ might inherit certain properties from the countability of the structure
- Separability arguments might apply

**With arbitrary index set:**
- The results remain valid
- However, the quotient space $Y$ may not be first-countable or separable unless additional conditions are imposed
- The topology can become more complicated

### Summary of differences:

| Aspect | Countable Index Set | Arbitrary Index Set |
|--------|-------------------|-------------------|
| Equivalence relation | ✓ Equivalence relation | ✓ Equivalence relation |
| Homeomorphism $g_n$ | ✓ Homeomorphism | ✓ Homeomorphism |
| Openness of $q_n(X_n)$ | ✓ Open in $Y$ | ✓ Open in $Y$ |
| Continuity criterion | ✓ Valid | ✓ Valid |
| Separability of $Y$ | Depends on local spaces | Depends on local spaces |
| First-countability of $Y$ | Depends on local spaces | Generally harder to ensure |
| Metrizable if local spaces are | ✓ Often yes | ✗ Likely no |

### Conclusion

**Surprising result:** Nearly all the topological statements remain valid for arbitrary index sets. The main proofs do not fundamentally depend on countability.

The key insight is that:
1. The equivalence relation structure is index-set independent
2. The quotient topology definition works for arbitrary partitions
3. The local-to-global continuity criterion (Question 4) is robust to arbitrary index sets

The main practical difference is that:
- With countable index sets, we can potentially apply countability-dependent arguments (separability, metrizability, etc.)
- With arbitrary index sets, the quotient space loses some nice properties but retains the fundamental topological structure

Therefore, **the answers to questions 1-4 are essentially unchanged**, but **question 2's answer may involve uncountable unions** if the index set is uncountable.


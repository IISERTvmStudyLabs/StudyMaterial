## Question 1

Let $X$ be a topological space, and let $\{K_i\}_{i=1}^n$ be a finite sequence of compact subsets of $X$. Is $\bigcup_{i=1}^n K_i$ a compact subset of $X$?

---

### Solution

**Answer: Yes.**

**Claim:** A finite union of compact sets is compact.

**Proof:**

Let $\mathcal{U}$ be an open cover of $\bigcup_{i=1}^n K_i$. That is, $\mathcal{U} = \{U_\alpha : \alpha \in A\}$ is a collection of open sets in $X$ such that:

$$
\bigcup_{i=1}^n K_i \subseteq \bigcup_{\alpha \in A} U_\alpha
$$

#### Step 1: Cover each compact set

For each $i \in \{1, 2, \ldots, n\}$, consider the restriction of $\mathcal{U}$ to $K_i$. 

Since $K_i \subseteq \bigcup_{i=1}^n K_i \subseteq \bigcup_{\alpha \in A} U_\alpha$, we have that $\mathcal{U}$ restricted to $K_i$ is an open cover of $K_i$ in $X$.

#### Step 2: Extract finite subcovers

Since each $K_i$ is compact, there exists a finite subcover $\mathcal{U}_{i} \subseteq \mathcal{U}$ such that:

$$
K_i \subseteq \bigcup_{U \in \mathcal{U}_i} U
$$

Let $\mathcal{U}_i = \{U_{i,1}, U_{i,2}, \ldots, U_{i,k_i}\}$.

#### Step 3: Combine the finite subcovers

Consider the collection:

$$
\mathcal{V} = \mathcal{U}_1 \cup \mathcal{U}_2 \cup \cdots \cup \mathcal{U}_n
$$

Since each $\mathcal{U}_i$ is finite, $\mathcal{V}$ is a **finite** collection (at most $\sum_{i=1}^n k_i$ elements).

Moreover, $\mathcal{V} \subseteq \mathcal{U}$, so it is a subcollection of the original cover.

#### Step 4: Verify the union is covered

By construction:

$$
\bigcup_{i=1}^n K_i = \bigcup_{i=1}^n \left( \bigcup_{U \in \mathcal{U}_i} U \right) = \bigcup_{U \in \mathcal{V}} U
$$

#### Conclusion

Therefore, $\mathcal{V}$ is a finite subcover of $\bigcup_{i=1}^n K_i$. Since $\mathcal{U}$ was an arbitrary open cover, $\bigcup_{i=1}^n K_i$ is compact. $\square$

---

## Question 2

Suppose $\{K_i\}_{i \in \mathbb{Z}}$ is an infinite sequence of compact subsets of $X$. What can you say about $\bigcap_{i \in \mathbb{Z}} K_i$?

---

### Solution

**Answer:** The intersection $\bigcap_{i \in \mathbb{Z}} K_i$ may be empty, or non-empty, depending on the specific sequence.

**Key Observation:** Unlike finite intersections of compact sets, infinite intersections do not automatically preserve compactness.

### Case 1: The intersection can be empty

**Counterexample:**

Let $X = \mathbb{R}$ with the standard topology, and define:

$$
K_i = [i, \infty) \quad \text{for each } i \in \mathbb{Z}
$$

Each $K_i$ is closed in $\mathbb{R}$ and contains the point at infinity in the sense that it extends to infinity. 

Actually, let us use a better example:

$$
K_i = [i, 2i] \quad \text{for each } i \in \mathbb{N}
$$

Wait, we need $i \in \mathbb{Z}$. Let me redefine:

$$
K_i = [i, i+1] \quad \text{for each } i \in \mathbb{Z}
$$

Each $K_i$ is compact (closed and bounded interval in $\mathbb{R}$).

However:

$$
\bigcap_{i \in \mathbb{Z}} [i, i+1] = \emptyset
$$

To see this, suppose $x \in \bigcap_{i \in \mathbb{Z}} [i, i+1]$. Then $x \in [i, i+1]$ for all $i \in \mathbb{Z}$, which means $i \leq x \leq i+1$ for all $i$.

But this is impossible: for any real number $x$, we can choose $i$ large enough so that $i > x$, contradicting $x \geq i$.

Therefore, $\bigcap_{i \in \mathbb{Z}} K_i = \emptyset$.

### Case 2: The intersection can be non-empty

**Example:**

Let $K_i = [-i, i]$ for each $i \in \mathbb{N}$ (considering only $i > 0$).

Each $K_i$ is compact.

However:

$$
\bigcap_{i=1}^\infty K_i = \{0\}
$$

which is compact.

But if we consider $i \in \mathbb{Z}$ with both positive and negative indices, a similar construction gives a non-empty intersection.

### Finite Intersection Property

**What we can say:**

If the sequence $\{K_i\}_{i \in \mathbb{Z}}$ has the **finite intersection property** (meaning every finite sub-collection has non-empty intersection), then we can derive constraints on the intersection.

Specifically, in a compact Hausdorff space, a collection of compact sets with the finite intersection property has non-empty intersection.

However, for a general sequence without additional structure, $\bigcap_{i \in \mathbb{Z}} K_i$ can be empty or non-empty.

### Conclusion

**Summary:**

- A finite intersection of compact sets is compact
- An infinite intersection of compact sets may be empty
- An infinite intersection of compact sets may be non-empty but not necessarily compact
- If the compact sets are **nested** (i.e., $K_1 \supseteq K_2 \supseteq K_3 \supseteq \cdots$), then $\bigcap_i K_i$ is compact and non-empty (in a compact space)

---

## Question 3

Prove: $S^n$ is a compact subset of $\mathbb{R}^{n+1}$ for all $n \in \mathbb{Z}$.

---

### Solution

**Claim:** The $n$-sphere $S^n = \{x \in \mathbb{R}^{n+1} : \|x\| = 1\}$ is a compact subset of $\mathbb{R}^{n+1}$ for all $n \geq 0$.

**Proof:**

#### Step 1: Express $S^n$ as the inverse image of a closed set

Consider the Euclidean norm function:

$$
f: \mathbb{R}^{n+1} \to \mathbb{R}, \quad f(x) = \|x\| = \sqrt{x_1^2 + x_2^2 + \cdots + x_{n+1}^2}
$$

This function is continuous (composition of continuous functions: the coordinate projections and the square root function).

The $n$-sphere can be written as:

$$
S^n = f^{-1}(\{1\}) = \{x \in \mathbb{R}^{n+1} : f(x) = 1\}
$$

#### Step 2: Recognize $S^n$ as a closed set

The singleton $\{1\}$ is a closed set in $\mathbb{R}$.

Since $f$ is continuous, the preimage $f^{-1}(\{1\})$ is closed in $\mathbb{R}^{n+1}$.

Therefore, $S^n$ is **closed**.

#### Step 3: Show $S^n$ is bounded

For any point $x \in S^n$, by definition:

$$
\|x\| = 1
$$

Thus every point in $S^n$ lies at distance exactly 1 from the origin. In particular:

$$
\|x\| \leq 1 + 1 = 2
$$

So $S^n \subseteq B(0, 2)$, where $B(0, 2)$ is the closed ball of radius 2 centered at the origin.

Therefore, $S^n$ is **bounded**.

#### Step 4: Apply the Heine-Borel Theorem

By the Heine-Borel Theorem, a subset of $\mathbb{R}^n$ is compact if and only if it is closed and bounded.

Since $S^n \subseteq \mathbb{R}^{n+1}$ is both closed and bounded, $S^n$ is **compact**. $\square$

---

## Question 4

Prove: $O(n)$ (the set of orthogonal matrices in $GL_n(\mathbb{R})$) is a compact subset of $GL_n(\mathbb{R})$.

---

### Solution

**Definition:** The orthogonal group $O(n)$ is defined as:

$$
O(n) = \{A \in M_n(\mathbb{R}) : A^T A = I_n\}
$$

where $I_n$ is the $n \times n$ identity matrix and $A^T$ is the transpose of $A$.

**Claim:** $O(n)$ is compact in $M_n(\mathbb{R}) \cong \mathbb{R}^{n^2}$.

**Proof:**

We identify $M_n(\mathbb{R})$ with $\mathbb{R}^{n^2}$ by writing a matrix as a vector of its entries.

#### Step 1: Show $O(n)$ is closed

Define the map:

$$
\Phi: M_n(\mathbb{R}) \to M_n(\mathbb{R}), \quad \Phi(A) = A^T A
$$

This map is continuous because:
- Matrix transpose is continuous
- Matrix multiplication is continuous (it is a polynomial in the entries)

The identity matrix $I_n$ is a single point (constant element) in $M_n(\mathbb{R})$.

Therefore:

$$
O(n) = \Phi^{-1}(\{I_n\})
$$

is the preimage of a closed set under a continuous map, hence **closed** in $M_n(\mathbb{R})$.

#### Step 2: Show $O(n)$ is bounded

For any matrix $A \in O(n)$, we have $A^T A = I_n$.

Taking the Frobenius norm (Euclidean norm on $\mathbb{R}^{n^2}$):

$$
\|A^T A\|_F = \|I_n\|_F
$$

The Frobenius norm satisfies $\|A^T A\|_F \leq \|A^T\|_F \|A\|_F$ (submultiplicativity).

Since $\|A^T\|_F = \|A\|_F$ (transpose preserves the Frobenius norm):

$$
\|A\|_F^2 = \|I_n\|_F
$$

The Frobenius norm of $I_n$ is:

$$
\|I_n\|_F = \sqrt{\sum_{i,j} (I_n)_{ij}^2} = \sqrt{n}
$$

Therefore:

$$
\|A\|_F^2 = n \implies \|A\|_F = \sqrt{n}
$$

Equivalently, for each matrix $A \in O(n)$:

$$
\sum_{i,j=1}^n A_{ij}^2 = n
$$

This means every entry $A_{ij}$ satisfies $|A_{ij}| \leq \sqrt{n}$.

Thus $O(n) \subseteq B(0, \sqrt{n^3})$, a closed ball in $\mathbb{R}^{n^2}$, so $O(n)$ is **bounded**.

#### Step 3: Apply the Heine-Borel Theorem

Since $O(n)$ is closed and bounded in $\mathbb{R}^{n^2}$, by the Heine-Borel Theorem, $O(n)$ is **compact**. $\square$

---

## Question 5

Prove: $SO(n)$ is a compact subset of $GL_n(\mathbb{R})$.

---

### Solution

**Definition:** The special orthogonal group $SO(n)$ is defined as:

$$
SO(n) = \{A \in O(n) : \det(A) = 1\}
$$

where $\det(A)$ is the determinant of $A$.

**Claim:** $SO(n)$ is compact in $M_n(\mathbb{R})$.

**Proof:**

#### Step 1: Express $SO(n)$ as a closed subset of $O(n)$

Define the determinant map:

$$
\det: M_n(\mathbb{R}) \to \mathbb{R}
$$

This map is continuous because the determinant is a polynomial function of the matrix entries.

We can write:

$$
SO(n) = O(n) \cap \det^{-1}(\{1\})
$$

Since $\{1\}$ is closed in $\mathbb{R}$, the set $\det^{-1}(\{1\})$ is closed in $M_n(\mathbb{R})$.

Therefore, $SO(n)$ is the intersection of two closed sets, hence **closed** in $M_n(\mathbb{R})$.

#### Step 2: Show $SO(n)$ is bounded

Since $SO(n) \subseteq O(n)$, every matrix $A \in SO(n)$ is orthogonal.

From the previous problem, we showed that for all $A \in O(n)$:

$$
\|A\|_F = \sqrt{n}
$$

Since $SO(n) \subseteq O(n)$, this bound applies to all $A \in SO(n)$ as well.

Therefore, $SO(n)$ is **bounded** in $\mathbb{R}^{n^2}$.

#### Step 3: Apply the Heine-Borel Theorem

Since $SO(n)$ is closed and bounded in $\mathbb{R}^{n^2}$, by the Heine-Borel Theorem, $SO(n)$ is **compact**. $\square$

---

## Question 6

Prove: $SO(n) \subseteq O(n)$.

---

### Solution

**Claim:** Every special orthogonal matrix is an orthogonal matrix.

**Proof:**

By definition:

$$
SO(n) = \{A \in O(n) : \det(A) = 1\}
$$

This definition explicitly states that $SO(n)$ consists of matrices in $O(n)$ with an additional property (determinant equals 1).

Therefore, by definition, $SO(n) \subseteq O(n)$.

More explicitly: if $A \in SO(n)$, then:
1. $A \in O(n)$ (by definition of $SO(n)$), **and**
2. $\det(A) = 1$ (additional constraint)

The first property alone is sufficient to conclude $A \in O(n)$. $\square$

---

## Question 7

Prove: $U(n)$ (the set of unitary matrices in $GL_n(\mathbb{C})$) is a compact subset of $GL_n(\mathbb{C})$.

---

### Solution

**Definition:** The unitary group $U(n)$ is defined as:

$$
U(n) = \{A \in M_n(\mathbb{C}) : A^\dagger A = I_n\}
$$

where $A^\dagger = \overline{A^T}$ is the conjugate transpose (Hermitian transpose) and $I_n$ is the $n \times n$ identity matrix.

**Claim:** $U(n)$ is compact in $M_n(\mathbb{C}) \cong \mathbb{C}^{n^2} \cong \mathbb{R}^{2n^2}$.

**Proof:**

We identify $M_n(\mathbb{C})$ with $\mathbb{R}^{2n^2}$ by writing each complex entry as an ordered pair of real numbers (real and imaginary parts).

#### Step 1: Show $U(n)$ is closed

Define the map:

$$
\Psi: M_n(\mathbb{C}) \to M_n(\mathbb{C}), \quad \Psi(A) = A^\dagger A
$$

This map is continuous because:
- The conjugate transpose operation is continuous (coordinates are real linear combinations)
- Matrix multiplication is continuous (polynomial in the entries)

The identity matrix $I_n$ is a single point in $M_n(\mathbb{C})$.

Therefore:

$$
U(n) = \Psi^{-1}(\{I_n\})
$$

is the preimage of a closed set under a continuous map, hence **closed** in $M_n(\mathbb{C})$.

#### Step 2: Show $U(n)$ is bounded

For any unitary matrix $A \in U(n)$, we have $A^\dagger A = I_n$.

Using the Frobenius norm (Euclidean norm on $\mathbb{R}^{2n^2}$):

$$
\|A^\dagger A\|_F = \|I_n\|_F
$$

For complex matrices, the Frobenius norm satisfies:

$$
\|A^\dagger A\|_F \leq \|A^\dagger\|_F \|A\|_F
$$

Since $\|A^\dagger\|_F = \|A\|_F$ (conjugate transpose preserves the Frobenius norm):

$$
\|A\|_F^2 \geq \|I_n\|_F
$$

Actually, more directly: if $A^\dagger A = I_n$, then taking Frobenius norms:

$$
\text{tr}(A^\dagger A A^\dagger A) = \text{tr}(I_n)
$$

where $\text{tr}$ denotes the trace.

This gives:

$$
\text{tr}(A^\dagger A) = \text{tr}(I_n) = n
$$

But $\text{tr}(A^\dagger A) = \|A\|_F^2$ (the square of the Frobenius norm).

Therefore:

$$
\|A\|_F^2 = n \implies \|A\|_F = \sqrt{n}
$$

Equivalently, writing $A = (a_{ij})$ with $a_{ij} = x_{ij} + iy_{ij}$ (real and imaginary parts):

$$
\sum_{i,j=1}^n (x_{ij}^2 + y_{ij}^2) = n
$$

This means every entry $a_{ij}$ satisfies $|a_{ij}| \leq \sqrt{n}$.

Thus $U(n) \subseteq B(0, \sqrt{n^3})$ in $\mathbb{R}^{2n^2}$, so $U(n)$ is **bounded**.

#### Step 3: Apply the Heine-Borel Theorem

Since $U(n)$ is closed and bounded in $\mathbb{R}^{2n^2}$, by the Heine-Borel Theorem, $U(n)$ is **compact**. $\square$

---

## Additional Note: Relationship between $O(n)$, $SO(n)$, and $U(n)$

These three groups form a natural hierarchy:

1. **$O(n)$** consists of all orthogonal matrices (both orientation-preserving and orientation-reversing)
2. **$SO(n)$** consists of the orientation-preserving orthogonal matrices (those with determinant +1)
3. **$U(n)$** is the complex analog of $O(n)$, consisting of unitary matrices

All three are compact, which makes them important in topology and differential geometry as examples of compact Lie groups.


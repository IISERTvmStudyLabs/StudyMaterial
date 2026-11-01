## Question 1

Prove: $\mathbb{R}$ is **not locally compact**.

---

### Solution

**Claim:** $\mathbb{R}$ with the standard topology is not locally compact.

**Proof:**

Recall that a topological space $X$ is *locally compact* if every point $x \in X$ has a compact neighborhood; that is, there exists a neighborhood $U$ of $x$ such that the closure $\overline{U}$ is compact.

For $\mathbb{R}$ with the standard topology, we must show that there exists at least one point that does not have a compact neighborhood.

#### Step 1: Analyze compact sets in $\mathbb{R}$

By the **Heine-Borel Theorem**, a subset $K \subseteq \mathbb{R}$ is compact if and only if $K$ is closed and bounded.

#### Step 2: Check neighborhoods of an arbitrary point

Consider any point $x \in \mathbb{R}$ and any neighborhood $U$ of $x$.

Since $U$ is a neighborhood of $x$ in the standard topology, there exists an open interval $(x - \epsilon, x + \epsilon) \subseteq U$ for some $\epsilon > 0$.

The closure of any neighborhood of $x$ must contain an open interval around $x$, and hence cannot be bounded.

For instance, if $U$ is a neighborhood of $x$, then either:
- The upper end of $\overline{U}$ is unbounded, or
- The lower end of $\overline{U}$ is unbounded, or
- Both ends are unbounded.

In any case, $\overline{U}$ is **unbounded**.

#### Step 3: Conclude non-compactness

Since $\overline{U}$ is unbounded, by the Heine-Borel Theorem, $\overline{U}$ is **not compact**.

This holds for every neighborhood $U$ of every point $x \in \mathbb{R}$.

#### Conclusion

Since no point in $\mathbb{R}$ has a compact neighborhood, $\mathbb{R}$ is **not locally compact**. $\square$

---

## Question 2

Is a closed subset of a locally compact space locally compact? Justify.

---

### Solution

**Answer: Yes.**

**Claim:** Let $X$ be a locally compact topological space and let $A \subseteq X$ be a closed subset. Then $A$ (with the subspace topology) is locally compact.

**Proof:**

We must show that for every point $a \in A$, there exists a neighborhood of $a$ in $A$ whose closure in $A$ is compact.

#### Step 1: Fix a point in $A$

Let $a \in A$ (arbitrary).

#### Step 2: Use local compactness of $X$

Since $X$ is locally compact, there exists a neighborhood $U$ of $a$ in $X$ such that $\overline{U}^X$ (the closure of $U$ in $X$) is compact.

#### Step 3: Construct a neighborhood in $A$

Consider $V = U \cap A$. Since $U$ is open in $X$ and $A$ has the subspace topology, $V$ is open in $A$.

Moreover, $a \in U$ and $a \in A$, so $a \in V$. Thus $V$ is a neighborhood of $a$ in $A$.

#### Step 4: Analyze the closure in $A$

The closure of $V$ in $A$ (denoted $\overline{V}^A$) is related to the closure in $X$ by:

$$
\overline{V}^A = \overline{U \cap A}^X \cap A
$$

Since $A$ is closed in $X$:

$$
\overline{V}^A = \overline{U \cap A}^X \cap A \subseteq \overline{U}^X \cap A
$$

#### Step 5: Verify compactness

Since $a \in A$, we have:

$$
\overline{V}^A \subseteq \overline{U}^X \cap A \subseteq \overline{U}^X
$$

Now, $\overline{U}^X$ is compact by assumption.

A closed subset of a compact space is compact, so we need to show that $\overline{V}^A$ is closed in $\overline{U}^X$.

Since $\overline{V}^A$ is closed in $A$ (as the closure of a set in $A$) and $A$ is closed in $X$, the set $\overline{V}^A$ is closed in $X$, and hence closed in the subspace $\overline{U}^X$.

Therefore, $\overline{V}^A$ is compact.

#### Conclusion

For every $a \in A$, we have constructed a neighborhood $V$ of $a$ in $A$ with compact closure in $A$. Thus $A$ is locally compact. $\square$

---

## Question 3

Let $X$ be a locally compact topological space. Let $f: X \to Y$ be continuous and open. If $f(U) \in \mathcal{U}_y$ is locally compact, where $y \in Y$, then $f(U) \subseteq C_y$. Is $f(X)$ locally compact? Justify.

---

### Solution

**Answer: Yes, $f(X)$ is locally compact.**

**Claim:** Let $X$ be locally compact and $f: X \to Y$ be continuous and open. Then the image $f(X)$ (with the subspace topology from $Y$) is locally compact.

**Proof:**

We must show that every point $y \in f(X)$ has a locally compact neighborhood in $f(X)$.

#### Step 1: Fix a point in $f(X)$

Let $y \in f(X)$ be arbitrary. Then there exists some $x \in X$ such that $f(x) = y$.

#### Step 2: Use local compactness of $X$

Since $X$ is locally compact and $x \in X$, there exists a compact neighborhood $K$ of $x$ in $X$. That is:
- $K$ is a neighborhood of $x$
- $K$ is compact

#### Step 3: Apply the open map property

Since $f$ is an open map, $f(K)$ is open in $f(X)$ (with the subspace topology).

Actually, we use a stronger property: The image of a compact space under a continuous map is compact.

Therefore, $f(K)$ is a compact subset of $Y$.

#### Step 4: Construct a neighborhood in $f(X)$

Since $x \in K$ and $f(x) = y$, we have $y \in f(K)$.

The set $f(K)$ is compact (from Step 3) and contains $y$.

Moreover, there exists an open set $U$ in $X$ containing $x$ such that $\overline{U} \subseteq K$.

Since $f$ is open, $f(U)$ is open in $Y$, and hence open in $f(X)$ (with the subspace topology).

#### Step 5: Verify local compactness at $y$

The set $f(U)$ is:
- An open neighborhood of $y$ in $f(X)$
- Its closure in $f(X)$ is $\overline{f(U)}^{f(X)} \subseteq f(\overline{U}) \subseteq f(K)$ (using continuity of $f$)

Since $f(K)$ is compact and $\overline{f(U)}^{f(X)}$ is a closed subset of $f(K)$:

$$
\overline{f(U)}^{f(X)} \text{ is compact}
$$

#### Conclusion

For every $y \in f(X)$, there exists an open neighborhood $f(U)$ of $y$ in $f(X)$ with compact closure. Thus $f(X)$ is locally compact. $\square$

---

## Question 4

Let $X$ and $Y$ be locally compact Hausdorff spaces. Let $\varphi: X \to Y$ be a homeomorphism. Let $X^*$ and $Y^*$ denote the one-point compactifications of $X$ and $Y$ respectively. Is $\varphi^*: X^* \to Y^*$ (the natural extension of $\varphi$) a homeomorphism? Justify.

---

### Solution

**Answer: Yes, $\varphi^*$ is a homeomorphism.**

**Claim:** If $\varphi: X \to Y$ is a homeomorphism between locally compact Hausdorff spaces, then the extension $\varphi^*: X^* \to Y^*$ to their one-point compactifications is also a homeomorphism.

**Proof:**

#### Step 1: Recall the one-point compactification

For a locally compact Hausdorff space $X$, the one-point compactification $X^*$ is defined as:

$$
X^* = X \cup \{\infty_X\}
$$

where $\infty_X$ is a point not in $X$, and the topology on $X^*$ consists of:
- All open sets of $X$, together with
- Sets of the form $\{\infty_X\} \cup (X \setminus K)$ where $K$ is a compact subset of $X$

#### Step 2: Define $\varphi^*$

The natural extension $\varphi^*: X^* \to Y^*$ is defined as:

$$
\varphi^*(x) = \begin{cases}
\varphi(x) & \text{if } x \in X \\
\infty_Y & \text{if } x = \infty_X
\end{cases}
$$

#### Step 3: Prove $\varphi^*$ is continuous

We must verify that $\varphi^*$ is continuous.

**Case 1:** For any open set $V$ in $Y$, the set $(\varphi^*)^{-1}(V) = \varphi^{-1}(V)$ is open in $X$ (since $\varphi$ is a homeomorphism, hence continuous). This is also open in $X^*$.

**Case 2:** For a basic open set $\{\infty_Y\} \cup (Y \setminus K)$ in $Y^*$ where $K$ is compact in $Y$, we compute:

$$
(\varphi^*)^{-1}(\{\infty_Y\} \cup (Y \setminus K)) = (\varphi^*)^{-1}(\{\infty_Y\}) \cup (\varphi^*)^{-1}(Y \setminus K)
$$

$$
= \{\infty_X\} \cup \varphi^{-1}(Y \setminus K)
$$

Since $\varphi$ is a homeomorphism, $\varphi^{-1}(K)$ is compact in $X$ (the continuous image of compact $K$ is compact under the inverse map).

Therefore:

$$
(\varphi^*)^{-1}(\{\infty_Y\} \cup (Y \setminus K)) = \{\infty_X\} \cup (X \setminus \varphi^{-1}(K))
$$

This is open in $X^*$ by definition of the one-point compactification topology.

Thus $\varphi^*$ is continuous.

#### Step 4: Prove $\varphi^*$ is bijective

- **Injective:** Since $\varphi$ is injective and $\infty_X \neq x$ for all $x \in X$, and $\varphi^*(\infty_X) = \infty_Y$, the map $\varphi^*$ is injective.

- **Surjective:** For any $y \in Y^*$, if $y \in Y$, then $y = \varphi(\varphi^{-1}(y))$ (since $\varphi$ is surjective). If $y = \infty_Y$, then $y = \varphi^*(\infty_X)$.

Thus $\varphi^*$ is bijective.

#### Step 5: Prove $\varphi^*$ is open (or prove $(\varphi^*)^{-1}$ is continuous)

By a symmetric argument, the inverse map $(\varphi^*)^{-1}: Y^* \to X^*$ defined as:

$$
(\varphi^*)^{-1}(y) = \begin{cases}
\varphi^{-1}(y) & \text{if } y \in Y \\
\infty_X & \text{if } y = \infty_Y
\end{cases}
$$

is continuous (by the same reasoning as Step 3).

#### Conclusion

Since $\varphi^*$ is a continuous bijection with continuous inverse, $\varphi^*$ is a homeomorphism. $\square$

---

## Question 5

Is $\mathbb{Z}_+$ (the positive integers with the standard subspace topology from $\mathbb{R}$) locally compact? Determine a one-point compactification of $\mathbb{Z}_+$.

---

### Solution

**Answer: Yes, $\mathbb{Z}_+$ is locally compact. Its one-point compactification is $\mathbb{Z}_+ \cup \{\infty\}$ with an appropriate topology.**

### Part A: Local Compactness of $\mathbb{Z}_+$

**Claim:** $\mathbb{Z}_+$ with the subspace topology from $\mathbb{R}$ is locally compact.

**Proof:**

In the subspace topology from $\mathbb{R}$, a set is open in $\mathbb{Z}_+$ if and only if it is the intersection of an open set in $\mathbb{R}$ with $\mathbb{Z}_+$.

For any point $n \in \mathbb{Z}_+$, the singleton $\{n\}$ is open in the subspace topology. To see this, note that:

$$
\{n\} = (n - 0.5, n + 0.5) \cap \mathbb{Z}_+
$$

Since $(n - 0.5, n + 0.5)$ is open in $\mathbb{R}$, the set $\{n\}$ is open in $\mathbb{Z}_+$.

Therefore, $\{n\}$ is a neighborhood of $n$ in $\mathbb{Z}_+$.

Moreover, $\{n\}$ is compact (any finite set is compact).

Thus, every point $n \in \mathbb{Z}_+$ has a compact neighborhood, so $\mathbb{Z}_+$ is locally compact. $\square$

---

### Part B: One-Point Compactification of $\mathbb{Z}_+$

**Construction:**

Let $\mathbb{Z}_+^* = \mathbb{Z}_+ \cup \{\infty\}$ where $\infty$ is a point not in $\mathbb{Z}_+$.

The topology on $\mathbb{Z}_+^*$ consists of:

1. All open sets of $\mathbb{Z}_+$ (in the subspace topology from $\mathbb{R}$)
2. Sets of the form $\{\infty\} \cup (\mathbb{Z}_+ \setminus K)$ where $K$ is a compact subset of $\mathbb{Z}_+$

Since compact subsets of $\mathbb{Z}_+$ are precisely the **finite** subsets (as $\mathbb{Z}_+$ is discrete in its subspace topology), the topology on $\mathbb{Z}_+^*$ consists of:

1. Arbitrary subsets of $\mathbb{Z}_+$
2. Sets of the form $\{\infty\} \cup (\mathbb{Z}_+ \setminus F)$ where $F$ is a finite subset of $\mathbb{Z}_+$

Equivalently, the sets containing $\infty$ that are open are exactly those of the form $\{\infty\} \cup U$ where $U$ is a cofinite subset of $\mathbb{Z}_+$ (a subset whose complement is finite).

**Verification:**

$$
\mathbb{Z}_+^* \text{ is compact:}
$$

Let $\mathcal{U}$ be an open cover of $\mathbb{Z}_+^*$.

Since $\infty \in \mathbb{Z}_+^*$, there exists some $U \in \mathcal{U}$ containing $\infty$.

By the definition of the topology, $U = \{\infty\} \cup (\mathbb{Z}_+ \setminus F)$ for some finite set $F$.

Thus, $\mathbb{Z}_+ \setminus F \subseteq U$.

Since $F$ is finite, we can choose finitely many sets $U_1, U_2, \ldots, U_k$ from $\mathcal{U}$ to cover the points in $F$ (possibly with some redundancy).

Then $\{U, U_1, \ldots, U_k\}$ is a finite subcover of $\mathcal{U}$ covering all of $\mathbb{Z}_+^*$.

Therefore, $\mathbb{Z}_+^*$ is compact. $\square$

**Topological Structure:**

The one-point compactification $\mathbb{Z}_+^*$ can be visualized as:

$$
\mathbb{Z}_+^* = \{1, 2, 3, 4, \ldots, \infty\}
$$

where:
- Points in $\mathbb{Z}_+$ are **isolated** (every singleton is open)
- The point $\infty$ has neighborhoods of the form $\{\infty\} \cup \{n \in \mathbb{Z}_+ : n > N\}$ for any $N \in \mathbb{Z}_+$

This space is homeomorphic to the convergent sequence space: the set of natural numbers together with a limit point at infinity.


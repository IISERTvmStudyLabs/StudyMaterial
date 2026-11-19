# Question 1
Let $H$ be a Hilbert space and let $S\subseteq H$. Define 
$$
S^{\perp}=\{x\in H:(x,y)=0 \text{ for every } y\in S\}
$$
Prove that $S^{\perp}$ is a closed subspace of $H$, and show that 
$$
\overline{span(S)}=H\iff S^{\perp}=\{0\}
$$

> **Hint:** Use continuity of the inner product to prove closedness. For the reverse implication, project a vector onto $V=\overline{span(S)}$ and look at $x-P_{V}(x)$.
## Solution
**Definitions**:-
> [!note] Hilbert Space
> A **Hilbert space** is a real or complex vector space equipped with an inner product that is complete with respect to the distance metric induced by that inner product.
> **Formally:**
> A vector space $H$ over the field $\mathbb{F}$ (where $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$) is a Hilbert space if it satisfies the following conditions:
> 1. **Inner Product:** Equipped with an inner product $\langle \cdot, \cdot \rangle : H \times H \to \mathbb{F}$ satisfying for all $x, y, z \in H$ and scalars $\alpha, \beta \in \mathbb{F}$:
>     - **Conjugate Symmetry:** $\langle x, y \rangle = \overline{\langle y, x \rangle}$ _(if $\mathbb{F} = \mathbb{R}$, $\langle x, y \rangle = \langle y, x \rangle$)_
>     - **Linearity in the First Argument:** $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$
>     - **Positive-Definiteness:** $\langle x, x \rangle \ge 0$, and $\langle x, x \rangle = 0 \iff x = 0$
> 2. **Induced Norm & Metric:**
>     The inner product induces a norm $\Vert{}x\Vert{} = \sqrt{\langle x, x \rangle}$ and a distance metric $d(x, y) = \Vert{}x - y\Vert{}$.
> 3. **Completeness:**
>     The metric space $(H, d)$ is complete: every Cauchy sequence $(x_n)_{n=1}^\infty \subset H$ converges to a limit $x \in H$.
> **Key Properties & Examples:**
> - **Relation to Banach Spaces:** Every Hilbert space is a Banach space, but a Banach space is a Hilbert space if and only if its norm satisfies the **parallelogram identity**:
>     
$$
\Vert{}x + y\Vert{}^2 + \Vert{}x - y\Vert{}^2 = 2\Vert{}x\Vert{}^2 + 2\Vert{}y\Vert{}^2 \quad \forall x, y \in H
$$

> - **Standard Examples:**
>     - **$\mathbb{R}^n$ or $\mathbb{C}^n$:** Finite-dimensional Euclidean/unitary spaces with the standard dot product.
>     - **$\ell^2$:** The space of square-summable sequences with inner product $\langle x, y \rangle = \sum_{n=1}^\infty x_n \overline{y_n}$.
>         
>     - **$L^2(\Omega)$:** The space of square-integrable functions with inner product $\langle f, g \rangle = \int_\Omega f(x) \overline{g(x)} \, dx$.

---------------
**Part 1: Proving $S^\perp$ is a closed subspace of $H$**
To prove that $S^\perp$ is a closed subspace, we must first show it is a vector subspace (closed under addition and scalar multiplication), and then show it is topologically closed.
**1. $S^\perp$ is a vector subspace** Let $x_1, x_2 \in S^\perp$ and let $c_1, c_2$ be scalars from the underlying field. By definition, for any $y \in S$, we have $(x_1, y) = 0$ and $(x_2, y) = 0$. Using the linearity of the inner product in its first argument, we evaluate the linear combination:

$$
(c_1 x_1 + c_2 x_2, y) = c_1(x_1, y) + c_2(x_2, y) = c_1(0) + c_2(0) = 0
$$

Because the inner product of $c_1 x_1 + c_2 x_2$ with any $y \in S$ is $0$, the vector $c_1 x_1 + c_2 x_2$ belongs to $S^\perp$. Additionally, the zero vector is in $S^\perp$ since $(0, y) = 0$. Thus, $S^\perp$ is a subspace.
**2. $S^\perp$ is topologically closed** We use sequential continuity. Let $(x_n)$ be a sequence in $S^\perp$ that converges to a vector $x \in H$. We must show that $x \in S^\perp$. For every $n \in \mathbb{N}$ and every $y \in S$, we know $(x_n, y) = 0$. The inner product in a Hilbert space is a continuous function. Therefore, we can pull the limit outside the inner product:

$$
(x, y) = \left(\lim_{n \to \infty} x_n, y\right) = \lim_{n \to \infty} (x_n, y) = \lim_{n \to \infty} 0 = 0
$$

Since $(x, y) = 0$ for all $y \in S$, the limit point $x$ resides in $S^\perp$. Because $S^\perp$ contains all of its limit points, it is a closed set.
**Part 2: Proving $\overline{\text{span}(S)} = H \iff S^\perp = \{0\}$**
**Forward Direction ($\implies$):** Assume $\overline{\text{span}(S)} = H$. Let $z \in S^\perp$. We must show that $z = 0$. Since $z \in S^\perp$, $(z, y) = 0$ for all $y \in S$. By the linearity of the inner product, this orthogonality extends to all finite linear combinations of vectors in $S$. Therefore, $(z, v) = 0$ for all $v \in \text{span}(S)$. Because $\overline{\text{span}(S)} = H$, the vector $z$ itself belongs to the closure of the span. This means there exists a sequence $(v_n)$ entirely contained in $\text{span}(S)$ such that $\lim_{n \to \infty} v_n = z$. We evaluate the inner product of $z$ with itself using continuity in the second argument:

$$
\Vert{}z\Vert{}^2 = (z, z) = \left(z, \lim_{n \to \infty} v_n\right) = \lim_{n \to \infty} (z, v_n)
$$

Since every $v_n \in \text{span}(S)$, we know $(z, v_n) = 0$ for all $n$.

$$
\Vert{}z\Vert{}^2 = \lim_{n \to \infty} 0 = 0
$$

The only vector with a norm of $0$ is the zero vector, so $z = 0$. Thus, $S^\perp = \{0\}$.
**Reverse Direction ($\impliedby$):** Assume $S^\perp = \{0\}$. We must show that $\overline{\text{span}(S)} = H$. Let $V = \overline{\text{span}(S)}$. As the closure of a subspace, $V$ is a closed subspace of the Hilbert space $H$. We proceed by contradiction and assume $V \neq H$. Because $V$ is a proper closed subspace, the Hilbert Space Projection Theorem guarantees that there exists at least one vector $x \in H$ such that $x \notin V$. Let $P_V(x)$ be the orthogonal projection of $x$ onto $V$, and define the residual vector:

$$
z = x - P_V(x)
$$

Because $x \notin V$ and $P_V(x) \in V$, the residual $z$ cannot be the zero vector (if $z = 0$, then $x = P_V(x) \in V$, a contradiction). Thus, $z \neq 0$. By the definition of orthogonal projection, the residual $z$ is orthogonal to the subspace $V$, meaning $z \in V^\perp$. Therefore:

$$
(z, v) = 0 \quad \text{for all } v \in V
$$

Since $S \subseteq \text{span}(S) \subseteq V$, it directly follows that $(z, y) = 0$ for all $y \in S$. This implies $z \in S^\perp$. We have constructed a strictly non-zero vector $z$ that belongs to $S^\perp$, which contradicts our initial assumption that $S^\perp = \{0\}$. Because the assumption $V \neq H$ leads to a contradiction, it must be true that $V = H$.
__________
# Question 2
Let $\{e_{k}\}_{k\in I}$ be a finite or countably infinite orthonormal set, i.e., $(e_{k},e_{j})=\delta_{k,j}$ for all $k, j\in I$, in a Hilbert space $H$, where $I=\{1,...,N\}$ or $I=\mathbb{N}$. Set $V=\overline{span\{e_{k}:k\in I\}},$ and let $P_{V}$ denote the orthogonal projection onto $V$. Prove the following Bessel's inequality for every $x\in H$:

$$
\sum_{k\in I}\vert{}(x,e_{k})\vert{}^{2}=\vert{}\vert{}P_{V}x\vert{}\vert{}^{2}\le\vert{}\vert{}x\vert{}\vert{}^{2} , \quad \sum_{k\in I}(x,e_{k})e_{k}=P_{V}x
$$

In the infinite case, prove that the vector series converges in the norm of $H$.
> **Hint:** Apply Pythagoras (if $(x,y)=0,$ then $\vert{}\vert{}x+y\vert{}\vert{}^{2}=\vert{}\vert{}x\vert{}\vert{}^{2}+\vert{}\vert{}y\vert{}\vert{}^{2})$ to the finite partial sums and their remainders. Show that the partial sums are Cauchy, and that their limit $z\in V$ satisfies $x-z\in V^{\perp}$.
## Solution
**Step 1: Finite Partial Sums and the Pythagorean Theorem**
Let $x \in H$ be an arbitrary vector. We define the $n$-th partial sum of the vector series as:

$$
z_n = \sum_{k=1}^n (x, e_k) e_k
$$

where $n \le N$ if $I = \{1, \dots, N\}$, or $n \in \mathbb{N}$ if $I = \mathbb{N}$.
First, we compute the norm of $z_n$. Because the set $\{e_k\}$ is orthonormal, we have $(e_j, e_k) = \delta_{j,k}$. Using the linearity of the inner product, we get:

$$
\Vert{}z_n\Vert{}^2 = (z_n, z_n) = \left( \sum_{j=1}^n (x, e_j)e_j, \sum_{k=1}^n (x, e_k)e_k \right) = \sum_{j=1}^n \sum_{k=1}^n (x,e_j)\overline{(x,e_k)} (e_j, e_k)
$$


$$
\Vert{}z_n\Vert{}^2 = \sum_{k=1}^n \vert{}(x, e_k)\vert{}^2
$$

Next, we examine the remainder $x - z_n$. We check its inner product with any basis vector $e_j$ for $1 \le j \le n$:

$$
(x - z_n, e_j) = (x, e_j) - (z_n, e_j) = (x, e_j) - \left( \sum_{k=1}^n (x, e_k)e_k, e_j \right)
$$


$$
(x - z_n, e_j) = (x, e_j) - (x, e_j)(e_j, e_j) = (x, e_j) - (x, e_j) = 0
$$

Because $x - z_n$ is orthogonal to every $e_j$ for $1 \le j \le n$, it is also orthogonal to any linear combination of them. Since $z_n \in \text{span}\{e_1, \dots, e_n\}$, we have $(x - z_n, z_n) = 0$.
Since $x - z_n \perp z_n$, we can apply the Pythagorean theorem to $x = (x - z_n) + z_n$:

$$
\Vert{}x\Vert{}^2 = \Vert{}x - z_n + z_n\Vert{}^2 = \Vert{}x - z_n\Vert{}^2 + \Vert{}z_n\Vert{}^2
$$

Because $\Vert{}x - z_n\Vert{}^2 \ge 0$, it immediately follows that:

$$
\Vert{}z_n\Vert{}^2 \le \Vert{}x\Vert{}^2 \implies \sum_{k=1}^n \vert{}(x, e_k)\vert{}^2 \le \Vert{}x\Vert{}^2
$$

This proves standard Bessel's inequality for finite sums. If $I = \{1, \dots, N\}$, the proof is effectively complete by setting $n=N$.
**Step 2: The Infinite Case and Cauchy Sequences**
Assume $I = \mathbb{N}$. Since the sequence of real numbers $S_n = \sum_{k=1}^n \vert{}(x, e_k)\vert{}^2$ is monotonically increasing (as each term is non-negative) and bounded above by $\Vert{}x\Vert{}^2$, it must converge to a finite limit. Therefore, the infinite series converges:

$$
\sum_{k=1}^\infty \vert{}(x, e_k)\vert{}^2 \le \Vert{}x\Vert{}^2
$$

Now we prove that the vector sequence $\{z_n\}$ is Cauchy in $H$. For any $m > n$, we look at the norm of the difference:

$$
\Vert{}z_m - z_n\Vert{}^2 = \left\Vert{}\sum_{k=n+1}^m (x, e_k)e_k\right\Vert{}^2
$$

By the same orthogonality argument used in Step 1, this evaluates to:

$$
\Vert{}z_m - z_n\Vert{}^2 = \sum_{k=n+1}^m \vert{}(x, e_k)\vert{}^2
$$


Because the scalar series $\sum_{k=1}^\infty \vert{}(x, e_k)\vert{}^2$ converges, the tail sum $\sum_{k=n+1}^m \vert{}(x, e_k)\vert{}^2 \to 0$ as $m, n \to \infty$. Thus, $\Vert{}z_m - z_n\Vert{} \to 0$, meaning $\{z_n\}$ is a Cauchy sequence in the Hilbert space $H$.
Because a Hilbert space is complete, every Cauchy sequence converges. Therefore, there exists a vector $z \in H$ such that $z_n \to z$ in the norm of $H$. This proves the vector series $\sum_{k=1}^\infty (x,e_k)e_k$ converges.
**Step 3: Characterizing the Limit $z$ and $V^\perp$**
We must show that $z = P_V x$, which requires proving two things:
1. $z \in V$
2. $x - z \in V^\perp$
**Proof of 1:** By definition, $z_n \in \text{span}\{e_k : k \in I\}$. Since $V = \overline{\text{span}\{e_k : k \in I\}}$ is the closure of the span, and $z$ is the limit of the sequence $z_n \in V$, it follows that $z \in V$.
**Proof of 2:** We need to show $(x - z, y) = 0$ for all $y \in V$. First, check the basis vectors $e_j$. Fix any $j \in I$. For all $n \ge j$, we already established that $(x - z_n, e_j) = 0$. The inner product is a continuous function. Therefore, we can pass the limit inside the inner product:

$$
(x - z, e_j) = \left( x - \lim_{n\to\infty} z_n, e_j \right) = \lim_{n\to\infty} (x - z_n, e_j) = 0
$$

Since $x - z$ is orthogonal to every $e_j$, it is orthogonal to $\text{span}\{e_k : k \in I\}$. Let $y \in V$. By definition, there exists a sequence $\{y_m\}$ in $\text{span}\{e_k\}$ such that $y_m \to y$. Again, by the continuity of the inner product:

$$
(x - z, y) = (x - z, \lim_{m\to\infty} y_m) = \lim_{m\to\infty} (x - z, y_m) = 0
$$

Thus, $x - z \in V^\perp$.
**Step 4: Final Conclusion**
By the Projection Theorem for Hilbert spaces, any vector $x \in H$ can be uniquely decomposed as $x = v + w$, where $v \in V$ and $w \in V^\perp$. Furthermore, this unique $v$ is exactly the orthogonal projection $P_V x$. We have just shown that $x = z + (x - z)$ where $z \in V$ and $(x-z) \in V^\perp$. Therefore:

$$
z = P_V x
$$

Substituting our definition of $z$, we get the second required identity:

$$
\sum_{k\in I} (x, e_k)e_k = P_V x
$$

Finally, because $x = P_V x + (x - P_V x)$ and $P_V x \perp (x - P_V x)$, the Pythagorean theorem yields:

$$
\Vert{}x\Vert{}^2 = \Vert{}P_V x\Vert{}^2 + \Vert{}x - P_V x\Vert{}^2
$$

Since $\Vert{}x - P_V x\Vert{}^2 \ge 0$, we have $\Vert{}P_V x\Vert{}^2 \le \Vert{}x\Vert{}^2$. Furthermore, the continuity of the norm implies:

$$
\Vert{}P_V x\Vert{}^2 = \Vert{}z\Vert{}^2 = \lim_{n\to\infty} \Vert{}z_n\Vert{}^2 = \lim_{n\to\infty} \sum_{k=1}^n \vert{}(x, e_k)\vert{}^2 = \sum_{k\in I} \vert{}(x, e_k)\vert{}^2
$$

Chaining these results together yields the fully proven inequality:

$$
\sum_{k\in I} \vert{}(x, e_k)\vert{}^2 = \Vert{}P_V x\Vert{}^2 \le \Vert{}x\Vert{}^2
$$

__________________
# Question 3
Let $X$ be a real Banach space. Prove that its norm is induced by an inner product if and only if it satisfies the parallelogram identity.

$$
\vert{}\vert{}x+y\vert{}\vert{}^{2}+\vert{}\vert{}x-y\vert{}\vert{}^{2}=2\vert{}\vert{}x\vert{}\vert{}^{2}+2\vert{}\vert{}y\vert{}\vert{}^{2} \quad (x,y\in X)
$$

 More precisely:
1. Prove the identity for the norm of a real Hilbert space.
2. Assuming the identity, prove that $(x,y)=\frac{1}{2}(\vert{}\vert{}x+y\vert{}\vert{}^{2}-\vert{}\vert{}x\vert{}\vert{}^{2}-\vert{}\vert{}y\vert{}\vert{}^{2})=\frac{1}{4}(\vert{}\vert{}x+y\vert{}\vert{}^{2}-\vert{}\vert{}x-y\vert{}\vert{}^{2})$ defines an inner product on $X$ whose induced norm is the given norm.
> **Hint:** For the converse, write $B(x,y)$ for the proposed expression. The parallelogram identity gives $B(x+z,y)+B(x-z,y)=2B(x,y)$. Combine this with $B(2x,y)=2B(x,y)$ to obtain additivity. Extend homogeneity from rational to real scalars by continuity.
## Solution
**Part 1: Parallelogram Identity in a Real Hilbert Space**
Let $X$ be a real Hilbert space with an inner product $(x,y)$ that induces the norm $\Vert{}x\Vert{} = \sqrt{(x,x)}$. By definition of the inner product, it is symmetric $(x,y) = (y,x)$ and linear in both arguments.
We expand the sum of the squares of the diagonals:

$$
\Vert{}x+y\Vert{}^2 + \Vert{}x-y\Vert{}^2 = (x+y, x+y) + (x-y, x-y)
$$

Using bilinearity to distribute the terms (FOIL):

$$
(x+y, x+y) = (x,x) + (x,y) + (y,x) + (y,y) = \Vert{}x\Vert{}^2 + 2(x,y) + \Vert{}y\Vert{}^2
$$


$$
(x-y, x-y) = (x,x) - (x,y) - (y,x) + (y,y) = \Vert{}x\Vert{}^2 - 2(x,y) + \Vert{}y\Vert{}^2
$$

Adding the two expansions together, the cross terms $2(x,y)$ and $-2(x,y)$ perfectly cancel:

$$
\Vert{}x+y\Vert{}^2 + \Vert{}x-y\Vert{}^2 = 2\Vert{}x\Vert{}^2 + 2\Vert{}y\Vert{}^2
$$

This proves that the norm induced by any inner product satisfies the parallelogram identity.
**Part 2: Parallelogram Identity Implies an Inner Product Space**
Let $X$ be a real Banach space whose norm satisfies the parallelogram identity for all $x,y \in X$:

$$
\Vert{}x+y\Vert{}^2 + \Vert{}x-y\Vert{}^2 = 2\Vert{}x\Vert{}^2 + 2\Vert{}y\Vert{}^2
$$

We define a candidate function $B: X \times X \to \mathbb{R}$ using the polarization identity:

$$
B(x,y) = \frac{1}{4} \left( \Vert{}x+y\Vert{}^2 - \Vert{}x-y\Vert{}^2 \right)
$$

To prove $X$ is a Hilbert space, we must prove $B(x,y)$ is an inner product (symmetric, positive-definite, and bilinear) and that it induces the original norm.
**1. Symmetry and Induced Norm** Because $\Vert{}-v\Vert{} = \Vert{}v\Vert{}$ in any normed space, we have:

$$
B(y,x) = \frac{1}{4} \left( \Vert{}y+x\Vert{}^2 - \Vert{}y-x\Vert{}^2 \right) = \frac{1}{4} \left( \Vert{}x+y\Vert{}^2 - \Vert{}-(x-y)\Vert{}^2 \right) = B(x,y)
$$

For positive-definiteness and the induced norm, set $x=y$:

$$
B(x,x) = \frac{1}{4} \left( \Vert{}2x\Vert{}^2 - \Vert{}0\Vert{}^2 \right) = \frac{1}{4}(4\Vert{}x\Vert{}^2) = \Vert{}x\Vert{}^2
$$

Thus $B(x,x) \ge 0$, and $B(x,x)=0 \iff \Vert{}x\Vert{}=0 \iff x=0$. The function induces the given norm perfectly.
**2. The Intermediate Lemma** We evaluate the sum $B(x+z, y) + B(x-z, y)$:

$$
B(x+z,y) + B(x-z,y) = \frac{1}{4} \left( \Vert{}x+z+y\Vert{}^2 - \Vert{}x+z-y\Vert{}^2 + \Vert{}x-z+y\Vert{}^2 - \Vert{}x-z-y\Vert{}^2 \right)
$$

We rearrange the terms to group them for the parallelogram identity. First, the positive terms:

$$
\Vert{}(x+y)+z\Vert{}^2 + \Vert{}(x+y)-z\Vert{}^2 = 2\Vert{}x+y\Vert{}^2 + 2\Vert{}z\Vert{}^2
$$

Next, the negative terms:

$$
\Vert{}(x-y)+z\Vert{}^2 + \Vert{}(x-y)-z\Vert{}^2 = 2\Vert{}x-y\Vert{}^2 + 2\Vert{}z\Vert{}^2
$$

Substituting these back into the evaluation yields:

$$
B(x+z,y) + B(x-z,y) = \frac{1}{4} \left[ \left(2\Vert{}x+y\Vert{}^2 + 2\Vert{}z\Vert{}^2\right) - \left(2\Vert{}x-y\Vert{}^2 + 2\Vert{}z\Vert{}^2\right) \right]
$$


$$
= \frac{1}{4} \left( 2\Vert{}x+y\Vert{}^2 - 2\Vert{}x-y\Vert{}^2 \right) = \frac{2}{4} \left( \Vert{}x+y\Vert{}^2 - \Vert{}x-y\Vert{}^2 \right) = 2B(x,y)
$$

**3. Additivity** First, note that $B(0,y) = \frac{1}{4}(\Vert{}y\Vert{}^2 - \Vert{}-y\Vert{}^2) = 0$. In our intermediate lemma $B(x+z,y) + B(x-z,y) = 2B(x,y)$, set $z=x$:

$$
B(2x, y) + B(0, y) = 2B(x,y) \implies B(2x, y) = 2B(x,y)
$$

Now, let $u$ and $v$ be arbitrary vectors in $X$. Define $x = \frac{u+v}{2}$ and $z = \frac{u-v}{2}$. Notice that $x+z = u$ and $x-z = v$. Substituting these into the intermediate lemma gives:

$$
B(u, y) + B(v, y) = 2B\left(\frac{u+v}{2}, y\right)
$$

Applying the property $2B(w,y) = B(2w,y)$ with $w = \frac{u+v}{2}$, the right side becomes $B(u+v, y)$. Therefore:

$$
B(u+v, y) = B(u, y) + B(v, y)
$$

This establishes additivity.
**4. Homogeneity for Integers ($\mathbb{Z}$)** For $n=0$, $B(0x,y) = 0 = 0B(x,y)$. For $n>0$, we use induction. Assuming $B(nx,y) = nB(x,y)$, additivity gives:$B((n+1)x, y) = B(nx+x, y) = B(nx,y) + B(x,y) = nB(x,y) + B(x,y) = (n+1)B(x,y)$. For negative integers, note $0 = B(0,y) = B(x + (-x), y) = B(x,y) + B(-x,y)$, which implies $B(-x,y) = -B(x,y)$. Thus, for $n < 0$, let $m = -n > 0$. Then $B(nx, y) = B(-mx, y) = -B(mx, y) = -mB(x,y) = nB(x,y)$.
**5. Homogeneity for Rationals ($\mathbb{Q}$)** Let $q \in \mathbb{Q}$. We can write $q = \frac{m}{n}$ where $m \in \mathbb{Z}$ and $n \in \mathbb{N}$ ($n \neq 0$). We want to prove $B\left(\frac{m}{n}x, y\right) = \frac{m}{n}B(x,y)$. We isolate the denominator by defining a temporary vector $w = \frac{1}{n}x$. Because we already established integer homogeneity, we can pull the integer $n$ out of the inner product:

$$
B(x, y) = B\left(n \left(\frac{1}{n}x\right), y\right) = n B\left(\frac{1}{n}x, y\right)
$$

Dividing both sides of this scalar equation by $n$ provides the rule for unit fractions:

$$
B\left(\frac{1}{n}x, y\right) = \frac{1}{n}B(x, y)
$$

Now, we construct the full rational $q = \frac{m}{n}$ by applying integer homogeneity to the numerator $m$:

$$
B(qx, y) = B\left(m \left(\frac{1}{n}x\right), y\right) = m B\left(\frac{1}{n}x, y\right)
$$

Substituting the unit fraction rule we just derived:

$$
m B\left(\frac{1}{n}x, y\right) = m \left( \frac{1}{n}B(x, y) \right) = \frac{m}{n}B(x, y) = qB(x,y)
$$

This rigorously establishes that scalars can be factored out as long as they are rational numbers.
**6. Homogeneity for Reals ($\mathbb{R}$) via Continuity** Let $\alpha \in \mathbb{R}$ be an arbitrary real, irrational scalar (like $\pi$ or $\sqrt{2}$). We must prove $B(\alpha x, y) = \alpha B(x,y)$.
Because the rational numbers $\mathbb{Q}$ are topologically dense in the real numbers $\mathbb{R}$, there exists a sequence of rational numbers $\{q_k\}_{k=1}^\infty$ such that $\lim_{k\to\infty} q_k = \alpha$. In a Banach space, scalar multiplication is a continuous operation. Therefore, as $q_k \to \alpha$, the sequence of vectors $q_k x$ converges to the vector $\alpha x$ in the norm of $X$:

$$
\lim_{k\to\infty} \Vert{}q_k x - \alpha x\Vert{} = \lim_{k\to\infty} \vert{}q_k - \alpha\vert{} \Vert{}x\Vert{} = 0 \cdot \Vert{}x\Vert{} = 0
$$

Recall that the norm itself is a continuous function. By the reverse triangle inequality, $\big\vert{}\Vert{}u\Vert{} - \Vert{}v\Vert{}\big\vert{} \le \Vert{}u-v\Vert{}$, so if $u \to v$, then $\Vert{}u\Vert{} \to \Vert{}v\Vert{}$. Because squaring is also continuous on $\mathbb{R}$, the function $B(\cdot, y) = \frac{1}{4}(\Vert{}\cdot+y\Vert{}^2 - \Vert{}\cdot-y\Vert{}^2)$ is a composition of continuous functions, and is therefore strictly continuous.
Because $B$ is continuous, we can pass the limit directly inside the function argument:

$$
B(\alpha x, y) = B\left( \lim_{k\to\infty} q_k x, y \right) = \lim_{k\to\infty} B(q_k x, y)
$$

Because each $q_k$ is strictly rational, we invoke the rational homogeneity proven in Step 5 to factor it out:


$$
\lim_{k\to\infty} B(q_k x, y) = \lim_{k\to\infty} \left[ q_k B(x, y) \right]
$$

Finally, because standard multiplication in $\mathbb{R}$ is continuous, we evaluate the scalar limit:

$$
\lim_{k\to\infty} \left[ q_k B(x, y) \right] = \left( \lim_{k\to\infty} q_k \right) B(x, y) = \alpha B(x, y)
$$

We have proven that $B(x,y)$ is symmetric, positive-definite, additive, and homogeneous over all reals. Thus, $B(x,y)$ is a valid inner product on $X$ that induces the given norm, concluding the proof that $X$ is a real Hilbert space.
_____________________
# Question 4
Let $(e_{n})_{n\ge1}$ be an orthonormal sequence in a Hilbert space $H$. Prove that 
$$
e_n \rightharpoonup 0
$$
 equivalently, prove that $\lim_{n\rightarrow\infty}(x,e_{n})=0$ for every $x\in H$.
> **Hint:** Apply Bessel's inequality to $x$. What can be said about the terms of a convergent series of nonnegative numbers?
## Solution
Let $x \in H$ be an arbitrary, fixed vector in the Hilbert space $H$. We are given that $(e_n)_{n=1}^\infty$ is an orthonormal sequence in $H$, meaning $\Vert{}e_n\Vert{} = 1$ for all $n$, and $(e_n, e_m) = 0$ for all $n \neq m$.
By Bessel's inequality, for any vector $x \in H$ and any orthonormal sequence $(e_n)_{n \ge 1}$, the sum of the squared absolute values of the inner products of $x$ with the sequence vectors is bounded by the square of the norm of $x$:

$$
\sum_{n=1}^\infty \vert{}(x, e_n)\vert{}^2 \le \Vert{}x\Vert{}^2
$$

Because $x$ is a well-defined vector in the Hilbert space $H$, its norm $\Vert{}x\Vert{}$ is a finite, non-negative real number. Consequently, $\Vert{}x\Vert{}^2$ is also a finite real number.
The sum on the left-hand side is an infinite series where every term $a_n = \vert{}(x, e_n)\vert{}^2$ is a non-negative real number. Since the sequence of partial sums is monotonically increasing and bounded above by the finite number $\Vert{}x\Vert{}^2$, the infinite series converges to a finite limit:

$$
\sum_{n=1}^\infty \vert{}(x, e_n)\vert{}^2 < \infty
$$

A fundamental theorem of real analysis (the $n$-th term test for convergence) dictates that if an infinite series $\sum_{n=1}^\infty a_n$ converges, then the limit of the individual terms $a_n$ as $n \to \infty$ must be zero. Applying this necessary condition to our convergent series yields:

$$
\lim_{n\to\infty} \vert{}(x, e_n)\vert{}^2 = 0
$$

Because the square root function $f(t) = \sqrt{t}$ is continuous at $t=0$, we can pass the limit inside the function to find the limit of the absolute values:


$$
\lim_{n\to\infty} \vert{}(x, e_n)\vert{} = \sqrt{0} = 0
$$

The absolute value (or modulus) of a sequence of numbers converges to zero if and only if the sequence of numbers itself converges to zero. Therefore:

$$
\lim_{n\to\infty} (x, e_n) = 0
$$

Since $x$ was chosen as an arbitrary vector in $H$, we have shown that $\lim_{n\to\infty} (x, e_n) = 0$ holds for _every_ $x \in H$. By definition, this means the sequence $(e_n)_{n\ge 1}$ converges weakly to $0$ in $H$, completing the proof.
_____________
# Question 5
Let $\varphi:\mathbb{R}^{N}\rightarrow\mathbb{R}^{N}$ be a smooth bijection such that $\text{det } D\varphi(x)=1$ for every $x\in\mathbb{R}^{N}$. On $L^{2}(\mathbb{R}^{N})$ define $(Lf)(x)=f(\varphi(x))$. Prove that $L$ is a bounded linear operator and that $\vert{}\vert{}L\vert{}\vert{}=1$, and $L^{*}=L^{-1}$.
> **Hint:** Use the change of variables $y=\varphi(x)$ to compute $\vert{}\vert{}Lf\vert{}\vert{}_{L^{2}}$ and $(Lf,g)_{L^{2}}$. Identify the inverse as composition with $\varphi^{-1}$.
## Solution
**Part 1: Linearity of $L$**
Let $f, g \in L^2(\mathbb{R}^N)$ and let $a, b \in \mathbb{C}$ (or $\mathbb{R}$, depending on the underlying field of the space). By the definition of $L$, we evaluate its action on the linear combination $af + bg$:

$$
(L(af + bg))(x) = (af + bg)(\varphi(x)) = a f(\varphi(x)) + b g(\varphi(x)) = a(Lf)(x) + b(Lg)(x)
$$

This holds for almost every $x \in \mathbb{R}^N$, proving that $L$ is a linear operator.
**Part 2: Boundedness and Operator Norm $\Vert{}L\Vert{} = 1$**
We compute the $L^2$ norm of $Lf$. By definition:

$$
\Vert{}Lf\Vert{}_{L^2}^2 = \int_{\mathbb{R}^N} \vert{}(Lf)(x)\vert{}^2 dx = \int_{\mathbb{R}^N} \vert{}f(\varphi(x))\vert{}^2 dx
$$

Since $\varphi: \mathbb{R}^N \to \mathbb{R}^N$ is a smooth bijection with $\det D\varphi(x) = 1 \neq 0$ for all $x$, the Inverse Function Theorem guarantees that $\varphi^{-1}$ is also smooth. Thus, $\varphi$ is a global diffeomorphism. We apply the multivariable change of variables theorem with the substitution $y = \varphi(x)$.
The volume element transforms as $dy = \vert{}\det D\varphi(x)\vert{} dx$. Since we are given $\det D\varphi(x) = 1$, this simplifies to $dy = 1 dx = dx$. Substituting this into the integral yields:

$$
\int_{\mathbb{R}^N} \vert{}f(\varphi(x))\vert{}^2 dx = \int_{\mathbb{R}^N} \vert{}f(y)\vert{}^2 dy = \Vert{}f\Vert{}_{L^2}^2
$$

Taking the square root gives $\Vert{}Lf\Vert{}_{L^2} = \Vert{}f\Vert{}_{L^2}$ for every $f \in L^2(\mathbb{R}^N)$.
Because $\Vert{}Lf\Vert{}_{L^2} \le 1 \cdot \Vert{}f\Vert{}_{L^2}$, the operator $L$ is bounded. The operator norm is defined as:

$$
\Vert{}L\Vert{} = \sup_{f \neq 0} \frac{\Vert{}Lf\Vert{}_{L^2}}{\Vert{}f\Vert{}_{L^2}}
$$

Since the ratio is exactly $1$ for all non-zero $f$, we conclude that $\Vert{}L\Vert{} = 1$. (Such an operator is called an isometry).
**Part 3: The Inverse Operator $L^{-1}$**
Since $\varphi$ is a bijection, its inverse function $\varphi^{-1}: \mathbb{R}^N \to \mathbb{R}^N$ exists. We define an operator $K$ on $L^2(\mathbb{R}^N)$ by composition with $\varphi^{-1}$:

$$
(Kf)(x) = f(\varphi^{-1}(x))
$$

We check that $K$ is the two-sided inverse of $L$ by composing them. For any $f \in L^2(\mathbb{R}^N)$ and $x \in \mathbb{R}^N$:

$$
(LKf)(x) = (Kf)(\varphi(x)) = f(\varphi^{-1}(\varphi(x))) = f(x)
$$


$$
(KLf)(x) = (Lf)(\varphi^{-1}(x)) = f(\varphi(\varphi^{-1}(x))) = f(x)
$$

Thus, $LK = KL = I$ (the identity operator), which rigorously establishes that $L$ is invertible and $L^{-1} = K$. That is, $(L^{-1}g)(x) = g(\varphi^{-1}(x))$.
**Part 4: The Adjoint Operator $L^*$**
The adjoint $L^*$ of a bounded linear operator $L$ on a Hilbert space is uniquely defined by the relation $(Lf, g)_{L^2} = (f, L^*g)_{L^2}$ for all $f, g \in L^2(\mathbb{R}^N)$. We write out the inner product on the left side:

$$
(Lf, g)_{L^2} = \int_{\mathbb{R}^N} (Lf)(x) \overline{g(x)} dx = \int_{\mathbb{R}^N} f(\varphi(x)) \overline{g(x)} dx
$$

We apply the exact same change of variables as in Part 2: $y = \varphi(x)$, which implies $x = \varphi^{-1}(y)$. The differential remains $dy = dx$ because $\vert{}\det D\varphi(x)\vert{} = 1$.
Substituting these into the integral gives:

$$
\int_{\mathbb{R}^N} f(\varphi(x)) \overline{g(x)} dx = \int_{\mathbb{R}^N} f(y) \overline{g(\varphi^{-1}(y))} dy
$$

By the definition of our inverse operator from Part 3, we have $g(\varphi^{-1}(y)) = (L^{-1}g)(y)$. Therefore, the integral becomes:

$$
\int_{\mathbb{R}^N} f(y) \overline{(L^{-1}g)(y)} dy = (f, L^{-1}g)_{L^2}
$$

We have shown that for all $f, g \in L^2(\mathbb{R}^N)$,

$$
(Lf, g)_{L^2} = (f, L^{-1}g)_{L^2}
$$

By the uniqueness of the adjoint in a Hilbert space, it immediately follows that $L^* = L^{-1}$. Since $L^*$ and $L^{-1}$ coincide, $L$ is a unitary operator.
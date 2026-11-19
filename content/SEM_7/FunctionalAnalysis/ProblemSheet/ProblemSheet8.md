# Question 1
Let $(x_k)_{k\in\mathbb{N}}$ be unit vectors in a real Hilbert space $H$, and let $(\alpha_k)_{k\in\mathbb{N}}$ be real scalars.

1. If $\sum_{k=1}^\infty |\alpha_k| < \infty$, prove that $\sum_{k=1}^\infty \alpha_k x_k$ converges in $H$.
2. If $(x_k)$ is orthonormal, i.e. $(x_k, x_\ell)_H = \delta_{k,\ell}$, prove that


$$
\sum_{k=1}^\infty \alpha_k x_k \text{ converges in } H \iff \sum_{k=1}^\infty |\alpha_k|^2 < \infty.
$$


**Hint.** Apply the Cauchy criterion to the partial sums. Use the triangle inequality in (i), and compute the squared norm of a tail using orthonormality in (ii).

## Solution 
**Proof of $(1)$:**

Let $S_n = \sum_{k=1}^n \alpha_k x_k$ be the sequence of partial sums in $H$. Because $H$ is a Hilbert space, it is a complete metric space. Therefore, the series converges in $H$ if and only if its sequence of partial sums $(S_n)$ is a Cauchy sequence.

For any integers $m > n$, we consider the norm of the tail:


$$
\|S_m - S_n\|_H = \left\| \sum_{k=n+1}^m \alpha_k x_k \right\|_H
$$


By the triangle inequality and the property of scalar multiplication in norms, we can bound this:


$$
\left\| \sum_{k=n+1}^m \alpha_k x_k \right\|_H \le \sum_{k=n+1}^m \|\alpha_k x_k\|_H = \sum_{k=n+1}^m |\alpha_k| \|x_k\|_H
$$


We are given that $(x_k)$ are unit vectors, meaning $\|x_k\|_H = 1$ for all $k$. Substituting this gives:


$$
\|S_m - S_n\|_H \le \sum_{k=n+1}^m |\alpha_k|
$$


We are given that the series of absolute values converges, meaning $\sum_{k=1}^\infty |\alpha_k| < \infty$. This implies that its sequence of partial sums forms a Cauchy sequence in $\mathbb{R}$. Therefore, as $m, n \to \infty$, the finite tail $\sum_{k=n+1}^m |\alpha_k| \to 0$.

By our inequality, this forces $\|S_m - S_n\|_H \to 0$ as $m, n \to \infty$. Hence, $(S_n)$ is a Cauchy sequence in $H$. Because $H$ is complete, the series $\sum_{k=1}^\infty \alpha_k x_k$ converges in $H$.

---

**Proof of $(2)$:**

Now assume that the sequence $(x_k)$ is orthonormal, meaning the inner product $(x_k, x_\ell)_H = \delta_{k,\ell}$. 

Again, using the partial sums $S_n = \sum_{k=1}^n \alpha_k x_k$, we compute the squared norm of the tail for $m > n$:


$$
\|S_m - S_n\|_H^2 = \left\| \sum_{k=n+1}^m \alpha_k x_k \right\|_H^2 = \left( \sum_{k=n+1}^m \alpha_k x_k, \sum_{\ell=n+1}^m \alpha_\ell x_\ell \right)_H
$$


Expanding this inner product using bilinearity, we get:


$$
\|S_m - S_n\|_H^2 = \sum_{k=n+1}^m \sum_{\ell=n+1}^m \alpha_k \alpha_\ell (x_k, x_\ell)_H
$$


Applying the orthonormality condition $(x_k, x_\ell)_H = \delta_{k,\ell}$, all cross-terms where $k \neq \ell$ vanish (since $\delta_{k,\ell} = 0$), and only the terms where $k = \ell$ remain (since $\delta_{k,k} = 1$):


$$
\|S_m - S_n\|_H^2 = \sum_{k=n+1}^m \alpha_k^2 = \sum_{k=n+1}^m |\alpha_k|^2
$$


This exact Pythagorean identity gives us a two-way equivalence between the convergence of the vector series and the scalar series:

**Left to right ($\implies$):** 
If $\sum_{k=1}^\infty \alpha_k x_k$ converges in $H$, its sequence of partial sums $(S_n)$ is Cauchy. Thus, $\|S_m - S_n\|_H^2 \to 0$ as $m, n \to \infty$. By our equality, $\sum_{k=n+1}^m |\alpha_k|^2 \to 0$, meaning the partial sums of $\sum_{k=1}^\infty |\alpha_k|^2$ form a Cauchy sequence in $\mathbb{R}$. Since $\mathbb{R}$ is complete, the series converges, giving $\sum_{k=1}^\infty |\alpha_k|^2 < \infty$.

**Right to left ($\Longleftarrow$):** 
Conversely, if $\sum_{k=1}^\infty |\alpha_k|^2 < \infty$, the sequence of its partial sums is Cauchy in $\mathbb{R}$. This means the tail $\sum_{k=n+1}^m |\alpha_k|^2 \to 0$ as $m, n \to \infty$. By our equality, this implies $\|S_m - S_n\|_H^2 \to 0$, meaning $\|S_m - S_n\|_H \to 0$. Thus, $(S_n)$ is a Cauchy sequence in $H$. Because $H$ is complete, the series $\sum_{k=1}^\infty \alpha_k x_k$ converges in $H$.

----
# Question 2
Let $f \in L^2(\mathbb{R})$. Prove that there is a unique even function $g_0 \in L^2(\mathbb{R})$ such that


$$
\|f - g_0\|_{L^2} = \min_{\substack{g \in L^2(\mathbb{R}) \\ g \text{ even}}} \|f - g\|_{L^2} .
$$


Determine $g_0$ explicitly. Evenness is understood almost everywhere, and uniqueness is in $L^2(\mathbb{R})$.

**Hint.** Show that the set $V$ of all even functions is a closed subspace so that the orthogonal projection $g_0 := P_V f$ is well-defined. Prove that $g_0(x) = (f(x) + f(-x))/2$.

## Solution
Let $H$ be a Hilbert space of square-integrable functions over a symmetric interval, such as $L^2([-a, a])$ or $L^2(\mathbb{R})$, with the standard inner product:

$$
(u, v) = \int_{-a}^{a} u(x) \overline{v(x)} \, dx
$$


Let $V = \{g \in H \mid g(x) = g(-x)\}$ be the subset of even functions. We want to prove that $V$ is a closed subspace, and that for any $f \in H$, the unique closest function $g_0 \in V$ is given by:

$$
g_0(x) = \frac{f(x) + f(-x)}{2}
$$


---

**Part 1: Prove $V$ is a closed subspace**

First, we show $V$ is a subspace. Let $u, v \in V$ and let $\alpha, \beta$ be scalars. 

$$
(\alpha u + \beta v)(-x) = \alpha u(-x) + \beta v(-x) = \alpha u(x) + \beta v(x) = (\alpha u + \beta v)(x)
$$

Since the linear combination is also even, $V$ is a valid subspace.

Second, we show $V$ is closed. Let $(g_n)$ be a sequence in $V$ such that $\lim_{n \rightarrow \infty} g_n = g$ in $H$. We must show that $g \in V$ (meaning $g(x) = g(-x)$).
By the triangle inequality applied to the norm:

$$
\|g(x) - g(-x)\| \le \|g(x) - g_n(x)\| + \|g_n(x) - g_n(-x)\| + \|g_n(-x) - g(-x)\|
$$

Because $g_n \in V$ for all $n$, we know $g_n(x) = g_n(-x)$, so the middle term is exactly $0$:

$$
\|g_n(x) - g_n(-x)\| = 0
$$

As $n \rightarrow \infty$, since $g_n \rightarrow g$, the first and third terms converge to $0$. Taking the limit gives:

$$
\|g(x) - g(-x)\| \le 0 + 0 + 0 = 0
$$

Since the norm must be non-negative, $\|g(x) - g(-x)\| = 0$. Therefore, $g(x) = g(-x)$ almost everywhere, which means $g \in V$. This proves $V$ is a closed subspace.

---

**Part 2: Apply the Orthogonal Projection Theorem**

Because $V$ is a closed subspace of a Hilbert space $H$, the Orthogonal Projection Theorem guarantees that for any $f \in H$, there exists a unique $g_0 \in V$ that minimizes the distance $\|f - g\|$. 

Step 3 of the theorem states that $g_0$ is this unique orthogonal projection if and only if:
1. $g_0 \in V$
2. $f - g_0 \in V^\perp$

---

**Part 3: Verify the unique solution**

We propose that the unique closest point is:

$$
g_0(x) = \frac{f(x) + f(-x)}{2}
$$


Condition 1: Show $g_0 \in V$
We evaluate $g_0$ at $-x$ to check if it is even:

$$
g_0(-x) = \frac{f(-x) + f(-(-x))}{2} = \frac{f(-x) + f(x)}{2} = g_0(x)
$$

Since $g_0(-x) = g_0(x)$, the function $g_0$ is even. Thus, $g_0 \in V$.

Condition 2: Show $f - g_0 \in V^\perp$
Let $h(x) = f(x) - g_0(x)$ be the error term. 

$$
h(x) = f(x) - \frac{f(x) + f(-x)}{2} = \frac{2f(x) - f(x) - f(-x)}{2} = \frac{f(x) - f(-x)}{2}
$$

We evaluate $h$ at $-x$ to determine its parity:

$$
h(-x) = \frac{f(-x) - f(-(-x))}{2} = \frac{f(-x) - f(x)}{2} = - \left( \frac{f(x) - f(-x)}{2} \right) = -h(x)
$$

Because $h(-x) = -h(x)$, the error term $h$ is strictly an odd function.

To show $h \in V^\perp$, we must prove its inner product with any arbitrary function $v \in V$ is zero. Let $v \in V$ (meaning $v$ is an even function).

$$
(h, v) = \int_{-a}^{a} h(x) \overline{v(x)} \, dx
$$

The product of an odd function $h(x)$ and an even function $\overline{v(x)}$ yields an odd function. The definite integral of any odd function over a symmetric interval $[-a, a]$ evaluates exactly to $0$. 

$$
(h, v) = \int_{-a}^{a} \text{(odd function)} \, dx = 0
$$


Because $(f - g_0, v) = 0$ for every $v \in V$, it follows that $f - g_0 \in V^\perp$.

___

# Question 3
Let $X$ be a Banach space, $H$ a Hilbert space, and $K : X \to H$ a bounded linear operator. Prove that the following are equivalent.

1. $K$ is compact.
2. For every $\varepsilon > 0$, there is a bounded linear operator $K_\varepsilon : X \to H$ with finite-dimensional range such that


$$
\|K_\varepsilon - K\|_{\mathcal{L}(X,H)} < \varepsilon.
$$


**Hint.** To prove (i) $\implies$ (ii), let $B_1$ be the closed unit ball of $X$ and note that $K(B_1)$ is precompact. Cover it by finitely many balls of radius less than $\varepsilon$, and project onto the span of their centres. For the converse, use that a norm limit of compact operators is compact.


## Solution 

> [!note] Finite-Rank Operator
> 
>   
> 
> A linear operator $T : X \to Y$ between vector spaces is called a **finite-rank operator** if its range is finite-dimensional:
> 
>   
> 
> 
$$
\dim(\operatorname{Range}(T)) < \infty
$$

> 
> If $T$ is bounded, it can be written in the canonical form:
> 
>   
> 
> 
$$
Tx = \sum_{i=1}^n \varphi_i(x)\, y_i
$$

> 
> for some $y_1, \dots, y_n \in Y$ and bounded linear functionals $\varphi_1, \dots, \varphi_n \in X^*$. 
> In a Hilbert space $H$, this becomes:
> 
>   
> 
> 
$$
Tx = \sum_{i=1}^n \langle x, u_i \rangle v_i
$$

> 
> Every bounded finite-rank operator is **compact**, and in a Hilbert space, every compact operator is the operator-norm limit of a sequence of finite-rank operators.

>[!note] Finite Dimensional nls
>In any **normed vector space** $X$, **every finite-dimensional subspace is closed**.


>[!note] Theorem: Norm Limit of Compact Operators is Compact
Let $X$ be a normed space and $Y$ be a Banach space. If $(T_n)_{n=1}^\infty$ is a sequence of compact linear operators in $\mathcal{B}(X, Y)$ that converges in the operator norm to $T \in \mathcal{B}(X, Y)$ (that is, $\Vert{}T_n - T\Vert{} \to 0$ as $n \to \infty$), then **$T$ is also a compact operator**.


**Part 1: (i) $\implies$ (ii)**

Assume (i) holds, meaning $K$ is a compact operator. We want to construct a finite-rank operator $K_\varepsilon$ that approximates $K$ within $\varepsilon$.

Let $B_1 = \{x \in X : \|x\|_X \le 1\}$ be the closed unit ball in $X$. By the definition of a compact operator, the image $K(B_1)$ is precompact in $H$ (its closure $\overline{K(B_1)}$ is compact). 
In a metric space, every precompact set is totally bounded. Therefore, for any fixed $\varepsilon > 0$, we can cover $K(B_1)$ with finitely many open balls of radius strictly less than $\varepsilon$. Let the centers of these balls be $y_1, y_2, \dots, y_N \in H$.

Define $M = \operatorname{span}\{y_1, y_2, \dots, y_N\} \subset H$. 
Because $M$ is spanned by a finite number of vectors, it is a finite-dimensional subspace. Every finite-dimensional subspace of a Hilbert space is automatically closed. Since $M$ is a closed subspace of the Hilbert space $H$, the orthogonal projection $P_M : H \to M$ is a well-defined bounded linear operator with $\|P_M\| \le 1$.

Now, define our finite-rank operator $K_\varepsilon : X \to H$ as $K_\varepsilon = P_M \circ K$.
For any $x \in B_1$, $Kx \in K(B_1)$, so $Kx$ must lie in at least one of the covering balls. Thus, there is some center $y_j \in M$ such that $\|Kx - y_j\|_H < \varepsilon$. 
By the properties of orthogonal projection, $P_M(Kx)$ is the closest point in $M$ to $Kx$. Because $y_j$ is also in $M$, we have:

$$
\|Kx - K_\varepsilon x\|_H = \|Kx - P_M(Kx)\|_H = \min_{y \in M} \|Kx - y\|_H \le \|Kx - y_j\|_H < \varepsilon
$$


Since this inequality holds for every $x \in B_1$, taking the supremum over the unit ball yields the operator norm bound:

$$
\|K - K_\varepsilon\|_{\mathcal{L}(X, H)} = \sup_{\|x\|_X \le 1} \|Kx - K_\varepsilon x\|_H \le \max_j (r_j) < \varepsilon
$$

where $r_j < \varepsilon$ are the radii of the finite cover. This proves (ii).

---

**Part 2: (ii) $\implies$ (i)**

Assume (ii) holds. For every $n \in \mathbb{N}$, choose $\varepsilon = 1/n$. Then there exists a sequence of bounded linear operators $K_n : X \to H$, each with finite-dimensional range (finite-rank), such that:

$$
\|K_n - K\|_{\mathcal{L}(X,H)} < \frac{1}{n}
$$

This means $\lim_{n \to \infty} \|K_n - K\|_{\mathcal{L}(X,H)} = 0$.

**Step A: Finite-rank operators are compact.**
Let $(x_m)$ be any bounded sequence in $X$. Because $K_n$ is a bounded operator, the sequence $(K_n x_m)$ is bounded in $H$. Furthermore, $(K_n x_m)$ is contained entirely within the finite-dimensional range of $K_n$. By the Bolzano-Weierstrass theorem, every bounded sequence in a finite-dimensional normed space has a convergent subsequence. Therefore, $K_n$ maps bounded sequences to sequences with convergent subsequences, proving $K_n$ is compact.

**Step B: The norm limit of compact operators is compact.**
We must show $K(B_1)$ is totally bounded. Fix $\varepsilon > 0$. Because $K_n \to K$ in operator norm, we can choose an integer $N$ large enough such that:

$$
\|K_N - K\|_{\mathcal{L}(X,H)} < \frac{\varepsilon}{2}
$$

Since $K_N$ is compact (from Step A), $K_N(B_1)$ is totally bounded. Thus, it can be covered by a finite number of balls of radius $\varepsilon/2$ centered at points $z_1, \dots, z_m \in H$:

$$
K_N(B_1) \subseteq \bigcup_{i=1}^m B\left(z_i, \frac{\varepsilon}{2}\right)
$$

For any $x \in B_1$, there exists some $z_i$ such that $\|K_N x - z_i\|_H < \frac{\varepsilon}{2}$. Using the triangle inequality:

$$
\|K x - z_i\|_H \le \|K x - K_N x\|_H + \|K_N x - z_i\|_H < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$

This shows that $K(B_1)$ is covered by finitely many $\varepsilon$-balls centered at $z_1, \dots, z_m$. Therefore, $K(B_1)$ is totally bounded, proving $K$ is a compact operator. This completes the equivalence 
(ii) $\implies$ (i)

---

# Question 4
Let $(x_n)_{n\in\mathbb{N}}$ be a sequence in a Hilbert space $H$, and let $x \in H$. Prove that


$$
\|x_n - x\| \longrightarrow 0 \iff
\begin{cases}
  \ \ \ \ x_n \rightharpoonup x, \\
  \|x_n\| \longrightarrow \|x\| .
\end{cases}
$$


**Hint.** Expand $\|x_n - x\|^2$ using the inner product, and test weak convergence against $x$. In the complex case, take the real part of the inner product term.

## Solution 
We must show both directions of the "if and only if" statement.

**Forward Direction ($\implies$):**
Assume $\|x_n - x\| \longrightarrow 0$ (strong convergence). We need to show that $x_n \rightharpoonup x$ and $\|x_n\| \longrightarrow \|x\|$.

1. **Norm convergence:** By the reverse triangle inequality, we have:

$$
\big| \|x_n\| - \|x\| \big| \le \|x_n - x\|
$$

Since $\|x_n - x\| \longrightarrow 0$, it immediately follows that $\big| \|x_n\| - \|x\| \big| \longrightarrow 0$, meaning $\|x_n\| \longrightarrow \|x\|$.

2. **Weak convergence:** By the Riesz Representation Theorem, any bounded linear functional $\phi \in H^*$ can be written as $\phi(z) = \langle z, y \rangle$ for some $y \in H$. By the Cauchy–Schwarz inequality:

$$
\big| \langle x_n, y \rangle - \langle x, y \rangle \big| = \big| \langle x_n - x, y \rangle \big| \le \|x_n - x\| \|y\|
$$

Since $\|x_n - x\| \longrightarrow 0$, the right side goes to $0$. Thus, $\langle x_n, y \rangle \longrightarrow \langle x, y \rangle$ for all $y \in H$, which by definition means $x_n \rightharpoonup x$.

**Backward Direction ($\Longleftarrow$):**
Assume $x_n \rightharpoonup x$ (weak convergence) and $\|x_n\| \longrightarrow \|x\|$ (norm convergence). We must show that $\|x_n - x\| \longrightarrow 0$.

Following the hint, we expand the squared norm using the properties of the inner product in a complex Hilbert space:

$$
\|x_n - x\|^2 = \langle x_n - x, x_n - x \rangle = \langle x_n, x_n \rangle - \langle x_n, x \rangle - \langle x, x_n \rangle + \langle x, x \rangle
$$


$$
\|x_n - x\|^2 = \|x_n\|^2 - 2\operatorname{Re}\langle x_n, x \rangle + \|x\|^2
$$


Now we take the limit as $n \longrightarrow \infty$ for each term on the right-hand side:
1. Because $\|x_n\| \longrightarrow \|x\|$, the continuity of the square function gives $\|x_n\|^2 \longrightarrow \|x\|^2$.
2. Because $x_n \rightharpoonup x$, testing the weak convergence against the fixed vector $x \in H$ yields $\langle x_n, x \rangle \longrightarrow \langle x, x \rangle = \|x\|^2$. Consequently, taking the real part gives $2\operatorname{Re}\langle x_n, x \rangle \longrightarrow 2\|x\|^2$.

Substituting these limits into our expansion yields:

$$
\lim_{n \to \infty} \|x_n - x\|^2 = \|x\|^2 - 2\|x\|^2 + \|x\|^2 = 0
$$

Since the squared norm converges to $0$, the norm itself converges to $0$. Therefore, $\|x_n - x\| \longrightarrow 0$, completing the proof.

----

# Question 5
On $H = L^2(\mathbb{R})$, consider the linear operator


$$
(Lf)(x) = f(|x|).
$$


1. Prove that $L$ is bounded and determine its operator norm.
2. Determine $\ker L$ and $\text{Range } L$.

3. Compute the adjoint $L^*$ explicitly.

**Hint.** Split integrals over $\mathbb{R}$ into the positive and negative halves. For the adjoint, rewrite $(Lf, g)_{L^2}$ as $(f, h)_{L^2}$ and identify $h$.

## Solution
On $H = L^2(\mathbb{R})$, consider the linear operator $(Lf)(x) = f(\vert{}x\vert{})$.
#### **(i) Boundedness and Operator Norm**

For any $f \in L^2(\mathbb{R})$, we split the $L^2$-norm integral of $Lf$ over $(-\infty, 0)$ and $(0, \infty)$:

  


$$
\Vert{}Lf\Vert{}_{L^2}^2 = \int_{-\infty}^{\infty} \vert{}f(\vert{}x\vert{})\vert{}^2 \, dx = \int_{-\infty}^{0} \vert{}f(-x)\vert{}^2 \, dx + \int_{0}^{\infty} \vert{}f(x)\vert{}^2 \, dx
$$

Applying the change of variables $u = -x$ ($du = -dx$) to the first integral gives:

$$
\int_{-\infty}^{0} \vert{}f(-x)\vert{}^2 \, dx = \int_{0}^{\infty} \vert{}f(u)\vert{}^2 \, du
$$

Combining the two integrals yields: 


$$
\Vert{}Lf\Vert{}_{L^2}^2 = 2 \int_{0}^{\infty} \vert{}f(x)\vert{}^2 \, dx \le 2 \int_{-\infty}^{\infty} \vert{}f(x)\vert{}^2 \, dx = 2\Vert{}f\Vert{}_{L^2}^2
$$

Taking the square root, we have $\Vert{}Lf\Vert{}_{L^2} \le \sqrt{2}\Vert{}f\Vert{}_{L^2}$ for all $f \in L^2(\mathbb{R})$, which shows that $L$ is bounded with $\Vert{}L\Vert{} \le \sqrt{2}$.
To show that $\Vert{}L\Vert{} = \sqrt{2}$, consider the indicator function $f = \mathbf{1}_{(0, 1)} \in L^2(\mathbb{R})$. Then:

$$
\Vert{}f\Vert{}_{L^2}^2 = \int_{0}^{1} 1^2 \, dx = 1 \quad \text{and} \quad \Vert{}Lf\Vert{}_{L^2}^2 = 2 \int_{0}^{1} 1^2 \, dx = 2
$$


Thus $\Vert{}Lf\Vert{}_{L^2} = \sqrt{2}\Vert{}f\Vert{}_{L^2}$, proving that $\Vert{}L\Vert{} = \sqrt{2}$.
#### **(ii) Kernel and Range**
- **Kernel ($\operatorname{Ker} L$):** A function $f \in L^2(\mathbb{R})$ lies in $\operatorname{Ker} L$ if and only if $(Lf)(x) = f(\vert{}x\vert{}) = 0$ for almost every $x \in \mathbb{R}$. By our norm identity from part (i),
    
    
$$
\Vert{}Lf\Vert{}_{L^2}^2 = 0 \iff 2\int_{0}^{\infty} \vert{}f(x)\vert{}^2 \, dx = 0 \iff f(x) = 0 \text{ for a.e. } x > 0
$$

    
    Since $f$ is unconstrained on $(-\infty, 0)$, we have:
    
    
$$
\operatorname{Ker} L = \left\{ f \in L^2(\mathbb{R}) : f(x) = 0 \text{ for a.e. } x > 0 \right\}
$$

    
- **Range ($\operatorname{Range} L$):** For any $f \in L^2(\mathbb{R})$, the function $g = Lf$ satisfies $g(-x) = f(\vert{}-x\vert{}) = f(\vert{}x\vert{}) = g(x)$ for a.e. $x \in \mathbb{R}$, so every element of $\operatorname{Range} L$ is even almost everywhere. Conversely, if $g \in L^2(\mathbb{R})$ is any even function (i.e., $g(-x) = g(x)$ a.e.), then $(Lg)(x) = g(\vert{}x\vert{}) = g(x)$ a.e., so $g = Lg \in \operatorname{Range} L$. Therefore:
    
    
$$
\operatorname{Range} L = \left\{ g \in L^2(\mathbb{R}) : g(-x) = g(x) \text{ for a.e. } x \in \mathbb{R} \right\}
$$

    
#### **(iii) Explicit Formula for the Adjoint $L^*$**
Let $f, g \in L^2(\mathbb{R})$. Splitting the inner product $\langle Lf, g \rangle_{L^2}$ into negative and positive half-lines gives:

$$
\langle Lf, g \rangle_{L^2} = \int_{-\infty}^{\infty} f(\vert{}x\vert{})\overline{g(x)} \, dx = \int_{-\infty}^{0} f(-x)\overline{g(x)} \, dx + \int_{0}^{\infty} f(x)\overline{g(x)} \, dx
$$

Substituting $u = -x$ in the first integral transforms it to $\int_{0}^{\infty} f(u)\overline{g(-u)} \, du$. Combining both integrals over $(0, \infty)$ yields:

$$
\langle Lf, g \rangle_{L^2} = \int_{0}^{\infty} f(x)\overline{\big(g(x) + g(-x)\big)} \, dx = \int_{-\infty}^{\infty} f(x)\overline{\mathbf{1}_{(0, \infty)}(x)\big(g(x) + g(-x)\big)} \, dx
$$


Since this holds for all $f \in L^2(\mathbb{R})$, uniqueness of the adjoint gives:

  


$$
(L^* g)(x) = \mathbf{1}_{(0, \infty)}(x)\big(g(x) + g(-x)\big) = \begin{cases} g(x) + g(-x), & x > 0 \\ 0, & x \le 0 \end{cases}
$$


___
# Question 6
Let $T > 0$, and let $(f_n)_{n\in\mathbb{N}}$ be a bounded sequence in $L^2([0,T])$. For $f \in L^2([0,T])$, prove that

$$
f_n \rightharpoonup f \quad \text{in } L^2([0,T])
$$

if and only if

$$
\lim_{n\to\infty} \int_0^b f_n(t) \, dt = \int_0^b f(t) \, dt \qquad \text{for every } b \in [0,T].
$$


**Hint.** First test against indicator functions of intervals, then against simple functions. Use their density in $L^2$ and the uniform bound on $\|f_n\|_{L^2}$ to pass to arbitrary test functions.

## Solution 
Let $T > 0$, and let $(f_n)_{n \in \mathbb{N}}$ be a bounded sequence in $L^2([0, T])$, meaning there exists a constant $M > 0$ such that $\|f_n\|_{L^2} \le M$ for all $n \in \mathbb{N}$. For $f \in L^2([0, T])$, prove that


$$
f_n \rightharpoonup f \quad \text{in } L^2([0, T])
$$


if and only if


$$
\lim_{n \to \infty} \int_0^b f_n(t) \, dt = \int_0^b f(t) \, dt \quad \text{for every } b \in [0, T].
$$


---

**Proof**

**($\implies$) Forward Direction**

Assume that $f_n \rightharpoonup f$ in $L^2([0, T])$. By the Riesz Representation Theorem, this means


$$
\lim_{n \to \infty} \langle f_n, g \rangle_{L^2} = \langle f, g \rangle_{L^2} \quad \text{for all } g \in L^2([0, T]).
$$


Fix any $b \in [0, T]$ and consider the indicator function $g = \mathbf{1}_{[0, b]}$. Since $\int_0^T |\mathbf{1}_{[0, b]}(t)|^2 \, dt = b \le T < \infty$, we have $\mathbf{1}_{[0, b]} \in L^2([0, T])$. Testing weak convergence against $g = \mathbf{1}_{[0, b]}$ yields:


$$
\lim_{n \to \infty} \int_0^b f_n(t) \, dt = \lim_{n \to \infty} \langle f_n, \mathbf{1}_{[0, b]} \rangle_{L^2} = \langle f, \mathbf{1}_{[0, b]} \rangle_{L^2} = \int_0^b f(t) \, dt.
$$


---

**($\Longleftarrow$) Backward Direction**

Assume that $(f_n)_{n \in \mathbb{N}}$ satisfies $\|f_n\|_{L^2} \le M$ for all $n \in \mathbb{N}$, and that $\lim_{n \to \infty} \int_0^b f_n(t) \, dt = \int_0^b f(t) \, dt$ for every $b \in [0, T]$. We proceed in three steps to show $\lim_{n \to \infty} \langle f_n, g \rangle_{L^2} = \langle f, g \rangle_{L^2}$ for every $g \in L^2([0, T])$.

1. **Indicator functions of subintervals:**
Let $I \subseteq [0, T]$ be any subinterval with endpoints $0 \le a \le b \le T$. Because singletons have Lebesgue measure zero, we have:


$$
\langle f_n, \mathbf{1}_I \rangle_{L^2} = \int_a^b f_n(t) \, dt = \int_0^b f_n(t) \, dt - \int_0^a f_n(t) \, dt.
$$


Taking the limit as $n \to \infty$ gives:


$$
\lim_{n \to \infty} \langle f_n, \mathbf{1}_I \rangle_{L^2} = \int_0^b f(t) \, dt - \int_0^a f(t) \, dt = \int_a^b f(t) \, dt = \langle f, \mathbf{1}_I \rangle_{L^2}.
$$


2. **Step functions:**
Let $s = \sum_{k=1}^m c_k \mathbf{1}_{I_k}$ be any step function on $[0, T]$, where $c_k \in \mathbb{C}$ (or $\mathbb{R}$) and $I_k \subseteq [0, T]$ are intervals. By conjugate-linearity of the inner product and linearity of finite limits:


$$
\lim_{n \to \infty} \langle f_n, s \rangle_{L^2} = \sum_{k=1}^m \overline{c_k} \lim_{n \to \infty} \langle f_n, \mathbf{1}_{I_k} \rangle_{L^2} = \sum_{k=1}^m \overline{c_k} \langle f, \mathbf{1}_{I_k} \rangle_{L^2} = \langle f, s \rangle_{L^2}.
$$


3. **Arbitrary functions in $L^2([0, T])$:**
Let $g \in L^2([0, T])$ and fix $\varepsilon > 0$. Since step functions are dense in $L^2([0, T])$, there exists a step function $s$ such that $\|g - s\|_{L^2} < \varepsilon$. By the triangle inequality and the Cauchy–Schwarz inequality:


$$
\begin{aligned} |\langle f_n, g \rangle_{L^2} - \langle f, g \rangle_{L^2}| &\le |\langle f_n, g - s \rangle_{L^2}| + |\langle f_n - f, s \rangle_{L^2}| + |\langle f, s - g \rangle_{L^2}| \\ &\le \|f_n\|_{L^2}\|g - s\|_{L^2} + |\langle f_n, s \rangle_{L^2} - \langle f, s \rangle_{L^2}| + \|f\|_{L^2}\|s - g\|_{L^2} \\ &< (M + \|f\|_{L^2})\varepsilon + |\langle f_n, s \rangle_{L^2} - \langle f, s \rangle_{L^2}|. \end{aligned}
$$


By Step 2, there exists $N \in \mathbb{N}$ such that $|\langle f_n, s \rangle_{L^2} - \langle f, s \rangle_{L^2}| < \varepsilon$ for all $n \ge N$. Thus, for all $n \ge N$:


$$
|\langle f_n, g \rangle_{L^2} - \langle f, g \rangle_{L^2}| < (M + \|f\|_{L^2} + 1)\varepsilon.
$$


Since $\varepsilon > 0$ was arbitrary, $\lim_{n \to \infty} \langle f_n, g \rangle_{L^2} = \langle f, g \rangle_{L^2}$ for all $g \in L^2([0, T])$, proving $f_n \rightharpoonup f$ in $L^2([0, T])$. $\blacksquare$

___

# Question 1
 Let $f:\mathbb{R}\rightarrow\mathbb{R}$ be a bounded function with a closed graph. Prove that f is continuous. 
 On the other hand, construct a function $g:\mathbb{R}\rightarrow\mathbb{R}$ which is one-to-one and onto, has a closed graph, but is not continuous. 
 **Hint**. For the first part, take any $x\in\mathbb{R}$ and a sequence $x_{n}\rightarrow x$ Boundedness of f implies that every subsequence of $f(x_{n})$ has a convergent subsequence; use the closed-graph assumption then to show that $f(x-)=f(x)=f(x+)$ For the second part, check if works!

$$
g(x)=\begin{cases}\frac{1}{x},&x\ne0,\\ 0,&x=0\end{cases}
$$

## Solution
**Definitions**: 
> [!note] Closed Graph
> 
> A linear operator $T: D(T) \to Y$ (where $D(T)$ is the domain of $T$) between two topological vector spaces $X$ and $Y$ (typically Banach spaces) has a closed graph if its graph is a closed subset of the product space $X \times Y$.
> 
>   
> 
> The graph of $T$, denoted $G(T)$, is the set of all input-output pairs:
> 
>   
> 
> 
>$$
> G(T) = \{(x, Tx) \in X \times Y \mid x \in D(T)\}
> $$
> 
> Because $X \times Y$ is equipped with the product topology, the condition that $G(T)$ is a closed set is most commonly verified using sequences. An operator $T$ has a closed graph (and is often simply called a closed operator) if and only if for every sequence $(x_n)$ in $D(T)$, the following holds true:
> 
>   
> 
> - If $x_n \to x$ in $X$ and $Tx_n \to y$ in $Y$, then $x \in D(T)$ and $Tx = y$.

> [!note] Bolzano-Weierstrass Theorem
> 
> Every bounded sequence in $\mathbb{R}^n$ has a convergent subsequence.


-----
**Part 1: Proving $f$ is continuous**
To prove that $f$ is continuous at an arbitrary point $x \in \mathbb{R}$, we will use sequential continuity. Let $(x_n)$ be any sequence in $\mathbb{R}$ such that $x_n \to x$. We must show that $f(x_n) \to f(x)$.
Since $f$ is bounded on $\mathbb{R}$, the sequence of real numbers $(f(x_n))$ is bounded. By the **Bolzano-Weierstrass Theorem**, every bounded sequence in $\mathbb{R}$ has a convergent subsequence.
Let $(f(x_{n_k}))$ be _any_ convergent subsequence of $(f(x_n))$, and let its limit be $L$. This means:

$$
\lim_{k \to \infty} x_{n_k} = x \quad \text{and} \quad \lim_{k \to \infty} f(x_{n_k}) = L
$$

Now, consider the points in the graph of $f$, defined as $G(f) = \{(t, f(t)) \mid t \in \mathbb{R}\}$. The sequence of points $(x_{n_k}, f(x_{n_k}))$ lies entirely within $G(f)$.
As $k \to \infty$, the sequence of points converges to $(x, L)$ in $\mathbb{R}^2$. We are given that the graph $G(f)$ is closed. A closed set contains all of its limit points, which means that $(x, L)$ must belong to $G(f)$.
By the definition of the graph of a function, if $(x, L) \in G(f)$, it must be true that:

$$
L = f(x)
$$

We have just shown that _every_ convergent subsequence of the bounded sequence $(f(x_n))$ converges to the exact same limit, $f(x)$. A fundamental property of sequences in $\mathbb{R}$ states that if a sequence is bounded and all of its convergent subsequence converge to the same limit, then the entire sequence converges to that limit.
Therefore, $\lim_{n \to \infty} f(x_n) = f(x)$. Since $(x_n)$ was an arbitrary sequence converging to $x$, $f$ is continuous at $x$. Because $x$ was arbitrary, $f$ is continuous on all of $\mathbb{R}$.
**Part 2: Constructing the discontinuous function $g$**
Consider the function suggested in the hint, $g: \mathbb{R} \to \mathbb{R}$:

$$
g(x)=\begin{cases}\frac{1}{x},&x\ne0,\\ 0,&x=0\end{cases}
$$

This function satisfies all the required counter-conditions:
**1. $g$ is one-to-one and onto (bijective)** For any $y \neq 0$, setting $x = \frac{1}{y}$ gives $x \neq 0$ and $g(x) = \frac{1}{1/y} = y$. Thus, $y$ has exactly one pre-image. For $y = 0$, $x = 0$ is the unique solution since $g(x) = 0$ only at $x = 0$.
**2. $g$ is not continuous** As $x \to 0^+$, $g(x) = \frac{1}{x} \to \infty$. The limit does not exist as a real number (and does not equal $g(0) = 0$), so $g$ is severely discontinuous at $x = 0$.
**3. $g$ has a closed graph** Let $(x_n, g(x_n))$ be a sequence of points in the graph of $g$ that converges to some point $(x, y) \in \mathbb{R}^2$. To prove the graph is closed, we must show that $y = g(x)$.
There are two cases based on the value of $x$:
- **Case A ($x \neq 0$):** Because $g$ is continuous everywhere except at $0$, the fact that $x_n \to x \neq 0$ means that for large $n$, $x_n \neq 0$, and therefore $g(x_n) = \frac{1}{x_n} \to \frac{1}{x} = g(x)$. The limit point is $(x, g(x))$, which is in the graph.
- **Case B ($x = 0$):** Here, $x_n \to 0$ and $g(x_n) \to y$, where $y$ is a finite real number. Suppose, for the sake of contradiction, that $x_n \neq 0$ for infinitely many terms. For all those terms, $g(x_n) = \frac{1}{x_n}$. Because $x_n \to 0$, the absolute value $\vert{}g(x_n)\vert{} \to \infty$. A sequence trending to infinity cannot converge to a finite real number $y$. Therefore, it is impossible for $x_n$ to approach $0$ through non-zero values while $g(x_n)$ converges. The only way this sequence of points can converge in $\mathbb{R}^2$ is if $x_n = 0$ for all sufficiently large $n$. But if $x_n = 0$, then $g(x_n) = 0$. The sequence is eventually constantly $(0,0)$, meaning the limit is $(0,0)$. Since $g(0) = 0$, the limit point is in the graph.
Because every converging sequence of points in the graph converges to a point that is also in the graph, the graph of $g$ is a closed subset of $\mathbb{R}^2$.
____
# Question 2
 Let X be an infinite-dimensional Banach space. Let $K:X\rightarrow X$ be a compact linear operator. Show that if K is one-to-one, then its range cannot be closed. 
 **Hint**. Suppose Range(K) is closed. It is then a Banach space, and $K:X\rightarrow Range(K)$ is a bounded bijection. Apply the Bounded Inverse Theorem. Use this to show that the closed unit ball of X is compact, contradicting the infinite-dimensionality of X.

## Solution
**Definitions**:
> [!note] Compact Linear Operator
> 
> Let $X$ and $Y$ be normed vector spaces. A linear operator $T: X \rightarrow Y$ is a compact linear operator if it satisfies either of the following two equivalent conditions:
> 
>   
> 
> - **Sequential Definition:** For every bounded sequence $(x_n)$ in $X$, the image sequence $(Tx_n)$ in $Y$ contains a convergent subsequence.
>     
>       
>     
> - **Topological Definition:** For every bounded subset $B \subseteq X$, its image $T(B)$ is a relatively compact subset of $Y$ (meaning the closure $\overline{T(B)}$ is a compact set in $Y$).
>     
>       
>     
> 
> **Key Properties:**
> 
>   
> 
> - Every compact linear operator is bounded (and therefore continuous). The converse is not generally true in infinite-dimensional spaces.
>     
>       
>     
> - Any bounded linear operator with a finite-dimensional range (a finite-rank operator) is compact.
>     
>       
>     
> - If $Y$ is a Banach space, the limit of a sequence of compact operators (in the operator norm topology) is also a compact operator.
>     
>       
>     

> [!note] Bounded Inverse Theorem (Inverse Mapping Theorem)
> 
> Let $X$ and $Y$ be Banach spaces (complete normed vector spaces). If $T: X \rightarrow Y$ is a bounded (continuous) linear operator that is bijective (one-to-one and onto), then its inverse operator $T^{-1}: Y \rightarrow X$ is also a bounded (continuous) linear operator.
> 
>   

> [!note] Riesz's Theorem on the Compactness of the Unit Ball,
>$$
> \text{The closed unit ball } B_X \text{ is compact} \iff \dim(X) < \infty
> $$
> **Given:**
> - $X$ is a normed vector space over $\mathbb{R}$ or $\mathbb{C}$.
> - $B_X = \{x \in X \mid \Vert{}x\Vert{} \le 1\}$ is the closed unit ball in $X$.
> - $\dim(X)$ denotes the dimension of the vector space $X$.

-------------
**Proof by Contradiction:**
**Step 1: Assume the range is closed** Let the range of $K$ be denoted by $\mathcal{R}(K) = \{Kx \mid x \in X\}$. Assume, for the sake of contradiction, that $\mathcal{R}(K)$ is a closed subspace of $X$.
**Step 2: Establish the spaces and the bijection** Since $X$ is a Banach space (which is complete) and $\mathcal{R}(K)$ is a closed subspace of $X$, $\mathcal{R}(K)$ itself is a Banach space under the norm inherited from $X$. Now, consider the operator $\tilde{K}: X \rightarrow \mathcal{R}(K)$ defined by $\tilde{K}x = Kx$.
- $\tilde{K}$ is linear (since $K$ is linear).
- $\tilde{K}$ is bounded (since every compact operator is bounded, as established earlier).
- $\tilde{K}$ is surjective (by definition of the codomain $\mathcal{R}(K)$).
- $\tilde{K}$ is injective (since $K$ is given as one-to-one).
Thus, $\tilde{K}$ is a bounded, bijective linear operator between two Banach spaces, $X$ and $\mathcal{R}(K)$.
**Step 3: Apply the Bounded Inverse Theorem** Because $\tilde{K}: X \rightarrow \mathcal{R}(K)$ is a bounded bijection between two Banach spaces, the **Bounded Inverse Theorem** guarantees that its inverse operator $\tilde{K}^{-1}: \mathcal{R}(K) \rightarrow X$ is also a bounded (and therefore continuous) linear operator.
**Step 4: Use the compactness of $K$** Let $B_X = \{x \in X \mid \Vert{}x\Vert{} \le 1\}$ be the closed unit ball in $X$. Because $K$ is a compact operator, the image of the bounded set $B_X$ is relatively compact. This means that the closure of the image, $\overline{K(B_X)}$, is a compact set in $X$.
Since $\mathcal{R}(K)$ is closed and $K(B_X) \subseteq \mathcal{R}(K)$, the closure $\overline{K(B_X)}$ is entirely contained within $\mathcal{R}(K)$.
**Step 5: Show the closed unit ball $B_X$ is compact** Continuous functions map compact sets to compact sets. Since $\tilde{K}^{-1}$ is continuous and $\overline{K(B_X)}$ is a compact set in the domain of $\tilde{K}^{-1}$, the image of this set under the inverse operator:

$$
C = \tilde{K}^{-1}\left( \overline{K(B_X)} \right)
$$

is a compact set in $X$.
Now, let's look at the unit ball $B_X$. For any $x \in B_X$, we have $Kx \in K(B_X) \subseteq \overline{K(B_X)}$. Applying the inverse mapping, we get:

$$
x = \tilde{K}^{-1}(Kx) \in \tilde{K}^{-1}\left(\overline{K(B_X)}\right) = C
$$

This proves that $B_X \subseteq C$.
In a metric space, any closed subset of a compact set is itself compact. $B_X$ is closed by definition, and it is a subset of the compact set $C$. Therefore, $B_X$ must be a compact set.
**Step 6: Reach a contradiction using Riesz's Theorem** We have established that the closed unit ball $B_X$ is compact. However, **Riesz's Theorem on the Compactness of the Unit Ball** states that the closed unit ball of a normed space is compact _if and only if_ the space is finite-dimensional.
This implies that $X$ must be finite-dimensional, which directly contradicts the initial given premise that $X$ is an infinite-dimensional Banach space.
**Conclusion:** Because our assumption led to a logical contradiction, the assumption must be false. Therefore, the range of $K$, $\mathcal{R}(K)$, cannot be closed.

--------------
# Question 3
Let X, Y, Z be Banach spaces and consider two linear operators $L_{1}:X\rightarrow Y,L_{2}:Y\rightarrow Z$ Assume that one of the two operators is continuous while the other is compact. Prove that the composition $L_{2}\circ L_{1}:X\rightarrow Z$ is a compact linear operator. 
**Hint**. Treat the two cases separately. If $L_{1}$ is bounded and $L_{2}$ is compact, consider the image of a bounded subset of X. If $L_{1}$ is compact and $L_{2}$ is bounded, use the fact that a continuous map takes compact sets to compact sets.
## Solution
**Definition**:
 - [[#^512394|Compact Linear Operator]]
**Proof**
To prove that $L_2 \circ L_1: X \to Z$ is a compact operator, we must show that for any bounded subset $B \subset X$, its image under the composition, $(L_2 \circ L_1)(B)$, is **relatively compact** in $Z$ (meaning its closure in $Z$ is compact).
We handle the proof in two separate cases based on which operator is compact.
### **Case 1: $L_1$ is bounded (continuous) and $L_2$ is compact**
1. **Take a bounded set:** Let $B \subset X$ be an arbitrary bounded subset. This means there exists some radius $M > 0$ such that $\Vert{}x\Vert{} \le M$ for all $x \in B$.
2. **Apply the bounded operator $L_1$:** Because $L_1: X \to Y$ is a bounded linear operator, it maps bounded sets to bounded sets. Therefore, the image set $L_1(B)$ is a **bounded subset** of the intermediate Banach space $Y$.
3. **Apply the compact operator $L_2$:** By definition, a compact operator maps any bounded subset of its domain to a relatively compact set. Since $L_1(B)$ is bounded in $Y$ and $L_2: Y \to Z$ is compact, the image set:
    
	$$
	(L_2 \circ L_1)(B) = L_2(L_1(B))
	$$
    is **relatively compact** in $Z$.
4. **Conclusion for Case 1:** Since every bounded set $B \subset X$ is mapped to a relatively compact set in $Z$, the composition $L_2 \circ L_1$ is a compact linear operator.
### **Case 2: $L_1$ is compact and $L_2$ is bounded (continuous)**
1. **Take a bounded set:** Let $B \subset X$ be an arbitrary bounded subset.
2. **Apply the compact operator $L_1$:** Because $L_1: X \to Y$ is a compact operator, the image of $B$ has a compact closure. That is, the set:
    
	$$
	S = \overline{L_1(B)}
	$$

    is a **compact set** in $Y$.
3. **Apply the continuous operator $L_2$:** We know from topology and functional analysis that continuous functions map compact sets to compact sets. Because $L_2: Y \to Z$ is bounded, it is continuous. Therefore, applying $L_2$ to our compact set $S$ yields a compact set in $Z$:
    
	$$
	L_2(S) = L_2\left(\overline{L_1(B)}\right) \text{ is compact in } Z
	$$

4. **Relate back to the composition:** Notice that the image of our original bounded set under the composition is:
    
	$$
	(L_2 \circ L_1)(B) = L_2(L_1(B)) \subseteq L_2\left(\overline{L_1(B)}\right)
	$$

    Since $(L_2 \circ L_1)(B)$ is a subset of the compact set $L_2\left(\overline{L_1(B)}\right)$, its closure is also compact (as a closed subset of a compact metric space is compact). Thus, $(L_2 \circ L_1)(B)$ is **relatively compact** in $Z$.
5. **Conclusion for Case 2:** The composition $L_2 \circ L_1$ maps bounded sets to relatively compact sets, making it a compact linear operator.
In both possible scenarios, the composition $L_2 \circ L_1: X \to Z$ maps bounded subsets of $X$ to relatively compact subsets of $Z$. Therefore, $L_2 \circ L_1$ is always a **compact linear operator**. Q.E.D.
-------------
# Question 4
Let X be a Banach space and let $K:X\rightarrow X$ be a compact linear operator such that $K=K^{2}$, i.e., $K(x)=K(K(x))$ for all $x\in X$ Prove that Range(K) is finite-dimensional. 
**Hint**. Show first that $Range(K)=Ker(I-K)$ is closed. Observe that K restricts to the identity operator on Range(K). Since this restriction is compact, what does this imply about the closed unit ball of Range(K)?
## Solution
**Proof:**
**Step 1: Show that $\text{Range}(K) = \text{Ker}(I - K)$** First, let $y \in \text{Range}(K)$. By definition, there exists some $x \in X$ such that $y = Kx$. Applying the operator $(I - K)$ to $y$ gives:

$$
(I - K)y = y - Ky = Kx - K(Kx) = Kx - K^2x
$$

Since we are given that $K = K^2$, this becomes:

$$
Kx - Kx = 0
$$

Thus, $y \in \text{Ker}(I - K)$, proving that $\text{Range}(K) \subseteq \text{Ker}(I - K)$.
Conversely, let $y \in \text{Ker}(I - K)$. By definition of the kernel, $(I - K)y = 0$, which implies $y - Ky = 0$, or:

$$
y = Ky
$$

This explicitly shows that $y$ is the image of an element (itself) under $K$, meaning $y \in \text{Range}(K)$. Therefore, $\text{Ker}(I - K) \subseteq \text{Range}(K)$.
Combining both inclusions establishes the equality:

$$
\text{Range}(K) = \text{Ker}(I - K)
$$

**Step 2: Show that $\text{Range}(K)$ is a closed subspace** Every compact operator is bounded (continuous), so $K$ is bounded. The identity operator $I$ is also bounded. The space of bounded linear operators is a vector space, so the difference $I - K$ is a bounded linear operator. The kernel of any bounded linear operator is the pre-image of the closed set $\{0\}$, which means the kernel is always a closed subspace. Since $\text{Range}(K) = \text{Ker}(I - K)$, $\text{Range}(K)$ is a closed subspace of the Banach space $X$.
**Step 3: Evaluate the restriction of $K$ to its range** Let $K\vert{}_{\text{Range}(K)}$ denote the restriction of $K$ to the subspace $\text{Range}(K)$. From Step 1, we know that for any $y \in \text{Range}(K)$, $Ky = y$. This means that on the subspace $\text{Range}(K)$, the operator $K$ behaves exactly as the identity operator:

$$
K\vert{}_{\text{Range}(K)} = I_{\text{Range}(K)}
$$

**Step 4: Apply compactness to deduce finite dimension** Let $B_{\text{Range}(K)}$ be the closed unit ball in the subspace $\text{Range}(K)$. Because $K$ is a compact operator on $X$, its restriction to any closed subspace remains a compact operator. Therefore, $I_{\text{Range}(K)}$ is a compact operator.
By definition, a compact operator maps bounded sets to relatively compact sets. Since $B_{\text{Range}(K)}$ is bounded, its image under $I_{\text{Range}(K)}$ must be relatively compact. However, the image of $B_{\text{Range}(K)}$ under the identity operator is simply $B_{\text{Range}(K)}$ itself.
Since $B_{\text{Range}(K)}$ is closed and relatively compact, it is a **compact set**. According to **Riesz's Theorem**, the closed unit ball of a normed vector space is compact if and only if the space is finite-dimensional. Because the unit ball of $\text{Range}(K)$ is compact, $\text{Range}(K)$ must be finite-dimensional.
__________
# Question 5
Let X, Y be infinite-dimensional Banach spaces. If $K:X\rightarrow Y$ is a compact linear operator, prove that $K(X)\ne Y$, i.e., K cannot be surjective. As an example, consider the map $K:l_{1}\rightarrow l_{1}$ defined as follows. If $x=(x_{1},x_{2},x_{3},...)\in l_{1}$, Find a point $y\in l_{1}\backslash K(l_{1})$.

$$
Kx:=(\frac{x_{1}}{1},\frac{x_{2}}{2},\frac{x_{3}}{3},...,\frac{x_{n}}{n},...)
$$

**Hint.** For the first part, assume K is surjective and use the Open Mapping Theorem: the image of $B_{1}$ in X must contain a ball centred at 0 in Y. Combine this with the compactness of K and the non-compactness of the unit ball in an infinite-dimensional normed space. For the example, choose $y_{n}$ so that $\Sigma\vert{}y_{n}\vert{}<\infty$ but $\sum n\vert{}y_{n}\vert{}=\infty$ (try a power of n).
## Solution
**Definitions**:-
> [!note] Open Mapping Theorem
> Let $X$ and $Y$ be Banach spaces (complete normed vector spaces). If $T: X \rightarrow Y$ is a surjective, continuous linear operator, then $T$ is an **open mapping**.
> **Given:**
> - $X$ and $Y$ are Banach spaces (complete normed vector spaces).
> - $T: X \rightarrow Y$ is a continuous linear operator.
> - $T$ is surjective (onto).
> **Formally:**
> For every open set $U \subseteq X$, the image $T(U)$ is an open set in $Y$.
### **Part 1: Proof that $K$ cannot be surjective**
**Step 1: Assume for contradiction that $K$ is surjective** Let $X$ and $Y$ be infinite-dimensional Banach spaces, and let $K: X \to Y$ be a compact linear operator. Assume, for the sake of contradiction, that $K$ is surjective, meaning $K(X) = Y$.
Because $K$ is a compact operator, it is also a bounded (continuous) linear operator. Since $K$ is a surjective, continuous linear operator between two Banach spaces, the **Open Mapping Theorem** applies.
**Step 2: Apply the Open Mapping Theorem** Let $B_X = \{x \in X \mid \Vert{}x\Vert{}_X < 1\}$ be the open unit ball in $X$. By the Open Mapping Theorem, $K$ maps open sets in $X$ to open sets in $Y$. Therefore, $K(B_X)$ is an open set in $Y$. Since $0 \in B_X$ and $K$ is linear ($K(0) = 0$), $K(B_X)$ is an open neighborhood of the origin in $Y$. This means there exists some radius $r > 0$ such that the open ball $B_Y(0, r) = \{y \in Y \mid \Vert{}y\Vert{}_Y < r\}$ is entirely contained within $K(B_X)$:

$$
B_Y(0, r) \subseteq K(B_X)
$$

**Step 3: Use the compactness of $K$** Because $K$ is a compact operator, it maps bounded sets to relatively compact sets. Since $B_X$ is bounded, its image $K(B_X)$ is relatively compact, meaning its closure $\overline{K(B_X)}$ is a compact set in $Y$.
Since $B_Y(0, r) \subseteq K(B_X)$, taking the closure on both sides gives:

$$
\overline{B_Y(0, r)} \subseteq \overline{K(B_X)}
$$

Here, $\overline{B_Y(0, r)} = \{y \in Y \mid \Vert{}y\Vert{}_Y \le r\}$ is the closed ball of radius $r$ in $Y$.
**Step 4: Reach a contradiction using Riesz's Lemma** A closed subset of a compact set is compact. Since $\overline{B_Y(0, r)}$ is closed and is contained within the compact set $\overline{K(B_X)}$, the closed ball $\overline{B_Y(0, r)}$ must itself be compact.
However, **Riesz's Lemma** states that the closed ball of a normed space is compact if and only if the space is finite-dimensional. We are given that $Y$ is an infinite-dimensional Banach space, so its closed balls cannot be compact.
This contradiction means our initial assumption must be false. Therefore, $K$ cannot be surjective, meaning $K(X) \neq Y$.
### **Part 2: Finding a point $y \in l_1 \setminus K(l_1)$**
We are given the operator $K: l_1 \to l_1$ defined by:

$$
Kx = \left(\frac{x_1}{1}, \frac{x_2}{2}, \frac{x_3}{3}, \dots, \frac{x_n}{n}, \dots\right)
$$

where $l_1$ is the space of sequences $x = (x_n)$ such that $\sum_{n=1}^\infty \vert{}x_n\vert{} < \infty$.
**Step 1: Determine the condition for $y \in K(l_1)$** Suppose there exists some $y = (y_n) \in K(l_1)$. This means there must be some sequence $x = (x_n) \in l_1$ such that $Kx = y$. Equating terms, this gives $\frac{x_n}{n} = y_n$, or:

$$
x_n = n y_n \quad \text{for all } n
$$

For $y$ to be in the range of $K$, the corresponding sequence $x$ must belong to $l_1$, which requires:

$$
\sum_{n=1}^\infty \vert{}x_n\vert{} = \sum_{n=1}^\infty n\vert{}y_n\vert{} < \infty
$$

**Step 2: Construct a counterexample $y$** To find $y \in l_1 \setminus K(l_1)$, we need a sequence $(y_n)$ that satisfies two conditions:
1. $\sum_{n=1}^\infty \vert{}y_n\vert{} < \infty$ (so $y \in l_1$)
2. $\sum_{n=1}^\infty n\vert{}y_n\vert{} = \infty$ (so the required pre-image $x \notin l_1$)
Let $y_n = \frac{1}{n^2}$.
First, we check if $y \in l_1$:

$$
\Vert{}y\Vert{}_1 = \sum_{n=1}^\infty \left\vert{}\frac{1}{n^2}\right\vert{} = \frac{\pi^2}{6} < \infty
$$

Since the $p$-series for $p=2$ converges, $y \in l_1$.
Next, we calculate the required pre-image $x$:

$$
x_n = n y_n = n \left(\frac{1}{n^2}\right) = \frac{1}{n}
$$

We check if $x \in l_1$:

$$
\Vert{}x\Vert{}_1 = \sum_{n=1}^\infty \left\vert{}\frac{1}{n}\right\vert{} = \infty
$$

Since this is the harmonic series, it diverges. Therefore, $x \notin l_1$.
**Conclusion:** Because the only sequence $x$ that maps to $y = \left(1, \frac{1}{4}, \frac{1}{9}, \dots, \frac{1}{n^2}, \dots\right)$ is $x = \left(1, \frac{1}{2}, \frac{1}{3}, \dots, \frac{1}{n}, \dots\right)$, and $x \notin l_1$, the point $y$ is not in the range of $K$. Thus, $y \in l_1 \setminus K(l_1)$.
____________
# Question 6
Let $1\le p<\infty,$ and consider the Banach space $l_{p}$. Let $(\lambda_{1},\lambda_{2},\lambda_{3},...)$ be a bounded sequence of real numbers, and define the bounded linear operator L: $l_{p}\rightarrow l_{p}$ by setting

$$
L(x_{1},x_{2},x_{3},...):=(\lambda_{1}x_{1},\lambda_{2}x_{2},\lambda_{3}x_{3},...)
$$

Prove that L is compact if and only if $lim_{k\rightarrow\infty}\lambda_{k}=0$. 
**Hint**. Consider the truncated operator $L_{n}(x)=(\lambda_{1}x_{1},\lambda_{2}x_{2},...,\lambda_{n}x_{n},0,0,...)$. Show that $Range(L_{n})$ is finite dimensional and hence each $L_{n}$ is compact. Now show that $\vert{}\vert{}L-L_{n}\vert{}\vert{}\rightarrow0$ as $n\rightarrow$ ∞ and hence L is compact. Conversely, suppose $lim_{k\rightarrow\infty}\lambda_{k}\ne0$ Show that there is an $\epsilon>0$ and a subsequence $(\lambda_{k_{l}})$ such that $\vert{}\lambda_{k_{l}}\vert{}>\epsilon$ for all $l$. Consider the unit vectors $(e_{k})\subset l_{p}$ and look at the image $L(e_{k_{l}})$.
## Solution
**Part 1: If $\lim_{k\to\infty}\lambda_k = 0$, then $L$ is compact.**
**Proof:** Assume that $\lim_{k\to\infty}\lambda_k = 0$. For each integer $n \ge 1$, we define the truncated operator $L_n : l_p \to l_p$ by:

$$
L_n(x) = L_n(x_1, x_2, \dots) = (\lambda_1 x_1, \lambda_2 x_2, \dots, \lambda_n x_n, 0, 0, \dots)
$$

1. **$L_n$ is a compact operator:** For any $x \in l_p$, $L_n(x)$ lies in the subspace spanned by the first $n$ standard basis vectors $\{e_1, e_2, \dots, e_n\}$. Thus, the range of $L_n$, denoted $\text{Range}(L_n)$, is at most $n$-dimensional. A fundamental theorem in functional analysis states that any bounded linear operator with a finite-dimensional range (a finite-rank operator) is compact. Since $L_n$ is clearly bounded (bounded by $\max_{1\le k\le n}\vert{}\lambda_k\vert{}$), $L_n$ is a compact operator for every $n$.
2. **$L$ is the uniform limit of $L_n$:** We now examine the operator $L - L_n$. For any $x \in l_p$, we have:
    
	$$
	(L - L_n)(x) = (0, \dots, 0, \lambda_{n+1}x_{n+1}, \lambda_{n+2}x_{n+2}, \dots)
	$$

    Let us compute the $l_p$-norm of $(L - L_n)(x)$:
    
	$$
	\Vert{} (L - L_n)(x) \Vert{}_p^p = \sum_{k=n+1}^\infty \vert{}\lambda_k x_k\vert{}^p = \sum_{k=n+1}^\infty \vert{}\lambda_k\vert{}^p \vert{}x_k\vert{}^p
	$$

    We can bound the scalar multipliers by their supremum over the tail:
    
	$$
	\sum_{k=n+1}^\infty \vert{}\lambda_k\vert{}^p \vert{}x_k\vert{}^p \le \left( \sup_{k \ge n+1} \vert{}\lambda_k\vert{}^p \right) \sum_{k=n+1}^\infty \vert{}x_k\vert{}^p \le \left( \sup_{k \ge n+1} \vert{}\lambda_k\vert{} \right)^p \Vert{}x\Vert{}_p^p
	$$

    Taking the $p$-th root of both sides gives:
    
	$$
	\Vert{} (L - L_n)(x) \Vert{}_p \le \left( \sup_{k \ge n+1} \vert{}\lambda_k\vert{} \right) \Vert{}x\Vert{}_p
	$$

    By definition of the operator norm, this implies:
    
	$$
	\Vert{} L - L_n \Vert{} \le \sup_{k \ge n+1} \vert{}\lambda_k\vert{}
	$$

    Since we assumed $\lim_{k\to\infty}\lambda_k = 0$, the supremum of the tail sequence must also tend to $0$ as $n \to \infty$. Thus:
    
	$$
	\lim_{n\to\infty} \Vert{} L - L_n \Vert{} = 0
	$$

3. **Conclusion for Part 1:** We have shown that $L_n$ is a sequence of compact operators that converges to $L$ in the operator norm topology. Because the set of compact operators on a Banach space forms a closed ideal (in the operator norm), the uniform limit of compact operators is compact. Therefore, $L$ is a compact operator.
**Part 2: If $L$ is compact, then $\lim_{k\to\infty}\lambda_k = 0$.**
**Proof:** We will prove this by contraposition. Assume that $\lim_{k\to\infty}\lambda_k \neq 0$. We must show that $L$ is not compact.
4. **Constructing a problematic sequence:** Since the sequence $(\lambda_k)$ does not converge to $0$, there exists an $\epsilon > 0$ and a subsequence $(\lambda_{k_l})_{l=1}^\infty$ such that:
    
	$$
	\vert{}\lambda_{k_l}\vert{} \ge \epsilon \quad \text{for all } l \ge 1
	$$

    Consider the standard unit basis vectors in $l_p$ corresponding to this subsequence: $(e_{k_l})_{l=1}^\infty$. Because $e_{k_l}$ has a $1$ in the $k_l$-th position and $0$ elsewhere, we have $\Vert{}e_{k_l}\Vert{}_p = 1$ for all $l$. Thus, $(e_{k_l})_{l=1}^\infty$ is a bounded sequence in $l_p$.
5. **Analyzing the image of the sequence:** Let us look at the image of this sequence under $L$:
    
	$$
	y_l = L(e_{k_l}) = \lambda_{k_l} e_{k_l}
	$$

    If $L$ were a compact operator, the sequence $(y_l)$ would necessarily contain a convergent subsequence. In any metric space, a convergent sequence must be a Cauchy sequence. Let us calculate the distance between any two distinct terms $y_l$ and $y_m$ (with $l \neq m$):
    
	$$
	\Vert{} y_l - y_m \Vert{}_p^p = \Vert{} \lambda_{k_l} e_{k_l} - \lambda_{k_m} e_{k_m} \Vert{}_p^p
	$$

    Since $e_{k_l}$ and $e_{k_m}$ are distinct standard basis vectors (they have their non-zero entries in different coordinates), the norm decomposes simply as:
    
	$$
	\Vert{} \lambda_{k_l} e_{k_l} - \lambda_{k_m} e_{k_m} \Vert{}_p^p = \vert{}\lambda_{k_l}\vert{}^p + \vert{}\lambda_{k_m}\vert{}^p
	$$

    Using our assumption that $\vert{}\lambda_{k_l}\vert{} \ge \epsilon$ and $\vert{}\lambda_{k_m}\vert{} \ge \epsilon$:
    
	$$
	\Vert{} y_l - y_m \Vert{}_p^p \ge \epsilon^p + \epsilon^p = 2\epsilon^p
	$$

    Taking the $p$-th root yields:
    
	$$
	\Vert{} y_l - y_m \Vert{}_p \ge 2^{1/p}\epsilon > 0
	$$

6. **Conclusion for Part 2:** The distance between _any_ two distinct elements of the sequence $(y_l)$ is bounded below by a strictly positive constant $2^{1/p}\epsilon$. Consequently, $(y_l)$ cannot have any Cauchy subsequence. If it has no Cauchy subsequence, it cannot have a convergent subsequence.
    We have found a bounded sequence $(e_{k_l})$ in $l_p$ whose image under $L$ has no convergent subsequence. This violates the definition of a compact operator. Thus, $L$ is not compact.
    By contraposition, if $L$ is compact, we must have $\lim_{k\to\infty}\lambda_k = 0$.
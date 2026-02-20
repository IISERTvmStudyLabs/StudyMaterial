$F: \mathbb{R} \to \mathbb{R}$ increasing & right continuous.

$$\lambda_F((a, b]) = F(b) - F(a).$$

If $\bigcup_{i=1}^{\infty} (a_i, b_i] = (a, b]$ with $a, b \in \mathbb{R}$ then

$$\lambda_F((a, b]) = \sum_{i=1}^{\infty} \lambda_F((a_i, b_i]).$$

**Case 2: $b = \infty$**

For any integer $n > a$, we have

$$\begin{align*} (a, n] &= (a, b] \cap (-\infty, n] \\ &= \bigcup_{i=1}^{\infty} ((a_i, b_i] \cap (-\infty, n]) \end{align*}$$

By Case 1,

$$\sum_{i=1}^{\infty} \lambda_F((a_i, b_i] \cap (-\infty, n]) = \lambda_F((a, b] \cap (-\infty, n])$$

**Claim**:- For any $c \in \mathbb{R}, d \in \mathbb{R} \cup \{\infty\}$, we have

$$\lambda_F((c, d] \cap (-\infty, n]) \uparrow \lambda_F((c, d])$$

If $d \in \mathbb{R}$ then, we are done.

If $d=\infty$, $\lambda_F((c, d] \cap (-\infty, n]) = \lambda_F((c, n]) = F(n) - F(c)$

$$\Rightarrow F(n) - F(c) \uparrow F(\infty) - F(c) = \lambda_F((c, d])$$

Applying *Lemma 3*,

$$\begin{align*} \sum_{i=1}^{\infty} \lambda_F((a_i, b_i] \cap (-\infty, n]) &\uparrow \sum_{i=1}^{\infty} \lambda_F((a_i, b_i]) \\ &= \lambda_F((a, b]) \end{align*}$$

**Case 3:- $a = -\infty$**
**Exercise**
# Theorem 
 If $F : \mathbb{R} \to \mathbb{R}$ be increasing, right continuous function then $\exists$ a $\sigma$-algebra $\mathcal{M}_F \supseteq \mathcal{B}_{\mathbb{R}}$ and a unique $\mu_F$ on $\mathcal{M}_F$ such that

$$\mu_F((a, b]) = F(b) - F(a)$$
___
**Note**: Let $G$ be a same as $F$, then $\mu_G = \mu_F$ on $\mathcal{S}$ 

$F(b) - F(a) = G(b) - G(a)$, then $F(a) - G(a)$ is constant. $F - G$ is constant.
___
If $G$ is another such function then $\mu_G = \mu_F$ $\iff$ $F - G = \text{Constant}$
___
**Note**: These are all called *Lebesgue Stieltjes measures*.
____

**Exercise**
$\bullet$ $\mu$ is finite on bounded intervals. Define

$$F_{\mu}(x) = \begin{cases} \mu((0, x]) & , x > 0 \\ 0 & , x = 0 \\ -\mu((x, 0]) & , x < 0 \end{cases}$$

Show that $F_{\mu}$ is increasing, right continuous.

Let $\nu((a, b]) = \nu((0, b]) - \nu((0, a]) = F_{\mu}(b) - F_{\mu}(0) - (F_{\mu}(a) - F_{\mu}(0))$

$$
\begin{align*} 
&= F_{\mu}(b) - F_{\mu}(a) \\ 
&= \mu((0, b]) - \mu((0, a]) = \mu((a, b]) 
\end{align*}
$$
____
Conversely, if $\mu$ is a Borel measure (i.e., $\mu$ is $\sigma$-additive set function on $\mathcal{B}_{\mathbb{R}}$) that is finite on all bounded intervals and define,

$$F_{\mu}(x) = 
\begin{cases} & \mu((0, x]) &, x > 0 \\ & 0 &, x = 0 \\ & -\mu((0, -x]) &, x < 0 \end{cases}$$

Then $F_{\mu}$ is increasing, right continuous and the Lebesgue Stieltjes measure corresponding to $F_{\mu}$ on $\mu$.

**Exercise** Show that right continuity of $F$ is necessary.

**Exercise**

$$F(x) = \begin{cases} 1 &, x \geqslant 0 \\ 0 &, x < 0 \end{cases}$$

Find the corresponding $\sigma$-algebra $\mathcal{M}_F$ & the measure $\mu_F$.

____
# Definition
 Let $\mathcal{F} \subseteq \mathcal{P}(\Omega)$ be a $\sigma$-algebra & $\mu : \mathcal{F} \to [0, \infty]$.

The $\sigma$-algebra is called **complete** wrt $\mu$ (the measure space $(\Omega, \mathcal{F}, \mu)$ is complete) if for all $F \subseteq A$, $A \in \mathcal{F}$ & $\mu(A) = 0$ implies $F \in \mathcal{F}$.

Define $$\mathcal{F}_{\mu} = \{ A \cup N : A \in \mathcal{F}, N \subseteq E \in \mathcal{F}, \mu(E) = 0 \}$$

**Exercise** Prove $\mathcal{F}_{\mu}$ is a $\sigma$-algebra.

Define $\bar{\mu}$ by $\bar{\mu} : \mathcal{F}_{\mu} \to [0, \infty]$

$$\bar{\mu}(A \cup N) = \mu(A)$$
**Exercise** Prove $\bar{\mu}$
___
**Note:** $A \cup N = B \cup M$

$$\Rightarrow \mu(A) = \mu(B)$$

$A, B \in \mathcal{F}, M \subseteq E, \mu(E) = 0$

$N \subseteq F, \mu(F) = 0$
____
**Exercise** :- Prove $(\Omega, \mathcal{F}_{\mu}, \bar{\mu})$ is a complete measure space.
---
course: Functional Analysis
Lecture: "22"
date: 2026-10-01
---
> [!note] Compact Linear Operator
> Let $X$ and $Y$ be normed spaces. A linear operator $L: X \to Y$ is **compact** if for every bounded sequence $(x_n)_{n \in \mathbb{N}} \subset X$, there exists a subsequence $(x_{n_k})_{k \in \mathbb{N}}$ such that $(Lx_{n_k})$ converges in $Y$.
>
> Equivalently:
> 
$$
\text{For every bounded set } U \subset X, \text{ the closure } \overline{L(U)} \text{ is compact in } Y
$$

> (i.e., $L(U)$ is relatively compact in $Y$).

- which operators are compact?

----
## Theorem 1
Let $X, Y$ be Banach.
1.  $L \in \mathcal{L}(X, Y)$ and $\dim Y < \infty$, then $L$ is compact.
2. Let $L_n \in \mathcal{L}(X, Y)$ be compact, $\forall n \in \mathbb{N}$ and let $\lim_{ n \to \infty }\|L_n - L\| \rightarrow 0$.
Then $L$ is compact, i.e., the set of all compact operators is closed in $\mathcal{L}(X, Y)$.

**Proof**
1. It is enough to show that $\overline{L(B_1(0))}$ is compact in $Y$. If $\dim Y < \infty$ and $L$ is bounded, $\overline{L(B_1(0))}$ is closed and bounded $\Rightarrow \overline{L(B_1(0))}$ is compact.

2. Let $(x_n)_{n \in \mathbb{N}}$ be bounded in $X$, i.e.
    
    
$$
\exists M \gt 0 \quad \text{such that} \quad \sup_{n \in \mathbb{N}} \Vert{}x_n\Vert{} \le M.
$$

    
    Since $(x_n)$ is bounded and $L_1$ is compact, $\exists$ a subsequence $(x_{1, n})_{n \in \mathbb{N}}$ such that $(L_1 x_{1, n})$ converges in $Y$. Since $(x_{1, n})_{n \in \mathbb{N}}$ is a bounded sequence in $X$ and $L_2$ is compact, $\exists$ a subsequence $(x_{2, n})_{n \in \mathbb{N}}$ of $(x_{1, n})$ such that $(L_2 x_{2, n})$ converges in $Y$. Continuing inductively for each $L_m$, we get nested subsequences $(x_{m, n})_{n \in \mathbb{N}}$ such that $(L_m x_{m, n})$ converges in $Y$.
    

Denote $y_n = x_{n, n}, \ n \in \mathbb{N}$. For every $m \in \mathbb{N}$, $(y_n)_{n \ge m}$ is a subsequence of $(x_{m, n})_{n \in \mathbb{N}}$, so $(L_m y_n)_{n \in \mathbb{N}}$ converges in $Y$.

**Claim:** $(L y_n)_{n \in \mathbb{N}}$ is Cauchy in $Y$. Let $\epsilon \gt 0$. Choose $m \in \mathbb{N}$ large enough that $\Vert{}L - L_m\Vert{} \lt \frac{\epsilon}{3M}$. Since $(L_m y_n)_{n \in \mathbb{N}}$ is Cauchy, $\exists N_0 \in \mathbb{N}$ such that $\forall k, \ell \ge N_0$, $\Vert{}L_m y_k - L_m y_\ell\Vert{} \lt \frac{\epsilon}{3}$.

Then $\forall k, \ell \ge N_0$:


$$
\Vert{}L y_k - L y_\ell\Vert{}_Y \le \Vert{}L y_k - L_m y_k\Vert{}_Y + \Vert{}L_m y_k - L_m y_\ell\Vert{}_Y + \Vert{}L_m y_\ell - L y_\ell\Vert{}_Y
$$



$$
\le \Vert{}L - L_m\Vert{}_{\mathcal{L}(X,Y)} \Vert{}y_k\Vert{}_X + \Vert{}L_m y_k - L_m y_\ell\Vert{}_Y + \Vert{}L_m - L\Vert{}_{\mathcal{L}(X,Y)} \Vert{}y_\ell\Vert{}_X
$$



$$
\lt \frac{\epsilon}{3M} \cdot M + \frac{\epsilon}{3} + \frac{\epsilon}{3M} \cdot M = \epsilon.
$$


Since $Y$ is Banach (complete), $(L y_n)_{n \in \mathbb{N}}$ converges in $Y$. Since $(y_n)$ is a subsequence of $(x_n)$, $L$ is compact.

----
# Arzelà-Ascoli Theorem
$K$ compact metric space (e.g., $K \subset \mathbb{R}^N$ compact), and $C(K, \mathbb{R})$ equipped with 

$$
\Vert{}f\Vert{}_\infty = \sup_{x \in K} \vert{}f(x)\vert{}
$$

Let $H \subset C(K, \mathbb{R})$.
1. **Uniformly bounded:** 
   
$$
\sup_{f \in H} \sup_{x \in K} \vert{}f(x)\vert{} < \infty
$$
 
2. **Equicontinuous:** For any $\epsilon > 0$, $\exists \delta > 0$ such that
   
$$
\sup_{f \in H} \vert{}f(x) - f(y)\vert{} < \epsilon, \quad \forall x, y \in K \text{ with } d(x,y) < \delta
$$

Then:
- **$H$ is relatively compact ($\overline{H}$ is compact)** $\iff H$ is uniformly bounded and equicontinuous $\iff \forall (f_n)_{n \in \mathbb{N}} \subset H, \exists$ a uniformly convergent subsequence in $C(K, \mathbb{R})$.
- **$H$ is compact** $\iff H$ is **closed**, uniformly bounded, and equicontinuous.

----
## Theorem 2
Let $X, Y$ be Banach and $L \in \mathcal{L}(X, Y)$. Then $L$ is compact $\iff L^* \in \mathcal{L}(Y^*, X^*)$ is compact.

**Proof**

**($\Rightarrow$)** Let $L \in \mathcal{L}(X, Y)$ be compact. Let $(\phi_n)_{n \in \mathbb{N}} \subset Y^*$ be a bounded sequence; WLOG $\Vert{}\phi_n\Vert{}_{Y^*} \le 1$, $\forall n \in \mathbb{N}$. We want to show that $\exists$ a subsequence $(\phi_{n_k})_{k \in \mathbb{N}}$ such that $(L^* \phi_{n_k})$ converges in $X^*$.

Define $K = \overline{L(B_1(0))}$, where $B_1(0) = \{x \in X : \Vert{}x\Vert{}_X \le 1\}$. Since $L$ is compact, $K$ is a compact metric space in $Y$. For each $n \in \mathbb{N}$, define $f_n = \phi_n\vert{}_K \in C(K)$. Then $\{f_n\}_{n \in \mathbb{N}}$ satisfies:

1. **Uniformly bounded:** $\forall n \in \mathbb{N}$ and $\forall y \in K$,
    
    
$$
\vert{}f_n(y)\vert{} = \vert{}\phi_n(y)\vert{} \le \Vert{}\phi_n\Vert{}_{Y^*} \Vert{}y\Vert{}_Y \le 1 \cdot \Vert{}L\Vert{}.
$$

    
2. **Equicontinuous:** $\forall n \in \mathbb{N}$ and $\forall y_1, y_2 \in K$,
    
    
$$
\vert{}f_n(y_1) - f_n(y_2)\vert{} = \vert{}\phi_n(y_1 - y_2)\vert{} \le \Vert{}\phi_n\Vert{}_{Y^*} \Vert{}y_1 - y_2\Vert{}_Y \le \Vert{}y_1 - y_2\Vert{}_Y.
$$

    
    Thus, for any $\epsilon \gt 0$, choosing $\delta = \epsilon$ gives $\vert{}f_n(y_1) - f_n(y_2)\vert{} \lt \epsilon$ whenever $\Vert{}y_1 - y_2\Vert{}_Y \lt \delta$, $\forall n \in \mathbb{N}$.
    

By the **Arzelà-Ascoli Theorem**, $\exists$ a subsequence $(f_{n_k})_{k \in \mathbb{N}}$ that converges uniformly on $K$. In particular, $(f_{n_k})$ is uniformly Cauchy on $K$: $\forall \epsilon \gt 0$, $\exists N_0 \in \mathbb{N}$ such that $\forall k, \ell \ge N_0$,


$$
\sup_{y \in K} \vert{}\phi_{n_k}(y) - \phi_{n_\ell}(y)\vert{} \lt \epsilon.
$$


Since $L(B_1(0)) \subset K$, we have $\forall k, \ell \ge N_0$:


$$
\Vert{}L^* \phi_{n_k} - L^* \phi_{n_\ell}\Vert{}_{X^*} = \sup_{x \in B_1(0)} \vert{}(L^* \phi_{n_k} - L^* \phi_{n_\ell})(x)\vert{} = \sup_{x \in B_1(0)} \vert{}\phi_{n_k}(Lx) - \phi_{n_\ell}(Lx)\vert{} \le \sup_{y \in K} \vert{}\phi_{n_k}(y) - \phi_{n_\ell}(y)\vert{} \lt \epsilon.
$$


Hence $(L^* \phi_{n_k})_{k \in \mathbb{N}}$ is Cauchy in $X^*$. Since $X^*$ is Banach, $(L^* \phi_{n_k})$ converges in $X^*$. Therefore, $L^*$ is compact.

**($\Leftarrow$)** Suppose $L^* \in \mathcal{L}(Y^*, X^*)$ is compact. By the ($\Rightarrow$) direction applied to $L^*$, $L^{**} \in \mathcal{L}(X^{**}, Y^{**})$ is compact.

For each $x \in X$, define $\hat{x} \in X^{**}$ by $\hat{x}(\psi) = \psi(x)$ for $\psi \in X^*$. By the Hahn–Banach Theorem, $\Vert{}\hat{x}\Vert{}_{X^{**}} = \Vert{}x\Vert{}_X$. Similarly, for $y \in Y$, define $\hat{y} \in Y^{**}$ by $\hat{y}(\phi) = \phi(y)$ with $\Vert{}\hat{y}\Vert{}_{Y^{**}} = \Vert{}y\Vert{}_Y$.

Notice that for any $x \in X$ and $\phi \in Y^*$:


$$
(L^{**}\hat{x})(\phi) = \hat{x}(L^*\phi) = (L^*\phi)(x) = \phi(Lx) = \widehat{Lx}(\phi),
$$


so $L^{**}\hat{x} = \widehat{Lx}$.

Now let $(x_n)_{n \in \mathbb{N}} \subset X$ be bounded. Then $\Vert{}\hat{x}_n\Vert{}_{X^{**}} = \Vert{}x_n\Vert{}_X$, so $(\hat{x}_n)_{n \in \mathbb{N}}$ is bounded in $X^{**}$. Since $L^{**}$ is compact, $\exists$ a subsequence $(x_{n_k})_{k \in \mathbb{N}}$ such that $(L^{**}\hat{x}_{n_k}) = (\widehat{Lx_{n_k}})$ converges in $Y^{**}$ (and is therefore Cauchy in $Y^{**}$).

Thus, as $k, \ell \to \infty$:


$$
\Vert{}Lx_{n_k} - Lx_{n_\ell}\Vert{}_Y = \Vert{}\widehat{Lx_{n_k}} - \widehat{Lx_{n_\ell}}\Vert{}_{Y^{**}} \to 0.
$$


Since $Y$ is Banach, $(Lx_{n_k})$ converges in $Y$. Hence $L$ is compact. $\blacksquare$

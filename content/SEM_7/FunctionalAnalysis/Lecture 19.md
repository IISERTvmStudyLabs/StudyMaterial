---
course: Functional Analysis
Lecture: "19"
date: 2026-09-10
---
### Remark
  [[SEM_7/FunctionalAnalysis/Lecture 18#Theorem (Banach–Steinhaus)|The Banach–Steinhaus Theorem]] states that if $(L_i)_{i \in I}$ is pointwise bounded, then it is uniformly bounded. In other words, if $\sup_{i \in I} \|L_i x\|_Y < \infty$ for each $x \in X$, then:
  

$$
\sup_{i \in I} \|L_i\| < \infty, \quad \text{i.e., } \sup_{i \in I} \sup_{\|x\|_X \leq 1} \|L_i x\|_Y < \infty
$$


  Hence the name **Uniform Boundedness Principle**.

---
# Applications of the Banach–Steinhaus Theorem
## Corollary 1 (Weakly and Weakly-* Convergent Sequences are Bounded.)
Every weakly convergent sequence in a normed space $X$ and every weakly-* convergent sequence in $X^*$ is norm-bounded.
**Proof:**
1. **Weak-* convergence in $X^*$:** Suppose $\phi_n \xrightarrow{w^*} \phi$ in $X^*$.
   

$$
\implies \phi_n(x) \rightarrow \phi(x) \quad \forall x \in X
$$


   Since $(\phi_n(x))$ is a convergent sequence of scalars, it is bounded:
   

$$
\sup_{n \in \mathbb{N}} |\phi_n(x)| < \infty \quad \forall x \in X
$$


   By the Banach–Steinhaus Theorem:
   

$$
\sup_{n \in \mathbb{N}} \|\phi_n\|_{X^*} < \infty
$$


   so $(\phi_n)_{n \in \mathbb{N}}$ is bounded in $X^*$.

2. **Weak convergence in $X$:** Suppose $x_n \rightharpoonup x$ in $X$.
   

$$
\begin{aligned}
   \phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^* &\implies J_{x_n}(\phi) \rightarrow J_x(\phi) \quad \forall \phi \in X^* \\
   &\implies J_{x_n} \xrightarrow{w^*} J_x \quad \text{in } X^{**}
   \end{aligned}
$$


   As before, $\sup_{n \in \mathbb{N}} \|J_{x_n}\|_{X^{**}} < \infty$. Since $J$ is an isometry, this means:
   

$$
\sup_{n \in \mathbb{N}} \|x_n\|_X < \infty
$$


   

$$
\implies (x_n)_{n \in \mathbb{N}} \text{ is bounded in } X. \quad \blacksquare
$$



---

## Corollary 2 (Pointwise Limit of Bounded Linear Operators)
 Let $X$ and $Y$ be Banach spaces and let $(L_n)_{n \in \mathbb{N}} \subset \mathcal{L}(X, Y)$. Suppose $Lx := \lim_{n \rightarrow \infty} L_n x$ exists for all $x \in X$ ($L_n$ converges pointwise in $Y$). Then $L$ is bounded and linear, i.e., $L \in \mathcal{L}(X, Y)$.

 *(In other words, the pointwise limit of a sequence of bounded linear maps is bounded and linear.)*

**Proof:**
* Clearly, $L$ is linear since it is the pointwise limit of linear maps.
* **To prove boundedness of $L$:**
  It is given that $Lx = \lim_{n \rightarrow \infty} L_n x$ exists for each $x \in X$.
  

$$
\implies \sup_{n \in \mathbb{N}} \|L_n x\|_Y < \infty \quad \text{for each } x \in X \quad (\text{since } \|L_n x\|_Y \rightarrow \|Lx\|_Y)
$$


  By the Banach–Steinhaus Theorem, there exists $M < \infty$ such that:
  

$$
\sup_{n \in \mathbb{N}} \|L_n\|_{\mathcal{L}(X,Y)} = M < \infty \tag{$*$}
$$


  For any $x \in X$ and $n \in \mathbb{N}$:
  

$$
\begin{aligned}
  \|L_n x\|_Y &\leq \|L_n\|_{\mathcal{L}(X,Y)} \|x\|_X \\
  &\leq \sup_{n \in \mathbb{N}} \|L_n\|_{\mathcal{L}(X,Y)} \|x\|_X = M \|x\|_X \quad (\text{from } *)
  \end{aligned}
$$


  Taking the limit as $n \rightarrow \infty$:
  

$$
\|Lx\|_Y = \lim_{n \rightarrow \infty} \|L_n x\|_Y \leq M \|x\|_X \implies \|L\|_{\mathcal{L}(X,Y)} \leq M < \infty
$$


  Thus, $L$ is bounded and linear. $\blacksquare$

---

# Banach Open Mapping Theorem

**Motivation:** How much geometry (of the spaces) is preserved by a continuous linear map?
* Boundedness is preserved.
* **Why is continuity of $L^{-1}: Y \rightarrow X$ important?**
  We are interested in solving equations of the form $Lx = y$ (e.g., $-\Delta u = f$): given $y \in Y$, find $x \in X$ such that $Lx = y$.
  * If $L$ is continuous (bounded), then small changes in $X$ correspond to small changes in $Y$. Let $Lx = y$ and $L\tilde{x} = \tilde{y}$:
    

$$
\begin{aligned}
    \|y - \tilde{y}\|_Y &= \|Lx - L\tilde{x}\|_Y \\
    &= \|L(x - \tilde{x})\|_Y \\
    &\leq \|L\| \|x - \tilde{x}\|_X \leq M \|x - \tilde{x}\|_X
    \end{aligned}
$$


  * Conversely, continuity of $L^{-1}$ ensures that **small changes in $y \implies$ small changes in $x$**, which guarantees the **stability of the solution** to $Lx = y$.
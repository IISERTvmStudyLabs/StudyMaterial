---
course: Functional Analysis
Lecture: "4"
date: 3 August
---

[[Lecture 3#Proposition|Recall]]:  $L: X \rightarrow Y$  is called bounded if  $\|L\| := \sup_{x \in X} \|Lx\|_y < \infty$  if  $\exists M > 0$  such that
$$
\|Lx\|_y \leq M \|x\|_x \quad \forall x \in X - (*)
$$
then  $L$  is bounded and conversely
$$
\|L\| = \inf M, \quad \forall M \text{ satisfying } (*)
$$
 $L: X \rightarrow Y$  is continuous on  $X \quad \forall x_0 \in X \quad \forall \varepsilon > 0 \quad \exists \delta > 0$  such that
$$
\|x - x_0\| < \delta \Rightarrow \|Lx - Lx_0\|_y < \varepsilon
$$
 $L$  is continuous on  $X \Leftrightarrow L$  is continuous at  $0$ .
 ____
# Theorem
A linear map  $L: X \rightarrow Y$  is continuous  $\Leftrightarrow$  it is bounded
#### Proof
Suppose  $L$  is continuous on  $X$ . Hence,  $L$  is continuous at  $0$ .
$\Rightarrow \exists \delta > 0$ such that
$$
\|x\|_x \leq \delta \Rightarrow \|Lx\|_y \leq 1.
$$
For any  $y \in X$   $\|y\| \leq 1$ ,  $\|\delta y\| \leq \delta$ .
$$
\|L(\delta y)\|_y = \delta \|Ly\| \leq 1.
$$
$$
\|Ly\| \leq 1/\delta \quad \forall y \in X \text{ with } \|y\| \leq 1.
$$
$$
\Rightarrow \|L\| < \infty
$$
Conveniently suppose let  $L$  be bounded.
$$
\begin{aligned} \|Lx_1 - Lx_2\|_Y &= \|L(x_1 - x_2)\|_Y \\ &\leq \|L\| \|x_1 - x_2\|. \quad \forall x_1, x_2 \in X \end{aligned}
$$
Hence  $L$  is Lipschitz continuous
___

### Equivalent conditions

1. $L$  is continuous at 0
2. $L$  is unit on  $X$
3. $L$  is bounded.
4. $\exists M > 0$  such that  $\|Lx\|_Y \leq M \|x\|_X \quad \forall x \in X$ .
Denote  $\mathcal{L}(X, Y) = \{L: X \rightarrow Y : L \text{ is linear \& bounded}\}$   
(linear & continuous)
$$
\mathcal{L}(X) = \mathcal{L}(X, X)
$$
$$
X' = \mathcal{L}(X, \mathbb{K}) = X^* \text{ (Dual)}
$$
$\|L\| := \sup_{\|x\|_X \leq 1} \|Lx\|_Y$  is indeed a norm  $\mathcal{L}(X, Y)$. (when  $Y$  is complete  $\mathcal{L}(X, Y)$  is Banach)
___
# Theorem
$(\mathcal{L}(X, Y), \|\cdot\|_{\mathcal{L}(X, Y)})$ , where  $\|L\|_{\mathcal{L}(X, Y)} = \|L\|$ $= \sup_{\|x\|_X \leq 1} \|Lx\|_Y$ 
For  $L \in \mathcal{L}(X, Y)$  is a Normed Linear Space. In addition, if  $Y$  is Banach then  $\mathcal{L}(X, Y)$  is also Banach with $\|\cdot\|_{\mathcal{L}(X, Y)}$ .  Consequently,  $X' = \mathcal{L}(X, \mathbb{K})$  is Banach.
#### Proof
$\mathcal{L}(X,Y)$ is a vector space over $\mathbb{K}$ with the operation.
$$
(L_1 + L_2)(x) = L_1 x + L_2 x
,\quad \forall L_1, L_2 \in \mathcal{L}(x, y)
$$
$$
(\lambda L)(x) = \lambda L x
,\quad \forall x \in \mathbb{K}
$$
- To show:  $\|\cdot\|$  is a measure
$(N1)$ Clearly  $\|L\| \geq 0$  by [[Lecture 1#Definition (Norm)|definition]].
If  $L = 0$  then  $\|L\| = 0$ . If  $L \neq 0$  then  $Lx_{0} \neq 0$, for some  $x_0 \neq 0$ 
$$
\|L\| = \sup_{\|x\|_X \leq 1} \|Lx\|_Y \geq \|L(\frac{x_0}{\|x_0\|})\|_Y
$$
$$
\geq \frac{1}{\|x_0\|} \|Lx_0\|_1 > 0
$$
$(N2)$
$$
\quad \|\lambda L\| = \sup_{\|x\| \leq 1} \|(\lambda L)(x)\|_y
$$
$$
= \sup_{\|x\| \leq 1} \|\lambda Lx\|_y
$$
$$
= |\lambda| \|L\|
$$
$(N3)$ For any  $x \in X$   $\|x\| \leq 1$ .
$$
\|(L_1 + L_2)(x)\| = \|L_1 x + L_2 x\|
$$
$$
\leq \|L_1 x\| + \|L_2 x\|
$$
$$
\leq \sup_{\|x\| \leq 1} \|L_1 x\| + \sup_{\|x\| \leq 1} \|L_2 x\|
$$
$$
= \|L_1\| + \|L_2\|
$$
$$
\Rightarrow \|L_1 + L_2\| = \sup_{\|x\| \leq 1} \|(L_1 + L_2)(x)\| \leq \|L_1\| + \|L_2\|
$$
- To show that:  $\mathcal{L}(x, y)$  is complete, Whenever  $Y$  is complete.
Let  $(L_n)_{n \in \mathbb{N}}$  be Cauchy in  $\mathcal{L}(x, y)$
$$
\Rightarrow \forall \varepsilon > 0 \quad \exists N_0 \in \mathbb{N} \text{ such that}
,\quad\|L_n - L_m\| < \varepsilon \quad \forall n, m \geq N_0
$$
To show:  $L_n \rightarrow L$  in  $\mathcal{L}(x, y)$ , i.e.  $\|L_n - L\| \rightarrow 0$  as  $n \rightarrow \infty$ 
$$
\begin{aligned} \|L_n x - L_m y\|_Y &= \|(L_n - L_m)x\|_Y \\ &\leq \|L_n - L_m\| \|x\| \quad \forall x \in X. \end{aligned}
$$
For each fixed $x \in X$ ,  $(L_n x)_{n \in \mathbb{N}}$  is Cauchy in  $Y$ .
Since  $Y$  is complete,  $(L_n x)_{n \in \mathbb{N}}$  converges to some  $y \in Y$ , say  $Lx$ .
- To show:  $L \in \mathcal{L}(x, y)$  Since  $L_n$ 's are linear,  $L$  is linear.
*Claim*:  $L$  is bounded.
We note that  $\|L_n x\|_Y \rightarrow \|Lx\|_Y$ 
$$
\begin{aligned} \|L_n x\|_Y &= \|L_n x - Lx + Lx\|_Y \\ &\leq \|L_n x - Lx\|_Y + \|Lx\|_Y \end{aligned}
$$
$$
\|Lx\| \leq \|Lx - L_n x\| + \|L_n x\|
$$
$$
\pm (\|L_n x\| - \|L x\|) \leq \|L_n x - L x\| \rightarrow 0
$$
$$
\|L_n x\|_y \rightarrow \|L x\|_y
$$
$$
\|L x\| = \lim_{ n \to \infty }  \|L_n x\|  \leq \lim_{ n \to \infty } \|L_n x - L_{N_0} x\|  + \|L_{N_0} x\| 
$$
$$
\leq 1 + \|L_{N_0} x\| \quad \forall x \in X \quad \|x\| \leq 1.
$$
$$
\Rightarrow \|L\| \leq 1 + \|L_{N_0}\|
$$
 $\Rightarrow L$  is bounded.
- Finally to show that  $L_n \rightarrow L$  as  $n \rightarrow \infty$ 
For  $x \in X \quad \|x\| \leq 1$ .

$$
\begin{aligned} \|L_n x - L_m x\|_y &\leq \|L_n - L_m\| \|x\|_x \\ &\leq \|L_n - L_m\| \\ &\leq \varepsilon \quad \forall n, m \geq N_0 \end{aligned}
$$
Fix  $n \geq N_0$  and let  $m \rightarrow \infty$ 
$$
\|L_n x - L_m x\|_y < \varepsilon \quad \forall n, m \geq N_0 \quad \forall x \in X \quad \|x\| \leq 1
$$
$$
\Rightarrow \|L_n - L\| = \sup_{\|x\| \leq 1} \|L_n x - L_m x\| < \varepsilon \quad \forall n \geq N_0
$$
___
**Example:**
 $A \in \mathbb{K}^{M \times N}$  consider the map
$$
x \in \mathbb{K}^N \mapsto Ax \in \mathbb{K}^M
$$
$$
\begin{aligned}
\|Ax\|_{\mathbb{K}^M} &= \sum_{i=1}^M |(Ax)_i| \\
&= \sum_{i=1}^M \left| \sum_{j=1}^N a_{ij} x_j \right| \\
&\leq C \sum_{j=1}^N |x_j| = C \|x\|_{\mathbb{K}^N}
\end{aligned}
$$

 $\Rightarrow x \mapsto Ax$  is bounded linear

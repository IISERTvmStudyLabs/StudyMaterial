1. Alberto Bressen, lecture notes on func analysis with application to linear PDE
2. S Kesavan Func Analysis Hindustan.
3. H Brezis Func analysis spaces & PDE
4. Philippe G Garlet linear & run-linear analysis SIAM

---

 $Y = \mathbb{R}$  the  $L: X \rightarrow \mathbb{R}$  are called functionals  $C(\mathbb{R})$  valued.

Func Analysis study of maps  $L: X \rightarrow Y$  where  $X$  &  $Y$  are vector spaces over a field  $K (\mathbb{C}/\mathbb{R})$ 

we need additional structure on the space

1. inner product
2. norm
3. metric
4. topology

→ Linear FA: deals with linear mass, very useful for studying problems in LA, linear ODEs, PDEs.

→ Non-linear FA: non-linear maps

1. Degree theory } applied in non-linear DE.  
2. Fixed point theory.

→ Norm: let  $X$  be a vector space on a field  $K$ . Then a map  $x \mapsto \|x\|_X: X \rightarrow \mathbb{R}$  is called a norm if it satisfies



$$
(N1) \quad ① \quad \|x\| \geq 0 \quad \forall x \in X \quad \text{if } \|x\| = 0 \Leftrightarrow x = 0
$$





$$
(N2) \quad ② \quad \|\lambda x\| = |x| \|x\| \quad \forall \lambda \in \mathbb{R} \quad x \in X
$$





$$
(N3) \quad ③ \quad \|x+y\| \leq \|x\| + \|y\| \quad \forall x, y \in X.
$$



N1 - positive definiteness

N2 - Absolute homogeneity

N3 - $\Delta$ inequality

### Proposition: (Metric induced by norm)

Let  $X$  be a normed linear space.  $d(x, y) = \|x - y\|$  if  $x, y \in X$ .  
is a metric on  $X$ .

#### Proof 



$$
d(x, y) \geq 0
$$





$$
d(x, y) = \|x - y\| = 0
$$





$$
\Leftrightarrow \|x - y\| = 0
$$





$$
\Leftrightarrow x = y.
$$





$$
\begin{aligned} d(y, x) &= \|y - x\| \\ &= \|-\|x - y\| \\ &= d(x, y) \end{aligned}
$$



 $\Delta$  inequality.

## Definition: (Open Ball)

For  $x_0 \in X$ ,  $x_1 > 0$  the open ball of medium  $x_1$ , centred at  $x$ .  
is defined by



$$
B_x(x_0) = \{y \in X \mid d(x, y) < x\}.
$$



Since  $X$  has algebraic structure of a vector space the distance  $d$  is consistent with the algebraic structure



$$
(P1) \quad d(x+z, y+z) = d(x, y) \quad \forall x, y, z \in X,
$$





$$
(P2) \quad d(\lambda x, \lambda y) = |\lambda| d(x, y). \quad \forall x, y \in X \quad \forall \lambda \in \mathbb{K}
$$





$$
(P3) \quad B_n(x_0)  \text{ is convex.}
$$



P1 - invariance of  $d$  under translation.

P2 - invariance of  $d$ under scalar multi.

P3 - convergence of the ball.



$$
P1 \Rightarrow d(x-y, 0) = d(x, y)
$$



 $\Rightarrow$  If we know  $d(x, 0) \forall x \in X$  then we know  $d(x, y) \forall x, y \in X$ .



$$
d(x, 0) = \|x\|
$$





$$
d(x_0 - y, 0) = d(x_0, y).
$$



We can choose  $x_0 = 0$ 



$$
d(0, y) = d(-y, 0) = d(y, 0)
$$



let  $x, y \in B_r(0)$  let  $\theta \in (0, 1)$ 



$$
\|\theta x + (1-\theta)y\| \leq \|\theta x\| + \|(1-\theta)y\|
$$





$$
\leq \|\theta\| \|x\| + \|(1-\theta)\| \|y\|
$$





$$
\leq \theta \|x\| + (1-\theta) \|y\|
$$





$$
\leq \theta x + (1-\theta)y = x.
$$



A subset  $U \subseteq X$  is called open if  $\forall x \in U$  if  $B_x(x) \subseteq U$ .

 $K \subset X$  is closed if  $K^c = X \setminus K$  is open.

A sequence  $(x_n)_{n \in \mathbb{N}} \subseteq X$   $x \in X$ 

1.  $x_n \rightarrow x$  in  $X$  if  $\|x_n - x\| \rightarrow 0$ 
2. $(x_n)_{n \in \mathbb{N}} \in \text{Cauchy}$  if  $\forall \varepsilon > 0 \exists N_0 \in \mathbb{N}$ .
    1. $\|x_n - x_m\| < \varepsilon \quad \forall n, m \geq N_0$ 
	2. $\sum_{n=1}^{\infty} x_n = x$  if  $\left| \sum_{n=1}^N x_n - x \right| \rightarrow 0$  as $N \rightarrow \infty$ .
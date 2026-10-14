---
course: Functional Analysis
Lecture: "6"
date: 6 August
---

Proof:

Since  $B$  is a basis of  $X$ , clearly  $L$  is bijective.  
Hence  $L^{-1}$  is well-defined.

to show:  $L$  is bdd


$$
\begin{aligned} \|L\lambda\|_X &= \left\| \sum_{i=1}^N \lambda_i x_i \right\| \leq \sum_{i=1}^N \|\lambda_i x_i\| \\ &= \sum_{i=1}^N \|\lambda_i\| \|x_i\| \\ &\leq \left( \sum_{i=1}^N \|\lambda_i\| \right) \left( \sum_{i=1}^N \|x_i\| \right) \\ &= M \|\lambda\|_{K^N} \end{aligned}
$$


 $\Rightarrow L$  is bdd.

to show:  $L^{-1}: X \rightarrow K^N$  is also bdd.

Suppose not then  $\exists$  a seq  $(y_n)_{n \in \mathbb{N}}$  in  $X$ 


$$
\|y_n\| \leq 1 \quad \forall n \quad \text{but the } \|L^{-1}y_n\|_{K^N} \rightarrow \infty
$$


Define  $\mu_n := \frac{L^{-1}y_n}{\|L^{-1}y_n\|_{K^N}} \in K^N$ 

Then  $\|\mu_n\|_{K^N} = 1$  and  $L\mu_n = \frac{y_n}{\|L^{-1}y_n\|_{K^N}}$ 

 $L\mu_n \rightarrow 0$

Since  $(\mu_n)_{n \in \mathbb{N}}$  is bed in  $K^N$ , it has a convergent subseq. by Bolzano-Weierstrass)  $(\mu_{n_k})_{k \in \mathbb{N}}$ .


$$
\mu_{n_k} \rightarrow \mu \quad \text{as } k \rightarrow \infty. \quad (\mu \in K^N)
$$



$$
\|\mu\| = \lim_{k \rightarrow \infty} \|\mu_{n_k}\| = 1.
$$



$$
\text{Now } L_\mu := L(L_{k \rightarrow \infty} \mu_{n_k})
$$



$$
= \lim_{k \rightarrow \infty} L_{\mu_{n_k}}
$$



$$
= \lim_{k \rightarrow \infty} \frac{y_{n_k}}{\|L^{-1} y_{n_k}\|}
$$



$$
= 0. \quad \Rightarrow \Leftarrow
$$


(since  $\|L^{-1} y_{n_k}\| \rightarrow \infty$ )  
 $\|L^{-1} y_{n_k}\| \rightarrow 0$ 

Not possible as  $\|\mu\| = 1$ .

 $\therefore L^{-1}$  is bed.

to show:  $X$  is complete

let  $(x_N)_{N \in \mathbb{N}} \subset X$  be cauchy.

 $\Rightarrow (L^{-1} x_n)_{n \in \mathbb{N}}$  is cauchy in  $K^N$ .


$$
L^{-1} x_n \rightarrow x \in K^N
$$



$$
x_n \rightarrow L\lambda \in X
$$


→ Corollary: Any 2 norms  $\|\cdot\|$  &  $\|\cdot\|'$  on a finite dim. NLS are equivalent.

Proof:

Let  $\beta = \{x_1, \dots, x_n\}$  be a basis of  $X$  and define the maps  $L$  &  $L^\dagger$  as above. (Previous thm).

Then both  $L$  &  $L^\dagger$  are bold, linear.  
 $\Rightarrow \exists$  constants  $C', C'' > 0$ .


$$
\frac{1}{C'} \|L^\dagger x\|_{K^N} \leq \|x\| \leq C' \|L^\dagger x\|_{K^N}.
$$

(bold of  $L^\dagger$ ) (bold of  $L$ )


$$
\frac{1}{C''} \|L^\dagger x\|'_{K^N} \leq \|x\|' \leq C'' \|L^\dagger x\|'_{K^N}
$$


Combining w.r.t. the equivalence of  $\|\cdot\|$  &  $\|\cdot\|'$ .

→ Compactness of  $\overline{B_1(0)}$  in  $\mathbb{R}^N \Leftrightarrow$  closed & bold.

Consider the space  $l_2$ , define.


$$
e_n = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}
$$

 $\uparrow$   
with


$$
\|e_n\|_2 = 1.
$$



$$
\|e_n - e_m\| = \sqrt{2}
$$


 $(e_n)_{n \in \mathbb{N}}$  can't be cancelly.

 $\Rightarrow \overline{B_1(0)}$  is not compact.

Let  $X$  be a NLS. Then  $X$  is finite dimensional  $\Leftrightarrow \overline{B_1(0)}$  is compact.  $(\Leftarrow) *$ 

(Locally compact NLS are finite dimension)

Proof:

Suppose  $X$  is finite dim.

Then by the previous theorem  $\exists$  a linear homeomorphism  $L: \mathbb{K}^n \rightarrow X$  with bold inverse.

Since  $\overline{B_1(0)}$  is closed & bold,  $L^{-1}(\overline{B_1(0)})$  is closed & bold.

By B.W.,  $L^{-1}(\overline{B_1(0)})$  is compact.

As  $L$  is unit.  $\overline{B_1(0)}$  is also compact.  
 $= L(L^{-1}(\overline{B_1(0)}))$ 

Conversely suppose  $\overline{B_1(0)}$  is compact.

to show:  $X$  is finite dim.

 $\Rightarrow \exists$  finitely many points  $x_1, \dots, x_n \in X$  s.t.  $\overline{B_1(0)} \subset \bigcup_{i=1}^n B_{1/2}(x_i)$ 

We claim that  $X = Y = \text{Span}\{x_1, \dots, x_n\}$ 

It is enough to show that  $\inf_{y \in Y} \|x - y\| = 0$ .

 $\Rightarrow x \in \bar{Y} = Y$  is finite dim & hence complete.

Let  $x \in X$ . If  $x \in Y$  then there is nothing to prove.

Suppose not, let  $y \in Y$ .

Take  $\vec{x} = \frac{x}{\|x - y\|}$  &  $\vec{y} = \frac{y}{\|x - y\|}$


$$
\vec{x} - \vec{y} \in \overline{B_1(0)}
$$


 $\Rightarrow \vec{x} - \vec{y} \in B_{1/2}(x_i)$  for some  $i = 1, \dots, n$  by the covering.


$$
\begin{aligned} \|x - (x - y)\| & = \|x - y\| \left\| \frac{x}{\|x - y\|} - (y + x_i) \right\| \\ & = \|(\vec{x} - \vec{y}) - x_i\| \|x - y\| \\ & \leq \frac{1}{2} \|x - y\| \end{aligned}
$$


Take  $y_1 = \|x - y\| (\vec{y} + x_i) \in Y$ .

For  $x \in X, y \in Y \quad \exists y_1 \in Y$  s.t.  $\|x - y\| < \frac{1}{2} \|x - y\|$ 

Take  $y = y_1$  to get  $y_2 \in Y$  at.


$$
\|x - y_2\| < \frac{1}{2} \|x - y_1\| < \frac{1}{2^2} \|x - y\|
$$


By induction  $\exists y_n \in Y$  s.t.


$$
\|x - y_n\| < \frac{1}{2^n} \|x - y\| \quad \text{or} \quad y_n \rightarrow x
$$



$$
\Rightarrow x \in Y.
$$



$$
\therefore x = y
$$


 $x$  is finite dim.

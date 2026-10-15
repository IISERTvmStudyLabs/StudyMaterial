---
course: Functional Analysis
Lecture: "5"
date: 4 August
---
**Examples:**

#  Diagonal operator on  $\mathbb{R}^p$   $1 \leq p \leq \infty$ .
Let  $(\lambda_k)_{k \in \mathbb{N}} \subset \mathbb{K}$  be arbitrary, define  
$$
Lx = L(x_1, \dots, x_k, \dots) = (x_1, x_1, \dots, x_k, x_k, \dots)
$$ 
$$
Lx = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 & \dots & 0 \\ & & \ddots & & & \\ & & & \lambda_k & \dots & 0 \\ & & & & & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ \vdots \\ x_k \\ \vdots \end{pmatrix}
$$
- If  $(\lambda_k)_{k \in \mathbb{N}}$  is bounded, then  $L$  is also bounded and  $\|L\| = \sup_{k \in \mathbb{N}} |\lambda_k|$ 
- If  $(\lambda_k)_{k \in \mathbb{N}}$  is not bounded,  $L$  is also not bounded.
 $L: \text{Dom } L \subsetneq l^p \rightarrow l^p$ 
Suppose  $\lambda_* = \sup_{k \in \mathbb{N}} |\lambda_k| < \infty$ .  $L$  maps to itself. and Let $1\leq p\leq \infty$,
$$
\begin{aligned}
 \|Lx\|_p &= \left( \sum_{k=1}^{\infty} |Lx_k|^p \right)^{1/p} \\
 &= \left( \sum_{k=1}^{\infty} |\lambda_k x_k|^p \right)^{1/p} \\
 &= \left( \sum_{k=1}^{\infty} (|\lambda_k| |x_k|)^p \right)^{1/p} \\
 &\leq \left( |\lambda_k|^p \sum_{k=1}^{\infty} |x_k|^p \right)^{1/p} \\
 &\leq \lambda_* \|x\|_p
 \end{aligned}
$$
$L$  is bounded  $\|L\| \leq \lambda_*$  when  $p = \infty$ 
$$
\begin{aligned}
 \|Lx\|_{\infty} &= \sup_{k \in \mathbb{N}} |Lx|_k = \sup_{k \in \mathbb{N}} |\lambda_k x_k| \\
 &\leq \lambda_* \sup_{k \in \mathbb{N}} |x_k| \\
 &= \lambda_* \|x\|_{\infty}
 \end{aligned}
$$
![](_page_21_Diagram_15.jpeg)

 $L$  is bounded  $\|L\| \leq \lambda_*$ 

- To show that :  $\|L\| \geq \lambda_*$ 
Take a particular element  $e_k = (0, \dots, \underset{k^{th} position}{1}, \dots, 0)$   
$\lVert e_{k} \rVert_{p} = 1$
$\|Le_k\| = \lambda_k e_k$  (eigen vectors of the map with eigenvalue  $\lambda_k$ )
$$
\|Le_k\| = |\lambda_k|
$$
$$
\|L\| \geq \|Le_k\|_p = |\lambda_k|
$$
Since it is true for  $k$  it is true for  $\sup_{k \in \mathbb{N}} |\lambda_k|$  also.
$$
\therefore \|L\| \geq \sup_{k \in \mathbb{N}} |\lambda_k|
$$
$$
\Rightarrow \|L\| = \sup_{k \in \mathbb{N}} |\lambda_k| = \lambda_*
$$
Suppose  $(\lambda_k)_{k \in \mathbb{N}}$  is unbounded
 $\Rightarrow \exists$  a subset  $(\lambda_{k_1})_{k \in \mathbb{N}}$  such that  $|\lambda_{k_1}| \rightarrow \infty$  as  $k \rightarrow \infty$ 
$$
\|Le_{k_1}\| = |\lambda_{k_1}| \rightarrow \infty \text{ as } k \rightarrow \infty
$$
But  $(e_{k_1})_{k \in \mathbb{N}}$  is bounded in  $\mathbb{R}_p$ .
Hence  $L$  is not bounded.
___
##  Derivative operator
$$
I = (0, 2\pi)
$$
Consider the continuous  $C_b(0, 2\pi)$  (bounded continuous function on  $(0, 2\pi)$ )

 $C_b(0, 2\pi)$  is Banach with respect to $\|\cdot\|_\infty$  (by uniform continuity)
$$
Lf = f'
$$
Let  $f_k(x) = \sin kx$   $x \in (0, 2\pi)$ 
$$
\|f_k\| = \sup_{x \in (0, 2\pi)} |f_k(x)| = 1
$$
$$
(Lf_k)(x) = k \cos(kx)
$$
$$
\|Lf_k\|_\infty = k \rightarrow \infty \text{ as } k \rightarrow \infty
$$
$$
\text{Dom } L = \{ f \in C_b(I) \mid f' \in C_b(I) \} \subsetneq C_b(I)
$$
___
**Exercise**:
1. Shift operator on  $L^p(\mathbb{R}^N)$   $1 \leq p \leq \infty$ 
Let  $a \in \mathbb{R}^N$  be fixed, and let
$$
(Laf)(x) = f(x-a)
$$
Show that  $La: L^p \rightarrow L^p$  is bounded linear  and $\|La\| = 1$ .
 $La$  is bijective.
2. Shift operator on  $l_p$   $1 \leq p \leq \infty$ .
$$
L_+(x_1, \dots, x_k, \dots) = (0, x_1, \dots)
$$
$$
L_-(x_1, \dots, x_k, \dots) = (x_2, x_3, \dots)
$$
Show that  $\|L_\pm\| = 1$ .
 $L_+$  is injective
 $L_-$  is subjective
3.  Multiplication operator
Let  $\Omega \subseteq \mathbb{R}^N$  and  $g: \Omega \rightarrow \mathbb{R}$  be bounded, measurable $g \in L^\infty(s)$ . Define  $M_g: L^p(s) \rightarrow L^p(\Omega)$ 
$$
(M_g f)(x) = g(x) f(x)
$$

Show that  $\|M_g\| = \|g\|_\infty$ 
4.  Integral operator
Let $X = C[0,1]$. Define
$$
(Lf)(x) = \int_0^x f(t) dt
$$
Show that  $\|L\| = 1$ .
___
# Finite dimensional normed linear spaces.

## Definition: 
Let  $X$  be a vector space. Then  2 norms  $\|\cdot\|$  &  $\|\cdot\|'$  on  $X$  are said to be equivalent if  $\exists C > 0$  such that
$$
\frac{1}{C} \|x\|' \leq \|x\| \leq C \|x\|' \quad \forall x \in X.
$$
Equivalent means give the same Cauchy sequence and topology.
$$
B_{x/C}^{'}(x) \subseteq B_x(x) \subseteq B_{xC}^{'}(x)
$$
**Remark**: In finite dimensions all norms are equivalent. But in infinite dimensions there can be many non-equivalent
$$
f_n(x) = x^n \quad [0,1].
$$
___
# Theorem
Let  $X$  be a finite dimensional Normed Linear Space over  $\mathbb{K}$  and let $B = \{x_1, \dots, x_n\}$  be a basis of  $X$ . Then
1.  $X$  is complete and hence Banach
2.  For every  $\lambda = (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n$  define
$$
L\lambda = \lambda_1 x_1 + \dots + \lambda_n x_n \in X,
$$
Then the linear map  $L: \mathbb{K}^n \rightarrow X$  is bijective & bounded, moreover the inverse map  $L^{-1}: X \rightarrow \mathbb{K}^n$  is also bounded.
In other words,  $X$  is homeomorphic to  $K^N$ 

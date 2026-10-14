---
course: Functional Analysis
Lecture: "5"
date: 4 August
---

 $\rightarrow$  Examples:

① Diagonal operator on  $\mathbb{R}^p$   $1 \leq p \leq \infty$ .

Let  $(\lambda_k)_{k \in \mathbb{N}} \subset \mathbb{K}$  be arbitrary, define  $Lx = L(x_1, \dots, x_k, \dots) = (x_1, x_1, \dots, x_k, x_k, \dots)$ 

$$Lx = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 & \dots & 0 \\ & & \ddots & & & \\ & & & \lambda_k & \dots & 0 \\ & & & & & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ \vdots \\ x_k \\ \vdots \end{pmatrix}$$

If  $(\lambda_k)_{k \in \mathbb{N}}$  is bold, then  $L$  is also bold and  $\|L\| = \sup_{k \in \mathbb{N}} |\lambda_k|$ 

If  $(\lambda_k)_{k \in \mathbb{N}}$  is not bold,  $L$  is also not bold.

 $L: \text{Dom } L \hookrightarrow \mathbb{R}^p \rightarrow \mathbb{R}^p$ 

Suppose  $\lambda_* = \sup_{k \in \mathbb{N}} |\lambda_k| < \infty$ .  $L$  maps to itself.

$$\begin{aligned}
 \|Lx\|_p &= \left( \sum_{k=1}^{\infty} |Lx_k|^p \right)^{1/p} \\
 &= \left( \sum_{k=1}^{\infty} |\lambda_k x_k|^p \right)^{1/p} \\
 &= \left( \sum_{k=1}^{\infty} (|\lambda_k| |x_k|)^p \right)^{1/p} \\
 &\leq \left( |\lambda_k|^p \sum_{k=1}^{\infty} |x_k|^p \right)^{1/p} \\
 &\leq \lambda_* \|x\|_p
 \end{aligned}$$

 $L$  is bold  $\|L\| \leq \lambda_*$  when  $p = \infty$ 

$$\begin{aligned}
 \|Lx\|_{\infty} &= \sup_{k \in \mathbb{N}} |Lx_k|_k = \sup_{k \in \mathbb{N}} |\lambda_k x_k| \\
 &\leq \lambda_* \sup_{k \in \mathbb{N}} |x_k| \\
 &= \lambda_* \|x\|_{\infty}
 \end{aligned}$$

![](_page_21_Diagram_15.jpeg)

 $L$  is bold  $\|L\| \leq \lambda_*$ 

to show that :  $\|L\| \geq \lambda_*$ 

Take a particular element  $e_k = (0, \dots, 1, \dots, 0)$   
 $e_k$  is a particular element of the map with eigenvalue  $\lambda_k$  and  $e_k$  is a positive vector of  $e_k$  in  $\mathbb{R}^{n_k}$ 

 $\|e_k\|_p = \lambda_k \|e_k\|_{\infty}$  (eigen vectors of the map with eigenvalue  $\lambda_k$ )

$$\|Le_k\| = |\lambda_k|$$

$$\|L\| \geq \|Le_k\|_p = |\lambda_k|$$

Since it is true for  $k$  it is true for  $\sup_{k \in \mathbb{N}} |\lambda_k|$  also.

$$\therefore \|L\| \geq \sup_{k \in \mathbb{N}} |\lambda_k|$$

$$\Rightarrow \|L\| = \sup_{k \in \mathbb{N}} |\lambda_k| = \lambda_*$$

Suppose  $(\lambda_k)_{k \in \mathbb{N}}$  is unbold

 $\Rightarrow \exists$  a subseq.  $(\lambda_{k_1})_{k \in \mathbb{N}}$  s.t.  $|\lambda_{k_1}| \rightarrow \infty$  as  $k \rightarrow \infty$ 

$$\|Le_{k_1}\| = |\lambda_{k_1}| \rightarrow \infty \text{ as } k \rightarrow \infty$$

But  $(e_{k_1})_{k \in \mathbb{N}}$  is bold in  $\mathbb{R}_p$ .

Hence  $L$  is not bold.

## ② Derivative operator

$$I = (0, 2\pi)$$

Consider the cont.  $C_b(0, 2\pi)$  (bold cont. fun on  $(0, 2\pi)$ )

 $C_b(0, 2\pi)$  is Banach w.r.t  $\|\cdot\|_\infty$  (by uniform continuity)

$$Lf = f'$$

Let  $f_k(x) = \sin kx$   $x \in (0, 2\pi)$ 

$$\|f_k\| = \sup_{x \in (0, 2\pi)} |f_k(x)| = 1$$

$$(Lf_k)(x) = k \cos(kx)$$

$$\|Lf_k\|_\infty = k \rightarrow \infty \text{ as } k \rightarrow \infty$$

$$\text{Dom } L = \{ f \in C_b(I) \mid f' \in C_b(I) \} \subsetneq C_b(I)$$

Exercise:

① Shift operator on  $L^p(\mathbb{R}^N)$   $1 \leq p \leq \infty$ 

Let  $a \in \mathbb{R}^N$  be fixed, and let

$$(Laf)(x) = f(x-a)$$

Show that  $La: L^p \rightarrow L^p$  is bold linear.  $\|La\| = 1$ .

 $La$  is bijective.

② Shift operator on  $l_p$   $1 \leq p \leq \infty$ .

$$L_+(x_1, \dots, x_k, \dots) = (0, x_1, \dots)$$

$$L_-(x_1, \dots, x_k, \dots) = (x_2, x_3, \dots)$$

Show that  $\|L_+\| = 1$ .

 $L_+$  is bijective

 $L_-$  is subjective

③ Multiplication operator

Let  $s \in \mathbb{R}^N$  and  $g: s \rightarrow \mathbb{R}$  be bold, measurable  
 $g \in L^\infty(s)$ . Define  $M_g: L^p(s) \rightarrow L^p(s)$ 

$$(M_g f)(x) = g(x) f(x)$$

Show that  $\|M_g\| = \|g\|_\infty$ 

④ Integral operator

$$(Lf)(x) = \int_0^x f(t) dt$$

Show that  $\|L\| = 1$ .

→ Finite dimensional normed linear spaces.

Def<sup>n</sup>: Let  $X$  be a vector space. Then  $\mathbb{I}$  means  $\|\cdot\|$  &  $\|\cdot\|'$  on  $X$  are said to be equivalent if  $\exists C > 0$  s.t.

$$\frac{1}{C} \|x\|' \leq \|x\| \leq C \|x\|' \quad \forall x \in X.$$

Equivalent means give the same Cauchy seq. and topology.

$$B_{x/C}^1(x) \subseteq B_x(x) \subseteq B_{xC}^1(x)$$

→ Remark: In finite dimensions all norms are equivalent.

but in infinite dimensions there can be many non-equivalent

$$f_n(x) = x^n \quad [0,1].$$

→ Theorem:

Let  $X$  be a finite dimensional NLS over  $\mathbb{K}$  and let

 $B = \{x_1, \dots, x_n\}$  be a basis of  $X$ . Then

①  $X$  is complete and hence Banach

② For every  $\lambda = (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n$  define

$$L\lambda = \lambda_1 x_1 + \dots + \lambda_n x_n \in X,$$

Then the linear map  $L: \mathbb{K}^n \rightarrow X$  is bijective & bold moreover the inverse map  $L^{-1}: X \rightarrow \mathbb{K}^n$  is also bold.

In other words,  $X$  is homeomorphic to  $K^N$ 

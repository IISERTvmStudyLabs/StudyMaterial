
Cont. of examples of Banach spaces.
2. **Sequence space**
For  $1 \leq p < \infty$ , let  $l_p$  denote the set of all real (complex) seq. $x = (x_n)_{n \in \mathbb{N}}$  for which  $\sum_{n=1}^{\infty} |x_n|^p < \infty$  (p-summable seq.)
For  $x \in l_p$ , define
$$
\|x\|_p = \left( \sum_{n=1}^{\infty} |x_n|^p \right)^{1/p}
$$
 $x, y \in l_p$  by [[Lecture 2#Lemma (Minkowski's inequality)|Minkowski]]  $\forall n \in \mathbb{N}$ .
$$
\left( \sum_{k=1}^n |x_k + y_k|^p \right)^{1/p} \leq \left( \sum_{k=1}^n |x_k|^p \right)^{1/p} + \left( \sum_{k=1}^n |y_k|^p \right)^{1/p}
$$
$$
\|x + y\|_p \leq \|x\|_p + \|y\|_p
$$
For  $p = \infty$  the set of all bounded sequences $l_{\infty}$ is the set of all seq.  $x = (x_n)_{n \in \mathbb{N}}$ 
$$
\|x_n\|_\infty = \sup_{k \in \mathbb{N}} |x_k| < \infty
$$
 $(l_p, \|l_p\|)$  and  $(l_\infty, \|l_\infty\|)$  are Banach.
___
3. **Function space**.
Let  $C[0,1]$  be the set of all continuous function on  $[0,1]$ . Define,
$$
\|f\|_\infty = \sup_{x \in [0,1]} |f(x)|.
$$
$(f_n)_{n \in \mathbb{N}} \subset C[0,1]$  is Cauchy  ,$\forall \varepsilon > 0 \exists \;,\; N_0 \in \mathbb{N}$  such that
$$
\|f_n - f_m\|_\infty < \varepsilon \quad \forall n, m \geq N_0
$$
For every  $x \in [0,1]$ 
$$
|f_n(x) - f_m(x)| \leq \sup_{x \in [0,1]} |f_n(x) - f_m(x)|
$$
$$
= \|f_n - f_m\|
$$
$$
< \varepsilon.
$$
$\therefore (f_n(x))_{n \in \mathbb{N}}$  is a uniformly Cauchy.
 $\Rightarrow$  For each  $x \in [0,1]$,   $(f_n(x))$  converges sequence of  $f(x)$ .
$$
f(x) = \lim_{n \rightarrow \infty} f_n(x). \quad x \in [0,1]
$$
$$
|f_n(x) - f(x)| = |f_n(x) - f_m(x) + f_m(x) - f(x)|
$$
$$
\leq |f_n(x) - f_m(x)| + |f_m(x) - f(x)|
$$
$$
|f_n(x) - f_m(x)| < \frac{\varepsilon}{2} \quad \forall n, m \geq N_0 \in \mathbb{N}. \quad (\text{depends on } \varepsilon)
$$
$$
|f_m(x) - f(x)| < \frac{\varepsilon}{2} \quad \forall m \geq N_0 \quad (\text{depends on } \varepsilon \text{ \& } x)
$$
$$
|f_n(x) - f(x)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$
$$
\implies f_{n}(x) \to f(x) \quad\text{uniformly}
$$
Hence $f(x)$ is continuous function.
___
Consider $C[0,1]$, define:-
$$
\|f\| = \sup_{x \in [0,1]} |f(x)| + \sup_{x \in [0,1]} |f'(x)|.
$$
(show that  $\|f\|$  is norm).

Let  $x \in \mathbb{R}^n$  be open. Let  $L^p(\mathbb{R})$  be the set of all measurable functions  $f: \Omega \rightarrow \mathbb{R}$  such that 
$$
\int_{\Omega} |f(x)|^p dx < \infty ,\quad 1 \leq p < \infty
$$
$$
\|f\|_p = \left( \int_{\mathbb{R}} |f(x)|^p dx \right)^{1/p}
$$
$$
\|f\|_{\infty} = \underset{\Omega}{\operatorname{ess\,sup}} |f(x)| \quad \text{for } L^{\infty}(\Omega).
$$



**Remark**: It is possible that a vector space is complete with respect to one norm and not complete with respect to another norm.
*Example*:
Let  $X := \text{set of all poly. on } [0,1]$ . Consider the 2 norms  $\|\cdot\|_\infty$  &  $\|\cdot\|_1$ .
$$
f_n(x) = x^n \quad x \in [0,1].
$$
$$
\begin{aligned} \|f_n\|_1 &= \int_0^1 |f_n(x)| dx \\ &= \int_0^1 x^n dx \\ &= \frac{x^{n+1}}{n+1} \Big|_0^1 = \frac{1}{n+1} \end{aligned}
$$
$$
\|f_n\|_1 \rightarrow 0 \text{ as } n \rightarrow \infty.
$$
$$
f_n \rightarrow 0 \text{ wat } \|\cdot\|_1.
$$
$$
\|f_n\|_\infty = \sup_{x \in [0,1]} |f_n(x)| = 1 \quad \forall n
$$
$\therefore f_n$  doesn't converge in  $\mathbb{L}^\infty$ .

![](_page_13_Figure_11.jpeg)

  
# Definition: (Continuous) 
Let  $(X, \|\cdot\|_X)$  and  $(Y, \|\cdot\|_Y)$  be two normed linear spaces over the same field  $\mathbb{K}$ .
1. A  function $f: X \rightarrow Y$  is called continuous on  $X$  if  $\forall x_0 \in X \quad \forall \varepsilon > 0 \quad \exists \\delta > 0$  such that
$$
\|x - x_0\|_X < \varepsilon \Rightarrow \|f(x) - f(x_0)\|_Y < \varepsilon
$$
$$
\iff x_n \rightarrow x_{0}  \text{ in }  X \Rightarrow f_n(x) \rightarrow f(x_0)
$$
  in  $Y$ .
2. We say that  $f$  is bounded if it maps bounded sets in  $X$  to bounded sets in  $Y$ .
3.  $L: \text{Dom } L \subseteq X \rightarrow Y$  is called linear if  
$$
L(x+y) = Lx + Ly \quad \forall x, y \in \text{Dom } L
$$
$$
L(\lambda x) = \lambda Lx \quad \forall x \in \text{Dom } L \quad \forall \lambda \in \mathbb{K}
$$ 
 - $\text{Dom } L \subseteq X$  is called the domain of  $L$  or subspace of  $X$ .
 - $\text{Range } L := \{y \in Y \mid y = Lx \text{ for some } x \in \text{Dom } L\}$ is called the range of  $L$  or the image of  $L$
- ( $\text{Im } L$ ) a subspace of  $Y$ .
- Ker  $L = \{x \in X : \langle x = 0 \rangle\}$  the kernel or the null space of  $L$  a subspace of  $X$ .
___
## Proposition
Let  $L: X \rightarrow Y$  be linear  $\text{Dom } L = X$ . Then  $L$  is bounded  $\Leftrightarrow$ 
$$
\|L\| := \sup_{\|x\|_X \leq 1} \|Lx\|_Y < \infty
$$
#### Proof
$L$  is bounded  $\Rightarrow \|L\| < \infty$ 
Conversely suppose  $\|L\| < \infty$ ,
to prove :  $L$  is bounded.
$$
\|L\| = \sup_{\|x\|_X \leq 1} \|Lx\|_Y < \infty.
$$
For any  $x \in X$  ( $x \neq 0$ ),
$$
\|Lx\|_Y = \|L\left( \|x\|_X \times \frac{x}{\|x\|_X} \right)\|_Y
$$
$$
= \|x\|_X \|L\left( \frac{x}{\|x\|_X} \right)\|_Y
$$
$$
\leq \|L\|_Y \|x\|_X \quad (\text{since } \frac{x}{\|x\|_X} = 1)
$$
 $\forall x \in X \quad x \neq 0$ .
$$
\|Lx\|_Y \leq \|L\|_Y \|x\|_X
$$
and for  $x=0$  it is trivial
 $\Rightarrow L$  maps bounded sets in  $X$  to bounded sets in  $Y$ or it is bounded.

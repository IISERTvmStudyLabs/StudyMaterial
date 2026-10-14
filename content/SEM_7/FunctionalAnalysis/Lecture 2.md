

28/07

→ A seq  $(x_n)_{n \in \mathbb{N}} \subset X$  converges to  $x \in X$  if  $\|x_n - x\| < \varepsilon \quad \forall n \geq N_0$ 

A sequence  $(x_n)_{n \in \mathbb{N}} \subset X$  is Cauchy if  $\forall \varepsilon > 0 \exists N_0 \in \mathbb{N}$  s.t.

 $\|x_n - x_m\| < \varepsilon \quad \forall n, m \geq N_0$ .

→ Def<sup>n</sup>:  $X$  is a vector space


$$
\left\{ \begin{array}{l} x, (\cdot, \cdot)_x \\ x, \|\cdot\|_x \\ x, d(\cdot, \cdot) \end{array} \right\} \text{ is called } \left\{ \begin{array}{l} \text{Hilbert} \\ \text{Banach} \\ \text{Fréchet} \end{array} \right\} \text{ space.}
$$


if every Cauchy seq in  $X$  converges in  $X$ .

## Examples of Banach spaces

-  Finite dimensional spaces
-  Sequence spaces
-  Fun<sup>c</sup> spaces.

① On  $\mathbb{R}^N$  define the euclidean norm.


$$
\|x\| = \sqrt{|x_1|^2 + \dots + |x_N|^2}
$$


In general for  $1 \leq p \leq \infty$  define


$$
\|x\|_p = \begin{cases} (|x_1|^p + \dots + |x_N|^p)^{1/p} & 1 \leq p < \infty \\ \max_{1 \leq i \leq N} |x_i| & \end{cases}
$$


 $\|\cdot\|_p$  is a norm on  $\mathbb{R}^N$  for  $1 \leq p \leq \infty$  and  $\mathbb{R}^N$  is Banach w.r.t  $\|\cdot\|_p$   $1 \leq p \leq \infty$ 

→ To show that  $\|\cdot\|_p$  is a norm, it is enough to verify (N3) as (N1) & (N2) are straight forward.

The case  $p = \infty$  is easy.


$$
\begin{aligned} \text{If } |x_i + y_j| &\leq |x_i| + |y_j| \\ &\leq \max_{1 \leq i \leq N} |x_i| + \max_{1 \leq i \leq N} |y_j| \\ &= \|x\|_\infty + \|y\|_\infty \end{aligned}
$$



$$
\begin{aligned} \Rightarrow \|x + y\|_\infty &= \max_{1 \leq i \leq N} |x_i + y_j| \\ &\leq \|x\|_\infty + \|y\|_\infty \end{aligned}
$$


To show  $\Delta$  ineq. we require the following:

→ Lemma: (Young's Inequality)

Let  $x, y$  be non-neg. real numbers. Let  $p > 1$  and let  $q$  be defined by


$$
\frac{1}{p} + \frac{1}{q} = 1.
$$


Then  $xy \leq \frac{x^p}{p} + \frac{y^q}{q}$ 

Proof:

let  $y > 0$  be fixed and consider the func


$$
f(x) = \frac{x^p}{p} + \frac{y^q}{q} - xy \quad x \in (0, \infty)
$$



$$
f'(x) = x^{p-1} - y \quad (\therefore y \text{ is fixed})
$$



$$
f''(x) = (p-1)x^{(p-2)}
$$


The critical points are given by


$$
f'(x_0) = x_0^{p-1} - y = 0
$$



$$
\Rightarrow x_0^{p-1} = y
$$



$$
\Rightarrow x_0 = y^{1/(p-1)}
$$



$$
f''(x_0) > 0.
$$


 $\therefore$   $f$  attains its minimum at  $x_0$  and the min. value is


$$
f(x_0) = \frac{y^{p/(p-1)}}{p} + \frac{y^q}{q} - y^{\frac{1}{p-1}+1}
$$



$$
f(x_0) = \frac{y^q}{p} + \frac{y^q}{q} - y^q
$$



$$
\left( \frac{1}{p} + \frac{1}{q} = 1 \quad q = p/(p-1) \right)
$$



$$
= y^q \left( \frac{1}{p} + \frac{1}{q} - 1 \right)
$$



$$
= 0
$$


 $\Rightarrow f(x) \geq 0 = f(x_0)$  is the required inequality

 $\rightarrow$  Lemma: (Hölder's inequality)

For any  $a, b \in \mathbb{R}^n$ 


$$
\sum_{i=1}^N |a_i \cdot b_i| \leq \|a\|_p \cdot \|b\|_q \quad \text{where } \frac{1}{p} + \frac{1}{q} = 1.
$$

if  $1 < p < \infty$  and  
 $q = \infty$  if  $p = 1$ .

 $q$  is called the Hölder conjugate.

Proof:

When  $p = 1$  &  $q = \infty$ 


$$
\begin{aligned} \sum_{i=1}^N |a_i \cdot b_i| &= \sum_{i=1}^N |a_i| \|b_i\| \\ &\leq \sum_{i=1}^N |a_i| \max_{1 \leq i \leq N} |b_i| \\ &\leq \|a\|_1 \|b\|_\infty \end{aligned}
$$


Let  $1 < p < \infty$   $\frac{1}{p} + \frac{1}{q} = 1$ .

Take  $x = \frac{|a_i|}{\|a\|_p}$   $y = \frac{|b_i|}{\|b\|_q}$  in Young's inequality to get


$$
\frac{|a_{i1}|}{\|a\|_p} \cdot \frac{|b_{i1}|}{\|b\|_q} \leq \frac{1}{p} \left( \frac{|a_{i1}|}{\|a\|_p} \right)^p + \frac{1}{q} \left( \frac{|b_{i1}|}{\|b\|_q} \right)^q \quad \forall i = 1, \dots, N.
$$


Take sum over  $i = 1, \dots, N$ .


$$
\begin{aligned} \frac{\sum |a_{i1}|}{\|a\|_p \|b\|_q} &\leq \frac{1}{p} \frac{\sum_{i=1}^N |a_{i1}|^p}{\|a\|_p^p} + \frac{1}{q} \frac{\sum_{i=1}^N |b_{i1}|^q}{\|b\|_q^q} \\ &= \frac{1}{p} \frac{\|a\|_p^p}{\|a\|_p^p} + \frac{1}{q} \frac{\|b\|_q^q}{\|b\|_q^q} \\ &= \frac{1}{p} + \frac{1}{q} = 1. \end{aligned}
$$



$$
\therefore \sum_{i=1}^N |a_i \cdot b_i| \leq \|a\|_p \|b\|_q.
$$


→ lemma: (Minkowski's inequality)

For  $1 \leq p \leq \infty$ 


$$
\|a + b\|_p \leq \|a\|_p + \|b\|_p \quad a_i b_i \in \mathbb{R}^N \quad \text{where } 1 \leq p < \infty
$$


Proof:


$$
\begin{aligned} \sum_{i=1}^N |a_i + b_i|^p &= \sum_{i=1}^N |a_i + b_i| |a_i + b_i|^{p-1} \\ &\leq \sum_{i=1}^N |a_i| |a_i + b_i|^{p-1} + |b_i| |a_i + b_i|^{p-1} \end{aligned}
$$



$$
\begin{aligned} \sum_{i=1}^N |a_i| |a_i + b_i|^{p-1} &\leq \left( \sum_{i=1}^N |a_i|^p \right)^{1/p} \left( \sum_{i=1}^N |a_i + b_i|^q (p-1) \right)^{1/q} \\ &= \|a\|_p \left( \sum_{i=1}^N |a_i + b_i|^p \right)^{1/q} \\ &= \|a\|_p \|a + b\|_p^{p/q} \end{aligned}
$$


Similarly,


$$
\sum_{i=1}^N |b_{i1}| |a_{i1} + b_{i2}|^{p-1} \leq \|b\|_p \|a + b\|_p^{p/q}
$$



$$
q = \frac{p}{q}
$$



$$
\|a + b\|_p^p \leq \|a\|_p \|a + b\|_p^{p/q} + \|b\|_p \|a + b\|_p^{p/q}
$$



$$
\|a + b\|_p \leq \|a\|_p + \|b\|_p
$$


![](_page_9_Picture_20.jpeg)


$$
\begin{aligned} \|a + b\|_p^p &\leq (\|a\|_p + \|b\|_p)^{p/q} + (\|a\|_p + \|b\|_p)^{q/p} \\ \|a + b\|_p^{p/q} &\leq (\|a\|_p + \|b\|_p)^{q/p} \\ \|a + b\|_p^{q/p} &\leq (\|a\|_p + \|b\|_p)^{q/p} \\ \|a + b\|_p &= p^{-1/q} \cdot (\|a\|_p)^{q/p} \\ &= p^{-1/q} \cdot \frac{\|a\|_p}{\|b\|_p} = p^{-1/q} \cdot \frac{\|a\|_p}{\|b\|_p} \\ &= (\|a\|_p + \|b\|_p)^{q/p} \end{aligned}
$$


→ The unit ball of  $\mathbb{R}^2$  with  $\|\cdot\|_p$ 


$$
\|x\|_1 = |x_1| + |x_2|
$$



$$
\|x\|_2 = (|x_1|^2 + |x_2|^2)^{1/p}
$$



$$
\|x\|_\infty = \max_{i=1,2} \{ |x_i| \}
$$


![](_page_9_Figure_26.jpeg)

( $\mathbb{R}^N, \|\cdot\|_p$ ) is Banach for  $1 \leq p \leq \infty$ .

Let  $(x^n)_{n \in \mathbb{N}}$  be cancley in  $\mathbb{R}^N$ 

For  $1 \leq i \leq N$   $|x_i| \leq \|x\|_p$ 

⇒  $(x_i^n)_{n \in \mathbb{N}}$  is cancley in  $\mathbb{R}$  for  $1 \leq i \leq N$ .


$$
\Rightarrow x_i^n \rightarrow x_i
$$



$$
\Rightarrow x^n \rightarrow x := (x_1, \dots, x_N)
$$


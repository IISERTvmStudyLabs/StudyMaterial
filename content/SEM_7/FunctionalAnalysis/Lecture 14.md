---
course: Functional Analysis
Lecture: "14"
date: 31 August
---
#  Weak and Weak\* convergence

A bold sequence in a finite dimensional NLS has a converging subseq.  
 $(x_n)_{n \in \mathbb{N}} \subset X_1$  finite dimensional, bold


$$
\sup_{n \in \mathbb{N}} \|x_n\| \leq C < \infty
$$


Does it hold in infinite dimensions?

 $X = \mathbb{I}_2$  - square summable sequences.


$$
e_n = (0, \dots, 1, \dots)
$$



$$
\|e_n\|_2 = 1
$$


 $\Rightarrow (e_n)$  is bold in  $\mathbb{I}_2$ .


$$
\|e_n - e_m\| = \sqrt{2} \quad n \neq m.
$$


 $\Rightarrow (e_n)$  cannot have a convergent subsequence.

 $x_n \rightarrow x$  in a NLS  $X$ ,  $\|x_n - x\| \rightarrow 0$  as  $n \rightarrow \infty$  (strong/norm convergence)

 $x_n$  is getting closer to  $x$  in norm. as  $n \rightarrow \infty$ .

We consider  $(\phi(x_n))_{n \in \mathbb{N}}$  for every  $\phi \in X^*$ .

Does  $\phi(x_n) \rightarrow \phi(x) \neq \phi \in X^*$ ?


$$
\begin{aligned} |\phi(x_n) - \phi(x)| &= |\phi(x_n - x)| \\ &\leq \|\phi\|_{X^*} \|x_n - x\|_X \\ &< C \|x_n - x\|_X \rightarrow 0 \text{ as } n \rightarrow \infty. \end{aligned}
$$


Eg:  $f_n(x) = \sin(nx)$   $\rightarrow$  oscillating seq.  
 $x \in (0, 2\pi)$ 

Doesn't converge pointwise.


$$
x = L^2 \quad \|f_n\|_2 = \sqrt{n} \quad \text{can't converge}
$$


in  $L^2$ 

![](_page_17_Figure_18.jpeg)

 $\Rightarrow$  Consider  $\frac{2\pi}{n} \int_0^{2\pi} f_n(x) g(x) dx \quad \forall \quad g \in L^2(0, 2\pi)$ 

Take  $g = S = \chi_{[a, b]}$ ,  $[a, b] \subset [0, 2\pi]$ 


$$
\int_a^b f_n(x) s(x) dx = \int_a^b \sin(nx) dx = - \left[ \frac{\cos(nb) - \cos(na)}{n} \right]
$$



$$
\left| \int_0^{2\pi} f_n(x) s(x) dx \right| \leq \frac{2}{n} \rightarrow 0 \quad \text{as } n \rightarrow \infty.
$$



$$
S(x) = \sum_{i=1}^k c_i \chi_{[a_i, b_i]}
$$



$$
\int_0^{2\pi} f_n(x) s(x) dx \rightarrow 0 \quad \text{as } n \rightarrow \infty
$$


If  $g \in L^2(0, 2\pi)$  and  $S > 0$ , choose a simple function  $S$  s.t.


$$
\|g - s\|_2 < \varepsilon
$$



$$
\int_0^{2\pi} f_n(x) g(x) dx = \int_0^n f_n(x) (g(x) - s(x)) dx + \int_0^{2\pi} f_n(x) s(x) dx
$$



$$
\begin{aligned} \left| \int_0^{2\pi} f_n(x) g(x) dx \right| &= \left| \int_0^{2\pi} f_n(x) (g(x) - s(x)) dx + \int_0^{2\pi} f_n(x) s(x) dx \right| \\ &\leq \int_0^{2\pi} \left| f_n(x) (g(x) - s(x)) \right| dx + \int_0^{2\pi} |f_n(x) s(x)| dx \end{aligned}
$$



$$
\leq \int_0^{2\pi} |f_n| |g-s| dx + \int_0^{2\pi} |f_n| |s| dx
$$



$$
\leq \|f_n\|_2 \|g-s\|_2 + s \rightarrow 0 \text{ as } n \rightarrow \infty
$$


 $f_n \rightarrow 0$  weakly in  $L^2(0, 2\pi)$   $f$  periodic in  $(0, T)$ .


$$
f_n(x) = f(nx)
$$



$$
f_n \rightarrow \frac{1}{T} \int_0^T f(s) ds \quad \text{--- average.}
$$


 $\rightarrow$  Def:

① A sq  $(x_n)_{n \in \mathbb{N}}$  in a NLS  $X$  converges **weakly** to  $x$  in  $X$ ,  
 $x_n \rightarrow x$  in  $X$ , if  $\phi(x_n) \rightarrow \phi(x) \forall \phi \in X^*$ 

(weaker than usual convergence in dual)

② A sq  $(\phi_n)_{n \in \mathbb{N}} \subset X^*$  converges **weakly-\*** to  $\phi$  in  $X^*$ 


$$
\phi_n \xrightarrow{*} \phi \text{ in } X^*, \text{ if } \phi(x_n) \rightarrow \phi(x) \forall x \in X
$$

(private  $x$  convergence)

(in  $X^* \exists \phi \mapsto \phi(x) \in \mathbb{K} \quad x \in \mathbb{K}$ ) (fully for a particular case: linear function in dual)

Eg:

①  $f_n(x) = \min(nx) \quad x \in (0, 2\pi)$ 

Then  $f_n \rightarrow 0$ 

②  $f_n(x) = \text{sign}(\sin(nx))$  (simple function proof).

③  $X = \mathbb{C}$  sequence converging to zero. wet  $\| \cdot \|_\infty$ .


$$
x^* = l_1
$$



$$
e_n = (0, \dots, 1, \dots, 0)
$$


Does  $e_n \rightarrow 0$  in  $X$ ?


$$
\phi \in X^* = l_1 \quad \phi = (x_n)_{n \in \mathbb{N}} \in l_1.
$$



$$
\begin{aligned} \phi(e_n) &= \sum_{k=1}^{\infty} e_n^{(k)} x_k = x_n \\ \sum_{k=1}^{\infty} |x_k| &< \infty \quad (\text{since } \phi \text{ is in } l_1). \end{aligned}
$$



$$
|\phi(e_n)| = |x_n| \rightarrow 0 \quad \text{as } n \rightarrow \infty.
$$


 $\therefore e_n \rightarrow 0$  in  $G$ .


$$
\|e_n\|_{\infty} = 1 \neq 0.
$$


 $(e_n)_{n \in \mathbb{N}} \subset l_1$  Does  $e_n \xrightarrow{*} 0$  in  $l_1$ 


$$
\begin{aligned} e_n(x) &= \langle e_n, x \rangle & (e_n \rightarrow 0 \text{ in } l_1) & (X^* = l_{\infty}) \\ &= \sum_{i=1}^{\infty} e_n^{(i)} x_i. \end{aligned}
$$


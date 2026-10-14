---
course: Functional Analysis
Lecture: "11"
date: 18 August
---
 $\rightarrow f \in V' \quad f: V \rightarrow K \quad \text{beld } \exists F \in X' \quad F: X \rightarrow K , \text{ beld } f = F|_V = f$ 

 $\|F\| = \|f\|$  - norm preserving extension.

Hahn-Banach  $\rightarrow$  the existence of non-zero beld linear functions in particular for a finite dim. NLS.

$B = \{x_1, \dots, x_N\}$  - basis of  $X$ .

 $f(x_1) = a_1$ ,  $f(x_2) = a_2, \dots, f(x_N) = a_N$ 

 $a_1, \dots, a_N \in \mathbb{K}$ . Then  $f$  is known  $f \in X^1$ .

→ Corollary 1:

Let  $X$  be Banach. For every  $x \in X$ ,  $\exists$  a cont linear functional  $f_a: X \rightarrow \mathbb{K}$  s.t.  $f_x(x) = \|x\|$  &  $\|f_x\| = 1$ 

(since its max is 1 it is a non-zero linear bed of  $\text{func}$ )

 $f_x \in X^1 = \mathcal{L}(X, \mathbb{K})$  - dual.

Proof:

Let  $x \in X$ , given. Define


$$
v := \{\lambda x \mid \lambda \in \mathbb{K}\}. \quad (\text{scalar multiples of } x)
$$


Define  $f: V \rightarrow \mathbb{K}$  as  $f(\lambda x) := \lambda \|x\|$ .

If  $\lambda x = y \in V$ , then  $\|y\| = \|\lambda x\| = \|x\|$ .


$$
|f(y)| = |f(\lambda x)|
$$



$$
= \|\lambda\| \|x\|
$$



$$
= \|y\| \quad \forall y \in V
$$



$$
\Rightarrow \|f\| \leq 1 \quad \text{but} \quad \|f\| = 1 \quad (\text{for } \lambda = 1)
$$


By Mahn-Banach  $f$  an extension

$f_x: X \rightarrow \mathbb{K}$  of  $f$  s.t.  $\|f_x\| = \|f\| = 1$ .


$$
f_x(x) = f(x) = \|x\|.
$$


If  $x \in X$ ,  $f \in X'$  we have


$$
|f(x)| \leq \|f\|_X \|x\|_X
$$


 $\therefore$  If  $f \in X'$  and  $\|f\|_X = 1$ . then


$$
|f(x)| \leq \|x\|_X
$$



$$
\begin{aligned} \Rightarrow \sup_{f \in X'} |f(x)| &\leq \|x\| \\ \|f\| &\leq 1 \end{aligned}
$$


By carollary  $\perp$   $\exists f_x \in X'$   $\|f_x\|_X = 1$ .


$$
\text{and } \|f_x(x)\| = \|x\|
$$



$$
\text{Hence } \sup_{f \in X'} |f(x)| = \|x\| \quad \text{—————} (**) \quad \text{(consequence of Halm-Bonach)}
$$



$$
\|f\|_{X'} \leq 1
$$



$$
\|f\| = \sup_{x \in X} |f(x)| \quad (\text{def} \text{ of } \|f\|). \quad \text{—————} (*)
$$



$$
\|x\|_{X'} \leq 1
$$


(\*\*) - like the dual of (\*).

→ Worlday 2:

Let  $X$  be Banach. For any 2 vectors  $x, y \in X$ ,  $x \neq y \exists$  a bold linear functional  $f \in X^1$  s.t.  $f(x) \neq f(y)$ .

Proof: Since  $x \neq y$ ,  $z = x - y \neq 0$ .

 $\exists f \in X^1$  s.t.  $\|f\| = 1$  and  $f(z) = \|z\| \neq 0$ 

ie  $f(x-y) \neq 0$  or  $f(x) \neq f(y)$ .

→ Hahn-Banach  $\Rightarrow$  Richman of the dual  $\Rightarrow$  distinct points can be separated.

Q: Can we separate 2 subsets of  $X$ ?

(Hahn-Banach separation thm<sup>n</sup> - geometrie)


$$
X = \mathbb{R}^2
$$



$$
C = \text{closed unit disc} \\ = \{(x,y) \in \mathbb{R}^2 \mid x^2+y^2 \leq 1\}
$$


Choose  $(2,0) \notin C$ 

![](_page_3_Figure_28.jpeg)


$$
f: \mathbb{R}^2 \rightarrow \mathbb{R}
$$


separated  $C \notin (2,0)$  using Hyperplane.

 $f(x,y) = x$   $f$  is linear and cont<sup>n</sup>.


$$
H = \{(x,y) \in \mathbb{R}^2 \mid f(x,y) = \frac{3}{2}\} = \text{hyperplane}
$$


→ Let  $X$  be a real vector space. A hyperplane is a set

 $H := \{x \in X \mid f(x) = \alpha\}$  when  $\alpha \in \mathbb{R}$  and  $f$  is a non-zero linear functional.

→ Proportions:

A hyperplane  $H = \{x \in X \mid f(x) = \alpha\}$  is closed iff  $f \in X^1$  ( $f$  is unit<sup>n</sup>)

Proof:

 $f$  is beld  $\Rightarrow H$  closed.

Correctly, assume that  $H$  is closed.

To show that  $f$  is beld


$$
\|f\| = \sup_{\|x\| \leq 1} |f(x)| < \infty \quad f \text{ is beld on } B_1(0)
$$


 $H^c$  is open, let  $x_0 \in H^c$ .


$$
\Rightarrow \exists r_0 > 0 \text{ s.t. } B_{2r_0}(x_0) \subset H^c.
$$


Suppose  $f(x_0) < \alpha \quad \forall x \in B_{2r_0}(x_0)$ 

If not  $\exists x_1 \in B_{2r_0}(x_0)$  s.t.  $f(x_1) > \alpha$ .


$$
\text{Take } t = \frac{f(x_0) - \alpha}{f(x_0) - f(x_1)} \quad 0 < t < 1.
$$



$$
x = tx_1 + (1-t)x_0 \in B_{2r_0}(x_0)
$$


![](_page_4_Picture_33.jpeg)


$$
\begin{aligned}
f(x) &= t f(x_1) + (1-t) f(x_0) \\
&= f(x_0) - t (f(x_0) - f(x_1)) \\
&= f(x_0) - (f(x_0) - \alpha) \\
&= \alpha \Rightarrow \leftarrow
\end{aligned}
$$



$$
f(x) < \alpha \quad \forall \quad x \in B_{2,1}(x_0)
$$


For any  $z \in B_1(0)$  we have  $f(x_0 + z \cdot z) < \alpha$ .


$$
\Rightarrow f(x_0) + \lambda f(z) < \alpha
$$



$$
\Rightarrow f(z) < \frac{\alpha - f(x_0)}{\lambda} < \infty.
$$


 $\rightarrow f$  is bold on  $B_1(0)$ .

 $\rightarrow$  Proposition:

Let  $C$  be an open convex subset of  $X$  containing 0.

For  $x \in X$  define  $p(x) := \inf\{\lambda > 0 \mid x \in \lambda C\}$ . Then  $p$ .

Satisfies:


$$
\enclose{circle}{1} \quad p(\alpha x) = \alpha p(x) \quad \forall x \in X \quad \forall \alpha > 0
$$



$$
\enclose{circle}{2} \quad p(x+y) \leq p(x) + p(y) \quad \forall x, y \in X.
$$



$$
\enclose{circle}{3} \quad \exists M > 0 \text{ s.t. } 0 \leq p(x) \leq M \|x\|. \quad \forall x \in X. \quad \text{and} \quad C = \{x \in X \mid p(x) < 1\} \rightarrow \text{open unit semibold.}
$$


 $p$  = Minkowski functional / gauge functional

Proof : ③ Note that  $0 \in C$ ,  $C$  is open


$$
\Rightarrow B_M(0) \subset C
$$



$$
\text{If } x \in X, \quad \frac{4/2x}{\|x\|} \in B_M(0) \subset C
$$



$$
\Rightarrow \frac{x}{2} \frac{x}{\|x\|} \in C
$$



$$
\text{or } x \in \frac{2\|x\|}{\lambda} C
$$



$$
p(x) \leq \frac{2\|x\|}{\lambda} = M\|x\|
$$



$$
C = \{x \in X \mid p(x) < 1\}
$$


let  $x \in C$ . Since  $C$  is open and the map  $t \mapsto tx$  is continuous.


$$
g(t) = tx
$$



$$
g(1) = x \in C
$$



$$
\exists \varepsilon > 0 \text{ s.t. } (1-\varepsilon, 1+\varepsilon) \subseteq g^{-1}(C)
$$



$$
\Rightarrow g(1-\varepsilon, 1+\varepsilon) \in C
$$



$$
g(1+\varepsilon) = (1+\varepsilon)x \in C
$$



$$
x \in \frac{1}{1+\varepsilon} C
$$



$$
\Rightarrow p(x) \leq \frac{1}{1+\varepsilon}
$$



$$
\Rightarrow p(x) < 1. \quad C \subseteq \{x \in X \mid p(x) < 1\}
$$


let  $x \in \{x \in X \mid p(x) < 1\}$ 


$$
p(x) < 1 \Rightarrow \exists 0 < \lambda < 1 \text{ s.t. } x \in \lambda C
$$



$$
x \in \lambda C \Rightarrow \frac{x}{\lambda} \in C
$$



$$
0 \in C
$$



$$
x = \lambda \left( \frac{x}{\lambda} \right) + (1-\lambda) \cdot 0 \in C.
$$



$$
\Rightarrow \{x \in X \mid p(x) \leq 1\} \subseteq C.
$$


→ Proposition:

Let  $X$  be a real NLS and let  $C$  be a non-empty open convent subset of  $X$ .

Let  $x_0 \notin C$ . Then  $\exists f \in X'$  s.t.  $f(x) < f(x_0) \forall x \in C$ .

Proof:

 $W \subset G$ , assume that  $0 \in C$ .

If not translate  $C$ .

![](_page_7_Picture_26.jpeg)

Minkowski functional  $p(x) = \inf \{\lambda > 0 \mid x \in \lambda C\}$ 

 $p$  is sublinear  $C = \{x \in X \mid p(x) \leq 1\}$ 

Define  $V := \{\lambda x_0 \mid \lambda \in \mathbb{R}\}$  and  $g: V \rightarrow \mathbb{R}$  as


$$
g(\lambda x_0) = \lambda \in \mathbb{R}
$$


to show that  $g(y) \leq p(y) \forall y \in V$ .

Let  $y = \lambda x_0$ 

If  $\lambda \leq 0$  then


$$
g(y) = g(\lambda x_0) = \lambda \leq p(y)
$$


(time piecing of the no)

Since  $x_0 \notin C$ ,  $p(x_0) \geq 1$


$$
g(y) = g(\lambda x_0) = \lambda \leq \lambda p(x_0) = p(\lambda x_0) = p(y).
$$


By Hahn-Banach  $\exists$  an extension  $f: X \rightarrow \mathbb{R}$  of  $y$  s.t.


$$
f(x) \leq p(x) \quad \forall x \in X.
$$


Then if  $x \in C$ ,


$$
f(x) \leq p(x) < 1 = g(x_0) = f(x_0)
$$

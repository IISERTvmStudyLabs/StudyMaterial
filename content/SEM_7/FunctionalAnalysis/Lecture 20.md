---
course: Functional Analysis
Lecture: "20"
date: 15 September
---

→ Theorem: (open Mapping thm)

If  $X$  and  $Y$  are Banach spaces and  $L: X \rightarrow Y$  is a bounded, surjective linear operator then  $L$  is an open map in its maps open sets to open sets.

Remark: Continuity requires preimages of open sets are open sets, reverse implication need not be true.

For example:  $x \mapsto x^2$  maps  $(-1, 1)$  to  $[0, 1)$ 

→ Fact: A map  $f: X \rightarrow Y$  is open iff  $\forall x \in X$  and  $x > 0$  the image  $f(B_r(x))$  contains some ball centred at  $f(x)$  in  $Y$ .


$$
B_r^Y(f(x)) \subseteq f(B_r^X(x))
$$


Proof: (open mapping them).

By linearity of  $L$ 


$$
L(B_n(x)) = Lx + r L(B_1(x))
$$


Denote  $B_1 = B_1(0)$ ,  $B_n = B_n(0)$  etc.

WLOG. we can choose  $x=0$  so that  $Lx=0$  and  $r=1$ 

We need to show that


$$
B_n(0_r) \subseteq L(B_1) \quad (\text{mean thing to be proven})
$$


Since  $L$  is surjective  $Y = \bigcup_{n=1}^{\infty} L(B_n)$ . Any  $y \in Y$ , is  $y = Lx$  take  $n \in \mathbb{N}$  s.t.  $n > \|x\|$ 

But  $L(B_n) \subseteq \overline{L(B_n)}$  and  $Y \subseteq \bigcup_{n=1}^{\infty} \overline{L(B_n)}$ 


$$
\bigcup_{n=1}^{\infty} \overline{L(B_n)} \subseteq Y
$$



$$
\Rightarrow Y = \bigcup_{n=1}^{\infty} \overline{L(B_n)}
$$


Since  $Y$  is complete by Baile Category thm, atleast one of the  $\overline{L(B_n)}$  should have an non-empty interior.

Rescaling  $B_n = r B_1$  and hence  $L$  being linear


$$
L(B_n) = r L(B_1)
$$



$$
\text{or } \overline{L(B_n)} = r \overline{L(B_1)}
$$


 $\Rightarrow \overline{L(B_1)}$  has a non-empty interior

$\Rightarrow \exists y_0 \in Y$  and  $x_0 > 0$  s.t.


$$
B_x(y_0) \subseteq \overline{L(B_1)}
$$


Since  $B_1$  is symmetric ( $x \in B_1 \Rightarrow -x \in B_1$ )  $L(B_1)$  and  $\overline{L(B_1)}$  are symmetric.


$$
\therefore B_x(-y_0) \subseteq \overline{L(B_1)}
$$


Convenity, since  $B_1$  is convex  $\overline{L(B_1)}$  is convex ( $L$  is linear)

 $\therefore$  if  $z$  is s.t.  $\|z\| < x_0$  then


$$
z = \frac{1}{2}(y_0 + z) + \frac{1}{2}(-y_0 + z)
$$


Midpoint of a point in  $B_x(y_0)$  and a point in  $B_x(-y_0)$ .

By convenity,  $B_x(0) \subseteq \overline{L(B_1)}$ 

We will show that  $B_{x_1/2}(0) \subseteq L(B_1)$ 

Fin  $y \in B_{x_1/2}(0)$  to show that  $y = Lx$  for some  $x \in B_1$ .

 $y \in B_{x_1/2}(0) \subseteq x L(B_{1/2})$ . Since  $y$  is in the closure  $\exists x_1 \in B_{1/2}$  with


$$
\|y - x_1 Lx_1\| < x_1/4.
$$



$$
(y - x_1 Lx_1) \in B_{x_1/4}(0) \subseteq x L(B_{1/4})
$$



$$
\|y - x_1 Lx_1 - x_2 Lx_2\| < \frac{x}{8}.
$$



$$
\Rightarrow \|x_n\| < 1/2^n
$$



$$
\Rightarrow \|y - \sum_{j=1}^n Lx_j\| < \frac{\epsilon}{2^{n+1}}
$$



$$
\Rightarrow \sum_{n=1}^{\infty} \|x_n\| \leq \sum_{n=1}^{\infty} \frac{1}{2^n} < 1.
$$


 $\Rightarrow \sum_{n=1}^{\infty} x_n$  converges absolutely and since  $X$  is complete.


$$
x := \sum_{n=1}^{\infty} x_n \text{ converges and } \|x\| \leq \sum_{n=1}^{\infty} \|x_n\| < 1.
$$


---
course: Functional Analysis
Lecture: "10"
date: 17 August
---
 $\rightarrow x$ -real vector space,  $V \subseteq X$  subspace  $f \in V'$ ,  $f: V \rightarrow \mathbb{R}$   
 $f(x) \in p(x) \neq x \in V$   $p$ -sublinear functional.


$$
\exists F: X \rightarrow \mathbb{R} \quad F|_V = f \quad F(x) \in p(x) \neq x \in X.
$$


Example:

①  $X = \mathbb{B}[0, 1]$ , the set of all bold funct on  $[0, 1]$ 


$$
V = \mathbb{C}[0, 1]
$$



$$
l(f) = \int_0^1 f(t) dt \quad f \in \mathbb{C}[0, 1].
$$



$$
l(f) \leq \|f\|_\infty = p(f).
$$



$$
L|_V = l.
$$


②  $X = P[0,1]$  the set of polynomials in  $[0,1]$ , with  $\| \cdot \|_\infty$  norm.


$$
V = P_3[0,1]
$$



$$
l: V \rightarrow \mathbb{R} \text{ as } l(p) = \frac{1}{6}(p(0) + 4p(1/2) + p(1))
$$



$$
L: X \rightarrow \mathbb{R} \quad L_1(p) = \frac{1}{6}(p(0) + 4p(1/2) + p(1)) \quad \forall p \in X.
$$



$$
L_2(p) = \int_0^1 p(t) dt.
$$


( $L_2$  is an entry if  $L_2$  holds  $\forall p \in P_3$ )

→ Remark:

The uniqueness of Hahn-Banach entry is not guaranteed.

 $f: X \rightarrow \mathbb{R}$  is bold linear


$$
f(x) \leq |f(x)| \leq \|f\| \cdot \|x\| = M \|x\| = p(x)
$$


The Hahn Banach for NLS (Analytical form)

→ Theorem: (Analytical form of NLS)

Let  $X$  be a NLS over  $\mathbb{K}(\mathbb{R}/\mathbb{C})$ . Let  $f: V \rightarrow \mathbb{K}$  be a bold linear functional defined on a subspace  $V \subseteq X$ . Then  $f$  can be extension for bold linear functional  $f: X \rightarrow \mathbb{K}$  s.t.


$$
\begin{aligned} \|f\| &= \sup_{\|x\| \leq 1} |f(x)| = \sup_{\|x\| \leq 1} |f(x)| = \|f\|. \\ x \in X & \quad \quad \quad x \in V \end{aligned}
$$


Proof:


$$
p(x) = K \|x\|.
$$


Apply Habin-Bonach to get an ent<sup>n</sup>  $F: X \rightarrow \mathbb{R}$  s.t.  $F(x) \leq p(x)$ .  
 $\forall x \in X$ .

For any  $x \in X$  by linearity


$$
F(-x) \leq p(-x) = p(x) \quad (p = K \|x\|)
$$



$$
\text{ie } -F(x) \leq p(x)
$$



$$
|F(x)| \leq p(x) \quad \forall x \in X.
$$



$$
|F(x)| \leq p(x) = K \|x\| = \|f\| \|x\|.
$$



$$
\Rightarrow \|F\| \leq \|f\|
$$


But  $\|f\| \leq \|f\|$ . always (now of ent<sup>n</sup> is always greater than the smaller fun<sup>c</sup>)


$$
\Rightarrow \|F\| = \|f\|.
$$


Case 2:  $K = \mathbb{C}$ 

Now,  $X$  and  $V$  are also real vector spaces.

To construct  $F: X \rightarrow \mathbb{C}$  using real and imaginary parts.

Given  $f: V \rightarrow \mathbb{C}$ . define  $u(x) = \operatorname{Re}(f(x))$  for  $x \in V$ .

Then  $u: V \rightarrow \mathbb{R}$  is linear (just the Real part)

 $\therefore u$  is bold. Hence by case 1  $\exists$  an ent<sup>n</sup>  $U: X \rightarrow \mathbb{R}$

$$
\text{s.t. } \|U\| = K . (K = \|f\| \Rightarrow \|U\| = \|f\|)
$$


We claim that


$$
\begin{aligned}
u &= \text{Re}(f(x)) \\
\text{Im} &= |\text{Re}(f(x))| < \|f\| \\
&< \|f\|
\end{aligned}
$$

 $F(x) := U(x) - iU(ix)$   
satisfies the required conditions.

For  $x \in V$ ,


$$
\begin{aligned} F(x) &= U(x) - iU(ix) = u(x) - iu(ix) \\ &= \text{Re}(f(x)) - i\text{Re}(if(x)) \\ &= \text{Re}(f(x)) - i\text{Re}(if(x)) \\ &= \text{Re}(f(x)) + i\text{Im}f(x) = f(x). \end{aligned}
$$


to show:  $\|F\| = \|f\|$ 

let  $\alpha \in I$  s.t.  $|\alpha| = I_2 \cdot \alpha F(x) = |F(x)|$ 


$$
\begin{aligned} \text{Then } |F(x)| &= \alpha F(x) = F(\alpha x) \\ &= U(\alpha x) \\ &\leq K \|\alpha x\| = K \|\alpha\| \|x\| \\ &= K \|x\| \end{aligned}
$$



$$
\Rightarrow \|F\| \leq \|f\|,
$$

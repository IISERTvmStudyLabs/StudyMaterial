---
course: Functional Analysis
Lecture: "19"
date: 10 September
---
→ Remark:

Banach Steinhaus says if  $(L_i)_{i \in I}$  is principle bold then it is uniformly bold. In other words if  $\sup_{i \in I} \|L_i\|_\infty < \infty$  for each  $x \in X$  with  $\|x\|_X \leq 1$ . then


$$
\sup_{i \in I} \|L_i\|_\infty < \infty \text{ is } \sup_{i \in I} \sup_{\|x\| \leq 1} \|L_i\|_\infty.
$$


Hence the name uniform bold principle.

→ Applications of Banach Steinhaus

→ Corollary 1: Weak and Weakly\* converging sequences are bold.

Proof: Suppose  $\phi_n \xrightarrow{*} \phi$  in  $X^*$ 


$$
\Rightarrow \phi_n(x) \rightarrow \phi(x) \quad \forall x \in X,
$$


( $\phi_n(x)$  is a converging seq of numbers and thus


$$
\sup_{n \in \mathbb{N}} |\phi_n(x)| < \infty.
$$


Banach Steinhaus  $\Rightarrow \sup_{n \in \mathbb{N}} \|\phi_n\|_{X^*} < \infty$ 

or  $(\phi_n)_{n \in \mathbb{N}}$  is bold in  $X^*$ .


$$
\Rightarrow \phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^*
$$



$$
\Rightarrow J_{x_n}(\phi) \rightarrow J_x(\phi) \quad \forall \phi \in X^*
$$



$$
\Rightarrow J_{x_n} \xrightarrow{*} J_x \quad \text{in } X^{**}
$$


As before  $\sup_{n \in \mathbb{N}} \|J_{x_n}\|_{X^{**}} < \infty$ 

( $\therefore$  it is an isometry)


$$
\text{ie } \sup_{n \in \mathbb{N}} \|x_n\|_X < \infty
$$



$$
\Rightarrow (x_n)_{n \in \mathbb{N}} \text{ is bdd in } X.
$$


 $\rightarrow$  Gerallany  $\Omega$ : Let  $X$  and  $Y$  be banch and let  $(L_n)_{n \in \mathbb{N}} \subset L(X, Y)$ .

Suppose  $f: L_n(x) \rightarrow L_n(x)$  exists  $\forall x \in X$ 

(In converse pointing in  $Y$ )

Then  $L_x := f L_n x$  is bdd linear.


$$
\text{ie } L \in L(X, Y).
$$


In other words, the pointwise limit of a sq of bdd linear maps is bdd linear.

Proof:

Clearly  $L$  is linear since it is pointwise lim of linear maps.

to prove: bdd of map.

It is given that  $L_x = f L_n x$  exists for each  $x \in X$ .


$$
\Rightarrow \sup_{n \in \mathbb{N}} \|L_n x\|_Y < \infty \text{ for each } x \in X. \quad (\|L_n x\| \rightarrow \|L_x\|)
$$



$$
\sup_{n \in \mathbb{N}} \|L_n\|_{L(X,Y)} < \infty. \quad \text{—————} \enclose{circle}{*}
$$



$$
\|L_n x\|_Y = \begin{cases} \|L_n x\|_Y \\ n \rightarrow \infty \end{cases}
$$



$$
\|L_n x\|_Y \leq \|L_n\|_{L(X,Y)} \|x\|
$$



$$
\leq \sup_{n \in \mathbb{N}} \|L_n\|_{L(X,Y)} \|x\|
$$



$$
< M \|x\|
$$


(from \textcircled{\*})


$$
\therefore \|L_n x\|_Y = \begin{cases} \|L_n x\|_Y \\ n \rightarrow \infty \end{cases} < M \|x\| \Rightarrow \|L\|_{L(X,Y)} < \infty.
$$


 $\Rightarrow L$  is bid linear.

 $\rightarrow$  Banach Open Mapping theorem:

How much geometry (of the spaces) is preserved by cont' linear map?

Bidiness is preserved.

Continuity of  $L^{-1}: Y \rightarrow X$  <sup>why is</sup> <sup>is</sup> important?

We are interested in solving  $Lx = y$ 

Given  $y \in Y$  to  $x \in X$  s.t.  $Lx = y$ 


$$
(-\Delta u = f)
$$


If  $L$  is  $\text{cont}^n(\text{bold})$  then 'small changes' in  $X$  correspond to small changes in  $Y$ .

let  $Lx = y$  &  $L\tilde{x} = \tilde{y}$ 


$$
\begin{aligned} \|y - \tilde{y}\|_Y &= \|Lx - L\tilde{x}\|_Y \\ &= \|L(x - \tilde{x})\|_Y \\ &\leq \|L\| \|x - \tilde{x}\|_X \\ &\leq M \|x - \tilde{x}\|_X \end{aligned}
$$


Small changes in  $y \Rightarrow$  small changes in  $x$ .

Stability of sol<sup>n</sup> to  $Lx = y$ 

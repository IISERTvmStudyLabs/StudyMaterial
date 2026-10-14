---
course: Functional Analysis
Lecture: "15"
date: 1 September
---

 $\rightarrow x_0 \rightarrow x$  in  $X$  means  $\phi(x_n) \rightarrow \phi(x) \quad \forall \phi \in X^*$ 

 $\phi_n \xrightarrow{*} \phi$  in  $X^*$  means  $\phi_n(x) \rightarrow \phi(x) \quad \forall x \in X$ 

Consider  $X^*$  and let  $X^{**}$  be the second dual

 $\phi_n \rightarrow \phi$  in  $X^*$  means then

$$\Lambda(\phi_n) \rightarrow \Lambda(\phi) \quad \forall \Lambda \in X^{**}$$

For any  $x \in X$ , the map

$$\phi \in X^* \mapsto \phi(x) \in K \in X^{**}$$

On  $X^*$ , we can have 3 convergence

① strong / norm convergence

$$\phi_n \rightarrow \phi \text{ in } X^*$$

$$\Rightarrow \|\phi_n - \phi\|_{X^*} \rightarrow 0$$

$$\sup_{\|x\|=1} |(\phi_n - \phi)(x)| = \sup_{\|x\| \leq 1} |\phi_n(x) - \phi(x)| \rightarrow 0$$
 $x \in X$ 

② Weak convergence

$$\phi_n \rightarrow \phi \text{ in } X^*$$

$$\Lambda(\phi_n) \rightarrow \Lambda(\phi) \quad \forall \Lambda \in X^{**}$$

③ Weak \* convergence

$$\phi_n \xrightarrow{*} \phi \text{ in } X^*$$

$$\Rightarrow \phi_n(x) \rightarrow \phi(x) \quad \forall x \in X.$$

Strong  $\Rightarrow$  weak  $\Rightarrow$  weak \* on  $X^*$ 

①  $X = \mathbb{C}$  seq convergencing to 0, with  $\|\cdot\|_\infty$ .

$$(G)^* \cong l_1$$

$$e_n = (0, \dots, 1, \dots, 0)$$

$$e_n \rightarrow 0$$

For any  $x \in l_1$ , define

$$\phi_x(y) = \sum_{k=1}^{\infty} x_k y_k \quad \text{for } y = (y_k)_{k \in \mathbb{N}} \in G.$$

$$e_n \rightarrow 0 \text{ in } G \text{ in } \phi_x(e_n) \rightarrow \phi_x(0) = 0 \quad \forall x \in l_1$$

$$\text{Let } x \in l_1 \Rightarrow \sum_{n=1}^{\infty} |x_n| < \infty$$

$$\Rightarrow x_n \rightarrow 0 \quad \text{as } n \rightarrow \infty$$

$$\phi_x(e_n) = \sum_{k=1}^{\infty} e_n^{(k)} x_k = x_n.$$

$$|\phi_x(e_n) - 0| = |x_n| \rightarrow 0 \quad \text{as } n \rightarrow \infty.$$

②  $e_n \in l_1 = X$  Hence  $e_n \xrightarrow{*} 0$  in  $l_1$ ?

Take  $x \in G \Rightarrow x_n \rightarrow 0$ .

Treating  $e_n$  as a dense element

$$\phi_{e_n}(x) = \sum_{k=1}^{\infty} e_n^{(k)} x_k = x_n$$

$$\phi_{e_n}(x) \rightarrow 0 \quad \text{as } n \rightarrow \infty.$$

Does  $e_n \rightarrow 0$  in  $l_1$ ?

$$(l_1)^* \cong l_\infty$$

$$z_* = (1, 1, \dots) \in l_\infty$$
$$\phi_z(e_n) = 1 \nrightarrow 0$$
→ Some properties of weak and weak\* convergence.

① If  $x_n \rightarrow x$  strongly in  $X \Rightarrow$ 

$$x_n \rightarrow x \text{ in } X.$$

② The weak limit is unique i.e. if  $x_n \rightarrow x$  and  $x_n \rightarrow y$  then  $x = y$ 

If not  $(x \neq y)$ , by Hahn-Banach  $\exists \phi \in X^*$  s.t.  $\phi(x) \neq \phi(y)$ 

Not possible, as  $x_n \rightarrow x$  &  $x_n \rightarrow y$   
 $(\phi(x_n) \rightarrow \phi(x) \text{ \& } \phi(x_n) \rightarrow \phi(y))$ 

③ Strong  $\Rightarrow$  weak  $\Rightarrow$  weak\*

If  $X$  is reference, then weak & weak\* convergences coincide

weak convergence requires the dual

$$(x_n \rightarrow x \Rightarrow \phi(x_n) \rightarrow \phi(x) \text{ \& } \phi \in X^*)$$

If there is a Banach space  $Y$  s.t.  $Y^* = X$ , then  $x_n \xrightarrow{*} x$  in  $X$  means

$$x_n(y) \rightarrow x(y) \text{ \& } y \in Y.$$

 $\Rightarrow$  weak-\* convergence requires the pseudo-dual.

If  $X$  is reflexive, then  $(X^*)^* = J(X)$ 

 $J: X \rightarrow (X^*)^*$  is the canonical embedding.

Hence  $J_{X_n} \xrightarrow{*} J_X$  in  $X^{**}$ 

$$\Leftrightarrow J_{X_n}(\phi) \rightarrow J_X(\phi) \forall \phi \in X^*$$

$$\Leftrightarrow \phi(x_n) \rightarrow \phi(x) \forall \phi \in X^*$$

$$\Leftrightarrow x_n \rightarrow x \quad \forall x \in X.$$

④ Weak and weak-\* convergent sequences are bold.

→ Banach-Alooglu theorem:

 $[\overline{B_1(0)}$  is compact  $\Leftrightarrow X$  is finite dimensional]

Let  $X$  be a separable Banach space. Then for every bold seq.  $(\phi_n)_{n \in \mathbb{N}} \subset X^*$  there is a weakly \* convergent subseq.

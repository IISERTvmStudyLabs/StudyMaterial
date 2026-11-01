---
course: Functional Analysis
Lecture: "13"
date: 24 August
---
 $\rightarrow$  Dual spaces, Reflexivity, Weake & Weak-\* convergence.

let  $x$  be a Banach space. The dual space of  $x$  is defined to be


$$
\begin{aligned} x', x^* &= h(x, k) \\ &= \{ \phi: x \rightarrow k \mid \phi \text{ is linear and kept} \} \end{aligned}
$$


Since  $k$  is complete,  $x^* = h(x, k)$  is complete under the norm  $\|\phi\| = \sup_{\|x\|_x \leq 1} |\phi(x)|$ 

 $\phi(x)$  is also denoted as  $\langle \phi, x \rangle_{x, x}$ 


$$
\phi \in X^* \xrightarrow{J_n} \phi(n) \in k.
$$



$$
\begin{aligned} J_x(\phi_1 + \phi_2) &= (\phi_1 + \phi_2)(x) \\ &= \phi_1(x) + \phi_2(x). \\ &= J_x(\phi_1) + J_x(\phi_2) \end{aligned}
$$



$$
\begin{aligned} J_x(\lambda\phi)(x) &= (\lambda\phi)(x) \\ &= \lambda(\phi(x)) \\ &= \lambda J_x(\phi) \end{aligned}
$$


Is  $J_x$  continuous?


$$
J_x: X^* \rightarrow \mathbb{K} \quad (X^*, \|\cdot\|_{X^*}) \text{ is Barach}
$$



$$
\|J_x(\phi)\| = |\phi(x)| \leq \|\phi\|_{X^*} \|x\|_X.
$$



$$
\Rightarrow \sup |J_x(\phi)| \leq \|x\|_X
$$



$$
\phi \in X^*
$$



$$
\|\phi\|_{X^*} \leq 1
$$



$$
\Rightarrow J_x \text{ is bold. } \|J_x\| \leq \|x\|_X
$$


Is  $\|J_x\| = \|x\|$ ?

By Corollary 1 to Mahn-Barach for NLS, given any  $x \neq 0 \exists$ 


$$
\phi_0 \in X^* \text{ with } \|\phi_0\|_{X^*} = 1 \text{ and } \phi_0(x) = \|x\|_X.
$$



$$
\text{Hence } \|J_x\| = \|x\|_X.
$$



$$
\rightarrow J_x \in h(X^*, \mathbb{K}) \text{ and } \|J_x\| = \|x\|.
$$


The span  $h(X^*, \mathbb{K})$  is called the second dual (bi-dual) of  $X$ .


$$
\|J_x\|_{X^{**}} = \|x\|_X.
$$


For each  $x \in X$ , we have  $J_x \in X^{**}$ 

![](_page_14_Diagram_20.jpeg)


$$
J: X \rightarrow X^{**} \text{ as}
$$



$$
\begin{aligned} J(x) &= J_x \\ J(x)(\phi) &= J_x(\phi) \\ &= \phi(x). \end{aligned}
$$



$$
J(X) \subseteq X^{**}
$$


Is every element in  $X^{**}$  is of the form  $J_x$  for some  $x \in X$ ?


$$
x \xrightarrow{J} J_x
$$



$$
\|J_x\|_{X^{**}} = \|x\|_X
$$


 $\rightarrow J: X \rightarrow X^{**}$  is an isometry and is called a canonical embedding.

 $\rightarrow$  Def<sup>n</sup>: A space  $X$  is called reference if  $J(X) = X^{**}$ 

Eg:

① Let  $X$  be a finite dim NLS and consider


$$
J: X \rightarrow X^{**}
$$


If  $x \in \ker(J)$ 


$$
J(x) = 0
$$



$$
\Rightarrow J(x)(\phi) = 0 \quad \forall \phi \in X^*
$$



$$
\Rightarrow \phi(x) = 0 \quad \forall \phi \in X^*
$$


If  $x \neq 0$  then  $\exists \phi_0 \in X^*$   $\phi_0(x) = \|x\| \neq 0$ .


$$
\Rightarrow \ker J = \{0\}
$$



$$
\dim X = \dim X^* = \dim X^{**} = N \quad \text{say}
$$


Since  $J$  is injective,  $J$  is surjective.

②  $L^p(\mathbb{R})$  is regular for  $1 < p < \infty$ 


$$
\frac{1}{p} + \frac{1}{q} = 1 \quad \Rightarrow \quad 1 < q < \infty
$$


If  $g \in L^q(\mathbb{R})$ , then the map


$$
f \in L^p(\mathbb{R}) \mapsto \int_{\mathbb{R}} f g \, dx \in K.
$$


is linear and continuous.

If  $\phi \in (L^p(\mathbb{R}))^*$ , then  $\phi = \phi_g$  for some  $g \in L^q(\mathbb{R})$ .


$$
(L^p(\mathbb{R}))^* \cong L^q(\mathbb{R}).
$$



$$
(L^q(\mathbb{R}))^* \cong L^p(\mathbb{R})
$$


 $L^1(\mathbb{R})$  &  $L^\infty(\mathbb{R})$  are not regular

---
course: Functional Analysis
Lecture: "21"
date: 2026-09-17
---
 - $X$  and  $Y$  are Banach,  $L: X \rightarrow Y$  is subjective. Then  $L$  is an open map.

___
# Corollary (Bounded inverse theorem)
Let  $X$  and  $Y$  be Banach spaces and  $L: X \rightarrow Y$  is bounded linear bijection. Then  $L^{-1}$  is continuous.

$$
L \text{ is open }\implies L^{-1} \text{ is continuous}
$$


----
# Closed graph theorem
Let  $X$  and  $Y$  be Banach spaces.

$$
X \times Y = \{(x, y) \mid x \in X, y \in Y\}
$$

On  $X \times Y$  define

$$
\|(x, y)\| := \|x\|_X + \|y\|_Y
$$

$X \times Y$  is complete with respect to   $|| \cdot ||$ 
Suppose  $L : \text{Dom}(L) \subseteq X \rightarrow Y$  is given, we say that  $L$  is closed if

$$
\text{Graph}(L) := \{ (x, y) \mid x \in \text{Dom}(L), y = Lx \}
$$

is a closed subset of  $X \times Y$ . (doesn't imply it means closed sets to closed sets)  
(unlike [[Lecture 20#Theorem (Open Mapping Theorem)|open mapping theorem]])

$$
\text{Graph}(L) \subseteq X \times Y.
$$

If  $(x_n, y_n) \in \text{Graph}(L)$  and if  $(x_n, y_n) \rightarrow (x, y)$  in  $|| \cdot ||$ , then  $(x, y) \in \text{Graph}(L)$ . i.e.  $x_n \in \text{Dom}(L) \subseteq X$  &

$$
y_n = Lx_n.
$$

and  $x_n \rightarrow x$  in  $X$  &  $y_n \rightarrow y$  in  $Y$ .
Then  $x \in \text{Dom}(L)$  and  $y = Lx$  ( $\text{Im}(X)$ ).

$$
x_n \rightarrow x \text{ in } \text{Dom}(L).
$$


$$
y_n = Lx_n \rightarrow y = Lx \text{ in } Y.
$$

If  $L : \text{Dom}(L) \rightarrow Y$  is bold then  $L$  is closed.
If  $\text{Dom}(L) = X$ ,  $L$  is closed  $\Rightarrow L$  is bold.

 ----
# Theorem: (Closed Graph theorem)
Let  $X$  and  $Y$  be Banach spaces and let  $L : X \rightarrow Y$  be a closed linear operator that is defined on the entire space  $X$  ( $\text{Dom}(L) = X$ ). Then  $L$  is bounded.

**Proof**: Since  $L$  is closed $\implies$ Graph( $L$ ) is a closed subset of  $X \times Y$ , and hence complete.
Consider the projections 

$$
\pi_x: \text{Graph}(L) \rightarrow X \text{ and }
\pi_y: \text{Graph}(L) \rightarrow Y
$$

defined by,

$$
\pi_x(x, Lx) := x \text{ and }
\pi_y(x, Lx) := Lx.
$$

$\pi_x$  is bijective since  $\text{Dom}(L) = X$ 

$$
\pi_x: \text{Graph}(L) \rightarrow X \text{ is bijective}
$$

By the previous corollary ([[Lecture 21#Corollary (Bounded inverse theorem)|bounded inverse theorem]])

$$
\pi_x^{-1}: X \rightarrow \text{Graph}(L) \text{ is bounded.}
$$

 And $\pi_y$  is also bounded

$$
\pi_y \circ \pi_x^{-1}: X \rightarrow Y \text{ is bounded.}
$$


$$
(\pi_y \circ \pi_x^{-1})(x) = \pi_y(\pi_x^{-1}(x))
$$


$$
= \pi_y(x, Lx) = Lx
$$


$$
\pi_y \circ \pi_x^{-1} = L.
$$


---
## Problem Sheet 5
1) to show:  $x_n \rightarrow x$ 

$$
\Psi(x_n) \rightarrow \Psi(x) \quad \forall \Psi \in X^*
$$


$$
\Psi \in X^* \quad \exists \phi \in Y^* \text{ s.t.}
$$


$$
\|\phi - \Psi\|_{X^*} < \varepsilon.
$$


$$
\begin{aligned} |\Psi(x_n) - \Psi(x)| &\leq |\Psi(x_n) - \phi(x_n)| \\ &\quad + |\phi(x_n) - \phi(x)| + |\phi(x) - \Psi(x)| \end{aligned}
$$

since  $x_n$  are bounded  $\rightarrow$ 
2) to show:  $\int_{\Omega} f_{ng} \rightarrow \int f_g \quad \forall g \in L^q(\Omega) \quad \|_{p^{-1}} g = 1.$ 
Consider  $C_c(\Omega)$  is dense in  $L^q(\Omega)$ 

$$
g \in C_c(\Omega)
$$

 $f_{ng} \rightarrow f_g$  a.e. (since  $f_n \rightarrow f$  and  $g$  is within  $f_{ng}$ )
Given:  $\|f_n\|_p \leq C$ 
(use DCT)
to show:  $f_{ng}$  is dominated.

$$
\int_{\Omega} |f_{ng}| \rightarrow \int_{\Omega} |f_g| \quad (\text{by DCT}).
$$

3) to show:  $f_n \rightarrow \frac{1}{2}$  (average of 0.4.1)
 $f_n$  is bounded in  $L^2(0,1)$ . (by def) it is bounded in  $L^2(0,1)$ .  
 $\|f_n\|_2 = 1.$

$$
\text{subinterval } I_j = (j/n, j+1/n)
$$


$$
\begin{aligned} \text{Consider} \quad & \int_{j/n}^{j/n+1/2n} \phi(x) dx \\ &= \int_{j/n}^{j/n+1/2n} \phi(x) dx + \int_{j/n+1/2n}^{j+1/n} \phi(x) dx. \\ & \quad = \int_{j/n}^{j/n+1/2n} \phi(x) dx = 0 \end{aligned}
$$


By continuity they have the same limit.
Take the sum, show that

$$
\int_0^1 f_n \phi dx \longrightarrow \int_0^1 \frac{1}{2} \phi dx
$$

(doesn't coming strongly)
4)  $L$  is bounded  $\Rightarrow L_n$  is bounded
Conversely suppose  $L_n$  is bold.

$$
\sup_n |L_n(x)| < \infty
$$

By uniform bold Banach Steinhaus  $\sup \|L_n\| < \infty$
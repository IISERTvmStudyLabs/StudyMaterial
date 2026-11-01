---
course: Functional Analysis
Lecture: "21"
date: 17 September
---
 $\rightarrow X$  and  $Y$  are Banach,  $L: X \rightarrow Y$  is subjective. Then  $L$  is an open map.

 $\rightarrow$  Corollary (Bounded inverse theorem):

Let  $X$  and  $Y$  be Banach spaces and  $L: X \rightarrow Y$  is bijective. Then  $L^{-1}$  is cont.

 $L$  is open  $\Rightarrow L^{-1}$  is cont.

 $\rightarrow$  Closed graph theorem:

Let  $X$  and  $Y$  be Banach spaces.


$$
X \times Y = \{(x, y) \mid x \in X, y \in Y\}
$$


On  $X \times Y$  define


$$
\|(x, y)\| := \|x\|_X + \|y\|_Y
$$


$X \times Y$  is complete west  $|| \cdot ||$ 

Suppose  $L : \text{Dom}(L) \subseteq X \rightarrow Y$  is given we say that  $L$  is closed if


$$
\text{Graph}(L) := \{ (x, y) \mid x \in \text{Dom}(L), y = Lx \}
$$


is a closed subset of  $X \times Y$ . (doesn't imply it means closed sets to closed sets)  
(while open mapping them)


$$
\text{Graph}(L) \subseteq X \times Y.
$$


If  $(x_1, y_1) \in \text{Graph}(L)$  and if  $(x_2, y_2) \rightarrow (x_1, y)$  in  $|| \cdot ||$ , then  $(x_1, y) \in \text{Graph}(L)$ . i.e.  $x_1 \in \text{Dom}(L) \subseteq X$  &


$$
y_2 = Lx_1.
$$


and  $x_2 \rightarrow x$  in  $X$  &  $y_2 \rightarrow y$  in  $Y$ .

Then  $x \in \text{Dom}(L)$  and  $y = Lx$  ( $\text{Im}(X)$ ).


$$
x_2 \rightarrow x \text{ in } \text{Dom}(L).
$$



$$
y_2 = Lx_2 \rightarrow y = Lx \text{ in } Y.
$$


If  $L : \text{Dom}(L) \rightarrow Y$  is bold then  $L$  is closed.

If  $\text{Dom}(L) = X$ ,  $L$  is closed  $\Rightarrow L$  is bold.

 $\rightarrow$  Theorem: (Closed Graph theorem)

Let  $X$  and  $Y$  be Banach spaces and let  $L : X \rightarrow Y$  be a closed linear operator that is defined on the entire space  $X$  ( $\text{Dom}(L) = X$ ). Then  $L$  is bold.

Proof: Since  $L$  is closed Graph( $L$ ) is a closed subset of  $X \times Y$ , and hence complete.

Consider the projections  $\pi_x: \text{Graph}(L) \rightarrow X$  and


$$
\pi_y: \text{Graph}(L) \rightarrow Y, \text{ defined by}
$$



$$
\pi_x(x, Lx) := x
$$



$$
\pi_y(x, Lx) := Lx.
$$


 $\pi_x$  is bijective since  $\text{Dom}(L) = X$ 


$$
\pi_x: \text{Graph}(L) \rightarrow X \text{ is bijective}
$$


By the previous carollary (bed inverse thm)


$$
\pi_x^{-1}: X \rightarrow \text{Graph}(L) \text{ is bed.}
$$


 $\pi_y$  is also bed


$$
\pi_y \circ \pi_x^{-1}: X \rightarrow Y \text{ is bed.}
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

since  $x_n$  are bed  $\rightarrow$ 

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

 $f_n$  is bed in  $L^2(0,1)$ . (by def) it is bed in  $L^2(0,1)$ .  
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

4)  $L$  is holl  $\Rightarrow L_n$  is bold

Conversely suppose  $L_n$  is bold.


$$
\sup_n |L_n(x)| < \infty
$$


By uniform bold Banach Steinhaus  $\sup \|L_n\| < \infty$
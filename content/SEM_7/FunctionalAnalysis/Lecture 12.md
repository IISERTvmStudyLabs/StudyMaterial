---
course: Functional Analysis
Lecture: "12"
date: 20 August
---
 $\rightarrow$  Geometric form of Hahn-Banach (separation of sets)

A hyperplane  $H = \{x \in X \mid f(x) = \alpha\}$  where  $f: X \rightarrow \mathbb{R}$ , linear,  $\alpha \in \mathbb{R}$  is said to separate 2 sets  $A, B \subset X$ , if


$$
f(x) \leq \alpha \leq f(y) \quad \forall x \in A \text{ \& } y \in B.
$$


The hyperplane strictly separates  $A$  &  $B$  if  $\exists \varepsilon > 0$  s.t.


$$
f(x) \leq \alpha - \varepsilon < \alpha + \varepsilon \leq f(y) \quad \forall x \in A, y \in B
$$


![](_page_8_Picture_24.jpeg)

![](_page_8_Picture_25.jpeg)


$$
\enclose{circle}{1} \quad x = R^2
$$



$$
A = \{(x, y) \mid x \geq 0, y \geq 0, xy \geq 1\}
$$



$$
B = \{(x, y) \mid y \leq 0\}
$$


![](_page_9_Figure_19.jpeg)

The hyperplane  $H = \{(x, y) \mid y = 0\}$  separates  $A$  &  $B$  (not strictly)


$$
\enclose{circle}{2} \quad A = \{(x, y) \mid xy > 1, 1 \leq x \leq 2\}
$$



$$
B = \{(x, y) \mid y \leq 0\}
$$



$$
H = \{(x, y) \mid y = \frac{1}{4}\}
$$


![](_page_9_Figure_24.jpeg)

→ Theorem: (Hahn-Banach)

Let  $A$  and  $B$  be 2 non-empty, disjoint and convex subsets of a real NLS  $x$ . Assume that  $A$  is open. Then  $\exists$  a constant hyperplane  $H = \{x \in x \mid f(x) = \alpha y \quad f \in x', \alpha \in \mathbb{R} \text{ that separation } A \text{ and } B \text{ is.}\}$ 


$$
f(x) \leq \alpha \leq f(y) \quad \forall x \in A, y \in B.
$$


Proof:

Define  $C = A - B = \{x - y \mid x \in A, y \in B\}$ .

 $C$  is non-empty and convex. Now


$$
C = \bigcup_{y \in S} (A - y) \text{ and since } A \text{ is open}
$$


$C$  is open (arb. union of open sets is open).


$$
0 \notin C \text{ as } A \cap B = \emptyset
$$


By the last proposition  $\exists f \in X'$  s.t.


$$
f(z) < f(0) = 0 \quad \forall z \in C \quad (\text{nine it is a linear function})
$$



$$
f(x-y) < 0 \quad \forall x \in A, y \in B
$$



$$
f(x) < f(y) \quad \forall x \in A, y \in B.
$$


Choose  $\alpha \in \mathbb{R}$  s.t.


$$
\sup_{x \in A} f(x) \leq \alpha \leq \inf_{y \in B} f(y) \text{ then}
$$



$$
f(x) \leq \alpha \leq f(y) \quad \forall x \in A, y \in B.
$$


→ Theorem: (Hahn - Banach)

Let  $A$  &  $B$  be 2 non-empty disjoint convex subsets of a real NLS  $X$ . Assume that  $A$  is closed and  $B$  is compact. Then  $A$  and  $B$  can be strictly separated by closed hyperplane  $\exists f \in X'$ ,  $\alpha \in \mathbb{R} \quad \varepsilon > 0$  s.t.


$$
f(x) \leq \alpha - \varepsilon < \alpha + \varepsilon \leq f(y) \quad \forall x \in A, y \in B.
$$


Proof: Let  $\eta \geq 0$  and define


$$
A_\eta = A + B_\eta(0) \quad B_\eta = B + B_\eta(0)
$$


![](_page_10_Diagram_30.jpeg)

$A_\eta$  &  $B_\eta$  are non-empty open and convex we claim that if  $\eta > 0$  is sufficiently small then  $A_\eta$  and  $B_\eta$  are disjoint.

If not, we can choose a seq  $(\eta_n) \rightarrow 0$  and a seq of points  $(z_n) \in A_{\eta_n} \cap B_{\eta_n}$ .


$$
z_n \in A_{\eta_n} \Rightarrow z_n = x_n + u_n \quad x_n \in A \quad u_n \in B_{\eta_n}(0).
$$



$$
\| \cdot \|^y \quad z_n \in B_{\eta_n} \Rightarrow z_n = y_n + v_n \quad y_n \in B \quad , \quad v_n \in B_{\eta_n}(0).
$$



$$
x_n = z_n - u_n \quad \text{\&} \quad y_n = z_n - v_n
$$



$$
x_n - y_n = v_n - u_n
$$



$$
\| x_n - y_n \| = \| v_n - u_n \| \leq \| v_n \| + \| u_n \|
$$



$$
< 2\eta_n
$$



$$
(\because \| v_n \| < \eta_n \\ \| u_n \| < \eta_n)
$$


Since  $(y_n)_{n \in \mathbb{N}} \subset B$ ,  $B$  is compact  $\Rightarrow$  a convergent subsequence  $(y_{n_k})_{k \in \mathbb{N}}$ 


$$
y_{n_k} \rightarrow y \quad \text{any}
$$



$$
\| x_{n_k} - y_{n_k} \| \leq 2\eta_{n_k} \rightarrow 0
$$



$$
\Rightarrow x_{n_k} \rightarrow y
$$


but  $x_{n_k} \in A$  &  $A$  is closed


$$
\Rightarrow y \in A \quad \text{which is not possible} \quad (y \in B)
$$



$$
\Rightarrow \in
$$


$\therefore$  For  $\eta > 0$  sufficiently small,  $A_\eta$  &  $B_\eta$  are disjoint.

By the previous them,  $A_\eta$  &  $B_\eta$  can be separated.

 $\Rightarrow \exists f \in X'$  and  $\alpha \in \mathbb{R}$  s.t.


$$
f(x+\eta z_1) \leq \alpha \leq f(y+\eta z_2) \quad \forall x \in A, y \in B, z_1, z_2 \in B_1(0).
$$



$$
\Rightarrow f(x) + \eta f(z_1) \leq \alpha \leq f(y) + \eta f(z_2)
$$



$$
\|f(x)\| = \sup_{\|z\| \leq 1} |f(z)|
$$


---
course: Functional Analysis
Lecture: "18"
date: 8 September
---
→ Theorem:

let  $X$  be an infinite dimensional Banach space. Then  $X$  can't have a countable Hamel basis

Proof:

Suppose  $X$  have a countable Hamel basis  $(e_i)_{i=0}^{\infty}$ 

For  $n \geq 0$ , define  $F_n := \text{span}\{e_i\}_{i=0}^n$ 

 $X = \bigcup_{n \geq 0} F_n$  and  $F_n$  are closed subspaces (fin dim.)

 $\text{Int}(F_n) = \emptyset \quad \forall n \geq 0$ .

If  $\text{Int}(F_n) \neq \emptyset$  for some  $n \geq 0$  then  $\exists x = \sum_{j=0}^n \alpha_j e_j$  and  $x_2 \geq 0$  s.t.  $\overline{\text{Ba}(x)} \subset F_n$ 

Consider  $y = x + \frac{h}{\|e_{n+1}\|} e_{n+1}$ , then  $y \in \overline{\text{Ba}(x)}$  but  $y \notin F_n$ .

Since  $\{e_0, \dots, e_n\}$  is linearly independent. Hence  $X$  can't be complete.

→ Remark: For  $P(\mathbb{K}) \{1, x, x^2, \dots\}$  is a Hamel basis.

For  $P(\mathbb{K}^n) \{x_1^{k_1} x_2^{k_2} \dots x_N^{k_N} \mid k_i \leq 0\}$ 

is a Hamel basis

Hence, the space of polynomials can't be equipped with any norm that will make it complete.

→ The Banach Steinhaus thm alias the uniform boldness principle.

Suppose we are given two NLS  $X$  and  $Y$ . Let be a collection  $(L_i)_{i \in I} \subseteq \mathcal{L}(X, Y)$ .

We say that  $(L_i)_{i \in I}$  is "uniformly bold" if  $\sup_{i \in I} \|L_i\|_{\mathcal{L}(X, Y)} < \infty$ .

Consider  $x \in X$  arbitrary but fixed.

$$\|L_i x\|_Y \leq \|L_i\|_{\mathcal{L}(X, Y)} \|x\|_X < \infty \quad \forall i \in I.$$

$$\sup_{i \in I} \|L_i x\|_Y < \infty \quad \forall x \in X$$

⇒  $(L_i)_{i \in I}$  is pointwise bold.

When  $X$  is complete, the converse is true.

→ Theorem: (Banach - Steinhaus)

Let  $X$  be a Banach space. Let  $Y$  be a NLS, and let  $(L_i)_{i \in I} \subseteq \mathcal{L}(X, Y)$  satisfy for each  $x \in X$ .

$$\sup_{i \in I} \|L_i x\|_Y < \infty$$

Then  $\sup_{i \in I} \|L_i\|_{\mathcal{L}(X, Y)} < \infty$ .

Proof: For  $n \geq 0$ , define  $F_n := \{x \in X \mid \sup_{i \in I} \|L_i x\| \leq n\}$ 

Given any  $x \in X$ ,  $\sup_{i \in I} \|L_i x\| < \infty$  and hence  $\exists n(x) \geq 0$ 

s.t.  $\sup_{i \in I} \|L_i x\| \leq n(x)$

Or  $x \in F_{n(x)}$  and hence  $X = \bigcup_{n \geq 0} F_n$ 

We show that  $F_n$  are closed.

$$x \in F_n \iff \|L_i x\|_y \leq n \quad \forall i \in \mathbb{I}.$$

$$\iff x \in \{z \in X \mid \|L_i z\|_y \leq n\} \quad \forall i \in \mathbb{I}.$$

$$\iff F_n = \bigcap_{i \in \mathbb{I}} \{z \in X \mid \|L_i z\|_y \leq n\}$$

 $\{z \in X \mid \|L_i z\| \leq n\}$  is closed (the inverse image of  $[0, n]$  under  $z \mapsto \|L_i z\|_y$ , cts)

Hence  $F_n$  is closed (additional intersection)

Since  $X$  is complete  $\exists n_0 \geq 0$  s.t.  $\text{Int}(F_{n_0}) \neq \emptyset$ .

$$\Rightarrow \exists x_0 \in F_{n_0} \text{ and } n_0 \geq 0 \text{ s.t.}$$

$$\overline{B_{x_0}} \subseteq F_{n_0}$$

$$\Rightarrow \|L_i z\|_y \leq n_0 \quad \forall z \in \overline{B_{x_0}} \quad \forall i \in \mathbb{I}.$$

For any  $x \in X$  take

$$z := x_0 + \frac{x}{\|x\|_X} x \in \overline{B_{x_0}}$$

$$\text{or } x = \frac{\|x\|}{r_x} (z - x_0)$$

$$\begin{aligned} \therefore \|L_i x\|_y &= \frac{\|x\|}{r_x} \|L_i (z - x_0)\|_y \\ &\leq \frac{\|x\|}{r_x} (\|L_i z\|_y + \|L_i x_0\|_y) \end{aligned}$$

$$\leq \frac{\|x\|}{\lambda} \left( n_0 + \sup_{i \in I} \|L_i x_0\|_Y \right)$$

$$\Rightarrow \|L_i x\|_Y \leq \frac{1}{\lambda} \left( n_0 + \sup_{i \in I} \|L_i x_0\|_Y \right) \|x\| \quad \forall x \in X \text{ vie } I$$

$$\Rightarrow \|L_i\|_{\lambda(X,Y)} \leq \frac{1}{\lambda} \left( n_0 + \sup_{i \in I} \|L_i x_0\|_Y \right) \text{ or}$$

$$\sup_{i \in I} \|L_i\|_{\lambda(X,Y)} \leq \frac{1}{\lambda} \left( n_0 + \sup_{i \in I} \|L_i x_0\|_Y \right).$$

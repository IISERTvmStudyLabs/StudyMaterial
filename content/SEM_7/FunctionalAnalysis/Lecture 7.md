---
course: Functional Analysis
Lecture: "7"
date: 10 August
---

→ Seminorm & Fréchet spaces:

Consider  $X = C(0,1)$ . If we define


$$
p(f) = \sup_{x \in (0,1)} |f(x)|
$$


then  $p$  need not be a norm.  $X$  can be unbold. fun's and  $p(f) = +\infty$ . for some  $f \in X$  e.g.  $f(x) = \frac{1}{x}$ .

Construction of a Fréchet space.

For  $[a, b] \subset (0,1)$  define


$$
p_{a,b}(f) := \sup_{x \in [a, b]} |f(x)| = \max_{x \in [a, b]} |f(x)| < \infty
$$


(N3) & (N2) are satisfied by  $p_{a,b}$ .

to check (N1):

![](_page_8_Figure_26.jpeg)

 $p_{a,b}(f) = 0$  for  $f \neq 0$ .

→ Def<sup>\*</sup>: Let  $X$  be a vector space over  $\mathbb{K}$ .

\* mapping  $p: X \rightarrow \mathbb{R}$  is called a seminorm if


$$
(SN1) \quad p(x) \geq 0 \quad \forall x \in X
$$



$$
(SN2) \quad p(\lambda x) = |\lambda| p(x) \quad \forall x \in X \quad \forall \lambda \in \mathbb{K}.
$$



$$
(SN3) \quad p(x+y) \leq p(x) + p(y) \quad \forall x, y \in X.
$$


$d(x, y) = x-y$  need not be a metric on  $X$  if we can have  $x \neq y$  but  $d(x, y) = 0$ .

→ Def<sup>n</sup>: A seq. of seminorms  $(p_k)_{k \in \mathbb{N}}$  is called separating if  $\forall x \in X (x \neq 0), \exists k_0 \in \mathbb{N}$  s.t.  $p_{k_0}(x) > 0$ .

→ Proposition:

Let  $(p_k)_{k \in \mathbb{N}}$  be a separating sequence of seminorms on  $X$ . Then,


$$
d(x, y) := \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{p_k(x-y)}{\|x-y\|_2} \quad x, y \in X.
$$


is a metric on  $X$ .

Proof:

(D1) Clearly  $d(x, y) \geq 0$ . and since  $(p_k)_{k \in \mathbb{N}}$  is separating  $x \neq y$ .


$$
\Rightarrow p_{k_0}(x-y) > 0 \text{ for some } k_0.
$$


(D2)  $d(x, y) = d(y, x)$  by homogeneity of  $p_k$ 's.

(D3) The map  $S \rightarrow \frac{S}{1+S}$  is increasing and windowed on  $[0, \infty)^{1+8}$ 

Let  $0 < a, b, c$  s.t.  $c \leq a+b$ .


$$
\frac{c}{1+c} \leq \frac{a+b}{1+a+b} \leq \frac{a}{1+a} + \frac{b}{1+b}.
$$



$$
\therefore \frac{P_k(x-z)}{1 + P_k(x-z)} \leq \frac{P_k(x-y)}{1 + P_k(x-y)} + \frac{P_k(y-z)}{1 + P_k(y-z)}
$$



$$
\therefore \sum_{k=1}^N \frac{1}{2^k} \frac{P_k(x-z)}{1 + P_k(x-z)} \leq \sum_{k=1}^N \frac{1}{2^k} \frac{P_k(x-y)}{1 + P_k(x-y)} + \sum_{k=1}^N \frac{1}{2^k} \frac{P_k(y-z)}{1 + P_k(y-z)}
$$


 $\therefore$  The triangle inequality holds.

 $\rightarrow$  Remark: If  $(x, y)$  is complete then  $x$  is Fréchet.

Eg:  $\{ k \in \mathbb{R}^N \text{ is compact. } C(k) \text{ is a nonzero linear space.} \}$   
with  $\|\cdot\|_\infty = \|\cdot\|_{L^\infty(k)}$ .

① Let  $s_k \subseteq \mathbb{R}^N$  be open (bold/unbold) consider  $C(s_k)$ , the set of all cont. fun<sup>c</sup>  $f: s_k \rightarrow \mathbb{R}$ .

Define  $A_k = \{ x \in s_k \mid |x| \leq k, \text{ dist}(x, s_k) < \frac{1}{k} \}$   
for  $k \in \mathbb{N}$ 

 $A_k$  are compact.


$$
s_k = \bigcup_{k=1}^{\infty} A_k
$$


![](_page_10_Picture_23.jpeg)

Define  $P_k(f) := \max_{x \in A_k} |f(x)|$   
 $f \in C(s_k)$ .

(covering of open sets with compact set)

( $P_k$  is summary)

Case:  $C(s_k)$  is complete write to  $d(f, g) = \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{P_k(f-g)}{1 + P_k(f-g)}$ .

Let  $(f_n)_{n \in \mathbb{N}}$  be cauchy ie for every  $\varepsilon > 0 \exists N_0 \in \mathbb{N}$  s.t.


$$
d(f_n, f_m) < \varepsilon \quad \forall n, m \geq N_0.
$$



$$
\Rightarrow P_k(f_n - f_m) < \varepsilon \quad \forall k \in \mathbb{N},
$$


 $(f_n)$  is uniformly cavely on  $A_k$ 

Since  $s$  is the  $s = \bigcup_{k=1}^{\infty} A_k$  for every  $x \in s \setminus \{k \text{ .t. } x \in A_k\}$ 


$$
|(f_n(x) - f_m(x))| \leq P_k(f_n - f_m) < \varepsilon.
$$


Define  $f_n(x) = \begin{cases} f_n(x) & \text{the pointwise limit which is } \\ & n \rightarrow \infty \end{cases}$   
well-defined.

Claim:  $f$  is continuous on  $s$ .

Let  $x_0 \in s$  since  $\text{dist}(x_0, s) > 0$ . Choose  $k$ , sufficiently large s.t.  $x_0 \in \text{Int}(A_k)$ .

Let  $U$  be a nbd of  $x_0$  so  $U \subset A_k$ .

Since  $f_n \rightarrow f$  uniformly on  $A_k$   $(f_n$  is uniformly cavely on  $A_k$  we have  $f_n \rightarrow f$  uniformly on  $U$ .

 $\Rightarrow f$  is continuous on  $U$ .

 $\Rightarrow f$  is cont. on  $s$ .

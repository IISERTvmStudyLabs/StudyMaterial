## Riemann Integration

→ Let $f: [a, b] \to \mathbb{R}$ be bounded. By a partition $P$ of $[a, b]$ we mean a collection of finite points $a = x_0 < x_1 < x_2 < \dots < x_n = b$

with points $[x0, x1, x2, x3, x4,\dots]$

Then we define,

$$U(P, f) = \sum_{i=1}^{n} M_i(x_i - x_{i-1}) \text{ , where } M_i = \sup_{x \in [x_{i-1}, x_i]} f(x)$$

$$L(P, f) = \sum_{i=1}^{n} m_i(x_i - x_{i-1}) \text{ , where } m_i = \inf_{x \in [x_{i-1}, x_i]} f(x)$$

Define 
$$\int_{a}^{\overline{b}} f(x)dx = \inf_{P} U(P, f)$$

$$\int_{\underline{a}}^{b} f(x)dx = \sup_{P} L(P, f)$$

$f$ is said to be Riemann integrable if $$\int_{\underline{a}}^{b} f(x)dx = \int_{a}^{\overline{b}} f(x)dx$$

---

→ Define $f: [0, 1] \to \mathbb{R}$ by, $$f(x) = \begin{cases} 1 & , x \in \mathbb{Q} \cap [0, 1] \\ 0 & , o.w. \end{cases}$$
___
→ Let $\{f_k\}$ be a seq. of Riemann integrable functions on $[a, b]$

If $f_k \to f$ pointwise. Then what you can say about $\{\int_{a}^{b} f_k(x)dx\}$ ?

---

→ let $\{r_1, r_2, \dots \}$ be a set of rational in $[0, 1]$

Consider $f_k(x) = \begin{cases} 1 & , x \in \{r_1, r_2, \dots, r_k\} \\ 0 & , o.w \end{cases}$
Then $f_k$ is Riemann integrable with $\int_0^1 f_k(x)dx = 0$

$f_k \to f$ pointwise

---

→ $P = \{ a = x_0, x_1, \dots, x_n = b \}$

$U(P, f) = \sum_{i=1}^n M_i (x_i - x_{i-1})$

---

 For a set $A \subseteq \mathbb{R}$, we define $\chi_A$ called the characteristic function of $A$ by

$$\chi_A(x) = \begin{cases} 1 & , x \in A \\ 0 & , x \notin A \end{cases}$$

$$\int_a^b \chi_{[a,b]}(x)dx = b - a$$

Let $[c, d] \subseteq [a, b]$,  then $$\int_a^b \chi_{[c,d]}(x)dx = \int_c^d dx = d - c$$
___
$$\Rightarrow \sum_{i=1}^n M_i \int_a^b \chi_{[x_{i-1}, x_i]}(x)dx$$

$$\Rightarrow \int_a^b \sum_{i=1}^n M_i \chi_{[x_{i-1}, x_i]}(x)dx = \int_a^b S_P(x)dx$$

,$[x1, x2], [x2, b]$

$$S_P(x) = \sum_{i=1}^n M_i \chi_{[x_{i-1}, x_i]}$$

$$S_P(x) = \begin{cases} M_1 & , x \in [x_0, x_1) \\ M_2 & , x \in [x_1, x_2) \\ \vdots \\ M_n & , x \in [x_{n-1}, x_n] \end{cases}$$

Denote by $\lambda$ the length we already know that is, for $a, b \in \mathbb{R}$

$$\lambda([a,b]) = \lambda([a,b)) = \lambda((a,b)) = \lambda((a,b]) = b - a$$

$$\lambda([a, \infty)) = \lambda((a, \infty)) = \lambda((-\infty, b]) = \lambda((-\infty, b)) = \infty$$

---

Denote by $\mathscr{I}$ the collection of all intervals in $\mathbb{R}$

Then $\lambda: \mathscr{I} \to [0, \infty]$

**Question**: Does there exist function $M: \mathcal{P}(\mathbb{R}) \to [0, \infty]$ (($\mathcal{P}(\mathbb{R})\implies$Power set of $\mathbb{R}$)) s.t. ^359538

1. $M(I) = \lambda(I)$, $\forall I \in \mathscr{I}$
2. $M(A + x) = M(A)$, $\forall x \in \mathbb{R}, \forall A \subseteq \mathbb{R}$ where $A + x = \{a + x : a \in A\}$

 Side Note:
$x \in \mathbb{R}, A \subseteq \mathbb{R}$
$A + x = \{ a + x : a \in A \}$
$2 + (0, 1) = (2, 3)$

$\int_{a+x}^{b+x} f = \int_a^b f$ (per-mod-vity) 

3. If $A = \bigcup_{j=1}^\infty A_j$, $A_j \cap A_k = \phi$ for $j \neq k$ then

$$M\left(\bigcup_{j=1}^\infty A_j\right) = \sum_{j=1}^\infty M(A_j)$$

Consequence:
1. $M(\phi) = 0$
2. If $E \subseteq F$ then $M(E) \subseteq M(F)$

$F = E \cup (F - E) \Rightarrow M(F) = M(E) + M(F - E) \Rightarrow M(E) \leq M(F)$

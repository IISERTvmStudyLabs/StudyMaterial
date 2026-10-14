---
course: Functional Analysis
Lecture: "8"
date: 11 August
---
 $\rightarrow$  Connection

$$A_k = \left\{ x \in s \mid |x| \leq k, \text{dist}(x, s) > \frac{1}{k} \right\}$$

$$A_k \subset \text{Int}(A_{k+1}) \subset A_{k+1} \quad s = \bigcup_{k=1}^{\infty} A_k$$

![](_page_11_Picture_33.jpeg)

Exhaustion by compact sets

$$P_k(f) = \max_{x \in A_k} |f(x)|$$

$$d(f, g) = \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{P_k(f-g)}{1 + P_k(f-g)}, \quad f, g \in C(\mathbb{R}), \quad \mathbb{R} \text{ is open}$$

We need to show that  $d(f_n, f) \rightarrow 0, \quad n \rightarrow \infty$ 

$$d(f_n, f) < \varepsilon \quad \forall n \geq N_0$$

$$d(f_n, f) = \sum_{k=1}^{\infty} \frac{1}{2^k} \frac{P_k(f_n - f)}{1 + P_k(f_n - f)}$$

$$\frac{1}{2^k} \frac{P_k(f_n - f)}{1 + P_k(f_n - f)} \leq \frac{1}{2^k} \text{ and } \sum_{k=1}^{\infty} \frac{1}{2^k} < \infty$$

Given any  $\varepsilon > 0 \exists k_0 \in \mathbb{N}$  s.t.  $\sum_{k_0+1}^{\infty} \frac{1}{2^k} < \frac{\varepsilon}{2}$ 

$$d(f_n, f) = \sum_{k=1}^{k_0} \frac{1}{2^k} \frac{P_k(f_n - f)}{1 + P_k(f_n - f)} + \underbrace{\sum_{k=k_0+1}^{\infty} \frac{1}{2^k} \frac{P_k(f_n - f)}{1 + P_k(f_n - f)}}_{< \varepsilon/2}$$

Since  $f_n \rightarrow f$  uniformly on  $A_k$   $\forall k$  and first term is finite sum, we can make the 1<sup>st</sup> term  $< \varepsilon/2 \quad \forall n \geq N$ 

 $C(\mathbb{R})$  is Facilit w.r.t  $d$ .

 $f_n \rightarrow f$  in  $C(\mathbb{R})$  means uniform convergence on every compact subset of  $\mathbb{R}$ .

$f_n \rightarrow f$  in  $C(\mathbb{R})$  means uniform convergence on every compact subset of  $\mathbb{R}$ 

 $C(K)$ ,  $K$  compact.  $f_n \rightarrow f$  means  $f_n \rightarrow f$  uniformly in  $K$ .

 $\rightarrow$  locally integrable functions  $L'_{loc}(\mathbb{R})$ 

 $\mathbb{R} \subseteq \mathbb{R}^n$  open  $f: \mathbb{R} \rightarrow \mathbb{R}$  measurable is locally integrable if

$$\int_K |f(x)| dx < \infty \quad \forall k \in \mathbb{R} \text{ compact.}$$

If  $f \in C(\mathbb{R})$ , then  $f \in L'_{loc}(\mathbb{R})$ 

$$\begin{aligned} \int_K |f(x)| dx &\leq \max_{x \in K} |f(x)| \int_K dx \\ &= \max |f| |K| < \infty \end{aligned}$$

 $f \in L^p(\mathbb{R}) \quad 1 \leq p \leq \infty$ 

When  $1 \leq p \leq \infty$ ,

$$\int_K |f(x)| dx = \int_K |f(x)| 1 dx$$

By Hölder,

$$\leq \left( \int_K |f(x)|^p dx \right)^{1/p} \left( \int_K 1^q dx \right)^{1/q}$$

$$\leq \left( \int_{\mathbb{R}} |f(x)|^p dx \right)^{1/p} |K|^{1/q}$$

$$= |K|^{1/q} \|f\|_p < \infty$$

Let  $A_k$  be defined as above

$$p_k(f) = \int_{A_k} |f(x)| dx \quad f \in L^1_{loc}(\Omega).$$

→ Hahn Baraelu theorem:

- - Extension form (algebraic & analytical) variants (extending a linear functional)
- - Separation form (geometric separating convex sets)

→ Def<sup>n</sup>: A map  $p: X \rightarrow \mathbb{R}$  is called a sublinear functional (quasinorm) if

① Subadditivity

$$p(x+y) \leq p(x) + p(y) \quad \forall x, y \in X$$

②  $p(\lambda x) = \lambda p(x) \quad \forall x \in X, \lambda \geq 0$ 

} All norms / Seminorm satisfies this

 $p$  can be negative.

Examples:

① Any norm or seminorm

② Let  $\Omega \subset X$  be a bold convex open subset containing 0

![](_page_14_Figure_33.jpeg)

$$p(x) = \inf_{\lambda \geq 0} \{x \in \Omega \mid \lambda x \in \Omega\}$$

We find a  $\lambda$  set.  
 $\Omega \subset \Omega$  ↓  
 Smallest possible

→ Theorem: (Mahn Banach - algebraic version for real vector space)

let  $X$  be a real vector space and set  $p: X \rightarrow \mathbb{R}$  be a sublinear functional. Let  $V \subseteq X$  be subspace of  $X$  and let  $f: V \rightarrow \mathbb{R}$  be a linear functional s.t.

$$f(x) \leq p(x) \quad \forall x \in V$$

Then  $\exists$  a linear functional  $F: X \rightarrow \mathbb{R}$  s.t.  $F_N(x) = f(x) \quad \forall x \in V$  and

$$-p(-x) \leq F(x) \leq p(x) \quad \forall x \in X$$
# Question 1
1. Find bounded linear operators $L_1, L_2$ on $L^2(0, \infty)$ such that


$$
L_1 L_2 = I, \qquad L_2 L_1 \neq I.
$$


2. Let $H$ be a Hilbert space, let $L : H \to H$ be bounded linear, and let $K : H \to H$ be compact linear. Prove that


$$
L(I - K) = I \iff (I - K)L = I.
$$


**Hint.** For (i), use translation to the left and translation to the right with zero extension. For (ii), note that $I - K$ is injective in one case and surjective in the other; then apply the Fredholm theorem to $I - K$.

## Solution 

> [!note] **Theorem (Fredholm Alternative)**
> 
> Let $X$ be a Banach space, let $K \in \mathcal{K}(X)$ be a compact linear operator, and consider $T = I - K$ (with adjoint $T^* = I^* - K^* \in \mathcal{L}(X^*)$).
> 
>   
> 
> **General Properties (Always True for $T = I - K$):**
> 
>   
> 
> - $\operatorname{Range}(I - K)$ is closed in $X$, and $\operatorname{Range}(I - K) = (\operatorname{Ker}(I - K^*))^\perp$.
>     
> - $\operatorname{Range}(I - K^*)$ is closed in $X^*$, and $\operatorname{Range}(I - K^*) = (\operatorname{Ker}(I - K))^\perp$.
>     
> - $\dim \operatorname{Ker}(I - K) = \dim \operatorname{Ker}(I - K^*) < \infty$.
>     
> 
> **The Alternative (Exactly One of the Following Two Cases Holds):**
> 
> 1. **Trivial Kernel / Invertible Case ($\dim = 0$):**
>     
>     
$$
\operatorname{Ker}(I - K) = \{0\} \iff \operatorname{Ker}(I - K^*) = \{0\} \iff \operatorname{Range}(I - K) = X \iff \operatorname{Range}(I - K^*) = X^*
$$

>     
>     In this case, $I - K$ is bijective and $(I - K)^{-1} \in \mathcal{L}(X)$ exists as a bounded linear operator. That is, for every $y \in X$, the equation $(I - K)x = y$ has a unique solution $x \in X$.
>     
> 2. **Non-trivial Kernel / Resonance Case ($1 \le \dim < \infty$):**
>     
>     
$$
\dim \operatorname{Ker}(I - K) = \dim \operatorname{Ker}(I - K^*) = n \in \mathbb{N} \quad (n \ge 1)
$$

>     
>     In this case, $I - K$ is neither injective nor surjective, and the inhomogeneous equation $(I - K)x = y$ has a solution $x \in X$ **if and only if** $y$ satisfies the $n$ compatibility conditions:
>     
>     
$$
\phi(y) = 0 \quad \text{for all } \phi \in \operatorname{Ker}(I - K^*)
$$

>     
>     (In a Hilbert space $H$, this reads $\langle y, z \rangle = 0$ for all $z \in \operatorname{Ker}(I - K^*)$.)

**(i) Bounded Linear Operators on $L^2(0, \infty)$ with $L_1 L_2 = I$ and $L_2 L_1 \neq I$**

Define $L_1, L_2 : L^2(0, \infty) \to L^2(0, \infty)$ as the unit left-shift and unit right-shift (with zero extension) operators:


$$
(L_1 f)(x) = f(x + 1), \qquad (L_2 f)(x) = \begin{cases} 0, & 0 < x \le 1 \\ f(x - 1), & x > 1 \end{cases} \qquad (x > 0).
$$


- **Linearity and Boundedness:**
Both $L_1$ and $L_2$ are clearly linear. For any $f \in L^2(0, \infty)$, changing variables yields:


$$
\|L_1 f\|_{L^2(0, \infty)}^2 = \int_0^\infty |f(x+1)|^2 \, dx = \int_1^\infty |f(t)|^2 \, dt \le \|f\|_{L^2(0, \infty)}^2,
$$



$$
\|L_2 f\|_{L^2(0, \infty)}^2 = \int_1^\infty |f(x-1)|^2 \, dx = \int_0^\infty |f(t)|^2 \, dt = \|f\|_{L^2(0, \infty)}^2.
$$


Thus, $L_1$ and $L_2$ are well-defined bounded linear operators with $\|L_1\| = \|L_2\| = 1$.

- **Composition $L_1 L_2 = I$:**
For any $f \in L^2(0, \infty)$ and any $x > 0$, we have $x + 1 > 1$, so:


$$
(L_1 L_2 f)(x) = (L_2 f)(x + 1) = f((x + 1) - 1) = f(x).
$$


Hence, $L_1 L_2 = I$.

- **Composition $L_2 L_1 \neq I$:**
For any $f \in L^2(0, \infty)$,


$$
(L_2 L_1 f)(x) = \begin{cases} 0, & 0 < x \le 1 \\ (L_1 f)(x - 1) = f(x), & x > 1 \end{cases} = \mathbf{1}_{(1, \infty)}(x) f(x).
$$


Taking $f = \mathbf{1}_{(0, 1)} \in L^2(0, \infty)$ gives $L_2 L_1 f = 0 \neq f$. Therefore, $L_2 L_1 \neq I$.

---

**(ii) Equivalence of Left and Right Inverses for $I - K$**

Let $H$ be a Hilbert space, $L : H \to H$ a bounded linear operator, and $K : H \to H$ a compact linear operator.

- **($\implies$) Assume $L(I - K) = I$:**
Suppose $x \in \operatorname{Ker}(I - K)$, so $(I - K)x = 0$. Applying $L$ to both sides gives:


$$
x = I x = L(I - K)x = L(0) = 0.
$$


Thus $\operatorname{Ker}(I - K) = \{0\}$, meaning $I - K$ is injective. Since $K$ is compact, the Fredholm Alternative implies that $I - K$ is also surjective, and hence bijective. By the Bounded Inverse Theorem, $(I - K)$ admits a bounded two-sided inverse $(I - K)^{-1} : H \to H$. Multiplying $L(I - K) = I$ on the right by $(I - K)^{-1}$ gives:


$$
L = L(I - K)(I - K)^{-1} = (I - K)^{-1}.
$$


Consequently, $(I - K)L = (I - K)(I - K)^{-1} = I$.

- **($\Longleftarrow$) Assume $(I - K)L = I$:**
For every $y \in H$, setting $x = Ly \in H$ yields:


$$
(I - K)x = (I - K)Ly = Iy = y,
$$


which proves that $I - K$ is surjective. Because $K$ is compact, the Fredholm Alternative implies that $I - K$ is also injective, and hence bijective with a bounded two-sided inverse $(I - K)^{-1}$. Multiplying $(I - K)L = I$ on the left by $(I - K)^{-1}$ gives:


$$
L = (I - K)^{-1}(I - K)L = (I - K)^{-1}.
$$


Consequently, $L(I - K) = (I - K)^{-1}(I - K) = I$. $\blacksquare$

----

# Question 2
On $H = L^2(0, \infty)$, define


$$
(Lf)(x) = 2f(x + 1), \quad x \ge 0.
$$


1. Determine whether $L$ is bounded and whether it is compact.
2. Compute the adjoint $L^*$ explicitly.
3. Describe $\operatorname{Ker} L$ and $\operatorname{Ker} L^*$.

**Hint.** Write down the integral $(Lf, g)$, and make a change of variables to identify the adjoint. To test compactness, consider the functions $f_n = \chi_{[n, n+1]}$.

## Solution 

### $(1)$ Boundedness and Compactness of $L$

**1. $L$ is bounded with $\|L\| = 2$:**
First, check linearity: for any $f, g \in L^2(0, \infty)$ and scalars $\alpha, \beta$,


$$
(L(\alpha f + \beta g))(x) = 2(\alpha f + \beta g)(x+1) = \alpha(Lf)(x) + \beta(Lg)(x).
$$


Next, compute $\|Lf\|_{L^2}^2$ for any $f \in L^2(0, \infty)$ using the substitution $u = x + 1$ ($du = dx$):


$$
\|Lf\|_{L^2}^2 = \int_0^\infty |2f(x+1)|^2 \, dx = 4 \int_1^\infty |f(u)|^2 \, du \le 4 \int_0^\infty |f(u)|^2 \, du = 4\|f\|_{L^2}^2.
$$


Taking square roots gives $\|Lf\|_{L^2} \le 2\|f\|_{L^2}$, so $L$ maps $L^2(0, \infty)$ into itself and is **bounded** with $\|L\| \le 2$.

To show $\|L\| = 2$, choose a non-zero function supported entirely on $[1, \infty)$, such as $f_1 = \chi_{[1, 2]}$:

- $\|f_1\|_{L^2}^2 = \int_1^2 1 \, dx = 1 \implies \|f_1\|_{L^2} = 1$.
- $(Lf_1)(x) = 2\chi_{[1, 2]}(x+1) = 2\chi_{[0, 1]}(x)$, so $\|Lf_1\|_{L^2}^2 = \int_0^1 4 \, dx = 4 \implies \|Lf_1\|_{L^2} = 2$.

Thus $\|L\| = 2$.

---

**2. $L$ is NOT compact:**
Consider the sequence $f_n = \chi_{[n, n+1]}$ for $n \in \mathbb{N}$ ($n \ge 1$).

- **The sequence $(f_n)$ is bounded in $L^2(0, \infty)$:**


$$
\|f_n\|_{L^2} = \left( \int_n^{n+1} 1^2 \, dx \right)^{1/2} = 1 \quad \text{for all } n \ge 1.
$$


- **Apply $L$ to $f_n$:**


$$
(Lf_n)(x) = 2\chi_{[n, n+1]}(x+1) = 2\chi_{[n-1, n]}(x).
$$


- **Check pairwise distances of $(Lf_n)$:**
For any $n \neq m$ ($n, m \ge 1$), the intervals $[n-1, n]$ and $[m-1, m]$ are disjoint (up to a single endpoint of measure zero), so $(Lf_n)(x)$ and $(Lf_m)(x)$ have disjoint supports:


$$
\|Lf_n - Lf_m\|_{L^2}^2 = \int_0^\infty |2\chi_{[n-1, n]}(x) - 2\chi_{[m-1, m]}(x)|^2 \, dx = \int_{n-1}^n 4 \, dx + \int_{m-1}^m 4 \, dx = 4 + 4 = 8.
$$


Hence $\|Lf_n - Lf_m\|_{L^2} = 2\sqrt{2}$ for all $n \neq m$.

Because every pair of terms in $(Lf_n)$ is separated by a fixed distance of $2\sqrt{2}$, $(Lf_n)$ is not Cauchy and cannot have any norm-convergent subsequence. Since $(f_n)$ is bounded yet $(Lf_n)$ has no convergent subsequence, **$L$ is not compact**.

---

### $(2)$ Explicit Formula for the Adjoint $L^*$

For any $f, g \in L^2(0, \infty)$, write out the inner product $\langle Lf, g \rangle_{L^2}$ and make the change of variables $u = x + 1$ ($du = dx$; as $x$ goes from $0$ to $\infty$, $u$ goes from $1$ to $\infty$):


$$
\begin{aligned} \langle Lf, g \rangle_{L^2} &= \int_0^\infty (Lf)(x)\overline{g(x)} \, dx \\ &= \int_0^\infty 2f(x+1)\overline{g(x)} \, dx \\ &= \int_1^\infty 2f(u)\overline{g(u-1)} \, du. \end{aligned}
$$


To rewrite this as an integral over all of $(0, \infty)$, introduce the indicator function $\chi_{[1, \infty)}(u)$ (which equals $1$ for $u \ge 1$ and $0$ for $0 \le u < 1$) and rename the dummy variable $u$ back to $x$:


$$
\langle Lf, g \rangle_{L^2} = \int_0^\infty f(x) \overline{\left( 2\chi_{[1, \infty)}(x) g(x-1) \right)} \, dx = \langle f, L^*g \rangle_{L^2}.
$$


Since this holds for all $f \in L^2(0, \infty)$, the adjoint $L^* \in \mathcal{B}(L^2(0, \infty))$ is given explicitly by:


$$
(L^*g)(x) = 2\chi_{[1, \infty)}(x)g(x-1) = \begin{cases} 0, & 0 \le x < 1, \\ 2g(x-1), & x \ge 1. \end{cases}
$$


---

### $(3)$ $\operatorname{Ker} L$ and $\operatorname{Ker} L^*$

**1. Finding $\operatorname{Ker} L$:**
By definition, $f \in \operatorname{Ker} L \iff Lf = 0$ in $L^2(0, \infty)$:


$$
2f(x+1) = 0 \quad \text{for a.e. } x \ge 0 \iff f(u) = 0 \quad \text{for a.e. } u \ge 1.
$$


Notice there is **no restriction** on $f(x)$ for $x \in (0, 1)$. Therefore:


$$
\operatorname{Ker} L = \left\{ f \in L^2(0, \infty) : f(x) = 0 \text{ for a.e. } x \ge 1 \right\}
$$


(Equivalently, $\operatorname{Ker} L$ consists of all functions in $L^2(0, \infty)$ supported on $[0, 1]$, which is naturally isometric to $L^2(0, 1)$.)

**2. Finding $\operatorname{Ker} L^*$:**
By definition, $g \in \operatorname{Ker} L^* \iff L^*g = 0$ in $L^2(0, \infty)$:


$$
\begin{cases} 0 = 0 & \text{for } 0 \le x < 1, \\ 2g(x-1) = 0 & \text{for a.e. } x \ge 1. \end{cases}
$$


Substituting $u = x - 1$, the second condition says $g(u) = 0$ for a.e. $u \ge 0$, meaning $g = 0$ almost everywhere on the entire domain $(0, \infty)$. Therefore:


$$
\operatorname{Ker} L^* = \{0\}.
$$


*(Sanity check: By Theorem 1, $\operatorname{Ker} L^* = (\operatorname{Range} L)^\perp$. Since $L$ is surjective—for any $h \in L^2(0, \infty)$, setting $f(x) = \frac{1}{2}h(x-1)\chi_{[1,\infty)}(x)$ gives $Lf = h$—we have $\operatorname{Range} L = H$, which forces $\operatorname{Ker} L^* = H^\perp = \{0\}$.)*

____

# Question 3

For a continuous and symmetric kernel function $\kappa : [0, 1] \times [0, 1] \to \mathbb{R}$, define


$$
(Lf)(x) = \int_0^1 \kappa(x, y)f(y) \, dy \quad \text{on } H = L^2(0, 1).
$$


(i) Prove that $L$ is a compact self-adjoint ($L^* = L$) bounded linear operator.
(ii) Consider the particular kernel


$$
\kappa(x, y) = \begin{cases} 
x(1 - y), & 0 \le x \le y \le 1, \\ 
y(1 - x), & 0 \le y \le x \le 1. 
\end{cases}
$$


For $f \in C([0, 1])$, show that $u = Lf$ satisfies


$$
u'' + f = 0 \quad \text{in } (0, 1), \qquad u(0) = u(1) = 0.
$$


**Hint.** For (i), use Cauchy–Schwarz and uniform continuity of $\kappa$ to obtain uniform boundedness and equicontinuity of the images of the unit ball; apply Arzelà–Ascoli. For (ii), split the integral at $y = x$ and differentiate.

## Solution 

> [!note] **Theorem (Arzelà–Ascoli Theorem)**
>
> Let $(K, d)$ be a **compact metric space** (for example, the closed interval $[0, 1]$), and let $C(K)$ be the Banach space of continuous scalar-valued functions $f : K \to \mathbb{R}$ (or $\mathbb{C}$) equipped with the supremum (uniform) norm:
>
> 
$$
> \|f\|_\infty = \sup_{x \in K} |f(x)|.
>
$$

>
> A subset $\mathcal{F} \subset C(K)$ is **relatively compact** (meaning its closure $\overline{\mathcal{F}}$ is compact in $C(K)$, or equivalently, **every sequence in $\mathcal{F}$ has a uniformly convergent subsequence** in $C(K)$) **if and only if** $\mathcal{F}$ satisfies the following two conditions:
>
> 1. **Uniform Boundedness (Pointwise Boundedness):**
>    There exists a constant $M > 0$ such that
>
> 
$$
> |f(x)| \le M \quad \text{for all } f \in \mathcal{F} \text{ and all } x \in K.
>
$$

>
> *(Equivalently, $\sup_{f \in \mathcal{F}} \|f\|_\infty \le M < \infty$.)*
>
> 2. **Equicontinuity:**
>    For every $\varepsilon > 0$, there exists $\delta > 0$ (depending **only** on $\varepsilon$, and **independent** of both $f \in \mathcal{F}$ and $x, y \in K$) such that for all $x, y \in K$ and all $f \in \mathcal{F}$:
>
> 
$$
> d(x, y) < \delta \implies |f(x) - f(y)| < \varepsilon.
>
$$

>
> ---
>
> **Sequential Form (Used in Operator Compactness Proofs)**
>
> If $(g_n)_{n=1}^\infty \subset C([0, 1])$ is a sequence of continuous functions such that:
>
> - **Uniformly bounded:** $\sup_{n \in \mathbb{N}} \|g_n\|_\infty < \infty$, and
> - **Equicontinuous:** $\forall \varepsilon > 0, \exists \delta > 0$ such that $|x - y| < \delta \implies |g_n(x) - g_n(y)| < \varepsilon$ for all $n \in \mathbb{N}$,
>
> then there exists a subsequence $(g_{n_k})_{k=1}^\infty$ and a continuous function $g \in C([0, 1])$ such that $\|g_{n_k} - g\|_\infty \to 0$ as $k \to \infty$ (and consequently $\|g_{n_k} - g\|_{L^2(0,1)} \to 0$ as well).>then there exists a subsequence $(g_{n_k})_{k=1}^\infty$ and a continuous function $g \in C([0, 1])$ such that $\|g_{n_k} - g\|_\infty \to 0$ as $k \to \infty$ (and consequently $\|g_{n_k} - g\|_{L^2(0,1)} \to 0$ as well).


>[!note] **Definition (Equicontinuity)**
Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces (for instance, $X = [0, 1]$ with $d_X(x_1, x_2) = |x_1 - x_2|$ and $Y = \mathbb{C}$ or $\mathbb{R}$ with $d_Y(y_1, y_2) = |y_1 - y_2|$), and let $\mathcal{F}$ be a family of functions $f : X \to Y$.
**1. Equicontinuity at a Point $x_0 \in X$**
The family $\mathcal{F}$ is equicontinuous at $x_0 \in X$ if for every $\varepsilon > 0$, there exists $\delta > 0$ (depending on $\varepsilon$ and $x_0$, but independent of $f \in \mathcal{F}$) such that for all $x \in X$ and all $f \in \mathcal{F}$:
>
$$
>d_X(x, x_0) < \delta \implies d_Y(f(x), f(x_0)) < \varepsilon.
>
$$


**(i) Proof that $L$ is Bounded, Self-Adjoint, and Compact**

1. **Linearity and Boundedness:**
Linearity of $L$ follows directly from the linearity of integration. Since $\kappa$ is continuous on the compact square $[0, 1]^2$, there exists $M \ge 0$ such that $|\kappa(x, y)| \le M$ for all $(x, y) \in [0, 1]^2$. For any $f \in L^2(0, 1)$ and $x \in [0, 1]$, the Cauchy–Schwarz inequality gives:


$$
|(Lf)(x)| \le \int_0^1 |\kappa(x, y)| |f(y)| \, dy \le M \int_0^1 1 \cdot |f(y)| \, dy \le M \left(\int_0^1 1^2 \, dy\right)^{1/2} \|f\|_{L^2(0, 1)} = M \|f\|_{L^2(0, 1)}.
$$


Squaring and integrating over $x \in [0, 1]$ yields:


$$
\|Lf\|_{L^2(0, 1)}^2 = \int_0^1 |(Lf)(x)|^2 \, dx \le \int_0^1 M^2 \|f\|_{L^2(0, 1)}^2 \, dx = M^2 \|f\|_{L^2(0, 1)}^2.
$$


Thus $\|Lf\|_{L^2(0, 1)} \le M \|f\|_{L^2(0, 1)}$, so $L$ is bounded with $\|L\| \le M$.

2. **Self-Adjointness ($L^* = L$):**
For any $f, g \in L^2(0, 1)$, since $\kappa(x, y) f(y) \overline{g(x)}$ is integrable on $[0, 1]^2$ (bounded by $M |f(y)| |g(x)| \in L^1([0, 1]^2)$), Fubini's theorem applies. Using the real-valuedness and symmetry of $\kappa$ ($\overline{\kappa(y, x)} = \kappa(y, x) = \kappa(x, y)$), we obtain:


$$
\begin{aligned} \langle Lf, g \rangle_{L^2(0, 1)} &= \int_0^1 \left(\int_0^1 \kappa(x, y) f(y) \, dy\right) \overline{g(x)} \, dx \\ &= \int_0^1 f(y) \overline{\left(\int_0^1 \kappa(y, x) g(x) \, dx\right)} \, dy = \langle f, Lg \rangle_{L^2(0, 1)}. \end{aligned}
$$


Hence, $L^* = L$.

3. **Compactness:**
Let $B = \{f \in L^2(0, 1) : \|f\|_{L^2(0, 1)} \le 1\}$ be the closed unit ball in $L^2(0, 1)$. We verify that the image $L(B) = \{Lf : f \in B\}$ is uniformly bounded and equicontinuous in $C([0, 1])$:
- **Uniform boundedness:** From Step 1, for every $f \in B$ and every $x \in [0, 1]$, $|(Lf)(x)| \le M \|f\|_{L^2(0, 1)} \le M$.
- **Equicontinuity:** Fix $\varepsilon > 0$. Because $\kappa$ is continuous on the compact set $[0, 1]^2$, it is uniformly continuous. Thus, there exists $\delta > 0$ such that whenever $|x_1 - x_2| < \delta$, we have $|\kappa(x_1, y) - \kappa(x_2, y)| < \varepsilon$ for all $y \in [0, 1]$. For any $f \in B$ and any $x_1, x_2 \in [0, 1]$ with $|x_1 - x_2| < \delta$, Cauchy–Schwarz gives:


$$
|(Lf)(x_1) - (Lf)(x_2)| \le \int_0^1 |\kappa(x_1, y) - \kappa(x_2, y)| |f(y)| \, dy < \varepsilon \int_0^1 |f(y)| \, dy \le \varepsilon \|f\|_{L^2(0, 1)} \le \varepsilon.
$$


By the **Arzelà–Ascoli theorem**, $L(B)$ is relatively compact in $C([0, 1])$ with respect to the supremum norm $\|\cdot\|_\infty$. Because $\|h\|_{L^2(0, 1)} \le \|h\|_\infty$ for every $h \in C([0, 1])$, any sequence $(Lf_n)$ in $L(B)$ has a subsequence $(Lf_{n_k})$ that converges in $\|\cdot\|_\infty$ and therefore also in $\|\cdot\|_{L^2(0, 1)}$. Hence, $L$ is a compact operator.

---

**(ii) Boundary Value Problem for the Specific Kernel**

Let $f \in C([0, 1])$ and define $u = Lf$, where


$$
\kappa(x, y) = \begin{cases} x(1 - y), & 0 \le x \le y \le 1, \\ y(1 - x), & 0 \le y \le x \le 1. \end{cases}
$$


1. **Boundary Conditions:**
Since $\kappa(0, y) = 0$ and $\kappa(1, y) = 0$ for all $y \in [0, 1]$, direct substitution gives:


$$
u(0) = \int_0^1 \kappa(0, y) f(y) \, dy = 0, \qquad u(1) = \int_0^1 \kappa(1, y) f(y) \, dy = 0.
$$


2. **Differential Equation ($u'' + f = 0$):**
For any $x \in (0, 1)$, splitting the integral at $y = x$ and substituting the respective branches of $\kappa(x, y)$ yields:


$$
u(x) = \int_0^x y(1 - x) f(y) \, dy + \int_x^1 x(1 - y) f(y) \, dy = (1 - x) \int_0^x y f(y) \, dy + x \int_x^1 (1 - y) f(y) \, dy.
$$


Since $y \mapsto y f(y)$ and $y \mapsto (1 - y) f(y)$ are continuous on $[0, 1]$, the Fundamental Theorem of Calculus and the Product Rule show that $u$ is differentiable on $(0, 1)$ with:


$$
\begin{aligned} u'(x) &= -\int_0^x y f(y) \, dy + (1 - x) \cdot x f(x) + \int_x^1 (1 - y) f(y) \, dy - x \cdot (1 - x) f(x) \\ &= -\int_0^x y f(y) \, dy + \int_x^1 (1 - y) f(y) \, dy. \end{aligned}
$$


Differentiating a second time via the Fundamental Theorem of Calculus gives:


$$
u''(x) = -x f(x) - (1 - x) f(x) = -f(x) \quad \text{for all } x \in (0, 1).
$$


Rearranging yields $u'' + f = 0$ in $(0, 1)$, with $u(0) = u(1) = 0$. $\blacksquare$

---

# Question 4

On $H = L^2(0, 1)$, define

  


$$
(Ku)(t) = \int_0^t u(s) \, ds.
$$


1. Show that $Ku \in C^{0,\frac{1}{2}}[0, 1]$ for every $u \in H$; i.e., prove $\vert{}(Ku)(t) - (Ku)(s)\vert{} \le C\vert{}t - s\vert{}^{\frac{1}{2}}$.
2. Prove that $K$ is a compact bounded linear operator.
3. Compute $K^*$ explicitly.
4. Using the Fredholm alternative, prove that
   
$$
u - Ku = g
$$

   has a unique solution $u \in H$ for every $g \in H$. If $g \in C^1[0, 1]$, write the differential equation and initial condition satisfied by $u$.

**Hint.** Use Cauchy–Schwarz and Arzelà–Ascoli for compactness, and reverse the order of integration for the adjoint. For (iv), first show that $u = Ku$ has only the zero solution by considering its primitive and an initial-value problem.

## Solution 
**1. Hölder Continuity ($Ku \in C^{0, \frac{1}{2}}[0, 1]$)**

Let $u \in L^2(0, 1)$ and take any $s, t \in [0, 1]$. Without loss of generality, assume $0 \le s \le t \le 1$. Applying the Cauchy–Schwarz inequality on the interval $[s, t]$ gives:


$$
\begin{aligned} |(Ku)(t) - (Ku)(s)| &= \left|\int_s^t 1 \cdot u(r) \, dr\right| \\ &\le \left(\int_s^t 1^2 \, dr\right)^{1/2} \left(\int_s^t |u(r)|^2 \, dr\right)^{1/2} \\ &\le |t - s|^{1/2} \|u\|_{L^2(0, 1)}. \end{aligned}
$$


By symmetry in $s$ and $t$, this inequality holds for all $s, t \in [0, 1]$ with $C = \|u\|_{L^2(0, 1)}$. Hence, $Ku \in C^{0, \frac{1}{2}}[0, 1]$.

---

**2. Boundedness and Compactness of $K$**

- **Linearity and Boundedness:**
Linearity of $K$ follows directly from the linearity of integration. Since $(Ku)(0) = 0$, setting $s = 0$ in Part 1 yields:


$$
|(Ku)(t)| = |(Ku)(t) - (Ku)(0)| \le t^{1/2} \|u\|_{L^2(0, 1)} \le \|u\|_{L^2(0, 1)} \quad \text{for all } t \in [0, 1].
$$


Therefore,


$$
\|Ku\|_{L^2(0, 1)} = \left(\int_0^1 |(Ku)(t)|^2 \, dt\right)^{1/2} \le \|Ku\|_\infty \le \|u\|_{L^2(0, 1)},
$$


showing that $K$ is a bounded linear operator with $\|K\| \le 1$.

- **Compactness:**
Let $B = \{u \in L^2(0, 1) : \|u\|_{L^2(0, 1)} \le 1\}$ be the closed unit ball in $L^2(0, 1)$. For every $u \in B$:
1. **Uniform boundedness:** $\|(Ku)\|_\infty \le \|u\|_{L^2(0, 1)} \le 1$.
2. **Equicontinuity:** For any $\varepsilon > 0$, choosing $\delta = \varepsilon^2 > 0$ ensures that whenever $|t - s| < \delta$,


$$
|(Ku)(t) - (Ku)(s)| \le |t - s|^{1/2} \|u\|_{L^2(0, 1)} < (\varepsilon^2)^{1/2} \cdot 1 = \varepsilon
$$


uniformly for all $u \in B$.

By the **Arzelà–Ascoli theorem**, $K(B)$ is relatively compact in $C([0, 1])$ with respect to $\|\cdot\|_\infty$. Because $\|h\|_{L^2(0, 1)} \le \|h\|_\infty$ for all $h \in C([0, 1])$, every sequence in $K(B)$ admits a subsequence converging in $\|\cdot\|_\infty$ and hence in $\|\cdot\|_{L^2(0, 1)}$. Thus, $K$ is a compact operator.

---

**3. Explicit Formula for the Adjoint $K^*$**

For any $u, v \in L^2(0, 1)$, the function $(s, t) \mapsto u(s) \overline{v(t)} \mathbf{1}_{\{0 \le s \le t \le 1\}}$ is integrable on $[0, 1]^2$ because


$$
\int_0^1 \int_0^1 |u(s)| |v(t)| \, ds \, dt = \|u\|_{L^1(0, 1)} \|v\|_{L^1(0, 1)} \le \|u\|_{L^2(0, 1)} \|v\|_{L^2(0, 1)} < \infty.
$$


Applying Fubini's theorem to exchange the order of integration over the region $0 \le s \le t \le 1$ gives:


$$
\begin{aligned} \langle Ku, v \rangle_{L^2(0, 1)} &= \int_0^1 \left(\int_0^t u(s) \, ds\right) \overline{v(t)} \, dt \\ &= \int_0^1 u(s) \left(\int_s^1 \overline{v(t)} \, dt\right) ds \\ &= \int_0^1 u(s) \overline{\left(\int_s^1 v(t) \, dt\right)} \, ds = \langle u, K^*v \rangle_{L^2(0, 1)}. \end{aligned}
$$


Hence, $K^* : L^2(0, 1) \to L^2(0, 1)$ is given explicitly by


$$
(K^*v)(s) = \int_s^1 v(t) \, dt.
$$


---

**4. Unique Solvability via the Fredholm Alternative and Associated IVP**

- **Uniqueness and Existence for $u - Ku = g$:**
Suppose $u \in \operatorname{Ker}(I - K)$, so $u = Ku$, i.e., $u(t) = \int_0^t u(s) \, ds$ in $L^2(0, 1)$. By Part 1, $Ku \in C([0, 1])$, so $u$ has a continuous representative on $[0, 1]$. By the Fundamental Theorem of Calculus, $u(t) = \int_0^t u(s) \, ds$ is then continuously differentiable on $(0, 1)$ and satisfies the initial value problem:


$$
u'(t) = u(t) \quad \text{for } t \in (0, 1), \qquad u(0) = \int_0^0 u(s) \, ds = 0.
$$


Multiplying $u'(t) - u(t) = 0$ by the integrating factor $e^{-t}$ yields $\frac{d}{dt}(e^{-t} u(t)) = 0$, so $u(t) = u(0) e^t = 0$ for all $t \in [0, 1]$. Thus $\operatorname{Ker}(I - K) = \{0\}$.
Since $K$ is a compact linear operator on the Hilbert space $H = L^2(0, 1)$, the **Fredholm Alternative** implies that $I - K$ is bijective. Consequently, for every $g \in H$, the equation $u - Ku = g$ admits a unique solution $u \in H$.

- **Differential Equation and Initial Condition for $g \in C^1[0, 1]$:**
When $g \in C^1[0, 1]$, the relation $u = Ku + g$ shows that $u$ is the sum of two continuous functions ($Ku \in C([0, 1])$ by Part 1 and $g \in C^1[0, 1]$), so $u \in C([0, 1])$. By the Fundamental Theorem of Calculus, $Ku$ is then in $C^1[0, 1]$, hence $u \in C^1[0, 1]$. Differentiating $u(t) - \int_0^t u(s) \, ds = g(t)$ and evaluating at $t = 0$ shows that $u$ satisfies:


$$
u'(t) - u(t) = g'(t) \quad \text{in } (0, 1), \qquad u(0) = g(0). \quad \blacksquare
$$


----

# Question 5

Let $K : H \to H$ be compact, and let $V \subset H$ be a closed subspace. Prove that


$$
(I - K)(V) = \{v - Kv : v \in V\}
$$


is a closed subspace of $H$.

**Hint.** Set $N = V \cap \ker(I - K)$. As in the theorem, use compactness to prove an estimate $\|(I - K)v\| \ge \beta \|v\|$ on $V \cap N^\perp$ for some $\beta > 0$. For preimages $v_n \in V$, subtract $P_N v_n$ and use the estimate to obtain a Cauchy sequence.


## Solution 
**Proof**

1. **Subspace Structure and Kernel Decomposition:**
Since $V$ is a linear subspace of $H$ and $I - K$ is a linear operator, the image $(I - K)(V)$ is a linear subspace of $H$.
Define $N = V \cap \ker(I - K)$. Because $K$ is compact, it is bounded (continuous), so $I - K$ is continuous. Thus $\ker(I - K) = (I - K)^{-1}(\{0\})$ is closed in $H$, and since $V$ is closed, $N$ is a closed subspace of $H$.
Let $P_N : H \to N$ denote the orthogonal projection onto $N$. For any $v \in V$, set $w = v - P_N v$. Since $P_N v \in N \subset V$ and $V$ is a subspace, we have $w \in V \cap N^\perp$. Moreover, because $P_N v \in \ker(I - K)$,


$$
(I - K)w = (I - K)(v - P_N v) = (I - K)v - (I - K)(P_N v) = (I - K)v.
$$


2. **Coercivity Estimate on $V \cap N^\perp$:**
We claim that there exists a constant $\beta > 0$ such that


$$
\|(I - K)w\| \ge \beta \|w\| \quad \text{for all } w \in V \cap N^\perp.
$$


Suppose for the sake of contradiction that no such $\beta > 0$ exists. Then for every $n \in \mathbb{N}$, there exists $w_n \in V \cap N^\perp$ with $\|w_n\| = 1$ such that $\|(I - K)w_n\| < \frac{1}{n}$, so $(I - K)w_n \to 0$ as $n \to \infty$.
Since $(w_n)$ is bounded in $H$ and $K$ is compact, there exists a subsequence $(w_{n_k})$ such that $(Kw_{n_k})$ converges in $H$ to some $y \in H$. Writing $w_{n_k} = (I - K)w_{n_k} + Kw_{n_k}$, we obtain


$$
w_{n_k} \to 0 + y = y \quad \text{as } k \to \infty.
$$


- By continuity of the norm, $\|y\| = \lim_{k \to \infty} \|w_{n_k}\| = 1$.
- Since $V \cap N^\perp$ is the intersection of two closed subspaces, it is closed; because $w_{n_k} \in V \cap N^\perp$ for all $k$, we have $y \in V \cap N^\perp$.
- By continuity of $I - K$, $(I - K)y = \lim_{k \to \infty} (I - K)w_{n_k} = 0$, so $y \in V \cap \ker(I - K) = N$.

Consequently, $y \in N \cap N^\perp = \{0\}$, which forces $y = 0$, contradicting $\|y\| = 1$. Thus, such a $\beta > 0$ exists.

3. **Closedness of $(I - K)(V)$:**
Let $(z_n)$ be a sequence in $(I - K)(V)$ converging to some $z \in H$. For each $n$, choose $v_n \in V$ such that $z_n = (I - K)v_n$, and define $w_n = v_n - P_N v_n \in V \cap N^\perp$. By Step 1, $(I - K)w_n = (I - K)v_n = z_n$.
Applying the lower bound from Step 2 to $w_n - w_m \in V \cap N^\perp$ gives


$$
\|w_n - w_m\| \le \frac{1}{\beta} \|(I - K)(w_n - w_m)\| = \frac{1}{\beta} \|z_n - z_m\| \to 0 \quad \text{as } n, m \to \infty.
$$


Hence $(w_n)$ is a Cauchy sequence in the Hilbert space $H$, so it converges to some limit $w \in H$. Since $w_n \in V$ for all $n$ and $V$ is closed, $w \in V$. Finally, by continuity of $I - K$,


$$
(I - K)w = \lim_{n \to \infty} (I - K)w_n = \lim_{n \to \infty} z_n = z.
$$


Thus $z \in (I - K)(V)$, proving that $(I - K)(V)$ is a closed subspace of $H$. $\blacksquare$

____

# Question 6

On $H = L^2(0, 1)$, define


$$
(Ku)(x) = \int_0^1 u(y) \, dy.
$$


1. Prove that $K$ is bounded and compact.
2. Compute $K^*$, and determine $\ker(I - K)$ and $\ker(I - K^*)$.
3. Use the Fredholm alternative to find a necessary and sufficient condition on $f \in H$ for
   
$$
u(x) - \int_0^1 u(y) \, dy = f(x)
$$

to have a solution.
4. When this condition holds, describe all solutions.

**Hint.** The range of $K$ consists of constant functions. Determine which functions satisfy $Ku = u$, and express the Fredholm compatibility condition as orthogonality to $\ker(I - K^*)$. To find all solutions, observe that $u - f$ must be constant.

## Solution 

**1. Boundedness and Compactness of $K$**

**Boundedness:**
Let $u \in H = L^2(0, 1)$. Using the Cauchy–Schwarz inequality in $L^2(0, 1)$:


$$
\|Ku\|_{L^2}^2 = \int_0^1 \left| \int_0^1 u(y) \, dy \right|^2 dx = \left| \int_0^1 u(y) \cdot 1 \, dy \right|^2 \le \left( \int_0^1 |u(y)|^2 \, dy \right) \left( \int_0^1 1^2 \, dy \right) = \|u\|_{L^2}^2.
$$


Taking square roots yields $\|Ku\|_{L^2} \le \|u\|_{L^2}$ for all $u \in H$. Thus, $K$ is a bounded linear operator with $\|K\| \le 1$ (and since $\|K(1)\|_{L^2} = \|1\|_{L^2} = 1$, we have $\|K\| = 1$).

**Compactness:**
For every $u \in H$, $(Ku)(x) = \int_0^1 u(y) \, dy$ is a constant function on $(0, 1)$. Hence, the range of $K$ is the one-dimensional subspace of constant functions:


$$
\operatorname{Ran}(K) = \operatorname{span}\{1\}.
$$


Because $K$ is a bounded linear operator with finite-dimensional range (a finite-rank operator), $K$ is **compact**.

---

**2. Adjoint $K^*$ and Kernels $\ker(I - K)$ and $\ker(I - K^*)$**

**Computing $K^*$:**
For any $u, v \in H$, using Fubini's theorem to interchange the order of integration:


$$
\langle Ku, v \rangle = \int_0^1 (Ku)(x) \overline{v(x)} \, dx = \int_0^1 \left( \int_0^1 u(y) \, dy \right) \overline{v(x)} \, dx = \int_0^1 u(y) \overline{\left( \int_0^1 v(x) \, dx \right)} \, dy = \langle u, K^* v \rangle.
$$


Therefore, the adjoint operator is given by:


$$
(K^* v)(y) = \int_0^1 v(x) \, dx,
$$


which means $K^* = K$ ($K$ is self-adjoint).

**Determining the Kernels:**
An element $u \in H$ lies in $\ker(I - K)$ if and only if $(I - K)u = 0$, or equivalently:


$$
u(x) = (Ku)(x) = \int_0^1 u(y) \, dy \quad \text{for a.e. } x \in (0, 1).
$$


Since the right-hand side is constant, $u$ must be equal almost everywhere to a constant $c$. Conversely, for any constant function $u(x) = c$, we have $(Kc)(x) = \int_0^1 c \, dy = c$. Since $K^* = K$, both kernels coincide:


$$
\ker(I - K) = \ker(I - K^*) = \operatorname{span}\{1\} = \{ \text{constant functions in } L^2(0, 1) \}.
$$


---

**3. Solvability Condition via the Fredholm Alternative**

The given integral equation can be written in operator form as:


$$
(I - K)u = f.
$$


Since $K$ is a compact operator on the Hilbert space $H$, the **Fredholm Alternative** guarantees that $\operatorname{Ran}(I - K)$ is closed, and therefore:


$$
\operatorname{Ran}(I - K) = \ker(I - K^*)^{\perp}.
$$


Using $\ker(I - K^*) = \operatorname{span}\{1\}$, the condition $f \in \ker(I - K^*)^{\perp}$ holds if and only if $\langle f, 1 \rangle = 0$:


$$
\int_0^1 f(x) \, dx = 0.
$$


Thus, $(I - K)u = f$ admits a solution $u \in H$ if and only if $\int_0^1 f(x) \, dx = 0$.

---

**4. Description of All Solutions**

Suppose $\int_0^1 f(x) \, dx = 0$. Rewriting the equation as:


$$
u(x) = f(x) + \int_0^1 u(y) \, dy,
$$


we see that any solution $u$ must differ from $f$ by a constant: $u(x) = f(x) + c$ for some scalar $c$ (in $\mathbb{C}$ or $\mathbb{R}$, depending on the underlying field of $H$).

Substituting $u(x) = f(x) + c$ back into the equation verifies that **every** constant $c$ produces a valid solution:


$$
(I - K)(f + c)(x) = (f(x) + c) - \int_0^1 (f(y) + c) \, dy = f(x) + c - \underbrace{\int_0^1 f(y) \, dy}_{=\, 0} - \int_0^1 c \, dy = f(x) + c - c = f(x).
$$


Hence, the set of all solutions is the affine subspace:


$$
u(x) = f(x) + c, \quad c \in \mathbb{C} \text{ (or } \mathbb{R}\text{)}.
$$


___

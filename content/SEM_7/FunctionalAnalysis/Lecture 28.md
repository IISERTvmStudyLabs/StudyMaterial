---
course: Functional Analysis
Lecture:
date: 2026-10-10
---
# Compact Operators on Hilbert Spaces:
**Fredholm Alternative:**
A simple example from Linear Algebra $A \in \mathbb{R}^{N \times N}$; we have the following dichotomy:
1.  Either $Ax=0$ has only the trivial sol$^n$ and in this case, $Ax=b$ has a unique sol$^n \quad \forall b \in \mathbb{R}^N$.
$A$ is injective $\Leftrightarrow A$ is surjective
Rank nullity theorem.
2. OR $Ax=0$ has a non-trivial sol$^n$ and then $Ax=b$ has a sol$^n$ if and only if
$$
b \perp \text{Ker } A^T
$$
Let $Ax=b$, $A^T y = 0$, then $(b,y) = (Ax, y) = (x, A^T y) = (x,0) = 0$.
$$
\Rightarrow b \in (\text{Ker } A^T)^\perp
$$
$$
\dim (\text{Ker } A^T)^\perp = N - \dim (\text{Ker } A^T)
$$
$$
= \dim (\text{Range } A^T)
$$
$$
= \text{rank } (A^T)
$$
$$
= \text{rank } (A)
$$
$$
= \dim (\text{Range } A)
$$

$$
\therefore \text{Range } A = (\text{Ker } A^T)^\perp
$$
$\to$ Either (i) or (ii) holds.
$\to$ An inf dim Hilbert space analogue.
What kind of operators have this prop?
___
# Theorem: (Fredholm)
Let $(H, (\cdot, \cdot)_H)$ be a real Hilbert space, and let $K \in \mathcal{L}(H,H)$ be compact. Then,
1. $\text{Ker } (I-K)$ is finite dimensional
2. $\text{Range } (I-K)$ is closed
3. $\text{Range } (I-K) = [\text{Ker } (I-K^*)]^\perp$
*(Note in margin: Why I-K? Integral eq$^ns$ $u(x) - \int_a^b k(x,y)u(y)dy = f(x)$ $\Rightarrow u - Ku = f \Rightarrow (I-K)u = f$)*
4. $\text{Ker } (I-K) = \{0\} \Leftrightarrow \text{Range } (I-K) = H$
5. $\text{Ker } (I-K)$ and $\text{Ker } (I-K^*)$ have same dim.
______
**Remark:** It follows from (iv) that EITHER $\forall f \in H, \exists ! u \in H$ s.t $u - Ku = f$, i.e., operator $I-K$ is injective & surjective.
OR the problem: find $u \in H$ satisfying $u - Ku = 0$ has non-trivial sol$^n$. In this case, the problem $u - Ku = f$ has a sol$^n$ if and only if $f \in [\text{Ker } (I-K^*)]^\perp$, i.e., $(f,v) = 0$

In order to use step 2, we subtract $P_N u_n$ from $u_n$:
$$
z_n := u_n - P_N u_n.
$$
Then, $z_n \in N^\perp$ and $(I-K)z_n = (I-K)(u_n - P_N u_n)$
$$
= (I-K) u_n = v_n
$$

From step 2, applied to $z_n - z_m$,
$$
\beta \|z_n - z_m\| \leq \|(I-K)(z_n - z_m)\|
$$
$$
= \|v_n - v_m\|
$$

Since $(v_n)$ is convergent, it is Cauchy.
$$
\Rightarrow (z_n) \text{ is Cauchy.}
$$
$$
\therefore z_n \to u \text{ and}
$$
$$
(I-K)u = \lim_{n \to \infty} (I-K) z_n
$$
$$
= \lim_{n \to \infty} (I-K)u_n
$$
$$
= \lim_{n \to \infty} v_n
$$
$$
= v.
$$

Step 4: $\text{Range } (I-K)^\perp = \text{Ker}(I-K^*)^* = \text{Ker}(I-K^*)$ (trivial! check notes)
$\Rightarrow$ statement (iii) after taking $\perp$ & noting that $\text{Range }(I-K)$ is closed.

Step 5: $\text{Ker}(I-K) = \{0\} \Rightarrow \text{Range}(I-K) = H$
$I-K$ is injective $\Rightarrow I-K$ is surjective.
Suppose $(I-K)$ is injective but not surjective.
Define $H_0 = H$, $H_n = (I-K)^n H$, $n=1,2,\dots$
$$
H_0 \supsetneq H_1 \supsetneq \dots
$$

First claim: $H_n$'s are closed.
Since $N = \{0\}$, we have $\exists \beta > 0$ s.t
$$
\|(I-K)u\| \geq \beta \|u\| \quad \forall u \in H.
$$
$(N^\perp = H)$

If $M \subset H$ is closed, then $(I-K)M$ is also closed.
Let $v_n = (I-K)u_n \in (I-K)M$, where $u_n \in M$. Suppose $v_n$ cgt to $v$.
$(v_n)$ is Cauchy $\Rightarrow (u_n)$ is Cauchy.
Since $M$ is closed, $u = \lim_{n \to \infty} u_n \in M$.
$$
\therefore v_n \to v = (I-K)u
$$
$$
\Rightarrow (I-K)M \text{ is closed.}
$$

The claim is proved, $M=H_n$, $n=0,1,\dots$.


$\forall v$ satisfying $v - K^*v = 0$.

This EITHER/OR dichotomy is called Fredholm alternative

**Pf:** For convenience, denote $N := \text{Ker}(I-K)$, $R := \text{Range}(I-K)$

**Step 1:** $N$ is fin dimensional.
For $u \in N$, $(I-K)u = 0$.
$$
Ku = u
$$
On $N$, $K$ acts as the identity.
If $N$ were inf-dim, we can choose an orthonormal seq $(e_n) \in N$.
$$
\|Ke_n - Ke_m\|^2 = \|e_n - e_m\|^2 = \|e_n\|^2 + \|e_m\|^2 = 2.
$$
$\Rightarrow (Ke_n)$ cannot have any cgt subseq, though $(e_n)$ is bdd.
$\Rightarrow\Leftarrow$
as $K$ is compact.
$$
\therefore \dim N < \infty.
$$

**Step 2:** $I-K$ has a lower bd on $N^\perp$: $\exists$ a $\beta > 0$ s.t
$$
\|(I-K)u\| \geq \beta \|u\| \quad \forall u \in N^\perp
$$
(Can't happen on $N$!)
Suppose no such $\beta$ exists. Then $\exists u_n \in N^\perp$, $\|u_n\| = 1$
so that $\|(I-K)u_n\| < 1/n$
Since $(u_n)$ is bdd, it has a weakly cging subseq, not relabelled $u_n \rightharpoonup u$
Since $K$ is compact, $Ku_n \to Ku$. But $u_n = (I-K)u_n + Ku_n$
and $(I-K)u_n \to 0$.
Letting $n \to \infty$, we get $u_n \to Ku$
But $u_n \rightharpoonup u$ & strong cge $\Rightarrow u_n \to Ku$
uniqueness of weak lim $\Rightarrow Ku = u$
$$
\therefore \|u\| = \lim_{n \to \infty} \|u_n\| = 1.
$$
But $u \in N^\perp$ and $(I-K)u = 0 \Rightarrow u \in N$; Not possible as $N \cap N^\perp = \{0\}$ & $\|u\| = 1$.




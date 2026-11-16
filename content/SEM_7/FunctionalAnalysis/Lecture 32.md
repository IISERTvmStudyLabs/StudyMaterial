---
course: Functional Analysis
Lecture:
date: 2026-10-27
---
**Step 3:** $R$ is closed $\Rightarrow$ statement (ii).
Suppose $v_n \in R$ and suppose $v_n \to v$. Since $v_n \in R$,
let $u_n \in H$ s.t $(I-K)u_n = v_n$
We show that $\exists u \in H$ s.t $(I-K)u = v$.
But, $u_n$ need not cge.

Second claim: each inclusion $H_n \supset H_{n+1}$ is strict, i.e., $H_n \supsetneq H_{n+1}$
If not, suppose for some $n$, $H_n = H_{n+1}$
$$
\Rightarrow \forall x \in H, \quad \exists y \in H \text{ s.t}
$$
$$
(I-K)^n x = (I-K)^{n+1} y = (I-K)^n (I-K) y
$$
Let $x \in H$, then $(I-K)^n x \in H_n = H_{n+1} = (I-K)^{n+1} H$
$$
\Rightarrow \exists y \in H \text{ s.t } (I-K)^n x = (I-K)^{n+1} y
$$
Since $I-K$ is injective, $(I-K)^n$ is injective.
$\therefore$ we get $x = (I-K)y$. Since $x$ is arbitrary, this would mean that $(I-K)$ is surjective, not possible.
$$
\therefore H_n \supsetneq H_{n+1} \quad \forall n
$$

Choose $e_n \in H_n \cap H_{n+1}^\perp$ & $\|e_n\| = 1$
Choose $w_n \in H_n \setminus H_{n+1}$ and take $z_n = w_n - P_{H_{n+1}} w_n \in H_{n+1}^\perp$
But $z_n \in H_n$ & $z_n \neq 0$ - if $z_n = 0$, we get $w_n = P_{H_{n+1}} w_n \in H_{n+1}$. (not possible)

Take $e_n := \frac{z_n}{\|z_n\|}$
Let $m < n$. Now $K = I - (I-K)$
$$
K e_m - K e_n = e_m - e_n - (I-K) (e_m - e_n)
$$
$$
= e_m + \{ (I-K) e_n - e_n - (I-K) e_m \}
$$
$$
= e_m + z, \text{ say}
$$

Claim: $z \in H_{m+1}$
$$
(I-K) e_m \in H_{m+1}
$$
$$
e_n \in H_n \subset H_{m+1}
$$
$$
(I-K) e_n \in H_{n+1} \subset H_{m+1}
$$
But, by choice, $e_m \in H_{m+1}^\perp$.
$$
\therefore \| K e_m - K e_n \|^2 = \|e_m\|^2 + \|z\|^2 \geq 1
$$
$\Rightarrow (K e_n)_n$ cannot have any cgt subseq $(\Rightarrow\Leftarrow)$
as $(e_n)$ is bdd & $K$ is compact

**Step 6:** $\text{Range} (I-K) = H \Rightarrow \text{Ker} (I-K) = \{0\}$
$\text{Range} (I-K) = H \Rightarrow \text{Ker} (I-K^*) = \{0\}$.
$\therefore I-K^*$ is injective
By step 5, $I-K^*$ is surjective, since $K^*$ is compact
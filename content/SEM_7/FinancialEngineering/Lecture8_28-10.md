---
course: Financial Engineering
Lecture: 8
date: 2026-10-28
tags:
  - financial-engineering
  - binomial-model
  - arbitrage-free
---

### Theorem: Completeness of Binomial Model
If a binomial model is arbitrage-free, then it is complete.


**Proof:** 
It is enough to prove that any contingent claim is reachable under binomial pricing. Let $X$ be a contingent claim with contract function $\Phi$. We need to prove there exists a portfolio $h$ such that $V_{1}^{h}=X=\Phi(Z)$.

In Binomial pricing with a stock and bond ($B_{0}=1$), we have:


$$
V_{1}^{h}=xB_{0}(1+R)+yS_{0}Z = x(1+R)+yS_{0}Z
$$


$\Rightarrow V_{1}^{h}=x(1+R)+yS_{0}u$ if $Z=u
$$
\Rightarrow V_{1}^{h}=x(1+R)+yS_{0}d$ if $Z=d$

In order to have $V_{1}^{h}=\Phi(Z)$, we should have:

1. $x(1+R)+yS_{0}u=\Phi(u)$
    
2. $x(1+R)+yS_{0}d=\Phi(d)$
$$
\Rightarrow y=\frac{\Phi(u)-\Phi(d)}{S_{0}(u-d)}
$$

$$
x=\frac{u\Phi(d)-d\Phi(u)}{(1+R)(u-d)}
$$
This means that we can replicate the contingent claim with a portfolio $h=(x,y)$.

---

## 3. Risk-Neutral Pricing Formula

### Theorem
If the binomial model is arbitrage-free, then the arbitrage-free price of a contingent claim $X$ is:
$$
\Pi(0, X) = \frac{1}{1+R} \mathbb{E}^Q(X)
$$
**Proof:**
Since the binomial model is arbitrage-free, it is complete. Thus, any contingent claim $X$ is reachable and can be perfectly replicated by a portfolio $h$ such that $X = V_1^h$.
$$
\Pi(0, X) = V_0^h = x B_0 + y S_0 = x + y S_0 \quad (\text{assuming } B_0 = 1)
$$
Substituting the values of $x$ and $y$:
$$
\Pi(0, X) = \frac{u \Phi(d) - d \Phi(u)}{(1+R)(u - d)} + \frac{\Phi(u) - \Phi(d)}{S_0(u - d)} S_0
$$

$$
= \frac{\Phi(d)[u - (1+R)] + \Phi(u)[(1+R) - d]}{(1+R)(u - d)}
$$

$$
= \frac{1}{1+R} \left[ \Phi(d) \left(\frac{u - (1+R)}{u - d}\right) + \Phi(u) \left(\frac{(1+R) - d}{u - d}\right) \right]
$$

$$
= \frac{1}{1+R} \mathbb{E}^Q[\Phi(Z)] = \frac{1}{1+R} \mathbb{E}^Q[X]
$$
---

## 4. Multi-Asset and Binomial Pricing

Let us assume that the market has $N$ assets consisting of stocks, bonds, derivatives, etc.
Let $S_t^i$ denote the price of asset $i$ at time $t$.
$$
S_t = \begin{bmatrix} S_t^1 \\ S_t^2 \\ \vdots \\ S_t^N \end{bmatrix}, \quad S_0 = \begin{bmatrix} S_0^1 \\ S_0^2 \\ \vdots \\ S_0^N \end{bmatrix}
$$
To introduce randomness, we use the sample space $\Omega = \{\omega_1, \omega_2, \dots, \omega_m\}$ with probabilities:
$$
Q(\omega_j) = q_j, \quad j = 1, \dots, m
$$
Let $S_1^i(\omega_j)$ be the price of asset $i$ at time $1$ if state $\omega_j$ occurs. The payoff matrix $D$ is given by:
$$
D = \begin{bmatrix} 
S_1^1(\omega_1) & S_1^1(\omega_2) & \cdots & S_1^1(\omega_m) \\ 
S_1^2(\omega_1) & S_1^2(\omega_2) & \cdots & S_1^2(\omega_m) \\ 
\vdots & \vdots & \ddots & \vdots \\ 
S_1^N(\omega_1) & S_1^N(\omega_2) & \cdots & S_1^N(\omega_m) 
\end{bmatrix} = [d_1, d_2, \dots, d_m], \quad d_j \in \mathbb{R}^N
$$
Let $h = [h_1, h_2, \dots, h_N]$ be the portfolio vector. The portfolio value at time $t$ is:
$$
V_t^h = \sum_{i=1}^N h_i S_t^i = h S_t
$$
A portfolio is an **arbitrage free** if $V_0^h < 0$ and $V_1^h \ge 0$ (i.e., $V_0^h < 0$ and $V_1^h(\omega_j) \ge 0$ for all $j$).

---

### Farkas' Lemma
Let $d_0, d_1, \dots, d_m$ be column vectors in $\mathbb{R}^N$. Then **exactly one** of the following properties holds:

1. There exist non-negative numbers $z_1, z_2, \dots, z_m \ge 0$ such that:
$$
d_0 = \sum_{i=1}^m z_i d_i
$$
2. There exists a row vector $h \in \mathbb{R}^N$ such that:
$$
h d_0 < 0 \quad \text{and} \quad h d_j \ge 0 \quad \forall j = 1, \dots, m$$

**Proof Sketch:**
Let $K$ be the set consisting of all possible non-negative linear combinations of $d_1, d_2, \dots, d_m$. Then $K$ is a convex cone containing the origin. Two mutually exclusive possibilities can occur:
* $d_0 \in K$
* $d_0 \notin K$

* If $d_0 \in K$, then there exist $z_i \ge 0$ such that $d_0 = \sum_{i=1}^m z_i d_i$.
* If $d_{0} \notin K$, then there exists a hyperplane that separates $d_{0}$ and $K$. This implies there is a vector $h$ normal to the hyperplane such that $hd_{0} < 0$ and $hd_{j} \ge 0$.
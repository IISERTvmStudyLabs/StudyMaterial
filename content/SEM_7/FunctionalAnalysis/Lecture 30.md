---
course: Functional Analysis
Lecture:
date: 2026-10-29
---
5. $$
\dim \ker (I-K) = \dim \ker (I-K^*)
$$
$$
N = \ker (I-K), \quad M = \ker (I-K^*)
$$
By step 1, (Statement (1)), both $N$ and $M$ are finite dim.

**Step 7:** 
$$
\dim N \ge \dim M
$$
Suppose not, i.e. $\dim N < \dim M$. Define an injective map $A_0 : N \to M$ that is not surjective. Extend it to $H$ by $A = A_0 P_N$ then $A \equiv 0$ on $N^\perp$, it is bdd and range $A$ is finite dim.
Hence $A$ is cpt. Define $S = (I-K) - A = I - (K+A)$
We show that $S$ is injective but not surjective, contradicting steps 5 and 6 ($K+A$ is cpt). Fix $u \in N$, $u = u_1 + u_2$ where $u_1 \in N$ and $u_2 \in N^\perp$, then
$$
S_u = ((I-K)-A)(u_1+u_2)
$$
$$
= (I-K)(u_1+u_2) - A(u_1+u_2)
$$
$$
= (I-K)u_2 - A u_1 \in R \quad (\in M - R^\perp)
$$
$\therefore S_u = 0 \implies$ by orthogonality $(I-K)u_2 = 0$ and $Au_1 = 0$
$\implies u_2 \in N \cap N^\perp$ and $Au_1 = A_0 P_N u_1 = A_0 u_1 = 0 \implies u_1 = 0$ ($A_0$ is inject)
$\therefore u_2 = 0$ and $u_1 = 0$ or $u=0$
$\implies S$ is injective

Range $A \subsetneq M$ and choose $w \in M \setminus \text{Range } A$.
Suppose $Su = w$. Write $u = u_1 + u_2, \quad u_1 \in N, \quad u_2 \in N^\perp$
$$
w = Su
$$
$$
= (I-K)u_2 - A u_1 \quad (\text{where } (I-K)u_2 \in R, \quad Au_1 \in M)
$$
$$
= 0 - A u_1
$$
Thus $-Au_1 = w$, this is not possible as $w \in M \setminus \text{Range } A$.
Hence $S$ can't be surjective.

A contradiction to step 5 & 6 ($K+A$ is cpt) : $\dim N \ge \dim M$.

**Step 8:** Reverse the inequality, apply step 7 to $K^*$.
$$
(I-K^*)^* = (I-K)
$$
By step 7, $\dim M \ge \dim N$.
$\implies \dim N = \dim M$, proves statement (v).

---

# Spectral Theory of Compact Operators:

# Definition: Invertible
Let $X$ be Banach and $L \in \mathcal{L}(X)$. We say that $L$ is invertible if $\exists M \in \mathcal{L}(X)$ such that. $LM = ML = I$, the identity on $X$.
* $M$ must be unique.
* Denote it by $L^{-1}$.
* $L$ is invertible $\iff$ $L$ is bijective.

$L$ is invertible $\implies L$ is bijective, clear.
$L$ is bijective $\implies$ set theoretic inverse $L^{-1} : X \to X$ exists.
$L$ is bijective and $L$ is linear $\implies L^{-1}$ is linear.
Bounded inverse (open mapping theorem) gives the boundedness of $L^{-1}$.

## Proposition
Let $X$ be Banach, $L \in \mathcal{L}(X)$ and $\|L\|_{\mathcal{L}(X)} < 1$, then,
1. $I-L$ is invertible
2. $(I-L)^{-1} = \sum_{n=0}^{\infty} L^n$ (This series is called Neumann series)
($\frac{1}{1-x} = 1 + x + \cdots, |x|<1 \to \text{Not Von Neumann}$)

**Proof:** 
$$
L^0 = I. \quad S_n = I + L + \cdots + L^n, \quad n \in \mathbb{N}.
$$
We show that $(S_n)_{n \in \mathbb{N}}$ is Cauchy in $\mathcal{L}(X)$.
$$
\|L^n\|_{\mathcal{L}(X)} \le \|L\|^n_{\mathcal{L}(X)}
$$
$$
\|L^2 x\| = \|L(Lx)\| \le \|L\| \cdot \|Lx\| \le \|L\|^2 \cdot \|x\|
$$
Since $\|L\| < 1$, for $n > m$,
$$
\|S_n - S_m\| = \|L^{m+1} + \cdots + L^n\|_{\mathcal{L}(X)}
$$
$$
\le \|L\|^{m+1}_{\mathcal{L}(X)} + \cdots + \|L\|^n_{\mathcal{L}(X)} \to 0 \quad \text{as } n,m \to \infty
$$
$\implies (S_n)_{n \in \mathbb{N}}$ is Cauchy in $\mathcal{L}(X)$ and hence $S_n \to M \in \mathcal{L}(X)$.
$$
M = \sum_{n=0}^{\infty} L^n
$$

For $n \in \mathbb{N}$,
$$
L S_n = S_n L = S_{n+1} - I
$$
Now, $n \to \infty \implies$
$$
L M = M L = M - I
$$
$$
\implies M(I-L) = (I-L)M = I
$$
$$
\text{or } M = (I-L)^{-1} = \sum_{n=0}^{\infty} L^n
$$

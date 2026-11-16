---
course: Functional Analysis
Lecture:
date: 2026-09-29
---
$\mathcal{L}: X \to Y$ is bounded linear
$\mathcal{L}^*: Y^* \to X^*, \quad {}_{X^*} \langle \mathcal{L}^* \phi, x \rangle_X = {}_{Y^*} \langle \phi, \mathcal{L}x \rangle_Y, \quad  x \in X \;, \phi \in Y^*, \text{ the adjoint of } \mathcal{L}.$

## Adjoint:

## Theorem 1
Let $\mathcal{L} \in \mathcal{L}(X, Y)$ and let $\mathcal{L}^*: Y^* \to X^*$ be its adjoint. Then,
1. $\mathcal{L}^* \in \mathcal{L}(Y^*, X^*)$, $\|\mathcal{L}^*\|_{\mathcal{L}(Y^*, X^*)} = \|\mathcal{L}\|_{\mathcal{L}(X,Y)}$
2. $\text{Ker } \mathcal{L} = \underbrace{(\text{Range } \mathcal{L}^*)^\perp}_{ \text{ pre-annihilator of Ker }  \mathcal{L}}$  , $\text{Ker } \mathcal{L}^* = \underbrace{(\text{Range } \mathcal{L})^\perp}_{\text{annihilator of Range } \mathcal{L}}$

**Proof:** 
1. Clearly, $\mathcal{L}^* \in \mathcal{L}(Y^*, X^*)$

$$
\begin{aligned}
\|\mathcal{L}^*\|_{\mathcal{L}(Y^*, X^*)} &= \sup_{\substack{\phi \in Y^* \\ \|\phi\|_{Y^*} = 1}} \|\mathcal{L}^* \phi\|_{X^*} \\
&= \sup_{\substack{\phi \in Y^* \\ \|\phi\|_{Y^*} = 1}} \sup_{\substack{x \in X \\ \|x\|_X = 1}} |{}_{X^*} \langle \mathcal{L}^* \phi, x \rangle_X| \\
&= \sup_{\substack{\phi \in Y^* \\ \|\phi\|_{Y^*} = 1}} \sup_{\substack{x \in X \\ \|x\|_X = 1}} |{}_{Y^*} \langle \phi, \mathcal{L}x \rangle_Y| \\
&= \sup_{\substack{x \in X \\ \|x\|_X = 1}} \|\mathcal{L}x\|_Y \\
&= \|\mathcal{L}\|_{\mathcal{L}(X, Y)} \quad (\text{Pd})
\end{aligned}
$$

2. $\text{Ker } \mathcal{L} = (\text{Range } \mathcal{L}^*)_\perp$

$$
\begin{aligned}
x \in \text{Ker } \mathcal{L} &\iff \mathcal{L}x = 0 \text{ in } Y \\
&\iff {}_{Y^*} \langle \phi, \mathcal{L}x \rangle_Y = 0 \ \forall \phi \in Y^* \\
&\iff {}_{X^*} \langle \mathcal{L}^* \phi, x \rangle_X = 0 \ \forall \phi \in Y^* \\
&\iff x \in (\text{Range } \mathcal{L}^*)_\perp 
\end{aligned}
$$

$\text{Ker } \mathcal{L}^* = (\text{Range } \mathcal{L})^\perp$

$$
\begin{aligned}
\phi \in \text{Ker } \mathcal{L}^* &\iff \mathcal{L}^* \phi = 0 \text{ in } X^* \\
&\iff {}_{X^*} \langle \mathcal{L}^* \phi, x \rangle_X = 0 \ \forall x \in X \\
&\iff {}_{Y^*} \langle \phi, \mathcal{L}x \rangle_Y = 0 \ \forall x \in X \\
&\iff \phi \in (\text{Range } \mathcal{L})^\perp 
\end{aligned}
$$

---
# Compact Operators:

$\overline{B_1(0)}$ can't be compact in an infinite dimensional Banach space $X$. 
e.g. $X = l_2, \ (e_n)_{n \in \mathbb{N}}$

## Compact Linear Operator
Let $X$ and $Y$ be Banach. A bounded linear map $\mathcal{L}: X \to Y$ is called compact if, $\forall$ bounded sequence $(x_n)_{n \in \mathbb{N}} \subset X$, $\exists$ subsequence $(x_{n_k})_{k \in \mathbb{N}}$ such that. $(\mathcal{L}x_{n_k})_{k \in \mathbb{N}}$ cgs in $Y$.

$\mathcal{L} \text{ is compact} \iff \text{for every bounded } U \subset X, \ \overline{\mathcal{L}(U)} \text{ is compact in } Y.$

**Proof:**
($\impliedby$) clear

($\implies$) Let $U \subset X$ be bounded. TST $\overline{\mathcal{L}(U)}$ is compact, i.e., every sequence in $\overline{\mathcal{L}(U)}$ has a subsequence that cgs in $\overline{\mathcal{L}(U)}$.

Let $(y_n)_{n \in \mathbb{N}} \subset \overline{\mathcal{L}(U)}$. By the defintion of closure, $\exists z_n \in \mathcal{L}(U)$ such that. 

$$ \|y_n - z_n\|_Y < 1/n \ \forall n $$

Since $z_n \in \mathcal{L}(U)$, $z_n = \mathcal{L}x_n$ for $x_n \in U \implies (x_n)_{n \in \mathbb{N}} \subset U$ & $U$ is bounded. 
Hence $(x_n)$ is bounded.

Since $\mathcal{L}: X \to Y$ is compact, $(x_n)$ has a subsequence $(x_{n_k})$ such that. 
$(z_{n_k}) = (\mathcal{L}x_{n_k})$ cgs to $y \in Y$.

Now, 

$$
\begin{aligned}
\|y_{n_k} - y\|_Y &\le \|y_{n_k} - z_{n_k}\|_Y + \|z_{n_k} - y\|_Y \\
&< 1/n_k + \|z_{n_k} - y\|_Y \\
&\to 0 \text{ as } k \to \infty
\end{aligned}
$$

$z_{n_k} \to y \text{ as } k \to \infty$ & $z_{n_k} \in \mathcal{L}(U)$

Hence, $y \in \overline{\mathcal{L}(U)}$.

$$ \therefore \overline{\mathcal{L}(U)} \text{ is compact} $$
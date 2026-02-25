## Existence and Uniqueness Theorem

Let the following equation,

$$b(x) = a_0(x)y^n + a_1(x)y^{n-1} + \ldots + a_n(x)y \longrightarrow \text{(I)}$$

be the $n^{\text{th}}$ order linear DE, where $a_0, ..., a_n$ and $b$ are cont. real val. functions on a real int., $I = [a,b]$ and $a_0(x) \neq 0$ $\forall x \in I$

Let $x_0$ be any part of $I$ and $C_0, ..., C_{n-1}$ be any arbitrary real const. Then, $\exists$ a unique solution $\phi$ of (I) such that,

$$\phi(x_0) = C_0, \quad \phi'(x_0) = C_1, \quad \ldots, \quad \phi^{(n-1)}(x_{n-1}) = C_{n-1}$$

and the solution $\phi$ is defined over the entire int. $I$.

---

## Theorem: Superposition Principle

Let $L_n(y) = b_i(x)$, $i=1, \ldots, K$ be $K$ diff non-homog. linear DE of order $n$, where

$$L_n(y) = a_0(x)y^n + \ldots + a_n(x)y^-, \quad a_0 \neq 0$$
$$\longrightarrow \text{(2)}$$

for any $x \in I$, $(a_0, \ldots, a_n)$ are cont. funcs. of $x$ defined on $I$. Let $\phi_i$ be a particular soln. of (2). Then, $\sum_{i=1}^K c_i\phi_i$ is

a particular soln. of $L_n(y) = \sum_{i=1}^K c_i b_i(x)$

---

## Proof

Given, $\phi_i$ is a particular soln. of (2).

$$\Rightarrow L_n(\phi_i) = b_i$$

To prove that $\sum c_i\phi_i$ is a soln. of

$$L_n(y) = \sum c_i b_i$$

---

We have,

$$L_n(y) = a_0y^n + a_1y^{n-1} + \ldots + a_ny^-$$

Replace $y$ by $\sum c_i\phi_i$.

$$\Rightarrow L_n(\sum c_i\phi_i) = a_0(\sum c_i\phi_i)^n + \ldots + a_n(\sum c_i\phi_i)$$
$$= a_0[c_1\phi_1^n + c_2\phi_2^n + \ldots + c_K\phi_K^n] + \ldots$$

$$\Rightarrow c_1[a_0\phi_1^n + a_1\phi_1^{n-1} + \ldots + a_n\phi_1^-] + \ldots + c_K[a_0\phi_K^n + a_1\phi_K^{n-1} + \ldots + a_n\phi_K^-]$$

$$= c_1b_1 + c_2b_2 + \ldots + c_Kb_K$$
$$= \sum c_ib_i$$

Hence, $\sum c_i\phi_i$ is a soln of $L_n(y) = \sum c_ib_i$.

---

## First Order Linear DE

$$\frac{dy}{dx} + P(x) \cdot y = Q(x)$$

**Case 1:** $Q(x) = 0$,

$y' + Py = 0$

### Theorem

Consider $y' + Py = 0$. where $\rho$ is a complex constant. If $c \in C$, then the func. $\phi$ is defined by $\phi(x) = ce^{-Px}$ is a solution, and moreover, every soln. has this form.

### Proof

Let $\phi$ is is a soln of $y' + Py = 0$.

$$\Leftrightarrow \phi' = ce^{-Px} \longrightarrow \text{(1)}$$

Suppose $\phi$ is a soln of (1).

$$\Rightarrow \phi' + \rho\phi = 0$$
$$\Rightarrow e^{Px}(\phi' + \rho\phi) = 0$$
$$\Rightarrow (e^{Px}\phi)' = 0$$
$$\Rightarrow e^{Px}\phi = c$$
$$\phi = ce^{-Px}$$

Conversely, suppose $\phi = ce^{-Px}$, then $\phi' + \rho\phi = 0$

$$\Rightarrow -\rho c \cdot e^{-Px} + \rho ce^{-Px}$$
$$\Rightarrow 0$$

$$\therefore ce^{-Px} \text{ is a soln of (1).}$$

---

**Case 2:** $\phi' + Py = Q(x)$

### Theorem

Consider the DE, $y' + Py = Q(x)$, where $\rho \in C$, and $Q$ is a cont. func on the int. $I$. If $x_0$ is a point in $I$ and $c$ is any const., then the func. $\phi$ defined by:

$$\phi(x) = e^{-P(x)} \int_{x_0}^x e^{Pt} \cdot Q(t) \, dt + c$$

of the given DE and every soln is of this form.

### Proof

Let $\phi$ be any soln. of $y' + Py = Q(x)$.

$$\Rightarrow \phi' + P\phi = Q$$
$$\Rightarrow e^{Px}(\phi' + P\phi) = e^{Px}\phi(x)$$
$$\Rightarrow (e^{Px}\phi)' = e^{Px}\phi(x)$$

$$\Rightarrow e^{Px}\phi = \int e^{Pt} \cdot Q(t) \, dt + c$$
$$\Rightarrow \phi = e^{-Px} \cdot \int e^{Pt} \cdot g(t) \, dt + ce^{-Px}$$

### Problems

1. $y' - 2y = 1$
2. $y' + y = e^x$
3. $y' - 2y = x^2 + x$
4. $xy' + y = 2e^{-x}$

---

**Case 3:** $y' + \rho(x) \cdot y = Q(x)$

### Theorem

If $P$ and $Q$ are cont. funcs. Let $A$ be any cont. func, where $A' = P$. Then the func. $\phi$ given by

$$\phi(x) = e^{-A(x)} \int_{x_0}^x e^{At} \cdot Q(t) \, dt, \quad x_0 \in I$$

is the soln of the eqn. $y' + Py = Q$ on $I$. The func. $\phi_c$ given by, $\longrightarrow$ (1)

$$\phi_c(x) = e^{-A(x)} \text{ is a soln of the}$$

homog. eqn., $y' + \rho(x) \cdot y = 0$.

If $c$ is any constant, then $\phi + c \cdot \phi_c$ is a solution of (1) and every soln. of (1) has the same form.


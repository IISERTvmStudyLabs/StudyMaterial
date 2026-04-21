Jan 22, Lect - 8

## Uniqueness Theorem for IVP

Let $\alpha, \beta$ be any two constants and $x_0 \in \mathbb{R}$ on any interval $I$ containing $x_0$. Then there exists at most one solution $\phi$ of the Initial Value Problem (IVP):

$$
L(y) = 0, \quad y(x_0) = \alpha, \quad y'(x_0) = \beta
$$

### Proof

Let $\phi$ and $\psi$ be the two solutions of:

$$
L(y) = 0, \quad y(x_0) = \alpha, \quad y'(x_0) = \beta \quad \dots \text{(1)}
$$

$\phi$ is a solution of (1).
$\implies L(\phi) = 0, \quad \phi(x_0) = \alpha, \quad \phi'(x_0) = \beta$.

$\psi$ is a solution of (1).
$\implies L(\psi) = 0, \quad \psi(x_0) = \alpha, \quad \psi'(x_0) = \beta$.

Let $\mu = \phi - \psi$.

$$
\begin{aligned}
\therefore L(\mu) &= L(\phi - \psi) \\
&= L(\phi) - L(\psi) = 0
\end{aligned}
$$

$$
\begin{aligned}
\mu(x_0) &= (\phi - \psi)(x_0) = 0 \\
\mu'(x_0) &= 0
\end{aligned}
$$

$$
\|\mu(x)\| \le \|\mu(x_0)\| e^{K|x - x_0|}
$$

$$
\begin{aligned}
\implies \|\mu(x)\| &= 0 \\
\implies \phi &= \psi
\end{aligned}
$$

---

## Problems

### **Example 1.**
Solve
$$
\begin{aligned}
y'' - 2y' - 3y &= 0 \\
y(0) &= 0 \\
y'(0) &= 1
\end{aligned}
$$

### **Example 2.**
Consider the equation
$$
y'' + y' - 6y = 0
$$

a) Compute the solution $\phi$ satisfying $\phi(0) = 1, \phi'(0) = 0$.
b) Compute the solution $\psi$ satisfying $\psi(0) = 0, \psi'(0) = 1$.
c) Compute $\psi(1)$ and $\phi(1)$.

### **Solution 1.**
$$
y'' - 2y' - 3y = 0, \quad y(0) = 0, \quad y'(0) = 1
$$

**Characteristic equation:**
$$
\begin{aligned}
r^2 - 2r - 3 &= 0 \\
r &= 3, -1
\end{aligned}
$$

**Solution:**
$$
y(x) = C_1 e^{-x} + C_2 e^{3x}
$$

$$
\begin{aligned}
y(0) &= C_1 + C_2 = 0 \implies C_1 = -C_2 \\
y'(0) &= -C_1 + 3C_2 = 1 \implies C_2 = \frac{1}{4}, \quad C_1 = -\frac{1}{4}
\end{aligned}
$$

### **Solution 2.**
**Characteristic equation:**
$$
\begin{aligned}
r^2 + r - 6 &= 0 \\
r &= -3, +2
\end{aligned}
$$

**General solution:**
$$
y(x) = C_1 e^{-3x} + C_2 e^{2x}
$$

**For $\phi(x)$:**
$$
\begin{aligned}
\phi(0) &= C_1 + C_2 = 1, \quad C_1 = 1 - C_2 \\
\phi'(0) &= -3C_1 + 2C_2 = 0
\end{aligned}
$$

$$
\begin{aligned}
-3 + 3C_2 + 2C_2 &= 0 \\
C_2 &= \frac{3}{5}, \quad C_1 = \frac{2}{5}
\end{aligned}
$$

$$
\phi(x) = \frac{2}{5} e^{-3x} + \frac{3}{5} e^{2x}
$$

**Similarly for $\psi(x)$:**
$$
\psi(x) = -\frac{1}{5} e^{-3x} + \frac{1}{5} e^{2x}
$$

---

## $n^{\text{th}}$ order homogeneous linear equation with constant coefficients

## Theorem
Consider the $n^{\text{th}}$ order linear equation with constant coefficients,
$$
L(y) = a_0 y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = 0
$$

i) If $r_1, r_2, \dots, r_n$ are $n$ distinct roots of the characteristic polynomial $P(r)$, then
$$
e^{r_1 x}, e^{r_2 x}, \dots, e^{r_n x}
$$
are linearly independent (LI) solutions of $L(y) = 0$.

ii) If $r_1, r_2, \dots, r_s$ be distinct roots of the characteristic polynomial $P(r)$, and each $r_i$ is of multiplicity $m_i$, with $m_1 + m_2 + \dots + m_s = n$.

Then,
$$
\begin{aligned}
&\implies e^{r_1 x}, x e^{r_1 x}, \dots, x^{m_1-1} e^{r_1 x} \\
&\vdots \\
&\implies e^{r_s x}, x e^{r_s x}, \dots, x^{m_s-1} e^{r_s x}
\end{aligned}
$$
are LI solutions.


### **Proof**

Consider $L(e^{rx}) = P(r) e^{rx}$.

When $P(r) = a_0 r^n + a_1 r^{n-1} + \dots + a_n = 0$.

(i) If $P(r)$ has $n$ distinct roots $r_1, r_2, \dots, r_n$, then $e^{r_1 x}, e^{r_2 x}, \dots, e^{r_n x}$ are the solutions of $L(y) = 0$.

(ii) Suppose $r_i$ is a root of $P(r)$ with multiplicity $m_i$.
$P(r_i) = P'(r_i) = P''(r_i) = \dots = P^{(m_i-1)}(r_i) = 0$.

### **Claim**
$x^k e^{r_i x}$ is a solution of $L(y) = 0$ for $k = 1, \dots, m_i-1$.

Consider,

$$
\frac{\partial^k}{\partial r^k} (L(e^{rx})) = L(x^k e^{rx}) \bigg|_{r=r_i}
$$

But,

$$
\begin{aligned}
\frac{\partial^k}{\partial r^k} (L(e^{rx})) &= \frac{\partial^k}{\partial r^k} (P(r) e^{rx}) \\
&= \left[ P^{(k)}(r) + \binom{k}{1} P^{(k-1)}(r) x + \binom{k}{2} P^{(k-2)}(r) x^2 + \dots + P(r) x^k \right] e^{rx}
\end{aligned}
$$

For $k = 1, \dots, m_i-1$:

$$
= 0
$$

$$
\begin{aligned}
\implies L(x^k e^{rx}) &= 0 \bigg|_{r=r_i} \\
\implies x^k e^{r_i x} &\text{ is a solution of } L(y) = 0.
\end{aligned}
$$

This is true for any $r_i$.

---

## Theorem
## Theorem

Let $\phi$ be the solution of

$$
L(y) = y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = 0
$$

on an interval $I$ containing a point $x_0 \in I$. Then for all $x \in I$,

$$
\|\phi(x)\| e^{-K|x-x_0|} \le \|\phi(x)\| \le \|\phi(x)\| e^{K|x-x_0|}
$$

where $K = 1 + |a_1| + |a_2| + \dots + |a_n|$.

### **Proof**

Let $u(x) = \|\phi(x)\|^2 = |\phi(x)|^2 + |\phi'(x)|^2 + \dots + |\phi^{(n-1)}(x)|^2 = \phi\bar{\phi} + \phi'\bar{\phi'} + \dots + \phi^{(n-1)}\bar{\phi}^{(n-1)}$.

$$
u'(x) = \phi\bar{\phi}' + \bar{\phi}\phi' + \dots + \phi^{(n-1)}\bar{\phi}^{(n)} + \bar{\phi}^{(n-1)}\phi^{(n)}
$$

$$
|u'(x)| \le 2|\phi||\phi'| + \dots + 2|\phi^{(n-1)}||\phi^{(n)}| \quad \dots (A)
$$

Since $\phi$ is a solution of $L(y) = 0$, we have

$$
\phi^{(n)} + a_1 \phi^{(n-1)} + \dots + a_n \phi = 0
$$

$$
\begin{aligned}
\implies \phi^{(n)} &= -(a_1 \phi^{(n-1)} + \dots + a_n \phi) \\
\implies |\phi^{(n)}| &\le |a_1| |\phi^{(n-1)}| + \dots + |a_n| |\phi|
\end{aligned}
$$

Substitute $|\phi^{(n)}|$ in (A):

$$
\begin{aligned}
|u'(x)| &\le 2|\phi||\phi'| + \dots + 2|\phi^{(n-1)}| \left[ |a_1| |\phi^{(n-1)}| + \dots + |a_n| |\phi| \right] \\
&\le 2(1 + |a_1| + \dots + |a_n|) \left[ |\phi|^2 + |\phi'|^2 + \dots + |\phi^{(n-1)}|^2 \right] \\
&= 2K \cdot u(x)
\end{aligned}
$$

$$
\implies -2K \cdot u(x) \le u'(x) \le 2K \cdot u(x)
$$

---


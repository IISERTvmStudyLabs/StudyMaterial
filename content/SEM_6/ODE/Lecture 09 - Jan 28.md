Jan 28, Lect - 9

## Existence Theorem

Let $\alpha_1, \alpha_2, \dots, \alpha_n$ be $n$ constants and let $x_0$ be any real number. Then there exists a solution $\phi$ of $L(y) = 0$ on $-\infty < x < \infty$ satisfying

$$
\begin{aligned}
\phi(x_0) &= \alpha_1 \\
\phi'(x_0) &= \alpha_2 \\
&\vdots \\
\phi^{(n-1)}(x_0) &= \alpha_n
\end{aligned}
$$


### **Proof**

Let $\phi_1, \phi_2, \dots, \phi_n$ be any $n$ linearly independent (LI) solutions of $L(y) = 0$. We will show that there exist unique constants $C_1, C_2, \dots, C_n$ such that $\phi = C_1 \phi_1 + C_2 \phi_2 + \dots + C_n \phi_n$ is a solution of $L(y) = 0$, satisfying $\phi(x_0) = \alpha_1, \phi'(x_0) = \alpha_2, \dots, \phi^{(n-1)}(x_0) = \alpha_n$.

So,

$$
\begin{aligned}
\phi(x_0) &= \alpha_1 \\
&\vdots \\
\phi^{(n-1)}(x_0) &= \alpha_n
\end{aligned}
$$

$$
\left.
\begin{aligned}
C_1 \phi_1(x_0) + \dots + C_n \phi_n(x_0) &= \alpha_1 \\
C_1 \phi_1'(x_0) + \dots + C_n \phi_n'(x_0) &= \alpha_2 \\
&\vdots \\
C_1 \phi_1^{(n-1)}(x_0) + \dots + C_n \phi_n^{(n-1)}(x_0) &= \alpha_n
\end{aligned}
\right\} A
$$

The determinant of $A$ is the Wronskian $W(\phi_1, \phi_2, \dots, \phi_n)$ and $W \neq 0$, since $\phi_1, \dots, \phi_n$ are LI solutions.

$\implies$ there exist unique constants $C_1, C_2, \dots, C_n$ such that,

$$
\phi = C_1 \phi_1 + C_2 \phi_2 + \dots + C_n \phi_n
$$

is the solution of the IVP.

---

## Uniqueness Theorem

Let $\alpha_1, \alpha_2, \dots, \alpha_n$ be $n$ constants and let $x_0$ be any real number on any interval $I$ containing $x_0$. Then there exists at most one solution $\phi$ of $L(y) = 0$ satisfying

$$
\phi(x_0) = \alpha_1, \quad \phi'(x_0) = \alpha_2, \dots, \quad \phi^{(n-1)}(x_0) = \alpha_n
$$

### **Proof**

Let $\phi$ and $\psi$ be any two solutions of the IVP $L(y) = 0, y(x_0) = \alpha_1, \dots, y^{(n-1)}(x_0) = \alpha_n$.

Let $\eta = \phi - \psi$.

So,

$$
\begin{aligned}
L(\eta) &= L(\phi - \psi) = L(\phi) - L(\psi) \\
&= 0
\end{aligned}
$$

$$
\eta(x_0) = \phi(x_0) - \psi(x_0) = 0
$$

and,

$$
\|\eta(x)\| \le \|\eta(x_0)\| e^{K|x - x_0|}
$$

where $K = 1 + |a_1| + \dots + |a_n|$

$$
\begin{aligned}
\implies \|\eta(x)\| &\le 0 \\
\implies \eta(x) &= 0 \\
\therefore \phi &= \psi
\end{aligned}
$$

$\square$

---

## Equations with Variable Coefficients

Consider,

$$
y'' + P(x) y' + Q(x) y = R(x)
$$

$$
y'' + P(x) y' + Q(x) y = L(y)
$$

then $R(x) = L(y)$.

## Theorem

If $y_g$ is the general solution of $y'' + P(x) y' + Q(x) y = 0$ and $y_p$ is a particular solution of $y'' + P(x) y' + Q(x) y = R(x)$, then $y_p + y_g$ is the general solution of $y'' + P(x) y' + Q(x) y = R(x)$.

### **Proof**

Given that $y_g$ is a solution of $L(y) = 0$,

$$
\implies L(y_g) = 0
$$

$y_p$ is a solution of $L(y) = R(x)$,

$$
\implies L(y_p) = R(x)
$$

$$
\begin{aligned}
L(y_p + y_g) &= L(y_p) + L(y_g) \\
&= R(x) + 0 \\
&= R(x)
\end{aligned}
$$

Let $y_g = y_n + y_p$.

Consider,

$$
\begin{aligned}
L(y_g) &= L(y_n + y_p) \\
&= L(y_n) + L(y_p) \\
&= 0 + R(x) = R(x)
\end{aligned}
$$

$\implies y_n + y_p$ is a solution of $L(y) = R(x)$.

Conversely,

Suppose $y_g$ is a solution of $L(y) = R(x)$ and $y_p$ is a particular solution of $L(y) = R(x)$.

Then

$$
\begin{aligned}
L(y_g - y_p) &= L(y_g) - L(y_p) \\
&= R(x) - R(x) \\
&= 0
\end{aligned}
$$

$\implies y_g - y_p$ is a solution of $L(y) = 0$.

But we know that $y_n$ is a solution of $L(y) = 0$. So,

$$
\begin{aligned}
y_n &= y_g - y_p \\
\therefore y_g &= y_n + y_p
\end{aligned}
$$

---

## Lemma

If $\phi_1(x), \phi_2(x)$ are the solutions of

$$
y'' + P(x) y' + Q(x) y = 0
$$

then the **Wronskian** $W(\phi_1, \phi_2)$ is either zero or never zero.

### **Proof**

Given that $\phi_1$ and $\phi_2$ are solutions of $L(y) = 0$.

$\implies$

$$
\phi_1'' + P \phi_1' + Q \phi_1 = 0 \quad \dots \text{(1)}
$$

$$
\phi_2'' + P \phi_2' + Q \phi_2 = 0 \quad \dots \text{(2)}
$$

We have,

$$
W(\phi_1, \phi_2) = \phi_1 \phi_2' - \phi_2 \phi_1'
$$

$$
\begin{aligned}
W'(\phi_1, \phi_2) &= \phi_1 \phi_2'' + \phi_1' \phi_2' - \phi_1' \phi_2' - \phi_1'' \phi_2 \\
&= \phi_1 \phi_2'' - \phi_1'' \phi_2
\end{aligned}
$$

So, $\phi_1 \text{(2)} - \phi_2 \text{(1)}$

$$
\implies \phi_1 (\phi_2'' + P \phi_2' + Q \phi_2) - \phi_2 (\phi_1'' + P \phi_1' + Q \phi_1) = 0
$$

$$
\implies \phi_1 \phi_2'' - \phi_1'' \phi_2 + P(\phi_1 \phi_2' - \phi_1' \phi_2) = 0
$$

$$
\implies W' + P W = 0
$$

$$
\implies W(x) = W(x_0) e^{-\int_{x_0}^{x} P \, dx}
$$

$W(x) = 0 \iff W(x_0) = 0$.

Hence the lemma.

$\square$

---

## Reduction of Order

## Theorem

If $\phi_1$ is a solution of

$$
y'' + P(x) y' + Q(x) y = 0 \quad \dots \text{(1)}
$$

and $\phi_1(x) \neq 0$ for any $x \in I$.

Then, the transformation

$$
\phi_2 = v \phi_1 \quad \{v \text{ is a function of } x\}
$$

reduces (1) to the first order equation,

$$
\frac{du}{dx} + \left[ \frac{2 \phi_1' + P \phi_1}{\phi_1} \right] u = 0
$$

where $u = v'$, and the second solution of (1) is given by,

$$
\phi_2(x) = \phi_1(x) \int \frac{1}{\phi_1^2} e^{-\int P \, dx} \, dx
$$

### **Proof**

Let $\phi_1$ be a solution of $L(y) = 0$ (1).

Suppose that $\phi_2 = \phi_1 v$ is a solution of (1).

$$
\begin{aligned}
\phi_2' &= \phi_1 v' + \phi_1' v \\
\phi_2'' &= \phi_1 v'' + 2 \phi_1' v' + \phi_1'' v
\end{aligned}
$$

$\phi_2$ is a solution of (1) $\implies \phi_2'' + P \phi_2' + Q \phi_2 = 0$.

$$
\begin{aligned}
\implies (\phi_1 v'' + 2 \phi_1' v' + \phi_1'' v) + P(\phi_1 v' + \phi_1' v) + Q \phi_1 v &= 0 \\
\phi_1 v'' + (2 \phi_1' + P \phi_1) v' + (\phi_1'' + P \phi_1' + Q \phi_1) v &= 0
\end{aligned}
$$

$$
\begin{aligned}
\implies \phi_1 v'' + (2 \phi_1' + P \phi_1) v' &= 0 \quad \dots (2) \\
\implies \frac{v''}{v'} &= -\left[ \frac{2 \phi_1' + P \phi_1}{\phi_1} \right] \\
&= -\frac{2 \phi_1'}{\phi_1} - P
\end{aligned}
$$

$$
\begin{aligned}
\implies \ln v' &= -2 \ln \phi_1 - \int P \, dx \\
\implies v' &= \frac{1}{\phi_1^2} e^{-\int P \, dx} \\
\implies v &= \int \frac{1}{\phi_1^2} e^{-\int P \, dx} \, dx
\end{aligned}
$$

Note that from (2), if we set $v' = u$,

$$
\begin{aligned}
\phi_1 u' + (2 \phi_1' + P \phi_1) u &= 0 \\
\implies \frac{du}{dx} + \frac{(2 \phi_1' + P \phi_1) u}{\phi_1} &= 0
\end{aligned}
$$

---

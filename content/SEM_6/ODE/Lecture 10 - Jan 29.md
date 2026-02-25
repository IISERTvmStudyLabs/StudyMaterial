Jan 29, Lect - 10

## **Problem:**

Solve:

1. $x^2 y'' + x y' - y = 0$, if $\phi_1 = x$ is one of the solutions.
2. $(1 - x^2) y'' - 2x y' + 2y = 0$.

### **Solution 1.**

$$
\begin{aligned}
x^2 y'' + x y' - y &= 0 \\
y'' + \frac{1}{x} y' - \frac{1}{x^2} y &= 0
\end{aligned}
$$

$P = \frac{1}{x}, Q = -\frac{1}{x^2}$.

$$
\begin{aligned}
v &= \int \frac{1}{\phi_1^2} e^{-\int P \, dx} \, dx \\
&= \int \frac{1}{x^2} e^{-\int \frac{1}{x} \, dx} \, dx \\
&= \int \frac{1}{x^3} \, dx = -\frac{1}{2} \cdot \frac{1}{x^2}
\end{aligned}
$$

$$
\implies \phi_2 = \phi_1 v = x \cdot \frac{1}{-2x^2} = \frac{-1}{2x}
$$

The solution,

$$
\begin{aligned}
\phi &= C_1 \phi_1 + C_2 \phi_2 \\
&= C_1 x - \frac{C_2}{2x}
\end{aligned}
$$

### **Solution 2.**

By inspection, $y = x$ ($\phi_1 = x$) is a solution.

$$
\phi_2 = \phi_1 v
$$

$$
P = \frac{-2x}{1 - x^2}, \quad Q = \frac{2}{1 - x^2}
$$

$$
\begin{aligned}
v &= \int \frac{1}{\phi_1^2} e^{-\int P \, dx} \, dx \\
&= \int \frac{1}{x^2} e^{-\int \frac{-2x}{1-x^2} \, dx} \, dx \\
&= \int \frac{1}{x^2} e^{-\log(1 - x^2)} \, dx \\
&= \int \frac{1}{x^2(1 - x^2)} \, dx \\
&= \int \left( \frac{1}{x^2} + \frac{1}{1 - x^2} \right) \, dx \\
&= -\frac{1}{x} + \frac{1}{2} \ln \left| \frac{1 + x}{1 - x} \right|
\end{aligned}
$$

---

## Theorem

Let $\phi_1$ be a non-trivial solution of

$$
L(y) = a_0(x) y^{(n)} + a_1(x) y^{(n-1)} + \dots + a_n(x) y = 0 \quad \dots (1)
$$

$x \in I$, $a_0(x) \neq 0$ for any $x \in I$, and $a_0, a_1, \dots, a_n$ are continuous functions on $I$.

Then the transformation $\phi = \phi_1 v$ reduces the equation into an $(n-1)^{\text{th}}$ order equation.

$$
a_0 \phi_1 u^{n-1} + (n a_0 \phi_1' + a_1 \phi_1) u^{n-2} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) u = 0 \quad \dots (2)
$$

when $u = v'$.

If $u_2, u_3, \dots, u_n$ are $(n-1)$ linearly independent (LI) solutions of (2) and if $u_k = v_k'$ for $k \in [2, n] \subset \mathbb{N}$, then

$$
\phi_1, v_2 \phi_1, \dots, v_n \phi_1
$$

is a basis of solutions of (1), where $v_k = \int_{x_0}^x u_k \, dx$.

### **Proof**

Let $\phi = \phi_1 v$.

$$
\begin{aligned}
\phi_1' &= \phi_1 v' + \phi_1' v \\
\phi_1'' &= \phi_1 v'' + 2 \phi_1' v' + \phi_1'' v \\
&\vdots \\
\phi^{(n)} &= \phi_1 v^{(n)} + n \phi_1' v^{(n-1)} + \frac{n(n-1)}{2} \phi_1'' v^{(n-2)} + \dots + \phi_1^{(n)} v
\end{aligned}
$$



Suppose $\phi$ is a solution of (1), then

$$
a_0 \phi^{(n)} + a_1 \phi^{(n-1)} + \dots + a_n \phi = 0
$$



$$
\begin{aligned}
\implies &a_0 [\phi_1 v^{(n)} + n \phi_1' v^{(n-1)} + \dots + \phi_1^{(n)} v] + \\
&a_1 [\phi_1 v^{(n-1)} + (n-1) \phi_1' v^{(n-2)} + \dots + \phi_1^{(n-1)} v] + \\
&\vdots \\
&+ a_{n-1} [\phi_1 v' + \phi_1' v] + \\
&a_n [\phi_1 v] = 0
\end{aligned}
$$



Sorting according to $v^{(k)}$:

$$
\begin{aligned}
\implies &v^{(n)} [a_0 \phi_1] + v^{(n-1)} [n a_0 \phi_1' + a_1 \phi_1] + \\
&\vdots \\
&+ v' [n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1] + \\
&+ v [a_0 \phi_1^{(n)} + a_1 \phi_1^{(n-1)} + \dots + a_n \phi_1] = 0
\end{aligned}
$$



$$
\implies a_0 \phi_1 v^{(n)} + (n a_0 \phi_1' + a_1 \phi_1) v^{(n-1)} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) v' = 0
$$



$$
\implies a_0 \phi_1 u^{(n-1)} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) u = 0,
$$

when $u = v'$.

This is an $(n-1)^{\text{th}}$ order Differential Equation (DE) and it has $(n-1)$ LI solutions, $\{u_2, u_3, \dots, u_n\}$.

Since $u_k = v_k'$, $v_k = \int_{x_0}^x u_k \, dx$.

Therefore $\phi_1, \phi_1 v_2, \phi_1 v_3, \dots, \phi_1 v_n$ are the solutions of (1).

It remains to show that the above solutions form a basis.

Suppose $C_1 \phi_1 + C_2 \phi_1 v_2 + \dots + C_n \phi_1 v_n = 0$.

$$
\implies C_1 + C_2 v_2 + \dots + C_n v_n = 0 \quad \left[ \text{using } \times \frac{d}{dx} \right]
$$



$$
\implies C_2 v_2' + \dots + C_n v_n' = 0
$$



$$
\implies C_2 u_2 + \dots + C_n u_n = 0.
$$



$$
\implies C_i = 0, \quad i \in [2, n] \subset \mathbb{N},
$$

since $u_i$ are LI.

$\implies C_1 = 0$, and hence $C_i = 0$ for all $i$.

$\implies \phi_1, \phi_1 v_2, \dots, \phi_1 v_n$ are LI and form a basis.

And if $u_k = v_k'$ for $k \in [2, n] \subset \mathbb{N}$, then

$$
\phi_1, v_2 \phi_1, v_3 \phi_1, \dots, v_n \phi_1
$$

is a basis of solution of (1), where

$$
v_k = \int_{x_0}^x u_k \, dx.
$$

## Method of Variation of Parameters

## Theorem
Let

$$
L(y) = y'' + P(x) y' + Q(x) y = R(x) \quad \dots (1)
$$

where $P(x)$, $Q(x)$, and $R(x)$ are continuous functions of $x$ defined on an interval $I$. If $\phi_1, \phi_2$ are two linearly independent solutions corresponding to the homogeneous equation,

$$
y'' + P(x) y' + Q(x) y = 0
$$

then, a particular solution of (1) is given by,

$$
y_p = \phi_1 v_1 + \phi_2 v_2
$$

where

$$
v_1 = -\int \frac{R \phi_2}{W} \, dx \quad \text{and}
$$

$$
v_2 = \int \frac{R \phi_1}{W} \, dx
$$

where $W$ is the **Wronskian** of $\phi_1, \phi_2 \implies W(\phi_1, \phi_2)$.

$$
a_0 \left[ \phi_1 v^{(n)} + n \phi_1' v^{(n-1)} + \dots + \phi_1^{(n)} v \right] + a_1 \left[ \phi_1 v^{(n-1)} + (n-1) \phi_1' v^{(n-2)} + \dots + \phi_1^{(n-1)} v \right] + \dots + a_{n-1} (\phi_1 v' + \phi_1' v) + a_n (\phi_1 v) = 0
$$

$$
\implies a_0 \phi_1 v^{(n)} + (n a_0 \phi_1' + a_1 \phi_1) v^{(n-1)} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) v' + (a_0 \phi_1^{(n)} + a_1 \phi_1^{(n-1)} + \dots + a_n \phi_1) v = 0
$$

$$
\implies a_0 \phi_1 v^{(n)} + (n a_0 \phi_1' + a_1 \phi_1) v^{(n-1)} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) v' = 0
$$

$$
\implies a_0 \phi_1 u^{(n-1)} + \dots + (n a_0 \phi_1^{(n-1)} + \dots + a_{n-1} \phi_1) u = 0 \text{ where } u = v'
$$

This is an $(n-1)^{\text{th}}$ order differential equation and it has $(n-1)$ linearly independent solutions namely $u_2, u_3, \dots, u_n$.

Since $u_k = v_k' \implies v_k = \int_{x_0}^x u_k \, dx$.

Therefore, $\phi_1, \phi_1 v_2, \phi_1 v_3, \dots, \phi_1 v_n$ are solutions of (1). It remains to show that the above solution is a basis.

- Suppose $C_1 \phi_1 + C_2 \phi_1 v_2 + \dots + C_n \phi_1 v_n = 0$
    - $\implies C_1 + C_2 v_2 + \dots + C_n v_n = 0$ since $\phi_1 \neq 0$
    - $\implies C_2 v_2' + C_3 v_3' + \dots + C_n v_n' = 0$ (differentiating)
    - $\implies C_2 u_2 + C_3 u_3 + \dots + C_n u_n = 0$
    - $\implies C_i = 0$ for $i = 2, \dots, n$ since $u_i$ are linearly independent.
    - $\implies C_1 = 0$ and hence $C_i = 0$ for all $i$.
    - $\implies \phi_1, \phi_1 v_2, \dots, \phi_1 v_n$ are linearly independent and hence a basis.

---

## Method of Variation of Parameters

## Theorem
Set $L(y) = y'' + P(x)y' + Q(x)y = R(x) \quad \dots (1)$ where $P(x)$, $Q(x)$, and $R(x)$ are continuous functions of $x$ defined on an interval $I$. If $\phi_1, \phi_2$ are two linearly independent solutions corresponding to the homogeneous equation $y'' + P(x)y' + Q(x)y = 0$, then a particular solution of (1) is given by $y_p = \phi_1 v_1 + \phi_2 v_2$ where

$$
v_1 = -\int \frac{R \phi_2}{W} \, dx \quad \text{and} \quad v_2 = \int \frac{R \phi_1}{W} \, dx
$$

where $W$ is the Wronskian of $\phi_1, \phi_2$.

---


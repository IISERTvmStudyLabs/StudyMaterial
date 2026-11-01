29/1/26

$$
y_p = v_1 \phi_1 + v_2 \phi_2
$$

### **Proof**
Let $\phi_1, \phi_2$ be solutions of $y'' + P(x)y' + Q(x)y = 0 \quad \dots (1)$.
Assume that $y_p = v_1 \phi_1 + v_2 \phi_2$ is a solution of $y'' + P(x)y' + Q(x)y = R(x) \quad \dots (2)$ for some $v_1, v_2$ functions of $x$.

$$
y_p' = v_1 \phi_1' + v_2 \phi_2' + v_1' \phi_1 + v_2' \phi_2
$$

We further assume that $v_1' \phi_1 + v_2' \phi_2 = 0$.

Then, 

$$
y_p' = v_1 \phi_1' + v_2 \phi_2'
$$

$$
y_p'' = v_1 \phi_1'' + v_2 \phi_2'' + v_1' \phi_1' + v_2' \phi_2'
$$

Since $y_p$ is a solution of (2), 

$$
y_p'' + P y_p' + Q y_p = R(x)
$$

Therefore, 

$$
(v_1 \phi_1'' + v_2 \phi_2'' + v_1' \phi_1' + v_2' \phi_2') + P(v_1 \phi_1' + v_2 \phi_2') + Q(v_1 \phi_1 + v_2 \phi_2) = R(x)
$$

$$
\implies v_1 (\phi_1'' + P \phi_1' + Q \phi_1) + v_2 (\phi_2'' + P \phi_2' + Q \phi_2) + (v_1' \phi_1' + v_2' \phi_2') = R(x)
$$

As $\phi_1, \phi_2$ are solutions, the first two terms are zero.

$$
\implies v_1' \phi_1' + v_2' \phi_2' = R(x)
$$

Thus, we have $v_1' \phi_1 + v_2' \phi_2 = 0$ and $v_1' \phi_1' + v_2' \phi_2' = R(x)$.

Solving for $v_1'$ and $v_2'$, 

$$
v_1' = -\frac{R(x) \phi_2}{W}, \quad v_1 = \int -\frac{R \phi_2}{W} \, dx
$$

$$
v_2' = \frac{R(x) \phi_1}{W}, \quad v_2 = \int \frac{R \phi_1}{W} \, dx
$$

Where $W = \phi_1 \phi_2' - \phi_2 \phi_1'$.

$\square$

---

### **For solving $y'' + P(x) y' + Q(x) y = R(x)$**

- **Step 1**: Find two solutions $\phi_1, \phi_2$ of $y'' + P(x) y' + Q(x) y = 0$.
- **Step 2**: Find a particular solution $y_p = v_1 \phi_1 + v_2 \phi_2$ of $y'' + P(x) y' + Q(x) y = R(x)$.
- **Step 3**: The general solution $y_g = y_h + y_p \implies y_g = C_1 \phi_1 + C_2 \phi_2 + v_1 \phi_1 + v_2 \phi_2$.
    - $v_1 = -\int \frac{R \phi_2}{W} \, dx$ and $v_2 = \int \frac{R \phi_1}{W} \, dx$.

### **Example.**
Find a particular solution of:
1. $y'' - \frac{2y}{x^2} = x$
2. $y'' - 2y' + 3y = 64x e^x$

### **Exercise.**
Solve $y'' + y = \sec x$, $y'' + 4y = \tan 2x$.

### **Solution 1.**
$y'' - \frac{2y}{x^2} = x$

$P = 0, \quad Q = -\frac{2}{x^2}, \quad R = x$.

Consider $y'' - \frac{2y}{x^2} = 0$.

By inspection, $\phi_1 = x^2$ is a solution.

### **Solution 1 (Continued).**

To find the second solution, we use the transformation $\phi_2 = \phi_1 v$:

$$
v = \int \frac{1}{\phi_1^2} e^{-\int P \, dx} \, dx = \int \frac{1}{x^4} \, dx = \frac{x^{-4+1}}{-4+1} = -\frac{1}{3x^3}
$$

$$
\therefore \phi_2 = -\frac{1}{3x}
$$

Thus, we have $\phi_1 = x^2$ and $\phi_1' = 2x$, and $\phi_2 = -\frac{1}{3x}$ and $\phi_2' = \frac{1}{3x^2}$.

The Wronskian is:

$$
W = \begin{vmatrix} \phi_1 & \phi_2 \\ \phi_1' & \phi_2' \end{vmatrix} = \begin{vmatrix} x^2 & -1/3x \\ 2x & 1/3x^2 \end{vmatrix} = \frac{1}{3} + \frac{2}{3} = 1
$$

**Step 2: To find the particular solution $y_p = v_1 \phi_1 + v_2 \phi_2$**

$$
v_1 = -\int \frac{R \phi_2}{W} \, dx = -\int x \left( -\frac{1}{3x} \right) \, dx = \int \frac{1}{3} \, dx = \frac{x}{3}
$$

$$
v_2 = \int \frac{R \phi_1}{W} \, dx = \int \frac{x(x^2)}{1} \, dx = \int x^3 \, dx = \frac{x^4}{4}
$$

$$
\begin{aligned}
y_p &= v_1 \phi_1 + v_2 \phi_2 \\
&= \left( \frac{x}{3} \right) (x^2) + \left( \frac{x^4}{4} \right) \left( -\frac{1}{3x} \right) \\
&= \frac{x^3}{3} - \frac{x^3}{12} = \frac{3x^3}{12} = \frac{x^3}{4}
\end{aligned}
$$

---

### **Solution 2.**

$$
y'' - 2y' - 3y = 64x e^x
$$

$P = -2, Q = -3, R = 64x e^x$.

For the homogeneous equation $y'' - 2y' - 3y = 0$, the characteristic equation is:

$$
\begin{aligned}
r^2 - 2r - 3 &= 0 \implies r = \frac{2 \pm \sqrt{4 + 12}}{2} = \frac{2 \pm 4}{2} \\
r &= -1, 3
\end{aligned}
$$

The homogeneous solutions are:

$$
\phi_1 = e^{-x}, \quad \phi_2 = e^{3x}
$$

$$
\phi_1' = -e^{-x}, \quad \phi_2' = 3e^{3x}
$$

The Wronskian is:

$$
W = \begin{vmatrix} e^{-x} & e^{3x} \\ -e^{-x} & 3e^{3x} \end{vmatrix} = 3e^{2x} + e^{2x} = 4e^{2x}
$$

For the particular solution $y_p = v_1 \phi_1 + v_2 \phi_2$:

$$
\begin{aligned}
v_1 &= -\int \frac{R \phi_2}{W} \, dx = -\int \frac{64x e^x \cdot e^{3x}}{4e^{2x}} \, dx \\
&= -16 \int x e^{2x} \, dx \\
&= -16 \left[ \frac{x e^{2x}}{2} - \int \frac{e^{2x}}{2} \, dx \right] \\
&= -16 \left[ \frac{x e^{2x}}{2} - \frac{e^{2x}}{4} \right] \\
&= -24x e^{2x} + 12e^{2x}
\end{aligned}
$$

$$
v_2 = \dots
$$
## Theorem

Let $L(y) = y^{(n)} + a_1(x) y^{(n-1)} + \dots + a_n(x) y = b(x)$, where $a_i(x)$ and $b(x)$ are continuous functions. If $\phi_1, \phi_2, \dots, \phi_n$ are a set of $n$ linearly independent (LI) solutions of the corresponding homogeneous equation, then a particular solution of $L(y) = b(x)$ is given by

$$
y_p = v_1 \phi_1 + v_2 \phi_2 + \dots + v_n \phi_n
$$

where $v_k(x)$ is defined by

$$
v_k(x) = \int_{x_0}^x \frac{W_k(z)}{W(z)} b(z) \, dz
$$

where $W(x)$ is the **Wronskian** of $\phi_1, \phi_2, \dots, \phi_n$ and $W_k(x)$ is the determinant obtained from $W$ by replacing the $k^{\text{th}}$ column

$$
\begin{bmatrix}
\phi_k \\
\phi_k' \\
\vdots \\
\phi_k^{(n-1)}
\end{bmatrix}
\quad \text{by} \quad
\begin{bmatrix}
0 \\
0 \\
\vdots \\
1
\end{bmatrix}
$$

### Proof

Let $\phi_1, \phi_2, \dots, \phi_n$ be the solutions of the homogeneous equation. Put and suppose $y_p = v_1 \phi_1 + v_2 \phi_2 + \dots + v_n \phi_n$.

Consider $y_p' = v_1 \phi_1' + v_2 \phi_2' + \dots + v_n \phi_n' + v_1' \phi_1 + v_2' \phi_2 + \dots + v_n' \phi_n$.

We assume that $v_1' \phi_1 + \dots + v_n' \phi_n = 0$.

Then, $y_p' = v_1 \phi_1' + v_2 \phi_2' + \dots + v_n \phi_n'$.

$y_p'' = v_1 \phi_1'' + v_2 \phi_2'' + \dots + v_n \phi_n'' + v_1' \phi_1' + \dots + v_n' \phi_n'$.

Again assume $v_1' \phi_1' + \dots + v_n' \phi_n' = 0$.

Proceeding in this way, we have

$$
\begin{aligned}
v_1' \phi_1 + \dots + v_n' \phi_n &= 0 \\
v_1' \phi_1' + \dots + v_n' \phi_n' &= 0 \\
&\vdots \\
v_1' \phi_1^{(n-1)} + v_2' \phi_2^{(n-1)} + \dots + v_n' \phi_n^{(n-1)} &= b(x)
\end{aligned} \quad \dots (A)
$$

Accordingly, we have

$$
\begin{aligned}
y_p &= v_1 \phi_1 + \dots + v_n \phi_n \\
y_p' &= v_1 \phi_1' + \dots + v_n \phi_n' \\
&\vdots \\
y_p^{(n-1)} &= v_1 \phi_1^{(n-1)} + \dots + v_n \phi_n^{(n-1)} \\
y_p^{(n)} &= v_1 \phi_1^{(n)} + \dots + v_n \phi_n^{(n)} + v_1' \phi_1^{(n-1)} + \dots + v_n' \phi_n^{(n-1)} \\
&= v_1 \phi_1^{(n)} + \dots + v_n \phi_n^{(n)} + b(x)
\end{aligned}
$$

Then $L(y_p) = v_1 L(\phi_1) + \dots + v_n L(\phi_n) + b = b(x)$.

From (A), we need to solve for $v_1', v_2', \dots, v_n'$. By Cramer's rule:

$$
v_1' = \frac{
\begin{vmatrix}
0 & \phi_2 & \dots & \phi_n \\
0 & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
b(x) & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{vmatrix}
}{
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{vmatrix}
} = b(x) \frac{
\begin{vmatrix}
\phi_2 & \dots & \phi_n \\
\phi_2' & \dots & \phi_n' \\
\vdots & \ddots & \vdots \\
\phi_2^{(n-2)} & \dots & \phi_n^{(n-2)}
\end{vmatrix}
}{W}
$$

$\square$

$$
v_1' = \frac{b(x) W_1(x)}{W} \implies v_1 = \int \frac{W_1}{W} b(x) \, dx
$$
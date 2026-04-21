22/2/26

## Recap: Variation of Parameters

- $y'' + P y' + Q y = R$
- $a y'' + a_1 y' + a_2 y = b$
    - $v_1 = \int \frac{-b \phi_2 \, dx}{a \phi_0}$
    - $v_2 = \int \frac{b \phi_1 \, dx}{a \phi_0}$
- $a_0 y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = b$
    - $v_k = \int_{x_0}^x \frac{W_k(s) b(s)}{a_0 W(s)} \, ds$

---

- $y'' + P y' + Q y = R$, where $\phi_1, \phi_2$ are solutions of the homogeneous differential equation (DE).
    - $W(\phi_1, \phi_2)(x) = W(\phi_1, \phi_2)(x_0) e^{-\int P \, dx}$
- $a_0 y'' + a_1 y' + a_2 y = 0$
    - $W(\phi_1, \phi_2)(x) = W(\phi_1, \phi_2)(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} \, ds}$

---

## Theorem

Let $\phi_1, \phi_2, \dots, \phi_n$ be $n$ linearly independent (LI) solutions of $L(y) = a_0(x) y^{(n)} + \dots + a_n(x) y = 0$, where $a_0(x) \neq 0, \forall x \in I$ and $a_0, \dots, a_n$ are continuous functions of $x$ on $I$, and let $x_0 \in I$.

Then,

$$
W(\phi_1, \phi_2, \dots, \phi_n)(x) = W(\phi_1, \phi_2, \dots, \phi_n)(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} \, ds}
$$

### **Proof**

We have,

$$
W = 
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{vmatrix}
$$

$$
\begin{aligned}
W' &= 
\begin{vmatrix}
\phi_1' & \phi_2' & \dots & \phi_n' \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{vmatrix}
+
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1'' & \phi_2'' & \dots & \phi_n'' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{vmatrix}
+ \dots +
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n)} & \phi_2^{(n)} & \dots & \phi_n^{(n)}
\end{vmatrix}
\\
&= 0 + 0 + \dots +
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n)} & \phi_2^{(n)} & \dots & \phi_n^{(n)}
\end{vmatrix}
\end{aligned}
$$

$$
W' = 
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n)} & \phi_2^{(n)} & \dots & \phi_n^{(n)}
\end{vmatrix}
= \frac{1}{a_0}
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
-a_1 \phi_1^{(n-1)} & -a_1 \phi_2^{(n-1)} & \dots & -a_1 \phi_n^{(n-1)}
\end{vmatrix}
$$

$$
= \frac{1}{a_0} 
\begin{vmatrix} 
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-2)} & \phi_2^{(n-2)} & \dots & \phi_n^{(n-2)} \\
-a_1 \phi_1^{(n-1)} - a_2 \phi_1^{(n-2)} - \dots - a_n \phi_1 & -a_1 \phi_2^{(n-1)} - a_2 \phi_2^{(n-2)} - \dots - a_n \phi_2 & \dots & -a_1 \phi_n^{(n-1)} - a_2 \phi_n^{(n-2)} - \dots - a_n \phi_n
\end{vmatrix}
$$

By the row operation $R_n \to R_n + a_2 R_{n-1} + a_3 R_{n-2} + \dots + a_n R_1$:

$$
W' = \frac{1}{a_0} 
\begin{vmatrix} 
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-2)} & \phi_2^{(n-2)} & \dots & \phi_n^{(n-2)} \\
-a_1 \phi_1^{(n-1)} & -a_1 \phi_2^{(n-1)} & \dots & -a_1 \phi_n^{(n-1)}
\end{vmatrix}
$$

$$
= -\frac{a_1}{a_0} W
$$

$$
W' + \frac{a_1}{a_0} W = 0 \implies W = C e^{-\int_{x_0}^x \frac{a_1}{a_0} \, dx}
$$

$$
\implies W(\phi_1, \dots, \phi_n)(x) = W(\phi_1, \dots, \phi_n)(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} \, ds}
$$

$\square$

---

## Existence and Uniqueness of IVP of $1^{\text{st}}$ Order Equation

$$
\begin{cases}
y' = f(x, y) \\
y(x_0) = y_0
\end{cases} \quad \dots (1)
$$

## Theorem
Let $f(x, y)$ be continuous in the domain $D$. Then, any function $\phi$ is a solution of the IVP $y' = f(x, y); \ y(x_0) = y_0$ on $I$ if and only if it is a solution of the integral equation

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt \quad \dots (2)
$$

### **Proof**
Let $\phi$ be a solution of the IVP (1).

$$
\phi' = f(x, \phi) \quad \dots (3)
$$

$$
\phi(x_0) = y_0
$$

Since $\phi$ is differentiable, $\phi$ is continuous as well.
$f$ is continuous and $\phi$ is continuous $\implies f$ is integrable.

$$
\implies \int_{x_0}^x \phi' \, dx = \int_{x_0}^x f(t, \phi(t)) \, dt
$$

$$
\implies \phi(x) - \phi(x_0) = \int_{x_0}^x f(t, \phi(t)) \, dt
$$

$$
\implies \phi(x) = y_0 + \int_{x_0}^x f(t, \phi(t)) \, dt
$$

$\implies \phi$ is a solution of the integral equation (2).

$\square$
Note that $\phi(x_0) = y_0$ and $\phi'(x) = f(x, \phi(x))$.

$$
\implies \phi \text{ is a solution of (1).}
$$

## Lipschitz Condition

## **Definition**
A function $f(x, y)$ defined on a domain $D \subseteq \mathbb{R}^2$ is said to satisfy the **Lipschitz condition** with respect to $y$, if there exists a constant $K$ such that

$$
|f(x, y_1) - f(x, y_2)| \le K |y_1 - y_2|
$$

where $(x, y_1)$ and $(x, y_2) \in D$.

We also say $f \in \text{Lip}(D, K)$, where $K$ is the Lipschitz constant.

### **Example.**
$f(x, y) = xy, \quad D = \{ (x, y) : |x| \le 1, |y| \le 1 \}$

$$
|f(x, y_1) - f(x, y_2)| = |xy_1 - xy_2| = |x| |y_1 - y_2| \le 1 \cdot |y_1 - y_2|
$$

$$
\implies f \in \text{Lip}(D, 1)
$$

$$
|f(x, y_1) - f(x, y_2)| \le K |y_1 - y_2| \implies \left| \frac{f(x, y_1) - f(x, y_2)}{y_1 - y_2} \right| \le K
$$


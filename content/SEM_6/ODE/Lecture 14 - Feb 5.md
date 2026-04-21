
Feb 9, Lect - 14

## Picard's Existence and Uniqueness

### **Steps: Uniqueness of Solution**

Let $\phi$ and $\psi$ be two solutions of the IVP.

$$
\phi(x) = y_0 + \int_{x_0}^{x} f(t, \phi(t)) \, dt
$$

$$
\psi(x) = y_0 + \int_{x_0}^{x} f(t, \psi(t)) \, dt
$$

$$
\phi(x) - \psi(x) = \int_{x_0}^{x} [f(t, \phi(t)) - f(t, \psi(t))] \, dt
$$

$$
\begin{aligned}
|\phi(x) - \psi(x)| &\le \int_{x_0}^{x} |f(t, \phi(t)) - f(t, \psi(t))| \, dt \\
&\le K \int_{x_0}^{x} |\phi(t) - \psi(t)| \, dt
\end{aligned}
$$

The second inequality follows because $f$ is **Lipschitz continuous**.

### **Corollary**

Hence by the corollary of **Gronwall's inequality**,

$$
|\phi(x) - \psi(x)| \equiv 0 \implies \phi(x) = \psi(x)
$$

$\square$

___
## $\epsilon$-approximation solution

**Definition**
Suppose we have the Initial Value Problem (IVP),

$$
\begin{cases}
y' = f(x, y) \\
y(x_0) = y_0
\end{cases}
$$

An **$\epsilon$-approximation solution** is a function $y(x)$ on an interval $I = [x_0, x_0 + h]$ satisfying the following properties:

1. $(x, y) \in D$
2. $y \in C^1$ except possibly for finite points $\{y \in C^1(I \setminus S), S \subset I\}$
3. $|y' - f(x, y)| < \epsilon, \quad \forall x \in I \setminus S, \quad \epsilon > 0$

---

## Existence

## Theorem
Suppose that $f(x, y)$ is continuous on the rectangle

$$
R = \{(x, y) : |x - x_0| \le a, |y - y_0| \le b, \quad a, b > 0\}
$$

Let,

$$
M = \max_{(x, y) \in R} |f(x, y)| \quad \text{and} \quad h = \min \left\{ a, \frac{b}{M} \right\}
$$

Then for a given $\epsilon > 0$, there exists an $\epsilon$-approximation solution $y$ for the IVP on $|x - x_0| \le h$.

### **Proof**
We will try to construct an $\epsilon$-approximation solution for the IVP.

We partition the interval $[x_0, x_0 + h]$ into the sub-intervals such that,

$$
x_0 < x_1 < x_2 < \dots < x_n = x_0 + h
$$

where $|x_i - x_{i-1}| < \min \{ \delta, \frac{\epsilon}{M} \}, \quad \delta > 0$.

We define

$$
y(x) = y(x_{i-1}) + (x - x_{i-1}) f(x_{i-1}, y_{i-1})
$$

for $i \in [1, n]$ and $x \in [x_{i-1}, x_i]$.

Clearly, $y$ is continuous and has piecewise continuous derivatives. Hence $y$ satisfies the condition (2) of the $\epsilon$-approximation.

We claim that $(x, y) \in R$.
It is enough to prove that

$$
|y(x_i) - y_0| < b, \quad i \in [1, n]
$$

From the definition of $y(x)$, we have,

$$
\begin{aligned}
y(x_1) - y_0 &= (x_1 - x_0) f(x_0, y_0) \\
y(x_2) - y(x_1) &= (x_2 - x_1) f(x_1, y_1) \\
&\vdots \\
y(x_k) - y(x_{k-1}) &= (x_k - x_{k-1}) f(x_{k-1}, y_{k-1})
\end{aligned}
$$

$$
\therefore y(x_k) - y_0 = \sum_{i=1}^k (x_i - x_{i-1}) f(x_{i-1}, y_{i-1})
$$

$$
\begin{aligned}
|y(x_k) - y_0| &\le \sum_{i=1}^k (x_i - x_{i-1}) |f(x_{i-1}, y_{i-1})| \\
&\le M \sum (x_i - x_{i-1}) \\
&\le M \cdot h \le b
\end{aligned}
$$

$$
\therefore (x, y) \in R
$$

From the definition,

$$
y(x) - y(x_{i-1}) = (x - x_{i-1}) f(x_{i-1}, y_{i-1})
$$

$$
\begin{aligned}
|y(x) - y(x_{i-1})| &\le |x - x_i| |f(x_{i-1}, y_{i-1})| \\
&\le M \cdot \frac{\delta}{M} = \delta
\end{aligned}
$$

Since $f$ is continuous in $R$, it is uniformly continuous.

$$
|f(x, y) - f(x_i, y_i)| < \epsilon \quad \text{where} \quad \begin{cases} |x - x_i| < \delta \\ |y - y_i| < \delta \end{cases}
$$

for $(x, y), (x_i, y_i) \in R$.

$\square$
____
$$
\begin{aligned}
|y' - f(x, y)| &= |f(x_{i-1}, y_{i-1}) - f(x, y)| < \epsilon
\end{aligned}
$$

$\implies$ Condition (3) of $\epsilon$-approximation is satisfied

so $x_0 < x_1 < x_2 < \dots < x_n = x_0 + h$

when $|x_i - x_{i-1}| < \min \left\{ \delta, \frac{\epsilon}{M} \right\}, \quad \delta > 0$.

We define,

$$
y(x) = y(x_{i-1}) + (x - x_{i-1}) f(x_{i-1}, y_{i-1})
$$

where $i = 1, \dots, n$ and $x \in [x_{i-1}, x_i]$.

---


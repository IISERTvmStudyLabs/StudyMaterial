Feb 18, Lect - 17

## Continuity of the Solution Depends on the Dynamics

## Theorem

Let $R = \{(x, y) : |x - x_0| \le a, |y - y_0| \le b, \ a, b > 0\}$

Let $f$, $g$ be two continuous functions on $R$ satisfying

- $f \in \text{Lip}(R, K)$ with respect to $y$
- given $\epsilon > 0$, $|f(x, y) - g(x, y)| < \epsilon, \quad \forall (x, y) \in R$

Let $y_1(x)$ and $y_2(x)$ be the solution of the following IVPs with $(x, y_1)$ and $(x, y_2) \in R$ for $|x - x_0| < h$:

$$
\begin{cases} y'_1(x) = f(x, y_1); & y_1(x_0) = y_0 \end{cases}
$$

$$
\begin{cases} y'_2(x) = g(x, y_2); & y_2(x_0) = y_0 \end{cases}
$$

Then

$$
|y_1(x) - y_2(x)| \le \frac{\epsilon}{K} \left( e^{Kh} - 1 \right), \quad h = x - x_0
$$

### **Proof**

Given that,

$$
y'_1 = f(x, y_1), \quad y_1(x_0) = y_0 \quad \dots \text{ (1)}
$$

$$
y'_2 = g(x, y_2), \quad y_2(x_0) = y_0 \quad \dots \text{ (2)}
$$

and $y_1$ and $y_2$ are solutions of (1) and (2) respectively.
___
Let,

$$
y_1(x) = y_0 + \int_{x_0}^x f(t, y_1(t)) \, dt
$$

and

$$
y_2(x) = y_0 + \int_{x_0}^x g(t, y_2(t)) \, dt
$$

$$
\begin{aligned}
y_1(x) - y_2(x) &= \int_{x_0}^x f(t, y_1(t)) \, dt - \int_{x_0}^x g(t, y_2(t)) \, dt \\
&= \int_{x_0}^x [f(t, y_1(t)) - f(t, y_2(t))] \, dt + \int_{x_0}^x [f(t, y_2(t)) - g(t, y_2(t))] \, dt
\end{aligned}
$$

$$
\begin{aligned}
|y_1 - y_2| &\le \int_{x_0}^x |f(t, y_1(t)) - f(t, y_2(t))| \, dt + \int_{x_0}^x |f(t, y_2(t)) - g(t, y_2(t))| \, dt \\
&\le K \int_{x_0}^x |y_1(t) - y_2(t)| \, dt + \epsilon(x - x_0) \quad \dots (3)
\end{aligned}
$$

Let $f = |y_1 - y_2|$, $g = K$, and $h = \epsilon(x - x_0)$ in **generalized Gronwall's inequality**.

Hence by the same theorem,

$$
\begin{aligned}
|y_1(x) - y_2(x)| &\le \epsilon(x - x_0) + \int_{x_0}^x \epsilon K (t - x_0) e^{\int_t^x K \, ds} \, dt \\
&= \epsilon(x - x_0) + \epsilon K \int_{x_0}^x (t - x_0) e^{K(x - t)} \, dt \\
&= \epsilon(x - x_0) + \epsilon K \int_{x_0}^x (t - x_0) e^{-K(t - x)} \, dt \\
&= \epsilon(x - x_0) - \epsilon \left[ (t - x_0) e^{-K(t - x)} + \frac{e^{-K(t - x)}}{K} \right]_{x_0}^x \\
&= - \frac{\epsilon}{K} \left( 1 - e^{K(x - x_0)} \right) \\
&= \frac{\epsilon}{K} \left( e^{Kh} - 1 \right)
\end{aligned}
$$

---

## Continuity of solution depends on the initial conditions and dynamics of the solution.

## Theorem
Let $R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b, \ a, b > 0 \}$.

Suppose $f, g \in C(R)$ and be **Lipschitz continuous** with respect to $y$ on $R$ with Lipschitz constants $K_1$ and $K_2$ respectively.

Let $y_1(x)$ and $y_2(x)$ be respectively the solutions of IVP:

$$
\begin{aligned}
y'_1(x) &= f(x, y), \quad y(x_0) = y_0 \\
y'_2(x) &= g(x, y), \quad y(x_0^*) = y_0^*
\end{aligned}
$$

in some interval $I_1, I_2$ containing $x_0, x_0^*$ where both $y_1$ and $y_2$ are defined.
Then,

$$
\max_{x \in I} |y_1(x) - y_2(x)| \le \left[ |y_0 - y_0^*| + |I| \max_R |f(x, y) - g(x, y)| + M |x_0 - x_0^*| \right] e^{K_0 |I|}
$$

where $L$ is the length of this interval,

$$
M = \max \left\{ \max_{x \in R} f, \max_{x \in R} g \right\}
$$

$$
K_0 = \min \{ K_1, K_2 \}
$$

### Proof
We have,

$$
y_1(x) = y_0 + \int_{x_0}^x f(t, y_1(t)) \, dt
$$

$$
y_2(x) = y_0^* + \int_{x_0^*}^x g(t, y_2(t)) \, dt
$$

$$
(y_1 - y_2)(x) = (y_0 - y_0^*) + \int_{x_0}^x f(t, y_1(t)) \, dt - \int_{x_0^*}^x g(t, y_2(t)) \, dt
$$
$$
= (y_0 - y_0^*) + \int_{x_0}^{x_0^*} f(t, y_1(t)) \, dt + \int_{x_0^*}^x [f(t, y_1(t)) - f(t, y_2(t))] \, dt + \int_{x_0^*}^x [f(t, y_2(t)) - g(t, y_2(t))] \, dt
$$

$$
\begin{aligned}
|y_1 - y_2| &\le |y_0 - y_0^*| + K_1 \int_{x_0^*}^x |y_1 - y_2| \, dt + \int_{x_0^*}^{x_0} |f(t, y_1^*)| \, dt \\
&\quad + \int_{x_0^*}^x |f(t, y_2(t)) - g(t, y_2(t))| \, dt \\
&\le |y_0 - y_0^*| + M |x_0^* - x_0| \\
&\quad + |x - x_0^*| |f(t, y_2(t)) - g(t, y_2(t))| \\
&\quad + K_1 \int_{x_0}^x |y_1(t) - y_2(t)| \, dt
\end{aligned}
$$

$$
\max_{x \in R} |y_1 - y_2| \le |y_0 - y_0^*| + M |x_0^* - x_0| + |I| \cdot \max |f(x, y) - g(x, y)| + K_1 \int_{x_0}^x |y_1(t) - y_2(t)| \, dt
$$

By **Gronwall's inequality**,

$$
\max |y_1 - y_2| \le \left[ |y_0 - y_0^*| + M |x_0^* - x_0| + |I| \cdot \max |f - g| \right] e^{K_1 |I|}
$$

Repeat the process by multiplying with $g$, we get $K_2$ in the exponent.

Thus,

$$
\max_{x \in I} |y_1(x) - y_2(x)| \le \left[ |y_0 - y_0^*| + M |x_0 - x_0^*| + |I| \cdot \max_R |f(x, y) - g(x, y)| \right] e^{K_0 |I|}
$$

---


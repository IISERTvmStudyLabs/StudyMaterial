Feb 12, Lect - 16

## Banach Fixed Point Theorem

Suppose $(X, d)$ is a complete metric space and $T: X \to X$ is a contraction. Then $T$ has a unique fixed point $x^* \in X$.

### **Corollary**

Let $T: X \to X$ be such that $T^k$ is a contraction for some $k \ge 1$. Then $T$ has a unique fixed point.

## Existence and Uniqueness of IVP by Fixed Point Theorem

Under the same hypothesis of Picard's theorem, the IVP has a unique solution.

### **Proof**

Let $X = \{y \in C[x_0, x_0 + h] \text{ s.t. } |y - y_0| \le b \}$.
$X$ is a closed ball in a Banach space, $C[x_0, x_0 + h]$ with supremum norm,

$$
\|y\| = \sup_{x \in I} |y(x)|
$$

Hence, $X$ is a complete metric space.

Define $T: X \to X$ by

$$
(Ty)(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$

For $y \in X$, $Ty \in X$, we have $(Ty)(x) = y(x)$. It is clear that fixed points of $T$ are solutions of the IVP.

### **Claim** The solution is unique.

Let $y_1, y_2 \in X$ and consider,

$$
\begin{aligned}
|(Ty_1)(x) - (Ty_2)(x)| &= \left| \int_{x_0}^x [f(t, y_1(t)) - f(t, y_2(t))] \, dt \right| \\
&\le K \int_{x_0}^x |y_1 - y_2| \, dt \quad \{f \text{ is Lipschitz}\} \\
&= K |y_1 - y_2| (x - x_0)
\end{aligned}
$$

$$
\begin{aligned}
\implies |(T^2 y_1)(x) - (T^2 y_2)(x)| &\le K \int_{x_0}^x |(Ty_1)(t) - (Ty_2)(t)| \, dt \\
&\le K^2 \int_{x_0}^x |y_1 - y_2| (t - x_0) \, dt
\end{aligned}
$$

$$
= \frac{K^2 |y_1 - y_2| (x - x_0)^2}{2}
$$

Thereby,

$$
|(T^n y_1)(x) - (T^n y_2)(x)| \le \frac{K^n |y_1 - y_2| (x - x_0)^n}{n!} \le \frac{(Kh)^n}{n!} |y_1 - y_2|
$$

$$
\therefore \|T^n y_1 - T^n y_2\| \le \frac{(Kh)^n}{n!} \|y_1 - y_2\|
$$

If we choose $n$ large enough so that,

$$
\beta = \frac{(Kh)^n}{n!} < 1
$$

$$
\therefore \|T^n y_1 - T^n y_2\| \le \beta \|y_1 - y_2\|, \quad \beta < 1
$$

$\implies T^n$ is a contraction.

Hence by **Banach Fixed Point Theorem**, $T$ has a unique fixed point. Hence, the IVP has a unique solution.

---

## Theorem

Let,
(i) $y' = f(x, y); \quad y(x_0) = y_0$
(ii) $y' = f(x, y); \quad y(x_0^*) = y_0^*$

be two IVPs for $a \le x \le b$ with the solutions $y(x) = y(x, x_0, y_0)$ and $y^*(x) = y(x, x_0^*, y_0^*)$.

Let $f \in \text{Lip}(D, K)$ and $|f(x, y)| \le M$ for all $x \in [a, b]$ in $D$.

Then, given any $\epsilon > 0$, $\exists \ \delta > 0$ such that

$$
|y(x) - y^*(x)| < \epsilon
$$

whenever $|x_0 - x_0^*| < \delta$ and $|y_0 - y_0^*| < \delta$.

### **Proof**

Let $x_0, x_0^* \in [a, b]$, $x_0^* > x_0$ and we have $y(x_0) = y_0$ and $y(x_0^*) = y_0^*$.
Given that $f \in \text{Lip}(D, K)$ and $|f| \le M$.

Then by **Picard's theorem**, $\exists \ y(x)$ and $y^*(x)$ such that

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$

$$
y^*(x) = y_0^* + \int_{x_0^*}^x f(t, y^*(t)) \, dt
$$

$$
\begin{aligned}
y(x) - y^*(x) &= y_0 - y_0^* + \int_{x_0}^x f(t, y(t)) \, dt - \int_{x_0^*}^x f(t, y^*(t)) \, dt \\
&= y_0 - y_0^* + \int_{x_0}^{x_0^*} f(t, y(t)) \, dt + \int_{x_0^*}^x f(t, y(t)) \, dt - \int_{x_0^*}^x f(t, y^*(t)) \, dt \\
&= y_0 - y_0^* + \int_{x_0}^{x_0^*} f(t, y(t)) \, dt + \int_{x_0^*}^x [f(t, y(t)) - f(t, y^*(t))] \, dt
\end{aligned}
$$

Since $f \in \text{Lip}(D, K)$, we have

$$
|f(t, y(t)) - f(t, y^*(t))| \le K |y(t) - y^*(t)|
$$

and $|f| \le M$.

Therefore,

$$
\begin{aligned}
|y(x) - y^*(x)| &\le |y_0 - y_0^*| + M |x_0 - x_0^*| + K \int_{x_0^*}^x |y(t) - y^*(t)| \, dt
\end{aligned}
$$

By **Gronwall's inequality**,

$$
\begin{aligned}
|y(x) - y^*(x)| &\le \left[ |y_0 - y_0^*| + M |x_0 - x_0^*| \right] e^{\int_{x_0^*}^x K \, dt} \\
&\le [\delta + M\delta] e^{K(x - x_0^*)} \\
&\le \delta(1 + M) e^{K(b - a)}
\end{aligned}
$$

$\square$
___
Feb 16, Lect - 15

## Generalized Gronwall's Inequality

If $f$, $g$, and $h$ are non-negative continuous functions defined for $x \in I$, then the inequality

$$
f(x) \le h(x) + \int_{x_0}^x g(t) f(t) \, dt, \quad x \ge x_0, \quad x_0, x \in I
$$

$$
\implies f(x) \le h(x) + \int_{x_0}^x g(t) h(t) e^{\int_t^x g(s) \, ds} \, dt
$$

### **Proof**

Given that,

$$
f(x) \le h(x) + \int_{x_0}^x g(t) f(t) \, dt
$$

$$
= h(x) + z(x)
$$

when $z(x) = \int_{x_0}^x g(t) f(t) \, dt$

$$
\implies f(x) \le h(x) + z(x) \quad \dots \text{ (1)}
$$

$$
f(x) - h(x) \le z(x) \quad \dots \text{ (2)}
$$

$$
z'(x) = g(x) f(x) \quad \dots \text{ (3)}
$$

Since $g$ is non-negative, from (1),

$$
g(x) f(x) \le g(x) h(x) + g(x) z(x)
$$

$$
z'(x) \le g(x) h(x) + g(x) z(x)
$$

$$
z'(x) - g(x) z(x) \le g(x) h(x)
$$

Using the Integrating Factor (IF), $e^{-\int_{x_0}^x g(t) \, dt}$, we have

$$
z(x) e^{-\int_{x_0}^x g(t) \, dt} \le \int_{x_0}^x g(t) h(t) e^{-\int_{x_0}^t g(s) \, ds} \, dt
$$

$$
\implies z(x) \le \int_{x_0}^x g(t) h(t) e^{\int_{x_0}^x g(s) \, ds - \int_{x_0}^t g(s) \, ds} \, dt
$$

From (1), we have

$$
f(x) - h(x) \le z(x) \le \int_{x_0}^x g(t) h(t) e^{\int_t^x g(s) \, ds} \, dt
$$

$$
\implies f(x) \le h(x) + \int_{x_0}^x g(t) h(t) e^{\int_t^x g(s) \, ds} \, dt
$$

$\square$


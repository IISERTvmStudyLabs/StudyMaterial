
Feb 19, Lect - 18

### **Example.**

$$
\begin{cases}
y' = x + y \\
y(0) = 0
\end{cases}
$$

$$
R = \{ (x, y) : |x| \le 1, |y| \le 1 \}
$$

$M = 2, K = 1, h = \min \{a, \frac{b}{M}\} = \frac{1}{2}$

- $|x - x_0| \le h$ : neighborhood of existence, local existence — solution exists locally.
- $[x_0 - h, x_0 + h] \implies [-\frac{1}{2}, \frac{1}{2}] \to$ interval of existence.

If the solution exists in the interval $|x - x_0| \le a$, then we say that the solution exists **non-locally**.

If $I_1$ and $I_2$ are intervals of existence, then $I_1 \cup I_2$ is also an interval of existence.
$\{I_i\}$ is a collection of intervals of existence, then $J = \cup I_i$ is called the **maximal interval of existence**.

### **Example.**

$$
\begin{cases}
y' = y^2 \\
y(1) = -1
\end{cases}
$$

$R = \{ (x, y) : |x - 1| \le 1, |y + 1| \le 1 \}$
$h = \frac{1}{4}$
Interval of existence: $[\frac{3}{4}, \frac{5}{4}]$

---

## Theorem
Suppose $f(x, y)$ be a bounded continuous function defined on a domain and $f$ is Lipschitz in $y$ on the domain.
Then, the largest open interval over which the solution $y(x)$ with $y(x_0)$ of the IVP

$$
y' = f(x, y); \quad y(x_0) = y_0
$$

is defined in any one of the following two types:
(i) $(a, b)$ where both $a, b$ are finite, or either $a$ or $b$ is finite.
(ii) the entire $x$ axis, $-\infty < x < \infty$.

### **Proof**

Let $R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b \}$.

Given that,

$$
\begin{cases}
y' = f(x, y) \\
y(x_0) = y_0
\end{cases}
$$

We have $(x_0, y_0) \in R$ and by Picard's theorem, there exists a solution. Let it be $\phi_0$.

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt = \phi_0(x), \quad x \in [x_0 - h, x_0 + h]
$$

Let $x_1 = x_0 + h$ and $y_1 = \phi_0(x_1)$.

Clearly $(x_1, y_1) \in R$.

Reapply Picard's theorem to

$$
\begin{cases}
y' = f(x, y) \\
y(x_1) = y_1
\end{cases}
$$

There exists a solution, say $\phi_1$, such that $\phi_1(x_1) = y_1$ in $[x_1, x_1 + h_1]$, $h_1 > 0$.

Define

$$
y(x) = \begin{cases} \phi_0(x); & x_0 - h \le x \le x_0 + h \\ \phi_1(x); & x_1 \le x \le x_1 + h_1 \end{cases}
$$

**Claim** $y$ is a solution.

Clearly, $y$ is continuous.

In $[x_0 - h, x_0 + h]$, we have

$$
y(x) = \phi_0(x) = y_0 + \int_{x_0}^x f(t, \phi_0(t)) \, dt
$$

In $[x_1, x_1 + h_1]$, we have

$$
y(x) = \phi_1(x) = y_1 + \int_{x_1}^x f(t, \phi_1(t)) \, dt
$$

i.e.,

$$
y(x) = y_1 + \int_{x_1}^x f(t, y(t)) \, dt
$$

But,

$$
y_1 = \phi_0(x_1) = y_0 + \int_{x_0}^{x_1} f(t, y(t)) \, dt
$$

$$
\therefore y(x) = y_0 + \int_{x_0}^{x_1} f(t, y(t)) \, dt + \int_{x_1}^x f(t, y(t)) \, dt = y_0 + \int_{x_0}^x f(t, y(t)) \, dt, \quad [x_0 - h, x_1 + h_1]
$$

Continue the process, we can extend the solution to $[x_0 - h, x_n + h_n]$, $h_n \ge 0$.

Apply the above process to the left side of the interval $[x_0 - h, x_0 + h]$, we get an interval $[a_n, b_n]$ such that,

$$
[x_0 - h, x_0 + h] \subseteq [a_1, b_1] \subseteq [a_2, b_2] \subseteq \dots \subseteq [a_n, b_n]
$$

Let $a = \lim_{n \to \infty} a_n$ and $b = \lim_{n \to \infty} b_n$ whether limit exists finitely or infinitely.

In either case, we can extend the interval to an $(a, b)$ where $(a, b)$ is of the following form: $(-\infty, b)$, $(a, \infty)$, $(a, b)$, or $(-\infty, \infty)$ depends on the limit.

## Theorem

Let $f$ be a real continuous function on the strip,

$$
S = \{ (x, y) : |x - x_0| \le a, |y| < \infty, a > 0 \}
$$

and $f$ satisfy the Lipschitz condition with constant $K > 0$. Then the successive approximation $\{y_n\}$ of $y' = f(x, y)$; $y(x_0) = y_0$ exists on the existence interval $|x - x_0| \le a$ and converges to a solution $y(x)$ of the IVP.

### **Proof**

We note that the region is a strip and $f$ need not be bounded on $S$. Since $f$ is not bounded, the procedure that we followed in Picard's theorem to prove the convergence is not applicable.

But $\phi_n$ is the $n^{\text{th}}$ partial sum of the series,

$$
\phi_0 + \sum_{i=1}^{n} (\phi_i - \phi_{i-1})
$$


Since $f$ is not bounded, we follow a different approach to prove that the series converges.

Let $M_0 = |y_0|$ and $M_1 = \max |\phi_1(x)|$.

### **Claim** $M_0$ and $M_1$ are well defined.

Since $y_0$ is given to us, $M_0$ is well defined. For a fixed $y_0$, $f(x, y_0)$ is continuous on $|x - x_0| \le a$.

Hence,

$$
\phi_1(x) = \phi_0 + \int_{x_0}^x f(t, y_0) \, dt
$$

is continuous on $|x - x_0| \le a$.

$\implies \phi_1$ attains maximum on $|x - x_0| \le a$.

$\implies M_1 = \max |\phi_1(x)|$ is well defined.

Let $M = M_0 + M_1$.

Then,

$$
|\phi_0| \le M \quad \text{and} \quad |\phi_1 - \phi_0| \le M
$$


$$
\begin{aligned}
|\phi_2(x) - \phi_1(x)| &= \left| \int_{x_0}^x [f(t, \phi_1) - f(t, \phi_0)] \, dt \right| \\
&\le K \int_{x_0}^x |\phi_1 - \phi_0| \, dt \\
&= K \cdot M(x - x_0)
\end{aligned}
$$


$$
|\phi_3(x) - \phi_2(x)| = \left| \int_{x_0}^x [f(t, \phi_2) - f(t, \phi_1)] \, dt \right|
$$


$$
|\phi_3(x) - \phi_2(x)| \le \frac{K^2 M (x - x_0)^2}{2}
$$


In general,

$$
|\phi_{n+1}(x) - \phi_n(x)| \le \frac{M K^n (x - x_0)^n}{n!}
$$


By applying Weierstrass method similar to Picard's theorem, we see that the same converges to $\phi(x)$.

### **Claim** $\phi$ is a solution.

$$
\begin{aligned}
\phi(x) - y_0 - \int_{x_0}^x f(t, \phi(t)) \, dt &= \phi(x) - \left[ \phi_n(x) - \int_{x_0}^x f(t, \phi_{n-1}(t)) \, dt \right] - \int_{x_0}^x f(t, \phi(t)) \, dt \\
&\le |\phi - \phi_n| + \int_{x_0}^x |f(t, \phi_{n-1}) - f(t, \phi)| \, dt \\
&\le |\phi - \phi_n| + K \int_{x_0}^x |\phi_{n-1} - \phi| \, dt
\end{aligned}
$$


Since $\phi_n \to \phi$ uniformly, the RHS $\to 0$ as $n \to \infty$.

$$
\implies \phi(x) = y_0 + \int_{x_0}^x f(t, \phi(t)) \, dt
$$


Hence $\phi$ is a solution of the IVP.

$\square$

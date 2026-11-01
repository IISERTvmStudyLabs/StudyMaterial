4/2/26

## Theorem
Let $f(x, y)$ be a continuous function defined over a rectangle $R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b \}$ where $a, b > 0$. If $\frac{\partial f}{\partial y}$ exists and is continuous on $R$, then $f(x, y)$ satisfies the Lipschitz condition with respect to $y$ in $R$ and the Lipschitz constant $K$ is given by

$$
K = \sup_{(x, y) \in R} \left| f_y(x, y) \right|
$$

### **Proof**
Since $\frac{\partial f}{\partial y}$ is continuous on a closed rectangle, it is bounded.
$\implies$ supremum exists.

Let $K = \sup_{(x, y) \in R} \left| \frac{\partial f}{\partial y} \right|$.

Let $(x, y_1)$ and $(x, y_2) \in R$.
Then, by the **Fundamental Theorem of Calculus (FTC)**,

$$
f(x, y_1) - f(x, y_2) = \frac{\partial f}{\partial y} (\xi) (y_1 - y_2)
$$

$$
\implies |f(x, y_1) - f(x, y_2)| \le \left| \frac{\partial f}{\partial y} \right| |y_1 - y_2| \le K |y_1 - y_2|
$$

> Note: The converse need not be true.
> **Example**: $f(x, y) = x^2 |y|$ in $D = \{ |x| \le 1, |y| \le 1 \}$.


Feb 4, Lect - 12

## Theorem
Let $f(x, y)$ be a continuous function defined over a rectangle $R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b \}$ where $a, b > 0$. If $\frac{\partial f}{\partial y}$ exists and is continuous on $R$, then $f(x, y)$ satisfies the **Lipschitz condition** with respect to $y$ in $R$ and the Lipschitz constant $K$ is given by

$$
K = \sup_{(x, y) \in R} \left| \frac{\partial f}{\partial y} (x, y) \right|
$$

### Proof
Since $\frac{\partial f}{\partial y}$ is continuous on a closed rectangle, it is bounded, which implies the supremum exists.
Let,

$$
K = \sup_{(x, y) \in R} \left| \frac{\partial f}{\partial y} \right|
$$

Let $(x, y_1)$ and $(x, y_2) \in R$. Then by the **Mean Value Theorem**,

$$
f(x, y_1) - f(x, y_2) = \frac{\partial f}{\partial y} (x, \xi) (y_1 - y_2)
$$

where $\xi$ is between $y_1$ and $y_2$.

$$
\implies |f(x, y_1) - f(x, y_2)| \le \left| \frac{\partial f}{\partial y} \right| |y_1 - y_2| \le K |y_1 - y_2|
$$

**Remark:** The converse need not be true.
**Example**: $f(x, y) = x^2 |y|$ in $D = \{ |x| \le 1, |y| \le 1 \}$.

---

### **Problems**
Check whether the following functions satisfy the Lipschitz condition (L.C.) and if so, find $K$.

1. $f(x, y) = y^{1/3}, \quad |x| \le 1, \quad 0 \le y \le 2$
2. $f(x, y) = xy^2, \quad D = \{ |x| \le 1, \quad |y| \le 1 \}$
3. $f(x, y) = (y + y^2) \frac{\cos x}{x^2}, \quad D = \{ |y| \le 1, \quad |x - 1| \le \frac{1}{2} \}$

---

## Gronwall Inequality

## Theorem
Let $f(x)$ and $g(x)$ be two non-negative continuous functions for $x \ge x_0$. Let $K$ be any non-negative constant. Then the inequality

$$
f(x) \le K + \int_{x_0}^x g(t) f(t) \, dt, \quad x \ge x_0
$$

implies

$$
f(x) \le K e^{\int_{x_0}^x g(t) \, dt}, \quad x \ge x_0
$$

### Proof
Given that $f$ and $g$ are continuous and

$$
f(x) \le K + \int_{x_0}^x g(t) f(t) \, dt \quad \dots (1)
$$

Let,

$$
F(x) = K + \int_{x_0}^x g(t) f(t) \, dt
$$

Then $F(x_0) = K$. Since $f$ and $g$ are non-negative, $F(x) \ge K$. If $K > 0$, then $F(x) > 0$.
Also,

$$
F'(x) = g(x) f(x)
$$

We have from (1),

$$
f(x) \le F(x)
$$

$$
\implies \frac{f(x)}{F(x)} \le 1
$$

Since $g(x) \ge 0$,

$$
\frac{g(x) f(x)}{F(x)} \le g(x)
$$

$$
\implies \frac{F'(x)}{F(x)} \le g(x)
$$

Integrating both sides from $x_0$ to $x$:

$$
\implies \int_{x_0}^x \frac{F'(t)}{F(t)} \, dt \le \int_{x_0}^x g(t) \, dt
$$

$$
\implies \left. \ln(F(t)) \right|_{x_0}^x \le \int_{x_0}^x g(t) \, dt
$$

$$
\ln(F(x)) - \ln(K) \le \int_{x_0}^x g(t) \, dt
$$

$$
\implies F(x) \le K e^{\int_{x_0}^x g(t) \, dt}
$$

From (1), we have $f(x) \le F(x)$. Therefore,

$$
f(x) \le K e^{\int_{x_0}^x g(t) \, dt}
$$

Hence the result.
$\square$


Feb 4, Lect - 12

## Theorem
Let $f(x, y)$ be a continuous function defined over a rectangle $R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b \}$ where $a, b > 0$. If $\frac{\partial f}{\partial y}$ exists and is continuous on $R$, then $f(x, y)$ satisfies the **Lipschitz condition** with respect to $y$ in $R$ and the Lipschitz constant $K$ is given by

$$
K = \sup_{(x, y) \in R} \left| \frac{\partial f}{\partial y} (x, y) \right|
$$

### Proof
Since $\frac{\partial f}{\partial y}$ is continuous on a closed rectangle, it is bounded, which implies the supremum exists.
Let,

$$
K = \sup_{(x, y) \in R} \left| \frac{\partial f}{\partial y} \right|
$$

Let $(x, y_1)$ and $(x, y_2) \in R$. Then by the **Mean Value Theorem**,

$$
f(x, y_1) - f(x, y_2) = \frac{\partial f}{\partial y} (x, \xi) (y_1 - y_2)
$$

where $\xi$ is between $y_1$ and $y_2$.

$$
\implies |f(x, y_1) - f(x, y_2)| \le \left| \frac{\partial f}{\partial y} \right| |y_1 - y_2| \le K |y_1 - y_2|
$$

**Remark:** The converse need not be true.
**Example**: $f(x, y) = x^2 |y|$ in $D = \{ |x| \le 1, |y| \le 1 \}$.

---

### **Problems**
Check whether the following functions satisfy the Lipschitz condition (L.C.) and if so, find $K$.

1. $f(x, y) = y^{1/3}, \quad |x| \le 1, \quad 0 \le y \le 2$
2. $f(x, y) = xy^2, \quad D = \{ |x| \le 1, \quad |y| \le 1 \}$
3. $f(x, y) = (y + y^2) \frac{\cos x}{x^2}, \quad D = \{ |y| \le 1, \quad |x - 1| \le \frac{1}{2} \}$

---

## Gronwall Inequality

## Theorem
Let $f(x)$ and $g(x)$ be two non-negative continuous functions for $x \ge x_0$. Let $K$ be any non-negative constant. Then the inequality

$$
f(x) \le K + \int_{x_0}^x g(t) f(t) \, dt, \quad x \ge x_0
$$

implies

$$
f(x) \le K e^{\int_{x_0}^x g(t) \, dt}, \quad x \ge x_0
$$

### Proof
Given that $f$ and $g$ are continuous and

$$
f(x) \le K + \int_{x_0}^x g(t) f(t) \, dt \quad \dots (1)
$$

Let,

$$
F(x) = K + \int_{x_0}^x g(t) f(t) \, dt
$$

Then $F(x_0) = K$. Since $f$ and $g$ are non-negative, $F(x) \ge K$. If $K > 0$, then $F(x) > 0$.
Also,

$$
F'(x) = g(x) f(x)
$$

We have from (1),

$$
f(x) \le F(x)
$$

$$
\implies \frac{f(x)}{F(x)} \le 1
$$

Since $g(x) \ge 0$,

$$
\frac{g(x) f(x)}{F(x)} \le g(x)
$$

$$
\implies \frac{F'(x)}{F(x)} \le g(x)
$$

Integrating both sides from $x_0$ to $x$:

$$
\implies \int_{x_0}^x \frac{F'(t)}{F(t)} \, dt \le \int_{x_0}^x g(t) \, dt
$$

$$
\implies \left. \ln(F(t)) \right|_{x_0}^x \le \int_{x_0}^x g(t) \, dt
$$

$$
\ln(F(x)) - \ln(K) \le \int_{x_0}^x g(t) \, dt
$$

$$
\implies F(x) \le K e^{\int_{x_0}^x g(t) \, dt}
$$

From (1), we have $f(x) \le F(x)$. Therefore,

$$
f(x) \le K e^{\int_{x_0}^x g(t) \, dt}
$$

Hence the result.
$\square$

### **Corollary**

If

$$
f(x) \le K \int_{x_0}^x f(t) \, dt \quad \forall x \ge x_0
$$

Then $f(x) \equiv 0 \quad \forall x \ge x_0$.

### **Proof**

Given that

$$
f(x) \le K \int_{x_0}^x f(t) \, dt
$$

$$
\le \epsilon + \int_{x_0}^x K f(t) \, dt, \quad \epsilon > 0
$$

By **Gronwall's inequality**,

$$
f(x) \le \epsilon e^{\int_{x_0}^x K \, dt} = \epsilon e^{K(x - x_0)}
$$

Since $\epsilon$ is arbitrary, we have $f(x) = 0$.

$\square$

---

$$
y' = f(x, y)
$$

$$
y(x_0) = y_0 \iff y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$

## Picard's Approximation Scheme

Start with an initial approximation $\phi_0(x) = y_0$ and successively find the approximations $\phi_k$ of $\phi$ as follows:

$$
\phi_1(x) = y_0 + \int_{x_0}^x f(t, \phi_0(t)) \, dt
$$

$$
\phi_2(x) = y_0 + \int_{x_0}^x f(t, \phi_1(t)) \, dt
$$

$$
\vdots
$$

$$
\phi_k(x) = y_0 + \int_{x_0}^x f(t, \phi_{k-1}(t)) \, dt
$$

If $\phi_k \to \phi$, then $\phi$ will be a solution of the integral equation.

$$
\phi = \lim_{k \to \infty} \phi_k(x) = y_0 + \lim_{k \to \infty} \int_{x_0}^x f(t, \phi_{k-1}(t)) \, dt
$$

$$
= y_0 + \int_{x_0}^x f(t, \phi(t)) \, dt
$$

---

## **Problems**

**Solve,**

### **Example 1.**
$y' = xy, \quad y(0) = 1$, using **Picard's approximation scheme**.

### **Example 2.**
Find the first 4 approximations of $y' = 1 + xy, \quad y(0) = 1$.

### **Example 3.**
Find 4 approximations of $y' = x + y$ when $y(0) = 1$.

---

### **Solution 1.**

$$
y' = xy, \quad y(0) = 1
$$

We have,

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$

$$
= 1 + \int_0^x t \cdot y \, dt
$$

$$
\phi_0 = y_0 = 1
$$

$$
\phi_1 = y_0 + \int_{x_0}^x f(t, \phi_0(t)) \, dt
$$

$$
= 1 + \int_0^x t \, dt = 1 + \frac{x^2}{2}
$$

$$
\phi_2 = y_0 + \int_{x_0}^x f(t, \phi_1) \, dt
$$

$$
= 1 + \int_0^x t \left( 1 + \frac{t^2}{2} \right) \, dt
$$

$$
= 1 + \frac{x^2}{2} + \frac{x^4}{8} = 1 + \frac{x^2}{2} + \frac{(x^2/2)^2}{2!}
$$

$$
\phi_3 = 1 + \frac{(x^2/2)^1}{1!} + \frac{(x^2/2)^2}{2!} + \frac{(x^2/2)^3}{3!}
$$

$$
\phi_k \to e^{(x^2/2)}
$$

### **Solution 2.**

$$
y' = 1 + xy, \quad y(0) = 1
$$

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$
$$
\begin{aligned}
y_1 &= 1 + \int_0^x (1 + t) \, dt \\
\phi_1 &= y_1 = 1 + x + \frac{x^2}{2}, \quad \phi_0 = 1 \\
\phi_2 &= y_2 = 1 + \int_0^x \left( 1 + t + t^2 + \frac{t^3}{2} \right) \, dt \\
&= 1 + x + \frac{x^2}{2} + \frac{x^3}{3} + \frac{x^4}{8} \\
\phi_3 &= y_3 = 1 + \int_0^x \left( 1 + t + t^2 + \frac{t^3}{2} + \frac{t^4}{3} + \frac{t^5}{8} \right) \, dt \\
&= 1 + x + \frac{x^2}{2} + \frac{x^3}{3} + \frac{x^4}{8} + \frac{x^5}{15} + \frac{x^6}{48}
\end{aligned}
$$

---

Feb 5, Lect - 13

## Theorem
The sequence of successive approximations

$$
\phi_n(x) = y_0 + \int_{x_0}^x f(t, \phi_{n-1}(t)) \, dt, \quad n = 1, 2, \dots
$$

with $\phi_0(x) = y_0$ exists as continuous functions on $I = [x_0 - h, x_0 + h]$ where $h = \min \{a, \frac{b}{M}\}$ and $(x, \phi_n(x)) \in R$ where,

$$
R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b, \ a, b > 0 \}
$$

and $M > 0$ for each $x \in I$ and $\phi_k$ satisfies

$$
|\phi_k(x) - \phi_0(x)| \le M |x - x_0| \quad \forall x \in I.
$$

### Proof
We prove this by induction.

When $k = 0$, the result is obvious.
When $k = 1$,

$$
\phi_1(x) = y_0 + \int_{x_0}^x f(t, \phi_0(t)) \, dt
$$

$\phi_1$ is continuous on a closed rectangle $R$ and hence it is bounded. Therefore, there exists $M > 0$ such that $|f(t, \phi_0)| \le M$ on $I$.

$$
\begin{aligned}
|\phi_1 - \phi_0| &= \left| \int_{x_0}^x f(t, \phi_0) \, dt \right| \\
&\le \int_{x_0}^x |f(t, \phi_0)| \, dt \\
&\le \int_{x_0}^x M \, dt = M(x - x_0) \\
&\le M |x - x_0|
\end{aligned}
$$

Let us assume that the result is true for $k = n$ and we will prove it for $k = n + 1$.

We have,

$$
|\phi_n(x) - \phi_0| \le M |x - x_0|
$$

$(x, \phi_n) \in R$, and $\phi_n$ is continuous.
We have

$$
\phi_{n+1}(x) = \phi_0 + \int_{x_0}^x f(t, \phi_n(t)) \, dt.
$$

Since $f(t, \phi_n(t))$ is continuous on $R$, there exists $M > 0$ such that $|f(t, \phi_n(t))| \le M, \ M > 0$.

$$
\begin{aligned}
|\phi_{n+1}(x) - \phi_0(x)| &= \left| \int_{x_0}^x f(t, \phi_n(t)) \, dt \right| \\
&\le \int_{x_0}^x |f(t, \phi_n(t))| \, dt
\end{aligned}
$$

## Picard's Existence and Uniqueness Theorem

Let $f(x, y)$ be a continuous real-valued function defined on a closed rectangle

$$
R = \{ (x, y) : |x - x_0| \le a, |y - y_0| \le b, a, b > 0 \}
$$

and let $|f(x, y)| \le M, \forall (x, y) \in R$. Further, suppose that $f(x, y)$ satisfies the **Lipschitz condition**,

$$
|f(x, y_1) - f(x, y_2)| \le K |y_1 - y_2| \quad \forall (x, y_1), (x, y_2) \in R
$$

with Lipschitz constant $K$. Then the successive approximation,

$$
\phi_0 = y_0, \quad \phi_{n+1}(x) = y_0 + \int_{x_0}^x f(t, \phi_n(t)) \, dt
$$

converges in the interval

$$
I = |x - x_0| \le h = \min \left\{ a, \frac{b}{M} \right\}
$$

to a unique solution $\phi(x)$ of the IVP $y' = f(x, y), y(x_0) = y_0$ on $I$.

### **Proof**

We prove the theorem in three steps.

- **Step 1:** The sequence $\{ \phi_n \}$ converges.
- **Step 2:** The limit is a solution of the IVP.
- **Step 3:** The solution is unique.

### **Step 1:**

We have,

$$
\phi_0 = y_0, \quad \phi_n = y_0 + \int_{x_0}^x f(t, \phi_{n-1}(t)) \, dt
$$

We can write,

$$
\begin{aligned}
\phi_n &= \phi_0 + (\phi_1 - \phi_0) + \dots + (\phi_n - \phi_{n-1}) \\
&= \phi_0 + \sum_{k=1}^n (\phi_k - \phi_{k-1})
\end{aligned}
$$

$\implies \phi_n$ is the $n^{\text{th}}$ partial sum of the series,

$$
\phi_0 + \sum_{k=1}^\infty (\phi_k - \phi_{k-1})
$$

If we are able to show that the series converges, then the sequence will converge.

By the previously proven theorem, we have,

$$
|\phi_{n+1}(x) - \phi_0(x)| \le M |x - x_0|
$$

Without loss of generality, let us assume that $x \ge x_0$.

Consider,

$$
\begin{aligned}
|\phi_2(x) - \phi_1(x)| &\le \int_{x_0}^x |f(t, \phi_1(t)) - f(t, \phi_0(t))| \, dt \\
&\le \int_{x_0}^x K |\phi_1(t) - \phi_0(t)| \, dt \\
&\le K \int_{x_0}^x M |t - x_0| \, dt \\
&= MK \frac{(x - x_0)^2}{2}
\end{aligned}
$$

We claim that,

$$
|\phi_n(x) - \phi_{n-1}(x)| \le M \frac{K^{n-1} (x - x_0)^n}{n!}
$$

Proof is by induction.

The result is true for $n = 1, 2$. We assume that it is true for $n$ and will prove for $n+1$.

$$
\phi_{n+1}(x) - \phi_n(x) = \int_{x_0}^x [f(t, \phi_n(t)) - f(t, \phi_{n-1}(t))] \, dt
$$

$$
\begin{aligned}
|\phi_{n+1} - \phi_n| &\le \int_{x_0}^x |f(t, \phi_n) - f(t, \phi_{n-1})| \, dt \\
&\le \int_{x_0}^x K |\phi_n - \phi_{n-1}| \, dt \\
&\le K \int_{x_0}^x \frac{M K^{n-1} (t - x_0)^n}{n!} \, dt \\
&= \frac{M K^n (x - x_0)^{n+1}}{(n+1)!}
\end{aligned}
$$

$\square$


$$
\begin{aligned}
|\phi_{n+1} - \phi_n| &\le M \frac{K^n (x - x_0)^{n+1}}{(n + 1)!} \\
&\le \frac{M}{K} \frac{K^{n+1} h^{n+1}}{(n + 1)!} \quad \{ \text{given, } |x - x_0| \le h \} \\
&= \frac{M}{K} \frac{(Kh)^{n+1}}{(n + 1)!}
\end{aligned}
$$

$$
\sum_1^\infty |\phi_{n+1} - \phi_n| \le \frac{M}{K} \sum \frac{(Kh)^{n+1}}{(n + 1)!}
$$

The RHS is a series of positive terms, which converges to:

$$
\frac{M}{K} (e^{Kh} - 1)
$$

Thus the series $\phi_0 + \sum (\phi_k - \phi_{k-1})$ is dominated by a convergent series of positive terms. Hence by the **Weierstrass M-test**, the series $\phi_0 + \sum (\phi_k - \phi_{k-1})$ converges uniformly to $\phi(x)$.

Since $\phi_k'$'s are continuous and $\phi_k \to \phi$ uniformly, $\phi$ is continuous too.

### **Step 2: $\phi$ is a solution of IVP.**

It is enough to prove that $\phi$ is the solution of the integral equation:

$$
y_0 + \int_{x_0}^x f(t, \phi(t)) \, dt
$$

We claim that $f(t, \phi_n(t))$ converges uniformly to $f(t, \phi(t))$.

We know that $\phi_n \to \phi$ uniformly; given $\epsilon > 0$, $\exists n_0 > 0$ such that:

$$
|\phi_n(x) - \phi(x)| < \frac{\epsilon}{K} \quad \forall n \ge n_0
$$

$$
\begin{aligned}
|f(t, \phi_n(t)) - f(t, \phi(t))| &\le K |\phi_n(t) - \phi(t)| \\
&\le K \frac{\epsilon}{K} \\
&= \epsilon, \quad \forall n \ge n_0
\end{aligned}
$$

$\implies f(t, \phi_n) \to f(t, \phi)$ uniformly.

$$
\begin{aligned}
\therefore \phi(x) &= \lim_{n \to \infty} \phi_{n+1}(x) \\
&= \lim_{n \to \infty} \left[ y_0 + \int_{x_0}^x f(t, \phi_n(t)) \, dt \right] \\
&= y_0 + \int_{x_0}^x f(t, \phi(t)) \, dt
\end{aligned}
$$

$\implies \phi$ is the solution of the integral equation and hence it is a solution of the IVP.

$\square$
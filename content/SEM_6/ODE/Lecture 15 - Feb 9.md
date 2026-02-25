Feb 11, Lect - 15

## Theorem

The $n^{\text{th}}$ approximation $\phi_n(x)$ of $\phi(x)$ of an IVP satisfies

$$
|\phi_n(x) - \phi(x)| \le \frac{M}{K} \frac{(Kh)^{n+1}}{(n+1)!} e^{Kh}, \quad x \in I
$$

### **Proof**

We have $\phi_n(x) = \phi_0 + \sum_{i=1}^n (\phi_i - \phi_{i-1})$

$$
\phi(x) = \phi_0 + \sum_{i=1}^\infty (\phi_i - \phi_{i-1})
$$

$$
\begin{aligned}
|\phi_n(x) - \phi(x)| &= \left| \sum_{i=n+1}^\infty (\phi_i - \phi_{i-1}) \right| \\
&\le \sum_{i=n+1}^\infty |\phi_i - \phi_{i-1}| \\
&\le \sum_{i=n+1}^\infty \frac{M}{K} \frac{(Kh)^i}{i!} \\
&= \frac{M}{K} \frac{(Kh)^{n+1}}{(n+1)!} \sum_{i=0}^\infty \frac{(Kh)^i}{i!}
\end{aligned}
$$

$\square$

---

## Cauchy-Peano Theorem

Let $f(x, y)$ be continuous on the rectangle
$R = \{(x, y) : |x - x_0| \le a, |y - y_0| \le b, \ a, b > 0\}$

Then $\exists$ a solution to IVP $y' = f(x, y), \ y(x_0) = y_0$ in the interval $|x - x_0| \le h = \min \left\{ a, \frac{b}{M} \right\}$

where $M = \max_{x \in R} |f(x, y)|$.

### **Proof**

Let $\epsilon_n = 1/n$.

By the $\epsilon$-approximation theorem, for each $\epsilon_n$, $\exists$ an $\epsilon_n$-approximation $\{y_n\}$ of the IVP such that

$$
|y_n - y_0| \le b
$$

$\implies |y_n| \le |y_0| + b$

$\implies \{y_n\}$ is uniformly bounded.

Moreover,

$$
|y_n(x) - y_n(\tilde{x})| \le M |x - \tilde{x}|, \quad x, \tilde{x} \in I
$$

$\implies \{y_n\}$ is equicontinuous on $I$.

Then $\{y_n\}$ is uniformly bounded and equicontinuous.

Hence by **Arzelà-Ascoli theorem**, $\exists$ $\{y_{n_k}\}$ of $\{y_n\}$ which converges to $y(x)$ uniformly.

Hence $y$ is continuous and,
$$
|y(x) - y(\tilde{x})| \le M |x - \tilde{x}|, \quad x, \tilde{x} \in I
$$

____
### **Claim** The limit is a solution of the IVP.

We define

$$
e_{n_k}(x) = 
\begin{cases} 
y'_{n_k} - f(x, y_{n_k}(x)) & \text{if } y'_{n_k} \text{ exists} \\ 
0 & \text{otherwise} 
\end{cases}
$$

$$
y'_{n_k} = f(x, y_{n_k}(x)) + e_{n_k}(x) \quad \text{except at finite no. of points.}
$$

By integrating from $x_0 \to x$, we get

$$
y_{n_k}(x) = y_0 + \int_{x_0}^x [f(t, y_{n_k}(t)) + e_{n_k}(t)] \, dt
$$

We know that $y_{n_k} \to y(x)$ uniformly. Then $f(t, y_{n_k}(t)) \to f(t, y(t))$ uniformly.

Again, $|e_{n_k}(x)| \le \epsilon_{n_k} = \frac{1}{n_k} \to 0$ as $n \to \infty$.

Hence for $n \to \infty$ we get

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t)) \, dt
$$

$\implies y$ is a solution of the IVP.

---



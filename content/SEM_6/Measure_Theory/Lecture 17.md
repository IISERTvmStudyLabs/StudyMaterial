# Dominated Convergence Theorem

Suppose $(\Omega, \mathcal{F}, \mu)$ is a measure space. Suppose $f_n: \Omega \to \bar{\mathbb{R}}$ is a sequence of measurable functions s.t. $f = \lim_{n \to \infty} f_n$ pointwise.

If $\exists$ a non-negative integrable function $g$ st

$$|f_n(\omega)| \le g(\omega), \forall n, \forall \omega \in \Omega$$

Then

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu = \int_{\Omega} f d\mu \text{ ; In fact, } \int_{\Omega} |f_n - f| d\mu = 0$$

**Proof**
Since $g$ is integrable, $f_n, f$ are integrable.

$$|f_n - f| \le 2g$$

**Note:-** $|f_n| + |f| \le 2g \implies |f_n - f| \le 2g$

Apply [[Lecture 14#Fatou's Lemma|Fatou's Lemma]] to $\{2g - |f_n - f|\}$ to get

$$\int_{\Omega} 2g d\mu \le \liminf \int_{\Omega} (2g - |f_n - f|) d\mu$$

$$= \int_{\Omega} 2g d\mu + \liminf \left( - \int_{\Omega} |f_n - f| d\mu \right)$$

$$= \int_{\Omega} 2g d\mu - \limsup \int_{\Omega} |f_n - f| d\mu$$
Since $g$ is integrable, $\int_{\Omega} 2g d\mu < \infty$, we can subtract $\int_{\Omega} 2g d\mu$ from the both sides of the above inequality to get

$$-\limsup_{n \to \infty} \int_{\Omega} |f_n - f| d\mu \ge 0$$

$$\implies \limsup_{n \to \infty} \int_{\Omega} |f_n - f| d\mu \le 0$$

$$\implies \limsup_{n \to \infty} \int_{\Omega} |f_n - f| d\mu = 0$$

Now,

$$\left| \int_{\Omega} f_n d\mu - \int_{\Omega} f d\mu \right| = \left| \int_{\Omega} (f_n - f) d\mu \right|$$

$$\le \int_{\Omega} |f_n - f| d\mu$$

$$\implies \int_{\Omega} f_n d\mu \to \int_{\Omega} f d\mu$$

---

### Corollary
If $\{f_n\}$ is a sequence of integrable fns on $\Omega$ st

$$\sum_{n=1}^{\infty} \int_{\Omega} |f_n| d\mu < \infty$$

Then,

$$\sum_{n=1}^{\infty} f_n \text{ converges pointwise.}$$

and 

$$\int_{\Omega} \left( \sum_{n=1}^{\infty} f_n \right) d\mu = \sum_{n=1}^{\infty} \left( \int_{\Omega} f_n d\mu \right)$$
**Proof**

Set $g = \sum_{n=1}^{\infty} |f_n|$. Then by MCT

$$\int_{\Omega} g d\mu = \sum_{n=1}^{\infty} \int_{\Omega} |f_n| d\mu < \infty$$

This implies $g$ is real valued a.e. ie $\sum |f_n|$ converges a.e

Thus $\sum f_n$ converges almost everywhere.

Denote $f = \sum_{n=1}^{\infty} f_n$, $g_n = \sum_{j=1}^{n} f_j$. Then $g_n \to f$ a.e. and

$$|g_n| \le \sum_{j=1}^{n} |f_j| \le g$$

So since $g$ is integrable apply DCT to get

$$\lim_{n \to \infty} \int_{\Omega} g_n = \int_{\Omega} f d\mu$$

$$\implies \int_{\Omega} \left( \sum_{n=1}^{\infty} f_n \right) d\mu = \lim_{n \to \infty} \sum_{j=1}^{n} \int_{\Omega} f_j d\mu = \sum_{n=1}^{\infty} \int_{\Omega} f_n d\mu$$

---

## Proposition
Suppose $f: \Omega \times [a,b] \to \mathbb{R}$, where $-\infty < a < b < \infty$

and $f(\cdot, t)(x) := f(x, t)$ is integrable for each $t \in [a,b]$

and let $$F(t) = \int_{\Omega} f(x, t) d\mu(x)$$

a) If there exist an integrable fn $g$ st

$$|f(x, t)| \le g(x), \forall x, \forall t$$

and $\lim_{t \to t_0} f(x, t) = f(x, t_0)$

then $F$ is continuous.

b) If $\frac{\partial f}{\partial t}$ exists and $\exists$ integrable fn $h$ s.t

$$\left| \frac{\partial f}{\partial t} (x, t) \right| \le h(x), \forall x, \forall t$$
Then $F$ is differentiable and

$$F'(t) = \int_{\Omega} \frac{\partial}{\partial t} f(x, t) d\mu(x)$$

**Example**: Let $f$ be integrable, $f: \mathbb{R} \to \mathbb{R}$, then

define

$$g(t) = \hat{f}(t) = \int_{\mathbb{R}} f(x) \cos(tx) dx, \quad t \in \mathbb{R}$$

Prove that $g$ is continuous.

Take $\{t_n\}$ be a sequence converging to $t_0$.

Let $t_0$ be any point in $\mathbb{R}$. Then Denote

$$f_n(x) = f(x) \cos(t_n x), \quad x \in \mathbb{R}$$

Then

$$f_n(x) \to f(x) \cos(t_0 x) \quad \text{and}$$

$$|f_n(x)| \le |f(x)|$$

Apply DCT,

$$\int_{\mathbb{R}} f(x) \cos(t_n x) dx \to \int_{\mathbb{R}} f(x) \cos(t_0 x) dx$$

Note: $g(t) \to 0, \text{ as } t \to \infty$
# 17-2

Suppose $|f(\omega, t)| \leq g(\omega) \quad \forall \omega, \forall t$, where $g$ is integrable on $\Omega$.

Define

$$b_n(\omega) = f(\omega, t_n)$$

As

$$f(\omega, t) \rightarrow f(\omega, t_0) \text{ as } t \rightarrow t_0 \quad \forall \omega$$

Therefore

$$b_n(\omega) \rightarrow f(\omega, t_0) \quad \forall \omega, \text{ as } t \rightarrow t_0$$
Then, $|f(\omega, t)| \leq g(\omega) \quad \forall \omega$ and $g$ is injective.

Hence by DCT,

$$F(t_n) = \int_{\Omega} f d\mu \rightarrow \int_{\Omega} f(\omega, t_0) d\mu = f(t_0)$$

Assume

$$\frac{dF(t)}{dt} = \frac{d}{dt} \int_{\Omega} f(\omega, t) d\mu(\omega)$$

**Exercise:** prove this.

---

# Theorem

Let $f: [a, b] \rightarrow \mathbb{R}$ be Riemann integrable where $a, b \in \mathbb{R}$ with $a < b$. Then $f$ is Lebesgue integrable on $[a, b]$.

Then

$$\int_{a}^{b} f(x) dx = \int_{[a, b]} f d\lambda$$

### Proof

Given a partition $P = \{a = x_0 < x_1 < \dots < x_n = b\}$

Define

$$U(P, f) = \sum_{i=1}^{n} M_i (x_i - x_{i-1})$$

$$M_i = \sup \{ f(x) \mid x \in [x_{i-1}, x_i] \}$$

$$L(P, f) = \sum_{i=1}^{n} m_i (x_i - x_{i-1})$$

$$m_i = \inf \{ f(x) \mid x \in [x_{i-1}, x_i] \}$$

**NOTE**

If $P^*$ is a refinement of $P$, then

$$L(P, f) \leq L(P^*, f) \leq U(P^*, f) \leq U(P, f)$$

**Prove this.**
## Lemma

$f \in \mathcal{R}[a, b]$ if and only if there exists a sequence of partitions $\{P_n\}$

$$||P|| = \sup_{1 \leq i \leq n} (x_i - x_{i-1})$$

such that

1. $P_{n+1}$ is a refinement of $P_n$
    
2. Length of $P_n$, $||P_n|| \rightarrow 0$ as $n \rightarrow \infty$
    
3. $\lim_{n \rightarrow \infty} L(P_n, f) = \lim_{n \rightarrow \infty} U(P_n, f) = \int_{a}^{b} f(x) dx$
    

Suppose $P_n = \{a = x_0^{(n)} < x_1^{(n)} < \dots < x_{k(n)}^{(n)} = b\}$

Define

$$g_n = \sum_{i=1}^{k(n)} m_i^{(n)} \chi_{[x_{i-1}^{(n)}, x_i^{(n)}]}$$

$$h_n = \sum_{i=1}^{k(n)} M_i^{(n)} \chi_{[x_{i-1}^{(n)}, x_i^{(n)}]}$$

Observe

$$\int_{\mathbb{R}} g_n d\lambda = L(P_n, f), \quad \int_{\mathbb{R}} h_n d\lambda = U(P_n, f)$$

Also,

$$g_n \leq f \leq h_n \text{ (Verify!), } \forall n$$

**NOTE**

That $g_{n+1} \geq g_n$ and $h_{n+1} \leq h_n \text{ (Verify!), } \forall n$

$\Rightarrow \left\{ \int_{\mathbb{R}} g_n d\lambda \right\}$ and $\left\{ \int_{\mathbb{R}} h_n d\lambda \right\}$ are called monotonic sequences in $\mathbb{R}$.

By applying Fatou's Lemma to $\{h_n - g_n\}$

**NOTE**

{Also show measurability}

$$\int_{\mathbb{R}} \liminf (h_n - g_n) d\lambda \leq \liminf_{n \rightarrow \infty} \int_{\mathbb{R}} (h_n - g_n) d\lambda$$

$$= \liminf_{n \rightarrow \infty} \left( \int_{\mathbb{R}} h_n d\lambda - \int_{\mathbb{R}} g_n d\lambda \right)$$

$$= 0 \quad \{ \text{since both limit goes to } \int_{a}^{b} f dx \}$$

$$\Rightarrow \int_{\mathbb{R}} \liminf (h_n - g_n) d\lambda = 0$$

$$\Rightarrow \liminf_{n \rightarrow \infty} (h_n - g_n) = 0$$

But $g_n \leq f \leq h_n \quad \forall n \Rightarrow \lim_{n \rightarrow \infty} g_n = f = \lim_{n \rightarrow \infty} h_n$

$$\Rightarrow f \text{ is Lebesgue measurable.}$$

Note that $h_n \leq M \chi_{[a, b]}$, where

$$M = \sup \{ f(x) \mid x \in [a, b] \}$$

Hence by DCT,

$$\int_{[a, b]} f d\lambda = \lim_{n \rightarrow \infty} \int_{[a, b]} h_n d\lambda$$

$$= \lim_{n \rightarrow \infty} U(P_n, f) = \int_{a}^{b} f(x) dx$$

**Remark:-** If $f$ & $g$ are two non-negative measurable functions & $f \leq g$ then $\int_{\Omega} f d\mu \leq \int_{\Omega} g d\mu$.

# Theorem (MCT)
Suppose $\{f_n\}$ is a non-decreasing sequence of non-negative measurable functions s.t. $f_n \uparrow f$. Then

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu = \int_{\Omega} f d\mu.$$

**Proof:-** Since $\{\int_{\Omega} f_n d\mu\}$ is also an increasing sequence of non-negative numbers, so its limit exists.

Moreover, $f_n \leq f \quad \forall n$. Therefore, $\lim_{n \to \infty} \int_{\Omega} f_n d\mu \leq \int_{\Omega} f d\mu$.

To prove the reverse inequality, we need to show that

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu \geq \int_{\Omega} \phi d\mu$$

for all simple non-negative functions $\phi \leq f$.

Take a such $\phi$ & $\alpha \in (0, 1)$. Then it is enough to prove:

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu \geq \alpha \int_{\Omega} \phi d\mu$$

Consider, $E_n = \{\omega \in \Omega : f_n(\omega) \geq \alpha \phi(\omega)\}, n \in \mathbb{N}$.

**Claim:-** $\Omega = \bigcup_{n \geq 1} E_n$. Suppose $\omega_0 \in \Omega$. If $\phi(\omega_0) = 0$ then $\omega_0 \in E_n$ $\forall n$ (because $f_n \geq 0 \forall n$).

If $\phi(\omega_0) > 0$, then there exist $n_0 \in \mathbb{N}$ such that

$$f_n(\omega_0) > f(\omega_0) - (1-\alpha)\phi(\omega_0) \quad \forall n \geq n_0$$

$$\Rightarrow f_n(\omega_0) > \phi(\omega_0) - \phi(\omega_0) + \alpha \phi(\omega_0), \forall n \geq n_0$$

$$\Rightarrow f_n(\omega_0) > \alpha \phi(\omega_0) \forall n \geq n_0$$

$$\Rightarrow \omega_0 \in E_n \forall n \geq n_0 \quad \therefore \text{Claim is proved.}$$

---

Then

$$\int_{\Omega} f_n d\mu \geq \int_{E_n} f_n d\mu \geq \alpha \int_{E_n} \phi d\mu \quad \text{—— } \circledast$$

**Note:-** $E_n$ is a increasing sequence, since $f_{n+1} \geq f_n$ and $\Rightarrow E_{n+1} \supseteq E_n$.

Define the measure $\nu$ on $\mathcal{F}$ by

$$\nu(A) = \int_A \phi d\mu, \quad A \in \mathcal{F}$$

Then

$$\nu(E_n) \uparrow \nu(\Omega)$$

$$\therefore \int_{E_n} \phi d\mu \to \int_{\Omega} \phi d\mu \quad \text{as } n \to \infty$$

Taking limit as $n \to \infty$ in $\circledast$, we obtain

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu \geq \lim_{n \to \infty} \alpha \int_{E_n} \phi d\mu = \alpha \int_{\Omega} \phi d\mu$$

Take limit $\alpha \to 1$. $\blacksquare$

---

## Proposition
Suppose $f, g$ are two measurable functions and non-negative functions. Then

$$\int_{\Omega} (\alpha f + g) d\mu = \alpha \int_{\Omega} f d\mu + \int_{\Omega} g d\mu$$

### Proof
use $\text{def}^n$ (Exercise)

Take sequence of simple non-negative measurable functions $\{\phi_n\}$ & $\{\psi_n\}$ s.t.

$$\phi_n \uparrow f \text{ \& } \psi_n \uparrow g \text{ as } n \to \infty$$

Then

$$\alpha \phi_n + \psi_n \uparrow (\alpha f + g)$$

---

But

$$\int_{\Omega} (\alpha \phi_n + \psi_n) d\mu = \alpha \int_{\Omega} \phi_n d\mu + \int_{\Omega} \psi_n d\mu$$

By MCT,

$$\int_{\Omega} (\alpha f + g) d\mu = \alpha \int_{\Omega} f d\mu + \int_{\Omega} g d\mu$$

## Corollary
If $\{f_n\}_{n=1}^{\infty}$ is a sequence of non-negative measurable functions and

$$f = \sum_{n=1}^{\infty} f_n$$

Then,

$$\int_{\Omega} f d\mu = \sum_{n=1}^{\infty} \int_{\Omega} f_n d\mu$$

**Proof:-** Let $F_N$ be the partial sum,

$$F_N = \sum_{n=1}^{N} f_n$$

Then,

$$\int_{\Omega} F_N = \int_{\Omega} \sum_{n=1}^{N} f_n$$

$$\Rightarrow \int_{\Omega} F_N d\mu = \sum_{n=1}^{N} \int_{\Omega} f_n d\mu \quad (\text{since it is a finite sum})$$

and as $N \to \infty$

$$\int_{\Omega} F_N d\mu \uparrow \sum_{n=1}^{\infty} \int_{\Omega} f_n d\mu \quad \{ \text{since } F_N \uparrow \sum_{n=1}^{\infty} f_n = f \}$$

$$\Rightarrow \int_{\Omega} F_N d\mu \to \int_{\Omega} f d\mu$$

But

$$\int_{\Omega} F_N d\mu \to \sum_{n=1}^{\infty} \int_{\Omega} f_n d\mu$$

Hence,

$$\int_{\Omega} f d\mu = \sum_{n=1}^{\infty} \int_{\Omega} f_n d\mu$$

---

# Fatou's Lemma
Let $f_1, f_2 \dots$ be a sequence of non-negative measurable fns. Then

$$\int_{\Omega} (\liminf_{n \to \infty} f_n) d\mu \leq \liminf_{n \to \infty} \int_{\Omega} f_n d\mu$$

**Proof:-** Define,

$$g_k = \inf_{n \geq k} f_n$$

Then

$$\lim_{k \to \infty} g_k = \liminf_{n \to \infty} f_n \quad \& \quad g_{k+1} \geq g_k$$

$$\int_{\Omega} (\liminf_{n \to \infty} f_n) d\mu = \lim_{k \to \infty} \int_{\Omega} g_k d\mu$$

But

$$\int_{\Omega} g_k d\mu \leq \int_{\Omega} f_n d\mu, \forall n \geq k, n \geq k$$

---

 **Note:-** $g_k \leq f_k, g_k \leq f_{k+1} \dots$ $g_k \leq f_n \forall n \geq k$

$$\Rightarrow g_k \leq f_n$$

$$\int_{\Omega} g_k d\mu \leq \inf_{n \geq k} \int_{\Omega} f_n d\mu$$

$$\lim_{k \to \infty} \int_{\Omega} g_k d\mu \leq \liminf_{n \to \infty} \int_{\Omega} f_n d\mu$$

$$\Rightarrow \int_{\Omega} (\liminf_{n \to \infty} f_n) d\mu \leq \liminf_{n \to \infty} \int_{\Omega} f_n d\mu \quad (\text{by } \circledast)$$

---


**Exercise:** Assume Fatou's Lemma, & prove MCT.
_____
**Example:** The inequality can be strict. Consider $(\mathbb{R}, \mathcal{B}(\mathbb{R}), \lambda)$. Take two disjoint sets $A, B \in \mathcal{B}(\mathbb{R})$ such that $\lambda(A) = \lambda(B) = 1$.

Consider for $n \in \mathbb{N}$,

$$f_n = \chi_A \text{ if } n \text{ is even}$$

$$= \chi_B \text{ if } n \text{ is odd}$$

Take $\omega \in \mathbb{R}$. Then $\omega \in A$ or $\omega \notin A$. If $\omega \in A$ then $f_{2n}(\omega) = 1$ and $f_{2n+1}(\omega) = 0$. If $\omega \in B$, $f_{2n+1}(\omega) = 1$ and $f_{2n}(\omega) = 0$. If $\omega \notin A \cup B$ then $f_n(\omega) = 0$.

Then

$$\liminf_{n \to \infty} f_n(\omega) = \lim_{n \to \infty} \inf_{k \geq n} f_k(\omega)$$

$$= 0$$

**Note:** In all cases $\inf = 0$.

$n$ is odd, $\int_{\Omega} f_n d\lambda = \int_{\Omega} \chi_B d\lambda = \lambda(B) = 1$

$n$ is even, $\int_{\Omega} f_n d\lambda = \int_{\Omega} \chi_A d\lambda = \lambda(A) = 1$

$\implies \lim_{n \to \infty} \int_{\Omega} f_n d\mu = 1$

---
# Definition (Almost Everywhere)

Suppose $f, g : \Omega \to \mathbb{R}$ be measurable functions. $f$ is said to satisfy 'property $P$' **almost everywhere** (written as **a.e.**) w.r.t. $\mu$ if $\exists E \in \mathcal{F}$ with $\mu(E) = 0$ and $f$ satisfies the 'property $P$' $\forall x \in E^c$.

**Note:** In probability, it is **almost surely**.

---
**Example**
Let us find $(\mathbb{R}, \mathcal{L}, \lambda)$.

**Note:** Lebesgue $\sigma$-algebra is complete but Borel is not in any topological space.

1. $\chi_{\{0\}}$ is continuous almost everywhere with $\lambda$.
    
2. Define a Dirac measure $\delta_0(A) = \begin{cases} 1 & \text{if } 0 \in A \\ 0 & \text{otherwise} \end{cases}$
    
**Prove that** $\delta_0$ is a measure on $(\mathbb{R}, \mathcal{P}(\mathbb{R}), \delta_0)$.
If $\chi_{\{0\}}$ is not continuous a.e. w.r.t. $\delta_0$.
1. $f(x) = \begin{cases} \sin(x) & , x \neq n\pi, n \in \mathbb{Z} \\ 2 & , x = n\pi \end{cases}$
    $f$ is continuous a.e. w.r.t. $\lambda$.
2. $\chi_{[0,1]}$ is differentiable a.e.
3. $\chi_{\mathbb{Q} \cap [0,1]}$ is **not** a.e. continuous.
---
# Theorem

If $f$ is a non-negative measurable function, then:

$$\int_{\Omega} f d\mu = 0 \iff f = 0 \text{ a.e.}$$

---
**Proof**

Suppose $f$ is zero a.e. then if $\phi$ is a simple function & $0 \le \phi \le f$ then $\phi = 0$ a.e. and so $\int_{\Omega} \phi d\mu = 0$.

Suppose $\int_{\Omega} f d\mu = 0$. If possible, $f$ is not $0$ a.e. then:

$$\{\omega \in \Omega \mid f(\omega) > 0\} = \bigcup_{n \ge 1} \underbrace{\{\omega \in \Omega \mid f(\omega) > \frac{1}{n}\}}_{E_n}$$

Then since $f$ is not a.e. $0$, $\exists n_0$ s.t. $\mu(E_{n_0}) > 0$.

Now, $\int_{\Omega} f d\mu \ge \int_{E_{n_0}} f d\mu \ge \int_{E_{n_0}} \frac{1}{n_0} d\mu = \frac{1}{n_0} \mu(E_{n_0}) > 0$.

This is a contradiction since we assumed this is $0$.

$\therefore$ Our assumption is wrong, hence $f = 0$ a.e.

---

# Infinite Sum as Lebesgue Integration

Suppose $\{a_n\}$ is a sequence of non-negative real numbers.

$$\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} \sum_{n=1}^{N} a_n$$

Define $f : \mathbb{N} \to [0, \infty)$

$$f(n) = a_n$$

And for $k \in \mathbb{N}$, $$f_k(n) = \begin{cases} a_n, & n \le k \\ 0, & \text{ow} \end{cases}$$

Consider the measure space $(\mathbb{N}, \mathcal{P}(\mathbb{N}), C)$ where $C$ is the counting measure:

$C(E) = \begin{cases} \#E, & \text{if finite} \\ \infty, & \text{ow} \end{cases}$

**Note that**

$f_k(n_0) = a_{n_0} = f(n_0)$

$\Rightarrow f_k \uparrow f$ as $k \to \infty$

& $f_{k+1} \ge f_k$.

Hence by **MCT** (Monotone Convergence Theorem),

$$\lim_{k \to \infty} \int_{\mathbb{N}} f_k \, dC = \int_{\Omega} f \, dC$$

**Note:**

$f_{k+1}(n) = f_k(n)$ if $n \le k$

$= a_{k+1} \ge 0 = f_k(n)$, $n = k+1$

Now $f_k = a_1 \chi_{\{1\}} + a_2 \chi_{\{2\}} + \dots + a_k \chi_{\{k\}} + 0 \dots$

$$\int_{\mathbb{N}} f_k \, dC = \sum_{j=1}^{k} a_j$$

$$\int_{\mathbb{N}} f \, dC = \lim_{k \to \infty} \int_{\mathbb{N}} f_k \, dC = \lim_{k \to \infty} \sum_{j=1}^{k} a_j$$

---


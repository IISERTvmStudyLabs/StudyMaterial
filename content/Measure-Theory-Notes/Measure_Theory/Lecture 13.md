
$$\int_{\Omega} f d\mu = \sup \left\{ \int_{\Omega} \phi d\mu : 0 \le \phi \le f, \phi \text{ is non negative simple fn} \right\}$$

$$\implies f_n \le f_{n+1}, f_n \to f$$

By def: $\int_{\Omega} f_n d\mu \le \int_{\Omega} f d\mu$

$$\lim_{n \to \infty} \int_{\Omega} f_n d\mu \le \int_{\Omega} f d\mu$$

---

**Note**: By def :- $\phi = \sum_{i=1}^{k} c_i \chi_{E_i} \implies \int_{\Omega} \phi d\mu = \sum_{i=1}^{k} c_i \mu(E_i)$, if $\phi$ is simple.

$$\int_{\Omega} f d\mu = \sup \left\{ \int_{\Omega} \phi d\mu : \phi \text{ is simple, } 0 \le \phi \le f \right\}$$

---

**Textbook**: _Measure Theory & Integration_, G. de Barra, New Age Publication

**Definitions**: If $f : \Omega \to [0, \infty]$ is measurable and $A \in \mathcal{F}$ we define

$$\int_{A} f d\mu = \int_{\Omega} f \chi_A d\mu$$

**Proposition**: If $\mu(A) = 0$, then for any measurable $f : \Omega \to [0, \infty]$

$$\int_{A} f d\mu = 0$$

**Proof**: $\int_{A} f d\mu = \int_{\Omega} f \chi_A d\mu = \sup \left\{ \int_{\Omega} \phi d\mu : \phi \text{ is simple, } 0 \le \phi \le f \chi_A \right\}$

It is enough to show for all non-negative simple functions.

Take

$$g = \sum_{i=1}^{k} c_i \chi_{E_i}$$

is a simple fn.

$$\int_{A} g d\mu = \int_{\Omega} g \chi_A d\mu$$

$$= \int_{\Omega} \left( \sum_{i=1}^{k} c_i \chi_{E_i} \right) \cdot \chi_A d\mu$$

$$= \int_{\Omega} \sum_{i=1}^{k} c_i \chi_{E_i \cap A} d\mu$$

$$= \sum_{i=1}^{k} c_i \mu(E_i \cap A) = 0$$

**Proposition**: Let $\phi$ be a non-negative simple fn. Then, $A \mapsto \int_{A} \phi d\mu, A \in \mathcal{F}$ [is a measure].

---

---

Then $\nu_\phi$ is a measure on the $\sigma$-field $\mathcal{F}$.

**Proof**: $\nu_\phi(\phi) = 0$ (trivial)

Need to prove if $\{A_j\}$ is a seq. of disjoint sets in $\mathcal{F}$.

Then $\int_{\cup_{i=1}^\infty A_i} \phi d\mu = \sum_{j=1}^\infty \int_{A_j} \phi d\mu$

Suppose $\phi = \sum_{i=1}^k c_i \chi_{E_i}, c_i \ge 0, E_i \in \mathcal{F}$

$$\int_{\cup_{j=1}^\infty A_j} \phi d\mu = \int_{\cup_{j=1}^\infty A_j} \left( \sum_{i=1}^k c_i \chi_{E_i} \right) d\mu$$

$$= \int_{\Omega} \left( \sum_{i=1}^k c_i \chi_{E_i} \right) \chi_{\bigcup_{j=1}^\infty A_j} d\mu$$

$$= \int_{\Omega} \sum_{i=1}^k c_i \chi_{E_i \cap \bigcup_{j=1}^\infty A_j} d\mu$$

$$= \sum_{i=1}^k c_i \mu(E_i \cap \bigcup_{j=1}^\infty A_j)$$

$$= \sum_{i=1}^k c_i \mu \left( \bigcup_{j=1}^\infty (E_i \cap A_j) \right)$$

(Complete the proof)

# Monotone Convergence Theorem

Let $0 \le f_1 \le f_2 \le \dots$ be a sequence of non-negative measurable functions and let $f = \lim_{n \to \infty} f_n$. Then

$$\int_{\Omega} f d\mu = \lim_{n \to \infty} \int_{\Omega} f_n d\mu$$

---


---

Take $\{r_1, r_2, \dots \}$ to be a enumeration of rationals in $[0, 1]$

$$f_n(x) = \begin{cases} 1, & x \in \{r_1, r_2, \dots, r_n\} \\ 0, & \text{otherwise} \end{cases}$$

**Note**: $[0, 1] \cap \mathbb{Q}$ is Borel $\sigma$-algebra.

$$\int_{\Omega} f_n d\mu = 0$$

$$f_n \to \chi_{\mathbb{Q} \cap [0,1]} = f$$

$$\implies \int f = 0$$

---

## Proposition
If $f$ and $g$ are two non-negative measurable functions then

1. $\int_{\Omega} (f + \alpha g) d\mu = \int_{\Omega} f d\mu + \alpha \int_{\Omega} g d\mu, \alpha \ge 0$
    
2. If $f \le g$ then $\int_{\Omega} f d\mu \le \int_{\Omega} g d\mu$
    

**Proof**: ii) $\int_{\Omega} f d\mu = \sup \{ \int_{\Omega} \phi d\mu : \phi \text{ is simple}, 0 \le \phi \le f \}$

$$\le \sup \{ \int_{\Omega} \psi d\mu : \psi \text{ is simple}, 0 \le \psi \le g \}$$

$$= \int_{\Omega} g d\mu$$

(Try to prove i)

---
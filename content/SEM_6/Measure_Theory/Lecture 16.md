## Proposition

Suppose $(\Omega, \mathcal{F}, \mu)$ is a **complete measure space**. Suppose $f: \Omega \to \mathbb{\bar{R}}$ and $g: \Omega \to \mathbb{\bar{R}}$ are s.t. $f = g$ a.e. (almost everywhere). Then if $f$ is measurable, $g$ is also measurable.

**Proof**

Let $A \in \mathcal{B}_{\mathbb{\bar{R}}}$. Then $f^{-1}(A) \in \mathcal{F}$. Consider $$g^{-1}(A) = \{\omega \in \Omega : g(\omega) \in A\}$$.

Since $f = g$ a.e., there exists $E \in \mathcal{F}$ s.t. $\mu(E) = 0$, and if $F \subseteq E \implies F \in \mathcal{F}$.

Consider:

$$g^{-1}(A) = \{\omega \in \Omega : g(\omega) \in A\}$$

$$= \left( \{\omega \in \Omega : g(\omega) \in A\} \cap E \right) \cup \left( \{\omega \in \Omega : g(\omega) \in A\} \cap E^c \right)$$

---
Suppose $E \in \mathcal{F}$ s.t. $\mu(E) = 0$ and $g(x) = f(x) \forall x \in E^c$.

$$= \left( \{ \omega \in \Omega \mid g(\omega) \in A \} \cap E \right) \cup \left( \{ \omega \in \Omega \mid f(\omega) \in A \} \cap E^c \right)$$

$$= \left( \{ \omega \in \Omega \mid g(\omega) \in A \} \cap E \right) \cup \left( f^{-1}(A) \cap E^c \right)$$

Since $(\Omega, \mathcal{F}, \mu)$ is complete, $\{ \omega \in \Omega \mid g(\omega) \in A \} \cap E \in \mathcal{F}$

and by the measure $E^c \in \mathcal{F}$

$$\implies g^{-1}(A) \in \mathcal{F}$$

Remark:- If $(\Omega, \mathcal{F}, \mu)$ is not complete then the proposition may not hold.

Since $(\mathbb{R}, \mathcal{B}_{\mathbb{R}}, \lambda)$ this is not complete.

$\exists E \in \mathcal{B}_{\mathbb{R}}, \lambda(E) = 0$, but $\exists F \subseteq E$ s.t. $F \notin \mathcal{B}_{\mathbb{R}}$

But $\mathcal{L}$ is complete & so $F \in \mathcal{L}$. Consider $f = \chi_F$. Then $f = 0$ a.e.

But $f$ is not Borel measurable { Borel measurable $\to f^{-1}(F) \in \mathcal{B}_{\mathbb{R}}, F \in \mathcal{B}_{\mathbb{R}}$ }

in $f(\{1\}) = F \notin \mathcal{B}_{\mathbb{R}}$

# Definition (Lebesgue integrable)
Let $(\Omega, \mathcal{F}, \mu)$ be a measure space and $f: \Omega \to \mathbb{\bar{R}}$ be measurable. Then $f$ is said to be Lebesgue integrable (or just integrable) if

$$\int_{\Omega} f^+ d\mu < \infty \ \text{ \& } \int_{\Omega} f^- d\mu < \infty.$$

In this case, the Lebesgue integrable of $f$ is defined as

$$\int_{\Omega} f d\mu = \int_{\Omega} f^+ d\mu - \int_{\Omega} f^- d\mu.$$
## Proposition
If $f, g: \Omega \to \bar{\mathbb{R}}$ are integrable and $A, B \in \mathcal{F}$ are disjoint. Then $f$ is integrable on $A$, $f+g$ (when well-defined) and $|f|$ are integrable and

i) $$\int_{\Omega} (cf+g) d\mu = c\int_{\Omega} f d\mu + \int_{\Omega} g d\mu, \quad c \in \mathbb{R}$$

ii) $$\int_{A \cup B} f d\mu = \int_{A} f d\mu + \int_{B} f d\mu$$

iii) $f$ is finite a.e.

iv) $$|\int_{\Omega} f d\mu| \le \int_{\Omega} |f| d\mu$$

v) If $f \ge g$ then $\int_{\Omega} f d\mu \ge \int_{\Omega} g d\mu$

vi) If $f = g$ a.e. then $\int_{\Omega} f d\mu = \int_{\Omega} g d\mu$

vii) If $|h| \le f$ & $f \ge 0$ then $h$ is integrable

**Proof**
iii) If $f$ is not finite a.e. then at least one of the sets

$$A_1 = \{\omega \in \Omega : f(\omega) = \infty\} \text{ \& } A_2 = \{\omega \in \Omega : f(\omega) = -\infty\}$$

have +ve measure if $\mu(A_1) > 0$ then

$$f^+(\omega) > n \quad \forall n \quad \forall \omega \in A_1$$

$$\implies f^+ > n \chi_{A_1}$$

$$\implies \int_{\Omega} f^+ \ge \int_{\Omega} n \chi_{A_1} d\mu = n \mu(A_1), \forall n$$

$$\implies \int_{\Omega} f^+ d\mu = \infty \quad \rightarrow \leftarrow$$

vi) Given $f=g$ a.e. Then $\{\omega \mid f(\omega) \neq g(\omega)\} \subseteq E$, where $\mu(E)=0$

Then by ii)

$$\int_{\Omega} f d\mu = \int_{E^c} f d\mu + \int_{E} f d\mu = \int_{E^c} f d\mu + \int_{E} g d\mu = \int_{E^c} g d\mu = \int_{\Omega} g d\mu$$

---


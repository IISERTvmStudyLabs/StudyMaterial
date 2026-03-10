$\nu:\mathcal{A}\to[0,\infty]$ is a premeasure on an algebra on $\mathcal{A}$ over $\Omega$. Let $\mu$ be the [[Measure_Theory/Lecture 05#Carathéodory extension theorem|Carathedory extension]] of $\nu$ on $\mathcal{F}(\mathcal{A})$.
___
# Theorem

If $A \in \mathcal{F}(\mathcal{A})$ with $\mu(A) < \infty$, then given $\epsilon > 0$ there exists $E \in \mathcal{A}$ such that $\mu(A \Delta E) < \epsilon$.

---
**NOTE**
Take a measure $\mu$ on $\Omega$. Define 
$$
d(A, B) = \mu(A \Delta B), A, B \subseteq \Omega
$$
Then $d$ is a metric on $\mathcal{P}(\Omega)$. **Exercise:-Prove**

---
### Proof
Fix $\epsilon > 0$, we first get $\{E_i\} \subseteq \mathcal{A}$ such that $A \subseteq \bigcup_{i=1}^{\infty} E_i$ and 
___
**NOTE**
*Definition for [[Measure_Theory/Lecture 05#Outer measure|outer measure]]*

$B \subseteq \Omega$, 
$$
\nu^*(B) = \inf \{ \sum \nu(E_i), E_i \in \mathcal{A} ; B \subseteq \bigcup E_i \}
$$

----
$$
\nu(A) \leq \sum_{i=1}^{\infty} \nu(E_i) < \nu^*(A) + \epsilon/2 = \mu(A) + \epsilon/2 \tag{1}
$$
As $\mu(A) < \infty$, there exists $n_0$ such that 
$$
\sum_{i=n_0}^{\infty} \nu(E_i) < \epsilon/2\tag{2}
$$

Take 
$$
E := \bigcup_{i=1}^{n_0} E_i \in \mathcal{A}
$$
Now, 
$$
\mu(E \setminus A) \leq \mu(\bigcup_{i=1}^{\infty} E_i \setminus A) = \mu(\bigcup_{i=1}^{\infty} E_i) - \mu(A)
$$
$$
\leq \sum_{i=1}^{\infty} \mu(E_i) - \mu(A)
$$
$$
= \sum_{i=1}^{\infty} \nu(E_i) - \mu(A) < \epsilon/2 \text{ (by (1))}
$$

$$
\mu(A \setminus E) \leq \mu(\bigcup_{i=1}^{\infty} E_i \setminus E) = \mu(\bigcup_{i=1}^{\infty} E_i \setminus \bigcup_{i=1}^{n_0} E_i)
$$
$$
= \mu(\bigcup_{i=n_0+1}^{\infty} E_i)
$$
$$
\leq \sum_{i=n_0+1}^{\infty} \mu(E_i) = \sum_{i=n_0+1}^{\infty} \nu(E_i) < \epsilon/2 \tag{ by (2)}
$$

$$
\mu(A \Delta E) = \mu(A \setminus E) + \mu(E \setminus A) = \epsilon/2 + \epsilon/2 = \epsilon
$$
___
**Remark**:- $\mu(A \Delta E) < \epsilon$ is equivalent to
$$
\int_{\Omega} |\chi_E - \chi_A| \, d\mu < \epsilon
$$
---
**NOTE**
Can product of measure be a measure?

**Example** $l_1, l_2 \subseteq \mathbb{R}$, $\lambda(l_1) = a$, $\lambda(l_2) = b$
$$
\lambda_2 : \mathcal{B}(\mathbb{R}^2) \to [0, \infty]
$$
$$
\lambda_2(l_1 \times l_2) = ab = \lambda_1(l_1) \times \lambda_1(l_2)
$$

In general, 
$$
\overset{\nu_{1}}{\Omega_1} \times \overset{\nu_{2}}{\Omega_2} 
$$ 
and 
$$
\mu \otimes \nu(A \times B) = \mu(A) \nu(B)
$$

____
# Definition (Regular)
Let $\Omega$ be a topological space and $\mu : \mathcal{B}(\Omega) \to [0, \infty]$ is a measure. The measure $\mu$ is called regular if for every $E \in \mathcal{F}$ and $\epsilon > 0$ there exists an open set $G$ and closed set $F$ such that $F \subseteq E \subseteq G$ and $\mu(G \setminus F) < \epsilon$ and $\mathcal{F}$ is an $\sigma$-algebra containing $\mathcal{B}(\Omega)$.
____
## Proposition
If $\mu$ is regular then 
$$
\mathcal{F} \subseteq \mathcal{B}_{\mu} = \{A \cup E : A \in \mathcal{B}, E \subseteq E', \text{ where } E' \in \mathcal{B} \text{ and } \mu(E') = 0\}
$$

### Proof

Let $B \in \mathcal{F}$. By regularity, for every $n \in \mathbb{N}$, there exists open set $G_n$ and closed set $F_n$ such that
$$
F_n \subseteq B \subseteq G_n \text{ and } \mu(G_n \setminus F_n) < \epsilon
$$

Define
$$
F := \bigcup_{n=1}^{\infty} F_n, \quad G := \bigcap_{n=1}^{\infty} G_n
$$

Then
$$
F \subseteq B \subseteq G \text{ and } \mu(G \setminus F) = \mu(G_n \setminus F_n) < 1/n
$$

Hence,
$$
\mu(G \setminus F) = 0
$$

We can write,
$$
B = F \cup (B \setminus F)
$$

As $B \setminus F \subseteq G \setminus F$, $B \in \mathcal{B}_{\mu}$
___
# Theorem

Suppose $(\Omega, d)$ is a metric space and $\mu : \mathcal{B}(\Omega) \to [0, \infty]$ is a measure, then

1. For every $E \in \mathcal{B}$,
$$
\mu(E) = \inf \{ \mu(U) : E \subseteq U, U \text{ is open set} \}
$$
$$
\mu(E) = \sup \{ \mu(F) : F \subseteq E, F \text{ is closed} \}
$$

2. If $E \in \mathcal{B}_{\mu}$ then same holds for $E$.

3. If $\Omega$ is $\sigma$-compact i.e. there exists countably many compact sets $K_n \subseteq \Omega$ such that $\Omega = \bigcup_n K_n$
Then 
$$
\mu(E) = \sup \{ \mu(K) : K \subseteq E, K \text{ compact} \}
$$


**Remark:**

1. Any simple function is measurable.
    
2. $f$ is simple $\implies$ range of $f$ is finite & $f$ is measurable.
    

If range $(f) = \{d_1, \dots, d_k\}$ then we take $E_i = f^{-1}(\{d_i\})$ & $f = \sum_{i=1}^{k} d_{i} \chi_{E_i}$.

---

# Definition 
Let $(\Omega, \mathcal{F}, \mu)$ be a non-negative measure space & $f$ is a non-negative simple fn with representation $f = \sum_{i=1}^{n} c_i \chi_{E_i}$.

Then the integral of $f$ wrt $\mu$ is defined as

$$\int_{\Omega} f \, d\mu = \sum_{i=1}^{n} c_i \mu(E_i)$$

---

**Well definedness:** Suppose $f = \sum_{i=1}^{m} c_i \chi_{E_i} = \sum_{j=1}^{n} d_j \chi_{F_j}$. Then $\bigcup_{i=1}^{m} E_i = \bigcup_{j=1}^{n} F_j$.

Need to prove that $\sum_{i=1}^{m} c_i \mu(E_i) = \sum_{j=1}^{n} d_j \mu(F_j)$.

If $E_i \cap F_j \neq \emptyset$ then $c_i = d_j$. We write $E_i = \bigcup_{j=1}^{n} (E_i \cap F_j) \implies$

$$\mu(E_i) = \sum_{j=1}^{n} \mu(E_i \cap F_j)$$

$$\implies \sum_{i=1}^{m} c_i \mu(E_i) = \sum_{i=1}^{m} c_i \sum_{j=1}^{n} \mu(E_i \cap F_j)$$

$$= \sum_{i=1}^{m} \sum_{j=1}^{n} d_j \mu(E_i \cap F_j) = \sum_{j=1}^{n} d_j \sum_{i=1}^{m} \mu(E_i \cap F_j)$$

$$= \sum_{j=1}^{n} d_j \mu(F_j)$$

---

**Proposition**: Let $f$ and $g$ be two measurable functions on $(\Omega, \mathcal{F}, \mu)$. Then

i) $\int_{\Omega} (cf) \, d\mu = c \int_{\Omega} f \, d\mu, \forall c \ge 0$

ii) $\int_{\Omega} (f + g) \, d\mu = \int_{\Omega} f \, d\mu + \int_{\Omega} g \, d\mu$

iii) If $f \le g$ then $\int_{\Omega} f \, d\mu \le \int_{\Omega} g \, d\mu$

---

**Proof of ii)**: $f = \sum_{i=1}^{m} c_i \chi_{E_i}$, $g = \sum_{j=1}^{n} d_j \chi_{F_j}$

We write, $E_i = \bigcup_{j=1}^{n} E_i \cap F_j \implies \chi_{E_i} = \sum_{j=1}^{n} \chi_{E_i \cap F_j}$

**Note**: $\chi_{A \cup B} = \chi_A + \chi_B$ where $A \cap B = \emptyset$

Similarly, $\chi_{F_j} = \sum_{i=1}^{m} \chi_{F_j \cap E_i}$

$$
\begin{align*}
f 
&= \sum_{i=1}^{m} c_i \sum_{j=1}^{n} \chi_{E_i \cap F_j}, 
\\
g 
&= \sum_{j=1}^{n} d_j \sum_{i=1}^{m} \chi_{F_j \cap E_i},
\\[1em]
f + g
&= \sum_{i=1}^{m} \sum_{j=1}^{n} (c_i + d_j)\,\chi_{E_i \cap F_j}
\\
&\implies \int_{\Omega} (f + g)\, d\mu
= \sum_{i=1}^{m} \sum_{j=1}^{n} (c_i + d_j)\,\mu(E_i \cap F_j)
\\
&= \sum_{i=1}^{m} \sum_{j=1}^{n} c_i\,\mu(E_i \cap F_j)
  + \sum_{j=1}^{n} \sum_{i=1}^{m} d_j\,\mu(E_i \cap F_j)
\\
&= \sum_{i=1}^{m} c_i\,\mu(E_i)
  + \sum_{j=1}^{n} d_j\,\mu(F_j).
\end{align*}
$$

**Note**: $\sum_j \mu(E_i \cap F_j) = \mu(E_i)$, $\sum_i \mu(E_i \cap F_j) = \mu(F_j)$

---

iii) $f \le g$

Since $f, g$ are simple then $g - f$ is simple.

With standard representation:

- $g + f = \sum_{i=1}^{m} \sum_{j=1}^{n} (c_i + d_j) \chi_{E_i \cap F_j}$
    
- $g - f = \sum_{i=1}^{m} \sum_{j=1}^{n} (d_j - c_i) \chi_{E_i \cap F_j}$
    

$$\int_{\Omega} g \, d\mu = \underbrace{\int_{\Omega} (g - f) \, d\mu}_{\ge 0} + \int_{\Omega} f \, d\mu \ge \int_{\Omega} f \, d\mu$$

Using (iii), we can write $\int_{\Omega} f \, d\mu \le \int_{\Omega} g \, d\mu$.

---

$$
\int_{\Omega} f\,d\mu
= \sup\left\{
\int_{\Omega}\varphi\,d\mu
\;\middle|\;
\varphi\text{ is nonnegative, measurable, and }0\le\varphi\le f
\right\}
$$


where $f$ is a non-negative simple fn.

$f$ is a non-negative measurable fn,

$$\sup \left\{ \int_{\Omega} \phi \, d\mu \mid 0 \le \phi \le f, \phi \text{ is simple} \right\}$$

**Note:** $f^{-1}([0, 1]) \in \mathcal{F}$, $m = \inf_{\omega \in f^{-1}([0, 1])} \{ f(\omega) \}$, $m \cdot \chi_{f^{-1}([0, 1])} \le f$

$\implies \{ f_n \}$ of simple fn $f_n \uparrow f$
$$
\left\{\int_{\Omega} \phi d\mu \;; \phi \text{ is simple}\right\}
$$
---


# Definition 
Let $(\Omega, \mathcal{F}, \mu)$ be a measurable space. For a non-negative measurable function $f: \Omega \to [0, \infty]$ define

$$\int_{\Omega} f d\mu = \sup \left\{ \int_{\Omega} \phi d\mu : 0 \le \phi \le f, \phi : \Omega \to [0, \infty) \text{ is simple} \right\}$$

**Remark**: If $\phi$ takes values $c_1, \dots, c_k$ then we denote

$$E_i = \phi^{-1}(\{c_i\})$$

$$\phi = \sum_{i=1}^{k} c_i \chi_{E_i}$$

# Theorem
Let $(\Omega, \mathcal{F})$ be a measurable space. $f: \Omega \to [0, \infty]$ be a measurable function. Then $\exists$ a sequence $\{f_n\}$ of non-negative simple functions such that

1. $f_n(\omega) \to f(\omega), \forall \omega \in \Omega$
    
2. $f_n(\omega) \le f_{n+1}(\omega), \forall \omega \in \Omega$
    
3. If $f$ is bounded then, $f_n \to f$ uniformly.
    

**Proof**: i) $[0, \infty] = \bigcup_{k=0}^{n 2^n - 1} \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right) \cup [n, \infty]$

Fix $n \in \mathbb{N}$

$$\implies \Omega = f^{-1}([0, \infty]) = \bigcup_{k=0}^{n 2^n - 1} f^{-1} \left( \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right) \right) \cup f^{-1}([n, \infty])$$

Define $f_n = \sum_{k=0}^{n 2^n - 1} \frac{k}{2^n} \chi_{f^{-1} \left( \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right) \right)} + n \chi_{f^{-1}([n, \infty])}$

Observe that $f_n(\omega) \le f(\omega), \forall \omega \in \Omega$

Fix $\omega \in \Omega$, If $f(\omega) = \infty$ then $\omega \in f^{-1}([n, \infty]) \, \forall n$. Then $f_n(\omega) = n \, \forall n$. Therefore $f_n(\omega) \to \infty = f(\omega)$ as $n \to \infty$

---


---

If $f(\omega) < \infty$. Then there exist $n_0 \in \mathbb{N} \ni f(\omega) < n_0$

we fix $n \ge n_0$, Then $\exists k \in \mathbb{N}$ st $0 \le k \le n 2^n - 1$

$$\implies \frac{k}{2^n} \le f(\omega) < \frac{k+1}{2^n}$$

$$\implies k \le 2^n f(\omega) < k + 1$$

$$\implies k = \lfloor 2^n f(\omega) \rfloor$$

$$\implies f_n(\omega) = \frac{\lfloor 2^n f(\omega) \rfloor}{2^n} > \frac{2^n f(\omega) - 1}{2^n}$$

$$\implies f_n(\omega) > f(\omega) - \frac{1}{2^n} \implies 0 \le f(\omega) - f_n(\omega) < \frac{1}{2^n}$$

$$\implies f_n(\omega) \to f(\omega) \text{ as } n \to \infty$$

iii) If $f$ is bounded then $f(\omega) \le n_0$ for all $\omega \in \Omega$ for some $n_0 \in \mathbb{N}$

Then

$$0 \le f(\omega) - f_n(\omega) < \frac{1}{2^n} \quad \forall n \ge n_0, \forall \omega$$

$$\implies \sup_{\omega \in \Omega} (f(\omega) - f_n(\omega)) \to 0 \text{ as } n \to \infty$$

ii) Fix $\omega \in \Omega$. We need to prove $f_n(\omega)$ [is non-decreasing]

**Case I**: Assume $f(\omega) \ge n+1$ then $f_{n+1}(\omega) = n+1$ and $n+1 > n = f_n(\omega)$.

**Case II**: Assume $n \le f(\omega) < n+1$. Then $f$

$$f(\omega) \in \left[ \frac{k}{2^{n+1}}, \frac{k+1}{2^{n+1}} \right) \text{ for } k \in \{n 2^{n+1}, \dots, (n+1)2^{n+1} - 1\}$$

---


---

$$f_{n+1}(\omega) = \frac{k}{2^{n+1}}$$

$$\frac{k}{2^{n+1}} \le f(\omega) < \frac{k+1}{2^{n+1}} \implies k = \lfloor 2^{n+1} f(\omega) \rfloor$$

$$\implies f_{n+1}(\omega) = \frac{\lfloor 2^{n+1} f(\omega) \rfloor}{2^{n+1}} \ge \frac{2^{n+1} \cdot n}{2^{n+1}} = n = f_n(\omega)$$

**Case B**: Assume $f(\omega) < n$. $\exists$ $0 \le k \le 2^n - 1$ s.t.

$$f(\omega) \in \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right)$$

$$\implies f_n(\omega) = \frac{k}{2^n}$$

$$\omega \in \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right) = \left[ \frac{2k}{2^{n+1}}, \frac{2k+2}{2^{n+1}} \right) = \left[ \frac{2k}{2^{n+1}}, \frac{2k+1}{2^{n+1}} \right) \cup \left[ \frac{2k+1}{2^{n+1}}, \frac{2k+2}{2^{n+1}} \right)$$

If $\omega \in \left[ \frac{2k}{2^{n+1}}, \frac{2k+1}{2^{n+1}} \right)$, $f_{n+1}(\omega) = \frac{2k}{2^{n+1}} = \frac{k}{2^n} = f_n(\omega)$

If $\omega \in \left[ \frac{2k+1}{2^{n+1}}, \frac{2k+2}{2^{n+1}} \right)$, $\implies f_{n+1}(\omega) = \frac{2k+1}{2^{n+1}} = \frac{k}{2^n} + \frac{1}{2^{n+1}} > f_n(\omega) \quad \square$

---


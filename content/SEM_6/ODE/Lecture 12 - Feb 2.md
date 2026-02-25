22/2/26

## Recap: Variation of Parameters

- $y'' + P y' + Q y = R$
- $a y'' + a_1 y' + a_2 y = b$
    - $v_1 = \int \frac{-b \phi_2 \, dx}{a \phi_0}$
    - $v_2 = \int \frac{b \phi_1 \, dx}{a \phi_0}$
- $a_0 y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = b$
    - $v_k = \int_{x_0}^x \frac{W_k(s) b(s)}{a_0 W(s)} \, ds$

---

- $y'' + P y' + Q y = R$, where $\phi_1, \phi_2$ are solutions of the homogeneous differential equation (DE).
    - $W(\phi_1, \phi_2)(x) = W(\phi_1, \phi_2)(x_0) e^{-\int P \, dx}$
- $a_0 y'' + a_1 y' + a_2 y = 0$
    - $W(\phi_1, \phi_2)(x) = W(\phi_1, \phi_2)(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} \, ds}$

---

## Theorem

Let $\phi_1, \phi_2, \dots, \phi_n$ be $n$ linearly independent (LI) solutions of $L(y) = a_0(x) y^{(n)} + \dots + a_n(x) y = 0$, where $a_0(x) \neq 0, \forall x \in I$ and $a_0, \dots, a_n$ are continuous functions of $x$ on $I$, and let $x_0 \in I$.

Then,

$$
W(\phi_1, \phi_2, \dots, \phi_n)(x) = W(\phi_1, \phi_2, \dots, \phi_n)(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} \, ds}
$$

### **Proof**

We have,

$$
W = 
\begin{vmatrix}
\phi_1 & \phi_2 & \dots & \phi_n \\
\phi_1' & \phi_2' & \dots & \phi_n' \\
\vdots & \vdots & \ddots & \vdots \\
\phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)}
\end{

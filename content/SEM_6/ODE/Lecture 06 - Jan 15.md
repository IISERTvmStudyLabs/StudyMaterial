## Riccati Equation (Continued)

$$y' = P(x) \cdot y^2 + q(x) \cdot y + r(x) \longrightarrow \text{(I)}$$

$y = y_1 + z^{-1}$ will reduce the eqn to a linear eqn in $z$.

$$\Rightarrow y = y_1 + z^{-1}$$

$$y' = y_1' - \frac{z'}{z^2}$$

Then (I) → $y_1' - \frac{z'}{z^2} = P(y_1 + z^{-1})^2 + q(y_1 + z^{-1}) + r$

$$= (py_1^2 + 2y_1y + r) + 2py_1z^{-1} + pz^{-2} + qy_1 + qz^{-1}$$

$$= y_1' + z^{-2}(2py_1z + p + \frac{z}{z})$$

$$\Rightarrow z' = py_z + py' + p$$

---

## Second Order Linear Homogeneous Equation

$$L(y) = y'' + a_1y' + a_2y = 0$$

### Theorem

Let $\phi_1, \phi_2, \ldots, \phi_k$ be a set of functions defined on an interval $I$, and let $\phi_1, \phi_2, \ldots$ be **linearly independent** solutions on $I$. Then, the **Wronskian**:

$$W(\phi_1, \phi_2, \ldots, \phi_k) \neq 0 \text{ on } I$$

### Proof

Given, $\phi_1, \phi_2, \ldots, \phi_k$ are LD.

⟹ $\exists c_1, c_2, \ldots, c_k$ (not all zeros) s.t.

$$c_1\phi_1 + c_2\phi_2 + \ldots + c_k\phi_k = 0$$

Since $\phi_i$ are differentiable, we have

$$c_1\phi_1' + c_2\phi_2' + \ldots + c_k\phi_k' = 0$$
$$c_1\phi_1'' + c_2\phi_2'' + \ldots + c_k\phi_k'' = 0$$

For any $x = x_0, \phi_i(x_0), \phi_i'(x_0), \ldots, \phi_i^{(k-1)}(x_0)$, we must have all zeros before $c_i$.

This gives matrix:

$$\begin{vmatrix}
\phi_1 & \phi_2 & \ldots & \phi_k \\
\phi_1' & \phi_2' & \ldots & \phi_k' \\
\vdots & \vdots & & \vdots \\
\phi_1^{(k-1)} & \phi_2^{(k-1)} & \ldots & \phi_k^{(k-1)}
\end{vmatrix} = W(\phi_1, \ldots, \phi_k) = 0$$

---

### Proof (First Order Case)

Suppose we have a first order DE:

$$\Rightarrow y' + aq = 0, \text{ then we know that } ce^{-ax} \text{ is a soln.} \text{ where } c \text{ is the soln of } rya = 0$$

We know that if we differ. $e^{rx}$ any times, we get only a const. mult. of $e^{rx}$. This gives an indication that $e^{rx}$ could be a soln. of $L(y) = 0$ for some $r$.

Consider,

$$L(ce^{rx}) = (c_2^2 + a_1r + a_2) \cdot e^{rx} = P(r) \cdot e^{rx}$$

$e^{rx}$ could be a soln of $y' + a_1y + a_2y = 0$ ⟺ $P(r) = 0$.

By Fundam. theorem, $P(r)$ should have two roots, say $r_1, r_2$.

**Case 1:** Suppose $r_1 \neq r_2$

Then $e^{r_1y}$ & $e^{r_2x}$ are soln of $L(y) = 0$.

**Case 2:** Suppose $r_1 = r_2 = r$

⟹ $P(r) = 0, P'(r) = 0$

Consider, $\frac{\partial}{\partial t}L(e^{tx}) = L\left[\frac{\partial}{\partial t}(e^{tx})\right] = L(xe^{tx})$

$$L(e^{rx}) = P(r) \cdot e^{rx}$$

⟹ $P(r) \cdot e^{rx} + P(r) \cdot xe^{rx} = L(cxe^{rx})$

Since $P'(r) = P(r) = 0$: $L(cxe^{rx}) = 0$

$$\therefore xe^{rx} \text{ is soln of eqn.}$$

---

## Theorem

If $x, r_1$ are distinct roots of $P(r)$, then the funcs:

$$\phi_1(x) = e^{r_1x}, \quad \phi_2(x) = e^{r_2x}$$

and gen. soln is $\phi = c_1e^{r_1x} + c_2e^{r_2x}$

If $x$ is repeated soln of $P(r)$, then

$$\phi_1(x) = e^{rx}, \quad \phi_2(x) = xe^{rx}$$

and gen. soln is $\phi = (c_1 + c_2x)e^{rx}$


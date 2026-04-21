## First Order Linear DE (Continued)

$$
\phi(x) = e^{-A(x)} \int_{x_0}^x e^{A(t)} Q(t) \, dt
$$

$$
\phi_1 = e^{-Ax}
$$

$$
\phi + c\phi_1 \text{ is the solution of } y' + P(x)y = Q(x)
$$

### Proof

$$
y' + P(x) \cdot y = Q(x) \longrightarrow \text{(I)}
$$

Let $\phi$ be the solution. We are interested in finding a $u$ such that $(u\phi)'$ is integrable,

$$
(u\phi)' = u(\phi' + p\phi)
$$

Given that $P(x)$ is a function, where $A' = P$,

$$
\Rightarrow A = \int P(x) \, dx
$$

Let $u = e^A$

$$
(u\phi)' = (e^A\phi)'
$$

$$
\Rightarrow (e^A\phi)' = e^A(\phi' + P\phi)
$$
$$
= e^A(\phi' + P\phi)
$$
$$
= e^A \cdot Q(x)
$$

$$
\Rightarrow \phi = e^{-A} \int e^{A(t)} Q(t) \, dt + ce^{-A}
$$

If $Q = 0$, then $\phi_1 = ce^{-A}$ is a solution of $y' + P(x)y = 0$.

Hence, the general solution is: particular solution + homogeneous solution.

$$
∴ \text{φ is a soln. of homog eq. + particular soln.}
$$

---

## Problems

Find all the solutions:

**1.** $y' + 3y = 3$

**2.** $y' - \cot(x) \cdot y = \tan x \cdot \cos x$

**3.** $y' + e^x y = 3e^{-x}$

### Solution

**Problem 2:** $y' - \cot(x) \cdot y = \tan x \cdot \cos x$

P = $\cot x$, Q = $\sin x \cdot \cos x$

$$
A = \int \cot x \, dx = \ln \sin x
$$

$$
\text{Integrating factor} = e^{\int -\cot x\,dx} = e^{-\ln(\sin x)} = \csc x
$$

$$
\Rightarrow \left(\frac{y}{\sin x}\right)' = 1
$$

$$
\Rightarrow \frac{y}{\sin x} = x + c
$$

$$
\Rightarrow y = (x+c)\sin x
$$

**Problem 3:** $y' + e^x y = 3e^{-x}$

P = $e^x$, Q = $3e^{-x}$

$$
\text{Integrating factor} = e^{\int e^x\,dx} = e^{e^x}
$$

$$
= y\,e^{e^x} = \int 3e^{-x}e^{e^x}\,dx + c
$$

$$
= \int 3\frac{e^u}{u^2}\,du + c, \quad (u=e^x)
$$

$$
y = e^{-e^x}\left(\int 3e^{-x}e^{e^x}\,dx + c\right)
$$

---

## Bernoulli Equation

$$
y' = P(x) \cdot y^2 + q(x) \cdot y + r(x)
$$

$$
y = z_1 + z^{-1} \text{ will transform the eqn into 2.}
$$

**(⊕)** $\frac{1}{1-n} \cdot \frac{dv}{dx} + Pv = Q$

$$
\frac{dv}{dx} + (1-n)P \cdot v = (1-n) \cdot Q
$$

$$
\Rightarrow \frac{dv}{dx} + P_1v = Q_1
$$

---

## Problem

Solve, $\frac{dy}{dx} + y = xy^3$

### Solution

$$
v = y^{1-3} = y^{-2}
$$

$$
\therefore \frac{dv}{dx} = -2y^{-3}\frac{dy}{dx}
$$

$$
\therefore \frac{dv}{dx} - 2v = -2x
$$

---

## Riccati Equation

$$
y' = P(x) \cdot y^2 + q(x) \cdot y + r(x)
$$

$$
y = z_1 + z^{-1} \text{ will transform the eqn into 2.}
$$


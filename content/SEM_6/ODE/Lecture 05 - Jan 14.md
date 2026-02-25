## First Order Linear DE (Continued)

$$\phi(x) = e^{-A(x)} \int_{x_0}^x e^{A(t)} Q(t) \, dt$$

$$\phi_1 = e^{-Ax}$$

$\phi + c\phi_1$ is the soln of $y' + P(x)y = Q(x)$

### Proof

$$y' + P(x) \cdot y = Q(x) \longrightarrow \text{(I)}$$

Let $\phi$ be the solution. We are interested in finding a $u$ such that $(u\phi)'$ is integrable,

$$(u\phi)' = u(\phi' + p\phi)$$

Given that $P(x)$ is a function, where $A' = P$,

$$\Rightarrow A = \int P(x) \, dx$$

Let $u = e^A$

$$(u\phi)' = (e^A\phi)'$$

$$\Rightarrow (e^A)' = e^A \cdot u'$$
$$= e^A(\phi' + p\phi)$$
$$= e^A \cdot Q(n)$$

$$\Rightarrow \phi = e^{-A} \int e^{A(t)} Q(t) \, dt + ce^A$$

If $Q = 0$, then $\phi_1 = ce^A$ is the soln of $y' + p_1y = 0$.

If $c \neq 0$, then $\phi_1 = A \cdot \phi_1$ is the particular soln of (I).

$$∴ \text{φ is a soln. of homog eq. + particular soln.}$$

---

## Problems

Find all the solutions:

**1.** $y' + 3y = 3$

**2.** $y' - \cot(x) \cdot y = \tan x \cdot \cos x$

**3.** $y' + e^x y = 3e^{-x}$

### Solution

**Problem 2:** $y' - \cot(x) \cdot y = \tan x \cdot \cos x$

P = $\cot x$, Q = $\sin x \cdot \cos x$

$A = \int \cot x \, dx = \ln \sin x$

$Ⓐ: \phi = e^x \int e^x Q(x) \, dx + ce^x$

$= e^x \int 3e^{-x} \, dx + ce^x$

$= e^x[-3e^{-x}] + ce^x$

$= -3 + ce^x$

**Problem 3:** $y' + e^x y = 3e^{-x}$

P = $e^x$, Q = $3e^{-x}$

$A: \phi = e^x \int e^x Q(x) \, dx + ce^x$

$= e^x \int 3e^{-x} \, dx + ce^x$

$= e^x \cdot \frac{3e^{-x}}{-1} + ce^x$

$= -3 + ce^x$

---

## Bernoulli Equation

$$y' = P(x) \cdot y^2 + q(x) \cdot y + r(x)$$

$$y = z_1 + z^{-1} \text{ will transform the eqn into 2.}$$

**(⊕)** $\frac{1}{1-n} \cdot \frac{dv}{dx} + Pv = Q$

$$\frac{dv}{dx} + (1-n)P \cdot v = (1-n) \cdot Q$$

$$\Rightarrow \frac{dv}{dx} + P_1v = Q_1$$

---

## Problem

Solve, $\frac{dy}{dx} + y = xy^3$

### Solution

$$v = y^{1-3} = y^{-2}$$

$$\therefore \frac{1}{2-1} \cdot \frac{dv}{dx} = y^{-n} \cdot \frac{dy}{dx} = -\frac{1}{2} \cdot \frac{dy}{dx}$$

$$\therefore \frac{dv}{dx} - 2v = 2x$$

---

## Riccati Equation

$$y' = P(x) \cdot y^2 + q(x) \cdot y + r(x)$$

$$y = z_1 + z^{-1} \text{ will transform the eqn into 2.}$$


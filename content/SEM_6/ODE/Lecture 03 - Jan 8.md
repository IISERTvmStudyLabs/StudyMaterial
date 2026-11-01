## Solve

**1.** $(3x^2 + 4xy) \, dx + (2x^2 + 2y) \, dy = 0$

**2.** $(3y + 4xy^2) \, dx + (2x + 3x^2y) \, dy = 0$

---

### Problem 1

$M \, dx + N \, dy = 0$

$\frac{\partial M}{\partial y} = 4x, \quad \frac{\partial N}{\partial x} = 4x$

$\frac{\partial F}{\partial x} = M, \quad \frac{\partial F}{\partial y} = N$

$F_M = 2x^3 + 2x^2y$

$F_N = 2x^2y + y^2$

$\therefore F = x^3 + 2x^2y + y^2$

---

### Problem 2

$\frac{\partial M}{\partial y} = 3 + 8xy$

$\frac{\partial N}{\partial x} = 2 + 6xy$

**IF:** $e^{\int P(x) \, dx}$

$\frac{dy}{dx} = \frac{3y + 4xy^2}{2x + 3x^2y} = \frac{3y + 4xy^2}{x(2 + 3xy)}$

$\frac{\partial(M \cdot f(x,y))}{\partial y} = \frac{\partial(N \cdot f(x,y))}{\partial x}$

$M \cdot \frac{\partial f}{\partial y} + f \cdot \frac{\partial M}{\partial y} = N \cdot \frac{\partial f}{\partial x} + f \cdot \frac{\partial N}{\partial x}$

$(3y + 4xy^2) \cdot \frac{\partial f}{\partial y} + f(3 + 8xy) =$

$(2x + 3x^2y) \cdot \frac{\partial f}{\partial x} + f(2 + 6xy)$

$\therefore f = x^2y$

---

## Homogeneous Equations

If $M \, dx + N \, dy = 0$ is a homog. DE, then change of var. as $y = vx$ transform the DE into separable eq. in the var. $v \, dx$.

### Proof

We have $\frac{dy}{dx} = f(x,y)$.

Given that it is a homog eq. and hence we have,

$$\frac{dy}{dx} = g\left(\frac{y}{x}\right)$$

$y = vx$

$$\frac{dy}{dx} = v + x \frac{dv}{dx}$$

$$\therefore \frac{dy}{dx} = g\left(\frac{y}{x}\right)$$

$$v + x \frac{dv}{dx} = g(v)$$

$$x \frac{dv}{dx} = g(v) - v$$

$$\frac{dv}{g(v) - v} = \frac{1}{x} \, dx$$

Integrate to get soln.

### Problem

Solve, $(x^2 - 2y^2) \, dx + (2xy) \, dy = 0$

$$\frac{dy}{dx} = \frac{2y^2 - x^2}{2xy} = \frac{2v^2 - 1}{2v}$$

$$x \frac{dv}{dx} = \frac{2v^2 - 1}{2v} - v$$

$$\Rightarrow y^2 - x^2 = cx^3$$

---

## Initial and Boundary Value Problems

$$F(x, y, y', \ldots, y^n) = 0$$

**(I)** $y^n = F(x, y, y', \ldots, y^{(n-1)})$

$$y(x_0) = y_0$$
$$y'(x_0) = y_1$$
$$\vdots$$
$$y^{(n-1)}(x_0) = y_{n-1}$$

When $y_0, \ldots, y_n$ are constants of $x_0$ is the initial point.

1. Existence
2. Uniqueness   } well-posed problem.
3. Stability

Even if one not satisfied } ill-posed problem.

---

## Lemma

If $f: \mathbb{R}^n \to \mathbb{R}$ is a linear func., then

$$F(x) = a_1x_1 + \ldots + a_nx_n$$

where $a_0, \ldots, a_n$ are constants of $x = (x_1, x_2, \ldots, x_n) \in \mathbb{R}^n$

### Proof

Let $\{e_i\}_{i=1}^n$ be the basis of $\mathbb{R}^n$. Then, any $x \in \mathbb{R}^n$ can be written as,

$$x = x_1e_1 + x_2e_2 + \ldots + x_ne_n$$

$$F(x) = F(e_1x_1 + \ldots + x_ne_n)$$
$$= x_1F(e_1) + \ldots + x_nF(e_n)$$
$$= x_1a_1 + \ldots + x_na_n$$

---

## Theorem

If $F(x, y, y', y'', \ldots, y^n) = 0$, $x \in I$ is a homog. lin. eq$^n$ of order $n$ defined on $I$, then it can be written as

$$F(x, y, \ldots, y^n) = a_0(x) \cdot y^n + a_1(x) \cdot y^{(n-1)} + \ldots + a_ny = 0$$

for each $x \in I$ where $a_0, a_1, \ldots, a_n$ are some func. defined on $I$.


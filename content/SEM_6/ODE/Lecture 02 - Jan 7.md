## Previously Learnt

- Math modelling
- Formulas for DE
- Solns for DE

---

$$F(x, y, y') = 0$$
$$y = \phi(x)$$
$$F(x, \phi, \phi') = 0$$

$$\frac{dy}{dx} = 2x \qquad \frac{d^2y}{dx^2} = 0$$

$$y = x^2 + c \qquad \frac{dy}{dx} = m$$

$$y = mx + c$$

$$F(x, y, y', \ldots, y^{(n)}) = 0$$

**Soln. contains $n$ arbitrary constants.**
- → General soln. of DE.
- → When assign particular values for arb const. we get particular soln.

$$F: \mathbb{R}^{n+1} \longrightarrow \mathbb{R}$$
$$F: I \times \mathbb{R}^{n+1} \longrightarrow \mathbb{R} \text{ (any interval)}$$

---

## Classification of DE

- Variable separation
- Exact equation
- Homogeneous equation
- Any other reduces to the above.

## Separable Equation

$$\frac{dy}{dx} = f(x,y) = g(x) \cdot h(y)$$

$$\frac{dy}{h(y)} = g(x) \cdot dx$$

Soln is obtained by integration.

$$F(x, y, y') = 0$$
$$\longrightarrow M(x,y) \, dx + N(x,y) \, dy = 0$$
$$f(x) \cdot g(y) \, dx + F(x) \cdot G(y) \, dy = 0$$

$$\frac{f(x)}{F(x)} \, dx = \frac{G(y)}{g(y)} \, dy = 0$$

Integrate to get soln.

### Problems

**1.** $y' = (x^2-4)(3y+2)$

$$\frac{dy}{3y+2} = (x^2-4) \, dx$$

$$\frac{1}{3} \ln(3y+2) = \frac{x^3}{3} - 4x$$

$$y = \frac{1}{3} e^{x^3-12x} - \frac{2}{3}$$

**2.** $(x-4)y' \, dx - x^3(y-2) \, dy = 0$

$$dx \cdot \frac{(x-4)}{x^3} = dy \cdot \frac{y^3-3}{y^3}$$

$$-\frac{1}{x} + \frac{2}{x^2} = -\frac{1}{y} + \frac{1}{y^2}$$

$$y^3(2-x) = x^3(1-y)$$

---

## Exact DE

$$F(x, y, y') = 0$$
$$M \, dx + N \, dy = 0$$

This is said to be an **exact DE** if $\exists$ a func. $F(x,y)$ s.t.

$$dF = M \, dx + N \, dy = 0$$

$$dF = \frac{\partial F}{\partial x} \, dx + \frac{\partial F}{\partial y} \, dy$$

So, $M = \frac{\partial F}{\partial x}$, $N = \frac{\partial F}{\partial y}$

**So if DE is exact,** $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.

**Converse:**

→ Suppose the DE satisfies, $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.

Should show DE is exact.

∞ T.P.T $\exists$ F s.t. $\frac{\partial F}{\partial x} = M$, $\frac{\partial F}{\partial y} = N$.

→ Assume $\exists$ a func. F s.t. $\frac{\partial F}{\partial x} = M$.

i.e.,

$$F = \int M \, dx + \phi(y)$$

$$\frac{\partial F}{\partial y} = \frac{\partial}{\partial y}\left[\int M \, dx\right] + \frac{\partial \phi}{\partial y}(y)$$

So,

$$N = \frac{\partial F}{\partial y}$$

$$\frac{\partial \phi}{\partial y}(y) = N - \frac{\partial}{\partial y}\left[\int M \, dx\right]$$

$$\phi(y) = \int\left\{N - \frac{\partial}{\partial y}\left[\int M \, dx\right]\right\} dy$$

Since $\phi(y)$ a func. of $y$, $\frac{d\phi}{dy}$ is indep. of $x$.

$$\therefore \frac{\partial}{\partial x}\left[N - \frac{\partial}{\partial y}\left[\int M \, dx\right]\right] = 0$$

$$\therefore \frac{\partial N}{\partial x} = \frac{\partial M}{\partial y} = 0$$

Therefore,

$$F = \int M \, dx + \int\left\{N - \frac{\partial}{\partial y}\left[\int M \, dx\right]\right\} dy$$

→ The soln. of exact DE $M \, dx + N \, dy = 0$ is $F(x,y) = c$.

→ Reduce a non-exact DE into exact by mult. Int. factor (IF).

---

## Theorem

Consider the DE,

$$M \, dx + N \, dy = 0,$$

where $M$, $N$ are part. derivs of all points $(x,y)$ in a rectangular domain $D$.

As if the DE is exact in $D$, then

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}, \quad \forall \, (x,y) \in D$$

& conversely, if

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}, \quad \forall \, (x,y) \in D,$$

then the DE is exact.

### Proof

Suppose the DE is exact.

$\exists$ $F(x,y)$ s.t.

$$\frac{\partial F}{\partial x} = M, \quad \frac{\partial F}{\partial y} = N$$

$$\frac{\partial M}{\partial y} = \frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y}$$

$$\frac{\partial M}{\partial y} = \frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y}$$

---

## Problems

**1.** $y^2 \, dx + 2xy \, dy = 0$ (Verify if exact)

**2.** $y \, dx + 2x \, dy = 0$

**3.** $\underbrace{2x \sin y + y^3 e^x}_{M} \, dx + \underbrace{x^2 \cos y + 2y^2 e^x}_{N} \, dy = 0$


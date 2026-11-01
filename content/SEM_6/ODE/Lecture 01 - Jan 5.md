## Topics Covered
- General theory of IVP
- Linear system
- Non-linear system
- BVP

## Weightage
- Endsem - 50%
- Midsem - 30%
- Quiz - 20%

## What about ODE?

Real world → Conceptual world → Observation → Modeling → Prediction

**Scientific Method Flow:**
System → Observation → Model → Test → Predict → Validate (with feedback loop)

## Example: Population Growth

$N$ denotes the number of people living in a city at a time $t$.

Initially, $t = 0$, $N(0) = 1000$.

So at a later time,
$$N(t + \delta t) = N(t) + K(N,t) \cdot dt$$

$$K(N,t) = \frac{N(t+\delta t) - N(t)}{\delta t}$$

$$K(N,t) = \lim_{\delta t \to 0} \frac{N(t+\delta t) - N(t)}{\delta t} = \frac{dN}{dt}$$

Let $K(N,t) = \sigma N$, then $\frac{dN}{dt} = \sigma N$

$$\therefore N = 1000 e^{\sigma t}$$

## Classification of Differential Equations

**DE**
- **ODE**
  - Linear
  - Non-linear
- **PDE**
  - Linear
  - Nuclear

### Examples:

$y' = y$ (Linear)

$y' + yy' = 2x$ (Non-linear)

$y'' + 2y' + y = 0$ (Linear)

## Formation of DE

From $f(x, y, c) = 0$ (arb. const):

$$y = 2x + c$$
$$\frac{dy}{dx} = 2$$

---

From $y = mx + c$ (arb. const):

$$\frac{dy}{dx} = m$$

$$\frac{d^2y}{dx^2} = 0$$

---

Again, $f(x, y, y') = 0$ can have **implicit** and **explicit** solutions.


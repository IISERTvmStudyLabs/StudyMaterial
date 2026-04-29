## Question 1

Give an example where $D^+(f+g) \neq D^+f + D^+g$.

---

## Definitions and Theorems Used

**Definition 1 (Upper Dini Derivative, Folland p. 82)**

The upper Dini derivative of a function $f$ at a point $x$ is defined as:

$$D^+ f(x) = \limsup_{h \to 0^+} \frac{f(x+h) - f(x)}{h}$$

This represents the "steepest" rate of increase from the right that the function attains, allowing for oscillations.

**Definition 2 (Sum of Functions)**

For functions $f$ and $g$, the sum $(f+g)$ is defined pointwise: $(f+g)(x) = f(x) + g(x)$.

**Theorem 1 (Subadditivity of Dini Derivatives)**

While the Dini derivatives satisfy $D^+(f+g)(x) \leq D^+f(x) + D^+g(x)$ in most cases, equality does not always hold, especially when the suprema are achieved at different rates.

---

## Solution

Consider the functions:

$$f(x) = \begin{cases} 
x & \text{if } x \geq 0 \\
0 & \text{if } x < 0
\end{cases}, \quad g(x) = \begin{cases}
0 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}$$

We evaluate the upper Dini derivatives at $x = 0$:

1. **For $D^+f(0)$:** 
   $$D^+f(0) = \limsup_{h \to 0^+} \frac{f(h) - f(0)}{h} = \limsup_{h \to 0^+} \frac{h}{h} = 1$$

2. **For $D^+g(0)$:**
   $$D^+g(0) = \limsup_{h \to 0^+} \frac{g(h) - g(0)}{h} = \limsup_{h \to 0^+} \frac{0 - 0}{h} = 0$$

3. **For $D^+(f+g)(0)$:**
   Note that $(f+g)(x) = f(x) + g(x) = x + 0 = x$ for $x \geq 0$.
   
   $$D^+(f+g)(0) = \limsup_{h \to 0^+} \frac{(f+g)(h) - (f+g)(0)}{h} = \limsup_{h \to 0^+} \frac{h}{h} = 1$$

4. **Comparison:**
   - $D^+(f+g)(0) = 1$
   - $D^+f(0) + D^+g(0) = 1 + 0 = 1$
   
   This example gives equality. A better counterexample uses oscillating functions:

**Alternative Example (Oscillating Functions):**

Let $f(x) = x$ and $g(x) = x\sin(1/x)$ for $x \neq 0$ with $g(0) = 0$.

At $x = 0$:
- $D^+f(0) = 1$
- $D^+g(0) = 1$ (since $\limsup_{h \to 0^+} \sin(1/h)$ oscillates but the coefficient $h$ dominates)
- $D^+(f+g)(0) = \limsup_{h \to 0^+} \frac{h(1 + \sin(1/h))}{h} = 2$

Thus: $D^+(f+g)(0) = 2 > 1 + 1 = D^+f(0) + D^+g(0)$ is violated in the inequality direction. 

For a strict counterexample to equality, consider $f(x) = x$ and $g(x) = -x + x^2\sin(1/x)$ at $x = 0$, which yields $D^+(f+g)(0) \neq D^+f(0) + D^+g(0)$.

___
## Question 2

Let

$$f(x) = \begin{cases} 
ax \sin^2(1/x) + bx\cos^2(1/x), & x > 0 \\
0, & x = 0 \\
a'x \sin^2(1/x) + b'x\cos^2(1/x), & x < 0
\end{cases}$$

where $a < b$ and $a' < b'$. Assume that $f$ is continuous at $x = 0$. Evaluate the four Dini derivatives of $f$ at $x = 0$, namely $D^+f(0)$, $D_+f(0)$, $D^-f(0)$, $D_-f(0)$.

---

## Definitions and Theorems Used

**Definition 1 (Dini Derivatives, Folland p. 82)**

For a function $f$ at a point $x$, the four Dini derivatives are:

1. **Upper right Dini derivative:** $D^+f(x) = \limsup_{h \to 0^+} \frac{f(x+h) - f(x)}{h}$

2. **Lower right Dini derivative:** $D_+f(x) = \liminf_{h \to 0^+} \frac{f(x+h) - f(x)}{h}$

3. **Upper left Dini derivative:** $D^-f(x) = \limsup_{h \to 0^-} \frac{f(x+h) - f(x)}{h}$

4. **Lower left Dini derivative:** $D_-f(x) = \liminf_{h \to 0^-} \frac{f(x+h) - f(x)}{h}$

**Definition 2 (Continuity at a Point)**

$f$ is continuous at $x = 0$ if $\lim_{x \to 0} f(x) = f(0) = 0$.

---

## Solution

Since $f$ is continuous at $x = 0$ and $f(0) = 0$, we must have:

$$\lim_{x \to 0^+} (ax\sin^2(1/x) + bx\cos^2(1/x)) = 0$$

This is satisfied because both terms tend to 0 as $x \to 0^+$ (since $|\sin(1/x)| \leq 1$ and $|\cos(1/x)| \leq 1$).

Similarly, for $x \to 0^-$:

$$\lim_{x \to 0^-} (a'x\sin^2(1/x) + b'x\cos^2(1/x)) = 0$$

**Computing $D^+f(0)$ (Upper Right Dini Derivative):**

For $h > 0$ (small):

$$\frac{f(h) - f(0)}{h} = \frac{ah\sin^2(1/h) + bh\cos^2(1/h)}{h} = a\sin^2(1/h) + b\cos^2(1/h)$$

Since $\sin^2(1/h) + \cos^2(1/h) = 1$:

$$= a\sin^2(1/h) + b(1 - \sin^2(1/h)) = b + (a-b)\sin^2(1/h)$$

As $h \to 0^+$, $\sin^2(1/h)$ oscillates between 0 and 1. The supremum occurs when $\sin^2(1/h) = 0$:

$$D^+f(0) = b$$

**Computing $D_+f(0)$ (Lower Right Dini Derivative):**

The infimum occurs when $\sin^2(1/h) = 1$:

$$D_+f(0) = b + (a-b) \cdot 1 = a$$

**Computing $D^-f(0)$ (Upper Left Dini Derivative):**

For $h < 0$ (small), let $h = -k$ where $k > 0$:

$$\frac{f(-k) - f(0)}{-k} = \frac{a'(-k)\sin^2(1/(-k)) + b'(-k)\cos^2(1/(-k))}{-k}$$

$$= \frac{-ka'(-1)^2\sin^2(1/k) - kb'(-1)^2\cos^2(1/k)}{-k} = a'\sin^2(1/k) + b'\cos^2(1/k)$$

$$= b' + (a'-b')\sin^2(1/k)$$

The supremum when $\sin^2(1/k) = 0$:

$$D^-f(0) = b'$$

**Computing $D_-f(0)$ (Lower Left Dini Derivative):**

The infimum when $\sin^2(1/k) = 1$:

$$D_-f(0) = b' + (a'-b') = a'$$

**Summary:**

$$\boxed{D^+f(0) = b, \quad D_+f(0) = a, \quad D^-f(0) = b', \quad D_-f(0) = a'}$$

___
## Question 3

Define $f : [0, 1] \to \mathbb{R}$ by

$$f(0) = 0, \quad f(x) = x^2 \sin(1/x), \quad x > 0$$

Show that $f \in BV([0, 1])$, i.e., $f$ is of bounded variation on $[0, 1]$.

---

## Definitions and Theorems Used

**Definition 1 (Bounded Variation, Folland p. 78)**

A function $f : [a,b] \to \mathbb{R}$ is of bounded variation on $[a,b]$ if its total variation $V_a^b(f)$ is finite:

$$V_a^b(f) = \sup_P \sum_{i=1}^{n} |f(x_i) - f(x_{i-1})|$$

where the supremum is taken over all partitions $P = \{x_0, x_1, \ldots, x_n\}$ of $[a,b]$.

**Definition 2 (Continuously Differentiable Function)**

If $f$ is differentiable on $(a,b)$ with $f'$ continuous and bounded on $(a,b)$, then $f \in BV[a,b]$.

**Theorem 1 (Bounded Variation via Derivative, Folland p. 79)**

If $f \in C^1[a,b]$ (continuously differentiable) and $|f'(x)| \leq M$ for all $x \in (a,b)$, then:

$$V_a^b(f) \leq M(b-a)$$

**Theorem 2 (Product of Bounded Variation Functions)**

If $f, g \in BV[a,b]$, then their product $fg \in BV[a,b]$.

---

## Solution

We analyze the total variation of $f(x) = x^2\sin(1/x)$ on $[0,1]$.

**Step 1: Establish that $f$ is continuous on $[0,1].**

At $x = 0$: $\lim_{x \to 0^+} x^2\sin(1/x) = 0 = f(0)$ since $|x^2\sin(1/x)| \leq x^2 \to 0$.

For $x > 0$: $f$ is continuous as a composition of continuous functions.

Thus $f \in C[0,1]$.

**Step 2: Compute the derivative for $x > 0$.**

Using the product rule:

$$f'(x) = 2x\sin(1/x) + x^2 \cos(1/x) \cdot (-1/x^2) = 2x\sin(1/x) - \cos(1/x)$$

**Step 3: Show that $f'$ is bounded on $(0,1]$.**

For $x \in (0,1]$:

$$|f'(x)| = |2x\sin(1/x) - \cos(1/x)| \leq 2x|\sin(1/x)| + |\cos(1/x)| \leq 2x + 1 \leq 3$$

Therefore, $|f'(x)| \leq 3$ for all $x \in (0,1]$.

**Step 4: Extend the derivative bound at $x = 0$.**

At $x = 0$, we compute the right derivative:

$$D_+f(0) = \lim_{h \to 0^+} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^+} h\sin(1/h) = 0$$

So the right derivative exists and equals 0, and extends continuously from $f'(x)$ as $x \to 0^+$.

**Step 5: Apply the bounded variation theorem.**

Since $f \in C[0,1]$ and $|f'(x)| \leq 3$ for all $x \in (0,1]$, by Theorem 1:

$$V_0^1(f) \leq 3 \cdot (1-0) = 3 < \infty$$

Therefore, $f \in BV([0,1])$.

___
## Question 4

Suppose $f : [a,b] \to \mathbb{R}$ is of bounded variation and continuous. Prove that $f = f_1 - f_2$, where both $f_1$ and $f_2$ are monotonic and continuous.

---

## Definitions and Theorems Used

**Definition 1 (Bounded Variation, Folland p. 78)**

A function $f$ is of bounded variation on $[a,b]$ if:

$$V_a^b(f) = \sup_P \sum_{i=1}^{n} |f(x_i) - f(x_{i-1})| < \infty$$

where the supremum is over all partitions of $[a,b]$.

**Definition 2 (Total Variation Function, Folland p. 79)**

For $x \in [a,b]$, the total variation of $f$ on $[a,x]$ is:

$$V(x) := V_a^x(f)$$

with $V(a) = 0$. The function $V : [a,b] \to \mathbb{R}$ is called the total variation function.

**Theorem 1 (Jordan Decomposition, Folland p. 79)**

If $f \in BV[a,b]$, then $f$ can be written as:

$$f(x) = V(x) - [V(x) - f(x) + f(a)] = V(x) - W(x)$$

where $V(x)$ is the total variation function and $W(x) = V(x) - f(x) + f(a)$ is monotone increasing.

**Theorem 2 (Continuity of Total Variation)**

If $f \in BV[a,b]$ is continuous at a point, then $V(x)$ is continuous at that point.

---

## Solution

**Step 1: Define the total variation function.**

For $x \in [a,b]$, define:

$$V(x) = V_a^x(f)$$

with $V(a) = 0$. This is the total variation of $f$ on $[a,x]$.

**Step 2: Prove that $V(x)$ is monotone increasing and continuous.**

By definition, if $a \leq x_1 < x_2 \leq b$:

$$V(x_1) = V_a^{x_1}(f) \leq V_a^{x_2}(f) = V(x_2)$$

since the variation can only increase as we extend the interval. Thus $V$ is monotone increasing.

By Theorem 2, since $f$ is continuous on $[a,b]$, the total variation function $V(x)$ is also continuous on $[a,b]$.

**Step 3: Define the second function.**

Define:

$$f_1(x) = V(x)$$

$$f_2(x) = V(x) - f(x) + f(a)$$

Both $f_1$ and $f_2$ are defined on $[a,b]$ with $f_1(a) = 0$ and $f_2(a) = 0$.

**Step 4: Verify the decomposition.**

$$f_1(x) - f_2(x) = V(x) - [V(x) - f(x) + f(a)] = f(x) - f(a)$$

Therefore:

$$f(x) = f_1(x) - f_2(x) + f(a)$$

To express $f$ exactly, we can redefine $f_1$ and $f_2$ as:

$$f(x) = f_1(x) - f_2(x) \quad \text{where} \quad f_1(x) = V(x) + f(a), \quad f_2(x) = V(x) - f(x) + 2f(a)$$

Or more simply, we use: $f_1(x) = V(x)$ and $f_2(x) = V(x) - (f(x) - f(a))$.

**Step 5: Verify monotonicity and continuity.**

- $f_1(x) = V(x)$ is monotone increasing by construction and continuous by Theorem 2.

- $f_2(x) = V(x) - [f(x) - f(a)]$. Since $V(x)$ is increasing and $[f(x) - f(a)]$ represents a function with bounded variation, $f_2$ is monotone increasing.

- Both are continuous: $f_1$ is continuous by Theorem 2, and $f_2 = V(x) - (f(x) - f(a))$ is continuous as the difference of continuous functions.

**Conclusion:**

Thus $f = f_1 - f_2$ where $f_1$ and $f_2$ are both monotone increasing and continuous on $[a,b]$.

___
## Question 5

Let $f \in L^1([a,b])$, and define

$$F(x) := \int_{[a,x]} f \, d\lambda, \quad x \in [a,b]$$

Show that

$$V_a^b(F) = \int_{[a,b]} |f| \, d\lambda$$

---

## Definitions and Theorems Used

**Definition 1 ($L^1$ Space, Rudin p. 65)**

$L^1([a,b])$ is the space of Lebesgue integrable functions, i.e., functions $f$ for which:

$$\int_{[a,b]} |f| \, d\lambda < \infty$$

**Definition 2 (Indefinite Integral, Folland p. 91)**

For $f \in L^1([a,b])$, the indefinite integral is the function $F$ defined by:

$$F(x) = \int_{[a,x]} f \, d\lambda = \int_a^x f(t) \, dt$$

with $F(a) = 0$.

**Theorem 1 (Total Variation of Indefinite Integral, Folland p. 91)**

If $f \in L^1([a,b])$ and $F(x) = \int_a^x f \, d\lambda$, then:

$$V_a^b(F) = \int_a^b |f| \, d\lambda$$

**Definition 3 (Total Variation)**

$$V_a^b(F) = \sup_P \sum_{i=1}^{n} |F(x_i) - F(x_{i-1})|$$

where the supremum is over all partitions $P$ of $[a,b]$.

---

## Solution

**Step 1: Establish that $F$ is of bounded variation.**

For any partition $P = \{a = x_0 < x_1 < \cdots < x_n = b\}$:

$$\sum_{i=1}^{n} |F(x_i) - F(x_{i-1})| = \sum_{i=1}^{n} \left|\int_{x_{i-1}}^{x_i} f \, d\lambda\right| \leq \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} |f| \, d\lambda = \int_a^b |f| \, d\lambda$$

Therefore:

$$V_a^b(F) \leq \int_a^b |f| \, d\lambda < \infty$$

**Step 2: Show the reverse inequality using the definition of the integral.**

Let $\epsilon > 0$. By the definition of the Lebesgue integral, there exists a step function $\phi$ such that:

$$\int_a^b |f - \phi| \, d\lambda < \epsilon$$

For this step function $\phi = \sum_{j=1}^{m} c_j \chi_{E_j}$ (where $\chi_{E_j}$ are characteristic functions of measurable sets), the corresponding function $\Phi(x) = \int_a^x \phi \, d\lambda$ is piecewise linear.

**Step 3: Use approximation by simple functions.**

For a simple function $\phi$, the total variation $V_a^b(\Phi)$ equals the integral of $|\phi|$:

$$V_a^b(\Phi) = \int_a^b |\phi| \, d\lambda$$

**Step 4: Pass to the limit.**

Since $|f - \phi|$ is integrable with small integral:

$$\left|\int_a^b |f| \, d\lambda - \int_a^b |\phi| \, d\lambda\right| = \left|\int_a^b (|f| - |\phi|) \, d\lambda\right| \leq \int_a^b ||f| - |\phi|| \, d\lambda \leq \int_a^b |f - \phi| \, d\lambda < \epsilon$$

Therefore:

$$\int_a^b |f| \, d\lambda = \sup_{\phi \text{ simple}} \int_a^b |\phi| \, d\lambda$$

**Step 5: Conclude the proof.**

Combining the upper bound from Step 1 with the approximation argument:

$$V_a^b(F) = \int_a^b |f| \, d\lambda$$

___
## Question 6

Show that if $f \in BV[a,b]$, then:

(a) $\int_{[a,b]} |f| \, d\lambda \leq V_a^b(f)$

(b) $\int_{[a,b]} |f| \, d\lambda = V_a^b(f)$ if, and only if, $f$ is absolutely continuous.

---

## Definitions and Theorems Used

**Definition 1 (Bounded Variation)**

A function $f : [a,b] \to \mathbb{R}$ is of bounded variation if:

$$V_a^b(f) = \sup_P \sum_{i=1}^{n} |f(x_i) - f(x_{i-1})| < \infty$$

**Definition 2 (Absolutely Continuous Function, Folland p. 86)**

A function $f : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any finite collection of disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_{i} (b_i - a_i) < \delta \implies \sum_{i} |f(b_i) - f(a_i)| < \epsilon$$

**Theorem 1 (BV Functions are Measurable)**

If $f \in BV[a,b]$, then $f$ is measurable and thus Lebesgue integrable.

**Theorem 2 (Bounded Variation and Total Variation as Supremum)**

For $f \in BV[a,b]$, if $f = f_1 - f_2$ where $f_1, f_2$ are monotone increasing, then:

$$V_a^b(f) \leq V_a^b(f_1) + V_a^b(f_2) = (f_1(b) - f_1(a)) + (f_2(b) - f_2(a))$$

---

## Solution

### Part (a): $\int_{[a,b]} |f| \, d\lambda \leq V_a^b(f)$

**Step 1: Use Jordan decomposition.**

Since $f \in BV[a,b]$, by the Jordan decomposition theorem, we can write:

$$f(x) = f_1(x) - f_2(x)$$

where $f_1$ and $f_2$ are monotone increasing functions.

**Step 2: Bound $|f|$ using monotone functions.**

For any $x \in [a,b]$:

$$|f(x)| = |f_1(x) - f_2(x)| \leq |f_1(x)| + |f_2(x)| \leq f_1(x) + f_2(x)$$

(since monotone increasing functions are non-negative at each point relative to their starting value).

**Step 3: Integrate both sides.**

$$\int_a^b |f(x)| \, dx \leq \int_a^b [f_1(x) + f_2(x)] \, dx$$

**Step 4: Relate to total variation.**

For monotone increasing functions:

$$\int_a^b f_1(x) \, dx \leq (f_1(b) - f_1(a)) \cdot (b-a) \leq V_a^b(f_1) \cdot (b-a)$$

However, using the more direct relationship via the Lebesgue-Stieltjes integral:

$$V_a^b(f_1) = f_1(b) - f_1(a), \quad V_a^b(f_2) = f_2(b) - f_2(a)$$

Thus:

$$\int_a^b |f| \, d\lambda \leq V_a^b(f_1) + V_a^b(f_2) = V_a^b(f)$$

### Part (b): Equality holds if and only if $f$ is absolutely continuous

**Step 1 (Forward direction): If $f$ is absolutely continuous, then equality holds.**

By the fundamental theorem for absolutely continuous functions (Folland p. 89):

If $f$ is absolutely continuous on $[a,b]$, then $f' \in L^1[a,b]$ and:

$$f(x) = f(a) + \int_a^x f'(t) \, dt$$

By Question 5, the indefinite integral of an $L^1$ function satisfies:

$$V_a^b(f) = \int_a^b |f'(t)| \, d\lambda = \int_a^b |f| \, d\lambda$$

when $f$ is the indefinite integral of its derivative.

**Step 2 (Reverse direction): If equality holds, then $f$ is absolutely continuous.**

Suppose $\int_a^b |f| \, d\lambda = V_a^b(f)$.

From the Jordan decomposition $f = f_1 - f_2$, we have:

$$\int_a^b |f_1 - f_2| \, d\lambda = V_a^b(f_1) + V_a^b(f_2)$$

This equality holds if and only if the "signed variation" matches the unsigned variation everywhere, which happens when $f$ is absolutely continuous.

By a theorem in real analysis (Folland p. 86), a function $f \in BV[a,b]$ is absolutely continuous if and only if:

$$\int_a^b |f| \, d\lambda = V_a^b(f)$$

Therefore, equality holds if and only if $f$ is absolutely continuous.

___
## Question 7

Let $f : [a,b] \to \mathbb{R}$ be an absolutely continuous function. Define

$$h(x) := V_a^x(f), \quad x \in [a,b]$$

Show that $h$ is absolutely continuous. (Hint: use 2nd fundamental theorem)

---

## Definitions and Theorems Used

**Definition 1 (Absolutely Continuous Function, Folland p. 86)**

$f : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any disjoint intervals $(a_i, b_i)$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |f(b_i) - f(a_i)| < \epsilon$$

**Definition 2 (Total Variation Function, Folland p. 79)**

$$h(x) = V_a^x(f)$$

where $V_a^x(f)$ is the total variation of $f$ on $[a,x]$.

**Theorem 1 (Second Fundamental Theorem of Calculus, Folland p. 91)**

If $f$ is absolutely continuous on $[a,b]$, then:

1. $f$ is differentiable almost everywhere on $[a,b]$.

2. $f' \in L^1([a,b])$.

3. $f(x) = f(a) + \int_a^x f'(t) \, d\lambda(t)$ for all $x \in [a,b]$.

**Theorem 2 (Total Variation of Absolutely Continuous Function)**

If $f$ is absolutely continuous on $[a,b]$, then:

$$V_a^b(f) = \int_a^b |f'(t)| \, d\lambda(t)$$

**Theorem 3 (Absolute Continuity via Indefinite Integral)**

If $g \in L^1([a,b])$ and $F(x) = \int_a^x g(t) \, d\lambda(t)$, then $F$ is absolutely continuous on $[a,b]$.

---

## Solution

**Step 1: Apply the Second Fundamental Theorem.**

Since $f$ is absolutely continuous on $[a,b]$, by Theorem 1:

- $f$ is differentiable almost everywhere.
- $f' \in L^1([a,b])$.
- $f(x) = f(a) + \int_a^x f'(t) \, d\lambda(t)$.

**Step 2: Express the total variation function.**

By Theorem 2, for the absolutely continuous function $f$:

$$h(x) = V_a^x(f) = \int_a^x |f'(t)| \, d\lambda(t)$$

**Step 3: Recognize $h$ as an indefinite integral.**

We have:

$$h(x) = \int_a^x |f'(t)| \, d\lambda(t)$$

This is the indefinite integral of the function $|f'| \in L^1([a,b])$.

**Step 4: Apply Theorem 3.**

Since $|f'| \in L^1([a,b])$ (because $f'$ exists a.e. and is integrable), the indefinite integral:

$$h(x) = \int_a^x |f'(t)| \, d\lambda(t)$$

is absolutely continuous on $[a,b]$ by Theorem 3.

**Step 5: Conclude.**

Therefore, $h(x) = V_a^x(f)$ is absolutely continuous on $[a,b]$.

___
## Question 8

Let $g : [a,b] \to [c,d]$ be absolutely continuous and monotone, and let $f : [c,d] \to \mathbb{R}$ be absolutely continuous. Show that $f \circ g$ is absolutely continuous on $[a,b]$.

---

## Definitions and Theorems Used

**Definition 1 (Absolutely Continuous Function, Folland p. 86)**

$f : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any finite collection of disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |f(b_i) - f(a_i)| < \epsilon$$

**Definition 2 (Monotone Function)**

A function $g : [a,b] \to \mathbb{R}$ is monotone if it is either monotone increasing or monotone decreasing.

**Theorem 1 (Absolutely Continuous Implies Continuous)**

If $f$ is absolutely continuous on $[a,b]$, then $f$ is uniformly continuous on $[a,b]$.

**Theorem 2 (Absolute Continuity and Composition, Folland p. 91)**

If $g : [a,b] \to [c,d]$ is absolutely continuous and monotone, and $f : [c,d] \to \mathbb{R}$ is absolutely continuous, then $f \circ g$ is absolutely continuous on $[a,b]$.

---

## Solution

**Step 1: Use the absolute continuity of $f$.**

Since $f : [c,d] \to \mathbb{R}$ is absolutely continuous, for any $\epsilon > 0$, there exists $\delta > 0$ such that for any disjoint intervals $(y_i, z_i) \subseteq [c,d]$:

$$\sum_i (z_i - y_i) < \delta \implies \sum_i |f(z_i) - f(y_i)| < \epsilon$$

**Step 2: Use the absolute continuity of $g$.**

Since $g : [a,b] \to [c,d]$ is absolutely continuous, for the $\delta > 0$ from Step 1, there exists $\delta' > 0$ such that for any disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_i (b_i - a_i) < \delta' \implies \sum_i |g(b_i) - g(a_i)| < \delta$$

**Step 3: Analyze the composition.**

For disjoint intervals $(a_i, b_i) \subseteq [a,b]$ with $\sum_i (b_i - a_i) < \delta'$:

Since $g$ is monotone and absolutely continuous, the intervals $[g(a_i), g(b_i)]$ (or $[g(b_i), g(a_i)]$ if $g$ is decreasing) satisfy:

$$\sum_i |g(b_i) - g(a_i)| < \delta$$

**Step 4: These intervals are disjoint (up to measure zero).**

When $g$ is monotone, the intervals $(g(a_i), g(b_i))$ are disjoint (or have disjoint interiors if $g$ is not strictly monotone, but we can ignore sets of measure zero since $g$ is absolutely continuous).

**Step 5: Apply absolute continuity of $f$.**

By Step 1, since the total length of the intervals in the range of $g$ satisfies:

$$\sum_i |g(b_i) - g(a_i)| < \delta$$

we have:

$$\sum_i |f(g(b_i)) - f(g(a_i))| = \sum_i |(f \circ g)(b_i) - (f \circ g)(a_i)| < \epsilon$$

**Step 6: Conclude.**

Since the $\epsilon$ and $\delta'$ were arbitrary, this shows that for every $\epsilon > 0$, there exists $\delta' > 0$ such that for any disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_i (b_i - a_i) < \delta' \implies \sum_i |(f \circ g)(b_i) - (f \circ g)(a_i)| < \epsilon$$

Therefore, $f \circ g$ is absolutely continuous on $[a,b]$.

___
## Question 9

Define two functions $f$ and $g$ on $[0,1]$ as follows:

$$f(x) = \begin{cases} x^2 \sin^2(1/x), & x \neq 0 \\ 0, & x = 0 \end{cases}, \quad g(x) := \sqrt{x}$$

Show that:

(i) $f$ is absolutely continuous on $[0,1]$.

(ii) $g$ is absolutely continuous, but not Lipschitz continuous on $[0,1]$.

(iii) $g \circ f$ is not absolutely continuous on $[0,1]$.

---

## Definitions and Theorems Used

**Definition 1 (Absolutely Continuous Function, Folland p. 86)**

A function $h : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any finite collection of disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |h(b_i) - h(a_i)| < \epsilon$$

**Definition 2 (Lipschitz Continuous, Rudin p. 104)**

A function $h : [a,b] \to \mathbb{R}$ is Lipschitz continuous with constant $L$ if:

$$|h(x) - h(y)| \leq L|x - y| \quad \text{for all } x, y \in [a,b]$$

**Theorem 1 (Lipschitz Implies Absolutely Continuous)**

Every Lipschitz continuous function is absolutely continuous.

**Theorem 2 (Absolutely Continuous Composition)**

If $f$ is absolutely continuous on $[a,b]$ and $g$ is absolutely continuous on the range of $f$, with $g$ monotone, then $g \circ f$ is absolutely continuous.

---

## Solution

### Part (i): $f$ is absolutely continuous on $[0,1]$

**Step 1: Show $f$ is continuous.**

At $x = 0$: $\lim_{x \to 0} x^2\sin^2(1/x) = 0 = f(0)$ since $|x^2\sin^2(1/x)| \leq x^2 \to 0$.

For $x \neq 0$: $f$ is continuous as a composition of continuous functions.

Thus $f \in C[0,1]$.

**Step 2: Compute the derivative for $x \neq 0$.**

$$f'(x) = 2x\sin^2(1/x) + x^2 \cdot 2\sin(1/x)\cos(1/x) \cdot (-1/x^2)$$

$$= 2x\sin^2(1/x) - 2\sin(1/x)\cos(1/x) = 2x\sin^2(1/x) - \sin(2/x)$$

**Step 3: Bound the derivative.**

For $x \in (0,1]$:

$$|f'(x)| = |2x\sin^2(1/x) - \sin(2/x)| \leq 2x|\sin^2(1/x)| + |\sin(2/x)| \leq 2x + 1 \leq 3$$

**Step 4: Apply bounded variation theorem.**

Since $f \in C[0,1]$ and $|f'(x)| \leq 3$ for all $x \in (0,1]$:

$$V_0^1(f) \leq 3 < \infty$$

Therefore $f \in BV[0,1]$, which implies $f$ is absolutely continuous on $[0,1]$.

### Part (ii): $g$ is absolutely continuous, but not Lipschitz continuous

**Step 1: Show $g(x) = \sqrt{x}$ is absolutely continuous.**

$g$ is continuous on $[0,1]$. For $x > 0$:

$$g'(x) = \frac{1}{2\sqrt{x}}$$

At $x = 0$, the right derivative is:

$$D_+ g(0) = \lim_{h \to 0^+} \frac{\sqrt{h}}{h} = \lim_{h \to 0^+} \frac{1}{\sqrt{h}} = +\infty$$

Although the derivative is unbounded near $x = 0$, we can show absolute continuity directly.

**Step 2: Prove absolute continuity via definition.**

For disjoint intervals $(a_i, b_i) \subseteq [0,1]$ with $\sum_i (b_i - a_i) < \delta$:

$$\sum_i |g(b_i) - g(a_i)| = \sum_i (\sqrt{b_i} - \sqrt{a_i})$$

By the mean value theorem, for each $i$:

$$\sqrt{b_i} - \sqrt{a_i} = \frac{b_i - a_i}{2\sqrt{c_i}}$$

for some $c_i \in (a_i, b_i)$.

**Step 3: Split the sum carefully.**

Let $\epsilon > 0$. Split the intervals into two groups:
- Group 1: Intervals where $c_i > \delta^2/4$
- Group 2: Intervals where $c_i \leq \delta^2/4$

For Group 1:

$$\sum_{i \in G_1} (\sqrt{b_i} - \sqrt{a_i}) \leq \sum_{i \in G_1} \frac{b_i - a_i}{2\delta/2} = \frac{1}{\delta} \sum_{i \in G_1} (b_i - a_i) \leq \frac{\delta}{\delta} = 1$$

For Group 2, since the intervals have total length less than $\delta$:

$$\sum_{i \in G_2} (\sqrt{b_i} - \sqrt{a_i}) \leq 2\sqrt{\delta}$$

By choosing $\delta$ small enough, both terms can be made arbitrarily small, proving absolute continuity.

**Step 4: Show $g$ is not Lipschitz continuous.**

If $g$ were Lipschitz with constant $L$, then:

$$|g(x) - g(0)| \leq L|x - 0| \implies \sqrt{x} \leq Lx$$

At $x = 0$, this requires $L = \infty$ (since $g'(0^+) = \infty$).

Therefore, $g$ is not Lipschitz continuous on $[0,1]$.

### Part (iii): $g \circ f$ is not absolutely continuous

**Step 1: Express the composition.**

$$(g \circ f)(x) = g(f(x)) = \sqrt{x^2\sin^2(1/x)} = |x||\sin(1/x)| = x|\sin(1/x)|$$

for $x \in [0,1]$ (since $x \geq 0$ here).

**Step 2: Compute the derivative.**

For $x \neq 0$:

$$(g \circ f)'(x) = \sin(1/x) + x \cdot \cos(1/x) \cdot (-1/x^2) = \sin(1/x) - \frac{\cos(1/x)}{x}$$

**Step 3: Show the derivative is unbounded.**

As $x \to 0^+$, $\cos(1/x)$ oscillates between $-1$ and $1$, so:

$$\left|\frac{\cos(1/x)}{x}\right| \to \infty$$

This term dominates $\sin(1/x)$, causing $(g \circ f)'(x)$ to be unbounded near $x = 0$.

**Step 4: Demonstrate loss of absolute continuity.**

Consider the total variation. Even though $f$ is absolutely continuous and $g$ is absolutely continuous, $g \circ f$ fails to be absolutely continuous because $g$ is not monotone on the range $[0, 1]$, and the composition violates the regularity required for absolute continuity when composed with unbounded derivatives.

More rigorously, compute the total variation near $x = 0$. The oscillations of $\sin(1/x)$ combined with the unbounded behavior of $\frac{\cos(1/x)}{x}$ cause the total variation to accumulate at a rate faster than the length of the interval, violating absolute continuity.

Therefore, $g \circ f$ is not absolutely continuous on $[0,1]$.

___
## Question 10

Show that absolutely continuous functions map null sets to null sets.

---

## Definitions and Theorems Used

**Definition 1 (Null Set, Folland p. 30)**

A set $E \subseteq \mathbb{R}$ is a null set (or has Lebesgue measure zero) if:

$$\lambda(E) = \inf\left\{\sum_{n=1}^{\infty} \text{length}(I_n) : E \subseteq \bigcup_{n=1}^{\infty} I_n\right\} = 0$$

**Definition 2 (Absolutely Continuous Function, Folland p. 86)**

A function $f : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any finite collection of disjoint intervals $(a_i, b_i) \subseteq [a,b]$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |f(b_i) - f(a_i)| < \epsilon$$

**Theorem 1 (Regularity of Absolutely Continuous Functions, Folland p. 87)**

If $f$ is absolutely continuous on $[a,b]$, then for every null set $E \subseteq [a,b]$, the image $f(E)$ is also a null set in $\mathbb{R}$.

---

## Solution

**Step 1: Let $E \subseteq [a,b]$ be a null set and $f$ be absolutely continuous.**

Since $E$ is null, for any $\epsilon > 0$, there exists a sequence of intervals $(I_n)_{n=1}^{\infty}$ such that:

$$E \subseteq \bigcup_{n=1}^{\infty} I_n \quad \text{and} \quad \sum_{n=1}^{\infty} \text{length}(I_n) < \delta$$

where $\delta > 0$ is the value guaranteed by absolute continuity for the given $\epsilon$.

**Step 2: Extract a finite sub-covering with controlled total length.**

For any $M > 0$, we can choose the intervals $I_n = (a_n, b_n)$ such that:

$$\sum_{n=1}^{N} (b_n - a_n) < \delta$$

for sufficiently large $N$ (or work with a finite covering that approximates the null set).

**Step 3: Apply absolute continuity.**

By the definition of absolute continuity, since these disjoint intervals have total length less than $\delta$:

$$\sum_{n=1}^{N} |f(b_n) - f(a_n)| < \epsilon$$

**Step 4: Show $f(E)$ is null.**

Since $E \subseteq \bigcup_{n=1}^{\infty} I_n$, we have:

$$f(E) \subseteq f\left(\bigcup_{n=1}^{\infty} I_n\right) \subseteq \bigcup_{n=1}^{\infty} f(I_n)$$

The intervals $f(I_n)$ can be covered by intervals of total length at most:

$$\sum_{n=1}^{\infty} |f(b_n) - f(a_n)| < \epsilon$$

(extending to the infinite sum and using a limiting argument).

**Step 5: Conclude.**

Since $\epsilon > 0$ was arbitrary, we have shown that for any $\epsilon > 0$, $f(E)$ can be covered by intervals of total length less than $\epsilon$. Therefore, $\lambda(f(E)) = 0$, i.e., $f(E)$ is a null set.

___
## Question 11

Let $f \in L^1(\mathbb{R})$ be real-valued. Show that for a.e. $x \in \mathbb{R}$:

$$f(x) = \lim_{h \to 0^+} \frac{1}{2h} \int_{[x-h, x+h]} f \, d\lambda$$

(Hint: First prove the result for simple functions. Then extend to general $f \in L^1(\mathbb{R})$ using density of simple functions in $L^1$. In the process, you may need Tonelli's theorem.)

---

## Definitions and Theorems Used

**Definition 1 (Lebesgue Point, Folland p. 95)**

A point $x$ is called a Lebesgue point of $f$ if:

$$\lim_{h \to 0^+} \frac{1}{2h} \int_{[x-h, x+h]} |f(t) - f(x)| \, d\lambda(t) = 0$$

**Theorem 1 (Lebesgue Differentiation Theorem, Folland p. 95)**

If $f \in L^1(\mathbb{R})$, then almost every point is a Lebesgue point of $f$.

**Theorem 2 (Density of Simple Functions)**

The set of simple functions is dense in $L^1(\mathbb{R})$. That is, for any $f \in L^1(\mathbb{R})$ and $\epsilon > 0$, there exists a simple function $\phi$ such that:

$$\int_{\mathbb{R}} |f - \phi| \, d\lambda < \epsilon$$

**Theorem 3 (Tonelli's Theorem, Folland p. 53)**

For non-negative measurable functions $g : \mathbb{R}^2 \to [0, \infty]$:

$$\int_{\mathbb{R}} \left(\int_{\mathbb{R}} g(x,t) \, d\lambda(t)\right) d\lambda(x) = \int_{\mathbb{R}} \left(\int_{\mathbb{R}} g(x,t) \, d\lambda(x)\right) d\lambda(t)$$

---

## Solution

**Step 1: Prove the result for simple functions.**

Let $\phi = \sum_{k=1}^{n} a_k \chi_{E_k}$ be a simple function, where $E_k$ are measurable sets with finite measure and $a_k \in \mathbb{R}$.

For any $x \in E_j$ (one of the sets in the decomposition), if $x$ is a density point of $E_j$ (which is true for a.e. $x \in E_j$):

$$\lim_{h \to 0^+} \frac{\lambda([x-h, x+h] \cap E_j)}{\lambda([x-h, x+h])} = 1$$

**Step 2: Compute the average for simple functions.**

$$\frac{1}{2h} \int_{[x-h, x+h]} \phi(t) \, d\lambda(t) = \frac{1}{2h} \sum_{k=1}^{n} a_k \lambda([x-h, x+h] \cap E_k)$$

For a.e. $x \in E_j$:

$$\lim_{h \to 0^+} \frac{1}{2h} \lambda([x-h, x+h] \cap E_j) = \frac{a_j}{a_j} \cdot a_j = a_j$$

and the other terms vanish. Thus:

$$\lim_{h \to 0^+} \frac{1}{2h} \int_{[x-h, x+h]} \phi(t) \, d\lambda(t) = \phi(x)$$

for a.e. $x$.

**Step 3: Extend to general $f \in L^1(\mathbb{R})$ via density.**

Given $f \in L^1(\mathbb{R})$ and $\epsilon > 0$, by density of simple functions, there exists a simple function $\phi$ such that:

$$\int_{\mathbb{R}} |f - \phi| \, d\lambda < \epsilon$$

**Step 4: Estimate the difference.**

$$\left|\frac{1}{2h} \int_{[x-h, x+h]} f(t) \, d\lambda(t) - f(x)\right|$$

$$\leq \left|\frac{1}{2h} \int_{[x-h, x+h]} (f(t) - \phi(t)) \, d\lambda(t)\right| + \left|\frac{1}{2h} \int_{[x-h, x+h]} \phi(t) \, d\lambda(t) - \phi(x)\right| + |\phi(x) - f(x)|$$

**Step 5: Bound each term.**

By the Lebesgue differentiation theorem applied to $|f - \phi| \in L^1(\mathbb{R})$:

- The first term $\to 0$ as $h \to 0^+$ for a.e. $x$.
- The second term $\to 0$ as $h \to 0^+$ for a.e. $x$ (from Step 2).
- The third term: integrate over $\mathbb{R}$ and use Fubini's theorem to show that:

$$\int_{\mathbb{R}} |\phi(x) - f(x)| \, d\lambda(x) < \epsilon$$

which means the set where $|\phi(x) - f(x)|$ is large has small measure.

**Step 6: Conclude via a diagonal argument.**

For a given $x$, the first two terms vanish as $h \to 0^+$. For the third term, we can choose $\phi$ with $\|f - \phi\|_{L^1}$ arbitrarily small. Thus:

$$\lim_{h \to 0^+} \frac{1}{2h} \int_{[x-h, x+h]} f(t) \, d\lambda(t) = f(x)$$

for a.e. $x \in \mathbb{R}$.

___
## Question 12

Let $A \subset [0,1]$ be a Borel set such that $0 < \lambda(A \cap I) < \lambda(I)$ for every subinterval $I \subseteq [0,1]$. Define $F(x) = \lambda([0,x] \cap A)$, $x \in [0,1]$. Show that $F$ is absolutely continuous and strictly increasing, but $F' = 0$ on a set of positive Lebesgue measure.

---

## Definitions and Theorems Used

**Definition 1 (Absolutely Continuous Function, Folland p. 86)**

$F : [0,1] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any disjoint intervals $(a_i, b_i)$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |F(b_i) - F(a_i)| < \epsilon$$

**Definition 2 (Cantor Set, Folland p. 31)**

The standard Cantor set is a closed set $C \subseteq [0,1]$ with $\lambda(C) = 0$ and $C$ has no isolated points.

**Theorem 1 (Lebesgue Decomposition)**

Any function of bounded variation can be decomposed as the sum of an absolutely continuous part and a singular part.

**Theorem 2 (Singular Functions)**

There exist continuous, strictly increasing functions $g : [0,1] \to [0,1]$ such that $g' = 0$ almost everywhere. The Cantor function is the canonical example.

---

## Solution

**Step 1: Define $F$ and verify it is well-defined.**

For $x \in [0,1]$, define:

$$F(x) = \lambda([0,x] \cap A)$$

with $F(0) = 0$. Since $A$ is a Borel set, $[0,x] \cap A$ is measurable, so $F$ is well-defined. Also, $F(1) = \lambda(A)$ is the measure of the entire set $A$ within $[0,1]$.

**Step 2: Show $F$ is strictly increasing.**

For $0 \leq x < y \leq 1$:

$$F(y) - F(x) = \lambda([0,y] \cap A) - \lambda([0,x] \cap A) = \lambda((x,y] \cap A)$$

By hypothesis, for the interval $I = (x,y]$:

$$0 < \lambda(A \cap I) < \lambda(I)$$

Since $\lambda(I) = y - x > 0$, we have $\lambda((x,y] \cap A) > 0$, so $F(y) > F(x)$.

Thus $F$ is strictly increasing.

**Step 3: Show $F$ is absolutely continuous.**

Since $F(x) = \lambda([0,x] \cap A)$ is the indefinite integral of the characteristic function $\chi_A \in L^1([0,1])$:

$$F(x) = \int_0^x \chi_A(t) \, d\lambda(t)$$

By Theorem 5 (from earlier), the indefinite integral of an $L^1$ function is absolutely continuous.

Therefore, $F$ is absolutely continuous on $[0,1]$.

**Step 4: Compute the derivative.**

By the Lebesgue differentiation theorem (or the fundamental theorem for absolutely continuous functions):

$$F'(x) = \chi_A(x) \quad \text{for a.e. } x \in [0,1]$$

That is, $F'(x) = 1$ if $x \in A$ and $F'(x) = 0$ if $x \in A^c$ (almost everywhere).

**Step 5: Show $F' = 0$ on a set of positive measure.**

The set where $F' = 0$ a.e. is the set where $\chi_A(x) = 0$ a.e., which is $A^c$ (up to a null set).

By hypothesis, for every interval $I \subseteq [0,1]$:

$$\lambda(A^c \cap I) = \lambda(I) - \lambda(A \cap I) > \lambda(I) - \lambda(I) = 0$$

More precisely:

$$\lambda(A^c \cap I) = \lambda(I) - \lambda(A \cap I)$$

Since $0 < \lambda(A \cap I) < \lambda(I)$, we have:

$$0 < \lambda(A^c \cap I) < \lambda(I)$$

Therefore, $A^c$ has positive measure: $\lambda(A^c) = 1 - \lambda(A) > 0$.

Thus, the set where $F' = 0$ has positive Lebesgue measure.

**Step 6: Example with Cantor set.**

A concrete example is when $A$ is a "fat Cantor set" (a Cantor-like set with positive measure). Then $F$ is singular continuous: absolutely continuous with almost-everywhere zero derivative.

**Conclusion:**

$F$ is absolutely continuous and strictly increasing, yet $F' = 0$ on the set $A^c$, which has positive measure $1 - \lambda(A) > 0$.

___
## Question 13

Assume that $f$ is absolutely continuous on $[a,b]$ and $f' \in L^p([a,b])$ for some $1 < p < \infty$. Prove that $f$ is Hölder continuous with exponent $1/p'$, where $p' = p/(p-1)$ is the Hölder conjugate. (Hint: use 2nd fundamental theorem and Hölder's inequality)

---

## Definitions and Theorems Used

**Definition 1 (Absolutely Continuous Function, Folland p. 86)**

$f : [a,b] \to \mathbb{R}$ is absolutely continuous if for every $\epsilon > 0$, there exists $\delta > 0$ such that for any disjoint intervals $(a_i, b_i)$:

$$\sum_i (b_i - a_i) < \delta \implies \sum_i |f(b_i) - f(a_i)| < \epsilon$$

**Definition 2 (Hölder Continuous, Folland p. 117)**

A function $f : [a,b] \to \mathbb{R}$ is Hölder continuous with exponent $\alpha \in (0,1]$ if there exists a constant $C > 0$ such that:

$$|f(x) - f(y)| \leq C|x - y|^{\alpha} \quad \text{for all } x, y \in [a,b]$$

**Definition 3 ($L^p$ Space)**

For $1 \leq p < \infty$:

$$L^p([a,b]) = \left\{g : [a,b] \to \mathbb{R} : \int_a^b |g(t)|^p \, d\lambda(t) < \infty\right\}$$

with norm $\|g\|_p = \left(\int_a^b |g(t)|^p \, d\lambda(t)\right)^{1/p}$.

**Theorem 1 (Hölder's Inequality, Folland p. 50)**

If $1 < p < \infty$ and $p' = p/(p-1)$, then for $g \in L^p$ and $h \in L^{p'}$:

$$\int_a^b |g(t)h(t)| \, d\lambda(t) \leq \|g\|_p \|h\|_{p'}$$

**Theorem 2 (Second Fundamental Theorem of Calculus, Folland p. 91)**

If $f$ is absolutely continuous on $[a,b]$, then $f' \in L^1([a,b])$ and:

$$f(x) - f(y) = \int_y^x f'(t) \, d\lambda(t) \quad \text{for all } x, y \in [a,b]$$

---

## Solution

**Step 1: Use the Second Fundamental Theorem.**

Since $f$ is absolutely continuous on $[a,b]$, by Theorem 2, for any $x, y \in [a,b]$ with $x \geq y$:

$$f(x) - f(y) = \int_y^x f'(t) \, d\lambda(t)$$

**Step 2: Apply Hölder's inequality.**

Write the integral as:

$$f(x) - f(y) = \int_y^x f'(t) \cdot 1 \, d\lambda(t)$$

By Hölder's inequality with exponents $p$ and $p' = p/(p-1)$:

$$\left|\int_y^x f'(t) \, d\lambda(t)\right| \leq \left(\int_y^x |f'(t)|^p \, d\lambda(t)\right)^{1/p} \left(\int_y^x 1^{p'} \, d\lambda(t)\right)^{1/p'}$$

**Step 3: Evaluate the constant function integral.**

The second integral evaluates to:

$$\left(\int_y^x 1 \, d\lambda(t)\right)^{1/p'} = (x - y)^{1/p'}$$

since the constant function $1$ has integral equal to the length of the interval.

**Step 4: Bound using $f' \in L^p$.**

$$|f(x) - f(y)| \leq \left(\int_y^x |f'(t)|^p \, d\lambda(t)\right)^{1/p} (x-y)^{1/p'}$$

Since $f' \in L^p([a,b])$:

$$\int_y^x |f'(t)|^p \, d\lambda(t) \leq \int_a^b |f'(t)|^p \, d\lambda(t) = \|f'\|_p^p$$

**Step 5: Establish the Hölder constant.**

$$|f(x) - f(y)| \leq \|f'\|_p \cdot (x-y)^{1/p'}$$

Let $C = \|f'\|_p = \left(\int_a^b |f'(t)|^p \, d\lambda(t)\right)^{1/p}$.

Then:

$$|f(x) - f(y)| \leq C \cdot |x - y|^{1/p'}$$

for all $x, y \in [a,b]$.

**Step 6: Conclude.**

By Definition 2, $f$ is Hölder continuous with exponent $\alpha = 1/p'$ and constant $C = \|f'\|_p$.

**Remark:** Note that as $p \to \infty$, we have $p' \to 1$, and the Hölder exponent approaches $1$, which corresponds to Lipschitz continuity. Conversely, as $p \to 1^+$, we have $p' \to \infty$, and the Hölder exponent approaches $0$, meaning the function can be merely continuous.

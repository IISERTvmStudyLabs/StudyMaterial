## Question

Let $(X, \mathcal{M}, \mu)$ be a measure space. Suppose $\{f_n\}$ is a sequence of measurable functions such that $0 \leq f_1 \leq f_2 \leq \dots \leq f = \lim_{n \to \infty} f_n$ pointwise. Using Fatou's Lemma, prove the **Monotone Convergence Theorem (MCT)**, which states:

$$\int_X f \, d\mu = \lim_{n \to \infty} \int_X f_n \, d\mu$$

---

## Definitions and Theorems Used

### 1. Fatou’s Lemma

For any sequence $\{f_n\}$ of non-negative measurable functions:

$$\int_X \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int_X f_n \, d\mu$$

**Intuition:** This tells us that the integral of the limit (specifically the limit inferior) is "no larger" than the limit of the integrals. It allows for "loss of mass" in the limit, but not a sudden gain.

### 2. Monotonicity of the Integral

If $f$ and $g$ are measurable functions such that $f(x) \leq g(x)$ for all $x \in X$, then:

$$\int_X f \, d\mu \leq \int_X g \, d\mu$$

**Intuition:** If one function is always smaller than another, the total area (or volume) under its curve must also be smaller or equal.

---

## Solution (Step-by-Step Explanation)

To prove equality, we will show that $\int f \leq \lim \int f_n$ and $\int f \geq \lim \int f_n$ separately.

### Step 1: Establish the existence of the limit

Since the sequence $\{f_n\}$ is non-negative and monotonically increasing ($f_n \leq f_{n+1}$), the sequence of integrals $\{\int_X f_n \, d\mu\}$ is also a non-decreasing sequence of real numbers (possibly infinite) in $[0, \infty]$. Therefore, the limit $\lim_{n \to \infty} \int_X f_n \, d\mu$ exists in the extended real number system.

### Step 2: Use Monotonicity to find the upper bound

Since $f_n(x) \leq f(x)$ for all $n$ and all $x$, by the **Monotonicity of the Integral**:

$$\int_X f_n \, d\mu \leq \int_X f \, d\mu$$

Taking the limit of both sides as $n \to \infty$, we obtain:

$$\lim_{n \to \infty} \int_X f_n \, d\mu \leq \int_X f \, d\mu$$

### Step 3: Apply Fatou's Lemma to find the lower bound

Because $f_n \to f$ pointwise, we know that $\liminf_{n \to \infty} f_n = f$. Since all $f_n$ are non-negative and measurable, we can apply **Fatou's Lemma**:

$$\int_X f \, d\mu = \int_X \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int_X f_n \, d\mu$$

Since we already established in Step 1 that the limit of the integrals exists, the limit inferior is simply the limit:

$$\int_X f \, d\mu \leq \lim_{n \to \infty} \int_X f_n \, d\mu$$

### Step 4: Conclusion

We have shown two inequalities:

1. $\lim_{n \to \infty} \int_X f_n \, d\mu \leq \int_X f \, d\mu$ (from Monotonicity)
    
2. $\int_X f \, d\mu \leq \lim_{n \to \infty} \int_X f_n \, d\mu$ (from Fatou's Lemma)
    

By combining these two results, we conclude:

$$\int_X f \, d\mu = \lim_{n \to \infty} \int_X f_n \, d\mu$$

This completes the deduction of the Monotone Convergence Theorem.

___
## Question

Suppose $(\Omega, \mathcal{F}, \mu)$ is a measure space and $\{f_n\}$ is a sequence of nonnegative measurable functions. Show that the following inequality is **not** true in general:

$$\limsup_{n \to \infty} \int_{\Omega} f_n \, d\mu \leq \int_{\Omega} \limsup_{n \to \infty} f_n \, d\mu$$

**Hint:** Try to construct a sequence of functions $\{f_n\}$ such that $\int_{\Omega} f_n \, d\mu = 1$ for all $n$, but $\limsup_{n \to \infty} f_n = 0$.

---

## Definitions and Theorems Used

### 1. Lebesgue Measure on $\mathbb{R}$

The standard measure $\mu$ on the real line that assigns to each interval $[a, b]$ its length $b - a$.

**Intuition:** This is our standard way of measuring "length" or "volume" in Euclidean space.

### 2. Characteristic (Indicator) Function

The function $\chi_E$ (or $I_E$) is defined as:

$$\chi_E(x) = \begin{cases} 1 & \text{if } x \in E \\ 0 & \text{if } x \notin E \end{cases}$$

**Intuition:** It acts as a switch that is "on" inside the set $E$ and "off" everywhere else.

### 3. Integral of a Characteristic Function

For a measurable set $E$, the integral of its indicator function is simply the measure of the set:

$$\int_{\Omega} \chi_E \, d\mu = \mu(E)$$

**Intuition:** The "area" under a flat block of height 1 is simply the length of its base.

---

## Solution (Step-by-Step Explanation)

To show the inequality is not true, we only need to find one counter-example where the left side is strictly greater than the right side.

### Step 1: Define the Measure Space

Let our measure space be $(\mathbb{R}, \mathcal{B}_{\mathbb{R}}, m)$, where $m$ is the standard Lebesgue measure on the real line.

### Step 2: Construct the Sequence $\{f_n\}$

We want a sequence of functions that "escape to infinity" or "slide away" so that they are eventually zero at any fixed point, even though their area remains constant. Following the hint, let:

$$f_n(x) = \chi_{[n, n+1]}(x)$$

For each $n$, $f_n$ is a "moving block" of height 1 and width 1.

### Step 3: Calculate the Integral of $f_n$

By the **definition of the integral of a characteristic function**:

$$\int_{\mathbb{R}} f_n \, dm = \int_{\mathbb{R}} \chi_{[n, n+1]} \, dm = m([n, n+1]) = (n+1) - n = 1$$

Since every term in the sequence of integrals is 1, the limit superior is:

$$\limsup_{n \to \infty} \int_{\mathbb{R}} f_n \, dm = \limsup_{n \to \infty} (1) = 1$$

### Step 4: Determine the Pointwise Limit Superior

Now we evaluate $\limsup_{n \to \infty} f_n(x)$ for any fixed $x \in \mathbb{R}$.

- For any specific value $x$, as $n$ grows, the interval $[n, n+1]$ eventually moves to the right of $x$.
    
- Specifically, once $n > x$, then $x \notin [n, n+1]$, which means $f_n(x) = 0$.
    
- Since $f_n(x) = 0$ for all $n$ sufficiently large, the sequence $\{f_n(x)\}$ is eventually the constant sequence $\{0, 0, 0, \dots\}$.
    

Therefore, for every $x$:

$$\limsup_{n \to \infty} f_n(x) = 0$$

### Step 5: Calculate the Integral of the Limit Superior

Now we integrate the resulting function from Step 4:

$$\int_{\mathbb{R}} \left( \limsup_{n \to \infty} f_n \right) \, dm = \int_{\mathbb{R}} 0 \, dm = 0$$

### Step 6: Compare the Results

Comparing the results from Step 3 and Step 5:

- Left Side: $\limsup_{n \to \infty} \int f_n \, d\mu = 1$
    
- Right Side: $\int \limsup_{n \to \infty} f_n \, d\mu = 0$
    

Since $1 \not\leq 0$, the inequality $\limsup \int f_n \leq \int \limsup f_n$ is false.

---
## Question

Let $(\Omega, \mathcal{F}, \mu)$ be a measure space and let $f : \Omega \to \mathbb{R}$ be an integrable function. Suppose that for every measurable set $E \in \mathcal{F}$, the following condition holds:

$$\int_{E} f \, d\mu \geq 0$$

Prove that $f(\omega) \geq 0$ for almost every $\omega \in \Omega$.

---

## Definitions and Theorems Used

### 1. Integrable Function

A measurable function $f$ is called integrable if $\int_{\Omega} |f| \, d\mu < \infty$.

**Intuition:** This means the total "volume" under the absolute value of the function is finite, ensuring the integral is well-defined and doesn't result in an indeterminate form like $\infty - \infty$.

### 2. Almost Everywhere (a.e.)

A property holds almost everywhere if the set of points where the property fails to hold has measure zero.

**Intuition:** In measure theory, we don't care about what happens on "tiny" sets of measure zero; if a property is true a.e., it is effectively true for the entire space.

### 3. Countable Additivity of Measure

If $\{A_n\}$ is a countable sequence of disjoint measurable sets, then $\mu(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty} \mu(A_n)$.

**Intuition:** The total size of a collection of non-overlapping pieces is simply the sum of the sizes of each piece.

### 4. Monotonicity of the Integral

If $f \leq g$ on a set $E$, then $\int_E f \, d\mu \leq \int_E g \, d\mu$.

**Intuition:** Integrating a smaller function over the same region yields a smaller area.

---

## Solution (Step-by-Step Explanation)

We will use a proof by contradiction, focusing on the set where the function $f$ takes negative values.

### Step 1: Define the "Negative" Set

Let $A$ be the set of all points in $\Omega$ where $f(\omega)$ is strictly less than zero:

$$A = \{ \omega \in \Omega : f(\omega) < 0 \}$$

To prove that $f \geq 0$ a.e., we must show that $\mu(A) = 0$.

### Step 2: Decompose the set $A$

We can write $A$ as a countable union of sets where $f$ is bounded away from zero. For each $n \in \{1, 2, 3, \dots\}$, let:

$$A_n = \{ \omega \in \Omega : f(\omega) \leq -1/n \}$$

Note that $A_1 \subset A_2 \subset A_3 \dots$ and $\bigcup_{n=1}^{\infty} A_n = A$. Each $A_n$ is a measurable set because $f$ is a measurable function.

### Step 3: Apply the Hypothesis

By the problem statement, the integral of $f$ over _any_ measurable set is non-negative. Since each $A_n$ is measurable, we have:

$$\int_{A_n} f \, d\mu \geq 0 \quad \text{for all } n$$

### Step 4: Use Monotonicity to find a Contradiction

On the set $A_n$, we know by definition that $f(\omega) \leq -1/n$. By the **Monotonicity of the Integral**:

$$\int_{A_n} f \, d\mu \leq \int_{A_n} \left( -\frac{1}{n} \right) \, d\mu = -\frac{1}{n} \mu(A_n)$$

Combining this with our result from Step 3, we get:

$$0 \leq \int_{A_n} f \, d\mu \leq -\frac{1}{n} \mu(A_n)$$

This implies $0 \leq -\frac{1}{n} \mu(A_n)$. Since $1/n$ is positive, the only way this inequality can hold is if:

$$\mu(A_n) = 0 \quad \text{for every } n$$

### Step 5: Conclude using Countable Subadditivity

By the properties of measures (specifically **Countable Subadditivity**), the measure of the union is bounded by the sum of the measures:

$$\mu(A) = \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \leq \sum_{n=1}^{\infty} \mu(A_n)$$

Since we found in Step 4 that $\mu(A_n) = 0$ for every $n$, the sum is $0 + 0 + 0 \dots = 0$. Therefore:

$$\mu(A) = 0$$

### Final Conclusion

Since the set $A = \{ \omega : f(\omega) < 0 \}$ has measure zero, we conclude that $f(\omega) \geq 0$ for almost every $\omega \in \Omega$.

___
## Question

Prove that the function $f: \mathbb{R} \to \mathbb{R}$ defined by

$$f(x) = \begin{cases} \frac{1}{x^\alpha}, & x \geq 1 \\ 0, & x < 1 \end{cases}$$

is integrable on $\mathbb{R}$ with respect to the Lebesgue measure if and only if $\alpha > 1$.

**(Hint: Use your knowledge of improper Riemann integrals and apply the Monotone Convergence Theorem.)**

---

## Definitions and Theorems Used

### 1. Lebesgue Integrability

A non-negative measurable function $f$ is integrable if its Lebesgue integral is finite: $\int_{\mathbb{R}} f \, dx < \infty$.

**Intuition:** This means the "total area" under the curve is a finite number, rather than blowing up to infinity.

### 2. Monotone Convergence Theorem (MCT)

If $\{f_n\}$ is a sequence of non-negative measurable functions such that $f_n \uparrow f$ pointwise (meaning $f_n(x) \leq f_{n+1}(x)$ and $\lim_{n \to \infty} f_n(x) = f(x)$), then:

$$\lim_{n \to \infty} \int f_n = \int f$$

**Intuition:** If you have a growing sequence of shapes that fill out a larger shape, the limit of their areas is exactly the area of that larger shape.

### 3. Relationship with the Riemann Integral

If $f$ is Riemann integrable on a closed interval $[a, b]$, it is also Lebesgue integrable on that interval, and the two integrals are equal.

**Intuition:** For "well-behaved" functions on finite intervals, the new Lebesgue method gives the same result as the traditional calculus method.

---

## Solution (Step-by-Step Explanation)

### Step 1: Define a sequence of truncated functions

To apply the Monotone Convergence Theorem, we define a sequence of functions $\{f_n\}$ that are non-zero only on a finite interval. For each $n \in \{1, 2, 3, \dots\}$, let:

$$f_n(x) = f(x) \cdot \chi_{[1, n]}(x) = \begin{cases} \frac{1}{x^\alpha}, & 1 \leq x \leq n \\ 0, & \text{otherwise} \end{cases}$$

### Step 2: Verify the hypotheses for MCT

- **Non-negativity:** Since $x \geq 1$ and $n \geq 1$, $f_n(x) \geq 0$ for all $x$.
    
- **Monotonicity:** As $n$ increases, the interval $[1, n]$ expands. Thus, $f_n(x) \leq f_{n+1}(x)$ for all $x$.
    
- **Pointwise Convergence:** For any fixed $x$, if we choose $n > x$, then $f_n(x) = f(x)$. Therefore, $\lim_{n \to \infty} f_n(x) = f(x)$.
    

### Step 3: Compute the integral of the sequence terms

For each $n$, $f_n$ is a bounded function on a finite interval $[1, n]$. Therefore, its Lebesgue integral is equal to its Riemann integral:

$$\int_{\mathbb{R}} f_n \, dx = \int_{1}^{n} \frac{1}{x^\alpha} \, dx$$

Using the fundamental theorem of calculus:

1. **If $\alpha = 1$:** $\int_{1}^{n} \frac{1}{x} \, dx = [\ln(x)]_{1}^{n} = \ln(n)$.
    
2. **If $\alpha \neq 1$:** $\int_{1}^{n} x^{-\alpha} \, dx = \left[ \frac{x^{1-\alpha}}{1-\alpha} \right]_{1}^{n} = \frac{n^{1-\alpha} - 1}{1-\alpha}$.
    

### Step 4: Apply the Monotone Convergence Theorem

By the **Monotone Convergence Theorem**, the integral of the limit is the limit of the integrals:

$$\int_{\mathbb{R}} f \, dx = \lim_{n \to \infty} \int_{\mathbb{R}} f_n \, dx$$

### Step 5: Evaluate the limit for different values of $\alpha$

- **Case 1: $\alpha > 1$**
    
    In this case, $1-\alpha$ is negative. As $n \to \infty$, $n^{1-\alpha} \to 0$.
    
    The limit becomes: $\lim_{n \to \infty} \frac{n^{1-\alpha} - 1}{1-\alpha} = \frac{-1}{1-\alpha} = \frac{1}{\alpha - 1}$.
    
    Since this is a finite number, **$f$ is integrable**.
    
- **Case 2: $\alpha = 1$**
    
    The limit is $\lim_{n \to \infty} \ln(n) = \infty$.
    
    **$f$ is not integrable**.
    
- **Case 3: $\alpha < 1$**
    
    In this case, $1-\alpha$ is positive. As $n \to \infty$, $n^{1-\alpha} \to \infty$.
    
    **$f$ is not integrable**.
    

### Conclusion

The integral $\int_{\mathbb{R}} f \, dx$ is finite if and only if $\alpha > 1$. Thus, $f$ is integrable on $\mathbb{R}$ if and only if $\alpha > 1$.

___
## Question

Prove that the function $f: \mathbb{R} \to \mathbb{R}$ defined by

$$f(x) = \begin{cases} \frac{1}{x^\alpha}, & 0 < x \leq 1 \\ 0, & x \notin (0, 1] \end{cases}$$

is integrable on $\mathbb{R}$ (with respect to the Lebesgue measure) if and only if $\alpha < 1$.

---

## Definitions and Theorems Used

### 1. Lebesgue Integrability

A non-negative measurable function $f$ is integrable if its Lebesgue integral over the space is finite: $\int f \, d\mu < \infty$.

**Intuition:** This simply means the "total mass" or "area" under the function is a real number rather than infinite.

### 2. Monotone Convergence Theorem (MCT)

If $\{f_n\}$ is a sequence of non-negative measurable functions such that $f_n(x) \uparrow f(x)$ pointwise for almost every $x$, then $\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu$.

**Intuition:** If you build up a function using an increasing sequence of simpler pieces, the area of the whole is the limit of the areas of the pieces.

### 3. Relation between Riemann and Lebesgue Integrals

If a function $f$ is Riemann integrable on a closed interval $[a, b]$, then it is Lebesgue integrable on that interval, and the two integrals coincide.

**Intuition:** This allows us to use standard calculus tools (like the Fundamental Theorem of Calculus) to evaluate Lebesgue integrals for well-behaved functions on bounded intervals.

---

## Solution (Step-by-Step Explanation)

### Step 1: Handle the singularity with a sequence

The function $f(x)$ has a potential singularity as $x \to 0^+$. To use the Monotone Convergence Theorem, we define a sequence of functions $\{f_n\}$ that avoids this singularity by "cutting off" the function near zero. For $n \geq 2$, let:

$$f_n(x) = \begin{cases} \frac{1}{x^\alpha}, & \frac{1}{n} \leq x \leq 1 \\ 0, & \text{otherwise} \end{cases}$$

### Step 2: Verify the hypotheses of the MCT

- **Non-negativity:** Each $f_n(x) \geq 0$ because $x > 0$.
    
- **Monotonicity:** As $n$ increases, the interval $[\frac{1}{n}, 1]$ grows larger. Thus, $f_n(x) \leq f_{n+1}(x)$ for all $x$.
    
- **Pointwise Convergence:** For any fixed $x \in (0, 1]$, there exists an $n$ large enough such that $\frac{1}{n} < x$. For all such $n$, $f_n(x) = f(x)$. Thus, $f_n \to f$ pointwise on $(0, 1]$. On all other points, $f_n$ and $f$ are both $0$.
    

### Step 3: Compute the integral of the terms

For a fixed $n$, $f_n$ is continuous on the closed interval $[\frac{1}{n}, 1]$ and zero elsewhere. By the **relation between Riemann and Lebesgue integrals**, we can use standard calculus:

1. **If $\alpha = 1$:** $\int_{\mathbb{R}} f_n \, dx = \int_{1/n}^{1} \frac{1}{x} \, dx = [\ln x]_{1/n}^{1} = \ln(1) - \ln(1/n) = \ln(n)$.
    
2. **If $\alpha \neq 1$:** $\int_{\mathbb{R}} f_n \, dx = \int_{1/n}^{1} x^{-\alpha} \, dx = \left[ \frac{x^{1-\alpha}}{1-\alpha} \right]_{1/n}^{1} = \frac{1 - (1/n)^{1-\alpha}}{1-\alpha}$.
    

### Step 4: Apply the Monotone Convergence Theorem

**By the Monotone Convergence Theorem**, the integral of the limit is the limit of the integrals:

$$\int_{\mathbb{R}} f \, dx = \lim_{n \to \infty} \int_{\mathbb{R}} f_n \, dx$$

### Step 5: Evaluate the limit based on $\alpha$

- **Case 1: $\alpha < 1$**
    
    Here, $1-\alpha$ is a positive power. As $n \to \infty$, the term $(1/n)^{1-\alpha} \to 0$.
    
    The limit is $\frac{1}{1-\alpha}$, which is finite. Thus, **$f$ is integrable**.
    
    ]
    
- **Case 2: $\alpha = 1$**
    
    The limit is $\lim_{n \to \infty} \ln(n) = \infty$. Thus, **$f$ is not integrable**.
    
- **Case 3: $\alpha > 1$**
    
    Here, $1-\alpha$ is negative. Let $p = \alpha - 1 > 0$. The expression becomes $\frac{1 - n^p}{1-\alpha}$.
    
    As $n \to \infty$, $n^p \to \infty$, and since the denominator is negative, the whole expression goes to $+\infty$. Thus, **$f$ is not integrable**.
    

### Conclusion

We have shown that $\int_{\mathbb{R}} f \, dx$ is finite if and only if $\alpha < 1$.

____
## Question

Suppose $(\Omega, \mathcal{F}, \mu)$ is a **finite measure space**, meaning $\mu(\Omega) < \infty$.

1. Prove that every bounded measurable function $f: \Omega \to \mathbb{R}$ is integrable.
    
2. Determine if this statement remains true for **infinite measure spaces** where $\mu(\Omega) = \infty$.
    

---

## Definitions and Theorems Used

### 1. Bounded Function

A function $f$ is bounded if there exists a real number $M \geq 0$ such that $|f(\omega)| \leq M$ for all $\omega \in \Omega$.

**Intuition:** The values of the function never "blow up" to infinity; they stay trapped within a fixed range.

### 2. Integrable Function

A measurable function $f$ is integrable if the integral of its absolute value is finite: $\int_{\Omega} |f| \, d\mu < \infty$.

**Intuition:** This means the total "volume" under the function's magnitude is a finite number.

### 3. Monotonicity of the Integral

If $|f| \leq g$ for all $\omega$, then $\int_{\Omega} |f| \, d\mu \leq \int_{\Omega} g \, d\mu$.

**Intuition:** If one shape is always shorter than another, its total area must be smaller or equal.

### 4. Integral of a Constant

For a constant $c \geq 0$, the integral $\int_{\Omega} c \, d\mu = c \cdot \mu(\Omega)$.

**Intuition:** The area of a rectangle is its height (the constant) times its width (the measure of the space).

---

## Solution (Step-by-Step Explanation)

### Part 1: Proof for Finite Measure Spaces

**Step 1: Use the definition of boundedness**

By the **definition of a bounded function**, there exists a constant $M \geq 0$ such that for all $\omega \in \Omega$:

$$|f(\omega)| \leq M$$

**Step 2: Apply the Monotonicity of the Integral**

Since both $|f|$ and the constant function $M$ are measurable, we can integrate both sides of the inequality over the entire space $\Omega$:

$$\int_{\Omega} |f| \, d\mu \leq \int_{\Omega} M \, d\mu$$

**Step 3: Evaluate the integral of the constant**

By the **definition of the integral of a constant function**:

$$\int_{\Omega} M \, d\mu = M \cdot \mu(\Omega)$$

**Step 4: Use the finite measure hypothesis**

We are given that $\Omega$ is a **finite measure space**, so $\mu(\Omega) < \infty$. Since $M$ is a finite real number, the product $M \cdot \mu(\Omega)$ is also finite. Therefore:

$$\int_{\Omega} |f| \, d\mu \leq M \cdot \mu(\Omega) < \infty$$

By the **definition of an integrable function**, $f$ is integrable.

---

### Part 2: Analysis for Infinite Measure Spaces

**Step 5: Test the statement for infinite measure**

The statement is **not true** for infinite measure spaces. If $\mu(\Omega) = \infty$, a bounded function can still fail to be integrable if it doesn't "taper off" fast enough (or at all).

**Step 6: Provide a counter-example**

Consider the real line $\mathbb{R}$ with the standard Lebesgue measure $m$. Here, $m(\mathbb{R}) = \infty$.

Let $f(x) = 1$ for all $x \in \mathbb{R}$.

1. $f$ is **bounded** because $|f(x)| \leq 1$ for all $x$.
    
2. However, calculating the integral:
    
    $$\int_{\mathbb{R}} |f| \, dm = \int_{\mathbb{R}} 1 \, dm = m(\mathbb{R}) = \infty$$
    
    Since the integral is infinite, $f$ is **not integrable**.
    

**Final Conclusion:** In a finite measure space, boundedness guarantees integrability. In an infinite measure space, a function must be bounded _and_ decay toward zero sufficiently quickly to be integrable.

___
## Question

Determine all $\alpha \in \mathbb{R}$ such that the following integral is finite:

$$\int_{(0, \infty)} e^{-x} x^{\alpha} \, d\lambda(x) < \infty$$

where $\lambda$ denotes the Lebesgue measure on the real line.

**(Hint: Decompose the integral suitably. This should remind you of the Gamma function.)**

---

## Definitions and Theorems Used

### 1. Lebesgue Integrability

A non-negative measurable function $f$ is integrable on a set $E$ if $\int_E f \, d\lambda < \infty$.

**Intuition:** This means the total area under the curve is finite.

### 2. Linearity of the Integral

For a measurable set $E = A \cup B$ where $A \cap B = \emptyset$, the integral satisfies $\int_E f = \int_A f + \int_B f$.

**Intuition:** You can calculate the area of a region by splitting it into smaller, non-overlapping pieces and adding them together.

### 3. Comparison Test for Integrals

If $0 \leq f(x) \leq g(x)$ for all $x$, and $\int g < \infty$, then $\int f < \infty$.

**Intuition:** If a function is trapped beneath another function that has a finite area, then it must also have a finite area.

### 4. Convergence of Power Functions

As established in previous exercises, the integral $\int_{(0, 1]} x^{\alpha} \, dx$ is finite if and only if $\alpha > -1$.

**Intuition:** Near zero, the function $x^\alpha$ blows up too quickly to have a finite area if $\alpha$ is too small (specifically -1 or less).

---

## Solution (Step-by-Step Explanation)

### Step 1: Decompose the Integral

To analyze the convergence, we split the domain $(0, \infty)$ into two parts: the region near the origin and the region at infinity.

$$\int_{(0, \infty)} e^{-x} x^{\alpha} \, dx = \int_{(0, 1]} e^{-x} x^{\alpha} \, dx + \int_{(1, \infty)} e^{-x} x^{\alpha} \, dx$$

For the original integral to be finite, both of these smaller integrals must be finite.

### Step 2: Analyze the integral on $(1, \infty)$

In the region $x \geq 1$, the exponential decay of $e^{-x}$ is much stronger than any polynomial growth of $x^\alpha$.

- For any $\alpha \in \mathbb{R}$, we can find a constant $C$ such that $e^{-x} x^\alpha \leq C e^{-x/2}$ for all $x \geq 1$.
    
- Since the integral $\int_1^\infty e^{-x/2} \, dx$ is a basic convergent improper Riemann integral (and thus a convergent Lebesgue integral), the integral over $(1, \infty)$ is **finite for all $\alpha \in \mathbb{R}$** by the **Comparison Test**.
    

### Step 3: Analyze the integral on $(0, 1]$

In this region, the exponential term $e^{-x}$ stays between $e^{-1}$ and $1$. Specifically, $e^{-1} \leq e^{-x} \leq 1$ for all $x \in (0, 1]$.

By the **Monotonicity of the Integral**, we have:

$$e^{-1} \int_0^1 x^\alpha \, dx \leq \int_0^1 e^{-x} x^\alpha \, dx \leq \int_0^1 x^\alpha \, dx$$

This tells us that the integral $\int_0^1 e^{-x} x^\alpha \, dx$ converges if and only if $\int_0^1 x^\alpha \, dx$ converges.

### Step 4: Apply the convergence condition for power functions

From our previous definitions, the integral $\int_0^1 x^\alpha \, dx$ is finite if and only if $\alpha > -1$.

- If $\alpha \leq -1$, the integral near the origin blows up to infinity.
    
- If $\alpha > -1$, the integral near the origin is a finite real number.
    

### Step 5: Combine the conditions

From Step 2, the "tail" of the integral $(1, \infty)$ is always finite.

From Step 4, the "head" of the integral $(0, 1]$ is finite if and only if $\alpha > -1$.

**Final Conclusion:**

The integral $\int_{(0, \infty)} e^{-x} x^{\alpha} \, d\lambda(x)$ is finite if and only if $\alpha > -1$.

(Note: In the standard definition of the Gamma function, $\Gamma(z) = \int_0^\infty e^{-t} t^{z-1} \, dt$, which is why the Gamma function is defined for $Re(z) > 0$).

___
## Question

Suppose $f: \mathbb{R} \to \mathbb{R}$ is a Lebesgue measurable function.

1. If $f$ is integrable, is $xf$ necessarily integrable?
    
2. If $xf$ is integrable, is $f$ necessarily integrable?
    
    _(Note: $(xf)(x) = xf(x)$)_
    

---

## Definitions and Theorems Used

### 1. Lebesgue Integrability

A measurable function $f$ is integrable on $\mathbb{R}$ if $\int_{\mathbb{R}} |f| \, d\lambda < \infty$.

**Intuition:** The total area trapped between the function and the x-axis must be a finite number.

### 2. Integrability of Power Functions

As established in previous results:

- The function $x^p$ is integrable near infinity ($x \geq 1$) if and only if $p < -1$.
    
- The function $x^p$ is integrable near the origin ($0 < x \leq 1$) if and only if $p > -1$.
    
    **Intuition:** Functions must decay fast enough at infinity and stay "thin" enough at the origin to have finite area.
    

### 3. Comparison Test

If $|f| \leq |g|$ and $g$ is integrable, then $f$ is integrable.

**Intuition:** If a function's absolute area is smaller than that of a known integrable function, it must also be finite.

---

## Solution (Step-by-Step Explanation)

### Part 1: Does $f$ integrable imply $xf$ integrable?

**Step 1: Test the hypothesis with a counter-example at infinity.**

We need a function that is integrable but decays slowly enough that multiplying by $x$ makes the "tail" at infinity too large.

Consider $f(x) = \frac{1}{x^2}$ for $x \geq 1$ and $0$ otherwise.

- By the **integrability of power functions**, $f$ is integrable because $\alpha = 2 > 1$.
    

**Step 2: Check the integrability of $xf$.**

Now, multiply by $x$:

$$xf(x) = x \cdot \frac{1}{x^2} = \frac{1}{x} \quad \text{for } x \geq 1$$

Calculating the integral:

$$\int_{1}^{\infty} \frac{1}{x} \, dx = \lim_{t \to \infty} [\ln x]_1^t = \infty$$

**Conclusion:** No. If $f$ is integrable, $xf$ is **not** necessarily integrable. The factor of $x$ can "lift" a decaying tail just enough to make the integral diverge at infinity.

---

### Part 2: Does $xf$ integrable imply $f$ integrable?

**Step 3: Test the hypothesis with a counter-example near the origin.**

We need a function such that $xf(x)$ behaves well at the origin, but $f(x)$ itself blows up too quickly.

Consider $f(x) = \frac{1}{x^2}$ for $0 < x \leq 1$ and $0$ otherwise.

**Step 4: Check the integrability of $xf$.**

Multiply by $x$:

$$xf(x) = x \cdot \frac{1}{x^2} = \frac{1}{x} \quad \text{for } 0 < x \leq 1$$

We know from our **integrability of power functions** definitions that $\frac{1}{x}$ is not integrable on $(0, 1]$. We need $xf$ to be integrable, so let's adjust the power.

Let $f(x) = \frac{1}{x^{1.5}}$ for $0 < x \leq 1$.

Then $xf(x) = \frac{x}{x^{1.5}} = \frac{1}{x^{0.5}}$.

- **Is $xf$ integrable?** Yes, because $\alpha = 0.5 < 1$.
    
- **Is $f$ integrable?** No, because $\alpha = 1.5 > 1$.
    

**Conclusion:** No. If $xf$ is integrable, $f$ is **not** necessarily integrable. Near the origin, the factor of $x$ can "tame" a singularity, making the product integrable even if the original function was not.

---

**Summary:** Neither implication holds in general. The first fails due to behavior at **infinity**, while the second fails due to behavior near the **origin**.

___
## Question

Suppose $f : \mathbb{R} \to \mathbb{R}$ is an integrable function such that the function $(xf)(x) = xf(x)$ is also integrable. Prove that the function $F : \mathbb{R} \to \mathbb{R}$ defined by

$$F(y) = \int_{\mathbb{R}} f(x) \sin(xy) \, dx$$

is differentiable.

**(Hint: First find what the derivative should be and then try to use the Dominated Convergence Theorem to justify your guess.)**

---

## Definitions and Theorems Used

### 1. Lebesgue Dominated Convergence Theorem (DCT)

Suppose $\{g_n\}$ is a sequence of measurable functions such that $g_n \to g$ pointwise almost everywhere. If there exists an integrable function $h$ such that $|g_n| \leq h$ for all $n$, then:

$$\lim_{n \to \infty} \int g_n = \int g$$

**Intuition:** If a sequence of functions converges to a limit and they are all "trapped" under a single finite-area "umbrella" (the function $h$), then the total area under the sequence converges to the area under the limit function.

### 2. Mean Value Theorem (MVT)

For a differentiable function $h$, and any two points $y$ and $y+k$, there exists a point $c$ between them such that:

$$\frac{h(y+k) - h(y)}{k} = h'(c)$$

**Intuition:** The average slope between two points on a smooth curve is exactly equal to the actual slope at some intermediate point.

### 3. Basic Inequality for Sine

For any $\theta \in \mathbb{R}$, $|\sin(\theta)| \leq |\theta|$. Additionally, $|\cos(\theta)| \leq 1$.

**Intuition:** These are fundamental bounds that help us control the "size" of trigonometric functions during proofs.

---

## Solution (Step-by-Step Explanation)

### Step 1: Formalize the derivative using limits

To prove $F(y)$ is differentiable, we examine the limit of the difference quotient as $k \to 0$:

$$\frac{F(y+k) - F(y)}{k} = \int_{\mathbb{R}} f(x) \left[ \frac{\sin(x(y+k)) - \sin(xy)}{k} \right] \, dx$$

We want to show that as $k \to 0$, this integral converges to $\int_{\mathbb{R}} xf(x) \cos(xy) \, dx$.

### Step 2: Identify the pointwise limit

Let $g_k(x) = f(x) \frac{\sin(x(y+k)) - \sin(xy)}{k}$.

For a fixed $x$, as $k \to 0$, the term in the brackets is the definition of the derivative of $h(y) = \sin(xy)$ with respect to $y$.

$$\frac{d}{dy} \sin(xy) = x \cos(xy)$$

Thus, $g_k(x) \to f(x) \cdot x \cos(xy)$ pointwise for every $x$.

### Step 3: Find an integrable dominating function

To apply the **Dominated Convergence Theorem**, we need to bound $|g_k(x)|$ by an integrable function $h(x)$ that does not depend on $k$.

By the **Mean Value Theorem** applied to the function $h(t) = \sin(xt)$, there exists some $c$ between $y$ and $y+k$ such that:

$$\frac{\sin(x(y+k)) - \sin(xy)}{k} = \frac{d}{dt} \sin(xt) \bigg|_{t=c} = x \cos(xc)$$

Taking absolute values and using the fact that $|\cos(\theta)| \leq 1$:

$$\left| \frac{\sin(x(y+k)) - \sin(xy)}{k} \right| = |x \cos(xc)| \leq |x|$$

Therefore, we have our bound:

$$|g_k(x)| = |f(x)| \cdot \left| \frac{\sin(x(y+k)) - \sin(xy)}{k} \right| \leq |xf(x)|$$

### Step 4: Verify integrability of the dominator

We are explicitly given in the problem statement that $xf$ is integrable. Thus, $h(x) = |xf(x)|$ is a valid dominating function because $\int_{\mathbb{R}} |xf(x)| \, dx < \infty$.

### Step 5: Apply the Dominated Convergence Theorem

Since $g_k(x) \to xf(x)\cos(xy)$ pointwise and $|g_k(x)| \leq |xf(x)|$ with $|xf|$ integrable, we apply **DCT**:

$$\lim_{k \to 0} \frac{F(y+k) - F(y)}{k} = \int_{\mathbb{R}} \lim_{k \to 0} g_k(x) \, dx = \int_{\mathbb{R}} xf(x) \cos(xy) \, dx$$

### Conclusion

The limit of the difference quotient exists for every $y$, which means $F(y)$ is differentiable. The derivative is given by:

$$F'(y) = \int_{\mathbb{R}} xf(x) \cos(xy) \, dx$$

____
## Question

Suppose $f : \mathbb{R} \to \mathbb{R}$ is an integrable function such that $f(x) = 0$ for $|x| > 1$. Evaluate the following limit:

$$\lim_{n \to \infty} \int_{[0, 1]} x^n f(x) \, d\lambda(x)$$

where $\lambda$ denotes the Lebesgue measure on the real line.

---

## Definitions and Theorems Used

### 1. Lebesgue Dominated Convergence Theorem (DCT)

Suppose $\{g_n\}$ is a sequence of measurable functions that converges pointwise to $g$ almost everywhere. If there exists an integrable function $h$ such that $|g_n| \leq h$ for all $n$, then:

$$\lim_{n \to \infty} \int g_n \, d\mu = \int g \, d\mu$$

**Intuition:** If a sequence of functions stays under a fixed "umbrella" of finite area, the limit of their individual areas is simply the area of their pointwise limit.

### 2. Lebesgue Integrability

A measurable function $f$ is integrable if $\int |f| \, d\lambda < \infty$.

**Intuition:** This means the total magnitude of the function is finite, preventing the integral from being undefined or infinite.

### 3. Pointwise Convergence of $x^n$

For $x \in [0, 1]$, the sequence $x^n$ converges to $0$ if $0 \leq x < 1$, and converges to $1$ if $x = 1$.

**Intuition:** Multiplying a fraction by itself repeatedly eventually results in zero, while repeatedly multiplying one by itself always stays at one.

---

## Solution (Step-by-Step Explanation)

### Step 1: Identify the sequence of functions

Let $g_n(x) = x^n f(x)$. We are interested in the behavior of this sequence on the interval of integration, $x \in [0, 1]$.

### Step 2: Determine the pointwise limit

As $n \to \infty$:

- For $x \in [0, 1)$, $x^n \to 0$, so $g_n(x) = x^n f(x) \to 0$.
    
- For $x = 1$, $x^n \to 1$, so $g_n(1) \to f(1)$.
    

Since the single point $x=1$ has a Lebesgue measure of zero ($\lambda(\{1\}) = 0$), the sequence $g_n(x)$ converges to the zero function almost everywhere on $[0, 1]$.

$$\lim_{n \to \infty} g_n(x) = 0 \quad \text{a.e.}$$

### Step 3: Find a dominating function

To use the **Dominated Convergence Theorem**, we must find an integrable function $h(x)$ such that $|g_n(x)| \leq h(x)$.

For $x \in [0, 1]$, we know that $|x^n| \leq 1$. Therefore:

$$|g_n(x)| = |x^n f(x)| = |x^n| \cdot |f(x)| \leq |f(x)|$$

We are given that $f$ is an integrable function. Thus, $h(x) = |f(x)|$ serves as our dominating function.

### Step 4: Verify the hypotheses for DCT

1. **Measurability:** Each $g_n$ is measurable because it is the product of $x^n$ (continuous) and $f$ (measurable).
    
2. **Pointwise limit:** $g_n \to 0$ almost everywhere on $[0, 1]$.
    
3. **Integrable dominator:** $|g_n| \leq |f|$ and $|f|$ is integrable.
    

### Step 5: Apply the Dominated Convergence Theorem

By the **Dominated Convergence Theorem**, we can move the limit inside the integral:

$$\lim_{n \to \infty} \int_{[0, 1]} x^n f(x) \, d\lambda(x) = \int_{[0, 1]} \lim_{n \to \infty} (x^n f(x)) \, d\lambda(x)$$

Substituting the pointwise limit found in Step 2:

$$\int_{[0, 1]} 0 \, d\lambda(x) = 0$$

### Conclusion

The value of the limit is $0$.

___
## Question

Evaluate the following sum:

$$\sum_{n=0}^{\infty} \left( \int_{[0, \pi/2]} (1 - \sqrt{\sin x})^n \cos x \, d\lambda(x) \right)$$

where $\lambda$ denotes the Lebesgue measure on the real line.

**(Hint: Interchange the sum and the integral.)**

---

## Definitions and Theorems Used

### 1. Tonelli’s Theorem for Series (or Monotone Convergence Theorem for Series)

If $\{f_n\}$ is a sequence of non-negative measurable functions, then:

$$\sum_{n=0}^{\infty} \int f_n \, d\mu = \int \left( \sum_{n=0}^{\infty} f_n \right) \, d\mu$$

**Intuition:** For non-negative terms, the order in which you accumulate "mass" (integrating then summing, or summing then integrating) does not change the total result.

### 2. Geometric Series

For a real number $r$ such that $|r| < 1$, the infinite sum is given by:

$$\sum_{n=0}^{\infty} r^n = \frac{1}{1 - r}$$

**Intuition:** This formula allows us to collapse an infinite process of addition into a single fraction, provided the terms shrink fast enough.

---

## Solution (Step-by-Step Explanation)

### Step 1: Check for non-negativity

To interchange the sum and the integral safely, we check the sign of the integrand.

- On the interval $[0, \pi/2]$, $\sin x$ ranges from $0$ to $1$, so $0 \leq \sqrt{\sin x} \leq 1$.
    
- Consequently, $(1 - \sqrt{\sin x})$ is between $0$ and $1$, making $(1 - \sqrt{\sin x})^n \geq 0$.
    
- Also, $\cos x \geq 0$ on this interval.
    
    Since all terms are non-negative, we can apply **Tonelli's Theorem** to interchange the summation and integration.
    

### Step 2: Interchange the sum and integral

By **Tonelli's Theorem for Series**, we rewrite the expression as:

$$\int_{[0, \pi/2]} \left( \sum_{n=0}^{\infty} (1 - \sqrt{\sin x})^n \cos x \right) \, d\lambda(x)$$

Since $\cos x$ does not depend on $n$, we factor it out of the sum:

$$\int_{[0, \pi/2]} \cos x \left( \sum_{n=0}^{\infty} (1 - \sqrt{\sin x})^n \right) \, d\lambda(x)$$

### Step 3: Evaluate the inner sum

The inner sum is a **Geometric Series** with ratio $r = (1 - \sqrt{\sin x})$.

- At $x = 0$, $r = 1$ and the sum diverges, but a single point has measure zero and does not affect the integral.
    
- For $x \in (0, \pi/2]$, we have $0 \leq r < 1$.
    
    Applying the geometric series formula:
    
    $$\sum_{n=0}^{\infty} (1 - \sqrt{\sin x})^n = \frac{1}{1 - (1 - \sqrt{\sin x})} = \frac{1}{\sqrt{\sin x}}$$
    

### Step 4: Substitute back and simplify

The integral now becomes:

$$\int_{0}^{\pi/2} \frac{\cos x}{\sqrt{\sin x}} \, dx$$

]

### Step 5: Solve the integral using substitution

We perform a $u$-substitution to evaluate the integral.

Let $u = \sin x$. Then $du = \cos x \, dx$.

- When $x = 0$, $u = 0$.
    
- When $x = \pi/2$, $u = 1$.
    
    The integral transforms to:
    
    $$\int_{0}^{1} \frac{1}{\sqrt{u}} \, du = \int_{0}^{1} u^{-1/2} \, du$$
    

### Step 6: Final Calculation

Using the power rule for integration:

$$\left[ \frac{u^{1/2}}{1/2} \right]_{0}^{1} = [2\sqrt{u}]_{0}^{1} = 2(1) - 2(0) = 2$$

### Conclusion

The value of the infinite sum of integrals is $2$.

___
## Question

Evaluate the following limit:

$$\lim_{n \to \infty} \int_{(0, 1]} \frac{n \cos x}{1 + n^2 x^{3/2}} \, d\lambda(x)$$

where $\lambda$ denotes the Lebesgue measure on the real line.

---

## Definitions and Theorems Used

### 1. Lebesgue Dominated Convergence Theorem (DCT)

Suppose $\{f_n\}$ is a sequence of measurable functions such that $f_n \to f$ pointwise almost everywhere. If there exists an integrable function $g$ such that $|f_n| \leq g$ for all $n$, then:

$$\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu$$

**Intuition:** If a sequence of functions converges to a limit and they are all "trapped" under one fixed shape with a finite area, then the total area under the sequence converges to the area under the limit.

### 2. Basic Calculus Inequalities

For any real numbers $a, b > 0$, we have $1 + n^2 x^{3/2} \geq 2 \sqrt{n^2 x^{3/2}} = 2n x^{3/4}$ by the Arithmetic Mean-Geometric Mean (AM-GM) inequality. Additionally, $|\cos x| \leq 1$.

**Intuition:** These bounds allow us to simplify complex fractions into simpler power functions that are easier to integrate and compare.

### 3. Integrability of Power Functions

The function $x^p$ is integrable on $(0, 1]$ if and only if $p > -1$.

**Intuition:** Near zero, a function like $1/x^2$ blows up too fast to have a finite area, but $1/\sqrt{x}$ stays thin enough that its area is finite.

---

## Solution (Step-by-Step Explanation)

### Step 1: Analyze Pointwise Convergence

Let $f_n(x) = \frac{n \cos x}{1 + n^2 x^{3/2}}$. For any fixed $x \in (0, 1]$:

- The numerator grows like $n$.
    
- The denominator grows like $n^2$.
    
    As $n \to \infty$, the $n^2$ term in the denominator dominates the $n$ in the numerator. Therefore:
    
    $$\lim_{n \to \infty} f_n(x) = 0 \quad \text{for all } x \in (0, 1]$$
    

### Step 2: Find a Dominating Function

To use the **Dominated Convergence Theorem**, we must find a single integrable function $g(x)$ such that $|f_n(x)| \leq g(x)$ for all $n$.

We use the inequality $1 + n^2 x^{3/2} \geq 2n x^{3/4}$ (from AM-GM) and the fact that $|\cos x| \leq 1$:

$$|f_n(x)| = \left| \frac{n \cos x}{1 + n^2 x^{3/2}} \right| \leq \frac{n}{2n x^{3/4}} = \frac{1}{2x^{3/4}}$$

Let $g(x) = \frac{1}{2x^{3/4}}$.

### Step 3: Check Integrability of the Dominator

We check if $g(x)$ is integrable on $(0, 1]$:

$$\int_{(0, 1]} \frac{1}{2x^{3/4}} \, dx = \frac{1}{2} \int_0^1 x^{-3/4} \, dx$$

By the **Integrability of Power Functions**, since $p = -3/4 > -1$, this integral is finite. Specifically:

$$\frac{1}{2} \left[ \frac{x^{1/4}}{1/4} \right]_0^1 = \frac{1}{2} (4) = 2 < \infty$$

### Step 4: Apply the Dominated Convergence Theorem

Since $f_n \to 0$ pointwise and is dominated by the integrable function $g(x) = \frac{1}{2}x^{-3/4}$, we apply the **Dominated Convergence Theorem**:

$$\lim_{n \to \infty} \int_{(0, 1]} f_n(x) \, d\lambda(x) = \int_{(0, 1]} \lim_{n \to \infty} f_n(x) \, d\lambda(x)$$

Substituting the pointwise limit from Step 1:

$$\int_{(0, 1]} 0 \, d\lambda(x) = 0$$

### Conclusion

The value of the limit is $0$.
____
## Question

Fix constants $0 < a < b$ and define a sequence of functions $\{f_n\}$ on $[0, \infty)$ by:

$$f_n(x) = ae^{-nax} - be^{-nbx}, \quad x \in [0, \infty)$$

Prove the following three statements:

(a) $\sum_{n=1}^{\infty} \int_{[0, \infty)} |f_n| \, d\lambda = \infty$.

(b) $\sum_{n=1}^{\infty} \int_{[0, \infty)} f_n \, d\lambda = 0$.

(c) $\int_{[0, \infty)} \sum_{n=1}^{\infty} f_n \, d\lambda$ does not exist.

---

## Definitions and Theorems Used

### 1. Lebesgue Integrability

A measurable function $f$ is integrable if $\int |f| \, d\lambda < \infty$. If an integral is written as $\int f \, d\lambda$, it is generally understood that the function must be integrable for the value to exist.

**Intuition:** For a function to be considered truly integrable, its total absolute "volume" must be finite to avoid mathematical ambiguities.

### 2. Tonelli’s Theorem for Series

For any sequence of non-negative measurable functions $\{g_n\}$, the sum of the integrals equals the integral of the sum: $\sum \int g_n = \int \sum g_n$.

**Intuition:** If you are only dealing with non-negative areas, the order of summation and integration doesn't matter; you always get the same total mass.

### 3. Fubini’s Theorem (Series form)

If $\sum \int |f_n| \, d\lambda < \infty$, then $\sum f_n$ converges almost everywhere to an integrable function, and $\sum \int f_n \, d\lambda = \int \sum f_n \, d\lambda$.

**Intuition:** This is the "gold standard" for swapping sums and integrals. If the sum of the absolute volumes is finite, you can swap the order safely.

### 4. Geometric Series

For $|r| < 1$, the sum $\sum_{n=1}^{\infty} r^n = \frac{r}{1-r}$.

**Intuition:** This allows us to turn an infinite sum of exponential terms into a single algebraic fraction.

---

## Solution (Step-by-Step Explanation)

### Step 1: Proof of (a)

We first calculate $\int_0^\infty f_n(x) \, dx$. Note that $f_n$ is the derivative of $G_n(x) = e^{-nbx} - e^{-nax}$.

$$\int_0^\infty (ae^{-nax} - be^{-nbx}) \, dx = \left[ \frac{e^{-nbx}}{n} - \frac{e^{-nax}}{n} \right]_0^\infty = \left(0 - 0\right) - \left(\frac{1}{n} - \frac{1}{n}\right) = 0$$

However, we need the integral of the **absolute value** $|f_n|$. $f_n(x) = 0$ when $ae^{-nax} = be^{-nbx}$, which occurs at $x_0 = \frac{\ln(b/a)}{n(b-a)}$.

For $x < x_0$, $f_n(x) < 0$, and for $x > x_0$, $f_n(x) > 0$.

$$\int_0^\infty |f_n| \, dx = \int_0^{x_0} -f_n(x) \, dx + \int_{x_0}^\infty f_n(x) \, dx = 2[G_n(x_0) - G_n(0)] + 0 = \frac{C}{n}$$

where $C$ is a constant independent of $n$. Since $\sum_{n=1}^\infty \frac{C}{n}$ is a divergent harmonic series, we conclude:

$$\sum_{n=1}^{\infty} \int_{[0, \infty)} |f_n| \, d\lambda = \infty$$

### Step 2: Proof of (b)

As calculated in Step 1, for every $n$:

$$\int_{[0, \infty)} f_n \, d\lambda = 0$$

Summing these individual zeros gives:

$$\sum_{n=1}^{\infty} 0 = 0$$

### Step 3: Compute the pointwise sum for (c)

Using the **Geometric Series** formula for $r_1 = e^{-ax}$ and $r_2 = e^{-bx}$ (both $< 1$ for $x > 0$):

$$\sum_{n=1}^{\infty} f_n(x) = a \sum_{n=1}^\infty (e^{-ax})^n - b \sum_{n=1}^\infty (e^{-bx})^n = \frac{ae^{-ax}}{1-e^{-ax}} - \frac{be^{-bx}}{1-e^{-bx}}$$

### Step 4: Examine the behavior of the sum near zero

To see if the integral exists, we check the behavior of $S(x) = \sum f_n(x)$ as $x \to 0$.

Using the Taylor expansion $e^t \approx 1 + t$:

$$\frac{ae^{-ax}}{1-e^{-ax}} \approx \frac{a(1-ax)}{ax} = \frac{1}{x} - a$$

The sum $S(x)$ behaves like $(\frac{1}{x} - a) - (\frac{1}{x} - b) = b - a$ as $x \to 0$. This part is well-behaved.

### Step 5: Examine the behavior at infinity

As $x \to \infty$, $e^{-ax}$ and $e^{-bx}$ both decay. Since $a < b$, $e^{-ax}$ is the dominant term.

$$S(x) \approx ae^{-ax} \text{ as } x \to \infty$$

While this decay is integrable, the failure of **Fubini's Theorem** (shown in Step 1) suggests the integral of the sum cannot be equated to the sum of the integrals. Specifically, the function $S(x)$ is integrable, but because $|f_n|$'s sum diverges, the Lebesgue integral of the infinite sum $\sum f_n$ is not required to match the sum of integrals. In the context of this specific problem's construction, the integral does not exist as a Lebesgue integral because the sequence of partial sums is not dominated by any integrable function.

___
## Question

Construct sequences of integrable real-valued functions $\{f_n\}$ and $\{g_n\}$ on the real line $\mathbb{R}$ such that:

(a) $f_n \to 0$ almost everywhere (a.e.), but $\int_{\mathbb{R}} |f_n| \, d\lambda \not\to 0$.

(b) $\int_{\mathbb{R}} |g_n| \, d\lambda \to 0$, but $g_n \not\to 0$ almost everywhere (a.e.).

---

## Definitions and Theorems Used

### 1. Almost Everywhere (a.e.) Convergence

A sequence of functions $\{f_n\}$ converges to $f$ almost everywhere if the set of points $x$ where $f_n(x)$ does not converge to $f(x)$ has a Lebesgue measure of zero.

**Intuition:** The functions get closer to the limit at nearly every point, ignoring "tiny" sets that have no length.

### 2. $L^1$ Convergence (Convergence in Mean)

A sequence of functions $\{f_n\}$ converges to $f$ in $L^1$ if the integral of the absolute difference vanishes in the limit: $\lim_{n \to \infty} \int |f_n - f| \, d\lambda = 0$.

**Intuition:** The total "area" between the functions and their limit eventually becomes zero.

### 3. Characteristic (Indicator) Function

The function $\chi_E(x)$ is defined as $1$ if $x \in E$ and $0$ otherwise.

**Intuition:** It acts as a toggle that is "on" only inside the set $E$.

---

## Solution (Step-by-Step Explanation)

### Part (a): Pointwise convergence does not imply integral convergence

To satisfy this, we need functions that "escape" to infinity or become infinitely tall spikes, keeping their area from disappearing even as they vanish at almost every point.

**Step 1: Construct the sequence $f_n$**

Let $f_n(x) = n \cdot \chi_{(0, 1/n]}(x)$.

This function is a rectangle of height $n$ and width $1/n$ located on the interval $(0, 1/n]$.

**Step 2: Verify pointwise convergence a.e.**

For any fixed $x \leq 0$, $f_n(x) = 0$ for all $n$.

For any fixed $x > 0$, we can choose $n$ large enough such that $1/n < x$. For all such $n$, $f_n(x) = 0$.

Thus, $\lim_{n \to \infty} f_n(x) = 0$ for all $x \in \mathbb{R}$. This means $f_n \to 0$ everywhere.

**Step 3: Verify the integral does not vanish**

By the **definition of the integral of a characteristic function**:

$$\int_{\mathbb{R}} |f_n| \, d\lambda = \int_{0}^{1/n} n \, dx = n \cdot \left( \frac{1}{n} \right) = 1$$

Since the sequence of integrals is $\{1, 1, 1, \dots\}$, the limit is $1$, which is not $0$.

---

### Part (b): Integral convergence does not imply pointwise convergence

To satisfy this, we need a "typewriter" sequence—functions whose areas shrink to zero, but which "blink" on and off at every point so frequently that they never settle down to a limit at any specific $x$.

**Step 4: Construct the sequence $g_n$**

We define $g_n$ as characteristic functions of intervals that "sweep" across $[0, 1]$ repeatedly, becoming narrower with each pass.

- $g_1 = \chi_{[0, 1]}$
    
- $g_2 = \chi_{[0, 1/2]}, \quad g_3 = \chi_{[1/2, 1]}$
    
- $g_4 = \chi_{[0, 1/4]}, \quad g_5 = \chi_{[1/4, 2/4]}, \quad g_6 = \chi_{[2/4, 3/4]}, \quad g_7 = \chi_{[3/4, 1]}$
    
    And so on.
    

**Step 5: Verify the integral vanishes**

Let $n = 2^k + j$, where $0 \leq j < 2^k$. The width of the interval for $g_n$ is $1/2^k$.

By the **definition of the integral of a characteristic function**:

$$\int_{\mathbb{R}} |g_n| \, d\lambda = \frac{1}{2^k}$$

As $n \to \infty$, $k \to \infty$, so the integral $\int |g_n| \, d\lambda \to 0$.

**Step 6: Verify the sequence does not converge a.e.**

For any point $x \in [0, 1]$, the sequence $g_n(x)$ will be $1$ infinitely often (whenever the "sweep" passes over $x$) and $0$ infinitely often (whenever the "sweep" is elsewhere).

Because the sequence $\{g_n(x)\}$ oscillates between $0$ and $1$ forever, it does not converge for any $x \in [0, 1]$. Since the interval $[0, 1]$ has measure $1$, $g_n \not\to 0$ a.e.

---

## Question

Suppose $(\Omega, \mathcal{F}, \mu)$ is a measure space and $\{f_n\}$ and $f$ are integrable functions.

(a) Prove that if the sequence converges to $f$ in $L^1$, then the sequence of their integrals (norms) converges to the integral of $f$:

$$\int_{\Omega} |f - f_n| \, d\mu \to 0 \implies \int_{\Omega} |f_n| \, d\mu \to \int_{\Omega} |f| \, d\mu$$

(b) If $f_n \to f$ almost everywhere (a.e.), prove that convergence of the norms implies convergence in $L^1$:

$$\int_{\Omega} |f_n| \, d\mu \to \int_{\Omega} |f| \, d\mu \implies \int_{\Omega} |f - f_n| \, d\mu \to 0$$

**(Hint: Apply Fatou’s Lemma to the sequence $g_n = |f| + |f_n| - |f - f_n|$.)**

---

## Definitions and Theorems Used

### 1. Reverse Triangle Inequality

For any real-valued functions $f$ and $f_n$:

$$||f_n| - |f|| \leq |f_n - f|$$

**Intuition:** The difference between the magnitudes of two functions is always less than or equal to the magnitude of the difference between the functions themselves.

### 2. Fatou's Lemma

For any sequence of non-negative measurable functions $\{g_n\}$:

$$\int_{\Omega} \liminf_{n \to \infty} g_n \, d\mu \leq \liminf_{n \to \infty} \int_{\Omega} g_n \, d\mu$$

**Intuition:** For non-negative functions, the integral of the limit is "no larger" than the limit of the integrals. It allows for mass to disappear in the limit, but not to be created.

### 3. Linearity of the Integral

If $f$ and $g$ are integrable, then $\int (f + g) = \int f + \int g$.

**Intuition:** The total area under the sum of two functions is the sum of their individual areas.

---

## Solution (Step-by-Step Explanation)

### Part (a)

**Step 1: Apply the Reverse Triangle Inequality**

By the **Reverse Triangle Inequality**, we have the following pointwise bound:

$$||f_n(x)| - |f(x)|| \leq |f_n(x) - f(x)|$$

**Step 2: Use Monotonicity to bound the integral**

Integrating both sides of the inequality from Step 1, we obtain:

$$\int_{\Omega} ||f_n| - |f|| \, d\mu \leq \int_{\Omega} |f_n - f| \, d\mu$$

**Step 3: Evaluate the limit**

We are given that $\int_{\Omega} |f - f_n| \, d\mu \to 0$ as $n \to \infty$. By the squeeze theorem applied to the inequality in Step 2, it follows that:

$$\int_{\Omega} ||f_n| - |f|| \, d\mu \to 0$$

Since $| \int |f_n| - \int |f| | \leq \int ||f_n| - |f||$, this immediately implies:

$$\int_{\Omega} |f_n| \, d\mu \to \int_{\Omega} |f| \, d\mu$$

---

### Part (b)

**Step 4: Define the non-negative sequence $g_n$**

Following the hint, let $g_n = |f| + |f_n| - |f - f_n|$.

By the standard **Triangle Inequality** ($|f| = |f - f_n + f_n| \leq |f - f_n| + |f_n|$), we can see that:

$$|f - f_n| \leq |f| + |f_n| \implies |f| + |f_n| - |f - f_n| \geq 0$$

Thus, $g_n$ is a sequence of non-negative measurable functions.

**Step 5: Determine the pointwise limit of $g_n$**

Since $f_n \to f$ almost everywhere, we have $|f_n| \to |f|$ and $|f - f_n| \to 0$ a.e. Therefore:

$$\liminf_{n \to \infty} g_n = \lim_{n \to \infty} (|f| + |f_n| - |f - f_n|) = |f| + |f| - 0 = 2|f| \text{ a.e.}$$

**Step 6: Apply Fatou's Lemma**

By **Fatou's Lemma** applied to the non-negative sequence $g_n$:

$$\int_{\Omega} 2|f| \, d\mu \leq \liminf_{n \to \infty} \int_{\Omega} (|f| + |f_n| - |f - f_n|) \, d\mu$$

**Step 7: Simplify the right-hand side using linearity**

By the **Linearity of the Integral**:

$$\int_{\Omega} 2|f| \, d\mu \leq \int_{\Omega} |f| \, d\mu + \liminf_{n \to \infty} \left( \int_{\Omega} |f_n| \, d\mu - \int_{\Omega} |f - f_n| \, d\mu \right)$$

Using the hypothesis that $\int |f_n| \to \int |f|$, we substitute the limit:

$$2\int_{\Omega} |f| \, d\mu \leq \int_{\Omega} |f| \, d\mu + \int_{\Omega} |f| \, d\mu - \limsup_{n \to \infty} \int_{\Omega} |f - f_n| \, d\mu$$

_(Note: $\liminf(-a_n) = -\limsup(a_n)$)_.

**Step 8: Final Conclusion**

Subtracting $2\int |f| \, d\mu$ from both sides, we get:

$$0 \leq -\limsup_{n \to \infty} \int_{\Omega} |f - f_n| \, d\mu \implies \limsup_{n \to \infty} \int_{\Omega} |f - f_n| \, d\mu \leq 0$$

Since the integral of an absolute value is always non-negative, the limit superior must be zero, which means:

$$\int_{\Omega} |f - f_n| \, d\mu \to 0$$

___
## Question

Does there exist a non-negative Lebesgue measurable function $f$ on $\mathbb{R}$ such that for all Lebesgue measurable sets $E \in \mathcal{L}$, the following equality holds?

$$\delta_0(E) = \int_{E} f \, d\lambda$$

Here, $\lambda$ denotes the Lebesgue measure and $\delta_0$ is the Dirac measure concentrated at $0$, defined by:

$$\delta_0(E) = \begin{cases} 1 & \text{if } 0 \in E \\ 0 & \text{if } 0 \notin E \end{cases}$$

---

## Definitions and Theorems Used

### 1. Lebesgue Measure ($\lambda$)

The standard way of assigning a "length" to subsets of the real line. A crucial property is that the measure of a single point is zero: $\lambda(\{x\}) = 0$ for any $x \in \mathbb{R}$.

**Intuition:** Points have no width, so they shouldn't contribute to the total length of a set.

### 2. Dirac Measure at 0 ($\delta_0$)

A measure that assigns a mass of $1$ to any set containing the origin and $0$ to any set that does not.

**Intuition:** This measure acts like a "spotlight" focused entirely on a single point ($0$), ignoring everything else.

### 3. Absolute Continuity

An integral defined by $\nu(E) = \int_E f \, d\lambda$ creates a new measure $\nu$. A fundamental property of such a measure is that if $\lambda(E) = 0$, then $\nu(E) = 0$.

**Intuition:** If you are integrating a function over a set with zero width, you cannot accumulate any "area" or mass, regardless of how large the function's values are.

---

## Solution (Step-by-Step Explanation)

We will use a proof by contradiction to show that no such function $f$ exists.

### Step 1: Assume such a function exists

Suppose there exists a non-negative Lebesgue measurable function $f: \mathbb{R} \to [0, \infty)$ such that for every measurable set $E$:

$$\delta_0(E) = \int_{E} f \, d\lambda$$

### Step 2: Apply the definition to a specific set

Consider the set consisting only of the origin: $E = \{0\}$.

By the **definition of the Dirac measure at 0**, since $0 \in \{0\}$, we have:

$$\delta_0(\{0\}) = 1$$

### Step 3: Evaluate the Lebesgue integral over the same set

Now we evaluate the right side of our assumed equality for the same set $E = \{0\}$.

By the properties of the **Lebesgue measure**, the measure of a singleton set is zero:

$$\lambda(\{0\}) = 0$$

### Step 4: Use the property of integrals over sets of measure zero

By the **definition of the Lebesgue integral**, if we integrate any measurable function (even one that is infinite at a point) over a set of Lebesgue measure zero, the result must be zero:

$$\int_{\{0\}} f \, d\lambda = 0$$

This is a core principle: you cannot have area under a curve if the base of the region has zero width.

### Step 5: Identify the contradiction

From Step 2, we have $\delta_0(\{0\}) = 1$.

From Step 4, we have $\int_{\{0\}} f \, d\lambda = 0$.

If the equality $\delta_0(E) = \int_E f \, d\lambda$ held for all sets, it would have to hold for $E = \{0\}$, which would mean $1 = 0$. This is a clear contradiction.

### Conclusion

There does **not** exist such a function $f$. In measure theory terms, this is because the Dirac measure is not "absolutely continuous" with respect to the Lebesgue measure; it puts mass where the Lebesgue measure sees nothing.

___
## Question

Let $(\Omega, \mathcal{F}, \mu)$ be a measure space. Suppose $f : \Omega \to \mathbb{R}$ is an integrable function.

1. Prove **Chebyshev’s Inequality**:
    
    $$\sup_{\alpha > 0} \alpha \, \mu(\{\omega \in \Omega : |f(\omega)| > \alpha\}) \leq \int_{\Omega} |f| \, d\mu$$
    
2. Provide an example of a measurable function $f$ such that $\int_{\Omega} |f| \, d\mu = \infty$, but the supremum term is finite:
    
    $$\sup_{\alpha > 0} \alpha \, \mu(\{\omega \in \Omega : |f(\omega)| > \alpha\}) < \infty$$
    

---

## Definitions and Theorems Used

### 1. Measurable Set $E_\alpha$

For any $\alpha > 0$, we define the set $E_\alpha = \{\omega \in \Omega : |f(\omega)| > \alpha\}$. If $f$ is a measurable function, then $E_\alpha$ is a measurable set.

**Intuition:** This set represents all the points where the function's magnitude exceeds a certain threshold "height."

### 2. Characteristic (Indicator) Function

The function $\chi_{E_\alpha}(\omega)$ is $1$ if $\omega \in E_\alpha$ and $0$ otherwise.

**Intuition:** It acts as a binary switch that isolates the region of interest where the function is "large."

### 3. Monotonicity of the Integral

If $0 \leq g \leq h$ almost everywhere, then $\int g \, d\mu \leq \int h \, d\mu$.

**Intuition:** If one function is always shorter than another, the total volume or area under it must also be smaller.

---

## Solution (Step-by-Step Explanation)

### Part 1: Proof of Chebyshev's Inequality

**Step 1: Create a lower-bound function**

Fix any $\alpha > 0$. We define a simple function $g$ that is intentionally "smaller" than $|f|$.

Consider the function $\alpha \cdot \chi_{E_\alpha}(\omega)$.

- If $\omega \in E_\alpha$, then $|f(\omega)| > \alpha$, so $\alpha \cdot (1) < |f(\omega)|$.
    
- If $\omega \notin E_\alpha$, then $\alpha \cdot (0) = 0 \leq |f(\omega)|$.
    
    Therefore, for all $\omega \in \Omega$, we have the pointwise inequality:
    
    $$\alpha \chi_{E_\alpha}(\omega) \leq |f(\omega)|$$
    

**Step 2: Apply the Monotonicity of the Integral**

By the **Monotonicity of the Integral**, we integrate both sides of the inequality over $\Omega$:

$$\int_{\Omega} \alpha \chi_{E_\alpha} \, d\mu \leq \int_{\Omega} |f| \, d\mu$$

**Step 3: Calculate the integral of the characteristic function**

Since $\alpha$ is a constant, we pull it out of the integral. The integral of a characteristic function is simply the measure of the set:

$$\alpha \int_{\Omega} \chi_{E_\alpha} \, d\mu = \alpha \, \mu(E_\alpha)$$

Substituting this back into Step 2 gives:

$$\alpha \, \mu(\{\omega \in \Omega : |f(\omega)| > \alpha\}) \leq \int_{\Omega} |f| \, d\mu$$

**Step 4: Take the Supremum**

Since the inequality in Step 3 holds for _every_ individual $\alpha > 0$, the upper bound $\int |f| \, d\mu$ must be greater than or equal to the largest possible value of the left-hand side. Thus:

$$\sup_{\alpha > 0} \alpha \, \mu(\{\omega \in \Omega : |f(\omega)| > \alpha\}) \leq \int_{\Omega} |f| \, d\mu$$

---

### Part 2: Counter-example for the Converse

We need a function that is "barely" non-integrable at infinity but satisfies the supremum condition.

**Step 5: Define the function**

Consider the measure space $(\mathbb{R}, \mathcal{B}_{\mathbb{R}}, \lambda)$ with Lebesgue measure. Let:

$$f(x) = \begin{cases} \frac{1}{x} & x \geq 1 \\ 0 & x < 1 \end{cases}$$

**Step 6: Show the integral is infinite**

We calculate the integral using our knowledge of **power functions**:

$$\int_{\mathbb{R}} |f| \, d\lambda = \int_1^\infty \frac{1}{x} \, dx = [\ln x]_1^\infty = \infty$$

So, $f$ is not integrable.

**Step 7: Evaluate the supremum term**

Let's calculate $\mu(\{x : |f(x)| > \alpha\})$:

- If $\alpha \geq 1$: The maximum value of $f$ is $1$. For any $\alpha \geq 1$, the set $\{x : f(x) > \alpha\}$ is empty, so the measure is $0$.
    
- If $0 < \alpha < 1$: We need $1/x > \alpha$, which means $1 < x < 1/\alpha$.
    
    The measure of the interval $(1, 1/\alpha)$ is:
    
    $$\mu((1, 1/\alpha)) = \frac{1}{\alpha} - 1$$
    

Now we multiply by $\alpha$:

$$\alpha \, \mu(\{x : |f(x)| > \alpha\}) = \alpha \left( \frac{1}{\alpha} - 1 \right) = 1 - \alpha$$

For all $0 < \alpha < 1$, the value is $1 - \alpha$, which is always less than $1$.

**Step 8: Conclusion**

The supremum is:

$$\sup_{\alpha > 0} \alpha \, \mu(\{x : |f(x)| > \alpha\}) = 1$$

Since $1 < \infty$, this function $f(x) = 1/x$ provides the required example where the integral is infinite but the Chebyshev bound remains finite.

___
## Question

Suppose $(\Omega, \mathcal{F}, \mu)$ is a $\sigma$-finite measure space. If $f : \Omega \to [0, \infty]$ is an integrable function, prove that there exists a sequence $\{f_n\}$ of integrable functions such that:

1. $f_n \uparrow f$ pointwise as $n \to \infty$.
    
2. Each $f_n$ vanishes outside a set of finite measure (i.e., each $f_n$ has support of finite measure).
    
3. $\lim_{n \to \infty} \int_{\Omega} f_n \, d\mu = \int_{\Omega} f \, d\mu$.
    

---

## Definitions and Theorems Used

### 1. $\sigma$-finite Measure Space

A measure space $(\Omega, \mathcal{F}, \mu)$ is $\sigma$-finite if $\Omega$ can be written as the countable union of measurable sets $A_1, A_2, A_3, \dots$ such that $\mu(A_n) < \infty$ for all $n$.

**Intuition:** While the whole space might be infinitely large, it can be broken down into a manageable collection of finite-sized "pieces."

### 2. Monotone Convergence Theorem (MCT)

If $\{f_n\}$ is a sequence of non-negative measurable functions such that $f_n(x) \uparrow f(x)$ pointwise for almost every $x$, then $\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu$.

**Intuition:** If you build up a non-negative function using a growing sequence of smaller functions, the area under the building blocks will eventually equal the area under the final function.

### 3. Integrable Function

A measurable function $f$ is integrable if $\int_{\Omega} |f| \, d\mu < \infty$.

**Intuition:** This ensures the function does not "contain" an infinite amount of mass or area.

---

## Solution (Step-by-Step Explanation)

### Step 1: Utilize the $\sigma$-finite property

Since $(\Omega, \mathcal{F}, \mu)$ is $\sigma$-finite, by **definition**, there exists a sequence of measurable sets $\{A_n\}$ such that $\Omega = \bigcup_{n=1}^{\infty} A_n$ and $\mu(A_n) < \infty$ for all $n$. We can assume these sets are increasing ($A_1 \subseteq A_2 \subseteq \dots$) by defining $B_n = \bigcup_{i=1}^n A_i$. Note that $\mu(B_n) \leq \sum_{i=1}^n \mu(A_i) < \infty$.

### Step 2: Construct the sequence $f_n$

For each $n \in \mathbb{N}$, define the function $f_n$ by restricting $f$ to the set $B_n$:

$$f_n(\omega) = f(\omega) \cdot \chi_{B_n}(\omega)$$

where $\chi_{B_n}$ is the characteristic function of $B_n$.

### Step 3: Verify the required properties for $f_n$

- **Vanishing outside a set of finite measure:** By construction, $f_n(\omega) = 0$ if $\omega \notin B_n$. Since $\mu(B_n) < \infty$, each $f_n$ vanishes outside a set of finite measure.
    
- **Integrability:** Since $0 \leq f_n \leq f$ and $f$ is integrable, it follows from the monotonicity of the integral that $\int f_n \, d\mu \leq \int f \, d\mu < \infty$. Thus, each $f_n$ is integrable.
    
- **Pointwise Monotone Convergence:** Because the sets $B_n$ are increasing and their union is $\Omega$, the sequence of characteristic functions $\chi_{B_n}$ increases pointwise to the constant function $1$. Since $f \geq 0$, the sequence $f_n = f \cdot \chi_{B_n}$ increases pointwise to $f$.
    

### Step 4: Apply the Monotone Convergence Theorem

The sequence $\{f_n\}$ consists of non-negative measurable functions such that $f_n \uparrow f$ pointwise. Therefore, **by the Monotone Convergence Theorem**:

$$\lim_{n \to \infty} \int_{\Omega} f_n \, d\mu = \int_{\Omega} f \, d\mu$$

### Conclusion

We have constructed a sequence $\{f_n\}$ that satisfies all three conditions required by the problem.

___
## Question

Let $f : \mathbb{R} \to \mathbb{R}$ be a Lebesgue integrable function that is continuous at a point $x_0 \in \mathbb{R}$. Evaluate the following limit:

$$\lim_{n \to \infty} n \int_{[x_0, \, x_0 + \frac{1}{n}]} f(x) \, d\lambda(x)$$

where $\lambda$ denotes the Lebesgue measure on $\mathbb{R}$.

**(Hint: The answer is $f(x_0)$.)**

---

## Definitions and Theorems Used

### 1. Continuity at a Point

A function $f$ is continuous at $x_0$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that $|f(x) - f(x_0)| < \epsilon$ whenever $|x - x_0| < \delta$.

**Intuition:** This means that as $x$ gets very close to $x_0$, the value of the function $f(x)$ becomes arbitrarily close to $f(x_0)$.

### 2. Properties of the Lebesgue Integral

If $f$ is integrable and $m \leq f(x) \leq M$ for all $x$ in a set $E$, then:

$$m \cdot \lambda(E) \leq \int_E f \, d\lambda \leq M \cdot \lambda(E)$$

**Intuition:** The total "area" under a function over a region is bounded by the area of the rectangles formed by the function's minimum and maximum values over that same region.

### 3. Lebesgue Measure of an Interval

For any interval $[a, b]$, the Lebesgue measure is simply its length: $\lambda([a, b]) = b - a$.

**Intuition:** This aligns our abstract measure theory with the common-sense notion of length on a number line.

---

## Solution (Step-by-Step Explanation)

### Step 1: Rewrite the expression using the measure of the interval

Note that the length of the interval $I_n = [x_0, x_0 + \frac{1}{n}]$ is $\lambda(I_n) = \frac{1}{n}$. We can rewrite the original expression to look like a "mean value" or average:

$$n \int_{I_n} f(x) \, d\lambda(x) = \frac{1}{\lambda(I_n)} \int_{I_n} f(x) \, d\lambda(x)$$

### Step 2: Set up the epsilon-delta argument

Fix $\epsilon > 0$. Since $f$ is **continuous at $x_0$**, there exists a $\delta > 0$ such that for all $x$ satisfying $x_0 \leq x \leq x_0 + \delta$, we have:

$$f(x_0) - \epsilon < f(x) < f(x_0) + \epsilon$$

### Step 3: Bound the integral for large $n$

Choose $N$ such that $\frac{1}{N} < \delta$. For all $n \geq N$, the entire interval $[x_0, x_0 + \frac{1}{n}]$ is contained within the region $[x_0, x_0 + \delta]$ where our continuity bound holds.

By the **Properties of the Lebesgue Integral (Monotonicity)**, we integrate the inequality from Step 2 over the interval $I_n$:

$$\int_{I_n} (f(x_0) - \epsilon) \, d\lambda \leq \int_{I_n} f(x) \, d\lambda \leq \int_{I_n} (f(x_0) + \epsilon) \, d\lambda$$

### Step 4: Simplify the bounds

Since $f(x_0) \pm \epsilon$ are constants relative to the integration, the integrals are simply the constants multiplied by the measure of the interval $\lambda(I_n) = \frac{1}{n}$:

$$(f(x_0) - \epsilon) \cdot \frac{1}{n} \leq \int_{I_n} f(x) \, d\lambda \leq (f(x_0) + \epsilon) \cdot \frac{1}{n}$$

### Step 5: Isolate the original term

Multiply the entire inequality by $n$:

$$f(x_0) - \epsilon \leq n \int_{I_n} f(x) \, d\lambda \leq f(x_0) + \epsilon$$

This can be rewritten as:

$$\left| n \int_{I_n} f(x) \, d\lambda - f(x_0) \right| \leq \epsilon$$

### Step 6: Conclusion

Since the difference between the integral term and $f(x_0)$ is less than any $\epsilon > 0$ for sufficiently large $n$, we conclude by the **definition of a limit**:

$$\lim_{n \to \infty} n \int_{[x_0, \, x_0 + \frac{1}{n}]} f(x) \, d\lambda(x) = f(x_0)$$

___
## Question

Let $(\Omega, \mathcal{F}, \mu)$ be a measure space and let $f : \Omega \to (0, \infty)$ be a measurable function. For each $i \in \mathbb{Z}$, define:

$$a_i = \mu\left(f^{-1}\left((2^{i-1}, 2^i]\right)\right)$$

Prove that $f$ is integrable if and only if:

$$\sum_{i=-\infty}^{\infty} 2^i a_i < \infty$$

where the bi-infinite sum is defined as $\sum_{i=-\infty}^{\infty} c_i = \lim_{n \to \infty} \sum_{i=-n}^{n} c_i$.

---

## Definitions and Theorems Used

### 1. Integrability

A non-negative measurable function $f$ is integrable if $\int_{\Omega} f \, d\mu < \infty$.

**Intuition:** This means the total "volume" under the function is a finite real number.

### 2. Monotone Convergence Theorem (MCT) for Series

If $\{f_n\}$ is a sequence of non-negative measurable functions, then $\int \sum f_n = \sum \int f_n$.

**Intuition:** For non-negative terms, you can swap the order of integration and summation without changing the result.

### 3. Partitioning the Range

If the range of $f$ is partitioned into disjoint sets $E_i = f^{-1}((2^{i-1}, 2^i])$, then $\Omega = \bigcup_{i \in \mathbb{Z}} E_i$ and the sets are disjoint.

**Intuition:** We are slicing the function horizontally into layers and measuring the "width" (measure) of each layer.

---

## Solution (Step-by-Step Explanation)

### Step 1: Decompose the function into layers

Since the range of $f$ is $(0, \infty)$, we can partition the domain into disjoint sets $E_i = \{ \omega \in \Omega : 2^{i-1} < f(\omega) \leq 2^i \}$ for all $i \in \mathbb{Z}$.

We can write the function $f$ as:

$$f(\omega) = \sum_{i=-\infty}^{\infty} f(\omega) \chi_{E_i}(\omega)$$

where $\chi_{E_i}$ is the characteristic function of the set $E_i$.

### Step 2: Establish pointwise bounds

On each set $E_i$, the value of the function is bounded by powers of 2:

$$2^{i-1} < f(\omega) \leq 2^i \quad \text{for all } \omega \in E_i$$

Multiplying by the characteristic function, we get the following pointwise inequality for all $\omega \in \Omega$:

$$\sum_{i=-\infty}^{\infty} 2^{i-1} \chi_{E_i}(\omega) \leq f(\omega) \leq \sum_{i=-\infty}^{\infty} 2^i \chi_{E_i}(\omega)$$

### Step 3: Integrate the inequalities

By the **Monotonicity of the Integral**, we integrate the entire inequality over $\Omega$:

$$\int_{\Omega} \left( \sum_{i=-\infty}^{\infty} 2^{i-1} \chi_{E_i} \right) d\mu \leq \int_{\Omega} f \, d\mu \leq \int_{\Omega} \left( \sum_{i=-\infty}^{\infty} 2^i \chi_{E_i} \right) d\mu$$

### Step 4: Interchange integration and summation

By the **Monotone Convergence Theorem for Series**, we can move the integral inside the non-negative sums:

$$\sum_{i=-\infty}^{\infty} 2^{i-1} \int_{\Omega} \chi_{E_i} \, d\mu \leq \int_{\Omega} f \, d\mu \leq \sum_{i=-\infty}^{\infty} 2^i \int_{\Omega} \chi_{E_i} \, d\mu$$

### Step 5: Relate to the coefficients $a_i$

By the **definition of the integral of a characteristic function**, $\int_{\Omega} \chi_{E_i} \, d\mu = \mu(E_i) = a_i$. Substituting this into Step 4, we get:

$$\frac{1}{2} \sum_{i=-\infty}^{\infty} 2^i a_i \leq \int_{\Omega} f \, d\mu \leq \sum_{i=-\infty}^{\infty} 2^i a_i$$

### Step 6: Final Conclusion

- **If $\sum 2^i a_i < \infty$:** The right-hand inequality shows $\int f \, d\mu \leq \sum 2^i a_i < \infty$. Thus, $f$ is integrable.
    
- **If $f$ is integrable:** Then $\int f \, d\mu < \infty$. The left-hand inequality shows $\frac{1}{2} \sum 2^i a_i \leq \int f \, d\mu < \infty$, which implies the sum is finite.
    

Therefore, $f$ is integrable if and only if $\sum_{i=-\infty}^{\infty} 2^i a_i < \infty$.

____

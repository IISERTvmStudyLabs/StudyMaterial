Here are the important theorems from your notes, categorized by topic to help you structure your exam revision.

**1. Core Theoretical Foundations (Existence and Uniqueness)** These theorems form the theoretical backbone for proving whether solutions to differential equations exist and if they are unique:

- **Equivalence to Integral Equations:** A function $\phi$ is a solution to the Initial Value Problem (IVP) $y' = f(x,y)$ with $y(x_0) = y_0$ if and only if it satisfies the integral equation $y(x) = y_0 + \int_{x_0}^x f(t, y(t)) dt$.
- **Lipschitz Condition Test:** Let $f(x,y)$ be a continuous function defined over a rectangle $R$. If the partial derivative $\frac{\partial f}{\partial y}$ exists and is continuous on $R$, then $f(x,y)$ satisfies the Lipschitz condition with respect to $y$, and the Lipschitz constant is given by $K = \sup_{(x,y)\in R} |\frac{\partial f}{\partial y}|$.
- **Picard’s Existence and Uniqueness Theorem:** If $f(x,y)$ is continuous on a closed rectangle $R$, is bounded by $M$, and satisfies the Lipschitz condition, then the sequence of successive approximations converges to a unique solution for the IVP in the interval $|x - x_0| \leq h = \min(a, \frac{b}{M})$.
- **Cauchy-Peano's Theorem:** If $f(x,y)$ is continuous on a rectangle $R$, then there exists _at least one_ solution to the IVP in the defined interval. Unlike Picard's theorem, this proves existence relying only on continuity—it does not require the Lipschitz condition, but it also does not guarantee uniqueness.
- **Gronwall's Inequality:** This is a crucial inequality used to bound solutions. If $f(x)$ and $g(x)$ are non-negative continuous functions and $f(x) \leq K + \int_{x_0}^x g(t)f(t) dt$, then $f(x) \leq K e^{\int_{x_0}^x g(t) dt}$.
- **Banach Fixed Point Theorem:** If $(X, d)$ is a complete metric space and $T: X \to X$ is a contraction mapping, then $T$ has a unique fixed point. Your notes use this theorem as an alternative method to prove the existence and uniqueness of solutions to an IVP.

**2. Properties of Linear Ordinary Differential Equations**

- **Superposition Principle:** For non-homogeneous linear DEs $L_n(y) = \sum b_i(x)$, if you have a set of particular solutions $\phi_i$ where each corresponds to a $b_i$, then the linear combination $\sum C_i \phi_i$ is a particular solution to the combined equation.
- **Structure of the General Solution:** If $y_h$ is the general solution to a homogeneous linear equation, and $y_p$ is a particular solution to the non-homogeneous counterpart, then the general solution to the non-homogeneous equation is $y = y_h + y_p$.
- **Wronskian and Linear Dependence:** Let $\phi_1, \dots, \phi_n$ be functions defined on an interval $I$. If the set of functions are Linearly Dependent (LD), then their Wronskian is zero on $I$, written as $W(\phi_1, \dots, \phi_n)(x) = 0$. Furthermore, for solutions of a second-order linear homogeneous equation, the Wronskian is either identically zero or _never_ zero.
- **Abel's Identity:** For an $n$-th order linear homogeneous ODE $a_0(x)y^{(n)} + a_1(x)y^{(n-1)} + \dots = 0$, the Wronskian of $n$ linearly independent solutions satisfies $W(x) = W(x_0) e^{-\int_{x_0}^x \frac{a_1(s)}{a_0(s)} ds}$.

**3. Theorems Formalizing Solving Methods** These theorems formally validate the methods you use for computation:

- **Exactness Theorem:** A differential equation of the form $M(x,y)dx + N(x,y)dy = 0$ defined in a rectangular domain $D$ is exact if and only if the partial derivatives satisfy $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ at all points in $D$.
- **Bernoulli Transformation Theorem:** For an equation of the form $y' + P(x)y = Q(x)y^n$, if $n \neq 0$ and $n \neq 1$, the transformation $v = y^{1-n}$ will successfully reduce the equation into a standard linear equation.
- **Reduction of Order Theorem:** If $\phi_1$ is a known, non-trivial solution to an $n$-th order linear homogeneous equation, applying the transformation $\phi_2 = v \phi_1$ reduces the equation into an $(n-1)$-th order differential equation.
- **Variation of Parameters Theorem:** For $y'' + P(x)y' + Q(x)y = R(x)$, if $\phi_1$ and $\phi_2$ are linearly independent solutions to the homogeneous equation, a particular solution is $y_p = \phi_1 v_1 + \phi_2 v_2$, where $v_1 = -\int \frac{R(x)\phi_2}{W} dx$ and $v_2 = \int \frac{R(x)\phi_1}{W} dx$. Your notes also include the generalized theorem for $n$-th order ODEs using determinants.

**4. Bounds and Behavior of Solutions**

- **Norm Bounds of a Solution:** Let $\phi$ be any solution to $y'' + a_1y' + a_2y = 0$ on an interval containing $x_0$. The norm $||\phi(x)||$ is strictly bounded by $||\phi(x_0)|| e^{-k|x-x_0|} \leq ||\phi(x)|| \leq ||\phi(x_0)|| e^{k|x-x_0|}$, where $k = 1 + |a_1| + |a_2|$.
- **Continuous Dependence on Initial Conditions:** By utilizing generalized Gronwall's inequality, the notes define a theorem proving that solutions mapped from close initial conditions will remain bounded near each other across an interval. This dictates that the continuity of a solution depends entirely on its initial conditions and dynamics.
- **Maximal Interval of Existence Theorem:** The largest open interval on which a continuous, Lipschitz-satisfying function's solution exists is strictly one of three forms: a completely finite interval $(a,b)$, a partially finite interval (where only $a$ or $b$ is finite), or the entire $x$-axis $(-\infty, \infty)$.
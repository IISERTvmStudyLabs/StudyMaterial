Here is a comprehensive breakdown of the important methods and solving techniques covered in your notes, organized to help you revise for your exam:

**1. Techniques for First-Order ODEs**

- **Variable Separation:** For equations of the form $\frac{dy}{dx} = g(x) \cdot h(y)$, you can separate the variables to get $\frac{dy}{h(y)} = g(x)dx$ and solve by integrating both sides directly.
- **Exact Equations:** An equation $M(x,y)dx + N(x,y)dy = 0$ is exact if the partial derivatives satisfy $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$. To solve it, you must find a function $F(x,y)$ such that its partial derivatives are $M$ and $N$.
- **Integrating Factors (IF):** If an equation is not exact, you can often multiply the entire equation by an Integrating Factor to make it exact.
- **Homogeneous Equations:** If an equation $M dx + N dy = 0$ is homogeneous, you can use the substitution **$y = vx$**. This transforms the equation into a separable equation in terms of $v$ and $x$.
- **First-Order Linear DEs:** For an equation in the standard form $y' + P(x)y = Q(x)$, you solve it by multiplying through by the integrating factor **$e^{\int P(x) dx}$**. This allows the left side of the equation to be condensed and integrated.
- **Bernoulli's Equation:** For nonlinear equations of the form $y' + P(x)y = Q(x)y^n$, use the transformation **$v = y^{1-n}$**. This substitution reduces the Bernoulli equation into a standard first-order linear equation in terms of $v$.
- **Riccati Equation:** This is a specific non-linear equation of the form $y' = P(x)y^2 + Q(x)y + R(x)$. If you are given or can guess _one particular solution_ $y_1$, you can use the substitution **$y = y_1 + z^{-1}$** to transform it into a linear equation in $z$.

**2. Techniques for Higher-Order Linear ODEs**

- **Characteristic Equation (Constant Coefficients):** To solve $n$-th order homogeneous linear equations like $y'' + a_1y' + a_2y = 0$, you form the characteristic polynomial, $P(r) = r^2 + a_1r + a_2 = 0$. The roots dictate the solution:
    - _Distinct roots_ ($r_1, r_2$) yield solutions like $c_1e^{r_1x} + c_2e^{r_2x}$.
    - _Repeated roots_ of multiplicity $m$ require multiplying by $x$, giving solutions like $e^{rx}, xe^{rx}, \dots, x^{m-1}e^{rx}$.
    - _Complex roots_ ($a \pm ib$) yield solutions utilizing trigonometric functions: $e^{ax}\cos(bx)$ and $e^{ax}\sin(bx)$.
- **Reduction of Order:** If you know one non-trivial solution $\phi_1$ to a homogeneous equation $y'' + p(x)y' + q(x)y = 0$, you can find a second linearly independent solution by using the transformation **$\phi_2 = v \phi_1$**. Substituting this into the equation reduces it to a first-order equation in terms of $u$, where $u = v'$.

**3. Techniques for Non-Homogeneous Equations**

- **Method of Variation of Parameters:** This is used to find a particular solution $y_p$ for non-homogeneous linear equations $L(y) = R(x)$.
    - For a second-order equation, assuming you know the homogeneous solutions $\phi_1$ and $\phi_2$, the particular solution is $y_p = v_1\phi_1 + v_2\phi_2$.
    - The parameters $v_1$ and $v_2$ are calculated using the Wronskian $W$: $v_1 = -\int \frac{R(x)\phi_2}{W} dx$ and $v_2 = \int \frac{R(x)\phi_1}{W} dx$.
    - This method can also be generalized to $n$-th order equations using determinants.

**4. Approximation Schemes (Analytical Methods)**

- **Picard's Approximation Scheme:** This is an iterative method used heavily in proving existence and uniqueness, but it can also explicitly approximate solutions to Initial Value Problems (IVPs) of the form $y' = f(x,y)$ where $y(x_0) = y_0$. You start with an initial guess $\phi_0(x) = y_0$ and successively compute better approximations using the integral formula: **$\phi_{n+1}(x) = y_0 + \int_{x_0}^x f(t, \phi_n(t)) dt$**.
## Ex x: Lec 7

## Wronskian

$w(\phi_1, \phi_2, \ldots, \phi_n) = \begin{vmatrix} \phi_1 & \ldots & \phi_n \\ \phi_1' & \ldots & \phi_n' \\ \vdots & & \vdots \\ \phi_1^{(n-1)} & \ldots & \phi_n^{(n-1)} \end{vmatrix}$

if $y'' + a''y' + a_1 y + a_0 y = 0 $

$$ 
\phi_1 = e^{i\lambda x}, \quad \phi_2 = e^{-i\lambda x}, \quad \phi_3 = e^{i\mu x}, \quad \phi_4 = 2e^{i\mu x}
$$

**Answer: Independence**

**Case 1:** $y_1 y_2$, $\phi_1 = e^{\lambda x}, \phi_2 = e^{-\lambda x}$

Suppose $C_1 \phi_1 + C_2 \phi_2 = 0$

$$ 
C_1 e^{\lambda x} + C_2 e^{-\lambda x} = 0
$$

$$ 
C_1 e^{2\lambda x} = -C_2
$$

$$ 
\frac{d}{dx}: C_1 \lambda e^{\lambda x} - C_2 \lambda e^{-\lambda x} = 0
$$

$\therefore \, \phi_1, \phi_2$ are L.I.

**Case 2:** $\phi_1 = e^{i\lambda x}, \phi_2 = e^{-i\lambda x}$

Consider $C_1 \phi_1 + C_2 \phi_2 = 0$

$$ 
C_1 e^{i\lambda x} + C_2 e^{-i\lambda x} = 0
$$

$$ 
C_1 e^{2i\lambda x} = -C_2
$$

$$ 
\frac{d}{dx}: C_1 i\lambda e^{i\lambda x} - C_2 i\lambda e^{-i\lambda x} = 0
$$

$$ 
C_1 = 0
$$

$$ 
\therefore C_2 = 0
$$

$\therefore \, \phi_1, \phi_2$ are L.I.

**Remark:** If $\phi_1, \phi_2$ are soln of $L(y) = 0$, then $C_1 \phi_1 + C_2 \phi_2$ is also a soln of $L(y) = 0$.

If $\phi_1, \phi_2$ are soln of $L(\phi_1) = L(\phi_2) = 0$. Consider $L(C_1 \phi_1 + C_2 \phi_2) = C_1 L(\phi_1) + C_2 L(\phi_2) = 0$.

$\therefore C_1 \phi_1 + C_2 \phi_2$ is a soln.

---

If $y_1, y_2$ are real, then: $e^{\lambda x}, e^{-\lambda x}, e^{i\mu x}, e^{-i\mu x}$ are soln.

Suppose $\lambda$ is complex. Then we have $y_1 = a + ib$, $y_2 = a - ib$.

The norm of the soln $\phi$ is defined by: $||\phi(x)||$.

The size of the **absolute values** is defined by:

$$ 
w = \int_{x_0}^x |\phi_1(s)| \, ds
$$

## Norm of a Solution

Let $\phi$ be a solution of $L(y) = 0$. The norm of the soln $\phi$ is defined by $||\phi(x)||$.

Let $\phi$ be any soln of $L(y) + q^2 + a_1 q' + a_0 q = 0$ on an interval $I$ containing a point $x_0$. Then for all $w \in I$:

$$ 
||\phi(x)|| \leq ||\phi(x_0)|| \, e^{(x-x_0)}
$$

## Theorem

$$ 
|w'(x)| \leq |\phi(x_0)| \cdot |\phi'(x_0)| \cdot [m||w||\phi] + [m||u||\phi]
$$

$$ 
\leq s(1 + |\phi_0|) ||\phi||\phi| + a_1||\phi||^2
$$

$$ 
\leq (r_1 + |a_0|)^2(u||w||^2) + r_2 |u'(x)|
$$

$$ 
\leq s (r_1 |a_1| + |a_1|) (|w|^2 + |w'|^2)
$$

$$ 
|u'(x)| \leq s \, e \, u(x)
$$

$$ 
\Rightarrow > \frac{d}{dx} u(x) \leq u'(x) < \frac{d}{dx} u(x) \longrightarrow (2)
$$

$$ 
u'(x) \leq s e u(x)
$$

$$ 
\Rightarrow e^{-s\epsilon x} u'(x) - s e^{-s\epsilon x} < 0
$$

$$ 
(e^{-s \epsilon x} u) ≮ 0
$$

For $x < x'$, integrate from $x_0$ to $x$:

$$ 
e^{-s\epsilon x} u(x) - e^{-s\epsilon x_0} u(x_0) \leq 0
$$

$$ 
\Rightarrow e^{-s\epsilon x} u(x) \leq e^{-s\epsilon x_0} u(x_0)
$$

$$ 
u(x) \leq e^{s\epsilon(x-x_0)} u(x_0)
$$

$$ 
\therefore ||\phi(x)||^2 \leq ||\phi(x_0)||^2 e^{s\epsilon(x-x_0)}
$$

$$ 
\Rightarrow ||\phi(x)| \leq ||\phi(x_0)|| e^{\frac{s\epsilon(x-x_0)}{2}}
$$

By considering LHS of (2), we get

$$ 
e^{s\epsilon(x-x_0)} ||\phi(x)|| \geq ||\phi(x_0)||
$$

Then, we have

$$ 
||\phi(x_0)|| e^{-\epsilon(x-x_0)} \leq ||\phi(x)|| \leq ||\phi(x_0)|| e^{\epsilon(x-x_0)} \longrightarrow ①
$$

Suppose $x_0 > x$, then

$$ 
||\phi(x_0)|| e^{-\epsilon(x-x_0)} \leq ||\phi(x)|| \leq ||\phi(x_0)|| e^{\epsilon(x-x_0)} \longrightarrow ②
$$

From ① & ②, we get the requested result.

## Existence theorem for IVP

For any real number, $x_0$ and constants $\alpha, \beta$, there exists a solution $\phi$ for the IVP,

$$ 
L(y) = 0, \quad y(x_0) = \alpha, \quad y'(x_0) = \beta
$$

$$ 
-\infty < x < \beta
$$

**Proof:**

Let $\phi_1$ & $\phi_2$ be the soln of

$$ 
L(x) = 0.
$$

We claim that there exists $c_1, c_2$ such that,

$c_1 \phi_1 + c_2 \phi_2$ be a soln of the IVP,

$$ 
L(y) = 0
$$

$$ 
y(x_0) = \alpha
$$

$$ 
y'(x_0) = \beta
$$

$\Rightarrow c_1 \phi_1 + c_2 \phi_2$ is a soln of the IVP.

$$ 
\Leftrightarrow c_1 \phi_1(x_0) + c_2 \phi_2(x_0) = \alpha
$$

$$ 
c_1 \phi_1'(x_0) + c_2 \phi_2'(x_0) = \beta
$$

It has a unique soln,

$$ 
\Leftrightarrow \begin{vmatrix} \phi_1(x) & \phi_2(x) \\ \phi_1'(x) & \phi_2'(x) \end{vmatrix} \neq 0
$$

**Case 1:**

$$ 
\phi_1 = e^{r_1 x}, \quad \phi_2 = e^{r_2 x}, \quad r_1 \neq r_2
$$

$$ 
\phi_1' = r_1 e^{r_1 x}, \quad \phi_2' = r_2 e^{r_2 x}
$$

$$ 
\begin{vmatrix} \phi_1(x) & \phi_2(x) \\ \phi_1'(x) & \phi_2'(x) \end{vmatrix} = \begin{vmatrix} e^{r_1 x_0} & e^{r_2 x_0} \\ r_1 e^{r_1 x_0} & r_2 e^{r_2 x_0} \end{vmatrix}
$$

$$ 
= r_2 e^{r_1 x_0} \cdot e^{r_2 x_0} - r_1 e^{r_2 x_0} \cdot e^{r_1 x_0}
$$

$$ 
= (r_2 - r_1) e^{(r_1 + r_2)x_0} \neq 0
$$

**Case 2:**

$$ 
\phi_1 = e^{rx}, \quad \phi_2 = xe^{rx}
$$

$$ 
\phi_1' = re^{rx}, \quad \phi_2' = e^{rx} + rxe^{rx}
$$

$$ 
W(\phi_1, \phi_2) = \begin{vmatrix} e^{rx} & xe^{rx} \\ re^{rx} & e^{rx} + rxe^{rx} \end{vmatrix}
$$

$$ 
= e^{rx}(e^{rx} + rxe^{rx}) - (x \cdot r) e^{rx} \cdot e^{rx}
$$

$$ 
= e^{2rx}(1 + rx - rx)
$$

$$ 
= e^{2rx}
$$

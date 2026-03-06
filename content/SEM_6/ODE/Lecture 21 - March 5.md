# System of Differential Equations

$$
y' = f(x, y)
$$

$$
y(x_0) = y_0
$$

$$
\begin{aligned}
y_1' &= f_1(x, y_1, y_2, \dots, y_n) \\
y_2' &= f_2(x, y_1, y_2, \dots, y_n) \\
&\vdots \\
y_n' &= f_n(x, y_1, y_2, \dots, y_n)
\end{aligned} \quad \text{--- (1)}
$$

Let
$$
y = (y_1, y_2, \dots, y_n)
$$

$$
F = (f_1, f_2, \dots, f_n)
$$

$$
y' = F(x, y)
$$

Suppose $\phi_1, \phi_2, \dots, \phi_n$ exists, then
$$
\phi_i' = f_i(x, \phi_1, \phi_2, \dots, \phi_n)
$$

Then the
$$
\phi = (\phi_1, \phi_2, \dots, \phi_n)
$$
is a solution of (1).

# System of Linear Differential Equations

$$
\begin{aligned}
y_1' &= a_{11}y_1 + a_{12}y_2 + \dots + a_{1n}y_n + b_1(x) \\
y_2' &= a_{21}y_1 + \dots + a_{2n}y_n + b_2(x) \\
&\vdots \\
y_n' &= a_{n1}y_1 + a_{n2}y_2 + \dots + a_{nn}y_n + b_n(x)
\end{aligned}
$$

$$
\begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}' = y' = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & \dots & \dots & a_{2n} \\ \vdots & \vdots & \vdots & \vdots \\ a_{n1} & \dots & \dots & a_{nn} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix} + \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}
$$

$$
y' = A(x) \cdot y + B(x)
$$

where
$$
A(x) = \begin{pmatrix} a_{11} & \dots & a_{1n} \\ \vdots & \dots & \vdots \\ a_{n1} & \dots & a_{nn} \end{pmatrix}, \quad B = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}, \quad y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}
$$

Example:
$$
\begin{aligned}
y_1' &= y_1 + 2y_2 \\
y_2' &= 3y_1 + 4y_2
\end{aligned}
$$

$$
\begin{pmatrix} y_1 \\ y_2 \end{pmatrix}' = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix}
$$
# Reduction of $n^{th}$ order equation to a system of DE

Consider the transformation
$$
\begin{matrix} y_1 = y \\ y_2 = y' \\ y_3 = y'' \\ \vdots \\ y_n = y^{n-1} \end{matrix} \implies \begin{matrix} y_1' = y' = y_2 \\ y_2' = y'' = y_3 \\ \vdots \\ y_{n-1}' = y_n \\ y_n' = y^{(n)} \end{matrix}
$$

Consider the $n^{th}$ order equation
$$
a_0 y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = b(x), \quad a_0(x) \neq 0
$$

$$
y^{(n)} = \frac{1}{a_0} \left( b(x) - (a_1 y^{(n-1)} + \dots + a_n y) \right)
$$

$$
= \left( \frac{-a_1}{a_0} \right) y^{(n-1)} + \dots + \left( \frac{-a_n}{a_0} \right) y + \frac{b(x)}{a_0(x)}
$$

Consider
$$
\begin{matrix} y_1 = y \\ y_2 = y' \\ \vdots \\ y_n = y^{(n-1)} \end{matrix} \implies \begin{aligned} y_1' &= y' = y_2 = 0y_1 + 1y_2 + 0y_3 + \dots + 0y_n \\ y_2' &= y'' = y_3 = 0y_1 + 0y_2 + 1y_3 + \dots + 0y_n \\ &\vdots \\ y_{n-1}' &= y^{(n-1)} = y_n = 0y_1 + \dots + 1y_n \\ y_n' &= y^{(n)} = \left( \frac{-a_n}{a_0} \right) y_1 + \dots + \left( \frac{-a_1}{a_0} \right) y_n + \frac{b(x)}{a_0} \end{aligned}
$$

$$
\implies \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}' = \begin{pmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ 0 & 0 & \dots & \dots & 1 \\ \frac{-a_n}{a_0} & \dots & \dots & \dots & \frac{-a_1}{a_0} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix} + \begin{pmatrix} 0 \\ 0 \\ \vdots \\ \frac{b}{a_0} \end{pmatrix}
$$

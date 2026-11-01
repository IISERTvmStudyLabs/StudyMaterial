## Definition (Vitali Cover)

Let $E\subset\mathbb R$ and let $\mathcal I=\{I_{\alpha}:\alpha\in\Lambda\}$ be a collection of intervals.
We say $\mathcal I$ is a Vitali cover of $E$ if for every $x\in E$ and every $\varepsilon>0$, there exists
$I_{\alpha}\in\mathcal I$ such that
$$
x\in I_{\alpha}
\quad\text{and}\quad
\lambda(I_{\alpha})<\varepsilon.
$$

### Example

Take $E=[a,b]$, $a<b$. Then
$$
\left\{\left[y-\frac1k,\ y+\frac1k\right]: y\in\mathbb Q\cap[a,b],\ k\in\mathbb N\right\}
$$
is a Vitali cover of $[a,b]$.

Proof: exercise.

___
## Vitali Covering Lemma

Suppose $E\subset\mathbb R$ with $\lambda^*(E)<\infty$ and $\{I_{\alpha}:\alpha\in\Lambda\}$ is a Vitali cover of $E$.
Then for any $\varepsilon>0$, there exists a finite disjoint collection
$$
\{I_j\}_{j=1}^{N}
$$
such that
$$
\lambda^*\left(E\setminus\bigcup_{j=1}^{N} I_j\right)<\varepsilon.
$$

___
## Dini Derivatives

Suppose $f:[a,b]\to\mathbb R$ and $x\in(a,b)$. Define:

1. Upper right derivative
$$
D^{+}f(x):=\limsup_{h\to0^+}\frac{f(x+h)-f(x)}{h}.
$$

2. Lower right derivative
$$
D_{+}f(x):=\liminf_{h\to0^+}\frac{f(x+h)-f(x)}{h}.
$$

3. Upper left derivative
$$
D^{-}f(x):=\limsup_{h\to0^-}\frac{f(x+h)-f(x)}{h}.
$$

4. Lower left derivative
$$
D_{-}f(x):=\liminf_{h\to0^-}\frac{f(x+h)-f(x)}{h}.
$$

### Remark

If all four limits are finite and equal, then $f$ is differentiable at $x$.

### Examples

1. Dirichlet-type function on $[0,1]$:
$$
f(x)=
\begin{cases}
0, & x\in\mathbb Q\cap[0,1],\\
1, & \text{otherwise}.
\end{cases}
$$
At $x=1/2$, the Dini derivatives are infinite in the expected oscillatory sense
(exercise: compute all four explicitly).

2. $f(x)=|x|$:
$$
D^{+}f(0)=D_{+}f(0)=1,
\qquad
D^{-}f(0)=D_{-}f(0)=-1.
$$

3. $f(x)=x^{1/3}$: compute Dini derivatives at $x=0$ (exercise).

### Basic inequalities

Always,
$$
D^{+}f(x)\ge D_{+}f(x),
\qquad
D^{-}f(x)\ge D_{-}f(x).
$$
In general, relations like $D_{+}f(x)\ge D^{-}f(x)$ need not hold (example: Cantor function).

___
## Exceptional Sets and Differentiability Set

Define subsets of $(a,b)$:
$$
E_1:=\{x\in(a,b): D^{-}f(x)>D_{+}f(x)\},
$$
$$
E_2:=\{x\in(a,b): D_{-}f(x)>D^{+}f(x)\},
$$
$$
E_3:=\{x\in(a,b): D^{+}f(x)=\infty\},
\qquad
E_4:=\{x\in(a,b): D_{-}f(x)=-\infty\}.
$$

Let
$$
E:=\{x\in(a,b): f\text{ is differentiable at }x\}.
$$

### Proposition

$$
(a,b)\setminus\bigcup_{j=1}^{4}E_j\subseteq E.
$$

#### Idea of proof

If $x_0\notin\bigcup_{j=1}^{4}E_j$, then the chain of inequalities between the four Dini derivatives at $x_0$ forces
all of them to be finite and equal. Hence $f$ is differentiable at $x_0$.

Exercise:
$$
E_3\cup E_4=\{x\in(a,b): |f'(x)|=\infty\}=:A.
$$

___
## Theorem (Lebesgue-Young)

If $f$ is monotone on $[a,b]$, then $f$ is differentiable a.e. (with respect to Lebesgue measure).

### Proof outline from class notes

Assume $f$ is increasing.
It suffices to show
$$
\lambda^*(A)=0
\quad\text{and}\quad
\lambda^*(E_j)=0\ (j=1,2).
$$

For a fixed $c>0$, for $x\in A$ and small $h>0$ one has
$$
\frac{f(x+h)-f(x)}{h}>c
\quad\Longrightarrow\quad
f(x+h)-f(x)>ch.
$$

Thus intervals of the form $[x,x+h_x]$ give a Vitali cover of $A$.
Apply Vitali covering lemma to extract finite disjoint intervals and use monotonicity to estimate
$$
c\sum_j h_j\le \sum_j\big(f(x_j+h_j)-f(x_j)\big)\le f(b)-f(a),
$$
which yields $\lambda^*(A)=0$ after letting parameters vary.

The same method handles $E_1,E_2$, hence the theorem.

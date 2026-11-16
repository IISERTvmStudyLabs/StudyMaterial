---
course: Functional Analysis
Lecture: "2"
date: 2026-09-28
---
Let $\mathcal{L} \in \mathcal{L}(X, Y)$, 
$$ \|\mathcal{L}\|_{\mathcal{L}(X, Y)} := \sup_{\|x\|_X \le 1} \|\mathcal{L}x\|_Y = \sup_{\|x\|_X = 1} \|\mathcal{L}x\|_Y \quad \text{(over a sphere?)} $$

**Proof:** $l = \sup_{\|x\|_X = 1} \|\mathcal{L}x\|_Y \le \|\mathcal{L}\|_{\mathcal{L}(X,Y)}$ by definition.

TST $\|\mathcal{L}\|_{\mathcal{L}(X, Y)} \le l$

Take $\varepsilon > 0$. $\exists x_\varepsilon \in X$ with $\|x_\varepsilon\|_X \le 1$, s.t $\|\mathcal{L}\|_{\mathcal{L}(X,Y)} - \varepsilon < \|\mathcal{L}x_\varepsilon\|_Y$

Take $\tilde{x}_\varepsilon = x_\varepsilon / \|x_\varepsilon\|_X$, $\|\tilde{x}_\varepsilon\| = 1$

$$ 
\begin{aligned}
\|\mathcal{L}\|_{\mathcal{L}(X, Y)} - \varepsilon &< \|x_\varepsilon\|_X \|\mathcal{L}\tilde{x}_\varepsilon\|_Y \\
&\le \|\mathcal{L}\tilde{x}_\varepsilon\|_Y \\
&\le \sup_{\|\tilde{x}_\varepsilon\|_X = 1} \|\mathcal{L}\tilde{x}_\varepsilon\|_Y \\
&= l.
\end{aligned}
$$

## Dual definition of norm:

$$ \|x\|_X = \sup_{\substack{\phi \in X^* \\ \|\phi\|_{X^*} = 1}} |\phi(x)| $$

If $\phi \in X^*$ with $\|\phi\|_{X^*} = 1$, then $|\phi(x)| \le \|\phi\|_{X^*} \|x\|_X = \|x\|_X$

$$ \therefore \sup_{\substack{\phi \in X^* \\ \|\phi\|_{X^*} = 1}} |\phi(x)| \le \|x\|_X $$

Take $x \neq 0$. By H-B, $\exists \phi \in X^*$ with $\|\phi\|_{X^*} = 1$ & $\phi(x) = \|x\|_X$

$$ \therefore \|x\|_X = \phi(x) \le |\phi(x)| \le \sup_{\substack{\phi \in X^* \\ \|\phi\|_{X^*} = 1}} |\phi(x)| $$

---

## Adjoint of a Linear Operator:

1. Given $V \subset X$, we define the annihilator $V^\perp$ of $V$ is defined by —
$$ V^\perp := \{ \phi \in X^* : \phi(x) = 0 \ \forall \ x \in V \} $$

Pre-annihilator of $W \subset X^*$ is defined by —
$$ W^\perp := \{ x \in X : \phi(x) = 0 \ \forall \ \phi \in W \} $$

2. $X, Y$ be Banach and $\mathcal{L} \in \mathcal{L}(X, Y)$. For $\phi \in Y^*$, the composition $\phi \circ \mathcal{L}$ maps $X$ to $\mathbb{K}$ and it is linear and bounded, i.e.,
$$ \phi \circ \mathcal{L} \in X^* : \text{the operator } \phi \longmapsto \phi \circ \mathcal{L} $$
is called the adjoint or the dual of $\mathcal{L}$ and is denoted by $\mathcal{L}^*$.

---

$$ \mathcal{L}^* : Y^* \longrightarrow X^* $$

$$ {}_{X^*} \langle \mathcal{L}^* \phi, x \rangle_X := {}_{Y^*} \langle \phi, \mathcal{L}x \rangle_Y, \quad \begin{subarray}{c} x \in X \\ \phi \in Y^* \end{subarray} $$

> **Note :**
> duality pairing $\langle \cdot, \cdot \rangle$
> Ex: $\phi(x) := {}_{X^*} \langle \phi, x \rangle_X$

**Ex:** Take $X = c_0$, the space of all sequence converging to 0
$X^* = l_1$, abs summable sequences.

$\mathcal{L} : X \to X$, left shift operator is $\mathcal{L}(x_1, x_2, \dots) = (x_2, x_3, \dots)$

$\mathcal{L}^* = l_1$. Let $y = (y_1, y_2, \dots) \in l_1$

$$ 
\begin{aligned}
{}_{l_1} \langle y, \mathcal{L}x \rangle_{c_0} &= \sum_{k=1}^\infty y_k (\mathcal{L}x)_k \\
&= y_1 x_2 + y_2 x_3 + \dots \\
&= 0 \cdot x_1 + y_1 \cdot x_2 + y_2 \cdot x_3 + \dots \\
&= \sum_{k=1}^\infty (\mathcal{L}^* y)_k x_k \\
&= {}_{l_1} \langle \mathcal{L}^* y, x \rangle_{c_0}
\end{aligned}
$$

$\mathcal{L}^*(y) = \mathcal{L}^*(y_1, y_2, \dots) = (0, y_1, y_2, \dots)$

$\mathcal{L}^* : l_1 \to l_1$, the right shift operator.
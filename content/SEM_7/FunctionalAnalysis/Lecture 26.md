---
course: Functional Analysis
Lecture:
date: 13 October
---
# F. Riesz Representation Theorem

## Theorem (F. Riesz)
Let $H$ be a Hilbert space. Then:
(i) For every $x \in H$, the map
$$
y \mapsto (y, x)_H \in \mathbb{K}
$$
is a bdd linear functional.
(ii) For every $\phi \in H^*$, $\exists! x \in H$ s.t.
$$
\langle \phi, y \rangle_H = \phi(y) = (y, x)_H, \quad \forall y \in H
$$

Proof:
i) Follows easily from Cauchy-Schwarz:
Let $\phi_x(y) = (y, x)$, ($x$ is fixed).
$$
|\phi_x(y)| = |(y, x)| \le \|y\|_H \cdot \|x\|_H
$$
$$
\|\phi_x\| = \sup_{\|y\|=1} |\phi_x(y)| \le \|x\|_H
$$
$$
\phi_x \in H^*
$$

ii) If $\phi$ is the zero functional, take $x = 0$.
Suppose $\phi$ is non-trivial. Since $\phi$ is continuous, $V = \ker \phi$ is a closed subspace of $H$.
Choose $x_0 \in H$ s.t. $\phi(x_0) \neq 0$.
Let
$$
z := x_0 - P_V x_0 \in V^\perp
$$
$$
\phi(z) = \phi(x_0) - \phi(P_V x_0) = \phi(x_0) \neq 0
$$

For any $x \in H$, since
$$
\phi\left(x - \frac{\phi(x)}{\phi(z)} z\right) = \phi(x) - \frac{\phi(x)}{\phi(z)} \phi(z) = 0
$$
$$
x - \frac{\phi(x)}{\phi(z)} z \in V
$$
Since $z \in V^\perp$,
$$
\left(x - \frac{\phi(x)}{\phi(z)} z, z\right) = 0
$$

$$
(x, z) - \left(\frac{\phi(x)}{\phi(z)} z, z\right) = 0
$$
$$
(x, z) - \frac{\phi(x)}{\phi(z)} (z, z) = 0
$$
$$
(x, z) - \frac{\phi(x)}{\phi(z)} \|z\|^2 = 0
$$
$$
\phi(x) = \frac{\phi(z)}{\|z\|^2} (x, z) = \left(x, \frac{\overline{\phi(z)}}{\|z\|^2} z\right) = (x, a)
$$
$$
a = \frac{\overline{\phi(z)}}{\|z\|^2} z \in H
$$

Given $\phi \in H^*$, $\exists a \in H$ s.t.
$\phi(x) = (x, a), \forall x \in H$.

If $\exists a' \in H$ s.t. $\phi(x) = (x, a'), \forall x \in H$, then:
$$
(x, a) = (x, a'), \quad \forall x \in H
$$
$$
(x, a - a') = 0, \quad \forall x \in H
$$
Choose $x = a - a'$, then
$$
(a - a', a - a') = \|a - a'\|^2 = 0 \Rightarrow a = a'
$$

## Corollary
Let $H$ be Hilbert. Define $\Psi : H^* \rightarrow H$ by $\Psi(\phi) = a$ where $\phi(x) = (x, a)$ as above.

Suppose $\phi_1$ and $\phi_2$ give the same element $a$.
$\Rightarrow \phi_1(x) = (x, a) = \phi_2(x) \Rightarrow \phi_1 = \phi_2$
$\Psi$ is injective (one-to-one).

If $a \in H$, define $\phi_a$ by:
By (i),
$$
\phi_a(x) := (x, a)_H
$$
$\phi_a \in H^*$ and $\Psi(\phi_a) = a$.
$\Rightarrow \Psi$ is surjective, so $\Psi$ is bijective.

If $\Psi(\phi_1) = a_1, \Psi(\phi_2) = a_2$,
$$
(\phi_1 + \phi_2)(x) = \phi_1(x) + \phi_2(x) = (x, a_1) + (x, a_2) = (x, a_1 + a_2)
$$
Then
$$
\Psi(\phi_1 + \phi_2) = a_1 + a_2 = \Psi(\phi_1) + \Psi(\phi_2)
$$

Suppose $\Psi(\phi) = a$.
Since the inner product $(x, y)$ is conjugate linear in $y$:
$$
(x, \overline{\lambda} a) = \lambda (x, a) = \lambda \phi(x) = (\lambda \phi)(x)
$$
$$
\Psi(\lambda \phi) = \overline{\lambda} a = \overline{\lambda} \Psi(\phi)
$$
$\Psi$ is conjugate linear (linear if over $\mathbb{R}$).

$\phi(x) = (x, a), \forall x \in H$, then
If $\Psi(\phi) = a$,
$$
\|\phi\|_{H^*} \le \|a\|_H
$$
Since $a \neq 0$, take $x = a / \|a\|$ to get:
$$
\|\phi\|_{H^*} \ge \|a\|_H
$$
$$
\Rightarrow \|\phi\|_{H^*} = \|a\|_H
$$
In other words,
$$
\|\Psi(\phi)\|_H = \|\phi\|_{H^*}
$$
$\Psi : H^* \rightarrow H$, $\Psi(\phi) = a$, given by F. Riesz is a bijective isometry. And is called F. Riesz isometry.

## Corollary
Every Hilbert Space is Reflexive.
Let $\Phi \in H^{**}$. Show that $\exists x \in H$ s.t. $J(x) = J_x = \Phi$, or $J(H) = H^{**}$.
$$
\Phi(\phi) = \phi(x), \quad \forall \phi \in H^*
$$
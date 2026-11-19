---
course: Functional Analysis
Lecture: "13"
date: 2026-08-24
---
### Dual Spaces, Reflexivity, Weak & Weak-* Convergence

> [!abstract] Definition: Dual Space ($X^*$)
> Let $X$ be a Banach space. The dual space of $X$ is defined to be:
> $$
> \begin{aligned}
> X', \, X^* &= \mathcal{L}(X, \mathbb{K}) \\
> &= \{ \phi: X \rightarrow \mathbb{K} \mid \phi \text{ is linear and bounded} \}
> \end{aligned}
> $$
> Since $\mathbb{K}$ is complete, $X^* = \mathcal{L}(X, \mathbb{K})$ is complete under the norm:
> $$\|\phi\| = \sup_{\|x\|_X \leq 1} |\phi(x)|$$

* $\phi(x)$ is also denoted as $\langle \phi, x \rangle_{X^*, X}$.

#### The Evaluation Map $J_x$ and Second Dual ($X^{**}$)

For a fixed $x \in X$, consider the map $J_x : X^* \rightarrow \mathbb{K}$ given by:
$$\phi \in X^* \xrightarrow{J_x} \phi(x) \in \mathbb{K}$$

**Linearity of $J_x$:**
$$
\begin{aligned}
J_x(\phi_1 + \phi_2) &= (\phi_1 + \phi_2)(x) \\
&= \phi_1(x) + \phi_2(x) \\
&= J_x(\phi_1) + J_x(\phi_2)
\end{aligned}
$$
$$
\begin{aligned}
J_x(\lambda\phi) &= (\lambda\phi)(x) \\
&= \lambda(\phi(x)) \\
&= \lambda J_x(\phi)
\end{aligned}
$$

**Is $J_x$ continuous?**
For $J_x: X^* \rightarrow \mathbb{K}$ (where $(X^*, \|\cdot\|_{X^*})$ is Banach):
$$|J_x(\phi)| = |\phi(x)| \leq \|\phi\|_{X^*} \|x\|_X$$
$$\implies \sup_{\substack{\phi \in X^* \\ \|\phi\|_{X^*} \leq 1}} |J_x(\phi)| \leq \|x\|_X$$
$$\implies J_x \text{ is bounded, with } \|J_x\| \leq \|x\|_X$$

**Is $\|J_x\| = \|x\|_X$?**
By Corollary 1 to the Hahn–Banach Theorem for NLS, given any $x \neq 0$, $\exists \phi_0 \in X^*$ with $\|\phi_0\|_{X^*} = 1$ and $\phi_0(x) = \|x\|_X$.
$$\text{Hence } \|J_x\| = \|x\|_X$$

* Thus, $J_x \in \mathcal{L}(X^*, \mathbb{K})$ and $\|J_x\|_{X^{**}} = \|x\|_X$.
* The space $X^{**} := \mathcal{L}(X^*, \mathbb{K})$ is called the **second dual (bi-dual)** of $X$.
* For each $x \in X$, we have $J_x \in X^{**}$.

![](_page_14_Diagram_20.jpeg)

# The Canonical Embedding & Reflexivity

Define $J: X \rightarrow X^{**}$ as:
$$
\begin{aligned}
J(x) &= J_x \\
J(x)(\phi) &= J_x(\phi) = \phi(x)
\end{aligned}
$$
Clearly, $J(X) \subseteq X^{**}$.

* **Question:** Is every element in $X^{**}$ of the form $J_x$ for some $x \in X$?
* Since $x \xrightarrow{J} J_x$ satisfies $\|J_x\|_{X^{**}} = \|x\|_X$, the map $J: X \rightarrow X^{**}$ is an isometry and is called the **canonical embedding**.

> [!abstract] Definition: Reflexive Space
> A normed space $X$ is called **reflexive** if $J(X) = X^{**}$.

#### Examples

1. **Finite-Dimensional Spaces:**
   Let $X$ be a finite-dimensional NLS and consider $J: X \rightarrow X^{**}$.
   If $x \in \ker(J)$:
   $$
   \begin{aligned}
   J(x) = 0 &\implies J(x)(\phi) = 0 \quad \forall \phi \in X^* \\
   &\implies \phi(x) = 0 \quad \forall \phi \in X^*
   \end{aligned}
   $$
   If $x \neq 0$, then $\exists \phi_0 \in X^*$ such that $\phi_0(x) = \|x\| \neq 0$.
   $$\implies \ker J = \{0\}$$
   Since $\dim X = \dim X^* = \dim X^{**} = N$ (say) and $J$ is injective, $J$ is surjective. Hence, every finite-dimensional NLS is reflexive.

2. **$L^p$ Spaces:**
   $L^p(\mathbb{R})$ is reflexive for $1 < p < \infty$, where:
   $$\frac{1}{p} + \frac{1}{q} = 1 \implies 1 < q < \infty$$
   * If $g \in L^q(\mathbb{R})$, then the map
     $$f \in L^p(\mathbb{R}) \mapsto \int_{\mathbb{R}} f g \, dx \in \mathbb{K}$$
     is linear and continuous.
   * Conversely, if $\phi \in (L^p(\mathbb{R}))^*$, then $\phi = \phi_g$ for some $g \in L^q(\mathbb{R})$.
   * Therefore:
     $$(L^p(\mathbb{R}))^* \cong L^q(\mathbb{R}) \quad \text{and} \quad (L^q(\mathbb{R}))^* \cong L^p(\mathbb{R})$$
   * However, $L^1(\mathbb{R})$ and $L^\infty(\mathbb{R})$ are **not** reflexive.
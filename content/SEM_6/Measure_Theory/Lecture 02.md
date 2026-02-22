From last class, [[Measure-Theory-Notes/Measure_Theory/Lecture 1#^359538|Lecture 1]]
But there exists no such mapping.

# Vitali's construction

non-measurable set.

On $\mathbb{R}$, we define an equivalence relation $x \sim y$ if

$$x - y \in \mathbb{Q}$$

Let $\Lambda = \{ \alpha : \alpha \text{ is an equivalence class of } \sim \}$

$$x - y \in \mathbb{Q}$$

$$y - z \in \mathbb{Q}$$

$$x - z \in \mathbb{Q}$$

Example: $\Lambda$ is uncountable.
# Axiom of Choice

Every indexed family $\{ S_i \}_{i \in I}$ of non-empty sets, there exists an indexed set $\{ x_i \}_{i \in I}$ such that $x_i \in S_i$ for every $i \in I$.
Given an equivalence class $\alpha \in \Lambda$ there exists $x_\alpha \in [0, 1]$

$$y \in \alpha \subseteq \mathbb{R}$$

$$z = (y - [y]) \in [0, 1]$$

$$y - z = [y] \in \mathbb{Q}$$

$$\Rightarrow y \sim z$$

$$\Rightarrow z \in \alpha$$

Define $E = \{ x_\alpha : \alpha \in \Lambda \}$ (well defined subset of $\mathbb{R}$).

1. $(E + p) \cap (E + q) = \phi$ if $p, q \in \mathbb{Q}, p \neq q$

Suppose $z \in (E + p) \cap (E + q)$

then $z = x_\alpha + p = x_\beta + q$ for some $x_\alpha, x_\beta \in E$ ($\alpha, \beta$ - different equivalence classes)

$$\therefore x_\alpha - x_\beta = q - p \in \mathbb{Q} \Rightarrow x_\alpha \sim x_\beta \Rightarrow \alpha = \beta$$

$$\Rightarrow x_\alpha = x_\beta$$

$$\Rightarrow p = q$$

$$\Rightarrow \in$$

$\therefore$ The intersection is empty.

2. 
   $$\bigcup_{p \in \mathbb{Q} \cap (-1, 1)} (E + p) \subseteq [-1, 2] \space\to (-1, 2)?)$$

3. 
   $$(0, 1) \subseteq \bigcup_{p \in (-1, 1) \cap \mathbb{Q}} (E + p)$$

**NOTE**

Union of $E + p$ is large enough to cover the interval $[0, 1]$ but small enough to fit within $[-1, 2]$.

Every $(E + p)$ must have same measure.
Take $x \in (0, 1)$. Then $x \in \alpha$ for some $\alpha$.

i.e. $x \sim x_\alpha \Rightarrow x - x_\alpha \in \mathbb{Q}$.

If $q = x - x_\alpha \in (-1, 1) \Rightarrow x = x_\alpha + q$ with $q \in (-1, 1)$.

Now, $\mu \left( \bigcup_{p \in \mathbb{Q} \cap (-1, 1)} (E + p) \right) \leq \mu([-1, 2]) = 3$.

$$\Rightarrow \sum_{p \in \mathbb{Q} \cap (-1, 1)} \mu(E + p) \leq 3$$

$$\Rightarrow \sum_{p \in \mathbb{Q} \cap (-1, 1)} \mu(E) \leq 3$$

$$\Rightarrow \mu(E) = 0$$

For any $n \in \mathbb{N}$

$$(0, 1 - \frac{1}{n}] \subseteq \bigcup_{p \in (-1, 1) \cap \mathbb{Q}} (E + p)$$

$$\Rightarrow \mu(0, 1 - \frac{1}{n}] \leq \mu(\cup \dots) = \sum_{q \in \mathbb{Q} \cap (-1, 1)} \mu(E + q)$$

$$\Rightarrow 1 - \frac{1}{n} \leq \sum_{q \in \mathbb{Q} \cap (-1, 1)} \mu(E + q)$$

As $n \rightarrow \infty$

$$\Rightarrow 1 \leq \sum_{q \in \mathbb{Q} \cap (-1, 1)} \mu(E) \Rightarrow 1 \leq 0$$

___
Throughout this lecture, $\Omega \neq \emptyset$.

# Definition (Semi-algebra)

$S \subseteq \mathcal{P}(\Omega)$ is called a semi-algebra if:    
1. $\Omega \in S$
2. $A \in S, B \in S \Rightarrow A \cap B \in S$ (closed under intersection)
3. If $E \in S$ then, $\exists A_1, \dots, A_k \in S$ such that $E^c = \bigcup_{j=1}^k A_j$ disjoint


**Exercise:** $\Omega = \mathbb{R}$

$$S = \{ (a, b] : a \in \mathbb{R}, b \in \mathbb{R} \} \cup \{ (c, \infty) : c \in \mathbb{R} \} \cup \{ (-\infty, d] : d \in \mathbb{R} \} \cup \{ \mathbb{R}, \emptyset \}$$

# Definition (Algebra)

$\mathcal{A} \subseteq \mathcal{P}(\Omega)$ is called an Algebra if:
1. $\Omega \in \mathcal{A}$
2. $A, B \in \mathcal{A} \Rightarrow A \cup B \in \mathcal{A}$ (closed under union)
3. $A \in \mathcal{A} \Rightarrow A^c \in \mathcal{A}$ (closed under complement)

$$(A \cap B)^c = A^c \cup B^c$$
**NOTE**

Algebra is closed under complements.

A single set in the collection semi-algebra only requires the complement to be a union of several sets from the collection.

An algebra is closed under intersection.

$$(a, b) = \bigcup_{n=1}^\infty (a, b - \frac{1}{n}]$$

# Definition ($\sigma$-Algebra)

$\mathcal{F} \subseteq \mathcal{P}(\Omega)$ is called a $\sigma$-Algebra if:

1. $\Omega \in \mathcal{F}$
2. $A \in \mathcal{F} \Rightarrow A^c \in \mathcal{F}$ (closed under complement)
3. If $A_1, A_2, \dots \in \mathcal{F} \Rightarrow \bigcup_{j=1}^\infty A_j \in \mathcal{F}$ (closed under union)
____
### Exercise
1. If $\{ \mathcal{A}_\alpha \}_{\alpha \in I}$ is a family of algebras, then $\bigcap_{\alpha \in I} \mathcal{A}_\alpha$ is also an algebra.

**Contains $\Omega$**
Since each $\mathcal{A}_\alpha$ is an algebra, $\Omega \in \mathcal{A}_\alpha$ for all $\alpha$.
Thus, $\Omega \in \bigcap_\alpha \mathcal{A}_\alpha$.
**Closed under complement**
If $A \in \bigcap_\alpha \mathcal{A}_\alpha$, then $A \in \mathcal{A}_\alpha$ for all $\alpha$.
Since each $\mathcal{A}_\alpha$ is an algebra, $A^c \in \mathcal{A}_\alpha$ for all $\alpha$.
Thus, $A^c \in \bigcap_\alpha \mathcal{A}_\alpha$.
**Closed under finite union**
If $A, B \in \bigcap_\alpha \mathcal{A}_\alpha$, then $A, B \in \mathcal{A}_\alpha$ for all $\alpha$.
Since each $\mathcal{A}_\alpha$ is an algebra, $A \cup B \in \mathcal{A}_\alpha$ for all $\alpha$.
Thus, $A \cup B \in \bigcap_\alpha \mathcal{A}_\alpha$.

2. If $\{ \mathcal{F}_\alpha \}_{\alpha \in I}$ is a family of $\sigma$-Algebras, then $\bigcap_{\alpha \in I} \mathcal{F}_\alpha$ is also a $\sigma$-algebra.

**Contains $\Omega$**
For every $\alpha \in I$, $\Omega \in \mathcal{F}_\alpha$ because each $\mathcal{F}_\alpha$ is a $\sigma$-algebra.
Thus, $\Omega \in \bigcap_{\alpha \in I} \mathcal{F}_\alpha$.
**Closed under complement**
If $A \in \bigcap_{\alpha \in I} \mathcal{F}_\alpha$, then $A \in \mathcal{F}_\alpha$ for all $\alpha$.
Since each $\mathcal{F}_\alpha$ is a $\sigma$-algebra, $A^c \in \mathcal{F}_\alpha$ for all $\alpha$.
Thus, $A^c \in \bigcap_{\alpha \in I} \mathcal{F}_\alpha$.
**Closed under countable union**
Let $A_1, A_2, \dots \in \bigcap_{\alpha \in I} \mathcal{F}_\alpha$. Then for each $\alpha$, $A_n \in \mathcal{F}_\alpha$ for all $n$.
Since each $\mathcal{F}_\alpha$ is a $\sigma$-algebra, $\bigcup_{n=1}^\infty A_n \in \mathcal{F}_\alpha$ for all $\alpha$.
Thus, $\bigcup_{n=1}^\infty A_n \in \bigcap_{\alpha \in I} \mathcal{F}_\alpha$.

____
# Definition

1. If $C \subseteq \mathcal{P}(\Omega)$, where $C$ is a class of subsets of $\Omega$, then

$$\mathcal{A}(C) = \bigcap_{\substack{\mathcal{A} \text{ algebra} \space ; \in \mathcal{P}(\Omega)\\ C \subseteq \mathcal{A}}} \mathcal{A}$$

is called the algebra generated by $C$.
___

**NOTE**

It is the intersection of all algebras on the set $X$ that contains $C$.
___

2. $$\mathcal{F}(C) = \bigcap_{\substack{\mathcal{F} \text{ } \sigma \text{-algebra} \\ C \subseteq \mathcal{F}}} \mathcal{F}$$

---
**Example**

Let $\Omega$ be uncountable. Consider

$$\mathcal{F} = \{ A \subseteq \Omega : A \text{ or } A^c \text{ is countable} \}$$

then $\mathcal{F}$ is a $\sigma$-algebra.
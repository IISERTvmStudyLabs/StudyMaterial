---
course: Functional Analysis
Lecture: "9"
date: 13 August
---

### Proof: The proof is based on Zeanis lemma

Defn:

① A set  $P$  is a partially ordered set if there is a relation  $\leq$  s.t.

![](_page_15_Picture_26.jpeg)

①  $a \leq b$  and  $b \leq c \Rightarrow a \leq c \quad \forall a, b, c \in P$ 

②  $a \leq a \quad \forall a \in P$ 

③  $a \leq b$  and  $b \leq a \Rightarrow a = b \quad \forall a, b \in P$ .

 $(P, \leq)$  is called partially ordered at (post)

② Let  $(P, \leq)$  be a post

i) A subset  $Q \subset P$  is called totally ordered if for all  $a, b \in Q$  either  $a \leq b$  or  $b \leq a$ .

ii) An element  $a \in P$  is called an upper bound of a subset  $Q \subset P$  if  $b \leq a \quad \forall b \in Q$ .

iii) An element  $a \in P$  is called a maximal element of  $P$  for any  $b \in P$

$$a \leq b \Rightarrow b = a.$$

→ Lemma: (Bornl's)

Let  $(P, \leq)$  be a non-empty poset with the property that every totally ordered subset of  $P$  has an upper bound.

Then  $P$  contains a minimal element.

:

→ Proof of Hahn-Banach:

suppose  $V \neq X$ 

Step 1: We extend  $f$  to a subspace that is one-dimensional larger than  $V$ . s.t. the extension is still dominated by  $P$ .

Fix  $x_0 \in X \setminus V$  and let

$$W = \{x + \lambda x_0 \mid x \in V, \lambda \in \mathbb{R}\} = V \oplus \mathbb{R}_{x_0}$$

If  $W$  is a subspace of  $X$  (verify). and  $V \subset W$ .

For any  $x, y \in V$  we have

$$f(x) + f(y) = f(x+y) \leq p(x+y) = p(x-x_0+y+x_0)$$

$$\leq p(x-x_0) + p(y+x_0)$$

$$f(x) - p(x-x_0) \leq p(y+x_0) - f(y) \quad \forall x, y \in V. \quad \text{—————} \textcircled{\#}$$

We want to extend  $f$  to  $W$  say  $\phi$ 

$$\begin{aligned} \phi(x+\lambda x_0) &= \phi(x) + \lambda \phi(x_0) \\ &= f(x) + \lambda \phi(x_0) \end{aligned}$$

We need to know  $\phi(x_0)$ 

Let  $a_0 = \sup_{x \in V} f(x) - p(x-x_0)$ 

From  $\circledast$ ,

$$f(x) - p(x-x_0) \leq a_0 \leq p(x+x_0) - f(x) \quad \forall x \in X.$$

$$\therefore f(x) - a_0 \leq p(x-x_0) \quad ————— $\circledast$ \quad \forall x \in V.$$

$$f(x) + a_0 \leq p(x+x_0) \quad ————— $\enclose{circle}{**}$$$

Define  $\phi: W \rightarrow \mathbb{R}$  as

$$\phi(x+\lambda x_0) := f(x) + \lambda a_0$$

Verify that  $\phi$  is linear, clearly  $\phi = f$  on  $V$ .

ie  $\phi$  is an extension of  $f$ .

to show:  $\phi \leq p$ .

If  $y \in W$ , then  $\exists ! x \in V$  and  $\lambda \in \mathbb{R}$  s.t.  $y = x + \lambda x_0$ .

$$\begin{aligned} \text{If } \lambda > 0, \phi(x+\lambda x_0) &= f(x) + \lambda a_0 \\ &= \lambda \left( f\left(\frac{x}{\lambda}\right) + a_0 \right) \\ &\leq \lambda p\left(\frac{x}{\lambda} + x_0\right) \quad (\text{from } \enclose{circle}{**}) \\ &= p(x+\lambda x_0) \quad (\text{homogenity}) \end{aligned}$$

 $\parallel \downarrow$  if  $\lambda < 0$ ,  $\phi(x+\lambda x_0) \leq p(x_0+\lambda x_0)$

We apply Zorn's lemma to get a maximally defined ent<sup>n</sup> of  $f$ .

Let  $P$  be the set of all pairs  $(W, \phi)$ . When  $W$  is a subspace of  $X$  containing  $V_1$  and  $\phi$  is an ent<sup>n</sup> of  $f$  defined on  $W$  and dominated by  $P$ .

Define  $\leq$  on  $P$  via

$$(W_1, \phi_1) \leq (W_2, \phi_2) \text{ if } W_1 \subset W_2$$

$$\phi_2|_{W_1} = \phi_1$$

(Verify that this is partial order relation)

Let  $Q = \{(W_\alpha, \phi_\alpha) \mid \alpha \in A\}$  (arbitrary collection)

be a totally ordered subset of  $P$ .

to find: an upper hold of  $Q$ .

Define the upper hold  $W_Q := \bigcup_{\alpha \in A} W_\alpha$ .

Claim: Since  $Q$  is totally ordered;  $W_Q$  is a subspace of  $X$ .

Let  $x, y \in W_Q \Rightarrow x \in W_\alpha, y \in W_\beta$ 

Either  $W_\alpha \subset W_\beta$  or  $W_\beta \subset W_\alpha$ 

 $\therefore$   $x, y$  belong to the same subspace, the larger among  $W_\alpha$  &  $W_\beta$

Define  $\phi_q: W_q \rightarrow \mathbb{R}$  as

$$\phi_q(x) = \phi_\alpha(x) \text{ if } x \in W_\alpha$$

(Verify that  $\phi_q$  is well defined and linear)

From the defn of  $\leq$ , we see that  $(W_q, \phi_q)$  is an upper bold. of  $\mathbb{Q}$ .

By Zorn's lemma,  $\exists$  a maximal element  $(\hat{W}, \hat{\phi})$  clearly

 $\hat{W} = x$  if not we repeat step 1, contradicts the maximality. Take  $F = \hat{\phi}$ .

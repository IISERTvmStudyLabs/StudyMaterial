---
course: Functional Analysis
Lecture: "16"
date: 3 September
---

→ Banach Alooglu theorem: (For separable case)

 $X$  is separable banach  $(\phi_n)_{n \in \mathbb{N}} \subset X^*$  is uniformly bold

$$\sup \|\phi_n\|_X \leq C < \infty$$

Then  $\exists (\phi_{n_j})_{j \in \mathbb{N}} \subseteq (\phi_n)_{n \in \mathbb{N}}$  s.t.

$$\phi_{n_j}(x) \rightarrow \phi(x) \quad \forall x \in X, \text{ for some } \phi \in X^*$$

[Bolzano Weistrass on  $X^*$  (infinite dimensional)]

Proof:

Let  $(\phi_n)_{n \in \mathbb{N}} \subset X^*$  be s.t.

$$\sup_{n \in \mathbb{N}} \|\phi_n\|_{X^*} \leq C < \infty$$

Let  $S = \{x_k \mid k \in \mathbb{N}\}$  be a countable dense subset of  $X$ .

We construct a subsequence  $(\phi_{n_j})_{j \in \mathbb{N}}$  of  $(\phi_n)_{n \in \mathbb{N}}$  s.t.

$$\phi_{n_j}(x_k) \rightarrow \phi(x_k) \quad \forall k \text{ and for some } \phi \in X^*$$

We apply a diagonal argument

Consider  $(\phi_n(x_1))_{n \in \mathbb{N}}$ . Since it is a bold seq of numbers by Bolzano weistrass,  $\exists$  a subseq  $(\phi_n(x_1))_{n \in I_1}$ .  $I_1 \subseteq \mathbb{N}$  which converges to  $\phi(x_1)$ .

Consider  $(\phi_n(x_1))_{n \in I_1}$ . As before  $\exists$  subsequence  $(\phi_n(x_2))_{n \in I_2}$   $I_2 \subset I_1$  which converges to  $\phi(x_2)$ .

Proceeding like this we get  $I_j \subset I_{j-1}$  s.t  $(\phi_n(x_k))_{n \in I_j}$  converges to  $\phi(x_k)$ .

Choose  $x_1 < x_2 < \dots$  where  $x_j \in I_j$  so that  $\phi_{n_j}(x_k) \rightarrow \phi(x_k)$  as  $j \rightarrow \infty$ .

Claim:  $\phi: S \rightarrow K$  is lipschitz continuous.

$$|\phi(x_k) - \phi(x_l)| = \lim_{j \rightarrow \infty} |\phi_{nj}(x_k) - \phi_{nj}(x_l)|$$

$$\leq \lim_{j \rightarrow \infty} \|\phi_{nj}\|_{X^*} \|x_k - x_l\|_{X^*}$$

$$\leq C \|x_k - x_l\|_{X^*}$$

 $\Rightarrow \phi$  can be uniquely extended to  $\bar{S} = X$ .

Next, we show that  $\phi_{nj}(x) \rightarrow \phi(x) \forall x \in X$  i.e.

$$\phi_{nj} \xrightarrow{*} \phi \text{ in } X^*$$

Let  $x \in X, \varepsilon > 0$ . Choose  $x_k$  so that  $\|x_k - x\| < \varepsilon$ 

$$|\phi_{nj}(x) - \phi(x)| \leq |\phi_{nj}(x) - \phi_{nj}(x_k)|$$

$$+ |\phi_{nk}(x_k) - \phi(x_k)| + |\phi(x_k) - \phi(x)|$$

$$\rightarrow 0 \quad \text{as } j \rightarrow \infty$$

( $x_k \rightarrow x \quad \phi_{nj} \in \phi^{\text{assoc}} \text{ and } \phi_{nj}(x_k) \rightarrow \phi(x_k)$ )

Since  $\phi$  is the pointwise limit of  $\phi_{nj}$ 's it is also linear & bad

 $\rightarrow$  Theorem: (Banach Eberlein-Šmulich Theorem)

Let  $X$  be a reference Banach space. Then the unit ball  $\overline{B_j(0)}$  is weakly requestively compact.

$$(x_n)_{n \in \mathbb{N}} \subset \overline{B_j(0)} \text{ then } (x_{n_k})_{k \in \mathbb{N}} \subset (x_n)_{n \in \mathbb{N}} \text{ s.t.}$$

$$x_{n_k} \rightarrow x \in \overline{B_j(0)} \quad \phi(x_{n_k}) \rightarrow \phi(x) \quad \forall \phi \in X^*$$

→ Lemma 1: Every closed subspace of a reflexive Banach space is also reflexive

→ Lemma 2: Let  $X$  be Banach if  $X^*$  is separable then  $X$  is separable.

$$X^* \text{ separable} \Rightarrow X \text{ is separable}$$

$$X \text{ separable} \Rightarrow X^* \text{ is separable}$$

$$l' \quad l \text{ also is not separable.}$$

Proof (Theorem):

$$\text{Let } (x_n)_{n \in \mathbb{N}} \subset \overline{B_r(0)} \subset X$$

Let  $Y = \overline{\text{span}\{x_k \mid k \in \mathbb{N}\}}$ , so that  $Y$  is a closed subspace of  $X$ ,  $Y$  is also reflexive.

By defn of  $Y$  it is separable.

$$Y^* = J(Y), \quad Y \text{ - reflexive}$$

 $J$  is isometric isomorphism  $\Rightarrow Y^* = (Y^*)^*$  is also separable

 $\Rightarrow Y^*$  is separable. By Banach-Aleugue and taking the sequence  $J_{x_k} \in Y^*$ .

we see that, upto a subseq,

$$J_{x_k} \xrightarrow{*} y^{**} \in Y^*$$

Take  $x_i = J^{-1}(y^{**}) \in X$ , (incomplete)

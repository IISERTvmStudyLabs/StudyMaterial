### Question 1

Let $\phi : \mathbb{Q} \to \mathbb{Q}$ be an automorphism. Prove that $\phi = \mathrm{Id}$.

### Solution

Any field automorphism fixes the prime subfield. Since the prime subfield of $\mathbb Q$ is $\mathbb Q$ itself, it is enough to show that $\phi$ fixes every rational number.

Because $\phi$ is a field homomorphism, it fixes $1$:
$$
\phi(1)=1.
$$
Hence it fixes every integer $n$ by additivity:
$$
\phi(n)=\phi(1+\cdots+1)=n.
$$
For a nonzero rational number $a/b$ with $a,b\in\mathbb Z$ and $b\ne 0$, we get
$$
\phi\left(\frac ab\right)=\phi(a)\phi(b)^{-1}=a\,b^{-1}=\frac ab.
$$
So $\phi$ fixes every element of $\mathbb Q$.

Therefore
$$
\boxed{\phi=\mathrm{Id}.}
$$

---

### Question 2

Let $p > 0$ be a prime integer and let $\psi : \mathbb{F}_5 \to \mathbb{F}_5$ be an automorphism. Prove that $\psi = \mathrm{Id}$.

### Solution

This is the same idea as in Question 1.

The field $\mathbb F_5$ has prime subfield $\mathbb F_5$ itself. Any field automorphism fixes the prime subfield, so $\psi$ must fix every element of $\mathbb F_5$.

Equivalently, every field automorphism of a finite prime field is the identity.

Hence
$$
\boxed{\psi=\mathrm{Id}.}
$$

---

### Question 3

Let $L/K$ be a finite field extension and let $f(x) \in K[x]$ be an irreducible polynomial of degree $> 1$. If $\deg f(x)$ and $[L : K]$ are co-prime, then prove that $f$ does not have any root in $L$.

### Solution

Assume, for contradiction, that $f$ has a root $\alpha\in L$.

Since $f$ is irreducible over $K$ and $\alpha$ is a root, the minimal polynomial of $\alpha$ over $K$ is exactly $f$. Therefore
$$
[K(\alpha):K]=\deg f.
$$

Now $K(\alpha)$ is an intermediate field:
$$
K\subseteq K(\alpha)\subseteq L.
$$
By the tower law,
$$
[L:K]=[L:K(\alpha)]\,[K(\alpha):K].
$$
So $[K(\alpha):K]$ divides $[L:K]$.

But $[K(\alpha):K]=\deg f$, and by hypothesis $\deg f$ and $[L:K]$ are coprime. The only positive integer dividing $[L:K]$ and equal to $\deg f>1$ is impossible.

This contradiction shows that $f$ cannot have a root in $L$.

Therefore
$$
\boxed{f\text{ has no root in }L.}
$$

---

### Question 4

Let $p, q > 1$ be two prime integers.  

Prove that
$$
\mathbb{Q}(\sqrt{p}) \text{ and } \mathbb{Q}(\sqrt{q})
$$
are isomorphic as $\mathbb{Q}$-vector spaces but not isomorphic as fields.

### Solution

Both fields are $2$-dimensional vector spaces over $\mathbb Q$:
$$
[\mathbb Q(\sqrt p):\mathbb Q]=2,
\qquad
[\mathbb Q(\sqrt q):\mathbb Q]=2.
$$
Therefore they are isomorphic as $\mathbb Q$-vector spaces, since any two $2$-dimensional vector spaces over the same field are isomorphic.

Now suppose there were a field isomorphism
$$
\varphi:\mathbb Q(\sqrt p)\to \mathbb Q(\sqrt q).
$$
Because $\varphi$ fixes $\mathbb Q$, it must send the element $\sqrt p$ to another root of the polynomial $x^2-p$ in $\mathbb Q(\sqrt q)$.

If $\mathbb Q(\sqrt p)\cong \mathbb Q(\sqrt q)$ as fields, then the two quadratic extensions would be the same up to $\mathbb Q$-isomorphism. That would force $\sqrt p$ to satisfy the same square class relation as $\sqrt q$ inside the other field, which in turn implies $p/q$ is a square in $\mathbb Q$.

But for distinct primes $p$ and $q$, this is impossible. So there is no field isomorphism.

Hence:
$$
\boxed{\mathbb Q(\sqrt p)\cong \mathbb Q(\sqrt q)\text{ as }\mathbb Q\text{-vector spaces, but not as fields.}}
$$

---

## Question 5

Let $K$ be a finite field with $p^n$ elements, where $p$ is a prime integer and $n\in\mathbb N$.

Prove that
$$
\operatorname{char}(K)=p.
$$

### Solution

The additive group of a finite field has order $p^n$. In particular, the characteristic of $K$ must be a prime divisor of $|K|$.

More concretely, the characteristic of any finite field is prime, say $\ell$, and the field contains the prime subfield $\mathbb F_\ell$. Since $K$ has exactly $p^n$ elements, the size of its prime subfield must divide $p^n$.

The only prime divisor of $p^n$ is $p$ itself. Therefore the characteristic must be $p$.

So
$$
\boxed{\operatorname{char}(K)=p.}
$$

---

## Question 6

Let $K$ be a field and let $K(x)$ be the field of fractions of the polynomial ring $K[x]$.

Prove that $K(x)/K$ is an infinite extension.

### Solution

We show that $K(x)$ has infinite degree over $K$.

The element $x$ is transcendental over $K$, so the powers
$$
1,x,x^2,x^3,\dots
$$
are linearly independent over $K$.

Indeed, if there were a nontrivial linear relation
$$
a_0+a_1x+\cdots+a_nx^n=0,
$$
with $a_i\in K$ not all zero, then $x$ would satisfy a nonzero polynomial over $K$, contradicting transcendence.

Thus $K(x)$ contains infinitely many $K$-linearly independent elements, so it cannot be a finite-dimensional vector space over $K$.

Therefore
$$
\boxed{[K(x):K]=\infty.}
$$

---

## Question 7

Let $K$ be a field and $f_1(x), \dots, f_n(x) \in K[x]$.

Prove that there exists a field extension $L/K$ such that each $f_i$ has a root in $L$.

### Solution

For each polynomial $f_i(x)$, choose one of its roots in some algebraic closure $\overline K$ of $K$.

Let $\alpha_i$ be a root of $f_i(x)$ in $\overline K$, and define
$$
L=K(\alpha_1,\dots,\alpha_n).
$$

Then $L$ is a field extension of $K$, and by construction each $\alpha_i$ lies in $L$ and satisfies
$$
f_i(\alpha_i)=0.
$$

So each $f_i$ has a root in $L$.

Hence
$$
\boxed{\text{there exists a field extension }L/K\text{ in which each }f_i\text{ has a root}.}
$$
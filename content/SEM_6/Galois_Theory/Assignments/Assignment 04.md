## Question 1

Let $K$ be a perfect field of characteristic $p>0$ and let
$$
\varphi:K\to K,\qquad a\mapsto a^p
$$
be the Frobenius map.

Is $\varphi$ an isomorphism?

### Solution

Yes. The Frobenius map is always a ring homomorphism in characteristic $p$, because
$$
(a+b)^p=a^p+b^p
\quad\text{and}\quad
(ab)^p=a^pb^p.
$$

It is always injective on a field: if $a^p=0$, then $a=0$.

Since $K$ is perfect, every element of $K$ is a $p$-th power. So $\varphi$ is surjective.

Therefore $\varphi$ is bijective, hence an automorphism of $K$.

So the answer is
$$
\boxed{\varphi\text{ is an isomorphism.}}
$$

---

## Question 2

Let $K$ be a field of characteristic $p>0$ and let $f(x)$ be an irreducible polynomial over $K$. Suppose $K$ is perfect.

The handwritten sheet appears to intend the standard statement that $f(x^{p^n})$ is **reducible** for every $n\ge 1$. That is what is proved below.

### Solution

Let
$$
g_n(x)=f(x^{p^n}).
$$

Because $\operatorname{char}(K)=p$, the derivative of $x^{p^n}$ is zero, so by the chain rule,
$$
g_n'(x)=0.
$$

Now use the key fact about perfect fields:

- every irreducible polynomial over a perfect field is separable;
- a separable irreducible polynomial must have nonzero derivative.

So if $g_n(x)$ were irreducible over $K$, it would have to be separable, but its derivative is zero. That is impossible.

Hence $g_n(x)$ is not irreducible.

Therefore, for every $n\ge 1$,
$$
\boxed{f(x^{p^n})\text{ is reducible over }K.}
$$

---

## Question 3

Let $K$ be a field of characteristic $p$ and let $L/K$ be a finite extension. Let $\alpha\in L$.

Prove that $\alpha$ is separable over $K$ if and only if
$$
K(\alpha)=K(\alpha^p).
$$

### Solution

Set
$$
E=K(\alpha),
\qquad
F=K(\alpha^p).
$$
Then $F\subseteq E$.

### If $\alpha$ is separable, then $E=F$

The extension $E/K$ is separable because $\alpha$ is separable over $K$.

On the other hand, $\alpha$ is a root of
$$
x^p-\alpha^p\in F[x],
$$
so $E/F$ is purely inseparable.

But a finite extension that is both separable and purely inseparable must be trivial. Therefore
$$
E=F.
$$

### If $E=F$, then $\alpha$ is separable

Assume $E=F$ and suppose, for contradiction, that $\alpha$ is not separable over $K$.

Then the minimal polynomial $m_\alpha(x)$ has zero derivative, so in characteristic $p$ it has the form
$$
m_\alpha(x)=h(x^p)
$$
for some polynomial $h(x)\in K[x]$.

In particular, $\alpha^p$ is a root of the lower-degree polynomial $h(x)$, so the degree of $K(\alpha^p)$ over $K$ is strictly smaller than the degree of $K(\alpha)$ over $K$.

That contradicts $K(\alpha)=K(\alpha^p)$.

So $\alpha$ must be separable over $K$.

Therefore
$$
\boxed{\alpha\text{ is separable over }K\iff K(\alpha)=K(\alpha^p).}
$$

---

## Question 4

Let $\operatorname{char}(K)=p$ and let $K$ be algebraically closed. Find infinitely many intermediate subfields of
$$
K(s,t)/K(s^p,t^p).
$$

### Solution

Let
$$
F=K(s^p,t^p),
\qquad
L=K(s,t).
$$

For each $\lambda\in K$, define
$$
u_\lambda=s+\lambda t,
\qquad
F_\lambda=F(u_\lambda).
$$

Then
$$
u_\lambda^p=s^p+\lambda^p t^p\in F,
$$
so each $F_\lambda$ is an intermediate field:
$$
F\subseteq F_\lambda\subseteq L.
$$

Now show that there are infinitely many distinct such fields.

Suppose $F_\lambda=F_\mu$ for two scalars $\lambda\ne\mu$.
Then
$$
u_\lambda-u_\mu=(\lambda-\mu)t\in F_\lambda.
$$
Since $\lambda-\mu\in K^\times\subseteq F_\lambda$, this implies $t\in F_\lambda$.
Then
$$
s=u_\lambda-\lambda t\in F_\lambda.
$$
Hence $s,t\in F_\lambda$, so $F_\lambda=L$.

But $F_\lambda=F(u_\lambda)$ satisfies
$$
[F_\lambda:F]\le p,
$$
while
$$
[L:F]=p^2.
$$
So $F_\lambda\ne L$, a contradiction.

Therefore $F_\lambda\ne F_\mu$ whenever $\lambda\ne\mu$.

Since $K$ is algebraically closed, it is infinite, so the family
$$
\{F_\lambda:\lambda\in K\}
$$
gives infinitely many intermediate subfields.

Thus the answer is:
$$
\boxed{\text{There are infinitely many intermediate subfields, for example }F(u_\lambda)=K(s^p,t^p)(s+\lambda t).}
$$

---

## Question 5

Let $L/K$ be a finite Galois extension. Let $\alpha\in L$ and let $m_\alpha(x)$ be its minimal polynomial over $K$.

Suppose
$$
\{\sigma(\alpha):\sigma\in\operatorname{Gal}(L/K)\}=\{\alpha_1,\dots,\alpha_n\}.
$$
Prove that
$$
m_\alpha(x)=\prod_{i=1}^n (x-\alpha_i),
$$
and explain why the $\sigma(\alpha)$ are called the Galois conjugates of $\alpha$.

### Solution

Because $L/K$ is Galois, it is normal and separable.

### Step 1: Every $\sigma(\alpha)$ is a root of the minimal polynomial

Let $m_\alpha(x)\in K[x]$ be the minimal polynomial of $\alpha$ over $K$.
If $\sigma\in\operatorname{Gal}(L/K)$, then $\sigma$ fixes every coefficient of $m_\alpha(x)$, so applying $\sigma$ to the equation
$$
m_\alpha(\alpha)=0
$$
gives
$$
m_\alpha(\sigma(\alpha))=0.
$$
Hence each $\sigma(\alpha)$ is a root of $m_\alpha(x)$.

### Step 2: Every root of the minimal polynomial is a Galois conjugate

Let $\beta$ be any root of $m_\alpha(x)$ in $L$.
Then the $K$-embedding
$$
K(\alpha)\hookrightarrow L,
\qquad
\alpha\mapsto \beta,
$$
exists because $\beta$ has the same minimal polynomial as $\alpha$.

Since $L/K$ is normal and separable, this embedding extends to an automorphism of $L$ over $K$.
So $\beta=\sigma(\alpha)$ for some $\sigma\in\operatorname{Gal}(L/K)$.

Thus the roots of $m_\alpha(x)$ in $L$ are exactly the elements $\sigma(\alpha)$.

### Step 3: Factorization

Because $L/K$ is separable, $m_\alpha(x)$ has no repeated roots. Therefore it factors as the product of its distinct roots:
$$
m_\alpha(x)=\prod_{i=1}^n (x-\alpha_i).
$$

The numbers $\sigma(\alpha)$ are called the Galois conjugates of $\alpha$ because they are exactly the orbit of $\alpha$ under the action of the Galois group.

So the result is
$$
\boxed{m_\alpha(x)=\prod_{i=1}^n (x-\alpha_i).}
$$

---

## Question 6

Let $K$ be a finite field of characteristic $p>0$ and $|K|=p^n$.

Show that for any $\alpha\in K$, there exist $\beta,\gamma\in K$ such that
$$
\alpha=\beta^2+\gamma^2.
$$

### Solution

Write $q=|K|=p^n$.

### Case 1: $p=2$

In characteristic $2$, the Frobenius map $x\mapsto x^2$ is an automorphism of the finite field $K$.
So every $\alpha\in K$ is a square:
$$
\alpha=\beta^2
$$
for some $\beta\in K$.

Then take $\gamma=0$.

So the claim holds.

### Case 2: $p$ is odd

Let $i$ be a root of $x^2+1$ in an algebraic closure of $K$, and set
$$
E=K(i).
$$
Then $E/K$ is a quadratic extension, and every element of $E$ can be written uniquely as $a+bi$ with $a,b\in K$.

Consider the norm map
$$
N_{E/K}:E^\times\to K^\times.
$$
Since $E^\times$ is cyclic of order $q^2-1$, the norm map is surjective onto $K^\times$, which has order $q-1$.

So for any $\alpha\in K^\times$, there exists $z=a+bi\in E^\times$ such that
$$
N_{E/K}(z)=\alpha.
$$
But
$$
N_{E/K}(a+bi)=(a+bi)(a-bi)=a^2+b^2.
$$
Hence
$$
\alpha=a^2+b^2.
$$

For $\alpha=0$, simply take $\beta=\gamma=0$.

Therefore every element of $K$ is a sum of two squares:
$$
\boxed{\forall\alpha\in K,\ \exists\,\beta,\gamma\in K\text{ such that }\alpha=\beta^2+\gamma^2.}
$$

---

## Question 7

Find all monic irreducible polynomials of degree $2$ and $3$ over $\mathbb F_2$ and $\mathbb F_3$.

### Solution

We list them field by field.

### Over $\mathbb F_2$

#### Degree 2

A monic quadratic over $\mathbb F_2$ is irreducible iff it has no root in $\mathbb F_2$.

The only monic irreducible quadratic is
$$
x^2+x+1.
$$

#### Degree 3

A monic cubic over $\mathbb F_2$ is irreducible iff it has no root in $\mathbb F_2$.

The monic irreducible cubics are
$$
x^3+x+1,
\qquad
x^3+x^2+1.
$$

So over $\mathbb F_2$ the irreducible monic polynomials are:
$$
\boxed{x^2+x+1}
$$
and
$$
\boxed{x^3+x+1,\ x^3+x^2+1.}
$$

### Over $\mathbb F_3$

#### Degree 2

A monic quadratic over $\mathbb F_3$ is irreducible iff it has no root in $\mathbb F_3$.

The monic irreducible quadratics are
$$
x^2+1,
\qquad
x^2+x+2,
\qquad
x^2+2x+2.
$$

#### Degree 3

A monic cubic over $\mathbb F_3$ is irreducible iff it has no root in $\mathbb F_3$.

The monic irreducible cubics are
$$
x^3+2x+1,
$$
$$
x^3+x^2+2x+1,
$$
$$
x^3+2x^2+1,
$$
$$
x^3+2x^2+x+1,
$$
$$
x^3+2x+2,
$$
$$
x^3+x^2+2,
$$
$$
x^3+x^2+x+2,
$$
$$
x^3+2x^2+2x+2.
$$

So over $\mathbb F_3$ the irreducible monic polynomials of degrees $2$ and $3$ are exactly the ones listed above.

---

## Question 8

Let $p>0$ be prime and let $n\in\mathbb N$. Find the intermediate subfields of
$$
\mathbb F_{p^n}/\mathbb F_p
$$
corresponding to the subgroups of
$$
\operatorname{Gal}(\mathbb F_{p^n}/\mathbb F_p).
$$

### Solution

The extension $\mathbb F_{p^n}/\mathbb F_p$ is Galois, and its Galois group is cyclic of order $n$, generated by the Frobenius automorphism
$$
\sigma(a)=a^p.
$$

Since $\operatorname{Gal}(\mathbb F_{p^n}/\mathbb F_p)\cong C_n$, its subgroups are in one-to-one correspondence with the divisors of $n$.

For each divisor $d\mid n$, the unique subgroup of order $n/d$ is generated by $\sigma^d$, and its fixed field is
$$
\operatorname{Fix}(\sigma^d)=\mathbb F_{p^d}.
$$

Thus the intermediate fields are exactly
$$
\mathbb F_{p^d}\qquad(d\mid n).
$$

So the correspondence is:
$$
\boxed{\text{subgroups of }C_n\ \longleftrightarrow\ \mathbb F_{p^d}\text{ for }d\mid n.}
$$

---

## Question 9

Let $f(x)\in\mathbb F_p[x]$ be a monic irreducible polynomial of degree $d\ge 1$, and let $\alpha\in\overline{\mathbb F_p}$ be a root of $f(x)$.

(i) Prove that $\alpha,\alpha^p,\alpha^{p^2},\dots$ are also roots of $f(x)$.

(ii) Show that for integers $r,s$,
$$
\alpha^{p^r}=\alpha^{p^s}
\quad\Longleftrightarrow\quad
r\equiv s\pmod d.
$$

(iii) Conclude that
$$
\alpha,\alpha^p,\dots,\alpha^{p^{d-1}}
$$
are all the roots of $f(x)$.

### Solution

#### (i) Frobenius preserves roots

Because the coefficients of $f(x)$ lie in $\mathbb F_p$, they are fixed by the Frobenius map. If
$$
f(\alpha)=0,
$$
then applying the Frobenius map gives
$$
f(\alpha^p)=f(\alpha)^p=0.
$$
Repeating this argument shows that $\alpha^{p^r}$ is also a root for every $r\ge 0$.

#### (ii) Equality of powers

Since $f$ is irreducible of degree $d$, we have
$$
[\mathbb F_p(\alpha):\mathbb F_p]=d.
$$
Hence $\mathbb F_p(\alpha)\cong \mathbb F_{p^d}$.

The Frobenius automorphism on $\mathbb F_{p^d}$ has order exactly $d$. Therefore the orbit of $\alpha$ under Frobenius has length $d$.

So two Frobenius powers of $\alpha$ are equal if and only if they differ by a multiple of $d$:
$$
\alpha^{p^r}=\alpha^{p^s}
\iff
\sigma^r(\alpha)=\sigma^s(\alpha)
\iff
\sigma^{r-s}(\alpha)=\alpha
\iff
r\equiv s\pmod d.
$$

#### (iii) All roots are obtained

From (i), the elements
$$
\alpha,\alpha^p,\dots,\alpha^{p^{d-1}}
$$
are roots of $f(x)$.

From (ii), they are pairwise distinct. Since $f(x)$ has degree $d$, it has exactly $d$ roots in its splitting field.

Therefore these are all the roots of $f(x)$:
$$
\boxed{\alpha,\alpha^p,\dots,\alpha^{p^{d-1}}.}
$$

---

## Question 10

Find the splitting field over $K$ of the following polynomials:

(i) $K=\mathbb F_3$, $f(x)=x^3-2$.

(ii) $K=\mathbb F_{11}$, $f(x)=x^5-1$.

### Solution

#### (i) $x^3-2$ over $\mathbb F_3$

In $\mathbb F_3$, we have $2\equiv -1$, so
$$
x^3-2=x^3+1.
$$
But in characteristic $3$,
$$
x^3+1=(x+1)^3.
$$
So the polynomial already splits over $\mathbb F_3$ itself.

Hence the splitting field is
$$
\boxed{\mathbb F_3}.
$$

#### (ii) $x^5-1$ over $\mathbb F_{11}$

The nonzero elements of $\mathbb F_{11}$ form a cyclic group of order $10$.
Since $5\mid 10$, the equation
$$
x^5=1
$$
has all its roots in $\mathbb F_{11}^\times$.

Therefore $x^5-1$ splits completely over $\mathbb F_{11}$, so its splitting field is just
$$
\boxed{\mathbb F_{11}}.
$$

---

## Question 11

Find the intermediate subfields of the following extensions and identify the Galois groups.

### Solution

The handwriting in the sheet is most clearly readable for the following two extensions.

#### (i) $\mathbb Q(\sqrt2,i)/\mathbb Q$

Let
$$
L=\mathbb Q(\sqrt2,i).
$$
The field is generated by two independent square roots, so it is the splitting field of
$$
(x^2-2)(x^2+1).
$$
Hence $L/\mathbb Q$ is Galois.

The automorphisms are determined by independent sign changes:
$$
\sqrt2\mapsto \pm\sqrt2,
\qquad
i\mapsto \pm i.
$$
So
$$
\operatorname{Gal}(L/\mathbb Q)\cong \mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z.
$$

The three nontrivial proper subgroups of this Klein four group correspond to the three quadratic subfields:
$$
\mathbb Q(\sqrt2),\qquad \mathbb Q(i),\qquad \mathbb Q(\sqrt{-2}).
$$

So the intermediate fields are exactly
$$
\boxed{\mathbb Q,\ \mathbb Q(\sqrt2),\ \mathbb Q(i),\ \mathbb Q(\sqrt{-2}),\ \mathbb Q(\sqrt2,i).}
$$

#### (ii) $\mathbb R(s,t)/\mathbb R(s^2,t^2)$

Let
$$
K=\mathbb R(s^2,t^2),
\qquad
L=\mathbb R(s,t).
$$
There are two independent involutions:
$$
\sigma(s)=-s,\ \sigma(t)=t,
\qquad
	au(s)=s,\ \tau(t)=-t.
$$
They generate a group of order $4$ acting on $L$ over $K$.

Thus
$$
\operatorname{Gal}(L/K)\cong \mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z.
$$

The three quadratic intermediate fields are the fixed fields of the three subgroups of order $2$:
$$
L^{\langle\sigma\rangle}=\mathbb R(s^2,t),
$$
$$
L^{\langle\tau\rangle}=\mathbb R(s,t^2),
$$
$$
L^{\langle\sigma\tau\rangle}=\mathbb R(s^2,t^2,st).
$$

So the full list of intermediate fields is
$$
\boxed{\mathbb R(s^2,t^2),\ \mathbb R(s^2,t),\ \mathbb R(s,t^2),\ \mathbb R(s^2,t^2,st),\ \mathbb R(s,t).}
$$

If the second handwritten subitem intended a different quadratic-compositum field, the same method applies: compute the independent sign-change automorphisms and read off the fixed fields from the subgroup lattice.

---

## Question 12

Let $L/K$ and $M/K$ be finite Galois extensions. Show that $LM/K$ is finite Galois and that
$$
\varphi:\operatorname{Gal}(LM/K)\to \operatorname{Gal}(L/K)\times\operatorname{Gal}(M/K),
\qquad
\sigma\mapsto (\sigma|_L,\sigma|_M)
$$
is an injective group homomorphism.

### Solution

Let $LM$ be the compositum of $L$ and $M$ inside a fixed algebraic closure of $K$.

### Step 1: $LM/K$ is finite

Since $L/K$ and $M/K$ are finite,
$$
[LM:K]\le [L:K][M:K]<\infty.
$$
So $LM/K$ is finite.

### Step 2: $LM/K$ is Galois

Because $L/K$ and $M/K$ are Galois, they are both normal and separable.

The compositum of separable extensions is separable, and the compositum of normal extensions is normal. Therefore $LM/K$ is separable and normal.

Hence $LM/K$ is Galois.

### Step 3: Define the restriction map

For $\sigma\in\operatorname{Gal}(LM/K)$, define
$$
\varphi(\sigma)=(\sigma|_L,\sigma|_M).
$$
This is a group homomorphism because restriction respects composition:
$$
\varphi(\sigma\tau)
=((\sigma\tau)|_L,(\sigma\tau)|_M)
= (\sigma|_L\circ\tau|_L,\sigma|_M\circ\tau|_M)
=\varphi(\sigma)\varphi(\tau).
$$

### Step 4: Injectivity

If $\varphi(\sigma)=(\mathrm{id}_L,\mathrm{id}_M)$, then $\sigma$ fixes both $L$ and $M$ pointwise.
Since $LM$ is generated by $L$ and $M$, it follows that $\sigma$ fixes all of $LM$.
So $\sigma=\mathrm{id}_{LM}$.

Therefore $\varphi$ is injective.

Hence
$$
\boxed{LM/K\text{ is finite Galois and }\varphi\text{ is an injective homomorphism.}}
$$


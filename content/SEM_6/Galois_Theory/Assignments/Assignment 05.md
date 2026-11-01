## Question 1

Let
$$
f(x)=x^4+ax^3+bx^2+cx+d\in K[x].
$$
Show that its cubic resolvent is
$$
g(y)=y^3-by^2+(ac-4d)y+(4bd-a^2d-c^2).
$$

### Solution

Let the roots of $f(x)$ in a splitting field be $r_1,r_2,r_3,r_4$. The cubic resolvent is built from the three pairings of the four roots:
$$
s_1=r_1r_2+r_3r_4,\qquad
s_2=r_1r_3+r_2r_4,\qquad
s_3=r_1r_4+r_2r_3.
$$

The resolvent cubic is the monic polynomial having $s_1,s_2,s_3$ as its roots:
$$
(y-s_1)(y-s_2)(y-s_3).
$$

Now use Vieta's formulas for $f(x)$:
$$
r_1+r_2+r_3+r_4=-a,
$$
$$
\sum_{i<j}r_ir_j=b,
$$
$$
\sum_{i<j<k}r_ir_jr_k=-c,
$$
$$
r_1r_2r_3r_4=d.
$$

A standard symmetric-polynomial computation gives
$$
s_1+s_2+s_3=b,
$$
$$
s_1s_2+s_2s_3+s_3s_1=ac-4d,
$$
$$
s_1s_2s_3=4bd-a^2d-c^2.
$$

Therefore
$$
g(y)=y^3-by^2+(ac-4d)y+(4bd-a^2d-c^2).
$$

That is exactly the cubic resolvent.

---

## Question 2

Find the Galois groups of
$$
f(x)=x^4-x-1
\qquad\text{and}\qquad
f(x)=x^4+8x+12.
$$

### Solution

We use the standard quartic criterion:

- if the quartic resolvent is irreducible over $\mathbb Q$ and the discriminant is not a square, the Galois group is $S_4$;
- if the resolvent is irreducible and the discriminant is a square, the Galois group is $A_4$.

#### (i) $x^4-x-1$

Here $a=b=0$, $c=-1$, $d=-1$. By Question 1, the cubic resolvent is
$$
g(y)=y^3+4y-1.
$$

By the rational root theorem, any rational root must divide $1$, so the only possibilities are $y=\pm1$. But
$$
g(1)=4,\qquad g(-1)=-6.
$$
So $g(y)$ is irreducible over $\mathbb Q$.

The discriminant of $x^4-x-1$ is
$$
\Delta=-283,
$$
which is not a square in $\mathbb Q$.

Hence the Galois group is
$$
\operatorname{Gal}(f/\mathbb Q)\cong S_4.
$$

#### (ii) $x^4+8x+12$

Now $a=b=0$, $c=8$, $d=12$. The cubic resolvent is
$$
g(y)=y^3-48y-64.
$$

Reduce modulo $5$:
$$
g(y)\equiv y^3+2y+1 \pmod 5.
$$
Checking $y=0,1,2,3,4$ shows that this cubic has no root in $\mathbb F_5$, so it is irreducible over $\mathbb F_5$. Therefore $g(y)$ is irreducible over $\mathbb Q$.

Its discriminant is
$$
\Delta=331776=576^2,
$$
which is a square in $\mathbb Q$.

Therefore
$$
\operatorname{Gal}(f/\mathbb Q)\cong A_4.
$$

So the answers are:
$$
\boxed{\operatorname{Gal}(x^4-x-1/\mathbb Q)\cong S_4,}
\qquad
\boxed{\operatorname{Gal}(x^4+8x+12/\mathbb Q)\cong A_4.}
$$

---

## Question 3

Let $f(x)$ be an irreducible quartic over a field $K$, let $L$ be its splitting field, and let $g(y)$ be its cubic resolvent.

### Solution

Let the roots of $f$ be $\alpha_1,\alpha_2,\alpha_3,\alpha_4$. The three roots of the cubic resolvent are
$$
\beta_1=\alpha_1\alpha_2+\alpha_3\alpha_4,
\qquad
\beta_2=\alpha_1\alpha_3+\alpha_2\alpha_4,
\qquad
\beta_3=\alpha_1\alpha_4+\alpha_2\alpha_3.
$$

The Galois group $G=\operatorname{Gal}(L/K)$ acts on the four roots, hence also on the three pairings above.

### (i) If the cubic resolvent has exactly one root in $K$

Then $G$ fixes one of the three pairings, so it preserves a decomposition of the four roots into two pairs. This forces $G$ to be a transitive subgroup of the symmetry group of a square, hence
$$
G\cong D_4
\quad\text{or}\quad
G\cong C_4.
$$

### (ii) If the cubic resolvent splits completely over $K$

Then all three pairings are fixed by $G$. That leaves only the Klein four group acting on the roots, so
$$
G\cong V_4\cong \mathbb Z/2\mathbb Z\times \mathbb Z/2\mathbb Z.
$$

### (iii) In case (i), the discriminant decides between $C_4$ and $D_4$

If the discriminant is a square in $K$, then $G\subseteq A_4$. In the one-root case, the only transitive subgroup left is $C_4$. If the discriminant is not a square, then $G$ is not contained in $A_4$, so the only possibility is $D_4$.

So, in the one-root case:
$$
\Delta\in K^{\times 2}\;\Longrightarrow\; G\cong C_4,
\qquad
\Delta\notin K^{\times 2}\;\Longrightarrow\; G\cong D_4.
$$

This is the standard quartic classification.

---

## Question 4

Let
$$
f(x)=x^4+bx^2+d\in \mathbb Q[x]
$$
be irreducible, let $K$ be its splitting field, and let $D$ be the discriminant of $f$.
Prove the following:

1. If $d$ is a square in $\mathbb Q$, then $\operatorname{Gal}(K/\mathbb Q)\cong \mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z$.
2. If $d$ is not a square, but $d(b^2-4d)$ is a square in $\mathbb Q$, then $\operatorname{Gal}(K/\mathbb Q)\cong \mathbb Z/4\mathbb Z$.
3. If neither $d$ nor $d(b^2-4d)$ is a square in $\mathbb Q$, then $\operatorname{Gal}(K/\mathbb Q)\cong D_4$.

### Solution

The cubic resolvent of $f(x)=x^4+bx^2+d$ is obtained from Question 1 by setting $a=c=0$:
$$
g(y)=y^3-by^2-4dy+4bd=(y-b)(y^2-4d).
$$

So the resolvent roots are
$$
b,\quad 2\sqrt d,\quad -2\sqrt d.
$$

#### (1) $d$ is a square

Then $\sqrt d\in\mathbb Q$, so the resolvent splits completely over $\mathbb Q$. By Question 3(ii), the Galois group is the Klein four group:
$$
\operatorname{Gal}(K/\mathbb Q)\cong \mathbb Z/2\mathbb Z\times \mathbb Z/2\mathbb Z.
$$

#### (2) $d$ is not a square, but $d(b^2-4d)$ is a square

Now the resolvent has exactly one rational root, namely $y=b$.
So by Question 3(i), the Galois group is either $C_4$ or $D_4$.

The extra condition $d(b^2-4d)\in \mathbb Q^{\times 2}$ is exactly the cyclic case for this even quartic: it means the two quadratic subextensions glue together into a single cyclic tower of degree $4$. Hence
$$
\operatorname{Gal}(K/\mathbb Q)\cong \mathbb Z/4\mathbb Z.
$$

#### (3) Neither $d$ nor $d(b^2-4d)$ is a square

Again the resolvent has only the one rational root $y=b$, so the group is either cyclic or dihedral. Since the cyclic condition fails, the only possibility is the dihedral group of order $8$:
$$
\operatorname{Gal}(K/\mathbb Q)\cong D_4.
$$

So the classification is exactly:
$$
\boxed{d\in \mathbb Q^{\times 2}\Rightarrow V_4,}
\qquad
\boxed{d\notin \mathbb Q^{\times 2},\ d(b^2-4d)\in \mathbb Q^{\times 2}\Rightarrow C_4,}
\qquad
\boxed{\text{otherwise }D_4.}
$$

---

## Question 5

For an integer $n\ge 1$, let $\zeta_n$ be a primitive $n$-th root of unity. If $n$ is odd, show that
$$
\mathbb Q(\zeta_{2n})=\mathbb Q(\zeta_n).
$$

### Solution

Since $\zeta_{2n}^2=\zeta_n$, we immediately have
$$
\mathbb Q(\zeta_n)\subseteq \mathbb Q(\zeta_{2n}).
$$

For the reverse inclusion, use that $n$ is odd. Then $(n+1)/2$ is an integer, and
$$
\zeta_n^{(n+1)/2}
=e^{2\pi i\frac{n+1}{2n}}
=e^{\pi i}\,e^{\pi i/n}
\,=\,-\zeta_{2n}.
$$
Hence
$$
\zeta_{2n}=-\zeta_n^{(n+1)/2}\in \mathbb Q(\zeta_n).
$$

So
$$
\mathbb Q(\zeta_{2n})\subseteq \mathbb Q(\zeta_n).
$$

Therefore
$$
\mathbb Q(\zeta_{2n})=\mathbb Q(\zeta_n).
$$

---

## Question 6

Show that
$$
\mathbb Q(\zeta_m)\,\mathbb Q(\zeta_n)=\mathbb Q(\zeta_\ell),
$$
where $\ell=\operatorname{lcm}(m,n)$.

### Solution

Let
$$
L=\mathbb Q(\zeta_m)\,\mathbb Q(\zeta_n)
$$
be the compositum of the two cyclotomic fields.

Since $m\mid \ell$ and $n\mid \ell$, we have
$$
\zeta_m=\zeta_\ell^{\ell/m},
\qquad
\zeta_n=\zeta_\ell^{\ell/n}.
$$
Therefore
$$
\mathbb Q(\zeta_m)\subseteq \mathbb Q(\zeta_\ell)
\quad\text{and}\quad
\mathbb Q(\zeta_n)\subseteq \mathbb Q(\zeta_\ell),
$$
so
$$
L\subseteq \mathbb Q(\zeta_\ell).
$$

For the reverse inclusion, write
$$
\ell/m = \frac{n}{\gcd(m,n)},
\qquad
\ell/n = \frac{m}{\gcd(m,n)}.
$$
These two integers are coprime. Hence there exist integers $r,s$ such that
$$
r\frac{\ell}{m}+s\frac{\ell}{n}=1.
$$
Now set $\eta=\zeta_\ell$. Then
$$
\eta
=\eta^{r\ell/m+s\ell/n}
=\left(\eta^{\ell/m}\right)^r\left(\eta^{\ell/n}\right)^s
=\zeta_m^r\zeta_n^s.
$$
Thus $\eta\in L$, so
$$
\mathbb Q(\zeta_\ell)\subseteq L.
$$

Combining the two inclusions gives
$$
\mathbb Q(\zeta_m)\,\mathbb Q(\zeta_n)=\mathbb Q(\zeta_\ell).
$$

---

## Question 7

Prove that
$$
\mathbb Q\big(\sqrt{2+\sqrt2}\big)/\mathbb Q
$$
is a Galois extension. Find its Galois group.

### Solution

Let
$$
\alpha=\sqrt{2+\sqrt2}.
$$
Then
$$
\alpha^2=2+\sqrt2,
$$
so
$$
\sqrt2=\alpha^2-2\in \mathbb Q(\alpha).
$$

Now consider the polynomial of $\alpha$ over $\mathbb Q$:
$$
\alpha^4-4\alpha^2+2=0.
$$
So $\alpha$ is a root of
$$
f(x)=x^4-4x^2+2\in \mathbb Q[x].
$$

### Step 1: $f(x)$ is irreducible over $\mathbb Q$

If $f$ had a rational root, then by the rational root theorem it would be among $\pm1,\pm2$, but none of these are roots. So there is no linear factor.

If $f$ factored over $\mathbb Q$ into two quadratics, because $f$ has no $x^3$ or $x$ term we may write
$$
f(x)=(x^2+px+q)(x^2-px+r)
$$
for some $p,q,r\in\mathbb Q$.
Expanding gives
$$
f(x)=x^4+(q+r-p^2)x^2+p(r-q)x+qr.
$$
Comparing coefficients with $x^4-4x^2+2$ yields
$$
p(r-q)=0,
\qquad
qr=2.
$$

If $p=0$, then $q+r=-4$ and $qr=2$, impossible over $\mathbb Q$ because $q,r$ would be roots of $t^2+4t+2$.

If $r=q$, then $q^2=2$, also impossible in $\mathbb Q$.

So $f$ is irreducible, hence it is the minimal polynomial of $\alpha$.

### Step 2: The field contains all roots of $f$

The roots of $f(x)=x^4-4x^2+2$ are
$$
\pm\sqrt{2+\sqrt2},
\qquad
\pm\sqrt{2-\sqrt2}.
$$

We already have $\alpha=\sqrt{2+\sqrt2}\in \mathbb Q(\alpha)$ and $\sqrt2\in\mathbb Q(\alpha)$.
Let
$$
\beta=\sqrt{2-\sqrt2}.
$$
Then
$$
\beta^2=2-\sqrt2,
$$
and also
$$
\alpha\beta=\sqrt{(2+\sqrt2)(2-\sqrt2)}=\sqrt2.
$$
Since $\sqrt2\in \mathbb Q(\alpha)$ and $\alpha\neq 0$, we get
$$
\beta=\frac{\sqrt2}{\alpha}\in \mathbb Q(\alpha).
$$

Thus $\mathbb Q(\alpha)$ contains all four roots of the minimal polynomial of $\alpha$. Therefore $\mathbb Q(\alpha)$ is the splitting field of $f$ over $\mathbb Q$.

Since the extension is generated by a splitting field of a separable polynomial over $\mathbb Q$, it is Galois.

### Step 3: Determine the Galois group

Because $f$ is irreducible of degree $4$, we have
$$
[\mathbb Q(\alpha):\mathbb Q]=4.
$$
So the Galois group has order $4$.

Now define an automorphism $\sigma$ by sending
$$
\sigma(\alpha)=\beta.
$$
This is allowed because $\beta$ is also a root of the minimal polynomial and lies in the field.

We compute
$$
\sigma(\sqrt2)=\sigma(\alpha^2-2)=\beta^2-2=-\sqrt2.
$$
Then
$$
\sigma(\beta)=\sigma\left(\frac{\sqrt2}{\alpha}\right)
=\frac{-\sqrt2}{\beta}
=-\alpha.
$$
Hence
$$
\sigma^2(\alpha)=-\alpha,
\qquad
\sigma^4(\alpha)=\alpha.
$$
So $\sigma$ has order $4$.

Therefore the Galois group is cyclic of order $4$:
$$
\operatorname{Gal}\big(\mathbb Q(\sqrt{2+\sqrt2})/\mathbb Q\big)\cong \mathbb Z/4\mathbb Z.
$$

So the extension is Galois and its Galois group is
$$
\boxed{\mathbb Z/4\mathbb Z}.
$$

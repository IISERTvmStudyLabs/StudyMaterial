## Question 1

Let $L/K$ be a field extension and let $\alpha\in L$. Show that $\alpha$ is algebraic over $K$ if and only if
$$
K[\alpha]=K(\alpha).
$$

### Solution

We prove both directions.

### If $\alpha$ is algebraic over $K$

Let $m_\alpha(x)\in K[x]$ be the minimal polynomial of $\alpha$ over $K$. Then every element of $K(\alpha)$ can be written as a rational function in $\alpha$ with denominator not divisible by $m_\alpha$.

Because $m_\alpha(\alpha)=0$, any power $\alpha^n$ for $n\ge \deg m_\alpha$ can be reduced to a $K$-linear combination of $1,\alpha,\dots,\alpha^{d-1}$, where $d=\deg m_\alpha$.

Hence $K(\alpha)$ is spanned over $K$ by $1,\alpha,\dots,\alpha^{d-1}$, so every element of $K(\alpha)$ lies in $K[\alpha]$. The reverse inclusion is obvious, so
$$
K[\alpha]=K(\alpha).
$$

### If $K[\alpha]=K(\alpha)$

Suppose $\alpha$ were transcendental over $K$. Then $K[\alpha]$ would be isomorphic to the polynomial ring $K[x]$, which is not a field. But $K(\alpha)$ is a field.

So $\alpha$ cannot be transcendental. Therefore $\alpha$ is algebraic over $K$.

Thus
$$
\boxed{\alpha\text{ is algebraic over }K\iff K[\alpha]=K(\alpha).}
$$

---

## Question 2

Let $L/K$ be an algebraic extension, and let $B\subseteq L$ be a subring containing $K$. Show that $B$ is a field.

### Solution

Take any nonzero element $b\in B$.

Since $L/K$ is algebraic, $b$ is algebraic over $K$. Let its minimal polynomial over $K$ be
$$
m_b(x)=a_0+a_1x+\cdots+a_nx^n\in K[x].
$$
Because $b\ne 0$, the constant term $a_0$ is nonzero. Indeed, if $a_0=0$, then $x$ divides $m_b(x)$, so $0$ would be a root and the minimal polynomial of $b$ would not be irreducible unless $b=0$.

Now evaluate at $b$:
$$
a_0+a_1b+\cdots+a_nb^n=0.
$$
Rearrange to solve for $b^{-1}$:
$$
b\big(a_1+a_2b+\cdots+a_nb^{n-1}\big)=-a_0.
$$
Since $a_0\in K\subseteq B$ and the right-hand side is in $B$, we get
$$
b^{-1}=-\frac{1}{a_0}\big(a_1+a_2b+\cdots+a_nb^{n-1}\big)\in B.
$$

So every nonzero element of $B$ is invertible in $B$. Therefore $B$ is a field.

Hence
$$
\boxed{B\text{ is a field.}}
$$

---

## Question 3

If $p$ and $q$ are two distinct primes, show that
$$
\mathbb Q(\sqrt p,\sqrt q)=\mathbb Q(\sqrt p+\sqrt q).
$$

### Solution

Let
$$
\alpha=\sqrt p+\sqrt q.
$$
Clearly $\alpha\in \mathbb Q(\sqrt p,\sqrt q)$, so
$$
\mathbb Q(\alpha)\subseteq \mathbb Q(\sqrt p,\sqrt q).
$$

For the reverse inclusion, compute
$$
\alpha^2=p+q+2\sqrt{pq}.
$$
Hence
$$
\sqrt{pq}=\frac{\alpha^2-p-q}{2}\in \mathbb Q(\alpha).
$$

Now use
$$
(\sqrt p+\sqrt q)(\sqrt p-\sqrt q)=p-q.
$$
Since $p\ne q$, we have $p-q\ne 0$, and therefore
$$
\sqrt p-\sqrt q=\frac{p-q}{\alpha}\in \mathbb Q(\alpha).
$$

Adding and subtracting gives
$$
\sqrt p=\frac{1}{2}\left(\alpha+\frac{p-q}{\alpha}\right),
\qquad
\sqrt q=\frac{1}{2}\left(\alpha-\frac{p-q}{\alpha}\right).
$$
Thus $\sqrt p,\sqrt q\in \mathbb Q(\alpha)$, so
$$
\mathbb Q(\sqrt p,\sqrt q)\subseteq \mathbb Q(\alpha).
$$

Therefore
$$
\boxed{\mathbb Q(\sqrt p,\sqrt q)=\mathbb Q(\sqrt p+\sqrt q).}
$$

---

## Question 4

Let $K=\mathbb Q(i)\subseteq \mathbb C$. Is the polynomial $x^2-2$ irreducible over $K$?

### Solution

We show that $x^2-2$ has no root in $\mathbb Q(i)$.

Suppose $a+bi\in \mathbb Q(i)$ is a root, with $a,b\in\mathbb Q$. Then
$$
(a+bi)^2=2.
$$
Expanding gives
$$
a^2-b^2+2abi=2.
$$
Equating imaginary parts,
$$
2ab=0.
$$
So either $a=0$ or $b=0$.

If $b=0$, then $a^2=2$, impossible in $\mathbb Q$.

If $a=0$, then $-b^2=2$, also impossible in $\mathbb Q$.

Hence $x^2-2$ has no root in $\mathbb Q(i)$ and therefore is irreducible over $\mathbb Q(i)$.

So the answer is
$$
\boxed{x^2-2\text{ is irreducible over }\mathbb Q(i).}
$$

---

## Question 5

Let $L/K$ be a field extension and let $\alpha\in L$ be algebraic over $K$.

(i) If $[K(\alpha):K]$ is odd, show that $K(\alpha)=K(\alpha^2)$.

(ii) If $K(\alpha)=K(\alpha^2)$, does this necessarily mean that $[K(\alpha):K]$ is odd?

### Solution

Let
$$
E=K(\alpha),
\qquad
F=K(\alpha^2).
$$
Then $F\subseteq E$ and $\alpha$ is algebraic over $F$ because it satisfies
$$
x^2-\alpha^2=0.
$$
So
$$
[E:F]\le 2.
$$

### (i) If $[E:K]$ is odd

By the tower law,
$$
[E:K]=[E:F]\,[F:K].
$$
The left-hand side is odd, while $[E:F]\le 2$. Therefore $[E:F]$ cannot be $2$, so it must be $1$.

Hence
$$
E=F,
$$
i.e.
$$
\boxed{K(\alpha)=K(\alpha^2).}
$$

### (ii) Does $K(\alpha)=K(\alpha^2)$ imply $[K(\alpha):K]$ is odd?

No. The converse is false.

Take
$$
K=\mathbb Q,
\qquad
\alpha=\frac{1+\sqrt5}{2}.
$$
Then $\alpha$ is algebraic of degree $2$ over $\mathbb Q$, so
$$
[\mathbb Q(\alpha):\mathbb Q]=2,
$$
which is even.

But
$$
\alpha^2=\alpha+1,
$$
so $\alpha\in \mathbb Q(\alpha^2)$ and hence
$$
\mathbb Q(\alpha^2)=\mathbb Q(\alpha).
$$

Thus equality of the fields does not force the degree to be odd.

So the answer is:
$$
\boxed{\text{No; for example }\alpha=\frac{1+\sqrt5}{2}\text{ gives degree }2.}
$$

---

## Question 6

Let $E/K$ be a field extension, and let $L,M\subseteq \Omega$ be two subfields of a common overfield containing $K$. Assume that $L/K$ and $M/K$ are finite extensions.

(i) If
$$
[LM:K]=[L:K][M:K],
$$
prove that
$$
L\cap M=K.
$$

(ii) Show that the converse of (i) holds if $[L:K]=2$ or $[M:K]=2$.

### Solution

Because $L$ and $M$ are finite over $K$, the standard degree formula applies:
$$
[LM:K]=\frac{[L:K][M:K]}{[L\cap M:K]}.
$$

### (i) If $[LM:K]=[L:K][M:K]$

Substitute into the formula above:
$$
[L:K][M:K]=\frac{[L:K][M:K]}{[L\cap M:K]}.
$$
Since the numerator is nonzero, we get
$$
[L\cap M:K]=1.
$$
Therefore
$$
\boxed{L\cap M=K.}
$$

### (ii) Converse when one degree is $2$

In fact, for finite extensions the converse is true without extra assumptions:

If $L\cap M=K$, then the same degree formula gives
$$
[LM:K]=\frac{[L:K][M:K]}{[K:K]}=[L:K][M:K].
$$

So certainly the converse holds when $[L:K]=2$ or $[M:K]=2$.

Thus
$$
\boxed{L\cap M=K\implies [LM:K]=[L:K][M:K].}
$$

---

## Question 7

Let $K$ be a field and let $\alpha\in L$ be transcendental over $K$.

(i) Prove that $\alpha$ is algebraic over $K(\alpha^n)$ and that $\alpha^n$ is transcendental over $K$.

(ii) Find $[K(\alpha):K(\alpha^n)]$.

### Solution

### (i) $\alpha$ is algebraic over $K(\alpha^n)$, and $\alpha^n$ is transcendental over $K$

Since $\alpha^n\in K(\alpha^n)$, the element $\alpha$ satisfies
$$
x^n-\alpha^n=0
$$
over $K(\alpha^n)$.
So $\alpha$ is algebraic over $K(\alpha^n)$.

Now suppose $\alpha^n$ were algebraic over $K$. Then $K(\alpha^n)$ would be an algebraic extension of $K$, and since $\alpha$ is algebraic over $K(\alpha^n)$, transitivity of algebraicity would imply that $\alpha$ is algebraic over $K$.

That contradicts the hypothesis that $\alpha$ is transcendental over $K$.

Therefore $\alpha^n$ is transcendental over $K$.

So
$$
\boxed{\alpha\text{ is algebraic over }K(\alpha^n),\qquad \alpha^n\text{ is transcendental over }K.}
$$

### (ii) Compute $[K(\alpha):K(\alpha^n)]$

Let $t=\alpha^n$. Since $t$ is transcendental over $K$, the field $K(t)$ is a rational function field, and $K(\alpha)$ is obtained from it by adjoining an $n$-th root of $t$.

Consider the polynomial
$$
x^n-t\in K(t)[x].
$$
This polynomial is irreducible over $K(t)$. One way to see this is to view it in $K[t][x]$ and apply Eisenstein's criterion at the prime element $t$.

Since $\alpha$ is a root of $x^n-t$, the minimal polynomial of $\alpha$ over $K(\alpha^n)=K(t)$ has degree $n$.

Therefore
$$
[K(\alpha):K(\alpha^n)]=n.
$$

So the answer is
$$
\boxed{[K(\alpha):K(\alpha^n)]=n.}
$$

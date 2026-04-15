## Continuation: Lebesgue-Young Theorem

### Theorem

If
$$
f:[a,b]\to\mathbb R
$$
is monotonically increasing, then $f$ is differentiable a.e. (w.r.t. Lebesgue measure).

From previous lecture, it is enough to show that the exceptional sets are null:
$$
E^c\cap[a,b]\subseteq E_1\cup E_2\cup A,
$$
where
$$
A:=\{x: |f'(x)|=\infty\},
\quad
E_1:=\{x: D^{-}f(x)>D_{+}f(x)\},
\quad
E_2:=\{x: D_{-}f(x)>D^{+}f(x)\}.
$$

___
## Step 1: Show $\lambda^*(A)=0$

Fix $\varepsilon>0$ and $c>0$.

For each $x\in A$, there exists $h_k^x\downarrow0$ such that
$$
\frac{f(x+h_k^x)-f(x)}{h_k^x}>c
\quad\forall k.
$$

Hence intervals
$$
[x, x+h_k^x],\quad x\in A,
$$
form a Vitali cover of $A$.

By Vitali covering lemma, choose pairwise disjoint intervals
$$
I_j=[x_j,x_j+h_j],\quad j=1,\dots,N,
$$
such that
$$
\lambda^*\left(A\setminus\bigcup_{j=1}^{N}I_j\right)<\varepsilon.
$$

Then
$$
\lambda^*(A)
\le\lambda^*\left(A\setminus\bigcup_{j=1}^{N}I_j\right)+\sum_{j=1}^{N}h_j
<\varepsilon+\sum_{j=1}^{N}h_j.
$$

But by construction,
$$
f(x_j+h_j)-f(x_j)>c h_j,
$$
so
$$
\sum_{j=1}^{N}h_j
\le \frac1c\sum_{j=1}^{N}\big(f(x_j+h_j)-f(x_j)\big)
\le \frac1c\,(f(b)-f(a)).
$$

Therefore
$$
\lambda^*(A)\le \varepsilon+\frac{f(b)-f(a)}{c}.
$$
Let $c\to\infty$ and then $\varepsilon\to0$, obtaining
$$
\lambda^*(A)=0.
$$

___
## Step 2: Show $\lambda^*(E_1)=0$ (same for $E_2$)

For rational numbers $r>s$, define
$$
E_{r,s}:=\{x\in(a,b): D^{-}f(x)>r>s>D_{+}f(x)\}.
$$
Then
$$
E_1=\bigcup_{r,s\in\mathbb Q,\ r>s}E_{r,s}.
$$
So it is enough to prove
$$
\lambda^*(E_{r,s})=0\quad\forall r>s.
$$

Fix $\varepsilon>0$ and choose open $G\supset E_{r,s}$ such that
$$
\lambda^*(G)<\lambda^*(E_{r,s})+\varepsilon.
$$

From $D_{+}f(x)<s$, for each $x\in E_{r,s}$ choose $h_k^x\downarrow0$ with
$$
[x-h_k^x,x]\subset G,
\qquad
f(x)-f(x-h_k^x)<s h_k^x.
$$
Thus $\{[x-h_k^x,x]:x\in E_{r,s}\}$ is a Vitali cover of $E_{r,s}$.

By Vitali, choose disjoint intervals
$$
[x_j-h_j,x_j],\quad j=1,\dots,n,
$$
with
$$
\lambda^*\left(E_{r,s}\setminus\bigcup_{j=1}^{n}[x_j-h_j,x_j]\right)<\varepsilon.
$$

Set
$$
H:=\bigcup_{j=1}^{n}[x_j-h_j,x_j],
\qquad
B:=E_{r,s}\cap H.
$$
Then
$$
\lambda^*(B)\ge \lambda^*(E_{r,s})-\varepsilon. \tag{1}
$$

Now use $D^{-}f(y)>r$ for $y\in B$: choose right intervals
$$
[y,y+z_i^y]\subset G,
\qquad
f(y+z_i^y)-f(y)>r z_i^y,
$$
which form a Vitali cover of $B$.
Again by Vitali, choose disjoint
$$
[y_i,y_i+z_i],\quad i=1,\dots,m,
$$
such that
$$
\lambda^*\left(B\setminus\bigcup_{i=1}^{m}[y_i,y_i+z_i]\right)<\varepsilon.
$$
Hence
$$
\lambda^*(B)\le \sum_{i=1}^{m}z_i+\varepsilon. \tag{2}
$$

Also,
$$
\sum_{i=1}^{m}\big(f(y_i+z_i)-f(y_i)\big)
> r\sum_{i=1}^{m}z_i. \tag{3}
$$

From the first family,
$$
\sum_{j=1}^{n}\big(f(x_j)-f(x_j-h_j)\big)
< s\sum_{j=1}^{n}h_j
\le s\,\lambda(G). \tag{4}
$$

Comparing the two estimates through monotonicity/telescoping on disjoint intervals inside $G$ gives
$$
r\,\lambda^*(B)\le s\,\lambda^*(G)+\text{small error terms depending on }\varepsilon.
$$
Letting $\varepsilon\downarrow0$ and using $r>s$ forces
$$
\lambda^*(E_{r,s})=0.
$$

Therefore $\lambda^*(E_1)=0$. Similarly, $\lambda^*(E_2)=0$.

Combining Steps 1 and 2, $f$ is differentiable a.e. on $[a,b]$.

___
## Remark

The proof above is the standard Vitali-covering argument for monotone functions and is the key step in showing monotone functions are a.e. differentiable.

---
course: Functional Analysis
Lecture:
date: 12 October
---
Orthogonal projection
$H$ - Hilbert, $V$ - closed subspace

### Proof (cont.):
Step 1: $d = \inf_{y \in V} \|x - y\| = d(x, V)$
$(y_n)$ - minimizing sequence
$\Rightarrow \exists y \in H$ s.t. $y_n \rightarrow y$. Since $V$ is closed, $y \in V$.
$\exists y \in V$ s.t. $\|x - y\| = \inf_{z \in V} \|x - z\|$.

Step 2:
If $y' \in V$ is any other point s.t. $\|x - y'\| = \inf_{z \in V} \|x - z\|$, then $y = y'$.
In parallelogram identity, take $u = x - y, v = x - y'$.
$$
\|y - y'\|^2 = 2\|x - y\|^2 + 2\|x - y'\|^2 - 4\left\|x - \frac{y + y'}{2}\right\|^2
$$
$$
\le 2d^2 + 2d^2 - 4d^2 = 0
$$
$$
y = y'
$$
$\exists! y \in V$ s.t. $d = \|x - y\| = \min_{z \in V} \|x - z\|$.

Step 3: (Characterisation of $y$)
Call $y$ from Step 2 as $P_V x$, i.e. $y = P_V x$.
We show that $y$ is the unique $y \in V$ s.t. $x - y \in V^\perp$.
First we show that $x - y \in V^\perp$, i.e., $(x - y, v) = 0, \forall v \in V$.

Let $v \in V$ be arbitrary. Consider the map $t \in \mathbb{R} \mapsto \|x - (y + tv)\|^2 \in \mathbb{R}$.
$$
f(t) = \|x - (y + tv)\|^2
$$
$$
= \|x - y\|^2 - 2t \text{Re}(x - y, v) + t^2 \|v\|^2
$$
Since $\|x - y\| = d(x, V)$, the function $f$ attains the minimum at $t = 0$.
$\Rightarrow f'(0) = 0$
$\Rightarrow \text{Re}(x - y, v) = 0, \forall v \in V$.
Replacing $v$ with $-iv$ gives $\text{Im}(x - y, v) = 0, \forall v \in V$.
Hence $(x - y, v) = 0, \forall v \in V$.
$\Rightarrow x - y \in V^\perp$.

If $y' \in V$ is any other point s.t. $x - y' \in V^\perp$, then $y' = y$.
$$
\|y - y'\|^2 = (y - y', y - y')
$$
$$
= (y - y', x - y') - (y - y', x - y) = 0
$$
$\Rightarrow y' = y$.

$$
\exists! y \in V, z \in V^\perp \text{ s.t. } x = y + z
$$
$$
y = P_V x, \quad z = P_{V^\perp} x
$$

Step 4: We show that $P_V$ and $P_{V^\perp}$ are linear and $\|P_V\| \le 1, \|P_{V^\perp}\| \le 1$.
Suppose $x, x' \in H, \alpha, \alpha' \in \mathbb{K}$,
$y = P_V x, y' = P_V x'$
$\alpha y + \alpha' y' \in V$
$\alpha x + \alpha' x' - \alpha y - \alpha' y' = \alpha(x - y) + \alpha'(x' - y') \in V^\perp$ (Since $V^\perp$ is a subspace)

By Step 3, $\alpha y + \alpha' y' = P_V(\alpha x + \alpha' x')$.
$$
P_V(\alpha x + \alpha' x') = \alpha P_V x + \alpha' P_V x'
$$
$\Rightarrow$ linearity of $P_V$.

$$
x = y + z = P_V x + P_{V^\perp} x
$$
or $P_{V^\perp} x = x - P_V x = (I - P_V)x$.
$P_{V^\perp}$ is also linear.

$$
x = P_V x + P_{V^\perp} x
$$
$$
\|x\|^2 = \|P_V x + P_{V^\perp} x\|^2 = \|P_V x\|^2 + \|P_{V^\perp} x\|^2
$$
$$
\|P_V x\|^2 = \|x\|^2 - \|P_{V^\perp} x\|^2 \le \|x\|^2
$$
$$
\|P_V x\| \le \|x\| \Rightarrow \|P_V\|_{\mathcal{L}(H,H)} \le 1
$$
Similarly, $\|P_{V^\perp}\|_{\mathcal{L}(H,H)} \le 1$.

If $V \neq \{0\}$, then $\|P_V\| = 1$.
Choose $v \in V$ s.t. $\|v\| = 1$.
Then $P_V(v) = v$.
$$
1 = \|v\| = \|P_V(v)\| \le \sup_{\|u\|=1} \|P_V(u)\| = \|P_V\|
$$
$\Rightarrow \|P_V\|_{\mathcal{L}(H,H)} \ge 1$.
$\Rightarrow \|P_V\| = 1 = \|P_{V^\perp}\|_{\mathcal{L}(H,H)}$.

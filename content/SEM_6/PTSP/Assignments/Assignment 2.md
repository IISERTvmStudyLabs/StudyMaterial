# Assignment 2 Solutions

## 1. Suppose a mosquito makes movements between the forehead, the left cheek, and the right cheek of an individual, which we designate as states 1, 2, 3, according to the following rules. If at some time $n$ the mosquito is sitting on the forehead, then it will definitely move to the left cheek at the next time $n+1$; if it is sitting on the left cheek, it will stay there or move to the right cheek with probability $0.5$ each; and if it is sitting on the right cheek, it will stay there or move to the forehead with probability $0.5$ each. Then the sequence of locations of the mosquito forms a three-state Markov chain.

Find its one-step and two-step transition probability matrices.

Find the equivalence classes of states of the above Markov chain.

Find the period for each of the states of this Markov chain.

### Answer

Let the states be ordered as $1 =$ forehead, $2 =$ left cheek, and $3 =$ right cheek.

The one-step transition probability matrix is

$$
P=
\begin{pmatrix}
0 & 1 & 0\\
0 & \tfrac12 & \tfrac12\\
	frac12 & 0 & \tfrac12
\end{pmatrix}.
$$

To get the two-step matrix, multiply $P$ by itself:

$$
P^2=
\begin{pmatrix}
0 & \tfrac12 & \tfrac12\\
	frac14 & \tfrac14 & \tfrac12\\
	frac14 & \tfrac12 & \tfrac14
\end{pmatrix}.
$$

All three states communicate with one another:

1. $1 \to 2$ in one step,
2. $2 \to 3$ in one step,
3. $3 \to 1$ in one step.

So every state can reach every other state, and the whole chain has a single equivalence class:

$$
\{1,2,3\}.
$$

For the period, it is enough to check one state because the chain is irreducible. For state $1$, there is a return in 3 steps via

$$
1 \to 2 \to 3 \to 1,
$$

and also a return in 4 steps via

$$
1 \to 2 \to 2 \to 3 \to 1.
$$

Thus the set of possible return times contains both $3$ and $4$, so the period is

$$
\gcd(3,4,\dots)=1.
$$

Hence each state has period $1$, and the chain is aperiodic.

## 2. A particular machine is either in working order or broken on any particular day. If it is in working order on someday, it remains so the next day with probability 0.7, while if it is broken on someday, it stays broken the next day with probability 0.2. If it is in working order on Monday, what is the probability that it is in working order on Thursday?

### Answer

Let $W$ denote working order and $B$ denote broken. The transition matrix is

$$
P=
\begin{pmatrix}
0.7 & 0.3\\
0.8 & 0.2
\end{pmatrix}.
$$

From Monday to Thursday there are three transitions: Monday $\to$ Tuesday $\to$ Wednesday $\to$ Thursday. So we need the $(W,W)$ entry of $P^3$.

First,

$$
P^2=
\begin{pmatrix}
0.73 & 0.27\\
0.72 & 0.28
\end{pmatrix}.
$$

Then

$$
P^3=P^2P=
\begin{pmatrix}
0.727 & 0.273\\
0.728 & 0.272
\end{pmatrix}.
$$

Therefore, the probability that the machine is in working order on Thursday, given that it was in working order on Monday, is

$$
\boxed{0.727}.
$$

## 3. A paper (having two sides $A$ and $B$) is hanging in a room. A flea is initially sitted on a particular side of the paper. Every minute it moves from its current location/side to another side of the paper at random. If the flea started flying from side $A$, find the probability that after four moves, it would return to side $A$.

### Answer

Since the paper has only two sides, “move to another side” means the flea must switch sides at every step. Starting from side $A$, the path is forced:

$$
A \to B \to A \to B \to A.
$$

So after four moves, the flea is certainly back on side $A$. Therefore,

$$
\boxed{1}.
$$

## 4. Consider a time-homogeneous discrete-time Markov chain with transition probability matrix $P$ and states $\{0,1,2,3,4\}$ where:

$$
P=
\begin{pmatrix}
1 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0\\
0 & 0 & \tfrac12 & \tfrac12 & 0\\
0 & 0 & \tfrac12 & \tfrac12 & 0\\
	frac14 & \tfrac14 & 0 & 0 & \tfrac12
\end{pmatrix}.
$$

Find the equivalence classes of states of the above Markov chain. Is it an irreducible Markov chain?

Find the period for each of the states of this Markov chain. Is it an aperiodic Markov chain?

### Answer

The communicating structure is easy to read from the matrix.

State $0$ is absorbing, because $P_{00}=1$. So it forms its own equivalence class:

$$
\{0\}.
$$

State $1$ is also absorbing, so it is another singleton class:

$$
\{1\}.
$$

States $2$ and $3$ communicate with each other, because $2 \to 3$ and $3 \to 2$, and neither of them can reach $0$, $1$, or $4$. Hence they form the class

$$
\{2,3\}.
$$

State $4$ can move to $0$, $1$, or itself, but no other state can reach $4$. So it is also a singleton class:

$$
\{4\}.
$$

Therefore, the equivalence classes are

$$
\{0\},\; \{1\},\; \{2,3\},\; \{4\}.
$$

Since there is more than one communicating class, the chain is **not irreducible**.

For the periods:

1. State $0$ has $P_{00}=1$, so it returns in one step. Hence its period is $1$.
2. State $1$ has $P_{11}=1$, so its period is also $1$.
3. State $2$ has a self-loop with probability $1/2$, so it returns in one step. Thus its period is $1$.
4. State $3$ also has a self-loop with probability $1/2$, so its period is $1$.
5. State $4$ has $P_{44}=1/2$, so it returns in one step. Thus its period is $1$.

So every state has period $1$, and the chain is **aperiodic**.

## 5. Consider a time-homogeneous discrete-time Markov chain with transition probability matrix $P$ and states $\{0,1,2,3,4\}$ where:

$$
P=
\begin{pmatrix}
0.5 & 0 & 0.5 & 0 & 0\\
0.25 & 0.5 & 0.25 & 0 & 0\\
0.5 & 0 & 0.5 & 0 & 0\\
0 & 0 & 0 & 0.5 & 0.5\\
0 & 0 & 0 & 0.5 & 0.5
\end{pmatrix}.
$$

Find the equivalence classes of states of the above Markov chain.

Find the period for each of the states of this Markov chain. Is it an aperiodic Markov chain?

### Answer

From the matrix, states $0$ and $2$ communicate with each other:

$$
0 \to 2, \qquad 2 \to 0.
$$

Neither $0$ nor $2$ can reach state $1$, and state $1$ cannot be reached back from $0$ or $2$ once the chain leaves it. So $1$ is its own communicating class.

States $3$ and $4$ communicate with each other and do not connect to the first three states, so they form another class.

Therefore the equivalence classes are

$$
\{0,2\},\; \{1\},\; \{3,4\}.
$$

The periods are all $1$:

1. State $0$ has $P_{00}=0.5>0$, so it can return in one step.
2. State $2$ has $P_{22}=0.5>0$, so it can return in one step.
3. State $1$ has $P_{11}=0.5>0$, so it can return in one step.
4. State $3$ has $P_{33}=0.5>0$, so it can return in one step.
5. State $4$ has $P_{44}=0.5>0$, so it can return in one step.

Hence each state has period $1$, so the chain is **aperiodic**.

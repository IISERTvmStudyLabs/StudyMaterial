# Assignment 3 Solutions

## 1. Consider a time-homogeneous discrete-time Markov chain with transition probability matrix $P$ and states $\{0,1,2,3,4\}$ where:

$$
P=
\begin{pmatrix}
1 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0\\
0 & 0 & 0.5 & 0.5 & 0\\
0 & 0 & 0.5 & 0.5 & 0\\
0.25 & 0.25 & 0 & 0 & 0.5
\end{pmatrix}
$$

Is it an ergodic Markov chain?

### Answer

An ergodic Markov chain must be both irreducible and aperiodic. For a finite chain, irreducibility is the key condition, because finite irreducible chains are automatically positive recurrent, and if they are also aperiodic then they are ergodic.

Here the chain is **not irreducible**. The reason is visible directly from the matrix:

- State $0$ is absorbing, since $P_{00}=1$.
- State $1$ is also absorbing, since $P_{11}=1$.
- States $2$ and $3$ communicate with each other and cannot reach $0$, $1$, or $4$.
- State $4$ can move to $0$, $1$, or stay at $4$, but no other state can reach $4$ from the states $0,1,2,3$.

So the state space splits into multiple communicating classes, and the chain is not irreducible. Therefore it is **not ergodic**.

## 2. Consider a time-homogeneous discrete-time Markov chain with transition probability matrix $P$ and states $\{0,1,2,3,4\}$ where:

$$
P=
\begin{pmatrix}
0.5 & 0 & 0.5 & 0 & 0\\
0.25 & 0.5 & 0.25 & 0 & 0\\
0.5 & 0 & 0.5 & 0 & 0\\
0 & 0 & 0 & 0.5 & 0.5\\
0 & 0 & 0 & 0.5 & 0.5
\end{pmatrix}
$$

1. Find the equivalence classes of states of the above Markov chain.
2. Classify the states of the Markov chain as positive recurrent, null recurrent or transient.

### Answer

The communicating classes are read off from the transition structure.

States $0$ and $2$ communicate with each other:

$$
0 \to 2, \qquad 2 \to 0.
$$

Neither of these states can reach $1$, and $1$ cannot be reached from $0$ or $2$. Hence one equivalence class is

$$
\{0,2\}.
$$

State $1$ can move to $0$, $1$, or $2$, but once the chain leaves state $1$ and enters the class $\{0,2\}$, it can never return to $1$. So $1$ is in its own class:

$$
\{1\}.
$$

States $3$ and $4$ communicate with each other and do not connect to the first three states, so they form another class:

$$
\{3,4\}.
$$

Therefore the equivalence classes are

$$
\{0,2\},\; \{1\},\; \{3,4\}.
$$

Now classify the states.

The classes $\{0,2\}$ and $\{3,4\}$ are **closed** communicating classes, because once the chain enters either class, it cannot leave it. Since the chain is finite and each closed communicating class is finite and irreducible, all states in these classes are **positive recurrent**.

So states $0,2,3,4$ are positive recurrent.

State $1$ is **transient**. It can move to states $0$ or $2$, and after that it cannot be reached again. Since there is a nonzero probability of never returning to $1$, state $1$ is not recurrent.

There are no null recurrent states in a finite Markov chain, so the full classification is:

$$
\boxed{0,2,3,4 \text{ are positive recurrent, and } 1 \text{ is transient.}}
$$

## 3. If $\{N(t)\}$ is a Poisson process and $s<t$, then prove that

$$
P[N(s)=k\mid N(t)=n]=\binom{n}{k}(s/t)^k(1-s/t)^{n-k}.
$$

### Answer

Let $0<s<t$ and define the increments

$$
X=N(s), \qquad Y=N(t)-N(s).
$$

Because $\{N(t)\}$ is a Poisson process:

1. $X \sim \mathrm{Poisson}(\lambda s)$,
2. $Y \sim \mathrm{Poisson}(\lambda(t-s))$,
3. $X$ and $Y$ are independent.

Also,

$$
N(t)=X+Y.
$$

We want

$$
P[N(s)=k\mid N(t)=n]=P[X=k\mid X+Y=n].
$$

Using the definition of conditional probability,

$$
P[X=k\mid X+Y=n]
=\frac{P(X=k,\,Y=n-k)}{P(X+Y=n)}.
$$

Now compute the numerator using independence:

$$
P(X=k,\,Y=n-k)
=e^{-\lambda s}\frac{(\lambda s)^k}{k!}\,e^{-\lambda(t-s)}\frac{(\lambda(t-s))^{n-k}}{(n-k)!}.
$$

Since $X+Y \sim \mathrm{Poisson}(\lambda t)$,

$$
P(X+Y=n)=e^{-\lambda t}\frac{(\lambda t)^n}{n!}.
$$

Therefore

$$
P[X=k\mid X+Y=n]
=\frac{e^{-\lambda t}\dfrac{(\lambda s)^k}{k!}\dfrac{(\lambda(t-s))^{n-k}}{(n-k)!}}{e^{-\lambda t}\dfrac{(\lambda t)^n}{n!}}.
$$

After cancellation,

$$
P[X=k\mid X+Y=n]
=\frac{n!}{k!(n-k)!}\left(\frac{s}{t}\right)^k\left(\frac{t-s}{t}\right)^{n-k}.
$$

Hence

$$
\boxed{P[N(s)=k\mid N(t)=n]=\binom{n}{k}(s/t)^k(1-s/t)^{n-k}}.
$$

This shows that, conditional on $N(t)=n$, the number of events occurring by time $s$ is binomial with parameters $n$ and $s/t$.

## 4. Suppose that customers arrive at a jewellery shop according to a Poisson process with an intensity of 15 persons per hour.

### (a) What is the probability that no customer has arrived in a 4-minute period?

### (b) What is the probability that more than 4 customers have arrived in an 8-minute interval?

### Answer

The arrival rate is $15$ per hour, so per minute the rate is

$$
\lambda=\frac{15}{60}=\frac14 \text{ per minute}.
$$

For a Poisson process, the number of arrivals in time $t$ is Poisson with mean $\lambda t$.

#### (a) No customer in 4 minutes

For $t=4$ minutes, the mean number of arrivals is

$$
\lambda t=\frac14\cdot 4=1.
$$

So

$$
P(N(4)=0)=e^{-1}\frac{1^0}{0!}=e^{-1}.
$$

Thus the probability is

$$
\boxed{e^{-1}\approx 0.3679}.
$$

#### (b) More than 4 customers in 8 minutes

For $t=8$ minutes, the mean number of arrivals is

$$
\lambda t=\frac14\cdot 8=2.
$$

Hence $N(8)\sim \mathrm{Poisson}(2)$, and

$$
P(N(8)>4)=1-P(N(8)\le 4).
$$

So

$$
P(N(8)>4)=1-e^{-2}\sum_{k=0}^{4}\frac{2^k}{k!}.
$$

Expanding the sum,

$$
P(N(8)>4)=1-e^{-2}\left(1+2+\frac{2^2}{2!}+\frac{2^3}{3!}+\frac{2^4}{4!}\right).
$$

Therefore

$$
\boxed{P(N(8)>4)=1-e^{-2}\left(1+2+2+\frac{4}{3}+\frac{2}{3}\right)}
$$

and numerically

$$
\boxed{P(N(8)>4)\approx 0.0527}.
$$

## 5. Suppose that a system fails at the cumulative effect of 3 shocks. If shocks occur in accordance with a Poisson process with parameter 1 per week, then find the probability that the system lifetime is greater than five weeks.

### Answer

Let $N(t)$ be the number of shocks by time $t$ weeks. Since shocks occur according to a Poisson process with rate $1$ per week,

$$
N(5)\sim \mathrm{Poisson}(5).
$$

The system fails at the third shock, so its lifetime is greater than five weeks exactly when fewer than 3 shocks have occurred by time 5. In other words,

$$
\{T>5\}=\{N(5)\le 2\}.
$$

Therefore

$$
P(T>5)=P(N(5)\le 2).
$$

Using the Poisson formula,

$$
P(T>5)=e^{-5}\left(\frac{5^0}{0!}+\frac{5^1}{1!}+\frac{5^2}{2!}\right).
$$

So

$$
P(T>5)=e^{-5}\left(1+5+\frac{25}{2}\right).
$$

Hence

$$
\boxed{P(T>5)=\frac{37}{2}e^{-5}\approx 0.1246}.
$$

## 6. Suppose in an exhibition, the visitors are coming in a Poisson process with 15 persons per hour. In a randomly chosen hour:

### (a) What is the probability of exactly 5 visitors arriving in the first 15 minutes?

### (b) Given that exactly 5 visitors arrived in the first 15 minutes, what is the probability that all 5 arrived in the last 7 minutes out of these 15 minutes?

### Answer

The arrival process is Poisson with rate 15 per hour, so the number of visitors in a time interval of length $t$ hours is Poisson with mean $15t$.

#### (a) Exactly 5 visitors in the first 15 minutes

Fifteen minutes is $\tfrac14$ of an hour, so the mean number of arrivals in the first 15 minutes is

$$
15 \cdot \frac14 = \frac{15}{4}.
$$

Therefore,

$$
P(N=5)=e^{-15/4}\frac{(15/4)^5}{5!}.
$$

So the required probability is

$$
\boxed{e^{-15/4}\frac{(15/4)^5}{5!}}.
$$

#### (b) All 5 arrivals occur in the last 7 minutes

Conditioned on there being exactly 5 arrivals in the 15-minute interval, the 5 arrival times are distributed like the order statistics of 5 independent uniform random variables on that interval.

So each arrival is equally likely to fall anywhere in the 15-minute interval, and the probability that a given arrival lies in the last 7 minutes is

$$
\frac{7}{15}.
$$

Since the 5 conditional arrival times are uniformly spread over the interval, the probability that all 5 lie in the last 7 minutes is

$$
\left(\frac{7}{15}\right)^5.
$$

Hence,

$$
\boxed{\left(\frac{7}{15}\right)^5}.
$$

## 7. Suppose that people of Ukraine immigrate to Poland at a Poisson rate of 3 per day.

### (a) What is the expected time until the 15th immigrant arrives?

### (b) What is the probability that the elapsed time between the 14th and the 15th arrival exceeds one day?

### Answer

Let the immigration process be a Poisson process with rate $\lambda=3$ per day.

#### (a) Expected time until the 15th arrival

For a Poisson process, the waiting time until the $n$th arrival has mean

$$
\frac{n}{\lambda}.
$$

Therefore, the expected time until the 15th immigrant arrives is

$$
\frac{15}{3}=5 \text{ days}.
$$

So the answer is

$$
\boxed{5 \text{ days}}.
$$

#### (b) Probability that the time between the 14th and 15th arrival exceeds one day

The time between consecutive arrivals in a Poisson process is exponential with rate 3.

So if $X$ is the time between the 14th and 15th arrivals, then

$$
X \sim \mathrm{Exponential}(3).
$$

Hence

$$
P(X>1)=e^{-3\cdot 1}=e^{-3}.
$$

Therefore,

$$
\boxed{e^{-3}}.
$$

## 8. Find the differential equation of the pure birth process. If the process starts with $i$ individuals, find the mean of the number $N(t)$ present at time $t$.

### Answer

For a pure birth process with birth rate from state $n$ equal to $\lambda_n$, the forward equations for the state probabilities $p_n(t)=P(N(t)=n)$ are

$$
p_0'(t)=-\lambda_0 p_0(t),
$$

and for $n\ge 1$,

$$
p_n'(t)=\lambda_{n-1}p_{n-1}(t)-\lambda_n p_n(t).
$$

This is the standard differential-difference system for a pure birth process.

For the usual linear pure birth process, also called the Yule process, the birth rate is proportional to the current population:

$$
\lambda_n=n\lambda.
$$

If $M(t)=E[N(t)]$, then the mean satisfies

$$
M'(t)=\lambda M(t),
$$

with initial condition $M(0)=i$ when $N(0)=i$.

Solving the differential equation gives

$$
M(t)=ie^{\lambda t}.
$$

Thus the mean number of individuals at time $t$ is

$$
\boxed{E[N(t)]=ie^{\lambda t}}.
$$

## 9. Write down the differential-difference equations for the linear growth process $\{N(t), t \ge 0\}$ with immigration having

$$
\lambda_i=i\lambda+a, \qquad (a>0)
$$

and

$$
\mu_i=i\mu, \qquad (i\ge 0).
$$

### (a) Show that $M(t)=E[N(t)]$ satisfies the differential equation

$$
M'(t)=(\lambda-\mu)M(t)+a.
$$

### (b) Find the solution for $M(t)$ from the above differential equation with the initial condition $M(0)=i$ when $N(0)=i$.

### (c) What is the limit of $M(t)$ as $t\to\infty$ for $\lambda<\mu$?

### Answer

Let

$$
p_i(t)=P(N(t)=i).
$$

For a birth-death process with immigration, the differential-difference equations are

$$
p_i'(t)=\lambda_{i-1}p_{i-1}(t)+\mu_{i+1}p_{i+1}(t)-\bigl(\lambda_i+\mu_i\bigr)p_i(t),
$$

for $i\ge 0$, with the usual boundary convention that terms involving negative indices are omitted.

Substituting $\lambda_i=i\lambda+a$ and $\mu_i=i\mu$, we get

$$
p_i'(t)=\bigl((i-1)\lambda+a\bigr)p_{i-1}(t)+(i+1)\mu\,p_{i+1}(t)-\bigl(i\lambda+a+i\mu\bigr)p_i(t).
$$

To find the mean, multiply the forward equation by $i$ and sum over all $i\ge 0$. Using standard index shifts, the terms combine to give

$$
M'(t)=(\lambda-\mu)M(t)+a,
$$

where $M(t)=E[N(t)]$.

#### (b) Solve for $M(t)$

We solve the linear differential equation

$$
M'(t)-(\lambda-\mu)M(t)=a,
$$

with $M(0)=i$.

If $\lambda\ne \mu$, the solution is

$$
M(t)=i e^{(\lambda-\mu)t}+\frac{a}{\lambda-\mu}\left(e^{(\lambda-\mu)t}-1\right).
$$

Equivalently,

$$
M(t)=\left(i+\frac{a}{\lambda-\mu}\right)e^{(\lambda-\mu)t}-\frac{a}{\lambda-\mu}.
$$

#### (c) Limit when $\lambda<\mu$

If $\lambda<\mu$, then $\lambda-\mu<0$, so $e^{(\lambda-\mu)t}\to 0$ as $t\to\infty$.

Therefore,

$$
\lim_{t\to\infty}M(t)=\frac{a}{\mu-\lambda}.
$$

So the limiting mean is

$$
\boxed{\frac{a}{\mu-\lambda}}.
$$

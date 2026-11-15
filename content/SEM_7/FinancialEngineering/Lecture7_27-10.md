---
course: Financial Engineering
Lecture: 7
date: 2026-10-27
tags:
  - financial-engineering
  - quantitative-finance
  - martingale
  - binomial-model
  - arbitrage-free
---
## 1. Martingale Measure

A probability measure $Q$ is said to be a **Martingale measure** if:
$$S_0 = \frac{1}{1+R} \mathbb{E}^Q[S_1]$$

* $S_0$: Price at time $0$
* $S_1$: Price at time $1$
* $R$: Risk-free rate of return

### Theorem: Fundamental Theorem of Asset Pricing
> A market model is arbitrage-free if and only if there exists an equivalent martingale measure $Q$.

**Proof:**
We know that a single-period portfolio model is arbitrage-free if:
$$d \le 1+R \le u$$

Let $q_u = Q[Z = u]$ and $q_d = Q[Z = d]$ be the probabilities under measure $Q$, where $Z$ is the stock price state variable.
$$1+R = q_u u + q_d d$$
$$(1+R)S_0 = q_u S_0 u + q_d S_0 d = \mathbb{E}^Q[S_1]$$
$$S_0 = \frac{1}{1+R} \mathbb{E}^Q[S_1] \implies \text{Martingale measure } Q \text{ exists.}$$

---

### Theorem: Risk-Neutral Probabilities in Binomial Model
For the binomial model, the martingale probabilities are given by:
$$q_u = \frac{(1+R) - d}{u - d}, \quad q_d = \frac{u - (1+R)}{u - d}$$

**Proof:**
Using the relation for the risk-free rate of return:
$$q_u S u + q_d S d = (1+R)S \implies q_u u + q_d = 1+R$$
Since $q_d = 1 - q_u$:
$$q_u u + (1 - q_u)d = 1+R$$
$$q_u(u - d) = (1+R) - d$$
$$q_u = \frac{(1+R) - d}{u - d}, \quad q_d = 1 - q_u = \frac{u - (1+R)}{u - d}$$

---

## 2. Replicating Portfolios & Completeness

### Theorem: Portfolio Replication
Suppose we have a portfolio $h = (x, y)$ consisting of $x$ units of bonds and $y$ units of stocks, then:
$$y = \frac{f_u^h - f_d^h}{S_0(u - d)}$$
$$x = \frac{1}{B_0(1+R)} \left[ f_u^h - \frac{f_u^h - f_d^h}{u - d} u \right] = \frac{u f_d^h - d f_u^h}{(1+R)(u - d)}$$

Where:
* $f_u^h, f_d^h$ are the values of the portfolio at time $1$ in the up and down states.
* $S_0, B_0$ are the prices of the stock and bond at time $0$.

**Proof:**
The value of the portfolio at time $0$ is:
$$V_0^h = x B_0 + y S_0$$
At time $1$:
$$V_1^h = x B_0(1+R) + y S_0 Z$$
$$V_1^h = \begin{cases} 
x B_0(1+R) + y S_0 u = f_u^h & \text{if price goes up } (Z = u) \quad \text{--- (1)} \\ 
x B_0(1+R) + y S_0 d = f_d^h & \text{if price goes down } (Z = d) \quad \text{--- (2)} 
\end{cases}$$

Subtracting (2) from (1):
$$f_u^h - f_d^h = y S_0(u - d) \implies y = \frac{f_u^h - f_d^h}{S_0(u - d)}$$

Substituting $y$ back into (1) (assuming $B_0 = 1$):
$$x = \frac{1}{1+R} \left[ f_u^h - y S_0 u \right] = \frac{u f_d^h - d f_u^h}{(1+R)(u - d)}$$

---

### Contingent Claims
* **Contingent Claim:** A financial claim whose payoff depends on future events (stochastic variable $Z$). Let $X = \Phi(Z)$ represent the payoff function.
  * *Example:* European Call Option $\Phi(Z) = \max(S_1 - K, 0)$.
* **Reachable Claim:** A claim is said to be *reachable* if there exists a portfolio $h$ such that $X = V_1^h$ with probability $1$. The portfolio $h$ is called a **hedging portfolio** or **replicating portfolio**.
* **Complete Market:** A market is complete if *every* contingent claim in the market is reachable.

If $\Pi(t, X)$ is the price of the contingent claim at time $t$, our aim is to find $\Pi(0, X)$.

### Theorem: Arbitrage and Replicating Portfolios
> Suppose that a claim $X$ is reachable with a replicating portfolio $h$. Then any price of the claim $X$ at time $0$ other than $V_0^h$ will lead to an arbitrage opportunity.

---

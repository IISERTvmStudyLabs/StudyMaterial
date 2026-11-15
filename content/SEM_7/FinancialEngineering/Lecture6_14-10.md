---
course: Financial Engineering
Lecture: 6
date: 2026-10-14
tags:
  - financial-engineering
  - binomial-model
  - option-pricing
  - arbitrage-free
  - quantitative-finance
---
# Algorithm for European Call
### Inputs & Outputs
- **Inputs:** $S, K, r, \sigma, T, N$
- **Output:** Call price today
### Parameter Definitions
$$\Delta t = \frac{T}{N}$$
$$u = e^{\sigma \sqrt{\Delta t}}$$
$$d = u^{-1}$$
$$p_u = \frac{e^{r \Delta t} - d}{u - d}$$
$$P_d = 1 - P_u$$
### Algorithm Logic & Initialization

> [!note] Last Bottom Point Initialization
> 
>   
> 
> - $S_f = u^2$
>     
>       
>     
> - $\text{probability at that point} = (P_d)^N$
>     
>       
>     
>       
>     
> - $S = S \cdot d^N$
>     
>       
>     
>       
>     
> - $\text{Pay off} = \text{probability} \cdot \max\{S - K, 0\}$
>     
>       
>     
>       
>     
### Binomial Tree Iteration Pseudocode

```
for i = 1 to N
{
    prob = prob * ( (N - i + 1) / i ) * ( Pu / Pd )
    S = S * u^2
    payoff = payoff + prob * max{S - K, 0}
}
Call price = e^{-rT} * payoff
```

---
### Assignment 4

1. Write a program to compute the price of a European option using the Binomial model (CRR).
2. Write a program to compute the price of an American option using the Binomial model (CRR).
3. Modify the above programs by accommodating the dividend payment during the period.

---
# Portfolio Dynamics and Single-Period Binomial Model

### Portfolio Definitions
A portfolio $h = (x, y)$ consists of stocks and bonds:
* $x$: Number of units in Bonds
* $y$: Number of units in Stocks
* $B_0 = 1$: Price of a Bond today
* $S_0 = S$: Price of a Stock today

#### Initial Portfolio Value ($t=0$)
$$V_0^h = x B_0 + y S_0 = x + y S_0$$


#### Time-$t$ Portfolio Value
$$V_t^h = x B_t + y S_t$$


---

### Bond & Stock Price Dynamics at Time $t=1$

Let $R$ be the risk-free rate of simple return.
$$B_1 = B_0(1 + R) = 1 + R$$


$$V_1^h = x B_0(1 + R) + y S_Z = x(1 + R) + y S_Z$$


where stock price movement $S_Z$ follows:
$$S_Z = \begin{cases} S_u = S \cdot u \\  S_d = S \cdot d \end{cases}$$


---

### Arbitrage Portfolio Definition

> [!definition] Arbitrage Portfolio
> A portfolio $h$ is said to be an **arbitrage portfolio** if it satisfies the following properties:
> 1. $V_0^h = 0$
> 2. $V_1^h > 0$ with probability $1$

---

### No-Arbitrage Theorem

> [!theorem] No-Arbitrage Condition
> A portfolio is arbitrage-free if and only if:
> $$  d \le 1 + R \le u  $$

---

### Proof of No-Arbitrage Theorem

#### Part 1: Necessary Condition ($\text{Arbitrage Free} \implies d \le 1+R \le u$)

Suppose that the portfolio is arbitrage-free. To prove that $d \le 1+R \le u$.

Suppose $u < 1+R$ and $d < 1+R$:
$$\Rightarrow u S < (1 + R) S \quad \text{and} \quad d S < (1 + R) S$$


This implies that investing in a Bond is strictly better than investing in stock.
In that case, we can consider the portfolio $h = (S, -1)$:
- **$S$ units of risk-free asset:** Invest $S$ dollars into the bank account / bond at rate $R$.
- **$-1$ unit of stock:** Short-sell $1$ share of stock today to raise $S$ dollars in cash.
$$V_0^h = \underbrace{S}_{\text{Cash invested in bond}} - \underbrace{S}_{\text{Cash raised from shorting stock}} = 0$$
$$V_1^h = \underbrace{S(1+R)}_{\text{Value of bond investment}} - \underbrace{S \cdot Z}_{\text{Cost to buy back stock}}$$
$$V_1^h = S(1 + R) - S_Z = S(1 + R) - S \cdot Z = S\big((1 + R) - Z\big) > 0$$

This creates an arbitrage portfolio ($V_0^h = 0$ and $V_1^h > 0$ almost surely), which contradicts the assumption that the market is arbitrage-free.

$$\therefore d \le 1 + R \le u$$


---

#### Part 2: Sufficient Condition ($d \le 1+R \le u \implies \text{Arbitrage Free}$)

Conversely, suppose that $d \le 1+R \le u$. To prove that the portfolio is arbitrage-free.

We have a portfolio $h = (x, y)$. Suppose $V_0^h = 0$:
$$\Rightarrow x + y S = 0 \implies x = -y S$$


Evaluating portfolio value at time $t=1$:
$$V_1^h = x(1 + R) + y S_Z = -y S(1 + R) + y S_Z = y S \big( Z - (1 + R) \big)$$


To have $V_1^h > 0$ in all states ($Z = u$ and $Z = d$) simultaneously requires $u > 1+R$ and $d > 1+R$, which contradicts $d \le 1+R \le u$.

Thus, no portfolio can achieve $V_0^h = 0$ and $V_1^h > 0$ with probability $1$.

$$\text{The portfolio is arbitrage-free} \iff d \le 1 + R \le u$$

---

# Risk-Neutral Probability Measure Formulation
Since $d \le 1+R \le u$, $1+R$ can be written as a **convex combination** of $u$ and $d$:
$$\exists \; q_u, q_d \quad \text{s.t.} \quad 1 + R = q_u u + q_d d$$
There exists a probability measure $Q$ such that:
$$q_u = Q\{Z = u\}$$
$$q_d = Q\{Z = d\}$$
$$\text{s.t.} \quad 1 + R = q_u u + q_d d \quad \text{with} \quad q_u + q_d = 1, \; q_u, q_d \ge 0$$
---

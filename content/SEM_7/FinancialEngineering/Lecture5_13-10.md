---
course: Financial Engineering
lecture: 5
date: 2026-10-13
aliases:
  - CRR
tags:
  - financial-engineering
  - derivatives
---
# Cox-Ross-Rubinstein (CRR) Modelling
Let $p$ be the real-time probability and $u$ be the real return factor of the stock with volatility $\sigma$.
Expected return of stock:
$$E[S_{\Delta t}] = S_0 e^{\mu \Delta t}$$
In the binomial model, the expected stock price after one period $\Delta t$ is:
$$E[S_{\Delta t}] = p \cdot S_0 u + (1-p) \cdot S_0 d $$
Equating the expected stock return to the continuous expected return:
$$p \cdot S_0 u + (1-p) \cdot S_0 d = S_0 e^{\mu \Delta t} $$
Dividing both sides by $S_0$:
$$p u + (1-p) d = e^{\mu \Delta t} $$
Solving for $p$:
$$p(u - d) + d = e^{\mu \Delta t} $$
$$p = \frac{e^{\mu \Delta t} - d}{u - d} $$
## Derivation of Parameter Relationships
Let $\sigma$ be the volatility, then the standard deviation of the return in period $\Delta t$ will be $\sigma \sqrt{\Delta t}$.
Variance of the return:
$$\text{Variance of return} = \sigma^2 \Delta t $$
Using the definition of variance $\text{Var}(R_t) = E[R_t^2] - (E[R_t])^2$:
$$\sigma^2 \Delta t = \left[ p u^2 + (1-p) d^2 \right] - \left[ p u + (1-p) d \right]^2 \quad \text{[Ignoring } S_0]$$
Since $p u + (1-p) d = e^{\mu \Delta t}$:
$$\sigma^2 \Delta t = p u^2 + (1-p) d^2 - \left(e^{\mu \Delta t}\right)^2 $$
Substituting $p = \frac{e^{\mu \Delta t} - d}{u - d}$ and $1-p = \frac{u - e^{\mu \Delta t}}{u - d}$:
$$\sigma^2 \Delta t = \left( \frac{e^{\mu \Delta t} - d}{u - d} \right) u^2 + \left( \frac{u - e^{\mu \Delta t}}{u - d} \right) d^2 - \left(e^{\mu \Delta t}\right)^2 $$
Combining terms under a common denominator:
$$\sigma^2 \Delta t = \frac{(e^{\mu \Delta t} - d) u^2 + (u - e^{\mu \Delta t}) d^2 - (u - d) e^{2\mu \Delta t}}{u - d}$$
Simplifying the numerator:
$$\sigma^2 \Delta t = \frac{(u^2 - d^2) e^{\mu \Delta t} - ud(u - d) - (u - d) e^{2\mu \Delta t}}{u - d}$$
Dividing through by $(u - d)$:
$$\sigma^2 \Delta t = (u + d) e^{\mu \Delta t} - ud - e^{2\mu \Delta t} $$
Rearranging into standard form:
$$(u + d) e^{\mu \Delta t} - ud - e^{2\mu \Delta t} - \sigma^2 \Delta t = 0 $$
Assuming a symmetric tree condition $d = u^{-1} = \frac{1}{u}$:
$$\left( u + \frac{1}{u} \right) e^{\mu \Delta t} - u \cdot \frac{1}{u} - e^{2\mu \Delta t} - \sigma^2 \Delta t = 0  $$
Multiply through by $u$:
$$(u^2 + 1) e^{\mu \Delta t} - u \left( 1 + e^{2\mu \Delta t} + \sigma^2 \Delta t \right) = 0  $$
$$u^2 e^{\mu \Delta t} - u \left( 1 + e^{2\mu \Delta t} + \sigma^2 \Delta t \right) + e^{\mu \Delta t} = 0  $$
Solving this quadratic equation yields the standard CRR approximation:
$$u = e^{\sigma \sqrt{\Delta t}}  $$
> [!info] Additional Explanation
> 
> The solution $u = e^{\sigma \sqrt{\Delta t}}$ is obtained by applying a second-order Taylor series expansion ($e^x \approx 1 + x + \frac{x^2}{2}$) to the continuous-time terms in the quadratic equation as $\Delta t \to 0$.
> 
>   
### Real-World Parameters
In the real-world measure ($\mathbb{P}$):
$$u = e^{\sigma \sqrt{\Delta t}}, \quad d = \frac{1}{u}, \quad p = \frac{e^{\mu \Delta t} - d}{u - d} $$
### Risk-Neutral World Parameters
In the risk-neutral measure ($\mathbb{Q}$), the real expected return rate $\mu$ is replaced by the risk-free interest rate $r$:
$$u = e^{\sigma \sqrt{\Delta t}}, \quad d = \frac{1}{u}, \quad p = \frac{e^{r \Delta t} - d}{u - d} $$
## Implementation of Binomial Model (CRR) and Algorithm
> [!note] Property The tree is **recombining** ($u \cdot d = d \cdot u = 1$), which prevents node explosion as $N$ increases.
> 
>   
### European Call Option
Let us have an $N$-period model.
> [!warning] In an $N$-period recombining binomial tree, there are $N$ time steps and $N+1$ terminal nodes at maturity $T$.

Let $p$ be the probability of an upward movement and $(1-p)$ be the probability of a downward movement.
1. The probability of reaching the top node is $p^N$.
2. The stock price at this top node is $S_0 u^N$.
3. The probability of reaching the second node from the top node along a single path is $p^{N-1} \cdot (1-p)$.
4. The total probability of reaching the second node from the top (accounting for all possible path combinations) is:
$$N p^{N-1} (1-p) $$
Therefore, the total probability of reaching a node that requires $i$ upward movements and $N-i$ downward movements is given by the binomial distribution:
$$P(\text{Node } i) = \binom{N}{i} p^i (1-p)^{N-i} $$
The stock price at this node is:
$$S_i = S_0 u^i d^{N-i} $$
The payoff at this node for a European Call option is:
$$\text{Payoff}_i = \max \{ S_0 u^i d^{N-i} - K, 0 \} $$
The expected payoff at maturity time $T$ is:
$$\text{Expected Payoff} = \sum_{i=0}^{N} \binom{N}{i} p^i (1-p)^{N-i} \cdot \max \{ S_0 u^i d^{N-i} - K, 0 \} $$
Discounting back to present value at the risk-free rate $r$, the **European Call Price** is:
$$\text{European Call Price} = e^{-rT} \left[ \sum_{i=0}^{N} \binom{N}{i} p^i (1-p)^{N-i} \cdot \max \{ S_0 u^i d^{N-i} - K, 0 \} \right] $$
### European Put Option and American Options
- **European Put Option:** Similarly, we can compute the price for a European Put option by substituting the call payoff with the put payoff $\max \{ K - S_0 u^i d^{N-i}, 0 \}$.
- **American Options:** For an American option, early exercise is permitted, so you need to evaluate and compare the immediate exercise value against the continuation value at **each node** iteratively backward through the tree. For a European option, you only need the values at maturity time $T$.
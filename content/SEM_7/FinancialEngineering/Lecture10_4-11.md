---
course: Financial Engineering
Lecture: 10
aliases:
  - Call Price Derivation
  - Monotonicity Theorem
  - European Call Replication
tags:
  - financial-engineering
  - risk-neutral-pricing
  - options
  - theorems
topics:
  - Call Price Calculation
  - Risk-Neutral Probabilities
  - Monotonicity Theorem
  - Vanilla Option Valuation
date: 2026-11-04
---
The previous lecture theorem: [[Lecture9_3-11|Second Fundamental Theorem of Asset Pricing]]
**Proof:** 
Suppose, the market is complete.
$$
\iff \text{Rank}(D) = M \quad \text{(using char. thm)}
$$

Given that, the market is arb. free.
$$
\therefore \text{FFTAP}, \quad S_0 = \frac{1}{1+R} \mathbb{E}^\mathbb{Q}[S_1] \quad \text{i.e. a measure } \mathbb{Q} \text{ exists satisfying this}
$$
$$
S_0 = DZ
$$

In other words, existence of a unique measure is guaranteed
$$
\iff \text{the system } S_0 = DZ \text{ has a unique solution}
$$
$$
\iff \text{Null space of } D \text{ is zero, } \text{Null}(D) = 0.
$$

But we know that,
$$
\mathbb{R}^M = \text{Range}(D) + \text{Null}(D)
$$

By Rank-Nullity thm,
$$
\dim(\mathbb{R}^M) = \text{rank}(D) + \text{nullity}(D)
$$
$$
M = M + n(D)
$$
$$
\implies n(D) = 0 
$$
$$
\implies \text{Null space of } D = 0
$$

$$
\therefore \text{the measure is unique.}
$$

---

### Can a European Call be replicated by a portfolio?

Let $S = S_0$ be the stock price at time 0
At time 1, $S$ can be:
- $S_u$ if price goes up
- $S_d$ if price goes down

Suppose we have a European call with strike $K$, then its value of the call at time 1, will be $C_u$ or $C_d$ where:
$C_u = S_u - K$; $C_d = 0$

The $\Delta$ of the Call:
$$
\Delta = \frac{C_u - C_d}{S_u - S_d}
$$
This implies that,
$$
\Delta(S_u - S_d) = C_u - C_d
$$
$$
\implies \Delta S_u - C_u = \Delta S_d - C_d
$$
If we start money with
$$
e^{-rT}(\Delta S_u - C_u) = e^{-rT}(\Delta S_d - C_d)
$$
Then it will grow to time $t=1$ to
$$
\Delta S_u - C_u = \Delta S_d - C_d
$$
Suppose we consider a portfolio consists of $\Delta$ number of shares and borrowing money with $e^{-rT}(\Delta S_u - C_u)$ or $e^{-rT}(\Delta S_d - C_d)$

Value at time 0, $V_0 = \Delta S - e^{-rT}(\Delta S_u - C_u)$ or $\Delta S - e^{-rT}(\Delta S_d - C_d)$

Value at time $t=1$:
- $\Delta S_u - (\Delta S_u - C_u) = C_u$ if price goes up
- $\Delta S_d - (\Delta S_d - C_d) = C_d$ if price goes down

This means that irrespective of price goes up or down, value of the portfolio remains same.
Value of the portfolio = same at time 0.
$\implies$ Call can be replicated by a portfolio.

### What will be the call price?
Cost of construction $= C = \Delta S - e^{-rT}(\Delta S_u - C_u)$
$$
= \left(\frac{C_u - C_d}{S_u - S_d}\right) * S - e^{-rT}\left(\frac{C_u - C_d}{S_u - S_d} * S_u - C_u\right)
$$
$$
= \frac{(C_u - C_d)S - e^{-rT}((C_u - C_d)S_u - C_u(S_u - S_d))}{S_u - S_d}
$$
$$
= \frac{C_u(S - e^{-rT}S_d)}{S_u - S_d} + C_d \left[\frac{e^{-rT}S_u - S}{S_u - S_d}\right]
$$
$$
= \Pi_u C_u + \Pi_d C_d
$$
$$
e^{rT}C = e^{rT}\Pi_u C_u + e^{rT}\Pi_d C_d
$$
Let 
$$
P_u = e^{rT}\Pi_u, P_d = e^{rT}\Pi_d
$$
Then 
$$
e^{rT}C = P_u C_u + P_d C_d
$$
Where $P_u + P_d = 1$
$$
P_u + P_d = e^{rT}\Pi_u + e^{rT}\Pi_d = e^{rT} * \left[\frac{S - e^{-rT}S_d}{S_u - S_d} + \frac{e^{-rT}S_u - S}{S_u - S_d}\right]
$$
$$
= e^{rT} * e^{-rT} = 1
$$
$P_u, P_d$ can be treated as the probability. We have
$$
e^{rT}C = P_u C_u + P_d C_d
$$
$$
C = e^{-rT}[P_u C_u + P_d C_d]
$$
___
# Monotonicity Theorem

If portfolio A and B are such that in every possible state of the market at time $T$ portfolio A is worth at least as much as portfolio B. Then at any time $t < T$ portfolio A is worth at least as much as portfolio B.
If in addition, portfolio A is worth more than portfolio B in some state of the world, then at any time $t < T$, portfolio A is worth more than portfolio B.

**Proof**
Given that A and B are two portfolios. Consider a portfolio C taking a long position in A and short position in B.
$$
C = A - B
$$
$$
\implies V(C) = V(A) - V(B) \ge 0 \text{ at time } T
$$
$$
\implies V(C) \ge 0 \text{ at time 0 or any } t < T
$$
Otherwise creates an arbitrage opportunity.
$$
\implies V(A) \ge V(B) \text{ at any time } t < T
$$
If $V(A) > V(B)$ at time $T$, then $V(A) > V(B)$ at $t < T$.
___
## Theorem:
A vanilla Call or Put always has a positive value before expiry.

**Proof:** 
Consider a portfolio A consists of option & B consists of a dead asset which doesn't pay anything.
Then $V(A) \ge 0$ depends on whether you exercise the option.
and $V(A) \ge V(B)$.
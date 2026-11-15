---
course: Financial Engineering
Lecture: 1
date: 16 September 2026
aliases:
  - Parity
tags:
  - financial-engineering
  - options
---

# Put-Call Parity & Option Strategies

## Put-Call Parity Relation

- **Portfolio A:** Call + $Ke^{-rT}$ (cash)
- **Portfolio B:** Put + Stock

At time $T$:
$$
\text{Value}(P_A) = \max\{S_T-K, 0\} + K = \max\{S_T, K\}
$$
$$
\text{Value}(P_B) = \max\{K-S_T, 0\} + S_T = \max\{S_T, K\}
$$

Since both portfolios have identical payoffs at $T$, by no-arbitrage they must have the same value at time 0:

$$
\boxed{C + Ke^{-rT} = P + S_0} \quad \text{(European call \& European put only)}
$$

$$S_0 + K \le C - P \le S_0 - Ke^{-rT}$$


## Option Strategies

1. **Covered Call** — Long position in stock + short position in a call
2. **Protective Put** — Long position in stock + long position in a put
3. **Bull Spread** — Long call at strike $K_1$ + short call at strike $K_2$, where $K_2 > K_1$
4. **Bear Spread** — Long put at strike $K_1$ + short call... *(see note below)*
5. **Box Spread** — a combination of a bull spread and a bear spread
6. **Butterfly Spread** — 3 positions: buy 2 calls at strikes $K_1$ and $K_3$ ($K_1 < K_3$), and sell **2** calls at strike $K_2$, where $K_1 < K_2 < K_3$
7. **Strangle** — Buy a call and a put with the **same** strike price
8. **Straddle** — Buy a call and a put with **different** strike prices, same maturity

> [!warning] Ambiguous in original
> Strategy #4 (Bear Spread) and the strangle/straddle definitions (#7, #8) were written in a way that's slightly inconsistent with standard definitions (e.g. the note has "long put $K_1$ + short call $K_2$" for #4, and swaps which of #7/#8 uses matching vs. differing strikes). **Standard definitions for reference:**
> - **Bear Spread:** long put at $K_2$ + short put at $K_1$, with $K_2 > K_1$ (or equivalently with calls, reversed from the bull spread)
> - **Straddle:** long call + long put, **same** strike price
> - **Strangle:** long call + long put, **different** strike prices
>
> Please cross-check with your textbook/instructor.

---

## Swaps

**Definition:** A contract between 2 parties to exchange future cash flows — an agreement.

### Interest Rate Swap (IRS)

Also known as **Plain Vanilla Swap**.

- It exchanges interest rate payments under a certain notional agreement.
- Settlement happens at the end of each period; usually only the **cash difference** is exchanged (not the full notional).

**Example:**
- Reliance: has a **floating rate loan** (100 million) but **prefers fixed**.
- ICICI / SBI: has a **fixed rate loan** (100 million) at 10%, but **prefers floating** (e.g. LIBOR).
- A swap dealer sits between them, exchanging Reliance's floating payments (LIBOR + 0.1%) for fixed payments, and passing fixed-for-floating with the other counterparty.

> [!warning] Ambiguous in original
> The worked numeric example (dates Jan 2026–Jan 2027, rates like "5%, 9%, 4.5%, 5.25%, 5.5%" and the swap diagram with "Reliance ↔ Dealer ↔ ICICI") was only partially legible. The general mechanism (dealer intermediates fixed vs. floating flows, net cash difference exchanged) is captured above, but recommend re-checking the specific cash-flow schedule against your original notes.

---

## Portfolio Management

**Goal:** Diversify investments to reduce risk → balance **Risk & Return**.

### Types of Risk

- **Business Risk** — risk of the company going bankrupt
- **Volatility Risk** — fluctuations in the stock market
- **Interest Rate Risk** — changes in interest rates
- **Liquidity Risk** — buyers may not be available when you want to sell

**Risk** = a measure of uncertainty → measured via **variance / standard deviation** (a measure of volatility).

### Expected Return — Worked Example

| Scenario | $R_1$ | $R_2$ | $R_3$ | Probability |
|----------|-------|-------|-------|-------------|
| $\omega_1$ | 12% | 13% | 2%  | 0.25 |
| $\omega_2$ | 12% | 10% | 22% | 0.75 |

$$
E[R_1] = 0.25(12) + 0.75(12)
$$
$$
E[R_2] = 0.25(13) + 0.75(10)
$$
$$
E[R_3] = 0.25(2) + 0.75(22)
$$

**Variance:**

$$
\text{Var}(R_i) = E[R_i^2] - \big(E[R_i]\big)^2
$$

*(To be computed for $R_1$, $R_2$, $R_3$ — left as an exercise in the original notes.)*

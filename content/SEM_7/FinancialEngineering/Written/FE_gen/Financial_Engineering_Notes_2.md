---
title: Financial Engineering — Notes
tags: [finance, financial-engineering, derivatives, options, portfolio-management]
---

> [!info] About this file
> Converted from handwritten class notes (Sept 1–16). A few spots in the original handwriting were smudged/ambiguous — these are flagged inline with a `> [!warning]` callout so you can cross-check against your notebook or a textbook.

# 📅 1/09 — IRR, NFV, Depreciation

## Internal Rate of Return (IRR)

IRR is the discount rate $r$ at which $NPV = 0$:

$$
NPV = 0 \;\Rightarrow\; \frac{F_1}{1+r} + \frac{F_2}{(1+r)^2} + \dots + \frac{F_n}{(1+r)^n} - F_0 = 0
$$

**Linear approximation for IRR** (first-order Taylor expansion around small $r$):

$$
F_1(1+r)^{-1} + F_2(1+r)^{-2} + F_3(1+r)^{-3} = F_0
$$

$$
F_1(1-r) + F_2(1-2r) + F_3(1-3r) \approx F_0
$$

> [!warning] Ambiguous in original
> The worked numeric example under this section (cash flows ~50000 / 130000 / 50000 / 40000 against a table of "1st 5%, 2nd 130%, 3rd 5%") was not fully legible. Recommend re-deriving from the original problem statement.

## Net Future Value (NFV)

Given an initial outflow of **1 lakh**, with inflows:

| Year | Cash Flow |
|------|-----------|
| 1    | 40,000    |
| 2    | 50,000    |
| 3    | 60,000    |

**NFV at the end of year 3, with $r = 10\%$:**

$$
NFV = -1{,}00{,}000(1+0.1)^3 + 40{,}000(1+0.1)^2 + 50{,}000(1+0.1) + 60{,}000
$$

## Depreciation

**Definition:** Reduction in the value of an asset over a period of time.

- **Cost of the asset:** $C$
- **Life span:** $n$ years
- **Scrap value / Salvage value:** $S$
- **Book Value:** the difference between the cost of the asset and the accumulated depreciation

$$
B_k + D_k = C
$$

where $B_k$ = book value, $D_k$ = accumulated depreciation, at year $k$.

- Book value **at the end** of the life span = **scrap value**
- Book value **at the beginning** of the life span = **cost**

Two depreciation methods:
1. Straight Line Method
2. Constant Percentage (Rate) Method

---

# 📅 (continued) — Depreciation Methods

## 1) Straight Line Method (SLM)

$$
R_k = R = \frac{C - S}{n}, \qquad (C-S) = \text{Depreciation Base}
$$

$$
D_k = k \cdot R
$$

$$
B_k = C - D_k = C - k\left(\frac{C-S}{n}\right)
$$

**Worked example:** $C = 10{,}000$, $n = 5$ years, $S = 2{,}000$

$$
R = \frac{10{,}000 - 2{,}000}{5} = \frac{8{,}000}{5} = 1{,}600
$$

| Year | Book Value Calculation | Book Value |
|------|--------------------------|-----------|
| 0 | $C$ | 10,000 |
| 1 | $10{,}000 - 1{,}600$ | 8,400 |
| 2 | $10{,}000 - 2(1{,}600)$ | 6,800 |
| 3 | $10{,}000 - 3(1{,}600)$ | 5,200 |
| 4 | $10{,}000 - 4(1{,}600)$ | 3,600 |
| 5 | $10{,}000 - 5(1{,}600)$ | 2,000 |

> [!warning] Correction from original
> The original notes wrote Year 4's book value as 8,600, which is inconsistent with the formula ($10{,}000 - 4 \times 1{,}600 = 3{,}600$). The table above uses the formula-consistent value — double check against your source.

## 2) Constant Percentage Method (CPM)

**Assumption:** depreciation is a constant rate of the *book value* of the asset (declining balance).

Let $d$ = depreciation rate (%).

**Worked example:** $C = 10{,}000$, $d = 10\%$

| Year | Opening Book Value | Depreciation | Closing Book Value |
|------|---------------------|--------------|----------------------|
| 0 | $C = 10{,}000$ | 1,000 | 9,000 |
| 1 | 9,000 | 900 | 8,100 |
| 2 | 8,100 | 810 | 7,290 |
| 3 | 7,290 | 729 | 6,561 |

General formula:

$$
\boxed{B_k = C(1-d)^k}
$$

---

# 📝 Programming Assignment (from notes)

1. Change the fixed rate to a floating rate (FR → FLR) — any subsequent months
2. Compute NPV
3. Compute IRR
4. Compute NFV
5. Compute Depreciation:
   - Straight Line Method
   - Constant Percentage Method (CPM)
   - Display the Book Value

---

# 📅 2/09 — Risky Assets & Returns

## Risky vs. Riskless Assets

- **Risky Asset:** future value is uncertain, e.g. a stock.
- **Riskless Asset:** no uncertainty in the price of the asset.

Two market principles:
1. Past information is reflected in the present price.
2. The market responds quickly to new information.

## Price as a Random Variable

$S(t)$ = the price of an asset at time $t$ — an **uncertain** value.
$S(0)$ = **certain**, known today.

$$
S : \Omega \xrightarrow{\text{probability space}} \mathbb{R}^+
$$

where $\Omega$ = the set of various price-movement scenarios.

**Example (2 scenarios):** $\omega_1 = \text{boom}$, $\omega_2 = \text{recession}$, $\Omega = \{\omega_1, \omega_2\}$

| $\Omega$ | $S(0)$ | $S(1)$ |
|----------|--------|--------|
| $\omega_1$ | 10 | 12 |
| $\omega_2$ | 10 | 9 |

**Example (3 scenarios):** boom, recession, stagnant. $\Omega = \{\omega_1, \omega_2, \omega_3\}$

| $\Omega$ | $S(0)$ | $S(1)$ | $S(2)$ |
|----------|--------|--------|--------|
| $\omega_1$ | 10 | 12 | 14 |
| $\omega_2$ | 10 | 8  | 6  |
| $\omega_3$ | 10 | 10 | 10 |

## Return

$$
R(n) = \frac{S(n) - S(n-1)}{S(n-1)}
$$

**With dividends:** let $d(n)$ = dividend paid at time $n$:

$$
R(n) = \frac{S(n) - S(n-1) + d(n)}{S(n-1)}
$$

**Log return:**

$$
\text{Log Return} = \log\left(\frac{S(n)}{S(n-1)}\right)
$$

**With dividend:**

$$
\text{Log Return} = \log\left(\frac{S(n) + d(n)}{S(n-1)}\right)
$$

**Expected Return:**

$$
E[R] = \sum_i p_i \, s_i
$$

---

# Derivatives

**Definition:** A financial instrument whose price depends on some underlying asset(s). E.g. stock options.

## 1. Forward Contract

An agreement between two parties to buy or sell an asset at a certain time, at a certain price — traded **Over-the-Counter (OTC)**.

**Example:**
- Jan 1, 2026: **Buyer** — SBI wants 1 million dollars in 6 months.
- **Seller** — CITI. Delivery: July 1, 2026.

### Terminology
- **Long** ← the buyer
- **Short** ← the seller
- A forward contract is an **obligation** (unlike an option).

**Continuing the example:** Agreed forward price on July 1, 2026 = ₹90/\$.

- If the market (spot) price on July 1 is ₹92/\$:
  $$\text{SBI's profit} = (92-90) \times 1\text{ million}$$
- If spot price is ₹89/\$:
  $$\text{CITI's profit} = (90-89) \times 1\text{ million}$$

### Hedging
Forwards are used as a **hedging instrument**.
**Hedge:** a risk-management process where exposure to risk is reduced.

### Payoff of a Forward Contract
If $S_T$ = spot price at time $T$, and $K$ = agreed (forward) price:

$$
\text{Payoff (Long, e.g. SBI)} = S_T - K
$$
$$
\text{Payoff (Short, e.g. CITI)} = K - S_T
$$

### Forward Pricing

If $S(0)$ is known:

$$
F_0 = S_0 e^{rT} \quad \text{(continuous compounding)}
$$

**Can $F_0 > S_0 e^{rT}$ or $F_0 < S_0 e^{rT}$?** No — this would create an **arbitrage** opportunity.

**Reason**:
If the futures price $F_0$ deviates from the theoretical cost-of-carry price $S_0 e^{rT}$, market participants can construct a portfolio today that locks in a guaranteed, risk-free profit with zero net initial investment.
**Case 1: $F_0 > S_0 e^{rT}$ (Futures Price is Overpriced)**
When the futures contract trades higher than the cost of buying and holding the underlying asset, traders execute a **Cash-and-Carry Arbitrage**:
- **At time $t = 0$ (Today):**
    - Borrow $S_0$ dollars at the risk-free interest rate $r$.
    - Buy 1 unit of the asset at spot price $S_0$.
    - Short (sell) 1 futures contract at price $F_0$.
    - _Net cash flow:_ $\$0$
- **At time $t = T$ (Maturity):**
    - Deliver the asset to fulfil the short futures contract, receiving $F_0$.
    - Repay the borrowed loan plus interest, paying $S_0 e^{rT}$.
    - _Guaranteed profit:_
        $$F_0 - S_0 e^{rT} > 0$$
**Case 2: $F_0 < S_0 e^{rT}$ (Futures Price is Underpriced)**
When the futures contract trades lower than the cost to buy and hold the asset, traders execute a **Reverse Cash-and-Carry Arbitrage**:
- **At time $t = 0$ (Today):**
    - Short-sell 1 unit of the underlying asset for $S_0$.
    - Lend (invest) the cash proceeds of $S_0$ at the risk-free rate $r$.
    - Go long (buy) 1 futures contract at price $F_0$.
    - _Net cash flow:_ $\$0$
- **At time $t = T$ (Maturity):**
    - Collect the invested cash plus accumulated interest: $S_0 e^{rT}$.
    - Buy the asset for $F_0$ by exercising the futures contract.
    - Return the asset to close out the short position.
    - _Guaranteed profit:_
        $$S_0 e^{rT} - F_0 > 0$$
Because traders execute these arbitrage transactions en masse the second a pricing discrepancy appears, buying the underpriced instrument and selling the overpriced one instantly pushes the market back toward equilibrium where $F_0 = S_0 e^{rT}$.

**Payoff diagrams:**
- **Short** forward: payoff decreases as stock price increases (linear, negative slope).
- **Long** forward: payoff increases as stock price increases (linear, positive slope), crossing zero at $K$.

---

# 📅 4/9 — Forward Pricing, Forward Rates

**Example:** $S_0 = 100$, $r = 10\%$ (risk-free interest rate), $T = 6$ months

$$
F_0 = 100\,e^{0.1 \times 0.5}
$$

## Forward Rate

**Definition:** An interest rate applicable to a financial transaction that takes place at a future time.

**Example:** ₹100 invested —
- **Option 1:** 3% for year 0→1, then some forward rate for year 1→2
- **Option 2:** 4% (flat) for year 0→2

Under **continuous compounding**:
- Option 1: $100\,e^{0.03 \times 1} \cdot e^{A \times 1}$ (where $A$ = the implied forward rate for year 2)
- Option 2: $100\,e^{0.04 \times 2}$

> [!warning] Ambiguous in original
> This part of the derivation (comparing the two compounding paths to solve for $A$, and the line about "average of both rates") was not fully legible in the scan.

**Zero rate** = zero curve, or spot curve.

Let $R_1$ = rate applicable for time $T_1$, and $R_2$ = rate applicable for time $T_2$.

**The forward rate:**

$$
R_F = \frac{R_2 T_2 - R_1 T_1}{T_2 - T_1} = R_2 + \frac{(R_2 - R_1)T_1}{T_2 - T_1}
$$

- If $R_2 > R_1 \Rightarrow R_F > R_2$
- If $R_2 < R_1 \Rightarrow R_F < R_2$

**Example:** $R_2 = 4\%,\; T_2 = 2,\; R_1 = 3\%,\; T_1 = 1$

$$
R_F = \frac{0.04 \times 2 - 0.03 \times 1}{2-1} = \frac{0.05}{1} = 5\%
$$

---

## Forward Rate Agreement (FRA)

**Definition:** An agreement between two parties to fix a forward rate on a notional principal, to borrow or invest money.

$$
X \xleftarrow{L \text{ (notional principal)}} Y
$$

- $R_K$ → the fixed rate agreed
- $T_1 \to T_2$ → the time period
- $R_M$ → the market/floating rate, e.g. **LIBOR** (London Interbank Offered Rate)
- The difference between the two rates is paid, based on $T_2$: $(R_{market} - R_K)$

Let $R_M$ = the forward rate applicable from $T_1$ to $T_2$.

$$
\text{Cash flow to } Y = L \times (R_M - R_K) \times (T_2 - T_1)
$$
$$
\text{Cash flow to } X = L \times (R_K - R_M) \times (T_2 - T_1)
$$

**If settled at $T_1$ (instead of $T_2$)** — i.e. discounted back to present value at $T_1$:

$$
PV\big(\text{cash flow to } X \text{ at } T_1\big) = \frac{L \times (R_K - R_M) \times (T_2-T_1)}{1 + R_M(T_2-T_1)}
$$

$$
PV\big(\text{cash flow to } Y \text{ at } T_1\big) = \frac{L \times (R_M - R_K) \times (T_2-T_1)}{1 + R_M(T_2-T_1)}
$$

**Example:** $X = $ ICICI, $Y = $ HDFC, $L = 1$ million, $R_K = 8\%$, $R_M = 8.5\%$, $T_1 = 1$, $T_2 = 2$.

## Futures Contract

- Traded **on an Exchange** (as opposed to forwards, which are OTC).
- Underlying asset can be:
  1. Foreign exchange
  2. Commodity (oil, natural gas, gold, wheat, copper, etc.)

**Payoff:**
$$
\text{Short} = K - S_T, \qquad \text{Long} = S_T - K
$$

---

# 📅 08/09 — Options

## Definition

An **option** is a contract between a buyer and a seller that gives the buyer (or seller) the **right — but not the obligation** — to buy or sell an asset at a future time for a certain price.

- The price paid to buy the right ⇒ **premium / option price**.

## Types

- **Call** → the right to **buy** an asset in the future for a certain price.
  - **Maturity date:** $T$
  - **Strike price:** $K$
- **Put** → the right to **sell**.

Both call and put can be:
- **European (EO / EP):** can be exercised **only** on the maturity date.
- **American (AO / AP):** can be exercised **at any time** prior to maturity.

## Options vs. Futures

1. Futures involve an **obligation**; options do not.
2. Options have a **fee** (premium); futures don't.
3. An option is like **insurance** against price fluctuations.

> One option contract typically covers 100 shares, but the option price is quoted **per share**.

## Worked Example — Call

- Current price $S = 100$
- 3-month call option, strike price $K = 105$, option price = ₹1
- One contract = 100 shares → to buy the right, pay $100 \times 1 = ₹100$
- After 3 months ($T$): $S_T = 110$

**Seller/holder payoff:**
$$
(110 - 105) \times 100 = 500
$$
$$
\text{Profit} = 500 - 100 = 400
$$

**If instead $S_T = 95$:** the option is **not exercised** (out of the money).

## Worked Example — Put

Put price = ₹1, $K = 95$. Three months later, suppose price is ₹105 (i.e. option not exercised, since $S_T > K$).

## General Payoff Formulas

$$
\text{Payoff (Long Call)} = \max\{0,\, S_T - K\}
$$
$$
\text{Payoff (Long Put)} = \max\{0,\, K - S_T\}
$$
$$
\text{Payoff (Short Call)} = \min\{0,\, K - S_T\}
$$
$$
\text{Payoff (Short Put)} = \min\{0,\, S_T - K\}
$$

---

# 📅 09/9 — Options for Hedging & Speculation

## Example — Hedging with a Put

- 1,000 TCS shares, $S_0 = 100$
- 3-month put option, premium $P = 1$, $K = 95$
- Cost to buy the puts: $1,000 x 1 = ₹1,000$

**Conclusion:** Options can be used for **hedging**.

## Example — Speculation with Shares

- ₹20,000 invested, $S_0 = 20$
- 3-month horizon, assumption: price will go up
- Buy 1,000 shares, wait 3 months
- $S_T = 27$

$$
\text{Profit} = (27-20) \times 1{,}000 = 7{,}000
$$

## Example — Speculation with a Call Option

- 3-month call option, premium ₹1, $K = 22$
- 20,000 shares (i.e. 200 contracts)
- $S_T = 27$

$$
(27-22) \times 20{,}000 = 1\text{ lakh}
$$
$$
\text{Profit} = 1\text{ lakh} - 20{,}000 = 80{,}000
$$

**Note the leverage:** ₹20,000 invested in the call earns ₹80,000 profit, vs. ₹7,000 profit for the same ₹20,000 invested directly in shares.

## When to Exercise?

Exercise if it minimizes the loss / maximizes the profit — **not simply if payoff > 0**.

**Call example:** $K = 100$, $S_T = 102$, premium $C = 5$
$$
(102-100) = 2, \quad \text{premium paid} = 5
$$
$$
\text{Profit} = 2 - 5 = -3
$$
Still **exercise** — because the loss is only 3 (recovering ₹2 of the ₹5 premium) instead of losing the full ₹5 premium if not exercised.

**Put example:** $K = 100$, $S_T = 95$, premium $C = 5$
$$
(100-95) = 5, \quad \text{premium paid} = 5
$$
$$
\text{Profit} = 5 - 5 = 0
$$

## Factors Affecting Option Prices

1. $S_T$ (stock price)
2. Strike price
3. Time to maturity
4. Volatility
5. Interest rate
6. Dividends

### Details

1. **Stock price & strike price:** direct impact on payoff.
2. **Time to maturity:** as time increases, both call and put option values increase.
3. **Volatility:** option value increases with volatility of $S_T$.
   - If price rises, the **call** becomes more valuable.
   - If price falls, the **put** becomes more valuable.
4. **Interest rate:** affects present value of the strike price.
5. **Dividends:** if the stock pays dividends, $S_T$ tends to come down as a result — so a **call is less valuable** and a **put is more valuable**.

---

# 📅 15/09 — Intrinsic Value, Time Value, Moneyness

## Intrinsic Value (IV) & Time Value (TV)

$$
\text{IV} = \text{payoff (if exercised now)}
$$
$$
\text{IV (call)} = \max\{S_T - K,\, 0\}
$$
$$
\text{IV (put)} = \max\{K - S_T,\, 0\}
$$

$$
\text{TV (call)} = C - \text{IV}
$$
$$
\text{TV (put)} = P - \text{IV}
$$

**Example:** $S_T = 23$, $K = 21$, $C = 3$
$$
\text{IV} = 2, \qquad \text{TV} = 1
$$

## Moneyness

- **In the Money (ITM)**
- **Out of the Money (OTM)**
- **At the Money (ATM)**

| | Call | Put |
|---|------|-----|
| **ITM** | $S_T > K$ | $K > S_T$ |
| **OTM** | $S_T < K$ | $K < S_T$ |
| **ATM** | $S_T = K$ | $K = S_T$ |

## Bounds on Option Prices

### Call — Upper Bound

$$
C_0 \le S_0 \quad \text{(true for both American and European calls)}
$$

### Call — Lower Bound

$$
C \ge S_0 - K e^{-rT}
$$

If $C < S_0 - Ke^{-rT}$, an **arbitrage opportunity** is created.

**Example:** $S_0 = 20$, $K = 18$, $T = 1$ year, $r = 10\%$

$$
S_0 - Ke^{-rT} = 20 - 18e^{-0.1 \times 1} = 3.71
$$

Suppose $C = 3 \Rightarrow C < 3.71$ → arbitrage exists.

**Arbitrage strategy:**
1. Sell the call and the stock: receive $20 - 3 = 17$
2. Invest ₹17 at the risk-free rate: $17 \times e^{0.1} = 18.79$
3. If $S_T = 17$: profit $= 18.79 - 17 = 1.79$
4. This confirms $C \not< S_0 - Ke^{-rT}$, i.e. $C \ge S_0 - Ke^{-rT}$.

### Proof (Portfolio Argument)

**Claim:** $S_0 - Ke^{-rT} \le C \le S_0$

Consider two portfolios:
- **Portfolio A ($P_A$):** one call + cash investment of $Ke^{-rT}$
- **Portfolio B ($P_B$):** one stock, $S_0$

At time $T$:
$$
\text{Value}(P_A) = \max\{S_T - K, 0\} + K = \max\{S_T, K\}
$$
$$
\text{Value}(P_B) = S_T
$$

Since $P_B \le P_A$ at time $T$, by no-arbitrage $P_B \le P_A$ at time 0 as well:

$$
S_0 \le C + Ke^{-rT} \;\Rightarrow\; \boxed{C \ge S_0 - Ke^{-rT}}
$$

*(This also holds for American calls.)*

### Put Bounds

$$
P \le K \quad \text{(American and European)}
$$
$$
P \le Ke^{-rT} \quad \text{(European only)}
$$

**Claim:** $P \ge Ke^{-rT} - S_0$

Consider:
- **Portfolio C ($P_C$):** a put + a stock
- **Portfolio D ($P_D$):** cash investment of $Ke^{-rT}$

At time $T$:
$$
\text{Value}(P_C) = \max\{K-S_T,0\} + S_T = \max\{K, S_T\}
$$
$$
\text{Value}(P_D) = K
$$

Since $P_D \le P_C$ at time $T$, by no-arbitrage this also holds at time 0:

$$
Ke^{-rT} \le P + S_0 \;\Rightarrow\; \boxed{P \ge Ke^{-rT} - S_0}
$$

**Combined bound (European put):**
$$
Ke^{-rT} - S_0 \;\le\; P \;\le\; Ke^{-rT}
$$

---

# 📅 16/9 — Put-Call Parity & Option Strategies

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

> [!warning] Ambiguous in original
> The notes also include an inequality "$S_0 + K \le C - P \le S_0 - Ke^{-rT}$" directly beneath the parity equation. This doesn't simplify consistently from the parity relation above, so it's likely a transcription/arithmetic slip in the original — worth re-deriving or checking against a textbook.

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

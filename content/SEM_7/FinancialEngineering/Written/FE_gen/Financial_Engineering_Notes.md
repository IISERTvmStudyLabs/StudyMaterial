# Financial Engineering — Course Notes

> **Source: Page 1–2** (Course introduction, written on blackboard)

## Course Roadmap

The course roadmap was sketched on the board as a flow of topics:

**Basics of FE**
→ Financial Market & related glossaries
→ Time value of Money
→ Bonds: yield, convexity(?), duration
→ Term structure of interest rates
→ Financial Instruments — options, futures, forwards, swaps, etc.
→ Portfolio, risk & returns

This basics track feeds into two parallel tracks:

**Discrete-time Modeling** →
- Arbitrage Pricing
- Risk-neutral Probability
- Contingent claims & valuation
- Fundamental Theorem of Asset Pricing
- CRR Model
- Pricing of European & American [options]

**Stochastic Calculus** →
- Brownian Motion
- Martingale
- Itô's formula
- Itô interpreted

**Continuous-time Models** →
- Black–Scholes Formula (stock as GBM — Geometric Brownian Motion)
- Derivation of Black–Scholes PDE
- Fundamental Theorem of Asset Pricing

> **Figure:** A hand-drawn flowchart connecting "Basics of FE" to two branches — "Discrete time Modeling" (leading to arbitrage pricing, risk-neutral probability, contingent claims, CRR model, etc.) and "Stochastic Calculus"/"Continuous time Models" (leading to Brownian motion, Itô calculus, and the Black–Scholes formula/PDE).

### Reference Books

1. Capinski (& Zastawniak), *Introduction to Financial Engineering / Mathematics for Finance*
2. Hull, *Options, Futures & Derivatives*
3. Shreve, *Stochastic Calculus (I & II)*
4. Björk, *Arbitrage [Theory] in Continuous Time*

### Scheme of Evaluation

| # | Component | Weight |
|---|-----------|--------|
| 1 | Mid Sem | 30 |
| 2 | End Sem | 50 |
| 3 | Assignments | 20 |
| | **Total** | **100** |

---

## Financial Market — Overview

> **Figure:** Tree diagram: **Financial Market** branches into **Money Market**, **Capital Market**, and **Foreign Exchange (FX) Market**. **Capital Market** further branches into **Bond Market**, **Derivative Market**, and **Equity Market**.

- **Money Market:** instruments maturing in **< 1 year**; mostly debt, e.g. interbank loans.
- **FX Market:**
	- 24-hour market (except weekends)
	- transacted through agents
	- also called **OTC** (over-the-counter)
- **Capital Market** splits into:
	- **Bond Market** — debt instruments
	- **Derivative Market** — options, swaps
	- **Equity Market** — stocks

### Debt Financing vs. Equity Financing

| Debt Financing | Equity Financing |
|---|---|
| Bonds | Stocks |
| Have to pay back | Risk on investor |

### Market Capitalization Categories

- **Small cap:** < 2000 Cr
- **Mid cap:** 2000 – 5000 Cr
- **Large cap:** > 5000 Cr

### Market Indices

- **BSE** – SENSEX – Sensitive Index
- **NSE** – NIFTY – National Stock Exchange Fifty
- S&P 500

### Price Index

$$
\text{Price Index} = \frac{\text{Current Price}}{\text{Base Price}} \times 100
$$

$$
\text{Price Index}_{t_i} = \frac{\sum P_{t_i} Q_{t_i}}{\sum P_{t_0} Q_{t_0}}
$$

where \(Q\) = Free float market cap.

---

## Financial Instruments

> **Figure:** "Financial Instrument" branches into **Fixed Income Security** and **Derivative and Contracts.**

**Asset:** something that has a value which can be sold.

- **Time value of money:** changing value of money over time.

- \(PV \to\) present value
- \(FV \to\) future value
- **Interest** → cost of borrowing money

> **Figure:** "Interest" branches into **Simple**, **Compound**, **Continuous (Cont.)**.

### Simple Interest

$$
FV = P + rP = P(1+r)
$$

$$
V(\epsilon) = P(1+r\epsilon)
$$

\((1+r\epsilon)\) → growth factor

$$
V(\epsilon) = V(0)\,(1+r\epsilon)
$$

$$
\Rightarrow V_0 = V(\epsilon)(1+r\epsilon)^{-1}
$$

\(V_0 = \) PV, and \((1+r\epsilon)^{-1} \to\) discount factor.

---

## Day Conventions

> **Source: Page 5**

1. \(\dfrac{\text{Actual}}{360}\) (Banker's Rule)
2. \(\dfrac{\text{Actual}}{365}\)
3. \(\dfrac{\text{Approximate}}{360} = \dfrac{30}{360}\)
4. \(\dfrac{\text{Approximate}}{365} = \dfrac{30}{365}\)

### Example

> Suppose you invest ₹10,000 on May 18, 2025 to April 8, 2026. Compute FV as per the 4 day conventions.

1. $\dfrac{325}{360}, FV = 10000\left(1 + 0.1\times\dfrac{325}{360}\right)$
2. $\dfrac{325}{365}, FV = 10000\left(1 + 0.1\times\dfrac{325}{365}\right)$
3. $\dfrac{320}{360}, FV = 10000\left(1 + 0.1\times\dfrac{320}{360}\right)$
4. $\dfrac{320}{365}, FV = 10000\left(1 + 0.1\times\dfrac{320}{365}\right)$

### Simple Discount

$$
D = FV - PV
$$

$$
D = S - P
$$

Let \(d\) denote the discount rate on \(S\) over a period \(\epsilon\):
a
$$
D = S \times d \times \epsilon
$$

> **Source: Page 6**

$$
D = S - P
$$

$$
\Rightarrow P = S - D = S - Sd\epsilon = S(1 - d\epsilon)
$$

$$
\Rightarrow S = P(1-d\epsilon)^{-1}
$$

### Relationship Between \(r\) and \(d\)

$$
P = S(1+r\epsilon)^{-1} \qquad \Rightarrow \qquad \frac{1}{1+r\epsilon} = 1 - d\epsilon
$$

$$
P = S(1 - d\epsilon)
$$

$$
\Rightarrow 1 = (1-d\epsilon)(1+r\epsilon)
$$

$$
\Rightarrow 1 = 1 + r\epsilon - d\epsilon - d\epsilon r\epsilon
$$

$$
\Rightarrow d\epsilon + r\epsilon^2 d = (r-d)\epsilon
$$

$$
\Rightarrow d\epsilon r + d = r
$$

$$
\Rightarrow d(1+r\epsilon) = r \qquad \Rightarrow \qquad \boxed{d = \dfrac{r}{1+r\epsilon}}
$$

### Worked Problems

1. A sum of ₹9000 invested in a bank for 61 days that attracts simple interest will produce ₹9200 at the end of the term. Find the interest rate \(r\) and the return on investment.

$$
\text{Return} = \frac{V(\epsilon) - V(0)}{V(0)}
$$

2. How much would you pay today to receive ₹10000 at a certain future date if you require a return of 5%?

3. How long will it take for a sum of ₹5000 attracting simple interest rate to become ₹5500 if rate is 8%. Compute the rate of investment.

> **Source: Page 7 — Lab Assignments**

4. Write a program to compute the future value of investment with simple interest rate of 'r'. (Inputs are...)

5. Write a program to compute the PV of an investment with an interest rate ≥ 5%.

6. Write a program to compute the interest rate. PV, FV, rate of investment is given.

7. Write a program to compute the required rate of return if PV, FV and rate are given.

8. Write a program to compute the interest generated from an investment at a certain rate from one particular day to another day using different day conventions. (Input: amount, rate, day1, day2)

### Summary (Recap List, Page 8)

1. Asset
2. Time value (PV, FV)
3. Day convention
4. Interest rate & discount rate
5. \(r = \dfrac{d}{1-d\epsilon}\), \(d = \dfrac{r}{1+r\epsilon}\)

**Date convention:** Date 1: \(DD_1/MM_1/YY_1\), Date 2: \(DD_2/MM_2/YY_2\)

Number of days: \(360(YY_2 - YY_1) + 30(MM_2-MM_1) + (DD_2 - DD_1)\)

### Worked Problem — Bank Discount

> A bank charges 12% bank discount on short loans. A borrower needs ₹10000 cash that is to be repaid within 6 months of time. What size of the loan is to be repaid and how much interest is to be paid. What is the interest rate?

- (d) discount rate = 12%
- (P) Principal = 10000
- (\(\epsilon\)) time = 6 months
- FV or \(S = ?\)

$$
S = P(1-d\epsilon)^{-1} = 10000\left(1-0.12\times\frac{6}{12}\right)^{-1} \approx \underline{\underline{10,638.29}}
$$

$$
r = \frac{d}{1-d\epsilon} = \frac{0.12}{1-0.12\times\frac{6}{12}} = 0.1128
$$

### Worked Problem — Commercial Paper

> A company issues ₹1 lakh of commercial paper that matures on June 1st. If this is purchased by an investment firm on March 3 on 11.25% discount rate, what would be the purchase price using the Banker's Rule?

> **Source: Page 9**

- Discount rate = 11.25%
- \(S = 100000\)
- time = 90 days

$$
P = S(1-d\epsilon) = 100000\times\left(1-0.1125\times\frac{90}{360}\right) = \underline{\underline{97,187.5}}
$$

### Worked Problem — Liquidating Obligations

> Suppose one owes ₹5000 due in 4 months and ₹7000 due in 9 months. What payment (i) now (ii) in 6 months (iii) in 1 year will liquidate this obligation if money is worth 11%?

**(i) Now:**
$$
V(0) = 5000\left(1+0.11\times\frac{4}{12}\right)^{-1} + 7000\left(1+0.11\times\frac{9}{12}\right)^{-1}
$$

**(ii) In 6 months:**
$$
V(6) = 5000\left(1+\frac{(6-4)}{12}\times0.11\right) + 7000\left(1+0.11\times\frac{(9-6)}{12}\right)^{-1}
$$

**(iii) In one year:**
$$
V(\epsilon) = 5000\left(1+\frac{(12-4)}{12}\times0.11\right) + 7000\left(1+\frac{(12-9)}{12}\times0.11\right)
$$

---

## Compound Interest

$$
V(n) = P(1+r)^n, \qquad n \to \text{no. of years}
$$

$$
V(n) = P(1+r)^n > P(1+rn)
$$

Compounded \(m\) times per time \(t\):

$$
V(\epsilon) = P\left(1+\frac{r}{m}\right)^{tm}
$$

> **Source: Page 10 — Continuous Compounding**

$$
V(\epsilon) = P\left(1+\frac{r}{m}\right)^{tm} \qquad \Rightarrow \qquad V(t) = P\left(\left(1+\frac{1}{n}\right)^{tr}\right)
$$

Let \(\dfrac{1}{n} = \dfrac{r}{m} \Rightarrow m = nr\)

Let \(n \to \infty \Rightarrow \boxed{V(\epsilon) = Pe^{r\epsilon}}\)

\(CC > C > S\) (Continuous Compounding > Compound > Simple)

**Lab Assignment:** Apply both C.C. & C. in the previous problems.

### Annuity

> **Source: Page 10, blackboard photo**

> **Figure:** A timeline with periods \(1, 2, 3, 4, 5, \ldots, n\), each receiving a cash flow \(C\).

$$
PV = \frac{C}{1+\gamma} + \frac{C}{(1+\gamma)^2} + \frac{C}{(1+\gamma)^3} + \frac{C}{(1+\gamma)^4} + \frac{C}{(1+\gamma)^5} + \cdots + \frac{C}{(1+\gamma)^n}
$$

$$
C\left(\frac{1}{1+\gamma} + \frac{1}{(1+\gamma)^2} + \cdots + \frac{1}{(1+\gamma)^n}\right) = \frac{C}{1+\gamma}\left(1-\left(\frac{1}{1+\gamma}\right)^n\right)\frac{\gamma+1}{\gamma}
$$

$$
= \frac{C}{\gamma}\left(1-\left(\frac{1}{1+\gamma}\right)^n\right)
$$

> **Source: Page 11 — blackboard photo continued**

$$
V(t) = P\left(1+\frac{\gamma}{m}\right)^{tm}, \qquad V(0) = V(t)\left(1+\frac{\gamma}{m}\right)^{-tm}
$$

$$
V(t) = Pe^{\gamma t} \qquad \Longrightarrow \qquad V(0) = Pe^{-\gamma t}
$$

$$
V(T) = Pe^{\gamma T} \Longleftrightarrow V(0) = Pe^{-\gamma T}
$$

$$
V(t) = V(0)e^{\gamma t} = e^{-\gamma(T-t)}V(T)
$$

$$
\boxed{V(t) = e^{-\gamma(T-t)}V(T)}
$$
____
_____
### Step-by-Step Mathematical Verification

1. **Discrete Compounding Formula**
    $$V(t) = P\left(1+\frac{\gamma}{m}\right)^{tm}$$
    If $P$ is the initial principal at time $t=0$, then $P = V(0)$. Solving for $V(0)$ yields:
    $$V(0) = V(t)\left(1+\frac{\gamma}{m}\right)^{-tm}$$
    _Status: Correct._
2. **Continuous Compounding and Present Value Relationship**
    Taking the limit as compounding frequency $m \to \infty$:
    $$\lim_{m \to \infty} P\left(1+\frac{\gamma}{m}\right)^{tm} = Pe^{\gamma t} = V(0)e^{\gamma t}$$
    Since $P = V(0)$, expressing present value $V(0)$ in terms of future value $V(t)$ gives:
    $$V(0) = V(t)e^{-\gamma t}$$
3. **Value at Time $t$ Relative to Maturity $T$**
    From $V(T) = V(0)e^{\gamma T}$, express $V(0)$ as $V(0) = V(T)e^{-\gamma T}$. Substitute this into $V(t) = V(0)e^{\gamma t}$:
    $$V(t) = \left(V(T)e^{-\gamma T}\right)e^{\gamma t} = V(T)e^{-\gamma T + \gamma t} = V(T)e^{-\gamma(T-t)}$$
**Discrete Compounding:**
$$V(t) = P\left(1+\frac{\gamma}{m}\right)^{tm} \qquad \Longleftrightarrow \qquad V(0) = V(t)\left(1+\frac{\gamma}{m}\right)^{-tm}$$
**Continuous Compounding (Base Form):**
$$V(t) = V(0)e^{\gamma t} \qquad \Longleftrightarrow \qquad V(0) = V(t)e^{-\gamma t}$$
**Terminal Value Relationship at Time $T$:**
$$V(T) = V(0)e^{\gamma T} \qquad \Longleftrightarrow \qquad V(0) = V(T)e^{-\gamma T}$$
**General Time-$t$ Valuation Formula:**
$$V(t) = V(0)e^{\gamma t} = V(T)e^{-\gamma(T-t)}$$
$$\boxed{V(t) = V(T)e^{-\gamma(T-t)}}$$
- **$V(t)$ (Value at time $t$):** The value of the asset, investment, or portfolio at any intermediate time $t$ between initial time $0$ and terminal time $T$.
- **$V(0)$ or $P$ (Present Value / Principal):** The initial value or principal invested at start time $t=0$.
- **$V(T)$ (Terminal Value / Future Value):** The final accumulated value of the investment at maturity time $T$.
- **$\gamma$ (Interest / Growth Rate):** The nominal annual interest rate (or continuous risk-free rate of return).
- **$t$ (Current / Elapsed Time):** Time elapsed from inception, measured in years ($0 \le t \le T$).
- **$T$ (Maturity / Terminal Time):** The total time horizon of the investment, measured in years.
- **$T - t$ (Time to Maturity):** The remaining duration from the current time $t$ until the final time $T$.
_____

### PV of Annuity (restated)

$$
PV = \frac{C}{\gamma}\left[1-\left(\frac{1}{1+r}\right)^n\right]
$$

### Loan Amortization — Balance Recursion

\(B_0 = P\) (what is the balance amount to be paid?)

$$
B_1 = P(1+r) - C
$$

$$
B_2 = B_1(1+r) - C = (P(1+r)-C)(1+r) - C = P(1+r)^2 - C(1+(1+r))
$$

$$
B_n = P(1+r)^n - C\left[1+(1+r)+(1+r)^2+\cdots+(1+r)^{n-1}\right]
$$

$$
\Rightarrow B_n = P(1+r)^n - C\left[\frac{(1+r)^n - 1}{r}\right]
$$

After \(N\) years, \(B_N = 0\).

### Program Assignment

1. Find the loan payment of some amount \((P)\) for \(N\) years with interest rate \(r\%\). For any variable, you should be able to find the other variables.

---

## Money Market

**Long position** (Buy → Sell)
**Short selling** (Sell → Buy)

1. **Treasury Bills** → 1M, 3M, 6M
2. **Treasury Notes** → 1Y to 30Y
3. **Promissory Note** → at a particular date with/without interest
4. **Commercial Papers** → 1 to 270(?) days. (Issued by banks, similar to promissory notes)
5. **Banker's Acceptance** → Post-dated cheque of validity 6M
> [!note] 🏛️ Treasury Bills (T-Bills)
> Short-term government loans (maturing in 1, 3, or 6 months). They are sold at a discount and pay no periodic interest (e.g., pay ₹98 today to get ₹100 at maturity).

> [!note] 🏦 Treasury Notes
> Medium-to-long-term government debt (maturing in 1 to 30 years) that pays regular interest (coupons).

> [!note] 📝 Promissory Notes
> A simple written contract where one party legally promises to pay another a set amount on a specified date.

> [!note] 🏢 Commercial Paper
> Unsecured, short-term debt issued by high-credit corporations or banks (usually up to 270 days) to finance immediate operational costs.

> [!note] 💳 Banker's Acceptance
> A short-term credit instrument backed by a bank (like a guaranteed post-dated check), frequently used to secure international trade transactions.

### Bond

- It is a contract.
- Borrower (Issuer) ⟷ contract ⟷ Lender (Holder).
- They will pay back Principal & Interest on Maturity date.

> **Source: Page 13**

**Bond:** contract between Borrower and Issuer[/Lender]. Borrower promises to pay the principal with interest on maturity date.

1. Face Value / Par Value / Nominal Value
2. Maturity Date (Maturity time)
3. Coupon / coupon rate
4. Redemption value and redemption date

**Example:** ₹100 million in 5 years, 8% coupon paid annually with \(FV = 1000\).

| Year | Cash Flow |
|---|---|
| 1Y | 800 |
| 2Y | 800 |
| 3Y | 800 |
| 4Y | 100 |
| 5Y | 800 + 1000 |

> **Possible error in original:** Year‑4 cash flow is written as **100**; given the pattern (8% of face value 1000 = 800 each year), this may have been intended as 800. Preserved as written.

- If the bond is attractive and could sell it for 1100 per bond, it is said that **"Bond is above par value."**
- If they sell it for 900, we say **"Bond is below par value."**

**Bond price and interest rate are inversely proportional.**

### Types of Bonds

1. Zero Coupon Bonds (ZCB)
2. Coupon Bonds
3. Callable Bonds
4. Serial Bonds
5. Strip Bonds
6. Annuity Bonds

7. **ZCB** — Only interest is paid.

> **Possible error in original:** For a zero-coupon bond, typically no periodic interest/coupon is paid — only the principal is repaid at maturity (the return comes from buying at a discount). The note as written says "only interest is paid," which appears inconsistent with the standard definition of a ZCB; preserved as written.

| **Bond Type 📜**               | **How Cash Flow Works 💸**                                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Zero-Coupon Bond (ZCB)** 🏷️ | Bought at a discount, pays **no periodic interest**, returns full face value at maturity.                  |
| **Coupon Bond** 💳             | Pays regular periodic interest (coupons) + full face value at maturity.                                    |
| **Callable Bond** 📞           | The issuer has the right to pay off the bond **early** before maturity.                                    |
| **Serial Bond** 🗓️            | Matures in staggered batches over multiple years rather than all at once.                                  |
| **Strip Bond** ✂️              | A traditional bond whose coupon payments and principal payout are separated and sold as individual ZCBs.   |
| **Annuity Bond** 🏦            | Pays equal total installments each period combining principal and interest (just like loan amortization!). |

> **Source: Page 14**

Bond is denoted as \(B(t,T)\) where \(T\) is the maturity time.

$$
B(T,T) = 1 \quad \text{even if its FV value is something else.}
$$

$$
\boxed{B(t,T) = e^{-r(T-t)}} \quad \text{for cont. compounding.} \qquad B(t,T) = (1+r)^{-(T-t)}
$$

**2. Coupon bonds:** pays coupon on regular interval of time during the life of the bond.

Let \(C\) be the coupon (\(c\%\)) paid annually. \(N\)-year maturity, \(F\) is Face value. (Assume that it is based on compound interest.) \(r\) is the interest rate.

$$
PV \text{ of the Bond} = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \cdots + \frac{C+F}{(1+r)^N}
$$

$$
PV = \frac{C}{r}\left(1-\left(\frac{1}{1+r}\right)^N\right) + \frac{F}{(1+r)^N}
$$

> **Source: Page 15**

**Callable Bond:**
- Bond can be called back at any time.
- Redemption date/value.

**Serial Bond:**
- Portion of money will be paid at different maturity dates.

**Strip Bond:**
- Stripping of coupon from principal and traded separately.

**Annuity Bond:**
- Principal + interest is given out in intervals (annuity).

\(B(t,T) \to\) Price of bond at \(t\), maturity at \(T\).

### Zero Coupon Bond (ZCB) — Example

\(F = 1000\), \(C = 10\%\), 5Y (compounded annually).

$$
B(0,5) = 1000 \times e^{-0.1\times 5} \qquad \text{(cont. comp.)}
$$

$$
B(0,5) = \frac{1000}{(1+0.1)^5}
$$

**Theoretically:**

$$
B(T,T)=1, \qquad B(0,1) = \frac{F}{1+r}, \qquad B(t,T) = e^{-r(T-t)}, \qquad B(t,T) = \frac{1}{\left(1+\frac{r}{m}\right)^{(T-t)m}}
$$

### Coupon Bond — Example

\(F = 1000\), \(C = 8\%\); suppose market interest rate = 5% = 7%; \(T = 5\)Y.

| \(t\) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Cash flow | | \(C\) | \(C\) | \(C\) | \(C\) | \(C+F\) |
| Amount | | 80 | 80 | 80 | 80 | 80+1000 |
| Label | | \(C_1\) | \(C_2\) | \(C_3\) | \(C_4\) | \(C_5\) |

> **Source: Page 16**

$$
PV = \text{Bond price} = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \cdots + \frac{C+F}{(1+r)^5}
$$

Let \(A(t)\) be the value of the asset (investment) at time \(t\).

$$
A(0) = 1 \text{ lakh}
$$

\(B(0,T) = \) Price of the bond, No. of Bonds = \(\dfrac{A(0)}{B(0,T)}\)

$$
B(t,T) = e^{-r(T-t)} = e^{-rT}\cdot e^{rt} = B(0,T)e^{rt}
$$

$$
\Rightarrow A(t) = \text{No.}\times\text{Price} = \frac{A(0)}{B(0,T)}\times B(0,T)e^{rt}
$$

$$
\Rightarrow \boxed{A(t) = A(0)e^{-rt}}
$$

> **Possible error in original:** The line above the box simplifies to \(A(t) = A(0)e^{rt}\) (the \(B(0,T)\) terms cancel, leaving a positive exponent), but the boxed final result is written with a negative exponent, \(A(0)e^{-rt}\). Preserved exactly as written on the page.

_____
____
## Part 1: Valuation of a 5-Period Coupon Bond (Discrete Compounding)
The present value ($PV$) of a bond paying a periodic coupon $C$ for 5 periods and returning face value $F$ at maturity is given by:
$$PV = \sum_{k=1}^{5} \frac{C}{(1+r)^k} + \frac{F}{(1+r)^5}$$
Expanding the summation yields:
$$PV = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \frac{C}{(1+r)^3} + \frac{C}{(1+r)^4} + \frac{C+F}{(1+r)^5}$$
- Where $r$ is the discrete discount rate per period.
## Part 2: Zero-Coupon Bond Dynamics & Portfolio Growth (Continuous Compounding)
### 1. Initial Setup and Definitions
- Let $A(t)$ denote the value of an investment portfolio at time $t$.
- Initial capital invested: $A(0) = \text{₹}1\text{ lakh}$.
- Let $B(t,T)$ denote the price at time $t$ of a zero-coupon bond maturing at time $T$ ($0 \le t \le T$) with a face value of $1$.
Under continuous compounding at constant risk-free rate $r$:
$$B(t,T) = e^{-r(T-t)}$$
### 2. Time Evolution of the Bond Price
Evaluating the bond price at initiation ($t = 0$):
$$B(0,T) = e^{-r(T-0)} = e^{-rT}$$
Decomposing $B(t,T)$ into initial price and time-growth components:
$$B(t,T) = e^{-r(T-t)} = e^{-rT} \cdot e^{rt}$$
Substituting $B(0,T) = e^{-rT}$ into the equation gives:
$$B(t,T) = B(0,T) e^{rt}$$
### 3. Portfolio Growth Derivation
At $t = 0$, all initial capital $A(0)$ is used to purchase zero-coupon bonds:
$$\text{Number of Bonds Held} = \frac{A(0)}{B(0,T)}$$
At any time $t \in [0, T]$, the total portfolio value $A(t)$ is the quantity of bonds held multiplied by the prevailing market price per bond $B(t,T)$:
$$A(t) = (\text{Number of Bonds Held}) \times B(t,T)$$
$$A(t) = \left(\frac{A(0)}{B(0,T)}\right) \times \left(B(0,T) e^{rt}\right)$$
Canceling the $B(0,T)$ factor yields the final portfolio growth equation:
$$\boxed{A(t) = A(0)e^{rt}}$$
> **Correction Note:** The sign in the exponent is positive ($+rt$) because money grows over time under compound interest. A negative exponent ($-rt$) represents discounting future value back to present value, whereas $A(t)$ measures accumulated future value.
____

### Worked Problem — Coupon Bond Pricing

> **Source: Page 17**

> Suppose a company issues a bond with FV 1 lakh having coupon rate of 7% and if the market rate is 9%, what will be the price of the bond? \(T=5\) years.

$$
F = 100000, \qquad C = 0.07\times 100000 = 7000, \qquad r = 0.09
$$

$$
\frac{C}{r}\left[1-\left(\frac{1}{1+r}\right)^5\right] + \frac{F}{(1+r)^5}
$$

$$
= \frac{7000}{0.09}\left[1-\left(\frac{1}{1+0.09}\right)^5\right] + \frac{100000}{(1+0.09)^5}
$$

$$
= \underline{\underline{92{,}220.6974}}
$$

> Suppose a company issues a bond with FV 1 lakh having coupon rate 8% to be paid semi-annually. If the market rate is 7%, what will be the price of the bond? \(T=5\) years.

$$
F = 100000, \qquad C = \frac{0.08}{2}\times 100000 = 4000, \qquad r = \frac{0.07}{2} = 0.035, \qquad T=5
$$

$$
\frac{4000}{0.035}\left[1-\left(\frac{1}{1+0.035}\right)^{10}\right] + \frac{100000}{(1+0.035)^{10}}
$$

> **Possible error in original:** In the first bracket the denominator inside the parenthesis is written as \((1+0.35)^{10}\); given \(r=0.035\) defined just above, this is likely intended to be \((1+0.035)^{10}\). Preserved as written.

$$
= \underline{\underline{84101.045}}
$$

---

## Bond Yield

> **Source: Page 18**

Return on investing in bond.

$$
\text{Current Yield} = \frac{\text{Coupon}}{\text{Bond Price}}
$$

### Worked Problem

> An investor buys a 6% coupon bond with face value of 1000 at 900.

$$
\text{Current yield} = \frac{60}{900} = 0.066 = 6.6\%
$$

> If it is sold for 1100, then current yield: \(\dfrac{60}{1100} = 5.4\%\)

- Bond value is the value of \(r\) solving the equation

$$
PV\ \text{of the Bond} = \text{Market Price of the Bond}
$$

$$
\frac{C}{1+r} + \frac{C}{(1+r)^2} + \cdots + \frac{C+F}{(1+r)^n} = \text{current price} \qquad (\text{solve for } r)
$$

### Yield to Maturity (YTM)

*Note (in a different colour ink on the page): "To find exact value we have to solve differential equations."*

$$
YTM = \frac{C + \dfrac{F-P}{T}}{\dfrac{F+P}{2}} \qquad \longrightarrow \text{approximate value.}
$$

*Note: "Bond yield strictly until maturity date."*

### Worked Problem

> Suppose the face value of a bond is 10000, having annual coupon rate 6% that gives an interest payout of Rs 60, 10-year maturity. If current price is 900, what is YTM?

$$
YTM = \frac{60 + \dfrac{1000-900}{10}}{\dfrac{1000+900}{2}} = \frac{60+10}{950} \approx \underline{\underline{7.36\%}}
$$

> **Possible error in original:** The problem statement gives face value as 10000 and coupon rate 6% (which would imply a coupon of 600, not 60), but the worked calculation uses \(F=1000\) and \(C=60\) throughout. Also, "10 year maturity" appears in the original in a compressed handwritten form. Preserved as written/calculated.

---

## Theorem: Bond Price = Face Value

> **Source: Page 19**

**Theorem:** When the coupons are paid annually and the coupon rate is [equal to the] interest rate for annual compounding, then the price of the bond is equal to its face value.

**Proof:** Consider a Bond with face value \(F\), with coupon rate \(= r\%\), maturing in \(n\) years.

$$
\text{Bond price} = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \cdots + \frac{C+F}{(1+r)^n}
$$

Let's take \(n=3\). Then

$$
\text{Bond price} = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \frac{C}{(1+r)^3} + \frac{F}{(1+r)^3}
$$

$$
= \frac{rF}{1+r} + \frac{rF}{(1+r)^2} + \frac{rF+F}{(1+r)^3}
$$

$$
= \frac{rF}{1+r} + \frac{rF}{(1+r)^2} + \frac{F}{(1+r)^2}
$$

$$
= \frac{rF}{1+r} + \frac{F(1+r)}{(1+r)^2}
$$

$$
= \frac{rF}{1+r} + \frac{F}{1+r} = \frac{(r+1)F}{1+r} = \underline{\underline{F}}
$$

### Duration of Bond

- How long, on an **Average**, you have to wait till you receive the cash flow.
- For zero coupon it is \(n\) years.
- Bond price \(= e^{-r(t-T)}\)

$$
\text{Duration} = \frac{\sum t_i\, C_i\, e^{-r t_i}}{\text{Bond price}}
$$

### Worked Problem

> **Source: Page 20**

> Suppose ICICI bank issues a bond having FV 10000, having annual coupon rate of 7%. Maturity in 5 years. Current market rate is 10%. What is the duration?

For compounding:

$$
\frac{\dfrac{1\times 700}{1+0.1} + \dfrac{2\times 700}{(1+0.1)^2} + \cdots}{10000}
$$

---

## Term Structure of Interest Rate (Yield Curve)

> **Source: Page 21**

- Relation between interest rate of similar bonds but with different maturity rates.

> **Figure:** Four hand-drawn yield-curve sketches:
> 1. An increasing, concave curve of Yield vs. Time to maturity (with markings at 5, 10, 30 years) labelled "economy is doing well, general trend."
> 2. A relatively flat, wavy curve labelled "stagnant economy, like Japan."
> 3. A decreasing (downward-sloping) curve labelled "economy not doing well, might be in recession."
> 4. (a fourth unlabeled axis pairing, likely illustrating another shape variant)

### DCF (Discounted Cash Flow) Analysis

> **Figure:** Three inputs feeding into DCF: **Cash flow** (\(F_i\)), **Discount rate** (\(r\)), **No. of periods** (\(n\)).

Let \(F_i,\ i=1,2,\ldots,n\) be the cash flows.

$$
DCF = \frac{F_1}{1+r} + \frac{F_2}{(1+r)^2} + \cdots + \frac{F_n}{(1+r)^n}
$$

**Discount rate = Cost of Capital = WACC** (Weighted Average Cost of Capital) [= cost of operation.]

---

## WACC

> **Source: Page 22**

$$
\boxed{WACC = w_e \times k_e + w_d \times k_d(1-T)}
$$

- \(w_e \to\) proportion of equity in total capital (weight of equity)
- \(k_e \to\) cost of equity
- \(w_d \to\) proportion of debt in total capital (weight of debt)
- \(k_d \to\) cost of debt
- \(T \to\) capital(?) tax [corporate tax]

### Worked Example

> Suppose a company has 60 lakh in equity; 40 lakh in debt; cost of equity is 12%, cost of debt is 8%; corporate tax is 25%.

$$
w_e = \frac{60}{100}, \quad k_e = 12\%, \quad w_d = \frac{40}{100}, \quad k_d = 8\%, \quad T = 25\%
$$

$$
WACC = 60\%\times 12\% + 40\%\times 8\%\,(1-25\%)
$$

## NPV (Net Present Value)

- Net of PV of cash inflows and cash outflows.
- PV of cash inflows − PV of cash outflows.

$$
NPV = \frac{F_1}{1+r} + \frac{F_2}{(1+r)^2} + \cdots + \frac{F_n}{(1+r)^n} - F_0
$$

\((F_0 = \) initial investment\()\)

### Interpretation of NPV

- \(NPV > 0 \to\) profitable
- \(NPV < 0 \to\) non-profitable
- \(NPV = 0 \to\) neither profitable nor non-profitable

---

## NPV — Practical Notes and Worked Comparison

> **Source: Page 23**

1. It should be rounded near to 100 or 1000.
2. More than one cash flow should be taken.
3. Take into account 3 scenarios: (i) optimistic (ii) pessimistic (iii) good guess.

\(WACC = 7\%\)

| Project A                   | Project B                   |
| --------------------------- | --------------------------- |
| Initial investment: 15 lakh | Initial investment: 20 lakh |
| 1st year: 3 lakhs           | 1st year: 2 lakhs           |
| 2nd year: 3 lakhs           | 2nd year: 4 lakhs           |
| 3rd year: 5 lakhs           | 3rd year: 6 lakhs           |
| 4th year: 5 lakhs           | 4th year: 8 lakhs           |
| 5th year: 5 lakhs           | 5th year: 10 lakhs          |

$$
NPV_A = \frac{3}{1+0.07} + \frac{3}{(1+0.07)^2} + \cdots + \frac{5}{(1+0.07)^5} - 15 \approx \underline{\underline{1.8\ L}}
$$

$$
NPV_B = \frac{2}{1+0.07} + \frac{4}{(1+0.07)^2} + \cdots + \frac{10}{(1+0.07)^5} - 20 \approx \underline{\underline{3.5\ L}}
$$

(\(L\) = lakh)

---

## Internal Rate of Return (IRR)

> **Source: Page 24**

- Rate of return which makes NPV equal to zero.

$$
NPV = 0 \Rightarrow \frac{F_1}{1+r} + \frac{F_2}{(1+r)^2} + \cdots + \frac{F_n}{(1+r)^n} - F_0 = 0
$$

(The \(r\) is unknown and non-linear.)

If the calculated rate is greater than market [rate], it is profitable.

### Worked Example

1 lakh; 1st year: 50k, 2nd year: 130k, 3rd year: 50k:

$$
\frac{50000}{1+r} + \frac{130000}{(1+r)^2} + \frac{50000}{(1+r)^3} = 100000, \qquad r = ?
$$

We can approximate

$$
F_1(1+r)^{-1} + F_2(1+r)^{-2} + \cdots + F_n(1+r)^{-n} = F_0
$$

as

$$
F_1(1-r) + F_2(1-2r) + \cdots + F_n(1-nr) = F_0
$$

### NFV (Net Future Value)

- \(-100000\)
- 1st year: \(+40000\)
- 2nd year: \(+80000\)
- 3rd year: \(+60000\)

$$
NFV = -100000\times 1.1^3 + 40000\times 1.1^2 + 50000\times 1.1 + 60000
$$

> **Possible error in original:** The cash flows listed above (40000, 80000, 60000) don't exactly match the values substituted into the formula (40000, 50000, 60000); preserved exactly as written.

---

## Depreciation

> **Source: Page 25**

- Reduction of value of asset price over a period of time.
- Cost of asset (\(C\)), Life span (\(n\) year), scrap value or salvage value (\(S\)).

### Book Value

Difference between the cost value and the accumulated depreciation.

- \(B_k \to\) Book value at \(k^{\text{th}}\) year
- \(D_k \to\) accumulated depreciation till \(k^{\text{th}}\) year

$$
\boxed{B_k + D_k = C}
$$

- Initially, Book value = \(C\)
- After \(n\) years, Book value = \(S\)

**Methods to calculate depreciation:**
1. Straight Line Method
2. Constant Percentage Method

### Straight Line Method

$$
R_k = R = \frac{C-S}{n}, \qquad C-S := \text{Depreciation Base.}
$$

$$
D_k = k\times R \qquad \Rightarrow \qquad \underline{B_k = C - k\left(\frac{C-S}{n}\right)}
$$

### Worked Example

> **Source: Page 26**

Suppose \(C = 10000\), \(n=5\) years, \(S=2000\).

$$
R = \frac{C-S}{n} = \frac{10000-2000}{5} = \frac{8000}{5} = 1600
$$

| Year | Book Value |
|---|---|
| 0 | 10000 |
| 1 | \(10000 - 1600\times 1 = 8400\) |
| 2 | \(10000 - 3200 = 6800\) |
| 3 | \(10000 - 4800 = 5200\) |
| 4 | \(10000 - 6400 = 3600\) |
| 5 | \(10000 - 8000 = 2000\) |

### Constant Percentage Method

- Assume that depreciation is a constant rate of the book value of the asset.
- \(d\) as percentage.

Let \(C = 10000\), \(d = 10\%\).

| Year | Opening Book Value | Depreciation | Closing Book Value |
|---|---|---|---|
| 0 | 10000 | 1000 | 9000 |
| 1 | 9000 | 900 | 8100 |
| 2 | 8100 | 810 | 7290 |
| 3 | 7290 | 729 | 6561 |
| ⋮ | | | |

$$
\boxed{B_k = C(1-d)^k}
$$

---

## Assignment 4

> **Source: Page 27**

(i) Change the fixed rate to floating rate in loan payment.
(ii) Compute NPV
(iii) Compute IRR
(iv) Compute NFV
(v) Compute depreciation by straight line method and constant percentage method, and display the book value.

---

# Class 11 — Risky Assets and Derivatives

> **Source: Page 28** — dated 2/9/26

## Risky Asset

1. Past information reflected in the present.
2. Market responds quickly to new information.

**Uncertainty** — \(S(t)\) is the price of asset at time \(t\).
\(S(0)\) — today's price.

\(S\) is an \(\mathbb{R}\)-valued function defined on a probability space \(\Omega\):

$$
S : \Omega \to \mathbb{R}^{+}, \qquad S(t) > 0
$$

### Example — Two States

Let \(\omega_1 \to\) boom, \(\omega_2 \to\) recession.

\(\Omega = \{\omega_1, \omega_2\}\)

| \(\Omega\) | \(S(0)\) | \(S(1)\) |
|---|---|---|
| \(\omega_1\) | 10 | 12 |
| \(\omega_2\) | 10 | 8 |

### Example — Three States

\(\Omega = \{\omega_1, \omega_2, \omega_3\}\), \(\omega_j \to\) [unclear: "stg."/state]

| \(\Omega\) | \(S(0)\) | \(S(1)\) | \(S(2)\) |
|---|---|---|---|
| \(\omega_1\) | 10 | 12 | 14 |
| \(\omega_2\) | 10 | 8 | 6 |
| \(\omega_3\) | 10 | 10 | 10 |

*(Note in original: "\(\omega_3\)... may be a slight movement in price.")*

### Return

$$
R(n) = \frac{S(n)-S(n-1)}{S(n-1)}
$$

If stock gives dividend \(d_n\) at time \(n\):

$$
R(n) = \frac{S(n)-S(n-1)+d_n}{S(n-1)}
$$

> **Source: Page 29**

### Log Return

$$
\text{Log Return} = \log\left(\frac{S(n)}{S(n-1)}\right)
$$

If \(d(n)\), then:

$$
= \log\left(\frac{S(n)+d(n)}{S(n-1)}\right)
$$

### Expected Return

$$
\text{Expected Return} = \mathbb{E}\left(\sum p_i S_i\right)
$$

> \([unclear\): the exact subscript/quantity summed (possibly return \(R_i\) rather than \(S_i\)); preserved as written from the page, where \(p_i\) denotes the probability of state \(i\).]

---

## Derivatives

Financial instrument whose price depends on a basic underlying asset.

### 1. Forward Contract

Agreement between 2 parties to buy/sell an asset at a certain time at a certain price.

— OTC (over the counter).

**Example:**

- Obligation: Jan 1, 2026
- **Long = Buyer ← SBI**, [an agreement to receive/pay] 1 million $, 6 months later
- **Short = Seller ← CITI**, July 1, 2026

> July 1, 2026: Market spot price is 92/$.
> Profit (Long, SBI): \((92-90)\times 1\text{ million \$}\)

> If spot price is 89/$: \((90-89)\times 1\text{ million}\) [loss to the long position / gain to the short]

### Hedging

**Hedging instrument** — Risk management [process].

### Payoff of a Forward Contract

If \(S_T\) is the spot price at time \(T\), and \(K\) is the agreed price:

- **Long position (e.g., SBI):** payoff \(= S_T - K\)
- **Short position (e.g., CITI):** payoff \(= K - S_T\)

> **Figure:** Payoff diagram for a **long position** — a straight line with positive slope crossing the stock-price axis at \(K\); payoff is negative for stock price below \(K\) and positive above \(K\).

> **Figure:** Payoff diagram for a **short position** — a straight line with negative slope crossing the stock-price axis at \(K\); payoff is positive for stock price below \(K\) and negative above \(K\).

### Forward Price

> **Source: Page 30–31**

$$
F_0 = S_0\,e^{rt}
$$

Can \(F_0 > S_0 e^{rt}\) or \(F_0 < S_0 e^{rt}\)?

**Example:** Suppose that stock price today is 60. \(F_0 = 67\) in 1 year.

$$
F_0 = S_0\,e^{rT} \qquad (\text{in order to avoid arbitrage})
$$

### Forward Price — Worked Example

Topics recap: 1. Risky asset 2. Return 3. Derivative 4. Hedge 5. Forward contract.

$$
F_0 = S_0\,e^{rT}, \qquad S_0=100,\ r=10\%,\ T=6\text{ months}
$$

$$
F_0 = 100\times e^{0.1\times 0.5}
$$

### Forward Rate

Interest rate applicable to a forward transaction, which takes place in future time.

---

## Zero Rates and Forward Rate

> **Source: Page 32**

**Example:**

> **Figure:** Two timelines both starting and ending at 100:
> - **Option 1:** 0 → 1 at rate 3%, then 1 → 2 at rate 5%.
> - **Option 2:** 0 → 2 at a flat rate 4%.

$$
\text{Opt 1: } 100\times e^{0.03\times 1} + 100\times e^{0.05\times 1}
$$

$$
\text{Opt 2: } 100\times e^{0.04\times 2}
$$

*(Both are noted in the original as being the same.)*

> **Possible error in original:** As written with a "+", these two expressions are not numerically equal. For the stated equivalence to hold (both equal \(100\,e^{0.08}\)), Option 1 would need to combine the two sub-period growth factors multiplicatively, i.e. \(100\times e^{0.03\times1}\times e^{0.05\times1}\), rather than by addition. Preserved exactly as written.

⟹ In continuous compounding the rate averages out.

### Zero Rates (Zero Curve, Spot Curve)

In Opt 1, the rate from 0 to 1 year is the **zero rate**, and the rate from 1 to 2 years is the **forward rate**, since it is the rate applicable in a future date.

In Opt 2, the rate from 0 to 2 is the zero rate.

Let \(R_1\) be the rate applicable for time \(T_1\), and \(R_2\) be the rate applicable for time \(T_2\).

Then the forward rate:

$$
R_F = \frac{R_2 T_2 - R_1 T_1}{T_2 - T_1} = R_1 + \frac{(R_2-R_1)T_1}{T_2-T_1}
$$

**Example:** \(R_2 = 4\%,\ T_2=2\); \(R_1 = 3\%,\ T_1=1\)

$$
R_F = \frac{4\times 2 - 3\times 1}{2-1} = \underline{\underline{5\%}}
$$

---

## Forward Rate Agreement (FRA)

> **Source: Page 33**

Agreement between 2 parties to fix the interest rate on a certain notional principal to borrow or invest money.

> **Figure:** Diagram: company \(X \xrightarrow[R_K]{L} Y\), over the period \(T_1 \to T_2\).
> - \(L\) — notional principal
> - \(R_K\) — [fixed] rate
> - \(X, Y\) — companies

**LIBOR** — London Interbank Offer Rate. *(used as \(R_M\))*

Let \(R_M\) be the forward rate applicable at time \(T_1\) to \(T_2\).

$$
\text{Cash flow to } X = L\times(R_K - R_M)\times(T_2-T_1)
$$

$$
\text{Cash flow to } Y = L\times(R_M - R_K)\times(T_2-T_1)
$$

- PV of these will be exchanged at \(T_1\) (when starting, not \(T_2\)).
- PV is the cash flow at \(T_1\).

PV of cash flow to \(X\) at time \(T_1\) *(discounted using compounding)*:

$$
= \frac{L\times(R_K-R_M)\times(T_2-T_1)}{1+R_M(T_2-T_1)}
$$

PV of cash flow to \(Y\) at time \(T_1\):

$$
= \frac{L\times(R_M-R_K)\times(T_2-T_1)}{1+R_M(T_2-T_1)}
$$

> **Source: Page 34**

### Worked Example

Let \(X = \text{ICICI}\), \(Y = \text{HDFC}\)

$$
R_K = 8\%, \qquad R_M = 8.5\%
$$

$$
L = 1000000, \qquad T_1 = 1,\ T_2 = 2
$$

*(Calculate.)*

---

## Future Contract

- Traded in exchange (unlike forward contract, which is OTC).
- Underlying asset can be:
	(i) FX
	(ii) Commodity (oil, gold, wheat, copper, etc.)
- It is a hedging and speculative instrument.

$$
\text{Payoff} \Rightarrow S_T - K
$$

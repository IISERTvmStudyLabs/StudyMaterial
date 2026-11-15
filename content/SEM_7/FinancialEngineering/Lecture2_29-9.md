---
course: Financial Engineering
Lecture: 2
date: 29 September 2026
aliases:
  - Hedging
tags:
  - financial-engineering
  - options
  - derivatives
---
# Financial Portfolio Theory & Risk-Return Analysis

## 1. Risk and Return (Single & Two Security Fundamentals)

### Key Concepts
1. **Expected Return:** The weighted average of all possible returns across different scenarios.
2. **Scenario Probabilities:** Distribution of likelihood across market conditions.
3. **Risk Metrics:** Unique risk quantified by volatility or standard deviation ($\sigma$) and variance ($V$).

---

### Scenario Analysis Example

| Scenario | Probability | Security 1 ($P_1$) | Security 2 ($P_2$) | Security 3 ($P_3$) |
| :--- | :---: | :---: | :---: | :---: |
| $\omega_1$ | $75\%$ ($0.75$) | $10\%$ | $22\%$ | $10\%$ |
| $\omega_2$ | $25\%$ ($0.25$) | $12\%$ | $2\%$ | $15\%$ |

#### Calculations for Security 1 ($P_1$)

* **Expected Return:**
  $$E(R_1) = 0.75 \times 0.10 + 0.25 \times 0.12 = 0.075 + 0.030 = 0.105 \quad (10.5\%)$$

* **Variance:**
  $$V(R_1) = E(R_1^2) - [E(R_1)]^2 = \left[0.75 \times (0.10)^2 + 0.25 \times (0.12)^2\right] - (0.105)^2$$

#### Calculations for Security 2 ($P_2$)

* **Expected Return:**
  $$E(R_2) = 0.75 \times 0.22 + 0.25 \times 0.02 = 0.165 + 0.005 = 0.170 \quad (17.0\%)$$

---

## 2. Portfolio Construction with Two Securities

### Example Setup
Suppose an investor has **Rs. 10,000** to invest in two stocks:
* **TCS ($S_2$):** $\text{Price } S_2(0) = \text{Rs. } 400$ per share
* **Infosys ($S_1$):** $\text{Price } S_1(0) = \text{Rs. } 300$ per share

### Portfolio Weights at Time $t = 0$
The portfolio consists of $x_1 = 20$ shares of Infosys and $x_2 = 10$ shares of TCS:
$$V(0) = x_1 S_1(0) + x_2 S_2(0) = 20(300) + 10(400) = 6000 + 4000 = \text{Rs. } 10,000$$

* **Infosys Weight ($w_1$):** 
  $$w_1 = \frac{x_1 S_1(0)}{V(0)} = \frac{20 \times 300}{10000} = 0.60 \quad (60\%)$$

* **TCS Weight ($w_2$):** 
  $$w_2 = \frac{x_2 S_2(0)}{V(0)} = \frac{10 \times 400}{10000} = 0.40 \quad (40\%)$$

---

### Portfolio Value at Time $t = 1$
Assume prices change at $t = 1$ to:
* $\text{Infosys } S_1(1) = \text{Rs. } 350$
* $\text{TCS } S_2(1) = \text{Rs. } 370$

$$V(1) = x_1 S_1(1) + x_2 S_2(1) = 20(350) + 10(370) = 7000 + 3700 = \text{Rs. } 10,700$$

Updated weights at $t = 1$:
$$w_1 = \frac{20 \times 350}{10700} \approx 65.42\%$$
$$w_2 = \frac{10 \times 370}{10700} \approx 34.58\%$$

---

### General Relations
At any time $t$:
$$w_1 = \frac{x_1 S_1}{V} \implies x_1 = \frac{w_1 V}{S_1}$$
$$w_2 = \frac{x_2 S_2}{V} \implies x_2 = \frac{w_2 V}{S_2}$$

---

## 3. Portfolio Return & Variance Theorems

### Theorem 1: Portfolio Return
> **Theorem:** The return $R_V$ on a portfolio consisting of two securities is the weighted average of individual returns:
> $$R_V = w_1 r_1 + w_2 r_2$$
> where $w_1, w_2$ are weights ($w_1 + w_2 = 1$) and $r_1, r_2$ are the returns of the individual securities.

#### Proof:
Consider portfolio values $V(0)$ and $V(1)$:
$$V(1) = x_1 S_1(1) + x_2 S_2(1)$$

Substitute $x_1 = \frac{w_1 V(0)}{S_1(0)}$ and $x_2 = \frac{w_2 V(0)}{S_2(0)}$:
$$V(1) = \left[ \frac{w_1 V(0)}{S_1(0)} \right] S_1(1) + \left[ \frac{w_2 V(0)}{S_2(0)} \right] S_2(1)$$
$$V(1) = V(0) \left[ w_1 \frac{S_1(1)}{S_1(0)} + w_2 \frac{S_2(1)}{S_2(0)} \right]$$

Using $S_i(1) = S_i(0)(1 + r_i)$:
$$V(1) = V(0) \left[ w_1(1 + r_1) + w_2(1 + r_2) \right]$$
$$V(1) = V(0) (w_1 + w_2) + V(0) (w_1 r_1 + w_2 r_2)$$

Since $w_1 + w_2 = 1$:
$$V(1) = V(0) + V(0) (w_1 r_1 + w_2 r_2)$$
$$\frac{V(1) - V(0)}{V(0)} = w_1 r_1 + w_2 r_2$$
$$\implies R_V = w_1 r_1 + w_2 r_2 \quad \blacksquare$$

---
course: Financial Engineering
Lecture: 9
aliases:
  - Second Fundamental Theorem of Asset Pricing
  - Call Option Replication Setup
tags:
  - financial-engineering
  - asset-pricing
  - martingale
  - options
topics:
  - Second Fundamental Theorem of Asset Pricing
  - Complete Markets
date: 2026-11-04
---
### Theorem
The market is arbitrage free $\iff$ There exists non-negative numbers $z_1, \dots, z_m$ such that 
$$
S_0 = \sum_{j=1}^{M} z_j S_1(\omega_j)
$$

**Proof** 
Let $d_0 = S_0$ & $D = [d_1, d_2, \dots, d_m]^T$
We know that market is arbitrage free. The following system of inequality,
$$
hD \ge 0
$$
By Farkas' lemma, $z_j \ge 0$ does not possess any solution.
$$
d_0 = S_0 = \sum z_j d_j = \sum_{j=1}^{m} z_j S_1(\omega_j)
$$

### Theorem:
The market is arbitrage free $\iff \exists$ a probability measure $Q$ and a constant $\beta$ such that
$$
S_0 = \beta E^Q[S_1]
$$

**Proof:** 
By previous theorem, 
$$
S_0 = \sum z_j S_1(\omega_j) = \sum z_j d_j
$$
Let $\beta = \sum z_j$ and $q_j = \frac{z_j}{\beta}$, and $q_j$ can be treated as a probability measure such that,
$$
Q[\omega_j] = q_j
$$
$$
S_0 = \sum z_j S_1(\omega_j) \implies \frac{S_0}{\beta} = \frac{\sum z_j S_1(\omega_j)}{\beta}
$$
$$
= \sum \frac{z_j}{\beta} S_1(\omega_j) = \sum q_j S_1(\omega_j)
$$
$$
= E^Q[S_1]
$$
$$
\implies S_0 = \beta E^Q[S_1] \text{ and } \beta = \sum z_j
$$

## First Fundamental Theorem of Asset Pricing

### Theorem 
Let there be risk free asset & let $R$ be the risk free rate. Then the market is arbitrage free $\iff \exists$ a probability measure $Q$ such that 
$$
S_0 = \frac{1}{1+R} E^Q[S_1]
$$

**Proof:**
Following from previous theorem by taking $S_0^0 = 1$ asset as risk free asset say $B$ with risk free rate of return $R$ taking $\beta = \frac{1}{1+R}$

## Characteristic of Complete Market

### Theorem:
The market is Complete $\iff$ the rows of the matrix $D$ span $\mathbb{R}^M$ i.e. $rank(D) = M$

**Proof:**
We know that market is complete $\iff$ Any contingent claim can be reached / replicated.
Any contingent claim $X$ can be replicated by a portfolio $h$.
such that $V_1^h = X$
$$
\implies hD = X
$$
This means that $hD=X$ has a solution $h$
$$
\iff rank(D) = M
$$

## Second Fundamental Theorem of Asset Pricing

Let the market model be arbitrage free then the market is complete $\iff$ The martingale measure is unique.

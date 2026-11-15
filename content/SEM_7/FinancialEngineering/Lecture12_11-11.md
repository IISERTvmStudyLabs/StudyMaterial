# Modelling Stock Price

Let $S$ be the price of stock at time '$t$'.

If $S$ is a stock price and increased by $\Delta S$, then the return of the stock is $\frac{\Delta S}{S}$.

$$
\frac{\Delta S}{S} = \mu \Delta t \rightarrow \frac{dS}{dt} = \mu S
$$
After integrating,
$$
S(t) = S_{0} e^{\mu t}
$$

By adding randomness to this model:

$$
dS = \mu S dt + \sigma S dW
$$
Applying [[Lecture11_10-11#Theorem Ito-Doeblin Formula for Brownian Motion|Itôs Lemma]],
Let $f(t, x) = \log x \implies f_t = 0, f_x = \frac{1}{x}, f_{xx} = -\frac{1}{x^2}$.
$$
(dS)^2 = (\mu S dt + \sigma S dW)^2 = \sigma^2 S^2 dt \tag{1}
$$
$$
df = f_x dx + \frac{1}{2} f_{xx} (dx)^2 + f_t dt
$$
$$
= \frac{1}{x} dx + \frac{1}{2} \left(-\frac{1}{x^2}\right) dx \, dx + 0
$$
$$
d(\log x) = \frac{dx}{x} - \frac{1}{2x^2} dx \, dx
$$
$$
df(\log S) = \frac{1}{S} (\mu S dt + \sigma S dW) - \frac{1}{2S^2} dS \, dS 
$$
Substituting $(1)$,

$$
d(\log S) = \left(\mu - \frac{\sigma^2}{2}\right) dt + \sigma dW
$$
Integrate both sides from $0$ to $t$:
$$
\int_0^t d(\log S(\tau)) = \int_0^t \left(\mu - \frac{\sigma^2}{2}\right) d\tau + \int_0^t \sigma dW(\tau)
$$
$$
S(t) = S(0) \exp\left(\left(\mu - \frac{\sigma^2}{2}\right) t + \sigma W(t)\right)
$$
> [!note] Expected Value of Geometric Brownian Motion
> 
> Since $W(t) \sim \mathcal{N}(0, t)$, we evaluate $E[S(t)]$ using the moment-generating function $E[e^X] = e^{\frac{1}{2} \text{Var}(X)}$ for $X \sim \mathcal{N}(0, \text{Var}(X))$:
> 
>   
> 
> $$E[S(t)] = E\left[ S(0) \exp\left( \left(\mu - \frac{\sigma^2}{2}\right) t + \sigma W(t) \right) \right]$$
> 
> $$E[S(t)] = S(0) e^{\left(\mu - \frac{\sigma^2}{2}\right) t} \cdot E\left[ e^{\sigma W(t)} \right]$$
> 
> With $\text{Var}(\sigma W(t)) = \sigma^2 t$, it follows that $E\left[ e^{\sigma W(t)} \right] = e^{\frac{1}{2} \sigma^2 t}$:
> 
> $$E[S(t)] = S(0) e^{\left(\mu - \frac{\sigma^2}{2}\right) t} \cdot e^{\frac{\sigma^2}{2} t}$$
> 
> $$E[S(t)] = S(0) e^{\mu t}$$


___
# Black-Scholes PDE

We assume that stock price is modelled by:

$$
dS = \mu S dt + \sigma S dW
$$

Let $V(S, t)$ denote the value of the derivative with underlying asset $S(t)$.

We construct a portfolio $\Pi$ consisting of the derivative and $\Delta$ number of shares such that:

1. The portfolio is riskless.
   
2. It gives the risk-free rate of return.
   

Then:

$$
d\Pi = dV + \Delta dS
$$
$$
= \left(V_t dt + V_s dS + \frac{1}{2} V_{ss} dS \, dS\right) + \Delta (\mu S dt + \sigma S dW)
$$
$$
= V_t dt + V_s (\mu S dt + \sigma S dW) + \frac{1}{2} V_{ss} \sigma^2 S^2 dt + \Delta (\mu S dt + \sigma S dW)
$$
$$
d\Pi = \left( V_t + \mu S V_s + \frac{1}{2} \sigma^2 S^2 V_{ss} + \Delta \mu S \right) dt + (V_s + \Delta) \sigma S dW \tag{1}
$$

To have a riskless portfolio, there should not be any randomness diffusion term $= 0$:

$$
\text{riskless} \implies \Delta \sigma S + \sigma S V_s = 0
$$
$$
\Delta = -V_s
$$
$$
(1) \implies d\Pi = \left(V_t + \frac{1}{2} \sigma^2 S^2 V_{ss}\right) dt \tag{2}
$$

Risk-free rate of return implies that:

$$
d\Pi = r \Pi dt
$$
$$
(2) \implies r \Pi dt = \left(V_t + \frac{1}{2} \sigma^2 S^2 V_{ss}\right) dt
$$
$$
V_t + \frac{1}{2} \sigma^2 S^2 V_{ss} - r \Pi = 0
$$
$$
V_t + \frac{1}{2} \sigma^2 S^2 V_{ss} - r (V - V_s S) = 0
$$
$$
V_t + r V_s S + \frac{1}{2} \sigma^2 S^2 V_{ss} - r V = 0
$$

This is the **Black-Scholes PDE**.
> [!important] The Black-Scholes Equation
> $$\frac{\partial V}{\partial t} + r S \frac{\partial V}{\partial S} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} - r V = 0$$
> 
> - **$V(S, t)$**: Option price as a function of spot price $S$ and time $t$
> - **$r$**: Risk-free interest rate
> - **$\sigma$**: Volatility of the underlying asset

___
# Black-Scholes-Merton Formula for European Call

- $C(S, t)$ — Call price
   
- $(S_T - K)^+ = \max\{S_T - K, 0\}$  
   
- $C(S_0, t) = e^{-r(T-t)} E[(S_T - K)^+ \mid \mathcal{F}_t]$  
   

Where $\mathcal{F}_t$ is the filtration.

$$
dS_t = \mu S_t dt + \sigma S_t dW_t
$$
$$
S(t) = S_0 e^{\left(\mu - \frac{\sigma^2}{2}\right)t + \sigma W(t)}
$$
$$
S(T) = S(0) e^{\left(\mu - \frac{\sigma^2}{2}\right)T + \sigma W(T)} = S(t) e^{\left(\mu - \frac{\sigma^2}{2}\right)(T-t) + \sigma (W(T) - W(t))}
$$

If we take:

$$
\tau = T - t \quad \text{and} \quad Y = \frac{W(T) - W(t)}{\sqrt{\tau}}
$$
$$
Y \sim N(0, 1)
$$

Then:

$$
S(T) = S(t) e^{\left(\mu - \frac{\sigma^2}{2}\right)\tau + \sigma \sqrt{\tau} Y}
$$
$$
C(S, t) = e^{-r\tau} E[(S_T - K)^+]
$$

where

$$
(S_T - K)^+ = \left(S(t) e^{\left(r - \frac{\sigma^2}{2}\right)\tau + \sigma \sqrt{\tau} Y} - K\right)^+
$$

Simplifying expectation using integral:

$$
C(S, t) = S N(d_1) - K e^{-r\tau} N(d_2)
$$

where

$$
d_1 = \frac{\ln(S/K) + \left(r + \frac{\sigma^2}{2}\right)\tau}{\sigma \sqrt{\tau}}
$$
$$
d_2 = d_1 - \sigma \sqrt{\tau}
$$

This is the **Black-Scholes-Merton formula** for European call price.
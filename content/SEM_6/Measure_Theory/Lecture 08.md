$F : \mathbb{R}\to \mathbb{R}$ increasing right continuous. Then we define 
$$
\lambda_{F} : \mathcal{S}\to [0,\infty]
$$
$$
\text{by } \lambda_{F}\left((a,b]\right) = F(b) - F(a)
$$
___
## Lemma 1
Let $$\{(a_{i},b_{i}]:1\leq i\leq k\} \subseteq(a,b]$$
disjoint. Then,
$$
\sum_{i=1}^k \lambda_{F} ((a_{i},b_{i}]) \leq \lambda_{F}((a,b])
$$
___
## Lemma 2
Suppose 
$$
(a,b] \subseteq \bigcup_{i=1}^{k} (a_{i},b_{i}];a_{i}<b_{i},\forall i,a<b
$$
Then,
$$
\sum_{i=1}^{k} \left( F(b_{i}) - F(a_{i}) \right) \geq F(b) -F(a) 
$$
### Proof
For $k=1,$
$$
\left[ a,b \right] \subseteq \left( a_{i},b_{i} \right) 
$$
Then,
$$
a_{1}<a\; \& \;b_{1}<b\implies F(a_{1})<F(a)\;,\;F(b_{1})<F(b)
$$
$$
\implies F(b_{1})-F(a_{1})>F(b)-F(a)
$$
Assume **Lemma 1** holds for $k=n$. Suppose $$\left[ a,b \right]\subseteq \bigcup_{i=1}^{n+1}\left( a_{i},b_{i} \right) $$
we rename the interval such that, $b \in \left( a_{n+1} ,b_{n+1}\right)$
$$
\text{If } a_{n+1} \leq a \;,\text{then }-F(a_{n+1}) >- F(a)
$$
Hence,
$$
\sum_{i=1} ^{n+1} \left( F(b_{i})-F(a_{i}) \right) \geq F(b_{n+1})-F(a_{n+1})\geq F(b)-F(a) 
$$
So we assume $a<a_{n+1}$. It follows that 
$$[a,a_{n+1}] \subseteq \bigcup_{i=1}^{n} \left( a_{i},b_{i} \right)$$

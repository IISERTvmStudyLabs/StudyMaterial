---
course: Functional Analysis
Lecture: "17"
date: 7 September
---
→ The "Three Great theorems" of FA

Topology ← armeta → Linear Algebra

 $X$  - finite dimensional,  $B = \{e_1, \dots, e_N\}$  bears

 $L: X \rightarrow Y$  linear


$$
x = \alpha_1 e_1 + \dots + \alpha_N e_N.
$$


 $\|\alpha_1\| + \dots + \|\alpha_N\| = \|x\|$ , norm.  
equivalent to any other norm on  $X$ .

(since the space is finite dim  
⇒ any 2 nonzero equivalent)


$$
\begin{aligned} Lx &= L(\alpha_1 e_1 + \dots + \alpha_N e_N) \\ &= \alpha_1 Le_1 + \dots + \alpha_N Le_N \end{aligned}
$$



$$
\|Lx\| \leq \|\alpha_1 Le_1 + \dots + \alpha_N Le_N\|
$$



$$
\leq \|\alpha_1\| \|Le_1\| + \dots + \|\alpha_N\| \|Le_N\|
$$



$$
\leq K(\|\alpha_1\| + \dots + \|\alpha_N\|)
$$



$$
K = \max \|e_i\| \quad \forall i
$$



$$
= K \|x\|,
$$



$$
\leq C \|x\|.
$$


∴  $L$  is bdd

This is next time when  $X$  is infinite dim.

→ A few more pathologies in infinite dimensions

1. ① The pointwise limit of bold linear maps can be unbold.
2. ② The inverse of a bijective, bold linear map can be unbold
3. ② topology of algebraic structure can be unrelated.

Baire Category thm. in "complete" spaces topological properties (boldness, openness) follow from algebraic structures.

→ Theorem: (Cantor's intersection thm)

Let  $X$  be a complete metric space. Let  $(A_n)_{n \in \mathbb{N}}$  be a collection of closed subsets of  $X$  s.t.

i)  $A_{n+1} \subset A_n \quad A_n \downarrow$ 

ii)  $\text{diam}(A_n) \rightarrow 0$  as  $n \rightarrow \infty$  then  $\exists ! \quad x \in X$  s.t.


$$
\begin{aligned} & ( A_n = \{x\} \\ & n \in \mathbb{N}. \end{aligned}
$$


→ Theorem: (Baire)

Let  $X$  be a complete metric space. Then the following 2 equivalent statements hold:

① Let  $(C_n)_{n \in \mathbb{N}}$  be a seq of closed subset s.t.


$$
\text{Int}(C_0) = \emptyset \quad \forall n \in \mathbb{N} \quad \text{then} \quad \text{Int}(C_n \cup C_0) = \emptyset \quad (\text{nowhere desert})
$$


② Let  $(O_n)_{n \in \mathbb{N}}$  be a seq of open sets. s.t.  $\overline{O_n} = X$  then


$$
\overline{O_n} = X.
$$


→ Theorem:

Let  $X$  be a metric space and  $(C_n)_{n \in \mathbb{N}}$  be a collection of closed subsets of  $X$  s.t.  $X = \bigcup_{n \in \mathbb{N}} C_n$ . Then

if  $\text{Int}(C_n) = \emptyset \forall n$  then  $X$  is not complete.

If  $X$  is complete, then  $\exists n_0 \in \mathbb{N}$  s.t.  $\text{Int}(C_{n_0}) \neq \emptyset$ 

→ Def: (Harvel Bearis)


$$
\{x \neq 0\}
$$


(wrb. collection)

Let  $X$  is matrixial vector space. A family of vectors  $(e_i)_{i \in I}$  in  $X$  is called a Harvel basis in  $X$  if

①  $(e_i)_{i \in I}$  is linearly independent in the sense that

 $\forall$  finite subfamily  $\{e_i\}_{i \in J}$   $J \subset I$  and for scalars  $(\alpha_i)_{i \in J}$ 


$$
\sum \alpha_i e_i = 0 \Rightarrow \alpha_i = 0 \quad \forall i \in J.
$$


②  $\text{Span}\{e_i \mid i \in I\} = X$  in the sense that  $\forall x \in X$ ,  
 $\exists$  a finite family  $J(x) \in I$  and scalars  $(\alpha_j)_{j \in J(x)}$ 

s.t.  $x = \sum \alpha_j e_j$ .
**Example** $X = \mathbf{P}(\mathbb{R}) \quad \text{ poly in } \mathbf{R} \quad \text{ ie, } \{1, x, x^2, \dots\}$

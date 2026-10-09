---
title: "Finite Groups: Group Actions and Sylow Theory"
description: "Comprehensive lecture notes on Group Actions, Permutation Representations, Orbit-Stabilizer Theorem, Cauchy-Frobenius Formula, Cauchy's Theorem, Sylow Theorems, and the Frattini Argument."
category: "Abstract Algebra"
date: "2026-10-01"
---

## Group Action

Let $X$ be a non-empty set ($\emptyset \neq X$) and $G$ be a group. A **(right) action** of $G$ on $X$ is a map:

$$
X \times G \to X, \quad (x,g) \mapsto xg
$$

satisfying the following two conditions:
1. $x \cdot 1 = x$ for all $x \in X$.
2. $(xg)h = x(gh)$ for all $x \in X$ and for all $g, h \in G$.

When these conditions are met, we say $X$ is a **(right) $G$-set**.

### Types of Actions
The action of $G$ on $X$ is called:
- **Trivial:** if $x \cdot g = x$ for all $x \in X$ and for all $g \in G$.
- **Faithful:** if the identity is the only element in $G$ fixing all elements of $X$. Equivalently, if $g_1 \neq g_2$, then $xg_1 \neq xg_2$ for some $x \in X$.
- **Transitive:** if for all $x, y \in X$, there exists $g \in G$ such that $xg = y$.
- **Regular:** if for all $x, y \in X$, there exists a *unique* $g \in G$ such that $xg = y$.

> **Example:** Every group $G$ acts on itself by right multiplication.

---

## Permutation Representation

Let $X$ be a $G$-set and $g \in G$. Define $\sigma_g: X \to X$ by $x \mapsto xg$. Since the action is invertible, $\sigma_g^{-1} = \sigma_{g^{-1}}$, making it a permutation of $X$. 

A **permutation representation** of $G$ on $X$ is a group homomorphism $\sigma: G \to S_X$. We say $\sigma$ is faithful if $\ker \sigma = 1$.

**Theorem:** Let $\emptyset \neq X$. Then actions of $G$ on $X$ are in 1-1 correspondence with permutation representations of $G$ on $X$.

**Proof:**
Let $G$ act on $X$. Define $\sigma: G \to S_X$ by $g \mapsto \sigma_g$ (where $x \mapsto xg$). To show $\sigma$ is a group homomorphism, we must show $\sigma_{gh} = \sigma_g \circ \sigma_h$. For any $x \in X$:

$$
(x)(\sigma_g \circ \sigma_h) = ((x)\sigma_g)\sigma_h = (xg)\sigma_h = (xg)h = x(gh) = (x)\sigma_{gh}
$$ 

Conversely, let $\sigma: G \to S_X$ be a permutation representation of $G$ on $X$. Define $x \cdot g = (x)\sigma_g$. Then:
- $x \cdot 1 = (x)\sigma_1 = (x)\text{id}_X = x$ 
- $(x \cdot g)h = ((x)\sigma_g)\sigma_h = (x)(\sigma_g \circ \sigma_h) = (x)\sigma_{gh} = x \cdot (gh)$ 

So $X$ is a $G$-set. These constructions are inverses of each other. $\blacksquare$ 

**Note on Conjugation:** Let $G$ act on $G$ by conjugation, where $g \cdot h = h^{-1} g h$. 
* **Triviality:** This action is trivial if and only if $G$ is abelian. Consequently, the action is non-trivial for any non-abelian group.
* **Faithfulness:** The kernel of this action is the center of the group, $Z(G)$. Therefore, the conjugation action is faithful if and only if the center is trivial (e.g., in non-abelian simple groups).
* **Transitivity & Regularity:** The conjugation action of a group on itself is never transitive (and thus never regular) for any non-trivial group. This is because the identity element $1$ always forms an isolated orbit of size 1, preventing any single orbit from covering the entire set $G$.

**Finite Sets, Faithfulness, and Embeddings:** 
Suppose $|X| = n < \infty$. Then $S_X \cong S_n$.
* A group $G$ has a faithful action on $X$ iff $G \lesssim S_n$.
  *(Note: The symbol $\lesssim$ means "is isomorphic to a subgroup of". This implies there is an injective homomorphism from $G$ into $S_n$.)*
* If $\sigma$ is the corresponding permutation representation of an action of $G$ on $X$, then $|G / \ker \sigma| \mid n!$.

**Why Faithfulness is Required for Embedding:**
Any action of $G$ on a set of size $n$ creates a homomorphism $\sigma: G \to S_n$. 
* If the action is **unfaithful** ($\ker \sigma \neq 1$), multiple elements in $G$ perform the exact same permutation on $X$. The map $\sigma$ collapses these elements, meaning only the quotient group $G / \ker \sigma$ embeds into $S_n$, not the full group $G$.
* If the action is **faithful** ($\ker \sigma = 1$), every element in $G$ performs a mathematically distinct permutation. Therefore, an exact, uncollapsed copy of $G$ exists inside $S_n$ ($G \cong \text{Im}(\sigma) \le S_n$).

**Relationship to Cayley's Theorem:**
Cayley's Theorem guarantees that *every* finite group $G$ is isomorphic to a subgroup of a symmetric group ($G \lesssim S_{|G|}$) by letting $G$ act on *itself* ($|X| = |G|$) via multiplication, an action which is always faithful. The condition $G \lesssim S_n$ is a broader test to determine if $G$ can embed into the symmetric group of an *arbitrary* set size $n$.

> **Remark:** For the cyclic group of order 6, $|C_6| = 6 \mid 4!$, but $C_6$ cannot act faithfully on a 4-element set because $S_4$ has no element of order 6. This shows that the divisibility condition ($|G| \mid n!$) is not sufficient for an embedding. Cayley's Theorem guarantees $C_6 \lesssim S_6$, but lack of faithfulness on a set of size 4 means $C_6 \not\lesssim S_4$.

---

## $G$-Invariant Sets and Orbits

Let $X$ be a $G$-set and $Y \subseteq X$. We say $Y$ is **$G$-invariant** if $yg \in Y$ for all $y \in Y$ and for all $g \in G$.

Define a relation on $X$ by $x \sim y$ if and only if there exists $g \in G$ such that $xg = y$. This is an equivalence relation, and the equivalence classes are called **$G$-orbits**. 

Let $O_x = \text{Orb}_G(x)$ denote the $G$-orbit containing $x$:
$$
O_x = \{ xg \mid g \in G \}
$$ 

Properties of orbits:
1. $O_x = O_y \iff x \sim y$ 
2. $X = \bigcup_x O_x$ 
3. $O_x \neq O_y \iff O_x \cap O_y = \emptyset$ 

These three properties show that $G$-orbits form a partition of $X$. If $|X| < \infty$, then $|X| = \sum |O_x|$ where the sum runs over all distinct $G$-orbits.

> **Remark:** A subset $Y \subseteq X$ is $G$-invariant if and only if $Y$ is a union of $G$-orbits. For example, when $G$ acts on itself by conjugation, a subgroup $H \le G$ is $G$-invariant if and only if it is normal ($H \trianglelefteq G$).

---

## Stabilizers and The Orbit-Stabilizer Theorem

For a $G$-set $X$ and $x \in X$, the **stabilizer** of $x$ in $G$ is a subgroup defined as:
$$
\text{Stab}_G(x) = \{ g \in G \mid x \cdot g = x \} \le G
$$ 

If $\sigma: G \to S_X$ is the corresponding representation, then $\ker \sigma = \bigcap_{x \in X} \text{Stab}_G(x)$. Additionally, $\text{Stab}_G(xg) = g^{-1} \text{Stab}_G(x) g$.

**Orbit-Stabilizer Theorem:** Let $X$ be a $G$-set and let $x \in X$. Then:
$$
|O_x| = |G : \text{Stab}_G(x)|
$$ 

**Proof:** 
Set $H = \text{Stab}_G(x)$. Consider the map $\theta: \{ Hg \mid g \in G \} \to O_x$ defined by $Hg \mapsto x \cdot g$. 
$\theta$ is well-defined and one-to-one because:
$$
Hg = Hk \iff g k^{-1} \in H \iff x \cdot (g k^{-1}) = x \iff x \cdot g = x \cdot k
$$ 
Clearly, $\theta$ is also onto. $\blacksquare$

> **Corollary:** Let $|X| = n$. If $G$ acts transitively on $X$, then $n = |G : \text{Stab}_G(x)|$. Thus, $G$ has a transitive action on a set of size $n$ if and only if $G$ has a subgroup of index $n$.
> 
> *Proof of $(\Leftarrow)$:* Suppose $H \le G$ with $|G : H| = n$. Consider the set of right cosets $X = \{ Hg \mid g \in G \}$. Then $G$ acts transitively on $X$ via $(Hg) \cdot k = Hgk$.

---

## $G$-Maps and Isomorphisms

Let $X$ and $Y$ be $G$-sets. A map $f: X \to Y$ is called a **$G$-map** if:
$$
f(x \cdot g) = f(x)g \quad \text{for all } x \in X, g \in G
$$ 

In terms of commutative diagrams:
$$
\begin{array}{ccc}
X \times G & \longrightarrow & X \\
\downarrow f \times \text{id} & & \downarrow f \\
Y \times G & \longrightarrow & Y
\end{array}
$$
where $(x, g) \mapsto xg \mapsto f(xg)$ matches $(x, g) \mapsto (f(x), g) \mapsto f(x)g$.

If $f$ is bijective, then $f$ is said to be a **$G$-isomorphism**, and $X$ and $Y$ are said to be **$G$-isomorphic**.

> **Remark (A transitive action is always a coset action):**
> Let $X$ be a transitive $G$-set and let $x \in X$. Set $H = \text{Stab}_G(x)$. Consider the action of $G$ on the set of right cosets $\{ Hg \mid g \in G \}$. Define:
> $$
> \theta: \{ Hg \mid g \in G \} \to X, \quad Hg \mapsto xg
> $$
> Then $\theta$ is a $G$-isomorphism.

**Theorem:** Let $X$ be a transitive $G$-set, $x \in X$, and $H = \text{Stab}_G(x)$. Then $X$ is $G$-isomorphic to the set of right cosets $\{ Hg \mid g \in G \}$, where $G$ acts on the cosets by right multiplication.

**Action on $N$-Orbits:**
Let $N \trianglelefteq G$ and let $X$ be a $G$-set. Let $x \in X$ and let $O_x = \{ xn \mid n \in N \}$ be the $N$-orbit containing $x$. Then $G$ acts on the set of $N$-orbits via:
$$
O_x \cdot g = O_{xg}
$$
*Well-definedness:* Since $N \trianglelefteq G$, for any $n \in N$, $x n g = x g (g^{-1}ng) = x g m$ where $m = g^{-1}ng \in N$. Thus:
$$
O_x \cdot g = \{ x n g \mid n \in N \} = \{ (xg)m \mid m \in N \} = O_{xg}
$$
Furthermore, if $G$ is transitive on $X$, then $G$ acts transitively on the $N$-orbits.

---

## $k$-Transitive Actions

Let $G$ act on $X$. We say that $G$ is **$k$-transitive** on $X$ for $k \ge 1$ if $G$ acts transitively on the set of all $k$-tuples with distinct coordinates. That is, given:
$$
(x_1, \dots, x_k), (y_1, \dots, y_k) \in X^k \quad \text{with } x_i \neq x_j \text{ and } y_i \neq y_j \text{ for } i \neq j,
$$
there exists $g \in G$ such that:
$$
x_i \cdot g = y_i \quad \text{for all } i = 1, \dots, k
$$

*Properties:*
* $k = 1 \implies$ standard transitivity.
* $k = 2 \implies$ 2-transitive (or doubly transitive).
* If an action is $k$-transitive, then it is $j$-transitive for all $j \le k$.
* Transitive does not imply 2-transitive (e.g., $C_n = \langle (1\,2\,\dots\,n) \rangle$ acting on $\{1, \dots, n\}$ is transitive, but not 2-transitive for $n > 2$).
* $S_n$ acts $n$-transitively on $\{1, \dots, n\}$.
* $A_n$ acts $(n-2)$-transitively on $\{1, \dots, n\}$ for $n \ge 3$.

**Theorem:** Suppose that $G$ acts faithfully and 2-transitively on $X$. Let $1 \neq N \trianglelefteq G$. Then $N$ acts transitively on $X$.

**Proof:**
Since the action of $G$ is faithful and $N \neq 1$, there exist $x \in X$ and $1 \neq n \in N$ such that $x \cdot n \neq x$.
Assume for contradiction that $N$ is not transitive on $X$. Then there exists an element $y \in X$ that does not lie in the $N$-orbit of $x$.
Consider the pairs $(x, xn)$ and $(y, x)$. Since $xn \neq x$ and $y \neq x$ (as $x$ belongs to its own $N$-orbit), these are pairs of distinct elements.
By 2-transitivity of $G$, there exists $g \in G$ such that:
$$
x \cdot g = y \quad \text{and} \quad (xn) \cdot g = x
$$
Then:
$$
x = (xn)g = x(ng) = (y \cdot g^{-1})(ng) = y(g^{-1}ng)
$$
Since $N \trianglelefteq G$, the conjugated element $g^{-1}ng$ lies in $N$. Thus, $x = y(g^{-1}ng)$ must belong to the $N$-orbit of $y$, which contradicts the assumption that $y$ is not in the $N$-orbit of $x$. Hence, $N$ must act transitively on $X$. $\blacksquare$

---

## Cauchy-Frobenius Formula (Burnside's Lemma)

For $g \in G$, define the **fixed point set** of $g$ as:
$$
\text{Fix}_X(g) = \{ x \in X \mid xg = x \}
$$

**Theorem (Cauchy-Frobenius Formula):** Let $G$ be a finite group acting on a finite set $X$, and let $r$ be the number of distinct $G$-orbits. Then:
$$
r = \frac{1}{|G|} \sum_{g \in G} |\text{Fix}_X(g)|
$$

**Proof:**
Consider the incidence set $\Omega = \{ (x, g) \in X \times G \mid xg = x \}$. We count $|\Omega|$ in two different ways:

1. By fixing $x \in X$: $xg = x \iff g \in \text{Stab}_G(x)$. Therefore:
$$
|\Omega| = \sum_{x \in X} |\text{Stab}_G(x)|
$$
2. By fixing $g \in G$: $xg = x \iff x \in \text{Fix}_X(g)$. Therefore:
$$
|\Omega| = \sum_{g \in G} |\text{Fix}_X(g)|
$$

Equating the two expressions and dividing by $|G|$:
$$
\frac{1}{|G|} \sum_{g \in G} |\text{Fix}_X(g)| = \frac{1}{|G|} \sum_{x \in X} |\text{Stab}_G(x)|
$$
By the Orbit-Stabilizer Theorem, $|\text{Stab}_G(x)| = \frac{|G|}{|O_x|}$. Substituting this in:
$$
\frac{1}{|G|} \sum_{x \in X} \frac{|G|}{|O_x|} = \sum_{x \in X} \frac{1}{|O_x|}
$$
Let $O_{x_1}, \dots, O_{x_r}$ denote the distinct $G$-orbits partitioning $X$. Summing over the elements grouped by orbits:
$$
\sum_{x \in X} \frac{1}{|O_x|} = \sum_{i=1}^r \sum_{x \in O_{x_i}} \frac{1}{|O_{x_i}|} = \sum_{i=1}^r |O_{x_i}| \cdot \frac{1}{|O_{x_i}|} = \sum_{i=1}^r 1 = r
$$
Thus:
$$
r = \frac{1}{|G|} \sum_{g \in G} |\text{Fix}_X(g)| \quad \blacksquare
$$

**Subsets Fixed by Subgroups:**
For a subgroup $H \le G$, the fixed point set of $H$ is:
$$
\text{Fix}_X(H) = \bigcap_{h \in H} \text{Fix}_X(h) = \{ x \in X \mid xh = x \text{ for all } h \in H \}
$$
Notice that:
$$
x \in \text{Fix}_X(G) \iff G = \text{Stab}_G(x) \iff O_x = \{x\}
$$

> **Remark:** $\text{Fix}_X(G)$ may be empty. For example, for $X = \{1, 2, 3\}$ under the natural action of $S_3$, $\text{Fix}_X(S_3) = \emptyset$, whereas $\text{Fix}_X(\langle (1\,2) \rangle) = \{3\}$.

---

## Fixed Points of $p$-Groups and Cauchy's Theorem

**Corollary:** Let $H$ be a finite $p$-group acting on a finite set $X$. Then:
$$
|X| \equiv |\text{Fix}_X(H)| \pmod p
$$

**Proof:**
Partition $X$ into its $H$-orbits. An orbit has size 1 if and only if it consists of a single fixed point in $\text{Fix}_X(H)$. Therefore:
$$
|X| = |\text{Fix}_X(H)| + \sum_{i=1}^m |H : \text{Stab}_H(x_i)|
$$
where $x_1, \dots, x_m$ are representatives of distinct orbits of length greater than 1.
Since $H$ is a $p$-group, $|H| = p^k$. By Lagrange's theorem, every orbit size $|H : \text{Stab}_H(x_i)|$ must divide $|H|$, and since the size is strictly greater than 1, it must be a power of $p$ ($p^{a_i}$ with $a_i \ge 1$), which is divisible by $p$. 
Reducing the equation modulo $p$:
$$
|X| \equiv |\text{Fix}_X(H)| \pmod p \quad \blacksquare
$$

**Theorem (Cauchy):** If $p$ is a prime dividing the order of a finite group $G$ ($p \mid |G|$), then $G$ has an element of order $p$.

**Proof:**
Consider the set of $p$-tuples whose components multiply to the identity:
$$
X = \{ (x_1, \dots, x_p) \in G^p \mid x_1 x_2 \cdots x_p = 1 \}
$$
Let $\sigma = (1 \, 2 \, \dots \, p) \in S_p$ and let $H = \langle \sigma \rangle \cong C_p$. 
$H$ acts on $X$ by cyclic shifts:
$$
(x_1, \dots, x_p) \cdot \sigma = (x_2, \dots, x_p, x_1)
$$
*Well-definedness:* If $x_1 (x_2 \cdots x_p) = 1$, then $x_2 \cdots x_p = x_1^{-1}$, so $(x_2 \cdots x_p) x_1 = x_1^{-1} x_1 = 1$.

Since $H$ is a $p$-group acting on $X$, by the corollary above:
$$
|X| \equiv |\text{Fix}_X(H)| \pmod p
$$

*Determining $|X|$:* In any tuple $(x_1, \dots, x_p) \in X$, the first $p-1$ elements $x_1, \dots, x_{p-1}$ can be chosen arbitrarily from $G$, while the last element is uniquely determined as $x_p = (x_1 \dots x_{p-1})^{-1}$. Thus:
$$
|X| = |G|^{p-1}
$$
Since $p \mid |G|$, it follows that $p \mid |X|$. Consequently:
$$
p \mid |\text{Fix}_X(H)|
$$
Notice that $(1, 1, \dots, 1) \in \text{Fix}_X(H)$, so $|\text{Fix}_X(H)| \ge 1$. Since its cardinality is divisible by $p$, we must have:
$$
|\text{Fix}_X(H)| \ge p > 1
$$
A tuple $(x_1, \dots, x_p)$ is fixed by $\sigma$ if and only if $x_1 = x_2 = \dots = x_p = x$. Therefore:
$$
\text{Fix}_X(H) = \{ (x, x, \dots, x) \in G^p \mid x^p = 1 \}
$$
Since $|\text{Fix}_X(H)| \ge p > 1$, there exists at least one element $x \in G$ with $x \neq 1$ such that $x^p = 1$. Since $p$ is prime, $|x| = p$. $\blacksquare$

---

## Sylow Subgroups

Let $|G| = p^a m$ with $p$ prime such that $p \nmid m$.
* A subgroup $P$ of $G$ of order $p^a$ is called a **Sylow $p$-subgroup** of $G$.
* $\text{Syl}_p(G)$ denotes the set of all Sylow $p$-subgroups of $G$.
* If $a = 0$, then $\{1\}$ is the trivial Sylow $p$-subgroup.
* If $m = 1$, then $G$ itself is a Sylow $p$-subgroup.
* $n_p(G) = |\text{Syl}_p(G)|$ denotes the number of distinct Sylow $p$-subgroups of $G$.
* $n_p(G) = 1 \iff$ there exists a unique Sylow $p$-subgroup $P$ of $G$.
* For $P \in \text{Syl}_p(G)$: $\text{Syl}_p(G) = \{P\} \iff P \trianglelefteq G \iff P \text{ char } G$.
* Let $P$ be a $p$-subgroup of $G$. Then $P \in \text{Syl}_p(G) \iff p \nmid |G : P|$.

### The Sylow Theorems
* **Sylow E (Existence):** $\text{Syl}_p(G) \neq \emptyset$.
* **Sylow C (Conjugacy):** Any two Sylow $p$-subgroups of $G$ are conjugate in $G$. That is, if $P, Q \in \text{Syl}_p(G)$, then there exists $g \in G$ such that $Q = g^{-1}Pg = P^g$.
* **Sylow D (Domination / Containment):** Any $p$-subgroup of $G$ is contained in some Sylow $p$-subgroup.

### Immediate Consequences
* By Sylow C, $G$ acts transitively on $\text{Syl}_p(G)$ by conjugation.
* For $P \in \text{Syl}_p(G)$, the stabilizer of $P$ under conjugation is the normalizer $N_G(P) = \{ g \in G \mid g^{-1}Pg = P \}$. By the Orbit-Stabilizer Theorem:
$$
n_p(G) = |G : N_G(P)|
$$
* Since $P \le N_G(P)$ and $|G : P| = |G : N_G(P)| \cdot |N_G(P) : P| = m$, we have $p \nmid |N_G(P) : P|$. Thus, $P \in \text{Syl}_p(N_G(P))$.
* Since $P \trianglelefteq N_G(P)$, $P$ is the *unique* Sylow $p$-subgroup of $N_G(P)$.
* Because $P \le N_G(P)$, the index $|G : N_G(P)|$ divides $|G : P| = m$. Thus:
$$
n_p(G) \mid m
$$

---

## Proof of Sylow Existence (Sylow E)

**Lemma:** If $p \nmid m$ and $a \ge 0$, then:
$$
\binom{p^a m}{p^a} \equiv m \pmod p
$$
In particular, $p \nmid \binom{p^a m}{p^a}$.

**Proof:**
Over the finite field $\mathbb{F}_p$, the Frobenius endomorphism yields $(1 + t)^{p^a} \equiv 1 + t^{p^a} \pmod p$. Therefore:
$$
(1 + t)^{p^a m} = \left((1 + t)^{p^a}\right)^m \equiv (1 + t^{p^a})^m \pmod p
$$
The coefficient of $t^{p^a}$ on the left-hand side is $\binom{p^a m}{p^a}$.
The coefficient of $t^{p^a}$ on the right-hand side is $\binom{m}{1} = m$.
Thus, $\binom{p^a m}{p^a} \equiv m \pmod p$. Since $p \nmid m$, $p \nmid \binom{p^a m}{p^a}$. $\blacksquare$

**Proof of Sylow E (Wielandt):**
Let $|G| = p^a m$ with $p \nmid m$. Let $\Omega$ be the set of all subsets of $G$ of cardinality $p^a$:
$$
|\Omega| = \binom{p^a m}{p^a}
$$
$G$ acts on $\Omega$ by right multiplication:
$$
A \cdot g = Ag = \{ ag \mid a \in A \} \quad \text{for } A \in \Omega, g \in G
$$
By the lemma above, $p \nmid |\Omega|$. Since the orbits of this action partition $\Omega$, there must exist at least one orbit $\mathcal{O}$ whose size is not divisible by $p$.

Let $A \in \mathcal{O}$ and set $H = \text{Stab}_G(A)$. By the Orbit-Stabilizer Theorem:
$$
|\mathcal{O}| = |G : H|
$$
Since $p \nmid |\mathcal{O}|$, the full prime power $p^a$ dividing $|G| = p^a m$ must divide $|H|$, so $p^a \mid |H|$.

Now, fix an element $a \in A$ and define the map:
$$
H \to A, \quad h \mapsto ah
$$
By right cancellation in $G$, this map is injective. Consequently:
$$
|H| \le |A| = p^a
$$
Since $p^a \mid |H|$ and $|H| \le p^a$, we conclude $|H| = p^a$. Thus $H$ is a subgroup of $G$ of order $p^a$, so $H \in \text{Syl}_p(G)$. $\blacksquare$

---

## Proofs of Sylow C, Sylow D, and the Congruence Condition

**Theorem:** Let $H$ be a $p$-subgroup of $G$ and $P \in \text{Syl}_p(G)$. Then $H \le P^g$ for some $g \in G$.

**Proof:**
Let $\Omega = \{ Pg \mid g \in G \}$ be the set of right cosets of $P$ in $G$. The group $H$ acts on $\Omega$ by right multiplication.
The cardinality of $\Omega$ is $|\Omega| = |G : P| = m$, which is coprime to $p$ ($p \nmid m$).
Since $H$ is a $p$-group, we have $|\Omega| \equiv |\text{Fix}_\Omega(H)| \pmod p$.
Because $p \nmid |\Omega|$, $\text{Fix}_\Omega(H)$ cannot be empty. 
Thus, there exists a coset $Pg \in \Omega$ fixed by all elements of $H$:
$$
(Pg) \cdot h = Pg \quad \text{for all } h \in H \implies Pgh = Pg \implies Pghg^{-1} = P
$$
This implies $ghg^{-1} \in P$, which means $h \in g^{-1}Pg = P^g$ for all $h \in H$.
Hence, $H \le P^g$. $\blacksquare$

**Proof of Sylow C:**
Let $Q, P \in \text{Syl}_p(G)$. By the theorem above, since $Q$ is a $p$-subgroup, $Q \le P^g$ for some $g \in G$. But $|Q| = |P^g| = p^a$, so $Q = P^g$. Thus, any two Sylow $p$-subgroups are conjugate. $\blacksquare$

**Proof of Sylow D:**
Let $H$ be any $p$-subgroup of $G$ and let $P \in \text{Syl}_p(G)$. By the theorem above, $H \le P^g$ for some $g \in G$. Since $P^g \in \text{Syl}_p(G)$, every $p$-subgroup is contained in a Sylow $p$-subgroup. $\blacksquare$

**Theorem:** Assume $n_p(G) > 1$. Choose distinct Sylow $p$-subgroups $P$ and $Q$ such that $|P \cap Q|$ is as large as possible among all pairs of distinct Sylow $p$-subgroups. Then:
$$
n_p(G) \equiv 1 \pmod{|P : P \cap Q|}
$$

**Proof:**
Consider the action of $P$ on $\text{Syl}_p(G)$ by conjugation.
Under this action, $P$ is fixed by conjugation by its own elements, so $\{P\}$ forms an orbit of length 1.
Let $R \in \text{Syl}_p(G)$ with $R \neq P$. The stabilizer of $R$ in $P$ is:
$$
\text{Stab}_P(R) = N_P(R) = P \cap N_G(R)
$$
This is a $p$-subgroup of $N_G(R)$. But $R \trianglelefteq N_G(R)$ is the *unique* Sylow $p$-subgroup of $N_G(R)$, so by Sylow D, any $p$-subgroup of $N_G(R)$ must be contained in $R$. Thus:
$$
N_P(R) \le R \implies N_P(R) = P \cap R
$$
By our maximal choice of $Q$, we have $|P \cap R| \le |P \cap Q|$. Since both orders are powers of $p$, $|P \cap R|$ divides $|P \cap Q|$, meaning $|P : P \cap Q|$ divides $|P : P \cap R| = |P : \text{Stab}_P(R)|$.
Since the length of the $P$-orbit of every $R \neq P$ is $|P : \text{Stab}_P(R)|$, each such orbit length is a multiple of $|P : P \cap Q|$.
Summing over all orbits yields:
$$
n_p(G) = 1 + \sum_{R \neq P} |P : \text{Stab}_P(R)| \equiv 1 \pmod{|P : P \cap Q|} \quad \blacksquare
$$

> **Corollary:** $n_p(G) \equiv 1 \pmod p$.
> 
> *Proof:* Since $P \neq Q$, the intersection $P \cap Q$ is a proper subgroup of $P$. Since $P$ is a $p$-group, the index $|P : P \cap Q| = p^k$ with $k \ge 1$. Hence, $|P : P \cap Q|$ is a multiple of $p$, which immediately gives $n_p(G) \equiv 1 \pmod p$.

---

## The Frattini Argument

**Theorem (Frattini Argument):** Let $X$ be a $G$-set and let $L \le G$ act transitively on $X$. Then for any $x \in X$:
$$
G = L \cdot \text{Stab}_G(x)
$$

**Proof:**
Let $g \in G$ and fix $x \in X$. Since $L$ acts transitively on $X$, there exists an element $\ell \in L$ such that:
$$
x \cdot \ell = x \cdot g
$$
Applying $\ell^{-1}$ to both sides:
$$
x = (x \cdot g) \cdot \ell^{-1} = x \cdot (g \ell^{-1})
$$
Therefore, $g \ell^{-1} \in \text{Stab}_G(x)$. Setting $s = g \ell^{-1} \in \text{Stab}_G(x)$, we have:
$$
g = s \ell \in \text{Stab}_G(x) \cdot L
$$
Hence $G = \text{Stab}_G(x) \cdot L$. Taking inverses of both sides (both factors are subgroups) gives $G = G^{-1} = L \cdot \text{Stab}_G(x)$. $\blacksquare$

*Observations:*
* If $L$ acts regularly on $X$, then $\text{Stab}_L(x) = 1$ for all $x \in X$, and $L \cap \text{Stab}_G(x) = 1$.

**Theorem:** Let $N \trianglelefteq G$ and let $P \in \text{Syl}_p(N)$. Then:
$$
G = N N_G(P)
$$

**Proof:**
The group $G$ acts on $\text{Syl}_p(N)$ by conjugation (since $N \trianglelefteq G$, $P^g \le N^g = N$, so $P^g \in \text{Syl}_p(N)$).
By Sylow C, the subgroup $N$ acts transitively on $\text{Syl}_p(N)$ by conjugation.
Applying the Frattini Argument with $L = N$ and $x = P$:
$$
G = N \cdot \text{Stab}_G(P) = N N_G(P) \quad \blacksquare
$$

**Lemma:** Let $P \in \text{Syl}_p(G)$ and suppose $N_G(P) \le H \le G$. Then $N_G(H) = H$ (i.e., $H$ is self-normalizing).

**Proof:**
Clearly, $H \le N_G(H)$.
Now let $x \in N_G(H)$. Since $P \le H \le G$ and $P \in \text{Syl}_p(G)$, it follows that $P \in \text{Syl}_p(H)$.
Because $x$ normalizes $H$, $P^x \le H^x = H$, so $P^x \in \text{Syl}_p(H)$.
By Sylow C applied within the group $H$, $P$ and $P^x$ are conjugate in $H$, so there exists $h \in H$ such that $P^x = P^h$.
Then $P^{x h^{-1}} = P$, which means $x h^{-1} \in N_G(P)$.
Since $N_G(P) \le H$, we have $x h^{-1} \in H$. Since $h \in H$, it follows that $x = (x h^{-1}) h \in H$.
Thus, $N_G(H) \le H$, and hence $N_G(H) = H$. $\blacksquare$

---

## Subgroups of Minimal Prime Index

**Lemma:** Let $H \le G$ with $|G : H| = p$, where $p$ is the smallest prime dividing $|G|$. Then $H \trianglelefteq G$.

**Proof:**
Let $G$ act on the set of right cosets $\{ Hg \mid g \in G \}$ by right multiplication. This action induces a homomorphism:

$$
\sigma: G \to S_p
$$

Let $K = \ker \sigma = \text{Core}_G(H) = \bigcap_{x \in G} H^x$. Then $K \trianglelefteq G$ and $K \le H$.

By the First Isomorphism Theorem, $G/K \cong \text{Im}(\sigma) \le S_p$, which implies:

$$
|G : K| \mid p!
$$

By Lagrange's theorem:

$$
|G : K| = |G : H| \cdot |H : K| = p \cdot |H : K|
$$

Therefore:

$$
p \cdot |H : K| \mid p! \implies |H : K| \mid (p - 1)!
$$

Assume for contradiction that $H \neq K$. Then $|H : K| > 1$, so there exists a prime $q$ dividing $|H : K|$. Since $|H : K| \mid (p - 1)!$, we must have $q \mid (p - 1)!$, which implies $q \le p - 1 < p$.

However, $|H : K|$ divides $|G : K|$, which divides $|G|$, so $q$ is a prime dividing $|G|$. This contradicts the minimality of $p$ as the smallest prime dividing $|G|$.

Thus, $|H : K| = 1$, which means $H = K$. Since $K = \ker \sigma \trianglelefteq G$, we conclude that $H \trianglelefteq G$. $\blacksquare$

---

## Commutator Subgroups and Finite Simple Groups

For $x, y \in G$, the **commutator** of $x$ and $y$ is defined as:

$$
[x, y] = x^{-1} y^{-1} x y
$$

The subgroup generated by all commutators is the **derived subgroup** (or commutator subgroup):

$$
G' = \langle [x, y] \mid x, y \in G \rangle
$$

* $G' \text{ char } G \implies G' \trianglelefteq G$.
* $G/G'$ is abelian, and is the largest abelian homomorphic image of $G$.

**Theorem (Correspondence Theorem for Normal Subgroups):**
There is a 1-1 correspondence between normal subgroups of $G$ and homomorphic images of $G$:

$$
N \mapsto (G/N, \pi_N), \quad \text{where } \pi_N: G \to G/N, \, g \mapsto gN
$$

with inverse map $(H, \alpha) \mapsto \ker \alpha$.

**Lemma:** Let $\alpha: G \to H$ be an epimorphism (surjective homomorphism). Then $\alpha(Z(G)) \le Z(H)$.

**Proof:**
Let $z \in Z(G)$ and $h \in H$. Since $\alpha$ is surjective, $h = \alpha(g)$ for some $g \in G$. Then:

$$
\alpha(z) h = \alpha(z) \alpha(g) = \alpha(zg) = \alpha(gz) = \alpha(g) \alpha(z) = h \alpha(z)
$$

Thus $\alpha(z) \in Z(H)$, so $\alpha(Z(G)) \le Z(H)$. $\blacksquare$

> **Remark:** The containment can be strict. For example, $S_3 / A_3 \cong C_2$, so there is a surjection $S_3 \twoheadrightarrow C_2$. Here $Z(C_2) = C_2$, but $Z(S_3) = 1$, so $\alpha(Z(S_3)) = 1 \subsetneq Z(C_2)$.

**Lemma:** Let $N \trianglelefteq G$ and $N \le K \le L \le G$.
1. $K \trianglelefteq L \iff K/N \trianglelefteq L/N$
2. $N_{G/N}(K/N) = N_G(K)/N$

**Theorem:** A non-trivial finite simple group is either cyclic of prime order or perfect non-abelian.
*(A group $G$ is called **perfect** if $G' = G$.)*

**Proof:**
Suppose $G$ is simple. Since $G' \trianglelefteq G$, simplicity dictates that either $G' = 1$ or $G' = G$.

* **Case 1 ($G' = 1$):** Then $G$ is abelian. Let $x \in G$ with $x \neq 1$. Let $p$ be a prime dividing $|x|$. Then the element $x^{|x|/p}$ has prime order $p$. The cyclic subgroup $H = \langle x^{|x|/p} \rangle$ has order $p$. Since $G$ is abelian, $H \trianglelefteq G$. Because $G$ is simple and $H \neq 1$, we must have $G = H \cong C_p$.
* **Case 2 ($G' = G$):** Then $G$ is perfect. Since $G \neq 1$ and $G' = G$, $G$ cannot be abelian, so $G$ is perfect non-abelian. $\blacksquare$

**Theorem:** Let $P$ be a finite $p$-group, and let $1 \neq N \trianglelefteq P$. Then $N \cap Z(P) \neq 1$.
In particular, setting $N = P$, the center of any non-trivial $p$-group is non-trivial ($Z(P) \neq 1$).

**Proof:**
Let $P$ act on $N$ by conjugation. Since $P$ is a $p$-group, the fixed points modulo $p$ satisfy:

$$
|N| \equiv |\text{Fix}_N(P)| \pmod p
$$

The fixed point set consists of all elements in $N$ that commute with every element of $P$:

$$
\text{Fix}_N(P) = \{ n \in N \mid n^x = n \text{ for all } x \in P \} = C_N(P) = N \cap Z(P)
$$

Since $1 \in N \cap Z(P)$, $|\text{Fix}_N(P)| \ge 1$. Because $P$ is a $p$-group and $N \le P$ with $N \neq 1$, $|N| = p^k$ with $k \ge 1$, so $p \mid |N|$. Hence $p \mid |\text{Fix}_N(P)|$, which forces:

$$
|N \cap Z(P)| \ge p > 1
$$

Thus, $N \cap Z(P) \neq 1$. $\blacksquare$

---

## Examples of Group Actions

These examples complement the basic definitions of right group actions, orbits, stabilizers, faithful actions, transitive actions, and regular actions. Throughout, we use *right actions*: $X \times G \to X$, $(x, g) \mapsto x \cdot g$, where $(x \cdot g) \cdot h = x \cdot (gh)$. Accordingly, maps are composed from left to right: $\sigma\tau$ means "first $\sigma$, then $\tau$". This is what makes evaluation actions such as $i \cdot \sigma = \sigma(i)$ right actions.

### Permutation Actions
Let $H \le S_n$. Then $H$ acts on the set $\Omega = \{1, 2, \dots, n\}$ by evaluation: $i \cdot \sigma = \sigma(i)$ for $i \in \Omega$, $\sigma \in H$. This action is faithful, because if $\sigma \in H$ fixes every element of $\Omega$, then $\sigma = 1$. 

* In particular, $S_n$ acts faithfully and transitively on $\{1, \dots, n\}$. 
* **Example:** The subgroup $\langle (1 \, 2 \, \dots \, n) \rangle \cong C_n$ acts transitively on $\{1, \dots, n\}$, but it is not 2-transitive when $n > 2$.

### The Regular Action
Every group $G$ acts on itself by right multiplication: $x \cdot g = xg$ for $x, g \in G$. This action is called the *right regular action*.

* It is *transitive*: given $x, y \in G$, choosing $g = x^{-1}y$ gives $x \cdot g = y$.
* It is *free*: if $x \cdot g = x$, then $xg = x$, so $g = 1$. 

Hence the action is *regular*. 
* **Example:** The additive group $\mathbb{Z}_n$ acts regularly on the set $\mathbb{Z}_n$ by translations: $x \cdot a = x + a$.

### $k$-Transitive Actions
Let $G$ act on a set $X$. We say that the action is *$k$-transitive* if for any two ordered $k$-tuples $(x_1, \dots, x_k)$ and $(y_1, \dots, y_k)$ of elements of $X$ with $x_i \neq x_j$ and $y_i \neq y_j$ for $i \neq j$, there exists $g \in G$ such that $x_i \cdot g = y_i$ for $i = 1, \dots, k$.

* $S_n$ acts $n$-transitively on $\{1, \dots, n\}$.
* $A_n$ acts $(n-2)$-transitively on $\{1, \dots, n\}$ for $n \ge 3$.
* **Example:** The action of $PGL(2, q)$ on the projective line $\mathbb{P}^1(\mathbb{F}_q)$ is sharply 3-transitive. This is a classical and very important example.

### A Subgroup Acting on the Group, and the Coset Action
Let $H \le G$.

* **The subgroup $H$ acts on $G$ by right multiplication.** Define $x \cdot h = xh$ for $x \in G$, $h \in H$. This action is faithful, and its orbits are the left cosets of $H$ in $G$. Indeed, the orbit of $x \in G$ is $O_x = \{x \cdot h \mid h \in H\} = xH$. Since right actions produce left cosets here, it is worth pointing this out explicitly.
* **The group $G$ acts on the set of right cosets of $H$.** Let $\Omega = \{Hg \mid g \in G\}$. Define $(Hg) \cdot x = Hgx$ for $Hg \in \Omega$, $x \in G$. Then $G$ acts transitively on $\Omega$. 
  * The stabilizer of the point $Hg$ is $\text{Stab}_G(Hg) = \{x \in G \mid Hgx = Hg\} = g^{-1}Hg$. Thus each point stabilizer is a conjugate of $H$.
  * The kernel of this action is $\bigcap_{g \in G} g^{-1}Hg = \text{Core}_G(H)$, which is the largest normal subgroup of $G$ contained in $H$. 
  * **Fact:** If $|G : H| = m$, then the coset action gives a homomorphism $G \to S_m$ with kernel $\text{Core}_G(H)$. Hence $G / \text{Core}_G(H) \lesssim S_m$, and therefore $|G : \text{Core}_G(H)|$ divides $m!$.
  * **Consequence:** If $G$ is simple and $H < G$ has index $m$, then $\text{Core}_G(H) = 1$, and so $|G|$ divides $m!$.

### Conjugation Actions
* **$G$ acts on itself by conjugation.** Define $x \cdot g = g^{-1}xg$ for $x, g \in G$. Then the orbit of $x$ is its conjugacy class, $x^G = \{g^{-1}xg \mid g \in G\}$, and the stabilizer of $x$ is its centralizer, $\text{Stab}_G(x) = C_G(x)$. Hence the orbit-stabilizer theorem yields $|x^G| = |G : C_G(x)|$. The kernel of this action is $\bigcap_{x \in G} C_G(x) = Z(G)$. Thus the action is faithful if and only if $Z(G) = 1$.
* **$G$ acts on a normal subgroup $N \trianglelefteq G$ by conjugation.** This is just the restriction of the previous action, since $N$ is stable under conjugation.
* **$G$ acts on $G/N$ by conjugation when $N \trianglelefteq G$.** Define $(Nx) \cdot g = N(g^{-1}xg)$. This is well-defined because $N$ is normal.

### The Action on the Set of Subgroups
The group $G$ acts on the set of all subgroups of $G$ by conjugation: $H \cdot g = g^{-1}Hg$. 

* The fixed points of this action are exactly the normal subgroups of $G$. 
* For a subgroup $H \le G$, the orbit is $O_H = \{g^{-1}Hg \mid g \in G\}$, that is, the set of all conjugates of $H$, and the stabilizer is the normalizer: $\text{Stab}_G(H) = N_G(H)$.
* Therefore, $|O_H| = |G : N_G(H)|$, which is the number of distinct conjugates of $H$.
* **Important special case:** If $X = \text{Syl}_p(G)$, then $G$ acts on $X$ by conjugation. The orbit of any Sylow $p$-subgroup is all of $X$, so $|\text{Syl}_p(G)| = |G : N_G(P)|$ for each $P \in \text{Syl}_p(G)$. This is one of the standard action-theoretic proofs in Sylow theory.

### The Induced Action on the Power Set
Let $X$ be a $G$-set. Then the power set $\mathcal{P}(X)$ becomes a $G$-set via $Y \cdot g = \{y \cdot g \mid y \in Y\}$ for $Y \subseteq X$, $g \in G$. This is well-defined, and $|Y \cdot g| = |Y|$.

* **Examples:** If $G = S_n$ acts on $X = \{1, \dots, n\}$, then $G$ acts on the set of all $k$-subsets of $X$. More generally, if $G$ acts on a graph by symmetries, then it acts on the set of vertices, the set of edges, and the set of subsets of vertices.

### Permuting Coordinates
Let $X$ be a set. Then $S_n$ acts on $X^n$ by permuting coordinates: $(x_1, \dots, x_n) \cdot \sigma = (x_{\sigma^{-1}(1)}, \dots, x_{\sigma^{-1}(n)})$, i.e. the entry in position $i$ moves to position $\sigma(i)$. With left-to-right composition this is a right action (the inverse is needed: without it one gets a left action).

* **Observation:** The diagonal subset $\Delta = \{(x, x, \dots, x) \mid x \in X\}$ is fixed pointwise by this action.
* **Another useful invariant subset:** For any partition of $\{1, \dots, n\}$, one gets a corresponding subset of $X^n$ defined by equalities among coordinates, and such subsets are stabilized by suitable subgroups of $S_n$.

### Linear Actions
The group $GL(n, \mathbb{R})$ acts naturally on $\mathbb{R}^n$ by right multiplication of row vectors: $x \cdot A = xA$ for $x \in \mathbb{R}^n, A \in GL(n, \mathbb{R})$. Similarly, $GL(n, F)$ acts on $F^n$ for any field $F$.

* **Interesting variant:** The same group acts on the set of all subspaces of $F^n$. In particular, it acts transitively on the set of $k$-dimensional subspaces. This is one of the basic examples behind projective geometry.

### A Small but Instructive Action of $C_2$
Let $C_2 = \{0, 1\}$ under addition mod 2. Then $C_2$ acts on $\mathbb{R}^n$ by $x \cdot 0 = x$, $x \cdot 1 = -x$. This is a very simple example of a nontrivial linear action. The fixed point set is $\{x \in \mathbb{R}^n \mid -x = x\} = \{0\}$.

### Automorphism Actions
For any group $G$, the automorphism group $\text{Aut}(G)$ acts on the underlying set of $G$ by evaluation: $x \cdot \alpha = \alpha(x)$ for $x \in G, \alpha \in \text{Aut}(G)$. It also acts on many naturally associated sets:
* on the set of subgroups of $G$,
* on the set of normal subgroups of $G$,
* on the set of elements of a fixed order,
* on the set of conjugacy classes of $G$.

These actions are often very useful in finite group theory.

### Dihedral Symmetry of a Polygon
Let $D_{2n}$ be the dihedral group of order $2n$. It acts on the set of vertices of a regular $n$-gon ($n \ge 3$).

* This action is faithful and transitive.
* It is not regular: each vertex is fixed by the reflection through it, so every vertex stabilizer has order $2$ (consistent with $|D_{2n}| = 2n > n$).

This is a good geometric example to compare with the regular action of a group on itself.

### A Useful Action in Number Theory and Combinatorics
Let $C_n = \langle r \rangle$ act on the set of vertices of a regular $n$-gon by rotation. Then the orbits of subsets under this action are the objects counted by Burnside's lemma and Pólya theory. This is a nice reminder that group actions are not only algebraic tools: they are also basic counting devices.

> **Summary:** The most useful examples to keep in mind are:
> * the regular action of a group on itself,
> * the action on cosets,
> * the conjugation action on elements and on subgroups,
> * permutation actions of $S_n$ and $A_n$,
> * linear actions of matrix groups.
>
> These examples already cover most of the applications that appear early in finite group theory.
---
title: "Finite Groups: Group Actions"
description: "Comprehensive lecture notes on Group Actions, Permutation Representations, G-orbits, and the Orbit-Stabilizer Theorem."
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
- **Faithful:** if the identity is the only element in $G$ fixing all elements of $X$. That is, $g_1 \neq g_2 \implies xg_1 \neq xg_2$.
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
- $x \cdot 1 = (x)\sigma_1 = (x)id_X = x$ 
- $(x \cdot g)h = ((x)\sigma_g)\sigma_h = (x)(\sigma_g \circ \sigma_h) = (x)\sigma_{gh} = x \cdot (gh)$ 

So $X$ is a $G$-set. These constructions are inverses of each other. $\blacksquare$ 

**Note on Conjugation:** Let $G$ act on $G$ by conjugation, where $g \cdot h = h^{-1} g h$. 
* **Triviality:** This action is trivial if and only if $G$ is abelian. Consequently, the action is non-trivial for any non-abelian group.
* **Faithfulness:** The kernel of this action is the center of the group, $Z(G)$. Therefore, the conjugation action is faithful if and only if the center is trivial (e.g., in non-abelian simple groups).
* **Transitivity & Regularity:** The conjugation action of a group on itself is never transitive (and thus never regular) for any non-trivial group. This is because the identity element $1$ always forms an isolated orbit of size 1, preventing any single orbit from covering the entire set $G$.

**Finite Sets, Faithfulness, and Embeddings:** 
Suppose $|X| = n < \infty$. Then $S_X \cong S_n$.
* A group $G$ acts faithfully on $X$ iff $G \lesssim S_n$.
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

Let $X$ be a $G$-set and $Y \subseteq X$. We say $Y$ is **$G$-invariant** if $yg \in Y$ for all $y \in Y$.

Define a relation on $X$ by $x \sim y$ if and only if there exists $g \in G$ such that $xg = y$. This is an equivalence relation, and the equivalence classes are called **$G$-orbits**. 

Let $O_x = Orb_G(x)$ denote the $G$-orbit containing $x$:
$$
O_x = \lbrace xg \mid g \in G \rbrace
$$ 

Properties of orbits:
1. $O_x = O_y \iff x \sim y$ 
2. $X = \bigcup_x O_x$ 
3. $O_x \neq O_y \iff O_x \cap O_y = \emptyset$ 

These three properties show that $G$-orbits form a partition of $X$. If $|X| < \infty$, then $|X| = \sum |O_x|$ where the sum runs over all distinct $G$-orbits.

> **Remark:** A subset $Y \subseteq X$ is $G$-invariant if and only if $Y$ is a union of $G$-orbits. Being $G$-invariant under the conjugation action is the same as being a normal subgroup ($H \trianglelefteq G$).

---

## Stabilizers and The Orbit-Stabilizer Theorem

For a $G$-set $X$ and $x \in X$, the **stabilizer** of $x$ in $G$ is a subgroup defined as:
$$
Stab_G(x) = \lbrace g \in G \mid x \cdot g = x \rbrace \le G
$$ 

If $\sigma: G \to S_X$ is the corresponding representation, then $\ker \sigma = \bigcap_{x \in X} Stab_G(x)$. Additionally, $Stab_G(xg) = g^{-1} Stab_G(x) g$.

**Orbit-Stabilizer Theorem:** Let $X$ be a $G$-set and let $x \in X$. Then:
$$
|O_x| = |G : Stab_G(x)|
$$ 

**Proof:** 
Set $H = Stab_G(x)$. Consider the map $\theta: \lbrace Hg \mid g \in G \rbrace \to O_x$ defined by $Hg \mapsto x \cdot g$. 
$\theta$ is well-defined and one-to-one because:
$$
Hg = Hk \iff g k^{-1} \in H \iff x \cdot (g k^{-1}) = x \iff x \cdot g = x \cdot k
$$ 
Clearly, $\theta$ is also onto. $\blacksquare$

> **Corollary:** Let $|X| = n$. If $G$ acts transitively on $X$, then $n = |G : Stab_G(x)|$. Thus, $G$ has a transitive action on a set of size $n$ if and only if $G$ has a subgroup of index $n$.

---

## $G$-Maps and Isomorphisms

Let $X$ and $Y$ be $G$-sets. A map $f: X \to Y$ is called a **$G$-map** if:
$$
f(xg) = f(x)g
$$ 
If $f$ is bijective, then $f$ is said to be a **$G$-isomorphism**, and $X$ and $Y$ are said to be $G$-isomorphic.

**Theorem:** Let $X$ be a transitive $G$-set, $x \in X$, and $H = Stab_G(x)$. Then $X$ is $G$-isomorphic to the set of right cosets $\lbrace Hg \mid g \in G \rbrace$, where $G$ acts on the cosets by right multiplication.

*(Note: Let $N \trianglelefteq G$ and $X$ be a $G$-set. Let $O_x = \lbrace xn \mid n \in N \rbrace$ be the $N$-orbit containing $x$. If $G$ acts transitively on $X$, then $G$ also acts transitively on the $N$-orbits via $O_x \cdot g = O_{xg}$).*
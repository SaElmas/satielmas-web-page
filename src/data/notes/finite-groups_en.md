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

---

## Examples of Group Actions

These examples complement the basic definitions of right group actions, orbits, stabilizers, faithful actions, transitive actions, and regular actions . Throughout, we use *right actions* . Thus, if a group $G$ acts on a set $X$, we write the action as $X \times G \to X$, $(x, g) \mapsto x \cdot g$, and the defining rule is $(x \cdot g) \cdot h = x \cdot (gh)$ .

### Permutation Actions
Let $H \le S_n$ . Then $H$ acts on the set $\Omega = \{1, 2, \dots, n\}$ by evaluation: $i \cdot \sigma = \sigma(i)$ for $i \in \Omega$, $\sigma \in H$ . This action is faithful, because if $\sigma \in H$ fixes every element of $\Omega$, then $\sigma = 1$ . 
* In particular, $S_n$ acts faithfully and transitively on $\{1, \dots, n\}$ . 
* **Example:** The subgroup $\langle (1 \, 2 \, \dots \, n) \rangle \cong C_n$ acts transitively on $\{1, \dots, n\}$, but it is not 2-transitive when $n > 2$ .

### The Regular Action
Every group $G$ acts on itself by right multiplication: $x \cdot g = xg$ for $x, g \in G$ . This action is called the *right regular action* .
* It is *transitive*: given $x, y \in G$, choosing $g = x^{-1}y$ gives $x \cdot g = y$ .
* It is *free*: if $x \cdot g = x$, then $xg = x$, so $g = 1$ . 
Hence the action is *regular* . 
* **Example:** The additive group $\mathbb{Z}_n$ acts regularly on the set $\mathbb{Z}_n$ by translations: $x \cdot a = x + a$ .

### $k$-Transitive Actions
Let $G$ act on a set $X$ . We say that the action is *$k$-transitive* if for any two ordered $k$-tuples $(x_1, \dots, x_k)$ and $(y_1, \dots, y_k)$ of elements of $X$ with $x_i \neq x_j$ and $y_i \neq y_j$ for $i \neq j$, there exists $g \in G$ such that $x_i \cdot g = y_i$ for $i = 1, \dots, k$ .
* $S_n$ acts $n$-transitively on $\{1, \dots, n\}$ .
* $A_n$ acts $(n-2)$-transitively on $\{1, \dots, n\}$ for $n \ge 4$ .
* **Example:** The action of $PGL(2, q)$ on the projective line $\mathbb{P}^1(\mathbb{F}_q)$ is sharply 3-transitive . This is a classical and very important example .

### A Subgroup Acting on the Group, and the Coset Action
Let $H \le G$ .
* **The subgroup $H$ acts on $G$ by right multiplication.** Define $x \cdot h = xh$ for $x \in G$, $h \in H$ . This action is faithful, and its orbits are the left cosets of $H$ in $G$ . Indeed, the orbit of $x \in G$ is $O_x = \{x \cdot h \mid h \in H\} = xH$ . Since right actions produce left cosets here, it is worth pointing this out explicitly .
* **The group $G$ acts on the set of right cosets of $H$.** Let $\Omega = \{Hg \mid g \in G\}$ . Define $(Hg) \cdot x = Hgx$ for $Hg \in \Omega$, $x \in G$ . Then $G$ acts transitively on $\Omega$ . 
  * The stabilizer of the point $Hg$ is $\text{Stab}_G(Hg) = \{x \in G \mid Hgx = Hg\} = g^{-1}Hg$ . Thus each point stabilizer is a conjugate of $H$ .
  * The kernel of this action is $\bigcap_{g \in G} g^{-1}Hg = \text{Core}_G(H)$, which is the largest normal subgroup of $G$ contained in $H$ . 
  * **Fact:** If $|G : H| = m$, then the coset action gives a homomorphism $G \to S_m$ with kernel $\text{Core}_G(H)$ . Hence $G / \text{Core}_G(H) \le S_m$, and therefore $|G : \text{Core}_G(H)|$ divides $m!$ .
  * **Consequence:** If $G$ is simple and $H < G$ has index $m$, then $\text{Core}_G(H) = 1$, and so $|G|$ divides $m!$ .

### Conjugation Actions
* **$G$ acts on itself by conjugation.** Define $x \cdot g = g^{-1}xg$ for $x, g \in G$ . Then the orbit of $x$ is its conjugacy class, $x^G = \{g^{-1}xg \mid g \in G\}$, and the stabilizer of $x$ is its centralizer, $\text{Stab}_G(x) = C_G(x)$ . Hence the orbit-stabilizer theorem yields $|x^G| = |G : C_G(x)|$ . The kernel of this action is $\bigcap_{x \in G} C_G(x) = Z(G)$ . Thus the action is faithful if and only if $Z(G) = 1$ .
* **$G$ acts on a normal subgroup $N \trianglelefteq G$ by conjugation.** This is just the restriction of the previous action, since $N$ is stable under conjugation .
* **$G$ acts on $G/N$ by conjugation when $N \trianglelefteq G$.** Define $(Nx) \cdot g = N(g^{-1}xg)$ . This is well-defined because $N$ is normal .

### The Action on the Set of Subgroups
The group $G$ acts on the set of all subgroups of $G$ by conjugation: $H \cdot g = g^{-1}Hg$ . 
* The fixed points of this action are exactly the normal subgroups of $G$ . 
* For a subgroup $H \le G$, the orbit is $O_H = \{g^{-1}Hg \mid g \in G\}$, that is, the set of all conjugates of $H$, and the stabilizer is the normalizer: $\text{Stab}_G(H) = N_G(H)$ .
* Therefore, $|O_H| = |G : N_G(H)|$, which is the number of distinct conjugates of $H$ .
* **Important special case:** If $X = \text{Syl}_p(G)$, then $G$ acts on $X$ by conjugation . The orbit of any Sylow $p$-subgroup is all of $X$, so $|\text{Syl}_p(G)| = |G : N_G(P)|$ for each $P \in \text{Syl}_p(G)$ . This is one of the standard action-theoretic proofs in Sylow theory .

### The Induced Action on the Power Set
Let $X$ be a $G$-set . Then the power set $\mathcal{P}(X)$ becomes a $G$-set via $Y \cdot g = \{y \cdot g \mid y \in Y\}$ for $Y \subseteq X$, $g \in G$ . This is well-defined, and $|Y \cdot g| = |Y|$ .
* **Examples:** If $G = S_n$ acts on $X = \{1, \dots, n\}$, then $G$ acts on the set of all $k$-subsets of $X$ . More generally, if $G$ acts on a graph by symmetries, then it acts on the set of vertices, the set of edges, and the set of subsets of vertices .

### Permuting Coordinates
Let $X$ be a set . Then $S_n$ acts on $X^n$ by permuting coordinates: $(x_1, \dots, x_n) \cdot \sigma = (x_{\sigma(1)}, \dots, x_{\sigma(n)})$ . This is a right action .
* **Observation:** The diagonal subset $\Delta = \{(x, x, \dots, x) \mid x \in X\}$ is fixed pointwise by this action .
* **Another useful invariant subset:** For any partition of $\{1, \dots, n\}$, one gets a corresponding subset of $X^n$ defined by equalities among coordinates, and such subsets are stabilized by suitable subgroups of $S_n$ .

### Linear Actions
The group $GL(n, \mathbb{R})$ acts naturally on $\mathbb{R}^n$ by right multiplication of row vectors: $x \cdot A = xA$ for $x \in \mathbb{R}^n, A \in GL(n, \mathbb{R})$ . Similarly, $GL(n, F)$ acts on $F^n$ for any field $F$ .
* **Interesting variant:** The same group acts on the set of all subspaces of $F^n$ . In particular, it acts transitively on the set of $k$-dimensional subspaces . This is one of the basic examples behind projective geometry .

### A Small but Instructive Action of $C_2$
Let $C_2 = \{0, 1\}$ under addition mod 2 . Then $C_2$ acts on $\mathbb{R}^n$ by $x \cdot 0 = x$, $x \cdot 1 = -x$ . This is a very simple example of a nontrivial linear action . The fixed point set is $\{x \in \mathbb{R}^n \mid -x = x\} = \{0\}$ .

### Automorphism Actions
For any group $G$, the automorphism group $\text{Aut}(G)$ acts on the underlying set of $G$ by evaluation: $x \cdot \alpha = \alpha(x)$ for $x \in G, \alpha \in \text{Aut}(G)$ . It also acts on many naturally associated sets :
* on the set of subgroups of $G$ ,
* on the set of normal subgroups of $G$ ,
* on the set of elements of a fixed order ,
* on the set of conjugacy classes of $G$ .
These actions are often very useful in finite group theory .

### Dihedral Symmetry of a Polygon
Let $D_{2n}$ be the dihedral group of order $2n$ . It acts on the set of vertices of a regular $n$-gon .
* This action is faithful and transitive .
* It is not regular, since reflections fix vertices (or edges, depending on the parity of $n$) .
This is a good geometric example to compare with the regular action of a group on itself .

### A Useful Action in Number Theory and Combinatorics
Let $C_n = \langle r \rangle$ act on the set of vertices of a regular $n$-gon by rotation . Then the orbits of subsets under this action are the objects counted by Burnside's lemma and Pólya theory . This is a nice reminder that group actions are not only algebraic tools: they are also basic counting devices .

> **Summary:** The most useful examples to keep in mind are:
> * the regular action of a group on itself ,
> * the action on cosets ,
> * the conjugation action on elements and on subgroups ,
> * permutation actions of $S_n$ and $A_n$ ,
> * linear actions of matrix groups .
>
> These examples already cover most of the applications that appear early in finite group theory .
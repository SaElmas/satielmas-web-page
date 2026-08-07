---
title: Hungerford Algebra
---

> **📚 Primary Reference**
> **Title:** _Algebra_ by Thomas W. Hungerford
> **Series:** Graduate Texts in Mathematics (Volume 73), Springer
> **Scope:** Selected exercise solutions and theoretical proofs.

# Chapter 1: Groups

## Section 1.1: Semigroups, Monoids and Groups

**Exercise 1.1.1:** Give examples other than those in the text of semigroups and monoids that are not groups.

**Solution:**

- Take $S = \{a, b, c\}$ and define the binary operation as $xy = x$ for any $x, y \in S$. This operation is associative, but the set does not have a two-sided identity. So, $(S, \cdot)$ is a **semigroup** but not a monoid.
- Let $\mathcal{B} = \{0, 1\}$ and define the operation as follows:

|   $+$   | $0$ | $1$ |
| :-----: | :-: | :-: |
| **$0$** | $0$ | $1$ |
| **$1$** | $1$ | $1$ |

$(\mathcal{B}, +)$ is a **monoid** (with identity $0$), but the element $1$ does not have an inverse, hence it is not a group.

---

**Exercise 1.1.2:** Let $G$ be a group (written additively), $S$ a nonempty set, and $M(S, G)$ the set of all functions $f: S \to G$. Define addition in $M(S, G)$ as $(f + g)(s) = f(s) + g(s)$. Prove that $M(S, G)$ is a group, which is abelian if $G$ is.

**Proof / Solution:**

**1. Non-emptiness:** $M(S, G)$ is not empty since the constant function $f(s) = 0_G$ for all $s \in S$ is in $M(S, G)$.

**2. Associativity:** Take $f, g, h \in M(S, G)$. For any $s \in S$:
$$[f+(g+h)] (s) = f(s) + (g(s) + h(s)) = (f(s) + g(s)) + h(s) = [(f+g) + h] (s)$$

**3. Identity:** The identity element is the constant function $f(s) = 0_G$. For any $g \in M(S, G)$:
$$(f+g)(s) = 0_G + g(s) = g(s) = g(s) + 0_G = (g+f)(s)$$

**4. Inverse:** For every $f \in M(S, G)$, define $g(s) = -f(s)$. Since $G$ is a group, $-f(s)$ is well-defined in $G$:
$$(f+g)(s) = f(s) + (-f(s)) = 0_G$$

Thus, $f+g$ is the identity function. As a result, $M(S, G)$ is a group. If $G$ is abelian, then $f(s) + g(s) = g(s) + f(s)$, making $M(S, G)$ abelian as well. $\blacksquare$

---

**Exercise 1.1.4:** If $G$ is a group such that $x^2 = e$ for all $x \in G$, prove that $G$ is abelian.

**Proof.**

Let $a, b \in G$. We want to show that $ab = ba$. By the given hypothesis, for any element in the group, its square is the identity $e$. Since $G$ is closed under its binary operation, the product $ab \in G$. Therefore, we have:

$$(ab)^2 = e \implies abab = e$$

To isolate the terms, we can multiply the equation on the left by $a$ and on the right by $b$:

$$a(abab)b = aeb \implies (a^2)ba(b^2) = ab$$

Since $a^2 = e$ and $b^2 = e$ by our initial hypothesis, the equation simplifies to:

$$ebae = ab \implies ba = ab$$

Since $a$ and $b$ were chosen arbitrarily from $G$, the group operation is commutative. Thus, $G$ is an abelian group. $\blacksquare$

---
title: Real Analysis
---


**Proposition** Every open set of $\mathbb{R}$ can be written as countable disjoint union of open intervals.

**Proof** Let $\mathcal{O}$ be an open set. Take any $x \in \mathcal{O}$ and define $I_x = \bigcup \lbrace (a,b) : x \in (a,b) \sub \mathcal{O} \rbrace$. $I_x$ is not empty because $\mathcal{O}$ is open, and it is an open interval as a union of open intervals. For any $x$ and $y$ in $\mathcal{O}$ if $I_x \cap I_y \neq \empty$ then $I_x = I_y$. Therefore $\mathcal{O} = \bigcup_{x \in \mathcal{O}} I_x$ is a disjoint union of open intervals. Define a map $\lbrace I_x \rbrace _{x \in \mathcal{O}} \to \mathbb{Q}$ that assigns each connected interval to a rational number contained in it. This function is injective and hence the cardinality of domain is less than or equal to the cardinality of $\mathbb{Q}$. Therefore $\mathcal{O}$ is a countable union of open intervals. $\blacksquare$

---

Let $X$ be a set, $\mathcal{M} = \mathcal{P}(X)$ and $f: X \to [0, \infty] $ be a function. Then
$$
\mu(E) = \sum_{x \in E}f(x)
$$
defines a measure on $\mathcal{M}$.

**Proposition** $\mu$ is $\sigma$-finite iff $\mu$ is semifinite and $\lbrace x : f(x) > 0\rbrace$ is countable

**Proof:** Let $E$ be a set with $\mu(E) = \infty$. Since $\mu$ is $\sigma$-finite $E$ is also $\sigma$-finite and there exists a sequence of sets $\{E_j\}$ such that, $E = \bigcup_{j=1}^{\infty}E_j$ where $\mu(E_j) < \infty$ for all $j$. Moreover at least one of the sets $E_j$ should have a positive measure otherwise the measure of $E$ could not be $\infty$. That is there exists a $k$ such that $0 < \mu(E_k) < \infty$ which makes $\mu$ a semifinite measure.

Let $E = \lbrace x : f(x) > 0\rbrace$ and define $E_n = \lbrace x : f(x) > \frac{1}{n} \rbrace$ Then $E = \bigcup E_n$. Since $\mu$ is $\sigma$-finite there is a sequence of sets $\lbrace X_j \rbrace$ where $X = \bigcup X_j$ and $\mu(X_j) < \infty$ for each $j$.For a fixed $j$ and $n$ $E_n \cap X_j$ has a finite measure and
$$
\mu(E_n \cap X_j) = \sum_{x \in E_n \cap X_j} f(x) \geq \sum_{x \in E_n \cap X_j}\frac{1}{n}
$$
If the set $E_n \cap X_j$ were infinite, the above sum yields to infinity which is not possible since $\mu(E_n \cap X_j) \leq \mu(X_j) < \infty$. Therefore it must be finite. Moreover $E_n = \bigcup_{j=1}^{\infty}E_n \cap X_j$ is a countable union of finite sets, and is therefore countable. Since $E$ is a countable union of countable sets it is also countable.

Conversely, assume that $\mu$ is a semifinite measure and the set $E = \lbrace x : f(x) > 0 \rbrace$ is countable. We want to show that $\mu$ is $\sigma$-finite. 

Since $E$ is countable, we can write its elements as a sequence, so $E = \bigcup_{n=1}^\infty \lbrace x_n \rbrace$. Let us check the measure of each singleton $\lbrace x_n \rbrace$. Suppose for the sake of contradiction that $\mu(\lbrace x_n \rbrace) = f(x_n) = \infty$ for some $n$. Since $\mu$ is semifinite, there must exist a subset $A \subset \lbrace x_n \rbrace$ such that $0 < \mu(A) < \infty$. However, the only subsets of a singleton are the empty set $\emptyset$ and the singleton itself. Since $\mu(\emptyset) = 0$, no such subset $A$ can exist. This is a contradiction. Therefore, we must have $\mu(\lbrace x_n \rbrace) = f(x_n) < \infty$ for all $n$.

Now, consider the complement of $E$, which is $X \setminus E$. For any $x \in X \setminus E$, we have $f(x) = 0$. Consequently, the measure of this complement is:

$$
\mu(X \setminus E) = \sum_{x \in X \setminus E} f(x) = 0 < \infty
$$

We can express the entire space $X$ as the disjoint union of $X \setminus E$ and the singletons from $E$:

$$
X = (X \setminus E) \cup \bigcup_{n=1}^\infty \lbrace x_n \rbrace
$$

Since $X$ is written as a countable union of sets ($X \setminus E$ and all $\lbrace x_n \rbrace$), each of which has finite measure, we conclude that $\mu$ is a $\sigma$-finite measure. $\blacksquare$

---

**Theorem** Let $(X, \mathcal{M}, \mu)$ be a measure space.
- **(Monotonicity)** If $E,F \in \mathcal{M}$ and $E \sub F$ then $\mu(E) \leq \mu(F)$
- **(Subadditivity)** If $\lbrace E_j \rbrace_{1}^{\infty} \sub \mathcal{M}$ then $\mu \big( \bigcup_{1}^{\infty} E_j \big) \leq \sum_{1}^{\infty} \mu(E_j)$
- **(Continuity from below)** If $\lbrace E_j \rbrace_{1}^{\infty} \sub \mathcal{M}$ and $E_1 \sub E_2 \sub \cdots $, then $\mu\big( \bigcup E_j \big) = \lim \mu(E_j)$
- **(Continuity from above)** If $\lbrace E_j \rbrace_{1}^{\infty} \sub \mathcal{M}$ and $E_1 \supset E_2 \supset \cdots $,and $\mu(E_j) < \infty$  then $\mu\big( \bigcap E_j \big) = \lim \mu(E_j)$

---


## Gerald B. Folland Real Analysis Solutions

### Section 1.2 $\sigma$-Algebras

**1.** A family of sets $\mathcal{R} \subset \mathcal{P}(X)$ is called a **ring** if it is closed under finite unions and differences (i.e., if $E_1,\ldots,E_n \in \mathcal{R}$, then $\bigcup_{j=1}^{n} E_j \in \mathcal{R}$, and if $E,F \in \mathcal{R}$, then $E \setminus F \in \mathcal{R}$). A ring that is closed under countable unions is called a **$\sigma$-ring**.

- (a) Rings (resp. $\sigma$-rings) are closed under finite (resp. countable) intersections.
- (b) If $\mathcal{R}$ is a ring (resp. $\sigma$-ring), then $\mathcal{R}$ is an algebra (resp. $\sigma$-algebra) iff $X \in \mathcal{R}$.
- (c) If $\mathcal{R}$ is a $\sigma$-ring, then $\{E \subset X : E \in \mathcal{R} \text{ or } E^c \in \mathcal{R}\}$ is a $\sigma$-algebra.
- (d) If $\mathcal{R}$ is a $\sigma$-ring, then $\{E \subset X : E \cap F \in \mathcal{R} \text{ for all } F \in \mathcal{R}\}$ is a $\sigma$-algebra.

**Solution** *For part (a) and (b) I will prove only $\sigma$-ring case, the countable case is very similar*

(a) Since $\bigcap\limits_{1}^{\infty} E_j = E_1 \setminus  \bigcup\limits_{2}^{\infty} \big( E_1 \setminus E_j \big)$ both countable and finite intersection are satisfied.


### Section 1.3 Meaures

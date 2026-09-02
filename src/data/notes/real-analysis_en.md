---
title: Real Analysis
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



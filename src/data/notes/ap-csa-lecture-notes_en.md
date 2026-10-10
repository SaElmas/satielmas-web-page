---
title: "AP Computer Science A: Lecture Notes"
description: "Lecture notes for AP Computer Science A: how Java runs, syntax, input/output, primitive types and their memory representation, type casting, operators, De Morgan's laws, operator precedence, and String methods."
category: "Computer Science"
date: "2026-10-10"
---

# AP Computer Science A: Lecture Notes

These are the notes of my AP Computer Science A lectures, in the order the topics were taught. AP CSA uses a *subset* of Java, so whenever a feature is outside that subset it is pointed out.

---

## Lecture 1: How Java Works, Syntax, and Primitive Types

### Write Once, Run Everywhere

In a compiled language such as C, the compiler translates the **high-level** source code into assembly and then into **low-level** machine code (an `.exe` file full of 0s and 1s). Machine code is a list of very small instructions for the processor, for example:

```
LOAD 2, R1
LOAD 4, R2
ADD
MOVE R3
```

The arithmetic-logic unit (ALU) of the CPU adds the contents of registers `R1` and `R2` and stores the result. Because these instructions belong to one specific processor family, the executable only runs on that kind of machine.

Java takes a different route:

| Step | File | What happens |
|---|---|---|
| 1 | `Test.java` | We write the source code. |
| 2 | `Test.class` | The Java compiler produces *bytecode*, which is not tied to any processor. |
| 3 | JVM | The **Java Virtual Machine** behaves like a virtual CPU. It runs the bytecode on the real processor (Intel, AMD, ARM, ...). |

Since every platform has its own JVM, the same `.class` file runs everywhere: *write once, run everywhere*.

> **Remark:** Java is a purely object-oriented language. Everything lives in **classes**.

### Syntax in Java

*Syntax* is the set of writing rules of a programming language.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

* `public` is an **access modifier** (the other one we will meet is `private`).
* `class Main` declares a class whose name is `Main`.
* Every class should be contained in a file with the same name: `Main` lives in `Main.java`.
* Every statement ends with a semicolon `;`.

### The main Method

```java
public static void main(String[] args)
```

Java starts the execution of a program with the `main` method.

### Printing: println and print

`System.out.println()` and `System.out.print()` are **methods**. A method is like a function in mathematics: if $f(x) = x^2 + 2$, then $f(2) = 6$. We give it an input and it does its job.

* `println` prints its argument and then moves to a new line.
* `print` prints its argument and stays on the same line.

```java
System.out.println("Hello World");
System.out.println("Hello World");
System.out.println("Hello World");
```

```
Hello World
Hello World
Hello World
```

```java
System.out.print("Hello World");
System.out.print("Hello World");
System.out.print("Hello World");
```

```
Hello WorldHello WorldHello World
```

> **Tip:** In many editors (for example VS Code) typing `sout` and pressing Tab expands to `System.out.println()`.

### Statements and the Three Kinds of Errors

A **computer program** is a list of instructions to be executed by a computer. In a programming language these instructions are called **statements**.

There are three kinds of errors:

1. **Syntax error:** the code breaks the writing rules, so it does not compile.
2. **Run-time error:** the code compiles, but crashes while running.
3. **Logical error:** the code runs, but produces the wrong result.

### Java Input / Output

* **Output:** `System.out.println()` and `System.out.print()`.
* **Input** from the console: the `Scanner` class.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number");
        int a = sc.nextInt();
        System.out.println("The square of your number is: " + (a * a));
    }
}
```

```
Enter a number
5
The square of your number is: 25
```

### Java Variables in the AP Subset

AP CSA uses three primitive types:

1. `int`: integers (whole numbers).
2. `double`: floating-point numbers (numbers with a decimal part).
3. `boolean`: `true` or `false`.

Java has more numeric types. Each one in the chain below is contained in the next one:

$$
\texttt{byte} \subset \texttt{short} \subset \texttt{int} \subset \texttt{long} \subset \texttt{float} \subset \texttt{double}
$$

From the integer types AP uses only `int`, and from the floating-point types only `double`. `boolean` stands apart from this chain.

### Integers Are Represented Exactly in Memory

Memory (RAM) is made of **bits**, and each bit is either 0 or 1.

* With 1 bit we can write $2^1 = 2$ different patterns: `0`, `1`.
* With 2 bits, $2^2 = 4$ patterns: `00`, `01`, `10`, `11`.
* With 3 bits, $2^3 = 8$ patterns: `000`, `001`, ..., `111`.

In general, **with $n$ bits we can represent $2^n$ different pieces of information.**

### The Binary Number System

In the decimal system $15 = 1 \times 10^1 + 5 \times 10^0$. The binary system works the same way with powers of 2:

$$
(101)_2 = 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 4 + 0 + 1 = 5
$$

Similarly $(111)_2 = 7$ and $(011)_2 = 3$.

### Negative Numbers: Two's Complement

To store negative numbers as well, half of the patterns are used for negative values. With 3 bits:

| Bits | Unsigned value | Two's complement value |
|---|---|---|
| `000` | 0 | 0 |
| `001` | 1 | 1 |
| `010` | 2 | 2 |
| `011` | 3 | 3 |
| `100` | 4 | -4 |
| `101` | 5 | -3 |
| `110` | 6 | -2 |
| `111` | 7 | -1 |

So 3 bits cover the range $[-4, 3]$. For an $n$-bit representation the integer range is:

$$
\left[ -\frac{2^n}{2}, \; \frac{2^n}{2} - 1 \right]
$$

### Overflow

In a 4-bit number system the range is $[-8, 7]$. What is $7 + 5$? The true answer, 12, is outside the range:

```
  0111   (7)
+ 0101   (5)
------
  1100   (-4 in two's complement)
```

This is an **overflow error**: the result does not fit, so we silently get a wrong number.

In Java an `int` has 32 bits (8 bits = 1 byte, so 4 bytes). Its range is therefore:

$$
\left[ -\frac{2^{32}}{2}, \; \frac{2^{32}}{2} - 1 \right] = [-2147483648, \; 2147483647]
$$

These two limits are available as `Integer.MIN_VALUE` and `Integer.MAX_VALUE`.

> **Summary:** Integers are exact, but they have limits.

### The double Type Cannot Be Represented Exactly

$1/3 = 0.333\ldots$ has infinitely many digits, but memory is finite. The stored value is cut off somewhere, so it is only an approximation. The same thing happens in binary for numbers like $0.1$.

Consequently, never compare floating-point numbers with `==`. Instead, think of $|x - y|$ as **the distance between $x$ and $y$** on the number line (for example $|7 - 4| = |4 - 7| = 3$). If this distance is smaller than a small **tolerance** $t$, we may assume the numbers are equal:

$$
|x - y| < t
$$

In Java the absolute value is `Math.abs()`:

```java
public class Main {
    public static void main(String[] args) {
        double x, y;
        x = 4.3;
        y = 3.1;
        double z = x - y;
        System.out.println(z == 1.2);
        System.out.println(Math.abs(z - 1.2) < 0.0001);
    }
}
```

```
false
true
```

> **Rule:** Never use `==` to test the equality of floating-point numbers.

### Boolean Variables

A `boolean` is either `true` or `false`. There are three operations on booleans: *and*, *or*, and *negation*.

**AND** (in Java: `&&`) is true only when both sides are true.

| A | B | A && B |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**OR** (in Java: `||`) is true when at least one side is true.

| A | B | A \|\| B |
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**NOT** (in Java: `!`) reverses the value.

| A | !A |
|---|---|
| T | F |
| F | T |

---

## Lecture 2: Variables, Type Casting, Arithmetic, and Three Basic Algorithms

### Variables in Java

A variable is a named box in memory whose value can change while the program runs.

```java
int a;
a = 3;
System.out.println(a);
a = 5;
System.out.println(a);
double d = 7.2;
System.out.println(a + d);
```

```
3
5
12.2
```

### Primitive Types

The primitive types we use are `int`, `double`, and `boolean`. `String` is **not** a primitive type.

### How to Create a Variable: Declaration and Initialization

**Declaration** introduces the variable, and **initialization** gives it its first value.

```java
int a;        // declaration
double d;
boolean b;

a = 5;        // initialization
d = 2.7;
b = true;
```

Both can be done at the same time:

```java
int a = 3;
```

The general patterns are:

```
Type identifier;
Type identifier = firstValue;
```

### Identifiers

All Java variables must be identified with unique names, called **identifiers**. They can be short (`x`, `y`) or descriptive (`age`, `sum`, `totalVolume`). Descriptive names make the code easier to understand and maintain.

The rules for naming variables:

* Names can contain letters, digits (0-9), underscores `_`, and dollar signs `$`.
* Names cannot begin with a digit. They begin with a letter (or with `$` or `_`).
* By convention names start with a lowercase letter, and they cannot contain whitespace.
* Names are **case-sensitive**: `apple` and `Apple` are different variables.
* Reserved words (Java keywords such as `int`, `boolean`, `for`, `if`, `while`, `do`, `double`) cannot be used as names.

### Naming Conventions

1. **camelCase:** `areaOfCircle` (this is the Java convention for variables).
2. **snake_case:** `area_of_circle`.

### Constants (final Variables)

Putting `final` in front of a declaration makes the variable a constant: its value cannot be changed afterwards.

```java
final double PI = 3.1415;
PI = 3.141526;   // error!
```

```java
public class Main {
    public static void main(String[] args) {
        final double taxRate = 0.13;

        double capital = 100.23;
        taxRate = 0.15;

        System.out.println("Tax you need to pay is: " + taxRate * capital);
    }
}
```

```
Main.java:7: error: cannot assign a value to final variable taxRate
```

> **Convention:** Final variables are written in capital letters, with underscores between words: `final double TAX_RATE = 0.13;`

### The String Type

Inside double quotes we write words (text):

```java
String name;
name = "Alice";
name = "Veli";
```

### Java Type Casting

Java is strict about types. A `boolean` cannot hold a number:

```java
boolean isSunny = false;
isSunny = 4;   // error: incompatible types: int cannot be converted to boolean
```

**Implicit conversion** (done automatically by Java) only happens when no information is lost:

* `int` to `double` is allowed:

```java
double d = 3;
System.out.print(d);   // 3.0
```

* `double` to `int` is **not** allowed, because the decimal part would be lost:

```java
int a;
a = 3.4;   // error: incompatible types: possible lossy conversion from double to int
```

### Explicit Type Casting (Conversion)

With the type-casting operators `(int)` and `(double)` we do the conversion ourselves.

```java
(int) 3.7      // 3   (truncation: the decimal part is thrown away, no rounding)
(double) 1     // 1.0
```

```java
int a = (int) 3.4;   // a is 3

int b;
double d = 7.218;
b = (int) d;         // b is 7
```

### Java Operators

We use four groups of operators:

* Arithmetic operators
* Assignment operators
* Comparison operators
* Logical operators

(Bitwise operators exist in Java, but they are not part of AP CSA.)

### Arithmetic Operators

| Operator | Name | Description | Example |
|---|---|---|---|
| `+` | Addition | Adds two values | `x + y` |
| `-` | Subtraction | Subtracts one value from another | `x - y` |
| `*` | Multiplication | Multiplies two values | `x * y` |
| `/` | Division | Divides one value by another | `x / y` |
| `%` | Modulus | Returns the remainder of the division | `x % y` |
| `++` | Increment | Increases the value of a variable by 1 | `x++` |
| `--` | Decrement | Decreases the value of a variable by 1 | `x--` |

The type of the result depends on the types of the two operands:

| Left operand | Right operand | Result |
|---|---|---|
| `double` | `double` | `double` |
| `int` | `double` | `double` (the `int` is converted to `double` first) |
| `double` | `int` | `double` (the `int` is converted to `double` first) |
| `int` | `int` | `int` |

`+`, `-`, and `*` work as usual. **Be careful with `/`:** when both operands are `int`, Java performs **integer division** and drops the decimal part.

```java
8 / 3      // 2
8.0 / 3    // 2.666...
```

The position of a cast matters:

```java
int a = 8;
int b = 3;

System.out.println((double) a / b);     // 8.0 / 3  -> 2.6666666666666665
System.out.println((double) (a / b));   // (double) 2 -> 2.0
```

### The Modulus Operator %

`a % b` is the remainder when `a` is divided by `b`.

```java
int a = 1378;
System.out.println(a % 10);   // 8    (the last digit)
System.out.println(a / 10);   // 137  (everything except the last digit)
```

### Increment and Decrement

`++` increases a variable by 1, and `--` decreases it by 1.

```java
int a = 4;
a++;
System.out.println(a);   // 5
```

### Three Basic Algorithms

#### 1. Swapping Values

A first attempt:

```java
int a = 8;
int b = 3;
a = b;
b = a;
System.out.println(a);
System.out.println(b);
```

Let us trace the program with a table:

| Statement | a | b | Output |
|---|---|---|---|
| start | 8 | 3 | |
| `a = b;` | 3 | 3 | |
| `b = a;` | 3 | 3 | |
| print | 3 | 3 | 3, 3 |

The value 8 is lost as soon as `a = b` runs. **How do we fix this?** We keep the old value of `a` in a temporary variable:

```java
int a = 8;
int b = 3;
int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b);
```

| Statement | a | b | temp | Output |
|---|---|---|---|---|
| start | 8 | 3 | | |
| `int temp = a;` | 8 | 3 | 8 | |
| `a = b;` | 3 | 3 | 8 | |
| `b = temp;` | 3 | 8 | 8 | 3 8 |

#### 2. Rounding

We want $2.7 \to 3$, $2.1 \to 2$, $2.5 \to 3$, $-1.2 \to -1$, and $-1.8 \to -2$.

Casting to `int` only truncates, so we first shift the number by $0.5$:

```java
double d = 2.5;
int a = (int) (d + 0.5);
System.out.println(a);   // 3
```

| d | d + 0.5 | (int)(d + 0.5) |
|---|---|---|
| 2.5 | 3.0 | 3 |
| 2.1 | 2.6 | 2 |
| 2.7 | 3.2 | 3 |

> **Rounding rule:**
> * For a **positive** number `d`: `(int) (d + 0.5)`
> * For a **negative** number `d`: `(int) (d - 0.5)`

#### 3. Getting the Digits of an Integer

The tools are `%` and `/` together with 10, 100, 1000. In 3276 the last digit is 6 and the first digit is 3.

```java
int a = 3276;
int d1 = a % 10;            // 6
int d2 = (a / 10) % 10;     // 7
int d3 = (a / 100) % 10;    // 2
int d4 = (a / 1000) % 10;   // 3
int sum = d1 + d2 + d3 + d4;   // 18
```

### Homework

1. Work through the *Java Operators* chapter on W3Schools and do all of the "Do It Yourself" boxes.
2. On OnlineGDB, write and run:
   * the swap algorithm,
   * the rounding algorithm,
   * a program that computes the sum of the digits of a 4-digit integer.

---

## Lecture 3: Assignment, Comparison, and Logical Operators; Strings

### Recap

* **Swap:** `a = b; b = a;` does not work. Use `temp = a; a = b; b = temp;`.
* **Digits:** `n % 10` is the last digit, then `(n / 10) % 10`, `(n / 100) % 10`, ...
* **Rounding** a `double` to an `int`: `(int) (d + 0.5)` for positive numbers and `(int) (d - 0.5)` for negative numbers.

### Assignment Operators

The assignment operator `=` takes the value on its right-hand side (RHS) and stores it in the variable on its left-hand side (LHS).

```java
int x = 5;   // correct
5 = x;       // error: the left-hand side must be a variable
```

| Operator | Example | Same as |
|---|---|---|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |

These are very common in loops, for example `for (int i = 0; i < 10; i += 2)`.

With them we can compute the sum of the digits of an integer of *any* length:

```java
int n = 123;   // or read from the user
int sum = 0;
while (n > 0) {
    sum += n % 10;
    n /= 10;
}
```

| n | sum |
|---|---|
| 123 | 0 |
| 12 | 3 |
| 1 | 5 |
| 0 | 6 |

The loop continues as long as `n > 0`, that is, as long as there are digits left.

### Comparison Operators

Comparison operators compare two values. The result of a comparison is a `boolean`: either `true` or `false`.

| Operator | Name | Example |
|---|---|---|
| `==` | Equal to | `x == y` |
| `!=` | Not equal | `x != y` |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |
| `>=` | Greater than or equal to | `x >= y` |
| `<=` | Less than or equal to | `x <= y` |

Here `!` is the *not* (negation) operator, so `!=` reads "not equal".

```java
int age = 18;

System.out.println(age >= 18);   // true, old enough to vote
System.out.println(age < 18);    // false
```

Mostly we use boolean expressions in `for`, `while`, and `if` blocks. The condition decides which branch runs:

```java
if (age < 18) {
    System.out.println("You can not vote!");
} else {
    // call the voting routine
}
```

> **Be careful:** We do not use `==` to compare real numbers (`double`). To decide whether two doubles `x` and `y` are equal, check whether the distance between them is below a tolerance: `Math.abs(x - y) < tolerance`.

### Logical Operators

| Operator | Name | Description | Example |
|---|---|---|---|
| `&&` | Logical and | True if both statements are true | `x < 5 && x < 10` |
| `\|\|` | Logical or | True if at least one of the statements is true | `x < 5 \|\| x < 4` |
| `!` | Logical not | Reverses the result | `!(x < 5 && x < 10)` |

```java
int x = 10;
int y = 5;

if (x > 5 || y < 5) {            // true || false  ->  true
    System.out.println("inside if");
}
```

Negating a comparison gives the opposite comparison: since `x >= y` is true here, `!(x < y)` is also true. They are the same condition.

```java
boolean isLoggedIn = true;
boolean isAdmin = false;

System.out.println("Regular user: " + (isLoggedIn && !isAdmin));   // true
System.out.println("Has access: " + (isLoggedIn || isAdmin));      // true
System.out.println("Not logged in: " + (!isLoggedIn));             // false

if (!isAdmin) {
    System.out.println("Not authorized user!");
}
```

### De Morgan's Laws

Negating a comparison:

* `!(a > b)` is equivalent to `a <= b`
* `!(a < b)` is equivalent to `a >= b`
* `!(a == 10)` is equivalent to `a != 10`

Negating a compound expression: **distribute the `!` and switch the operator** (`||` becomes `&&`, and `&&` becomes `||`).

* `!(x || y)` is equivalent to `!x && !y`
* `!(x && y)` is equivalent to `!x || !y`

**Examples:**

1. `!(!x || !y)` is equivalent to `x && y`.

2. `!((x || y) && (!x || z))`
   * `!(x || y) || !(!x || z)`
   * `(!x && !y) || (x && !z)`

3. `!((a < b) || (b != 10))`
   * `!(a < b) && !(b != 10)`
   * `a >= b && b == 10`

4. `if (!(score >= 60 || homeworkMissing))` is the same as `if (score < 60 && !homeworkMissing)`.

### Operator Precedence

When a calculation contains more than one operator, Java follows *order of operations* rules. From highest to lowest precedence:

1. `()` parentheses
2. `!` logical not
3. `*`, `/`, `%`
4. `+`, `-`
5. `>`, `<`, `>=`, `<=`
6. `==`, `!=`
7. `&&`
8. `||`
9. `=` assignment

An easy way to remember the order is **A-C-L-A**: **A**rithmetic, **C**omparison, **L**ogical, **A**ssignment.

Operators with the same precedence are evaluated from left to right:

$$
5 - 7 - 3 = (5 - 7) - 3 = -5 \quad \text{and not} \quad 5 - (7 - 3) = 1
$$

> **Advice:** When in doubt, make the order explicit with parentheses. `x >= 10 == y <= 5` is evaluated as `(x >= 10) == (y <= 5)`, and the second form is much easier to read.

**Example 1:**

```java
System.out.println(3 + 4 * 2 > 10 && 5 % 2 == 1);
```

`3 + 4 * 2` is 11 and `11 > 10` is true. `5 % 2` is 1 and `1 == 1` is true. So the output is `true`.

**Example 2:**

```java
boolean x = true;
boolean y = false;
boolean z = true;

System.out.println(!(x && y) && !(y || !z));
```

`x && y` is false, so `!(x && y)` is true. `y || !z` is `false || false`, which is false, so `!(y || !z)` is true. The output is `true`.

**Example 3:**

```java
int x = 3;
int y = 5;

boolean b = x + y * 2 > 12 && !(x == 3 || y == 4);
System.out.println(b);
```

`x + y * 2` is 13 and `13 > 12` is true. `x == 3 || y == 4` is `true || false`, which is true, so its negation is false. `true && false` gives the output `false`.

### Java Strings

Strings are used for storing text. A `String` variable contains a collection of characters surrounded by double quotes:

```java
String name = "Alice in Wonderland";
name = "Alice";
```

`String` is a non-primitive type (a **reference type**). A String is an object of a class, so it has **methods**. We reach the methods of the `String` class with the dot operator: `name.someMethod()`.

The String methods in the AP subset are:

* `length()`
* `substring(from)` and `substring(from, end)`
* `indexOf(target)`
* `compareTo(other)`
* `equals(other)`

### length()

`length()` returns the length of a string as an `int`.

```java
String bookName = "Alice in Wonderland";
System.out.println(bookName.length());   // 19 (spaces are counted too)

String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());   // 26
```

### toUpperCase() and toLowerCase()

```java
String txt = "Hello World";
System.out.println(txt.toUpperCase());   // "HELLO WORLD"
System.out.println(txt.toLowerCase());   // "hello world"
```

> **Note:** These two methods are *not* in the AP subset, but in general they are useful for verifying user input. The user might type `yes`, `Yes`, or `YES`:
>
> ```java
> if (answer.toLowerCase().equals("yes")) {
>     // ...
> }
> ```

### substring(int from)

`substring(from)` returns the part of the string that starts at index `from` and goes to the end. Indices start at 0.

```java
//             0123456
String word = "abc def";
System.out.println(word.substring(2));   // "c def"
String word2 = word.substring(4);        // word2 is equal to "def"
```

The index must satisfy $0 \le \text{from} \le \text{length}$:

* `substring(0)` is a copy of the whole string,
* `substring(word.length())` is the empty string `""`.

Outside these limits we get a run-time error:

```
java.lang.StringIndexOutOfBoundsException
```

### substring(int from, int end)

`substring(from, end)` returns the part from index `from` (**included**) up to index `end` (**excluded**).

```java
//             0123456
String word = "abc def";
String w2 = word.substring(1, 5);   // w2 is equal to "bc d"
```

The indices must satisfy $0 \le \text{from} \le \text{end} \le \text{length}$:

* if `from == end`, it returns the empty string `""`,
* if `from > end`, or an index is outside the string, it throws `StringIndexOutOfBoundsException`.

### How to Traverse a String

To *traverse* a string means to visit all of its elements one by one. We do it with a loop:

```java
for (int i = 0; i < word.length(); i++) {
    String ch = word.substring(i, i + 1);   // this gives us the i-th character
}
```

### indexOf(String target)

`word.indexOf(target)` searches for `target` inside `word` and returns an integer: the index of the **first match**, or `-1` if there is no match.

```java
String name = "Introduction to Datastructures";

System.out.println(name.indexOf("to"));    // 13
System.out.println(name.indexOf("tr"));    // 2  (the first match)
System.out.println(name.indexOf("tcc"));   // -1 (no match)
```

**Example:**

```java
if (email.indexOf("@") == -1) {
    System.out.println("Not a valid email address!");
}
```

### compareTo(String other)

Every character has a numeric code (see the ASCII table). The codes are ordered as follows:

$$
[\texttt{0} \dots \texttt{9}] \; < \; [\texttt{A} \dots \texttt{Z}] \; < \; [\texttt{a} \dots \texttt{z}]
$$

`w1.compareTo(w2)` compares two strings in dictionary order based on these codes and returns an integer:

* a **negative** number if `w1` comes before `w2`,
* **zero** if `w1` and `w2` are the same,
* a **positive** number if `w1` comes after `w2`.

At the first position where the two strings differ, the result is the difference of the numeric codes of the two characters.

```java
String w1 = "abc";

System.out.println(w1.compareTo("bcd"));    // negative: 'a' comes before 'b'
System.out.println(w1.compareTo("aBc"));    // positive: 'b' comes after 'B'
System.out.println(w1.compareTo("0ccc"));   // positive: 'a' comes after '0'
```

### String Equality Check (Do Not Use ==)

```java
String w1 = "abc";
String w2 = new String("abc");

System.out.println(w1 == w2);                 // false
System.out.println(w1.equals(w2));            // true
System.out.println(w1.compareTo(w2) == 0);    // true
```

A String variable does not hold the text itself. It holds the **address** of the place in memory where the text is stored. Here `w1` and `w2` point to two different objects that both contain `abc`. The `==` operator checks whether the **addresses** are the same, so it returns `false`.

Sometimes `==` *appears* to work:

```java
String w1 = "abc";
String w2 = "abc";
System.out.println(w1 == w2);   // prints true, but...
```

This prints `true` only because Java stores identical string literals once, so both variables happen to point to the same object. We cannot rely on this.

> **Rule:** Always compare strings with `equals()` (or with `compareTo() == 0`), never with `==`.

---

## Quiz: Lectures 1-3

25 multiple-choice questions in the style of the AP Computer Science A exam. Each question has exactly one correct answer. No calculator and no computer: trace the code by hand, as you will on the exam. Suggested time: 45 minutes. The answer key is at the end of the page.

**1.** What is printed as a result of executing the following code segment?

```java
System.out.print("AP");
System.out.println("CS");
System.out.print("A");
```

- **(A)** `APCSA` on a single line
- **(B)** `APCS` on the first line and `A` on the second line
- **(C)** `AP` on the first line and `CSA` on the second line
- **(D)** `AP`, `CS`, and `A` on three separate lines

**2.** Which of the following best describes how a Java program is run?

- **(A)** The source code is translated directly into machine code for one specific processor.
- **(B)** The source code is executed line by line by the operating system without being compiled.
- **(C)** The compiler translates the source code into bytecode, which is then executed by the Java Virtual Machine.
- **(D)** The Java Virtual Machine translates the bytecode back into source code and then executes it.

**3.** A student writes a program that is supposed to print the average of three test scores. The program compiles and runs without crashing, but it divides the sum of the scores by 2 instead of 3. Which kind of error is this?

- **(A)** A syntax error
- **(B)** A run-time error
- **(C)** An overflow error
- **(D)** A logic error

**4.** What is the value of the following expression?

```java
7 / 2 * 2.0
```

- **(A)** `6.0`
- **(B)** `7.0`
- **(C)** `6`
- **(D)** `7`

**5.** What is printed as a result of executing the following code segment?

```java
double result = (double) (7 / 2) + 7 / 2.0;
System.out.println(result);
```

- **(A)** `7.0`
- **(B)** `6.0`
- **(C)** `6.5`
- **(D)** `3.5`

**6.** What is printed as a result of executing the following code segment?

```java
int x = 17;
System.out.println(x % 5 + x / 5);
```

- **(A)** `3`
- **(B)** `5`
- **(C)** `5.4`
- **(D)** `7`

**7.** Consider the following three statements.

```java
int a = 3.0;          // Statement I
double d = 5;         // Statement II
int b = (int) 4.9;    // Statement III
```

Which of the statements compile without error?

- **(A)** I only
- **(B)** II only
- **(C)** I and II only
- **(D)** II and III only

**8.** Assume that `d` is a `double` variable holding a **negative** value. Which of the following expressions evaluates to `d` rounded to the nearest integer?

- **(A)** `(int) (d - 0.5)`
- **(B)** `(int) (d + 0.5)`
- **(C)** `(int) d - 1`
- **(D)** `(int) d + 0.5`

**9.** What is printed as a result of executing the following code segment?

```java
int a = 4;
int b = 9;
a = b;
b = a;
System.out.println(a + " " + b);
```

- **(A)** `4 9`
- **(B)** `9 4`
- **(C)** `9 9`
- **(D)** `4 4`

**10.** What is printed as a result of executing the following code segment?

```java
int n = 5283;
System.out.println(n % 100 / 10);
```

- **(A)** `2`
- **(B)** `3`
- **(C)** `5`
- **(D)** `8`

**11.** What is the value of `x` after the following code segment is executed?

```java
int x = 10;
x += 5;
x /= 4;
x *= 2;
x %= 4;
```

- **(A)** `2`
- **(B)** `3`
- **(C)** `6`
- **(D)** `7`

**12.** What is printed as a result of executing the following code segment?

```java
int n = 5072;
int count = 0;
while (n > 0) {
    if (n % 10 > 4) {
        count++;
    }
    n /= 10;
}
System.out.println(count);
```

- **(A)** `1`
- **(B)** `2`
- **(C)** `3`
- **(D)** `4`

**13.** What is printed as a result of executing the following code segment?

```java
int x = Integer.MAX_VALUE;
x = x + 1;
System.out.println(x == Integer.MIN_VALUE);
```

- **(A)** Nothing is printed, because the code does not compile.
- **(B)** Nothing is printed, because a run-time error occurs.
- **(C)** `true`
- **(D)** `false`

**14.** A certain system stores integers with 8 bits using two's complement. What is the range of values that can be stored?

- **(A)** 0 to 255
- **(B)** -128 to 127
- **(C)** -127 to 128
- **(D)** -256 to 255

**15.** Assume that `a` and `b` are `double` variables that hold the results of earlier calculations. Which of the following is the most appropriate way to test whether they should be considered equal?

- **(A)** `a == b`
- **(B)** `a.equals(b)`
- **(C)** `(int) a == (int) b`
- **(D)** `Math.abs(a - b) < 0.0001`

**16.** Consider the following declarations and expressions.

```java
int x = 7;
int y = 3;
```

I. `x > 5 || y > 5`

II. `!(x < y) && y != 3`

III. `x % y == 1 && x / y == 2`

Which of the expressions evaluate to `true`?

- **(A)** I only
- **(B)** I and II only
- **(C)** I and III only
- **(D)** I, II, and III

**17.** Assume that `a` and `b` are `int` variables. Which of the following is equivalent to the expression below?

```java
!(a >= 5 && b != 0)
```

- **(A)** `a < 5 || b == 0`
- **(B)** `a < 5 && b == 0`
- **(C)** `a <= 5 || b == 0`
- **(D)** `a >= 5 || b != 0`

**18.** Assume that `x` and `y` are `boolean` variables. Which of the following is equivalent to the expression below?

```java
!(x || !y)
```

- **(A)** `!x || y`
- **(B)** `!x && y`
- **(C)** `x && !y`
- **(D)** `!x && !y`

**19.** What is the value of the following expression?

```java
2 + 3 * 4 % 5 - 1
```

- **(A)** `-1`
- **(B)** `0`
- **(C)** `1`
- **(D)** `3`

**20.** What is printed as a result of executing the following code segment?

```java
String s = "Computer Science";
System.out.println(s.substring(3, 7));
```

- **(A)** `pute`
- **(B)** `puter`
- **(C)** `mput`
- **(D)** `mpute`

**21.** What is printed as a result of executing the following code segment?

```java
String s = "banana";
System.out.println(s.indexOf("an") + s.indexOf("x"));
```

- **(A)** `-1`
- **(B)** `1`
- **(C)** `0`
- **(D)** `2`

**22.** Consider the following declaration.

```java
String s = "java";
```

Which of the following method calls causes a `StringIndexOutOfBoundsException`?

- **(A)** `s.substring(4)`
- **(B)** `s.substring(0, 4)`
- **(C)** `s.substring(2, 2)`
- **(D)** `s.substring(3, 5)`

**23.** What does the following method call return?

```java
"apple".compareTo("Apple")
```

- **(A)** A negative number
- **(B)** A positive number
- **(C)** Zero
- **(D)** Nothing, because the call causes a run-time error

**24.** What is printed as a result of executing the following code segment?

```java
String a = "cs";
String b = new String("cs");
System.out.println((a == b) + " " + a.equals(b));
```

- **(A)** `false true`
- **(B)** `true true`
- **(C)** `true false`
- **(D)** `false false`

**25.** What is printed as a result of executing the following code segment?

```java
String s = "abcde";
String r = "";
for (int i = 0; i < s.length(); i += 2) {
    r = s.substring(i, i + 1) + r;
}
System.out.println(r);
```

- **(A)** `ace`
- **(B)** `edcba`
- **(C)** `eca`
- **(D)** `bd`

---

## Programming Exercises

Write each program in Java using only the tools from Lectures 1-3. Write your solution on paper first, trace it with a table, and only then type and run it.

### Exercise 1: Seconds to Hours, Minutes, Seconds

Read a non-negative integer `totalSeconds` from the user and print the same duration in hours, minutes, and seconds, using only the `/` and `%` operators.

```
Input:  3725
Output: 1 hour(s) 2 minute(s) 5 second(s)
```

### Exercise 2: Reversing a Four-Digit Number

Read a four-digit positive integer `n` and build its reverse as a new `int` (not as a `String`). Print the reverse, and print whether `n` is a palindrome, that is, whether it is equal to its own reverse.

```
Input:  3276        Input:  4554
Output: 6723        Output: 4554
        false               true
```

### Exercise 3: Rounding to Two Decimal Places

Read a positive `double` called `price` and print it rounded to two decimal places **without** using `Math.round()` or any formatting method. Use only arithmetic and type casting.

```
Input:  12.3456     Input:  7.996
Output: 12.35       Output: 8.0
```

*Hint:* how did we round to the nearest whole number? What happens if you first multiply by 100?

### Exercise 4: Splitting an Email Address

Read a `String` called `email`. If it does not contain the character `@`, or if `@` is its first or its last character, print `Invalid email address`. Otherwise print the user name (the part before `@`) and the domain (the part after `@`) on separate lines.

```
Input:  student@school.edu      Input:  school.edu
Output: student                 Output: Invalid email address
        school.edu
```

### Exercise 5: Counting a Letter

Read a `String` called `text` and a one-letter `String` called `target`. Traverse `text` with a loop and print how many times `target` appears in it. Remember how strings must be compared.

```
Input:  text = "mississippi", target = "s"
Output: 4
```

Then extend your program so that it also prints the index of the **last** occurrence of `target`, or `-1` if it never appears. (For the input above the answer is `6`.)

---

## Quiz Answer Key

<details>
<summary><strong>Click to show the answers</strong></summary>

| Question | Answer | Why |
|---|---|---|
| 1 | B | `print` stays on the line, and `println` ends the line after `CS`. |
| 2 | C | `.java` is compiled to bytecode (`.class`), and the JVM runs it. |
| 3 | D | The program runs but gives a wrong result. |
| 4 | A | `7 / 2` is integer division, 3, and then `3 * 2.0` is `6.0`. |
| 5 | C | `(double) (7 / 2)` is `3.0` and `7 / 2.0` is `3.5`. |
| 6 | B | `17 % 5` is 2 and `17 / 5` is 3. |
| 7 | D | A `double` cannot be stored in an `int` without a cast. |
| 8 | A | For negative numbers we subtract 0.5 before truncating. |
| 9 | C | After `a = b` the value 4 is lost, so both are 9. |
| 10 | D | `n % 100` is 83, and `83 / 10` is 8. |
| 11 | A | 10, 15, 3, 6, and finally `6 % 4` is 2. |
| 12 | B | The digits are 2, 7, 0, 5, and two of them (7 and 5) are greater than 4. |
| 13 | C | The value overflows and wraps around to `Integer.MIN_VALUE`. |
| 14 | B | With 8 bits the range is $[-2^8/2, \; 2^8/2 - 1]$. |
| 15 | D | Doubles are compared with a tolerance. |
| 16 | C | In II, `y != 3` is false. |
| 17 | A | De Morgan: "and" becomes "or", `>=` becomes `<`, and `!=` becomes `==`. |
| 18 | B | De Morgan gives `!x && !(!y)`, which is `!x && y`. |
| 19 | D | `3 * 4` is 12, `12 % 5` is 2, and `2 + 2 - 1` is 3. |
| 20 | A | Indices 3, 4, 5, 6 are `p`, `u`, `t`, `e`. Index 7 is excluded. |
| 21 | C | The first match of `an` is at index 1, and no match gives -1. |
| 22 | D | The end index 5 is greater than the length 4. |
| 23 | B | Lowercase letters come after uppercase letters. |
| 24 | A | `==` compares addresses, and `equals` compares the text. |
| 25 | C | The letters `a`, `c`, `e` are each added to the **front** of `r`. |

</details>

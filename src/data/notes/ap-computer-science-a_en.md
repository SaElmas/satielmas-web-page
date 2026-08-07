### Exercise 1: Sum of the Digits of a Number

**Tested Topics:** `while` loop, Modulus (`%`) and Division (`/`) operators, Variables.

Write a Java program that calculates the sum of the digit values of a given positive integer.

- **Sample Input:** `int sayi = 8452;`
- **Expected Output:** `Basamak toplami: 19` (Because 8 + 4 + 5 + 2 = 19)

<details>
    <summary> Click for the <b>hint</b></summary>
        To find the last digit of a number, you can take the remainder when the number is divided by 10 (`% 10`), and to discard the last digit, you can divide the number by 10 (`/ 10`). You should set up a `while` loop until the number becomes 0.
</details>

---

### Exercise 2: 6-Digit Password Validator

**Tested Topics:** `if/else` conditions, Modulus (`%`), Division (`/`), Logical operators (`&&`, `==`).

Write a Java program that validates an integer `password` based on specific security conditions. The password is considered valid only if it meets all of the following criteria simultaneously:
1. It must be a 6-digit number (between 100000 and 999999, inclusive).
2. The sum of the digits in the odd positions (1st, 3rd, and 5th digits from left to right) must be equal to the sum of the digits in the even positions (2nd, 4th, and 6th digits from left to right) **modulo 6** (meaning both sums must yield the exact same remainder when divided by 6).

* **Sample Input 1:** `int password = 354712;`
* **Expected Output 1:** `Password accepted: true` (Odd position sum: 3+4+1=8 -> 8 % 6 = 2. Even position sum: 5+7+2=14 -> 14 % 6 = 2. They match!)
* **Sample Input 2:** `int password = 123456;`
* **Expected Output 2:** `Password accepted: false` (Odd position sum: 1+3+5=9 -> 9 % 6 = 3. Even position sum: 2+4+6=12 -> 12 % 6 = 0. They do not match.)
* **Sample Input 3:** `int password = 5821;`
* **Expected Output 3:** `Password accepted: false` (It is not a 6-digit number)

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** First, use `>=` and `<=` to check if the number is within the 6-digit range. To isolate each digit mathematically without using Arrays or Strings, you can repeatedly use the modulus (`% 10`) to get the rightmost digit, and division (`/ 10`) to strip it away. For example, `digit6 = password % 10`, then update `password = password / 10`, followed by `digit5 = password % 10`, and so on. Calculate your two sums, and finally evaluate `(sumOdd % 6) == (sumEven % 6)`.

</details>

---

### Exercise 3: Palindrome Word Check

**Tested Topics:** `String` methods (`length()`, `substring()` or `charAt()`), `for` loop, `if/else` conditions.

Write a code that checks whether a given word is a palindrome (whether it reads the same backwards as forwards). Letter casing should not matter (case-insensitive).

- **Sample Input 1:** `String kelime = "Kavak";`
- **Expected Output 1:** `Kavak bir palindromdur: true`
- **Sample Input 2:** `String kelime = "Java";`
- **Expected Output 2:** `Java bir palindromdur: false`
- **Hint:** You can create an empty `String` variable and add to it by scanning the original word from end to beginning using a `for` loop. Finally, compare them using the `.equals()` or `.equalsIgnoreCase()` method.

---

### Exercise 4: Drawing Shapes with Nested Loops (6-Part Masterclass)

**Tested Topics:** Nested `for` loops, mathematical relationships between loop variables, the difference between `System.out.print()` and `System.out.println()`.

Write a Java program that takes an integer `satirSayisi` (number of rows) and uses nested loops to print 6 different star (`*`) pyramid patterns on the screen.

* **Sample Input:** `int satirSayisi = 5;`
* **Expected Output:**

**Part A: Left-Aligned Increasing**
```text
*
**
***
****
*****
```

**Part B: Left-Aligned Decreasing**
```text
*****
****
***
**
*
```

**Part C: Right-Aligned Increasing**
```text
    *
   **
  ***
 ****
*****
```

**Part D: Right-Aligned Decreasing**
```text
*****
 ****
  ***
   **
    *
```

**Part E: Full Pyramid (Centered)**
```text
    *
   ***
  *****
 *******
*********
```

**Part F: Inverted Full Pyramid (Centered)**
```text
*********
 *******
  *****
   ***
    *
```

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:**
  * For **Part A & B**, you only need two loops: an outer loop for the rows and one inner loop to print the stars.
  * For **Part C & D**, you need three loops: an outer loop for the rows, a first inner loop to print the spaces (`" "`), and a second inner loop to print the stars (`"*"`).
  * For **Part E & F**, the logic is similar to C & D, but the number of stars follows an odd-number sequence (1, 3, 5, 7...). You can calculate the number of stars for a given row `i` using the formula `(2 * i) - 1`.
  * Always remember to use an empty `println()` at the very end of your outer loop to move to the next row before the next iteration begins.

</details>

---


### Exercise 5: Email Domain Extractor

**Tested Topics:** `String` methods (`indexOf()`, `substring()`, `length()`), `if/else` conditions.

Write a Java program that takes a `String` representing an email address and extracts the domain name (the part immediately following the `@` symbol). If the string does not contain an `@` symbol, the program should print an error message.

* **Sample Input 1:** `String email = "student@school.edu";`
* **Expected Output 1:** `Domain: school.edu`
* **Sample Input 2:** `String email = "admin@company.com";`
* **Expected Output 2:** `Domain: company.com`
* **Sample Input 3:** `String email = "invalid-email.org";`
* **Expected Output 3:** `Error: Invalid email format.`

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** Use `email.indexOf('@')` to find the position of the "at" symbol. Remember that if a character is not found, `indexOf()` returns `-1`. If it is found, use `email.substring()` starting from the index *just after* the `@` symbol to extract the rest of the string.

</details>

---

### Exercise 6: Security Clearance System (De Morgan's Sandbox)

**Tested Topics:** `boolean` variables, Complex logical operators (`&&`, `||`, `!`), short-circuit evaluation.

Write a Java program that determines if an employee is granted access to a server room based on three `boolean` variables: `hasBadge`, `isAdmin`, and `isWeekend`. 

The system grants access **ONLY IF**:
1. The employee is an Admin (`isAdmin` is true). 
2. **OR**, the employee has a badge (`hasBadge` is true) **AND** it is NOT the weekend (`!isWeekend`).

* **Sample Input 1:** `boolean hasBadge = true; boolean isAdmin = false; boolean isWeekend = true;`
* **Expected Output 1:** `Access Granted: false`
* **Sample Input 2:** `boolean hasBadge = false; boolean isAdmin = true; boolean isWeekend = true;`
* **Expected Output 2:** `Access Granted: true` (Admins can enter anytime, even without a badge)
* **Sample Input 3:** `boolean hasBadge = true; boolean isAdmin = false; boolean isWeekend = false;`
* **Expected Output 3:** `Access Granted: true` (Regular employee on a weekday)

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** You can evaluate this entire logic in a single `boolean` expression. Think about how to group the conditions using parentheses. Your logic should look something like: `boolean access = (...) || (... && ...);`

</details>

---

### Exercise 7: Floating-Point Equality (Double Tolerance)

**Tested Topics:** `double` data type, `Math.abs()`, `if/else` conditions, Floating-point precision.

Write a Java program that checks if two `double` variables are considered "equal" within a specified error margin (often called *epsilon* or *tolerance*). Due to how computers store floating-point numbers in memory, mathematical operations can result in tiny precision errors (for example, in Java, `0.1 + 0.2` actually evaluates to `0.30000000000000004`). Because of this, you cannot reliably use the `==` operator to compare two doubles. 

Instead, your program should check if the absolute difference between the two numbers is less than or equal to a given `tolerance` variable.

* **Sample Input 1:** `double num1 = 0.3; double num2 = 0.1 + 0.2; double tolerance = 0.0001;`
* **Expected Output 1:** `Equal: true` (The precision error is microscopic, well within the 0.0001 tolerance)
* **Sample Input 2:** `double num1 = 3.55; double num2 = 3.56; double tolerance = 0.001;`
* **Expected Output 2:** `Equal: false` (The absolute difference is 0.01, which is larger than the 0.001 tolerance)
* **Sample Input 3:** `double num1 = 10.0; double num2 = 10.005; double tolerance = 0.01;`
* **Expected Output 3:** `Equal: true` (The difference of 0.005 is strictly less than the 0.01 tolerance)

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** Never use `num1 == num2` for calculated doubles. Instead, use the built-in `Math.abs(num1 - num2)` method to calculate the positive difference between the two numbers, regardless of which one is larger. Then, use the `<=` operator to compare that absolute difference against your `tolerance` variable.

</details>

---

### Exercise 8: Half of the Reversed Integer

**Tested Topics:** `while` loop, Modulus (`%`) and Division (`/`) operators, Arithmetic algorithms, `double` casting.

Write a Java program that takes a positive integer, mathematically reverses the order of its digits to form a new integer, and then prints exactly half of that reversed number as a decimal. 

* **Sample Input 1:** `int num = 1234;`
* **Expected Output 1:** `Reversed: 4321, Half: 2160.5`
* **Sample Input 2:** `int num = 405;`
* **Expected Output 2:** `Reversed: 504, Half: 252.0`
* **Sample Input 3:** `int num = 700;`
* **Expected Output 3:** `Reversed: 7, Half: 3.5` (Note: Reversing 700 mathematically yields 007, which evaluates to the integer 7).

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** To build the reversed number mathematically, declare a `reversedNum` variable initialized to `0`. Use a `while` loop that runs as long as your original number is greater than `0`. Inside the loop, multiply `reversedNum` by 10, then add the last digit of the original number (`num % 10`). Finally, strip the last digit off the original number (`num / 10`). When dividing the final reversed number by two, ensure you divide by `2.0` or cast it as a `(double)` so Java doesn't truncate the decimal!

</details>

---

### Exercise 9: Average Grade Calculator & Manual Rounding

**Tested Topics:** Explicit Type Conversions (`(int)` and `(double)` casting), Integer Division, Manual Rounding.

Write a Java program that takes a student's total accumulated points (`int`) and the number of tests they have taken (`int`). First, calculate their exact decimal average. Then, manually round that average to the nearest whole number without using any built-in math functions (like `Math.round()`). 

* **Sample Input 1:** `int totalScore = 263; int numTests = 3;`
* **Expected Output 1:** `Exact Average: 87.66666666666667, Rounded Grade: 88`
* **Sample Input 2:** `int totalScore = 170; int numTests = 4;`
* **Expected Output 2:** `Exact Average: 42.5, Rounded Grade: 43`
* **Sample Input 3:** `int totalScore = 250; int numTests = 3;`
* **Expected Output 3:** `Exact Average: 83.33333333333333, Rounded Grade: 83`

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** To calculate the exact average, you cannot simply divide `totalScore / numTests` because Java will perform integer division and immediately truncate the decimal. You must cast at least one of the variables to a `(double)` before dividing. 
* To manually round a positive `double` to the nearest whole number, add `0.5` to it, and then cast that entire result to an `(int)`. Because casting to an `(int)` simply chops off the decimals (truncation), adding `0.5` ensures that any number with a decimal of `.5` or higher gets pushed up to the next whole number before the decimal is chopped off!

</details>

---

### Exercise 10: Extracting Whole and Decimal Parts

**Tested Topics:** `double` / `int` data types, Explicit Type Conversions (Casting), Arithmetic operations, Floating-point precision.

Write a Java program that takes a positive floating-point number (`double`) and separates it into two distinct variables: one containing the whole number part (as an `int`), and the other containing just the fractional/decimal part (as a `double`).

* **Sample Input 1:** `double number = 12.345;`
* **Expected Output 1:** `Whole: 12, Decimal: 0.345` *(Note: Due to Java's floating-point architecture, it might print something like `0.3450000000000006`. This is completely normal and mathematically expected in AP CS A!)*
* **Sample Input 2:** `double number = 7.0;`
* **Expected Output 2:** `Whole: 7, Decimal: 0.0`
* **Sample Input 3:** `double number = 0.99;`
* **Expected Output 3:** `Whole: 0, Decimal: 0.99`

<details>
<summary>💡 <b>Click to reveal Hint</b></summary>

* **Hint:** To get the whole number part, cast the original `double` to an `(int)`. Because integer casting drops the decimal without rounding, you have successfully isolated the whole number. To find the remaining decimal part, simply subtract your newly isolated integer from the original `double` value.

</details>
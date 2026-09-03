### Exercise 1: Sum of the Digits of a Number
Write a Java program that calculates the sum of the digit values of a given positive integer.

---

### Exercise 2: 6-Digit Password Validator
Write a Java program that validates an integer `password` based on specific security conditions. The password is considered valid only if it meets all of the following criteria simultaneously:
1. It must be a 6-digit number (between 100000 and 999999, inclusive).
2. The sum of the digits in the odd positions (1st, 3rd, and 5th digits from left to right) must be equal to the sum of the digits in the even positions (2nd, 4th, and 6th digits from left to right) **modulo 6**.

---

### Exercise 3: Palindrome Word Check
Write a code that checks whether a given word is a palindrome (whether it reads the same backwards as forwards). Letter casing should not matter (case-insensitive).

---

### Exercise 4: Drawing Shapes with Nested Loops (6-Part Masterclass)
Write a Java program that takes an integer `satirSayisi` (number of rows) and uses nested loops to print 6 different star (`*`) pyramid patterns on the screen:
* **Part A:** Left-Aligned Increasing
* **Part B:** Left-Aligned Decreasing
* **Part C:** Right-Aligned Increasing
* **Part D:** Right-Aligned Decreasing
* **Part E:** Full Pyramid (Centered)
* **Part F:** Inverted Full Pyramid (Centered)

---

### Exercise 5: Email Domain Extractor
Write a Java program that takes a `String` representing an email address and extracts the domain name (the part immediately following the `@` symbol). If the string does not contain an `@` symbol, the program should print an error message.

---

### Exercise 6: Security Clearance System (De Morgan's Sandbox)
Write a Java program that determines if an employee is granted access to a server room based on three `boolean` variables: `hasBadge`, `isAdmin`, and `isWeekend`. 
The system grants access **ONLY IF**:
1. The employee is an Admin (`isAdmin` is true). 
2. **OR**, the employee has a badge (`hasBadge` is true) **AND** it is NOT the weekend (`!isWeekend`).

---

### Exercise 7: Floating-Point Equality (Double Tolerance)
Write a Java program that checks if two `double` variables are considered "equal" within a specified error margin (often called *epsilon* or *tolerance*). Your program should check if the absolute difference between the two numbers is less than or equal to a given `tolerance` variable.

---

### Exercise 8: Half of the Reversed Integer
Write a Java program that takes a positive integer, mathematically reverses the order of its digits to form a new integer, and then prints exactly half of that reversed number as a decimal.

---

### Exercise 9: Average Grade Calculator & Manual Rounding
Write a Java program that takes a student's total accumulated points (`int`) and the number of tests they have taken (`int`). First, calculate their exact decimal average. Then, manually round that average to the nearest whole number without using any built-in math functions (like `Math.round()`).

---

### Exercise 10: Extracting Whole and Decimal Parts
Write a Java program that takes a positive floating-point number (`double`) and separates it into two distinct variables: one containing the whole number part (as an `int`), and the other containing just the fractional/decimal part (as a `double`).

---

### Exercise 11: Random Character Generator
Write a Java program that generates a random uppercase letter (A-Z) and a random lowercase letter (a-z) using the `Math.random()` method and type casting, and then prints both characters to the console.

---

### Exercise 12: Strong Password Generator
Write a Java program that includes a method to generate and return a random strong password. The generated password must be a `String` of at least 8 characters in length, and the logic must guarantee that it contains at least one uppercase letter, one lowercase letter, and one numerical digit.

---

### Exercise 13: Leap Year Checker
Write a Java program that determines whether a given integer representing a year is a leap year. A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.

---

### Exercise 14: Find Maximum and Minimum Elements
Write a Java program that initializes a one-dimensional array of integers and iterates through it to find both the maximum and minimum values stored in the array. Print both values to the console.

---

### Exercise 15: Reverse an Array In-Place
Write a Java program that takes an array of integers and reverses the order of its elements mathematically. You must swap the elements within the original array without creating or utilizing a second temporary array. 

---

### Exercise 16: Count Even and Odd Numbers
Write a Java program that traverses a given integer array and counts exactly how many even numbers and how many odd numbers are present. Print both final counts to the console.

---

### Exercise 17: Check if Array is Sorted
Write a Java program that determines whether an array of integers is sorted in ascending order. The program should evaluate the array and print a boolean value (`true` if it is perfectly sorted, and `false` if at least one element breaks the ascending order).

---

### Exercise 18: Merge Two Arrays
Write a Java program that takes two separate one-dimensional integer arrays (which may be of different lengths) and merges them into a newly created single array containing all elements from the first array followed immediately by all elements from the second array.

---

### Exercise 19: Shift Elements to the Right
Write a Java program that shifts all elements in a given integer array to the right by one position. The last element of the array should wrap around and become the first element. 

---

### Exercise 20: Find the Second Largest Element
Write a Java program that scans through a one-dimensional integer array to find and print the second largest distinct value in the array. Ensure your logic handles cases where there might be duplicate maximum values.

---

### Exercise 21: Filter Positive Numbers
Write a Java program that takes an array containing both positive and negative integers. Calculate how many positive numbers exist, create a new array of that exact size, and copy only the positive integers into this new array. Print the new array.

---

### Exercise 22: Vowel Counter
Write a Java program that takes a `String` input and counts the total number of vowels (A, E, I, O, U, both uppercase and lowercase) present in the text.

---

### Exercise 23: Reverse a String
Write a Java program that takes a `String` and reverses it entirely without using any built-in reverse methods (like `StringBuilder.reverse()`). Use a loop to construct and print the reversed string.

---

### Exercise 24: Anagram Checker
Write a Java program that accepts two strings and determines if they are anagrams of each other (meaning they contain the exact same letters in the exact same quantities, ignoring spaces and letter casing).

---

### Exercise 25: Remove Non-Alphanumeric Characters
Write a Java program that takes a string containing various symbols, punctuation, and spaces, and returns a new string containing only the alphanumeric characters (letters and numbers).

---

### Exercise 26: Matrix Addition
Write a Java program that initializes two 2D integer arrays (matrices) of the same dimensions. Calculate and print a third 2D array that represents the mathematical sum of the two matrices.

---

### Exercise 27: Row and Column Sums
Write a Java program that takes a 2D integer array and calculates the sum of each individual row and each individual column. Print the results clearly for each row and column.

---

### Exercise 28: Matrix Diagonal Sums
Write a Java program that takes a square 2D integer array (same number of rows and columns) and calculates the sum of its primary diagonal (top-left to bottom-right) and its secondary diagonal (top-right to bottom-left).

---

### Exercise 29: Matrix Transpose
Write a Java program that finds the transpose of a given 2D integer array. The transpose is created by swapping rows with columns (the element at row `i`, column `j` becomes the element at row `j`, column `i`).

---

### Exercise 30: Basic Bank Account Class
Create a `BankAccount` class with private attributes for the account holder's name, account number, and balance. Include a constructor and create public methods to deposit money, withdraw money (ensuring sufficient funds), and display the current balance.

---

### Exercise 31: Student Grade Manager
Create a `Student` class containing attributes for the student's name and a one-dimensional array of their test grades. Write methods within the class to calculate the student's average grade and to return a boolean indicating whether the student has passed (average >= 60).

---

### Exercise 32: Book and Library System
Create a `Book` class with attributes for title, author, and a boolean `isBorrowed` status. Then, create a `Library` class that holds an array of `Book` objects. Include methods in the `Library` class to add a book, borrow a book by its title, and return a borrowed book.
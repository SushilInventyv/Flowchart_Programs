# Assignment 5
## Aim: Develop a program that reads a number. Number should be atleast 4 digit long. Generate all possible permutations and combinations of that number and find prime from that. Compare the prime numbers array with Pascal's Triangle and highlight the prime numbers in the Pascal's Triangle. Create an error ratio list and print it. Also create the list of matched elements and missing elements.

### Code
![pnc](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/9666108e-e42a-432c-86de-b74471e71123)
![prime](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/7b25cb06-e7b1-4369-92f5-0d41546ca50a)
![filter](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/7f0c3d60-2d4e-4a0b-a491-0657976b610d)
![pascal](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/0f2a0792-d7d7-4084-bd2d-38cfcf3ce7fe)

### Output
![c1](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/71275eac-435a-4c16-885c-e25b633c3a10)
![c2](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/10fbc5c0-7730-44d8-8264-0ebacf6dc07d)

### Explain
1. The genNums(num) function takes an input num and converts it into an array of numbers using Array.from(String(num), Number). The pnc array is initialized to store the generated numbers. The gen function is defined as a recursive function that takes two arguments, cur and rem. Inside the gen function, the current number cur is interpreted as a string and converted to a number using parseInt. The gen function checks if the interpreted number is not NaN (not a number) and, if it is a number, adds it to the pnc array. The gen function iterates through the rem array and, for each element, creates an updated cur array by adding the current element of rem to the end of cur. The gen function then recursively calls itself with the updated cur and rem arrays. The genNums(num) function calls the gen function with the initial cur array [] and the rem array arr. Finally, the genNums(num) function returns the pnc array, which contains the generated sequence of numbers.

2. The given code defines a function isPrime(number) that checks whether a given number is prime or not. The function first checks if the input number is less than 2, which is not a prime number, and returns false. Then, the function iterates from 2 to the square root of the input number and checks if any number in this range divides the input number. If the input number is divisible by any number in this range, the function returns false. Otherwise, the function returns true.

3. This code uses the filter method to create a new array primeNum containing only the elements from generatedNums for which the isPrime function returns true. The isPrime function is used as a callback to test each element. The primeNum array will contain only the prime numbers from the generatedNums array. Here, the spread operator ... is used to spread the elements of the primeNum array as arguments to the Math.max function, which returns the largest of the arguments. The result is then logged to the console.

4. The generatePascals(stopElement, primeNumbers, matched_elements) function generates a Pascal's Triangle with prime numbers and displays it in an HTML element. The function iterates through the rows, updating the next row and checking if the current element is greater than or equal to the stopElement. If it is, the function stops iterating and displays the generated Pascal's Triangle.

### Author
- Sushil Gangavati

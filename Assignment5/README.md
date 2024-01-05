# Assignment 5
## Aim: Develop a program that reads a number. Number should be atleast 4 digit long. Generate all possible permutations and combinations of that number and find prime from that. Compare the prime numbers array with Pascal's Triangle and highlight the prime numbers in the Pascal's Triangle. Create an error ratio list and print it. Also create the list of matched elements and missing elements.

### Code
![s1](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/a059526a-3887-4df5-a65c-c41b3ab2ffca)
![s2](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/7e72556a-eeb0-4fb0-aa03-c5532aa05b9e)
![s4](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/1044598f-5f90-4edd-9210-25e9f3e3f680)
![s3](https://github.com/SushilInventyv/Training_Inventyv/assets/153286178/b3e9fe7b-0c50-483c-85ca-96f210aa39a3)

### Explain
1. The genNums(num) function converts a number into an array of its digits and generates permutations recursively, storing valid numbers in an array called pnc.
2. The isPrime(number) function checks if a given number is prime by iterating up to its square root and checking for divisibility.
3. The code filters prime numbers from the generated array, finds the maximum using the spread operator, and logs it to the console.
4. The generatePascals(stopElement, primeNumbers, matched_elements) function creates Pascal's Triangle with prime numbers, stopping when an element is greater than or equal to stopElement, and displays it in an HTML element.

### Author
- Sushil Gangavati

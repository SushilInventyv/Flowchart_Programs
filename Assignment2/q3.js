// Store fibonacci Series and find prime nos. Find differences of prime nos and add the differences using recursion. n>1000
console.time("prime");
var primeNum = [];
//Fibonacci
function fibonacci(n) {
    if (n <= 1) { return [0, 1]; }
    else {
        primeNum = fibonacci(n - 1);
        primeNum.push(primeNum[primeNum.length - 1] + primeNum[primeNum.length - 2]);
        return primeNum;
    }
}
var n = 50;
fibonacci(n);
console.log(fibonacci(n));

//Prime

var prime = primeNum.filter((n) => {

    if (n == 1 || n == 0) { return false; }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;

});
console.log(prime);
console.timeEnd("prime");


//Differences
var diff1 = [];
function Differences(primeNum) {
    for (let i = 1; i < primeNum.length; i++) {
        diff1.push(primeNum[i - 1] - primeNum[i]);
    }
    return diff1;
}
var d = Differences(prime);
console.log(d);


//Sum of Differrences
var sum = 0;
function Addition(diff1) {
    for (let i of diff1) {
        sum += i;
    }
    return sum;
}
let finalAns = Addition(d);
console.log(finalAns);

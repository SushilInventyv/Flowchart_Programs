//Calculate nCr using recursion: main -> comb -> fact

function fact(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

function combination(n, r) {
    return fact(n) / (fact(n - r) * fact(r));
}

function main() {
    let n = 5;
    let r = 3;
    let sol = combination(n, r);
    console.log(sol);
}

main();
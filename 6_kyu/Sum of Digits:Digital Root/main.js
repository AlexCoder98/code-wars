function digitalRoot(n) {
    // FIRST SOLUTION
    let sum = n.toString().split("").map(char => +char).reduce((acc, curr) => acc + curr).toString();
    while (sum.length > 1) {
        let newSum = digitalRoot(sum);
        sum = newSum;
    }
    return +sum;

    // SECOND SOLUTION
    // return (n - 1) % 9 + 1;

    // THIRD SOLUTION
    // return n < 10 ? n : digitalRoot(String(n).split('').reduce((s,v)=>Number(s)+Number(v)));
}

const result = digitalRoot(493193);
console.log(result);
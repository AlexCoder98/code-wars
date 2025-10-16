function narcissisticNumber(num) {
    return num.toString().split("").map((el, _, arr) => (+el) ** arr.length).reduce((acc, curr) => acc + curr) === num;
}

const result = narcissisticNumber(122);
console.log(result);
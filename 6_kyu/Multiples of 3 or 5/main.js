function solution(number) {
    const newArr = [];
    for (let i = 1; i < number; i++) {
        const currNum = i;
        if ((currNum % 3 == 0) || (currNum % 5 == 0)) {
            newArr.push(currNum);
        }
    }
    return number < 3 ? 0 : newArr.reduce((acc, curr) => acc + curr);
}

const result = solution(15);
console.log(result);
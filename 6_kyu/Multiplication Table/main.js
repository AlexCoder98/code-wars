function multiplicationTable(number) {
    const arr = [];
    for (let i = 0; i < number; i++) {
        const innerArr = [];
        for (let j = 1; j <= number; j++) {
            const firstIndex = i + 1;
            const index = j + i * j;
            if (!innerArr.includes(firstIndex)) {
                innerArr.push(firstIndex);
            } else {
                innerArr.push(index);
            }
        }
        arr.push(innerArr);
    }
    return arr;
}

const result = multiplicationTable(5);
console.log(result);
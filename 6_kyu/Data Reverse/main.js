function dataReverse(data) {
    const newArr = [];
    const arrQuantity = data.length / 8;
    let counter = 0;
    for (let i = 1; i <= arrQuantity; i++) {
        const innerArr = [];
        for (let j = counter; j < data.length; j++) {
            innerArr.push(data[counter]);
            counter++;
            if (innerArr.length == 8) {
                counter = counter;
                break;
            }
        }
        newArr.push(innerArr);
    }
    return newArr.reverse().flat();
}
const result = dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]);
// console.log(result);
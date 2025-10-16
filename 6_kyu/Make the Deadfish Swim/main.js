function parse(data) {
    let number = 0;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        number = data[i] === "i" ? (number + 1) : (data[i] === "d" ? (number - 1) : data[i] === "s" ? Math.pow(number, 2) : number);
        if (data[i] === "o") {
            arr.push(number);
        }
    }
    return arr;
}

const result = parse("iiisxxxdoso");
// console.log(result);
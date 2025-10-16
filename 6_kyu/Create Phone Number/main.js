function generatePhoneNumber(array) {
    // FIRST SOLUTION
    return `(${array.slice(0, 3).join("")}) ${array.slice(3, 6).join("")}-${array.slice(6).join("")}`;

    //SECOND SOLUTION
    // let format = "(nnn) nnn-nnnn";
    // for (let i = 0; i < array.length; i++) {
    //     format = format.replace("n", array[i]);
    // }
    // return format;

    // THIRD SOLUTION
    // return array.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}

const result = generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);
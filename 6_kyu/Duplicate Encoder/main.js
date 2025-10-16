function duplicateEncode(word) {
    // FIRST SOLUTION
    return word.toLowerCase().split("").map((el, _, arr) => arr.indexOf(el) == arr.lastIndexOf(el) ? "(" : ")").join("");

    // SECOND SOLUTION
    // const loweredStr = word.toLowerCase();
    // let str = "";
    // for (let i = 0; i < loweredStr.length; i++) {
    //     if (loweredStr.indexOf(loweredStr[i]) !== loweredStr.lastIndexOf(loweredStr[i])) {
    //         str += ")";
    //     } else {
    //         str += "(";
    //     }
    // }
    // return str;
}

const result = duplicateEncode("Success");
console.log(result);
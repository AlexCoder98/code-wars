function expandedForm(num) {
    return num.toString().split("").map((el, index, arr) => (el != "0") ? `${el}${"0".repeat(arr.length - index - 1)}` : "").filter(el => el != "").join(" + ");
}

const result = expandedForm(70304);
// console.log(result);
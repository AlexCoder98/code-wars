function solve(s) {
    if (s.split("").reverse().join("") === s) return "OK";
    else {
        for (let i = 0; i < s.length; i++) {
            const newStr = s.split("").filter((el, index) => index == i ? "" : el).join("");
            if (newStr === newStr.split("").reverse().join("")) return "remove one";
            console.log(newStr);
        }
        return "not possible";
    }
}

const result = solve("abba");
// console.log(result);
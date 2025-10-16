function abbreviate(string) {
    return string.split(" ").map(el => {
        let resultArr = [], newStr = "";
        if (el.length >= 4) {
            const removeCount = el.endsWith(",") ? 2 : 1, ending = el.endsWith(",") ? "," : "";
            if (el.includes("-")) {
                newStr = el.split("-").map(innerEl => `${innerEl[0]}${innerEl.slice(1, innerEl.length - removeCount).length}${innerEl.slice(-removeCount)}${ending}`).join("-");
            } else {
                newStr = `${el[0]}${el.slice(1, el.length - removeCount).length}${el.charAt(el.length - removeCount)}${ending}`;
            }
            resultArr.push(newStr);
        } else {
            resultArr.push(el);
        }
        return resultArr.join("");
    }).join(" ");
}

const result = abbreviate("You need, need not want, to complete this code-wars mission");
// console.log(result);
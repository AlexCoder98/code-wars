function compare(a, b) {
    const comparison = [];
    for (const selector of [...arguments]) {
        const splitted = selector.split(" ");
        const arr = [];
        let idCount = 0, classCount = 0, tagCount = splitted.filter(el => !el[0].match(/\#|\.|\*/)).length;
        splitted.forEach(el => {
            for (const char of el) {
                if (char.match(/\#/)) idCount += 1;
                if (char.match(/\./)) classCount += 1;
            }
        })
        arr.push(idCount, classCount, tagCount);
        const transformed = arr.map(el => el.toString()).map(el => el.length == 1 ? `0${el}` : el);
        comparison.push([selector, transformed[0] === "0" || transformed[0] == "00" ? transformed.join("") : parseInt("1" + transformed.join(""))]);
    }
    return comparison[0][1] == comparison[1][1] ? b : comparison.sort((a, b) => b[1] - a[1])[0][0];
}

const result = compare("body p", "div");
// console.log(result);
function customChristmasTree(chars, n) {
    const christmasTree = [];
    let startPoint = 0;
    for (let i = 0; i < n; i++) {
        let char = "";
        for (let j = 0; j < n; j++) {
            char += `${chars[startPoint]}${j != i ? " " : ""}`;
            if (startPoint == chars.length - 1) {
                startPoint = -1;
            }
            startPoint++;
            if (j == i) break;
        }
        let row = `${" ".repeat(n - i - 1)}${char}\n`;
        christmasTree.push(row);
    }
    const lastRow = christmasTree[christmasTree.length - 1].length - 1;
    for (let k = 1; k <= Math.floor(n / 3); k++) {
        christmasTree.push(`${" ".repeat(Math.floor(lastRow / 2))}|${k < Math.floor(n / 3) ? "\n" : ""}`);
    }
    return christmasTree.join("");
}

// const result = customChristmasTree("*@o", 9);
const result = customChristmasTree("1234", 3);
console.log(result);
function encryptThis(str) {
    const splitted = str.split(" ");
    const newArr = [];
    for (let i = 0; i < splitted.length; i++) {
        const currEl = splitted[i];
        let encrypted = "";
        for (let j = 0; j < currEl.length; j++) {
            if (j == 0) {
                encrypted += currEl.charCodeAt(0).toString();
            } else if (j == 1) {
                encrypted += currEl[currEl.length - 1];
            } else if (j == (currEl.length - 1)) {
                encrypted += currEl[1];
            } else {
                encrypted += currEl[j];
            }
        }
        newArr.push(encrypted);
    }
    return newArr.join(" ");
}

const result = encryptThis("A wise old owl lived in an oak");
// console.log(result)
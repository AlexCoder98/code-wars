function towerBuilder(nFloors) {
    // FIRST SOLUTION
    let star = "*";
    let whiteSpace = " ";
    const arr = [];
    for (let i = nFloors; i > 0; i--) {
        let whiteSpaceRepeated = whiteSpace.repeat(i - 1);
        let floor = `${whiteSpaceRepeated}${star}${whiteSpaceRepeated}`;
        star += "**";
        arr.push(floor);
    }
    return arr;

    // SECOND SOLUTION
    // let star, space, arr = [];
    // for (let i = 1; i <= nFloors; i++) {
    //     space = " ".repeat(nFloors - i);
    //     star = "*".repeat(2 * i - 1);
    //     arr.push(`${space}${star}${space}`);
    // }
    // return arr;
}
const result = towerBuilder(3);
console.log(result);
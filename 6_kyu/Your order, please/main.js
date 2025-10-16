function order(words) {
    // FIRST SOLUTION
    // const arr = words.split(" ").map(el => el.split("").map(el => el.match(/[0-9]/) ? +el : el));
    // return arr.sort((a, b) => a.find(el => typeof (el) == "number") - b.find(el => typeof (el) == "number")).map(el => el.join("")).join(" ");

    // SECOND SOLUTION
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ') // \d - match any digit from 0 to 9
}

const result = order("is2 Thi1s T4est 3a");
console.log(result);
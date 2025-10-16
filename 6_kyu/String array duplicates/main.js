function dup(s) {
    return s.map(el => el.split("").filter((el, i, arr) => el != arr[i + 1]).join(""));
}

// const result = dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]);
const result = dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]);
// console.log(result);
function solution(roman) {
    // FIRST SOLUTION
    // return roman.split("").map(el => {
    //     switch (true) {
    //         case el === "I":
    //             el = 1;
    //             break;
    //         case el === "V":
    //             el = 5;
    //             break;
    //         case el === "X":
    //             el = 10;
    //             break;
    //         case el === "L":
    //             el = 50;
    //             break;
    //         case el === "C":
    //             el = 100;
    //             break;
    //         case el === "D":
    //             el = 500;
    //             break;
    //         case el === "M":
    //             el = 1000;
    //             break;
    //     }
    //     return el;
    // }).reduce((acc, curr, index, arr) => curr < arr[index + 1] ? acc - curr : acc + curr, 0);

    // SECOND SOLUTION
    const conversionObj = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    return roman.split("").map(el => conversionObj[el]).reduce((acc, curr, i, arr) => curr < arr[i + 1] ? acc - curr : acc + curr, 0);
}

// const result = solution("MMCCCLXIV");
// const result = solution("IV");
// const result = solution("XIV");
const result = solution("MXLVI");
console.log(result);
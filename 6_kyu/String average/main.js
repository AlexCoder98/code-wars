function averageString(str) {
    const wordsAsNumbers = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 };
    const numberAsWords = { "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine" };
    const numberArray = str.split(" ").map(el => wordsAsNumbers[el]);
    return numberArray.every(el => el != undefined) ? numberAsWords[Math.floor(numberArray.reduce((acc, curr) => acc + curr) / numberArray.length)] : "n/a";
}

// const result = averageString("zero zero zero zero zero");
const result = averageString("one two three four five");
// const result = averageString("");
console.log(result);
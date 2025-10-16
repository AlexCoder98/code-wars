// FIRST SOLUTION
const arr = Object.entries({ a: 1, e: 2, i: 3, o: 4, u: 5 });

function encode(string) {
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[aeiou]/g)) {
            for (let j = 0; j < arr.length; j++) {
                if (string[i] == arr[j][0]) {
                    newStr += arr[j][1];
                    break;
                }
            }
        } else {
            newStr += string[i];
        }
    }
    return newStr;
}

const result1 = encode('How are you today?');
// console.log('Result 1: ' + result1);

function decode(string) {
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[12345]/g)) {
            for (let j = 0; j < arr.length; j++) {
                if (string[i] == arr[j][1]) {
                    newStr += arr[j][0];
                    break;
                }
            }
        } else {
            newStr += string[i];
        }
    }
    return newStr;
}

const result2 = decode('h2ll4');
// console.log('Result 2: ' + result2);

// FIRST SOLUTION
// turn vowels into numbers
// function encode(string) {
//     return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }

// //turn numbers back into vowels
// function decode(string) {
//     return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }


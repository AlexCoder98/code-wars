function isMerge(s, part1, part2) {
    console.log(s, part1, part2);
    return !s ? !(part1 || part2) :
        s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
        s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

const result = isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am');

// function isMerge(s, part1, part2) {
//     if ((part1 + part2).length > s.length || s.length > (part1 + part2).length) return false;
//     const parts = [part1, part2];
//     const partsReversed = [part1, part2].map(el => el.split('').reverse().join(''));
//     const reversedStr = s.split('').reverse().join('');
//     console.log(reversedStr);
//     const generalIndexes = [];
//     const resArr = [];
//     const startIndexes = [];
//     for (let i = 0; i < partsReversed.length; i++) {
//         let matchStr = '';
//         const part = partsReversed[i];
//         console.log(part);
//         // for (let j = part.length - 1; j >= 0; j--) {
//         const matchArr = [];
//         for (let j = 0; j < part.length; j++) {
//             matchStr = part.substring(0, j + 1);
//             if (reversedStr.includes(matchStr)) {
//                 matchArr.push(matchStr);
//             };
//         }
//         const longestMatch = matchArr.sort((a, b) => b.length - a.length)[0];
//         startIndexes.push(reversedStr.indexOf(longestMatch));
//     };

//     for (let i = 0; i < partsReversed.length; i++) {
//         const part = partsReversed[i];
//         const indexes = [];
//         let startIndex = startIndexes[i];
//         for (let j = 0; j < part.length; j++) {
//             for (let k = startIndex; k < reversedStr.length; k++) {
//                 if (part[j] === reversedStr[k]) {
//                     if (!generalIndexes.includes(k)) {
//                         indexes.push(k);
//                         generalIndexes.push(k);
//                         startIndex = k;
//                         break;
//                     }
//                 }
//             }
//         }
//         resArr.push(indexes);
//     }
//     if (resArr.flat().length != s.length) return false;
//     for (let i = 0; i < resArr.length; i++) {
//         const joined = resArr[i].join('');
//         const sortedAndJoined = resArr[i].sort((a, b) => a - b).join('');
//         if (joined != sortedAndJoined) return false;
//     }
//     return true;
// }

// const result = isMerge('codewars', 'cdw', 'oears');
// const result = isMerge('xcyc', 'cy', 'xc');
// const result = isMerge('xcyc', 'xc', 'cy');
// const result = isMerge('xcyc', 'xc', 'yc');
// const result = isMerge('xcyc', 'xc', 'yc');
// const result = isMerge('', 'no', 'siree');
// const result = isMerge('codewars', 'code', 'warss');
// const result = isMerge('codewars', 'code', 'wasr');
console.log(result);

function findChildren(dancingBrigade) {
    const sortedParentLetters = dancingBrigade.split('').filter(el => el.match(/[A-Z]/)).sort().map(el => [el]);
    const childLetters = dancingBrigade.split('').filter(el => el.match(/[a-z]/));
    return sortedParentLetters.map(innerArr => {
        return innerArr.concat(childLetters.filter(el => el === innerArr[0].toLowerCase()));
    }).flat().join('');
}

const result = findChildren('uwwWUueEe');
console.log(result);
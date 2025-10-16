function findMissingLetter(array) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const isArrayUppered = array.some(el => el.match(/[A-Z]/g));
    const firstLetter = alphabet.indexOf(array[0].toLowerCase());
    const lastLetter = alphabet.indexOf(array[(array.length - 1)].toLowerCase());
    const sliceFromAlphabet = alphabet.slice(firstLetter, lastLetter).map(el => isArrayUppered ? el.toUpperCase() : el);
    return sliceFromAlphabet.find((el, index) => el !== array[index]);
}

const result = findMissingLetter(['a', 'b', 'c', 'd', 'f']);
console.log(result);
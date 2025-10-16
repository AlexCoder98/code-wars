function replaceWithAlphabetPosition(str) {
    // FIRST SOLUTION
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    const arrWithLetters = str.split("").filter(el => el.match(/[a-zA-Z]/g));
    return arrWithLetters.map(el => alphabet.indexOf(el.toLowerCase()) + 1).join(" ");

    // SECOND SOLUTION
    // return str.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
}

const result = replaceWithAlphabetPosition("The sunset sets at twelve o' clock.");
console.log(result);
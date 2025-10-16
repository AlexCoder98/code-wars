function wordCount(s) {
    return s.split(/\W|\d|_/).filter(el => el != '' && ['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'].every(innerEl => innerEl != el.toLowerCase())).length;
}

// const result = wordCount('Slow-moving user6463 has been here');
const result = wordCount("Really2374239847 long ^&#$&(*@# sequence");
console.log(result);
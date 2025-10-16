function goodVsEvil(good, evil) {
    const powers = [[1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10]];
    const powerScores = [...arguments].map((el, i) => el.split(' ').map((score, indx) => +score * powers[i][indx]).reduce((acc, curr) => acc + curr));
    return powerScores[0] < powerScores[1] ? 'Battle Result: Evil eradicates all trace of Good' : powerScores[0] > powerScores[1] ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: No victor on this battle field';
}

// const result = goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');
// const result = goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');
const result = goodVsEvil('1 1 1 1 1 1', '1 0 1 1 1 1 1');
console.log(result);
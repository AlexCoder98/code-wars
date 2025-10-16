function bingo(ticket, win) {
    let totalCount = 0;
    ticket.forEach(el => {
        let count = 0;
        for (let i = 0; i < el[0].length; i++) {
            const currCharCode = el[0].charCodeAt(i);
            if (currCharCode === el[1]) {
                count++;
                break;
            }
        }
        totalCount += count;
    });
    return totalCount >= win ? 'Winner!' : 'Loser!';
};

// const result = bingo([['ABCZ', 65], ['HGR', 74], ['BYHT', 74]], 2);
const result = bingo([['XY', 65], ['ZMBI', 73], ['GKACUZ', 74], ['IEQ', 84]], 1);
// const result = bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3);
console.log(result);
function findOutlier(integers) {
    const oddIntigers = integers.filter(int => int % 2 != 0);
    const evenIntigers = integers.filter(int => int % 2 == 0);
    const shorterArray = oddIntigers.length > evenIntigers.length ? evenIntigers : oddIntigers;
    return shorterArray[0];
}

const result = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
console.log(result);
function comp(array1, array2) {
    if ([...arguments].includes(null)) return false;
    array1.forEach(num => {
        const indexToRemove = array2.findIndex(el => el === num * num);
        if (indexToRemove > -1) {
            array2.splice(indexToRemove, 1);
        }
    });
    return array2.length === 0 ? true : false;
}

const result = comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]);
// const result = comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]);
console.log(result);
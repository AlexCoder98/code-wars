function countSmileys(arr) {
    // FIRST SOLUTION
    const regExp = /(:|;)(\s*|-|~)(\)|D)/g;
    return arr.filter(el => el.match(regExp)).length;

    // SECOND SOLUTION
    // const regExp2 = /[;:][-~]?[\)D]/g;
    // return arr.filter(el => el.match(regExp)).length;
}

const result = countSmileys([';]', ':[', ';*', ':$', ';-D']);
console.log(result);
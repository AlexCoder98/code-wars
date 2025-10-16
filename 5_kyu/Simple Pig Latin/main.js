function pigIt(str) {
    return str.split(' ').map((el) => el.match(/[a-zA-Z]/) ? (el.slice(1, el.length) + el[0] + 'ay') : el).join(' ');
    // return str.split(' ').map((el) => {
    //     if (el.match(/[a-zA-Z]/)) {
    //         const newEl = el.slice(1, el.length) + el[0] + 'ay';
    //         return newEl;
    //     }
    //     return el;
    // }).join(' ');
}

const result = pigIt('This, is my string');
console.log(result);
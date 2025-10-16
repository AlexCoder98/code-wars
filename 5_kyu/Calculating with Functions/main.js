const zero = (cb) => cb ? cb(0) : 0;
const one = (cb) => cb ? cb(1) : 1;
const two = (cb) => cb ? cb(2) : 2;
const three = (cb) => cb ? cb(3) : 3;
const four = (cb) => cb ? cb(4) : 4;
const five = (cb) => cb ? cb(5) : 5;
const six = (cb) => cb ? cb(6) : 6;
const seven = (cb) => cb ? cb(7) : 7;
const eight = (cb) => cb ? cb(8) : 8;
const nine = (cb) => cb ? cb(9) : 9;

const plus = (n) => {
    return (v) => {
        return v + n;
    }
}
const minus = (n) => {
    return (v) => {
        return v - n;
    }
}
const times = (n) => {
    return (v) => {
        return v * n;
    }
}
const dividedBy = (n) => {
    return (v) => {
        return Math.floor(v / n);
    }
}
// console.log(nine(dividedBy(two())));
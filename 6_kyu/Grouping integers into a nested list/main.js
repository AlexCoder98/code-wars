function groupInts(xs, x) {
    let isGreater;
    return xs.reduce((prev, curr) => {
        if (isGreater === curr < x) {
            prev[prev.length - 1].push(curr);
        } else {
            prev.push([curr]);
            isGreater = curr < x;
        }
        return prev;
    }, []);
    // const res = [];
    // for (let i = 0; i < xs.length;) {
    //     const arr = [];
    //     for (let j = i; j < xs.length; j++) {
    //         if (xs[j] >= x) {
    //             arr.push(xs[j]);
    //         } else {
    //             break;
    //         }
    //     }
    //     res.push(arr);

    //     i += arr.length;
    //     const arr2 = [];
    //     for (let j = i; j < xs.length; j++) {
    //         if (xs[j] < x) {
    //             arr2.push(xs[j]);
    //         } else {
    //             break;
    //         }
    //     }
    //     res.push(arr2);
    //     i += arr2.length;
    // }
    // return res.filter(el => el.length > 0);
}

const result = groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6);
// const result = groupInts([-1, -1, -1, 10, 10, 10, -1, -1, -1, 10, -1, 10], 10);
// const result = groupInts([1, 2, 3], 3);
console.log(result);
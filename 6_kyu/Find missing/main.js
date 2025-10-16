var findMissing = function (list) {
    const obj = {};
    list.forEach((num, i, arr) => {
        if (i !== arr.length - 1) {
            const diffNumber = num < arr[i + 1] ? arr[i + 1] - num : -(num - arr[i + 1]);
            if (obj.hasOwnProperty(diffNumber)) {
                obj[diffNumber] += 1;
            } else {
                obj[diffNumber] = 1;
            }
        };
    });

    let diffNumber;
    if ([...new Set(Object.values(obj))].length === 1) {
        const keys = Object.keys(obj).map(key => +key);
        diffNumber = +keys.find(key => Math.abs(key) === Math.abs(Math.min(...keys.map(key => Math.abs(key)))));
    } else {
        diffNumber = +Object.entries(obj).find(el => el.includes(Math.max(...Object.values(obj))))[0];
    }

    let num = list[0];
    while (list.includes(num)) {
        num += diffNumber;
    }
    return num;
}
function locate(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(value)) return true;
        if (typeof arr[i] === 'object') return locate(arr.flat(), value);
    }
    return false;
};
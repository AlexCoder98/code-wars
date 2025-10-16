function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if (sum === target) return [i, j];
        }
    }
}

// const result = twoSum([1, 2, 3], 4);
// const result = twoSum([1234, 5678, 9012], 14690);
const result = twoSum([3, 2, 4], 6);
console.log(result);
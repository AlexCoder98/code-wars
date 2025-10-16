function possibilities(str) {
    const indexes = str.split('').map((el, index) => el === '?' ? index : '').filter(el => el != '');
    console.log(indexes);
    const results = [str.replaceAll('?', 0), str.replaceAll('?', 1)];
    const permute = (nums) => {
        console.log('Logging from premut fn');
        console.log(nums);
        let result = [];
        if (nums.length === 0) return [];
        if (nums.length === 1) return [nums];
        for (let i = 0; i < nums.length; i++) {
            const matching = indexes.find(el => el === i);
            if (matching) {
                console.log('YES');
                let currentNum = nums[i];
                let remainingNums = nums.slice(0, i).concat(nums.slice(i));
                console.log('Rem nums');
                console.log(remainingNums);
                // const remainingNumsPermuted = permute(remainingNums);
                // console.log(remainingNumsPermuted);
                // for (let j = 0; j < remainingNumsPermuted.length; j++) {
                //     let permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
                //     result.push(permutedArray);
                // }
            }
        }
        return result;
    };
    for (let i = 0; i < results.length; i++) {
        permute(results[i]);
    }
    // return results;
};
const result = possibilities('10?0?11101101?0011?010000?0111');
console.log(result);

// console.log(['100001110110100011001000000111', '100001110110100011001000010111', '100001110110100011101000000111', '100001110110100011101000010111', '100001110110110011001000000111', '100001110110110011001000010111', '100001110110110011101000000111', '100001110110110011101000010111', '100011110110100011001000000111', '100011110110100011001000010111', '100011110110100011101000000111', '100011110110100011101000010111', '100011110110110011001000000111', '100011110110110011001000010111', '100011110110110011101000000111', '100011110110110011101000010111', '101001110110100011001000000111', '101001110110100011001000010111', '101001110110100011101000000111', '101001110110100011101000010111', '101001110110110011001000000111', '101001110110110011001000010111', '101001110110110011101000000111', '101001110110110011101000010111', '101011110110100011001000000111', '101011110110100011001000010111', '101011110110100011101000000111', '101011110110100011101000010111', '101011110110110011001000000111', '101011110110110011001000010111', '101011110110110011101000000111', '101011110110110011101000010111'].length);
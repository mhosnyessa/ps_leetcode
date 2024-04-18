function topKFrequent(nums, k) {
    let freqArr = new Array(nums.length + 1);
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (let [key, value] of map) {
        freqArr[value] = freqArr[value] ? [...freqArr[value], key] : [key];
    }
    console.log(freqArr);
    let returnArr = [];
    for (let i = freqArr.length; i >= 0; i--) {
        if (freqArr[i]) {
            returnArr = [...returnArr, ...freqArr[i]];
        }
        if (returnArr.length >= k) {
            return returnArr.slice(0, k);
        }
    }
    return [];
}
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3], 3));

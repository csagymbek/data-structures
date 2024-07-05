var prefixSumArray = function (nums) {
    let prefixSumArray = new Array(nums.length);
    prefixSumArray[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixSumArray[i] = prefixSumArray[i - 1] + nums[i];
    }
    console.log(prefixSumArray);
    return prefixSumArray;
};

console.log(prefixSumArray([3, 1, 5, 2, 4]));
const nums = [1, 1, 2]
var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums;
    for (let i = 0; i < nums.length; i++) {
        nums[i] === nums[i + 1] && (nums.splice(i, 1), i -= 1)
    }
    return nums.length,nums;
};
console.log(removeDuplicates(nums));
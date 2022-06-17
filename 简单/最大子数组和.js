const nums = [-2, 1]
// const nums = [-2, -1]
var maxSubArray = function (nums) {
    if (nums.length <= 1) { return nums }
    let max = -Infinity;
    //计算多个元素的和的最大值
    for (let j = 0; j < nums.length; j++) {
        for (let i = j; i < nums.length; i++) {
            console.log('nums',nums.slice(j,(i+1)));
            if(nums[i]<max){continue;}
            if (nums.slice(j, (i + 1)).reduce((prev, cur) => prev + cur) > max) {
                max = nums.slice(j, (i + 1)).reduce((prev, cur) => prev + cur) 
            }
            console.log('max',max);
        }
    }
    return max;//6
};

console.log(maxSubArray(nums));
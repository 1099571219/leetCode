const nums = [1,3,5,6], target = 7;

//有则返回索引，没有则返回顺序插入后该索引
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target)return i;
        if(nums[i]>target)return i;
    }
    return nums.length;
};

console.log(searchInsert(nums,target));
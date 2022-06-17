const nums = [2, 7, 11, 15], target = 9

var twoSum = function (nums, target) {
    if(nums.length<2){return false;}
    for(let i = 0;i<nums.length;i++){
        if(nums.indexOf(target - nums[i]) !== -1 && nums.indexOf(target - nums[i]) !== i){
            return [i,nums.indexOf(target - nums[i])]
        }
    }
    return []
};

console.log(twoSum(nums,target));
const digits = [4,3,2,1]
var plusOne = function(digits) {
    if(digits.length===1) return digits[0] +=1;
    digits[digits.length-1] +=1;
    return digits;
};
console.log(plusOne([1,2,3]));
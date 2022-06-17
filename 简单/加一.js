const digits = [0]
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === 0) {
            digits[0]===9 ? (digits[0]=0,digits.unshift(1)) : digits[0]++;
            break;
        }
        if(digits[i]===9){
            digits[i]=0;
        }else{
            digits[i]++;
            break;
        }
    }
    return digits
};
console.log(plusOne(digits));
const strs = ["dog", "doger", "do"]

var longestCommonPrefix = function (strs) {
    if(strs.length===1)return strs[0];
    if(strs.length===0)return '';
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]){
                return strs[0].substr(0,j);
            };
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(strs))


// const strs = ["dog", "doger", "do"]

// var longestCommonPrefix = function (strs) {
//     let result = ''
//     for (let j = 0; j < strs[0].length; j++) {
//         const set = new Set();
//         for (let i = 0; i < strs.length; i++) {
//             set.add(strs[i].split('')[j]);
//         }
//         if (set.size !== 1) return result;
//         result += String([...set][0]);
//     }
//     return result;
// };

// console.log(longestCommonPrefix(strs))

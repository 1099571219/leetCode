//58 最后一个单词长度
const s = " aa ";
var lengthOfLastWord = function (s, result) {
    if (!result) { result = 0 }
    if (result === 0) {
        if (s[s.length - 1] === ' ') return lengthOfLastWord(s.substr(0, s.length - 1), result);
        result += 1;
        return lengthOfLastWord(s.substr(0, s.length - 1), result);
    }
    if (s[s.length - 1] === ' ') return result;
    if (!s[s.length - 1]) {
        return result;
    }
    result += 1;
    return lengthOfLastWord(s.substr(0, s.length - 1), result)
};
console.log(lengthOfLastWord(s));


// const s = "a  123  ";
// var lengthOfLastWord = function (s) {
//     let result = ''
//     for (let i = 0; i < s.length; i++) {
//         if (s[s.length - 1 - i] === ' ') {
//             if (result !== '') return result.length;
//             continue;
//         }
//         result += s[s.length - 1 - i]
//     }
//     return result.length;
// };
// console.log(lengthOfLastWord(s));
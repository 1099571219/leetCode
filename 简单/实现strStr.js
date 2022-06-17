const haystack = "hello", needle = "";
var strStr = function(haystack, needle) {
    if(!haystack && !needle){return ""}
    return haystack.indexOf(needle);
};
console.log(strStr(haystack, needle));



// const haystack = "hello", needle = "ll";
// var strStr = function(haystack, needle) {
//     if(!haystack && !needle){return ""}
//     for(let i = 0; i < haystack.length; i++){
//         if(haystack[i] === needle[0]){
//             if(haystack.substr(i,needle.length)=== needle){
//                 return i
//             }
//         }
//     }
//     return -1;
// };
// console.log(strStr(haystack, needle));